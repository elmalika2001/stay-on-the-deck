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
        # ========== PROJECTS — real 42 curriculum ==========
        {
            "folder": "Projects",
            "slug": "libft",
            "title": "Libft — rebuilding the C standard library",
            "summary": "Rank 00 · reimplementing memcpy, strlen, strtrim and dozens more, by hand, from scratch.",
            "icon": "Binary",
            "date": "2025-03-20",
            "tags": ["Language: C", "School: 42", "Rank: 00", "Status: Passed"],
            "content": (
                "# Libft\n\n"
                "The first real project at 42. Rewrite a subset of the C standard library — `libc` "
                "and more — as a static library you then carry with you through every future project.\n\n"
                "## Part I · libc reimplementations\n"
                "`ft_memset`, `ft_memcpy`, `ft_memmove`, `ft_memchr`, `ft_memcmp`, `ft_strlen`, "
                "`ft_strlcpy`, `ft_strlcat`, `ft_strchr`, `ft_strrchr`, `ft_strnstr`, `ft_strncmp`, "
                "`ft_atoi`, `ft_isalpha`, `ft_isdigit`, `ft_isalnum`, `ft_isascii`, `ft_isprint`, "
                "`ft_toupper`, `ft_tolower`, `ft_calloc`, `ft_strdup`.\n\n"
                "## Part II · additional functions\n"
                "`ft_substr`, `ft_strjoin`, `ft_strtrim`, `ft_split`, `ft_itoa`, `ft_strmapi`, "
                "`ft_striteri`, `ft_putchar_fd`, `ft_putstr_fd`, `ft_putendl_fd`, `ft_putnbr_fd`.\n\n"
                "## Part III · bonus · linked lists\n"
                "`ft_lstnew`, `ft_lstadd_front`, `ft_lstsize`, `ft_lstlast`, `ft_lstadd_back`, "
                "`ft_lstdelone`, `ft_lstclear`, `ft_lstiter`, `ft_lstmap`.\n\n"
                "```c\n"
                "size_t\tft_strlen(const char *s)\n"
                "{\n"
                "\tsize_t\ti;\n\n"
                "\ti = 0;\n"
                "\twhile (s[i])\n"
                "\t\ti++;\n"
                "\treturn (i);\n"
                "}\n"
                "```\n\n"
                "## What it actually taught me\n"
                "Libft is less about C and more about **reading specs carefully** — the man pages "
                "are the real teacher. Also: norminette. Also: the humbling moment you realise "
                "`strlcpy` is subtly different from `strncpy` and you've been guessing for a week."
            ),
        },
        {
            "folder": "Projects",
            "slug": "ft-printf",
            "title": "ft_printf — writing printf from scratch",
            "summary": "Variadic args, conversion specifiers, and the long conversation with va_list.",
            "icon": "Terminal",
            "date": "2025-05-02",
            "tags": ["Language: C", "School: 42", "Topic: Variadic", "Status: Passed"],
            "content": (
                "# ft_printf\n\n"
                "Recreate the standard `printf` — at least the core of it. The moment `va_list` "
                "stops being a mysterious macro and starts being a pointer walking across the stack.\n\n"
                "## Mandatory conversions\n"
                "- `%c` · char\n- `%s` · string\n- `%p` · pointer in hex\n- `%d` / `%i` · signed decimal\n"
                "- `%u` · unsigned decimal\n- `%x` / `%X` · hex\n- `%%` · literal percent\n\n"
                "## Core loop\n\n"
                "```c\n"
                "int\tft_printf(const char *fmt, ...)\n"
                "{\n"
                "\tva_list\tap;\n"
                "\tint\t\tlen;\n\n"
                "\tva_start(ap, fmt);\n"
                "\tlen = parse_and_print(fmt, ap);\n"
                "\tva_end(ap);\n"
                "\treturn (len);\n"
                "}\n"
                "```\n\n"
                "## What it actually taught me\n"
                "Edge cases. A thousand edge cases. `%p` with a null pointer, `%d` with INT_MIN, "
                "`%x` with zero, `%s` with a null string (undefined in the real printf, tested "
                "by 42's graders). You ship when your output matches `printf` byte-for-byte.\n\n"
                "Also — writing your own printer changes how you *read* format strings forever."
            ),
        },
        {
            "folder": "Projects",
            "slug": "get-next-line",
            "title": "get_next_line — reading a file one line at a time",
            "summary": "Static buffers, BUFFER_SIZE tradeoffs, and the classic off-by-one.",
            "icon": "FileText",
            "date": "2025-06-18",
            "tags": ["Language: C", "School: 42", "Topic: File I/O", "Status: Passed"],
            "content": (
                "# get_next_line\n\n"
                "Write a function that, given a file descriptor, returns the next line each "
                "time you call it — across calls, across file descriptors, without losing "
                "state. The data structure you choose here haunts you for the rest of the rank.\n\n"
                "## Signature\n\n"
                "```c\n"
                "char\t*get_next_line(int fd);\n"
                "```\n\n"
                "## The trick\n"
                "A **static variable** that survives between calls and holds whatever was read "
                "past the last newline — waiting to be the start of the next line. Bonus "
                "version: a static array indexed by fd so multiple files can be read in parallel.\n\n"
                "## Tradeoffs around BUFFER_SIZE\n"
                "- BUFFER_SIZE = 1 → correct but painfully slow, millions of syscalls.\n"
                "- BUFFER_SIZE = 10000000 → fast on small files, hemorrhaging memory.\n"
                "- BUFFER_SIZE = 42 → correct, fast enough, and makes the graders smile.\n\n"
                "## What it actually taught me\n"
                "Memory ownership. Who frees what. When is it safe to return a pointer into a "
                "static buffer vs. when you must `ft_strdup`. And the meditation of reading "
                "your own code in `valgrind --leak-check=full` output at 2 AM."
            ),
        },
        # ========== AREAS ==========
        {
            "folder": "Areas",
            "slug": "engineering-craft",
            "title": "Engineering craft",
            "summary": "An ongoing area — maintaining code quality, systems thinking, reading source.",
            "icon": "Wrench",
            "date": "2026-01-10",
            "tags": ["Focus: Quality", "Language: C"],
            "content": (
                "# Engineering craft\n\n"
                "- Test-driven habits\n"
                "- Thinking in systems\n"
                "- Reading source code of libraries I depend on\n"
                "- `man` before Stack Overflow\n"
                "- `valgrind` before shipping"
            ),
        },
        # ========== RESOURCES ==========
        {
            "folder": "Resources",
            "slug": "c-pointers",
            "title": "C pointers — cheat sheet",
            "summary": "Quick reference for pointer arithmetic, arrays, and memory.",
            "icon": "FileCode",
            "date": "2025-04-05",
            "tags": ["Language: C", "Type: Cheatsheet"],
            "content": (
                "# C pointers\n\n"
                "```c\n"
                "int *p = &x;        // address of x\n"
                "*p = 42;            // write through pointer\n"
                "int arr[5] = {0};\n"
                "int *q = arr;       // array decays to pointer\n"
                "arr[i] == *(arr + i); // equivalent\n"
                "```\n\n"
                "- `&` takes the address\n"
                "- `*` dereferences\n"
                "- `arr[i]` is syntactic sugar for `*(arr + i)`\n"
                "- never return a pointer to a local (stack) variable"
            ),
        },
        {
            "folder": "Resources",
            "slug": "valgrind-survival",
            "title": "Valgrind — survival kit",
            "summary": "The three flags I actually use + how to read the report without crying.",
            "icon": "Shield",
            "date": "2025-06-20",
            "tags": ["Tool: Valgrind", "Language: C", "Type: Cheatsheet"],
            "content": (
                "# Valgrind\n\n"
                "```bash\n"
                "valgrind --leak-check=full --show-leak-kinds=all --track-origins=yes ./a.out\n"
                "```\n\n"
                "## Report anatomy\n"
                "- **definitely lost** → memory you allocated and lost the reference to. Fix this.\n"
                "- **indirectly lost** → structs whose roots were definitely lost. Fix the root.\n"
                "- **still reachable** → allocated at program end, reference still held. Usually OK.\n"
                "- **possibly lost** → partial references. Investigate.\n\n"
                "The only acceptable final line at 42: `ERROR SUMMARY: 0 errors from 0 contexts`."
            ),
        },
        # ========== ARCHIVES ==========
        {
            "folder": "Archives",
            "slug": "portfolio-2024",
            "title": "2024 portfolio · retired",
            "summary": "Previous portfolio iteration, archived when Naval Depth went live.",
            "icon": "Archive",
            "date": "2025-12-28",
            "tags": ["Status: Archived"],
            "content": (
                "# 2024 portfolio\n\n"
                "Archived on 2025-12-28. The cinematic naval iteration is live — "
                "this entry is kept for history."
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
