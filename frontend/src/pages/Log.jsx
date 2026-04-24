import { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Search,
  ChevronRight,
  ChevronDown,
  RefreshCw,
  FolderGit2,
  Compass,
  BookMarked,
  Archive as ArchiveIcon,
  FileText,
} from "lucide-react";
import PostCard from "../components/PostCard";
import PostView from "../components/PostView";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const FOLDER_META = {
  Projects: { icon: FolderGit2, hint: "Active pursuits with a clear end." },
  Areas: { icon: Compass, hint: "Ongoing standards to maintain." },
  Resources: { icon: BookMarked, hint: "Topics worth studying." },
  Archives: { icon: ArchiveIcon, hint: "Finished or abandoned." },
};

export default function Log() {
  const { folder: routeFolder, slug: routeSlug } = useParams();
  const navigate = useNavigate();

  const [tree, setTree] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState(null);
  const [expanded, setExpanded] = useState({
    Projects: true,
    Areas: true,
    Resources: true,
    Archives: true,
  });
  const [refreshing, setRefreshing] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [postLoading, setPostLoading] = useState(false);

  // Load tree on mount
  useEffect(() => {
    document.title = "Naval Depth · /log";
    fetchTree();
  }, []);

  async function fetchTree() {
    try {
      setLoading(true);
      const { data } = await axios.get(`${API}/log/tree`);
      setTree(data);
      setError(null);
    } catch (e) {
      setError(e?.message || "Failed to load log.");
    } finally {
      setLoading(false);
    }
  }

  async function handleRefresh() {
    try {
      setRefreshing(true);
      await axios.post(`${API}/log/refresh`);
      await fetchTree();
    } finally {
      setRefreshing(false);
    }
  }

  // Open post from URL
  useEffect(() => {
    async function loadFromRoute() {
      if (!routeFolder || !routeSlug) {
        setSelectedPost(null);
        return;
      }
      try {
        setPostLoading(true);
        const path = `${routeFolder}/${routeSlug}.md`;
        const { data } = await axios.get(`${API}/log/post`, { params: { path } });
        setSelectedPost(data);
      } catch (e) {
        setSelectedPost(null);
      } finally {
        setPostLoading(false);
      }
    }
    loadFromRoute();
  }, [routeFolder, routeSlug]);

  // Derived: all unique tags across posts
  const allTags = useMemo(() => {
    if (!tree?.posts) return [];
    const s = new Set();
    tree.posts.forEach((p) => (p.tags || []).forEach((t) => s.add(t)));
    return Array.from(s).sort();
  }, [tree]);

  // Derived: filtered posts
  const filteredPosts = useMemo(() => {
    if (!tree?.posts) return [];
    const q = query.trim().toLowerCase();
    return tree.posts.filter((p) => {
      const matchesQ =
        !q ||
        p.title.toLowerCase().includes(q) ||
        (p.summary || "").toLowerCase().includes(q) ||
        (p.tags || []).some((t) => t.toLowerCase().includes(q)) ||
        p.folder.toLowerCase().includes(q);
      const matchesTag = !activeTag || (p.tags || []).includes(activeTag);
      return matchesQ && matchesTag;
    });
  }, [tree, query, activeTag]);

  // Group filtered posts by folder for sidebar counts
  const countsByFolder = useMemo(() => {
    const m = { Projects: 0, Areas: 0, Resources: 0, Archives: 0 };
    filteredPosts.forEach((p) => (m[p.folder] = (m[p.folder] || 0) + 1));
    return m;
  }, [filteredPosts]);

  function openPost(p) {
    navigate(`/log/${p.folder}/${p.slug}`);
  }
  function closePost() {
    navigate("/log");
  }

  return (
    <div
      className="min-h-screen bg-ink-navy text-parchment pt-14"
      data-testid="log-root"
    >
      <div className="flex min-h-[calc(100vh-56px)]">
        {/* ============== SIDEBAR ============== */}
        <aside
          className="hidden md:flex flex-col w-72 border-r border-brass/10 bg-abyss-black sticky top-14 h-[calc(100vh-56px)]"
          data-testid="log-sidebar"
        >
          <div className="px-5 pt-6 pb-4 border-b border-brass/10">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brass/80 mb-2">
              Explorer
            </div>
            <div className="font-mono text-xs text-parchment/50">
              {tree?.repo ? (
                <>
                  <span className="text-signal-cyan">{tree.repo.owner}</span>
                  <span>/</span>
                  <span className="text-parchment/80">{tree.repo.name}</span>
                  <span className="text-parchment/30">@{tree.repo.branch}</span>
                </>
              ) : (
                "loading…"
              )}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto py-3">
            {["Projects", "Areas", "Resources", "Archives"].map((f) => {
              const Meta = FOLDER_META[f].icon;
              const isOpen = expanded[f];
              const posts = tree?.folders?.[f] || [];
              const visible = posts.filter((p) => filteredPosts.includes(p));
              return (
                <div
                  key={f}
                  className="mb-1"
                  data-testid={`para-folder-${f.toLowerCase()}`}
                >
                  <button
                    onClick={() => setExpanded((s) => ({ ...s, [f]: !s[f] }))}
                    className="w-full flex items-center gap-2 px-4 py-2 text-left group hover:bg-midnight-navy/60 transition-colors"
                    data-testid={`para-folder-toggle-${f.toLowerCase()}`}
                  >
                    {isOpen ? (
                      <ChevronDown className="w-3.5 h-3.5 text-brass" strokeWidth={2} />
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5 text-brass" strokeWidth={2} />
                    )}
                    <Meta className="w-3.5 h-3.5 text-signal-cyan/80" strokeWidth={1.5} />
                    <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-parchment flex-1">
                      {f}
                    </span>
                    <span className="font-mono text-[10px] text-parchment/40">
                      {countsByFolder[f] ?? posts.length}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="ml-8 border-l border-brass/10">
                      {posts.length === 0 && (
                        <div className="pl-3 py-2 font-mono text-[11px] text-parchment/30 italic">
                          empty
                        </div>
                      )}
                      {posts.map((p) => {
                        const dimmed = !visible.includes(p);
                        const active =
                          selectedPost?.path?.toLowerCase() === p.path.toLowerCase();
                        return (
                          <button
                            key={p.path}
                            onClick={() => openPost(p)}
                            className={`w-full text-left pl-3 pr-3 py-1.5 flex items-center gap-2 hover:bg-midnight-navy/60 transition-colors ${
                              dimmed ? "opacity-35" : ""
                            } ${active ? "bg-signal-cyan/10 border-l-2 -ml-px border-signal-cyan" : ""}`}
                            data-testid={`sidebar-post-${p.slug}`}
                          >
                            <FileText
                              className={`w-3 h-3 ${active ? "text-signal-cyan" : "text-parchment/40"}`}
                              strokeWidth={1.5}
                            />
                            <span
                              className={`font-mono text-[11px] truncate ${
                                active ? "text-signal-cyan" : "text-parchment/70"
                              }`}
                            >
                              {p.title}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="border-t border-brass/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-parchment/50 flex items-center justify-between">
            <span>
              Source:{" "}
              <span className={tree?.source === "github" ? "text-signal-cyan" : "text-brass"}>
                {tree?.source || "…"}
              </span>
            </span>
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="hover:text-brass transition-colors flex items-center gap-1.5"
              data-testid="sidebar-refresh-button"
              title="Refresh from GitHub"
            >
              <RefreshCw
                className={`w-3 h-3 ${refreshing ? "animate-spin" : ""}`}
                strokeWidth={1.8}
              />
              Sync
            </button>
          </div>
        </aside>

        {/* ============== MAIN ============== */}
        <main className="flex-1 min-w-0" data-testid="log-main">
          {/* Command palette + filters */}
          <div className="sticky top-14 z-30 bg-ink-navy/95 backdrop-blur-sm border-b border-brass/10 px-6 md:px-10 py-5">
            <div className="flex items-center gap-3">
              <div className="relative flex-1 max-w-2xl">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-parchment/40"
                  strokeWidth={1.5}
                />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="› search title, summary, tags, folder…"
                  className="w-full bg-abyss-black border border-parchment/15 focus:border-signal-cyan focus:outline-none focus:ring-1 focus:ring-signal-cyan pl-10 pr-4 py-2.5 font-mono text-sm text-parchment placeholder:text-parchment/30 rounded-none"
                  data-testid="ide-search-input"
                />
              </div>
              <div className="hidden md:flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-parchment/40">
                <kbd className="px-1.5 py-0.5 border border-parchment/20">
                  {filteredPosts.length}
                </kbd>
                <span>entries</span>
              </div>
            </div>

            {allTags.length > 0 && (
              <div
                className="mt-4 flex items-center gap-2 flex-wrap"
                data-testid="tag-filter-row"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brass/70 mr-1">
                  Tags:
                </span>
                <button
                  onClick={() => setActiveTag(null)}
                  className={`px-3 py-1 text-[11px] font-mono border transition-colors ${
                    !activeTag
                      ? "border-brass text-brass bg-brass/10"
                      : "border-parchment/20 text-parchment/60 hover:text-parchment hover:border-parchment/50"
                  }`}
                  data-testid="tag-chip-all"
                >
                  all
                </button>
                {allTags.map((t) => (
                  <button
                    key={t}
                    onClick={() => setActiveTag(activeTag === t ? null : t)}
                    className={`px-3 py-1 text-[11px] font-mono border whitespace-nowrap transition-colors ${
                      activeTag === t
                        ? "border-signal-cyan text-signal-cyan bg-signal-cyan/10"
                        : "border-signal-teal/30 text-signal-cyan/80 bg-signal-teal/5 hover:bg-signal-teal/10"
                    }`}
                    data-testid={`tag-chip-${t.replace(/\s+/g, "-").toLowerCase()}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="px-6 md:px-10 py-10">
            {loading && (
              <div
                className="font-mono text-sm text-parchment/50"
                data-testid="log-loading"
              >
                <span className="text-signal-cyan">$</span> fetching tree
                <span className="animate-blink ml-1">▌</span>
              </div>
            )}

            {error && !loading && (
              <div
                className="font-mono text-sm text-red-400 border border-red-400/30 bg-red-400/5 p-4"
                data-testid="log-error"
              >
                ! error: {error}
              </div>
            )}

            {!loading && !error && selectedPost && (
              <PostView
                post={selectedPost}
                onClose={closePost}
                onTagClick={(t) => {
                  setActiveTag(t);
                  closePost();
                }}
              />
            )}

            {!loading && !error && !selectedPost && (
              <>
                {tree?.source === "seed" && (
                  <div
                    className="mb-8 border border-brass/30 bg-brass/5 text-brass/90 p-4 font-mono text-xs leading-relaxed"
                    data-testid="seed-banner"
                  >
                    <span className="text-brass">[info]</span> the target repo{" "}
                    <span className="text-signal-cyan">
                      {tree.repo?.owner}/{tree.repo?.name}
                    </span>{" "}
                    is empty — showing sample entries. commit markdown files to{" "}
                    <span className="text-signal-cyan">
                      /Projects · /Areas · /Resources · /Archives
                    </span>{" "}
                    and hit sync.
                  </div>
                )}

                {["Projects", "Areas", "Resources", "Archives"].map((f) => {
                  const visible = filteredPosts.filter((p) => p.folder === f);
                  if (visible.length === 0) return null;
                  return (
                    <section
                      key={f}
                      className="mb-12"
                      data-testid={`section-${f.toLowerCase()}`}
                    >
                      <div className="flex items-baseline justify-between mb-5">
                        <h2 className="font-mono text-sm uppercase tracking-[0.3em] text-brass">
                          /{f}
                        </h2>
                        <span className="font-mono text-[10px] text-parchment/40">
                          {visible.length} {visible.length === 1 ? "entry" : "entries"} ·{" "}
                          <span className="text-parchment/60">
                            {FOLDER_META[f].hint}
                          </span>
                        </span>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {visible.map((p) => (
                          <PostCard key={p.path} post={p} onOpen={() => openPost(p)} />
                        ))}
                      </div>
                    </section>
                  );
                })}

                {filteredPosts.length === 0 && (
                  <div
                    className="font-mono text-sm text-parchment/50 border border-parchment/15 p-8 text-center"
                    data-testid="log-empty"
                  >
                    <div className="text-brass mb-2">
                      $ find . -name &quot;*.md&quot;
                    </div>
                    <div className="text-parchment/60">
                      0 results matching <span className="text-signal-cyan">&quot;{query}&quot;</span>
                      {activeTag && (
                        <>
                          {" "}
                          with tag <span className="text-signal-cyan">{activeTag}</span>
                        </>
                      )}
                      <span className="animate-blink ml-1">▌</span>
                    </div>
                  </div>
                )}
              </>
            )}

            {postLoading && (
              <div className="font-mono text-sm text-parchment/50">
                <span className="text-signal-cyan">$</span> loading post
                <span className="animate-blink ml-1">▌</span>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
