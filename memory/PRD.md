# Naval Depth — PARA Log (PRD)

## Original problem statement
> I want the /log route to act as a digital garden organized by the PARA method. It should scan
> the GitHub repository for four main folders: Projects, Areas, Resources, and Archives.
> Inside each folder, the site should dynamically render the Markdown files as individual posts.
> Please ensure the UI for this route is clean, searchable, and displays tags (like
> "Language: C" or "Status: Debugged") extracted from the Markdown frontmatter.

User-confirmed scope (2026-01-15):
- Standalone React app with two routes.
- `/` — Realistic Cinematic / Luxury Naval aesthetic (Navy + Brass, Naval Depth theme,
  film-grain, large typography, long-scroll cinematic journey).
- `/log` — Modern IDE / Technical Documentation vibe (clean, structured, fast,
  dark theme complementary to the Naval palette).
- Target repo: https://github.com/elmalika2001/port (public, branch `main`).
- Expected PARA folders at repo root: `Projects/`, `Areas/`, `Resources/`, `Archives/`.
- Markdown frontmatter schema: `title`, `summary`, `date`, `icon` (Lucide name or emoji), `tags`.

## Architecture
- **Backend**: FastAPI (`/app/backend/server.py`)
  - `GET  /api/log/tree`  — PARA tree + lightweight post list + repo metadata.
  - `GET  /api/log/post?path=<Folder>/<slug>.md` — full parsed post with content.
  - `POST /api/log/refresh` — clear cache + refetch.
  - `GET  /api/` — service info.
  - GitHub REST v3 via `httpx`, YAML frontmatter parsed with `python-frontmatter`.
  - In-memory cache with TTL `GITHUB_CACHE_TTL` (default 300s).
  - Fallback seed content (7 posts across all 4 PARA folders) when repo is empty.
  - Optional env vars: `GITHUB_TOKEN` (higher rate limit), `GITHUB_REPO_OWNER`,
    `GITHUB_REPO_NAME`, `GITHUB_BRANCH`.
- **Frontend**: React 19 + React Router 7
  - `framer-motion` for scroll/parallax animations on Home.
  - `react-markdown` + `remark-gfm` + `rehype-highlight` + `highlight.js` for rendering.
  - Fonts: Cormorant Garamond, Outfit, IBM Plex Mono, JetBrains Mono, Satoshi.
  - Pages: `Home.jsx`, `Log.jsx`. Components: `Navbar`, `FilmGrain`, `PostCard`, `PostView`.
  - Tailwind extended with naval tokens (`ink-navy`, `abyss-black`, `brass`,
    `parchment`, `signal-cyan`, `signal-teal`).

## Implemented (2026-01-15)
- Cinematic Naval Depth home with hero + 4 scroll beats (manifesto, compass/PARA,
  JFK quote, CTA) + footer.
- IDE-style `/log` with PARA sidebar explorer, command-palette search input,
  tag filter chips, seed banner, section-grouped post cards.
- Single-post view with breadcrumb, frontmatter tag badges, rendered Markdown
  (syntax-highlighted code, tables, quotes).
- Deep-linkable post URLs `/log/:folder/:slug`.
- Sync/Refresh button that clears cache and refetches from GitHub.
- Graceful seed-mode when repo is empty (explicit banner indicates seed data).
- 100% backend + 100% frontend tests passing (iteration_1.json).

## User personas
- **Sailor-writer (primary)**: keeps long-form notes in a Git-versioned PARA vault,
  wants a portfolio that *is* the vault — no double entry.
- **Curious visitor**: reads the cinematic home, descends to the log, scans by
  tag and folder, opens individual entries.

## Prioritized backlog
- **P0 (done)**: Cinematic home, PARA `/log` with search + tags, Markdown render,
  deep links, seed fallback.
- **P1**: Add `GITHUB_TOKEN` to `.env` once user provides one (for 5k/hr quota).
  Commit initial markdown files to `elmalika2001/port` to flip source → `github`.
- **P2**: RSS/Atom feed at `/api/log/feed.xml`, keyboard command palette (⌘K),
  per-post permalink copy, share card OG images, reading-time estimates.
- **P3**: Webhook endpoint to auto-bust cache on `push` events; client-side
  PWA caching; dark/light theme toggle for the log route.

## Next action items
- Commit markdown files to the target repo under `/Projects`, `/Areas`,
  `/Resources`, `/Archives` using the frontmatter schema above — the site picks
  them up automatically (or hit the Sync button).
- Optional: set `GITHUB_TOKEN` in `/app/backend/.env` to lift the rate limit
  from 60 to 5,000 req/hr.
