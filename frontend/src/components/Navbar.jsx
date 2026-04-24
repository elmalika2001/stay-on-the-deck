import { Link, useLocation } from "react-router-dom";
import { Anchor } from "lucide-react";

export default function Navbar() {
  const { pathname } = useLocation();
  const onLog = pathname.startsWith("/log");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 px-6 md:px-10 py-4 flex items-center justify-between transition-colors duration-500 ${
        onLog
          ? "bg-abyss-black/90 border-b border-brass/10 backdrop-blur-sm"
          : "bg-transparent"
      }`}
      data-testid="global-navbar"
    >
      <Link
        to="/"
        className="flex items-center gap-2 group"
        data-testid="nav-link-home"
      >
        <Anchor className="w-4 h-4 text-brass group-hover:rotate-12 transition-transform" strokeWidth={1.5} />
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-parchment/90 group-hover:text-brass transition-colors">
          Naval / Depth
        </span>
      </Link>
      <div className="flex items-center gap-6 md:gap-10">
        <Link
          to="/"
          className={`font-mono text-[11px] uppercase tracking-[0.25em] brass-underline ${
            !onLog ? "text-brass" : "text-parchment/70 hover:text-parchment"
          }`}
          data-testid="nav-link-surface"
        >
          Surface
        </Link>
        <Link
          to="/log"
          className={`font-mono text-[11px] uppercase tracking-[0.25em] brass-underline ${
            onLog ? "text-signal-cyan" : "text-parchment/70 hover:text-parchment"
          }`}
          data-testid="nav-link-log"
        >
          /log
        </Link>
      </div>
    </nav>
  );
}
