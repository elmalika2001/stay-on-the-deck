import { Link, useLocation } from "react-router-dom";
import { Anchor, Languages } from "lucide-react";
import { useLang } from "../contexts/LangContext";

export default function Navbar() {
  const { pathname } = useLocation();
  const { lang, setLang, t } = useLang();
  const onLog = pathname.startsWith("/log");
  const onStory = pathname.startsWith("/story");
  const isDark = onLog || onStory;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 px-6 md:px-10 py-4 flex items-center justify-between transition-colors duration-500 ${
        isDark
          ? "bg-abyss-black/90 border-b border-brass/10 backdrop-blur-sm"
          : "bg-transparent"
      }`}
      data-testid="global-navbar"
    >
      <Link to="/" className="flex items-center gap-2 group" data-testid="nav-link-home">
        <Anchor
          className="w-4 h-4 text-brass group-hover:rotate-12 transition-transform"
          strokeWidth={1.5}
        />
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-parchment/90 group-hover:text-brass transition-colors">
          Naval / Depth
        </span>
      </Link>
      <div className="flex items-center gap-4 md:gap-8">
        <Link
          to="/"
          className={`font-mono text-[11px] uppercase tracking-[0.25em] brass-underline ${
            !onLog && !onStory ? "text-brass" : "text-parchment/70 hover:text-parchment"
          }`}
          data-testid="nav-link-surface"
        >
          {t("nav.surface")}
        </Link>
        <Link
          to="/story"
          className={`font-mono text-[11px] uppercase tracking-[0.25em] brass-underline ${
            onStory ? "text-brass" : "text-parchment/70 hover:text-parchment"
          }`}
          data-testid="nav-link-story"
        >
          {t("nav.story")}
        </Link>
        <Link
          to="/log"
          className={`font-mono text-[11px] uppercase tracking-[0.25em] brass-underline ${
            onLog ? "text-signal-cyan" : "text-parchment/70 hover:text-parchment"
          }`}
          data-testid="nav-link-log"
        >
          {t("nav.log")}
        </Link>
        <button
          onClick={() => setLang(lang === "en" ? "ar" : "en")}
          className="ms-2 inline-flex items-center gap-1.5 border border-parchment/20 hover:border-brass hover:text-brass px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-parchment/70 transition-colors"
          data-testid="lang-toggle"
          aria-label="Toggle language"
        >
          <Languages className="w-3 h-3" strokeWidth={1.8} />
          {t("nav.toggle_lang")}
        </button>
      </div>
    </nav>
  );
}
