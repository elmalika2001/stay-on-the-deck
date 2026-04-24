import os
import time
import logging
from pathlib import Path
from typing import List, Dict, Any, Optional

import httpx
import frontmatter
from fastapi import FastAPI, APIRouter, HTTPException, Query
from starlette.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

# MongoDB connection (kept from scaffold, unused here but available)
mongo_url = os.environ["MONGO_URL"]
mongo_client = AsyncIOMotorClient(mongo_url)
db = mongo_client[os.environ["DB_NAME"]]

# GitHub config
REPO_OWNER = os.environ.get("GITHUB_REPO_OWNER", "elmalika2001")
REPO_NAME = os.environ.get("GITHUB_REPO_NAME", "port")
BRANCH = os.environ.get("GITHUB_BRANCH", "main")
GITHUB_TOKEN = os.environ.get("GITHUB_TOKEN")
FOLDERS = ["Projects", "Areas", "Resources", "Archives"]
CACHE_TTL = int(os.environ.get("GITHUB_CACHE_TTL", "300"))

_cache: Dict[str, Any] = {"data": None, "ts": 0}

app = FastAPI(title="PARA Log API")
api_router = APIRouter(prefix="/api")


def _gh_headers(raw: bool = False) -> Dict[str, str]:
    accept = "application/vnd.github.raw+json" if raw else "application/vnd.github+json"
    h = {"Accept": accept, "X-GitHub-Api-Version": "2022-11-28"}
    if GITHUB_TOKEN:
        h["Authorization"] = f"Bearer {GITHUB_TOKEN}"
    return h


async def _list_dir(client: httpx.AsyncClient, path: str) -> List[Dict[str, Any]]:
    url = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/contents/{path}"
    r = await client.get(url, params={"ref": BRANCH}, headers=_gh_headers())
    if r.status_code in (404, 403):
        return []
    r.raise_for_status()
    data = r.json()
    return data if isinstance(data, list) else []


async def _fetch_raw(client: httpx.AsyncClient, path: str) -> Optional[str]:
    url = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/contents/{path}"
    r = await client.get(url, params={"ref": BRANCH}, headers=_gh_headers(raw=True))
    if r.status_code in (404, 403):
        return None
    r.raise_for_status()
    return r.text


def _parse_md(folder: str, name: str, raw: str) -> Dict[str, Any]:
    post = frontmatter.loads(raw)
    meta = dict(post.metadata or {})
    tags = meta.get("tags") or []
    if isinstance(tags, str):
        tags = [tags]
    slug = name[:-3] if name.endswith(".md") else name
    date_val = meta.get("date")
    return {
        "slug": slug,
        "folder": folder,
        "path": f"{folder}/{name}",
        "title": str(meta.get("title", slug)),
        "summary": str(meta.get("summary", "")),
        "icon": str(meta.get("icon", "")),
        "date": str(date_val) if date_val is not None else "",
        "tags": [str(t) for t in tags],
        "content": post.content,
    }


def _seed_tree() -> Dict[str, Any]:
    seeds = [
        {
            "folder": "Projects",
            "slug": "para-log",
            "title": "Building the PARA Log",
            "summary": "A GitHub-backed digital garden that renders Markdown as a cinematic dashboard.",
            "icon": "Notebook",
            "date": "2026-01-14",
            "tags": ["Status: In Progress", "Stack: React"],
            "content": (
                "# Building the PARA Log\n\n"
                "This project documents the creation of a cinematic portfolio with a digital garden at `/log` "
                "that reads markdown directly from a GitHub repository.\n\n"
                "## Goals\n\n"
                "- Organize notes using the **PARA** method (Projects, Areas, Resources, Archives)\n"
                "- Render markdown posts with YAML frontmatter tags\n"
                "- Provide a fast, searchable IDE-style interface\n\n"
                "```tsx\nfunction greet(name: string) {\n  return `Hello, ${name}!`;\n}\n```\n\n"
                "The log auto-refreshes from GitHub so you never have to redeploy."
            ),
        },
        {
            "folder": "Projects",
            "slug": "naval-depth-hero",
            "title": "Naval Depth Hero",
            "summary": "A cinematic single-page story beat for the home route — navy on navy, brass on black.",
            "icon": "Anchor",
            "date": "2026-01-12",
            "tags": ["Status: Debugged", "Stack: Framer Motion"],
            "content": (
                "# Naval Depth Hero\n\n"
                "The home hero uses layered navy tones, a film-grain overlay, and long-scroll parallax sections.\n\n"
                "> _We are tied to the ocean. And when we go back to the sea we are going back from whence we came._ — JFK\n"
            ),
        },
        {
            "folder": "Areas",
            "slug": "engineering-craft",
            "title": "Engineering Craft",
            "summary": "An ongoing area — maintaining code quality, systems thinking, reading source.",
            "icon": "Wrench",
            "date": "2026-01-10",
            "tags": ["Focus: Quality", "Language: Python"],
            "content": (
                "# Engineering Craft\n\n"
                "- Test-driven habits\n"
                "- Thinking in systems\n"
                "- Reading source code of libraries I depend on\n"
            ),
        },
        {
            "folder": "Areas",
            "slug": "deep-reading",
            "title": "Deep Reading",
            "summary": "Weekly non-fiction with detailed notes and long-form synthesis.",
            "icon": "BookOpen",
            "date": "2026-01-08",
            "tags": ["Cadence: Weekly", "Focus: Philosophy"],
            "content": (
                "# Deep Reading\n\n"
                "A standing weekly commitment. Current stack:\n\n"
                "1. *The Sovereign Individual*\n"
                "2. *Seeing Like a State*\n"
                "3. *Zen and the Art of Motorcycle Maintenance*\n"
            ),
        },
        {
            "folder": "Resources",
            "slug": "c-pointers",
            "title": "C Pointers — cheat sheet",
            "summary": "Quick reference for pointer arithmetic, arrays, and memory.",
            "icon": "FileCode",
            "date": "2026-01-05",
            "tags": ["Language: C", "Type: Cheatsheet"],
            "content": (
                "# C Pointers\n\n"
                "```c\nint *p = &x;\n*p = 42;\nint arr[5] = {0};\nint *q = arr; // array decays to pointer\n```\n\n"
                "- `&` takes the address\n"
                "- `*` dereferences\n"
                "- `arr[i]` is `*(arr + i)`\n"
            ),
        },
        {
            "folder": "Resources",
            "slug": "unix-signals",
            "title": "UNIX Signals",
            "summary": "POSIX signal numbers and safe handler patterns.",
            "icon": "Zap",
            "date": "2026-01-03",
            "tags": ["Topic: OS", "Language: C"],
            "content": (
                "# UNIX Signals\n\n"
                "| Signal | Meaning |\n|---|---|\n| SIGINT | Interrupt from keyboard |\n"
                "| SIGTERM | Termination request |\n| SIGKILL | Kill (cannot be caught) |\n"
            ),
        },
        {
            "folder": "Archives",
            "slug": "portfolio-2024",
            "title": "2024 Portfolio — retired",
            "summary": "Previous portfolio iteration, archived for posterity.",
            "icon": "Archive",
            "date": "2025-12-20",
            "tags": ["Status: Archived"],
            "content": (
                "# 2024 Portfolio\n\n"
                "Archived on 2025-12-20. The new cinematic naval iteration is live.\n"
            ),
        },
    ]
    folders: Dict[str, List[Dict[str, Any]]] = {f: [] for f in FOLDERS}
    all_posts: List[Dict[str, Any]] = []
    for s in seeds:
        entry = {**s, "path": f"{s['folder']}/{s['slug']}.md"}
        folders[entry["folder"]].append(entry)
        all_posts.append(entry)
    return {"folders": folders, "posts": all_posts, "source": "seed"}


async def _build_tree() -> Dict[str, Any]:
    now = time.time()
    if _cache["data"] and (now - _cache["ts"] < CACHE_TTL):
        return _cache["data"]

    folders: Dict[str, List[Dict[str, Any]]] = {f: [] for f in FOLDERS}
    all_posts: List[Dict[str, Any]] = []
    total = 0

    try:
        async with httpx.AsyncClient(timeout=20.0) as client:
            for folder in FOLDERS:
                items = await _list_dir(client, folder)
                for item in items:
                    if item.get("type") == "file" and item.get("name", "").endswith(".md"):
                        raw = await _fetch_raw(client, item["path"])
                        if raw is None:
                            continue
                        parsed = _parse_md(folder, item["name"], raw)
                        folders[folder].append(parsed)
                        all_posts.append(parsed)
                        total += 1
    except Exception as e:
        logging.warning("GitHub fetch failed: %s — falling back to seed", e)
        data = _seed_tree()
        _cache["data"] = data
        _cache["ts"] = now
        return data

    if total == 0:
        data = _seed_tree()
    else:
        # sort each folder by date desc
        for f in folders:
            folders[f].sort(key=lambda p: p.get("date", ""), reverse=True)
        all_posts.sort(key=lambda p: p.get("date", ""), reverse=True)
        data = {"folders": folders, "posts": all_posts, "source": "github"}

    _cache["data"] = data
    _cache["ts"] = now
    return data


@api_router.get("/")
async def root():
    return {"service": "PARA Log API", "repo": f"{REPO_OWNER}/{REPO_NAME}", "branch": BRANCH}


@api_router.get("/log/tree")
async def get_tree():
    data = await _build_tree()
    # Return lightweight version (without full content) for listing speed
    def strip(p: Dict[str, Any]) -> Dict[str, Any]:
        return {k: v for k, v in p.items() if k != "content"}
    return {
        "source": data["source"],
        "folders": {f: [strip(p) for p in data["folders"][f]] for f in FOLDERS},
        "posts": [strip(p) for p in data["posts"]],
        "repo": {"owner": REPO_OWNER, "name": REPO_NAME, "branch": BRANCH},
    }


@api_router.get("/log/post")
async def get_post(path: str = Query(..., description="Post path like Projects/para-log.md")):
    data = await _build_tree()
    for p in data["posts"]:
        if p["path"].lower() == path.lower():
            return p
    raise HTTPException(status_code=404, detail=f"Post not found: {path}")


@api_router.post("/log/refresh")
async def refresh():
    _cache["data"] = None
    _cache["ts"] = 0
    data = await _build_tree()
    return {"refreshed": True, "source": data["source"], "count": len(data["posts"])}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get("CORS_ORIGINS", "*").split(","),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    mongo_client.close()
