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

## Implemented (2026-01-15 → 2026-01-16)

### v1 — scaffold
- Cinematic Naval Depth home with hero + scroll beats + footer.
- IDE-style `/log` with PARA sidebar explorer, command-palette search input,
  tag filter chips, seed banner, section-grouped post cards.
- Single-post view with breadcrumb, frontmatter tag badges, rendered Markdown
  (syntax-highlighted code, tables, quotes).
- Deep-linkable post URLs `/log/:folder/:slug`.
- Sync/Refresh button that clears cache and refetches from GitHub.
- Graceful seed-mode when repo is empty (explicit banner indicates seed data).
- 100% backend + 100% frontend tests passing (iteration_1.json).

### v2 — Sara's story (personal pass)
- Replaced anonymous naval narrative with Sara Abouelkassem's real journey:
  AASTMT Marine Navigation → 42 Abu Dhabi software cadet → between ports.
- 5 personal photos integrated and locally hosted at
  `/app/frontend/public/assets/`:
  - `portrait.jpg` — hero portrait (Plate 01).
  - `campus.png` — 42 Abu Dhabi facade (Plate 02 · "the new harbor").
  - `cohort.jpg` — cohort with certificates (Plate 03 · "the crew").
  - `hacksphere.jpg` — GISEC HackSphere (Plate 04 · VISITOR badge intact).
  - `google-security.jpg` — Google Cloud Security booth (Plate 05 · landfall).
- Photo treatment via `.photo-naval` CSS class — saturate(0.7) + contrast +
  navy multiply overlay — to harmonize vivid event photos with the moody palette
  while keeping the portrait luminous.
- New scroll structure: I Origin → II The Harbor → III Fellow Voyagers
  → IV Logbook · On Failure (the 11 / 02 / 01 stats + "stay on deck" passage)
  → V Making Port → VI Descend.
- Coordinates updated to Abu Dhabi (N 24°28′ · E 54°22′).
- Footer signature: "Stay on deck. — Sara Abouelkassem".

## User personas
- **Sara (owner)**: 42 Abu Dhabi cadet, ex-marine-navigation student, currently
  between ports. Wants the site to honor the full arc — including the eleven
  rank-2 attempts and the black hole — as a story that might help someone else
  navigating the same waters.
- **Recruiter / mentor visitor**: sees the cinematic story first, then descends
  into `/log` to verify substance via real, dated, tagged technical entries.
- **Fellow cadet in the dark**: lands on the failure logbook entry, reads "stay
  on deck", maybe doesn't quit that night.

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
