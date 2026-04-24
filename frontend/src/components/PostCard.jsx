import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";

function LucideByName({ name, className, strokeWidth = 1.5 }) {
  if (!name) return null;
  // Lucide component names are PascalCase
  const Cmp = Icons[name];
  if (Cmp) return <Cmp className={className} strokeWidth={strokeWidth} />;
  // If the string is short (likely an emoji) render as text
  if (name.length <= 4) return <span className={className}>{name}</span>;
  return null;
}

export default function PostCard({ post, onOpen }) {
  const { title, summary, tags = [], date, folder, icon, slug } = post;
  return (
    <button
      onClick={onOpen}
      className="group text-left w-full bg-midnight-navy/60 hover:bg-midnight-navy border border-brass/10 hover:border-signal-cyan/60 p-5 transition-all duration-300 relative"
      data-testid={`post-card-${slug}`}
    >
      <div className="absolute top-0 left-0 h-full w-0.5 bg-signal-cyan scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />

      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          {icon ? (
            <span className="w-9 h-9 flex items-center justify-center border border-brass/25 bg-abyss-black text-brass shrink-0">
              <LucideByName name={icon} className="w-4 h-4" />
            </span>
          ) : (
            <span className="w-9 h-9 flex items-center justify-center border border-brass/25 bg-abyss-black text-brass/60 font-mono text-xs shrink-0">
              .md
            </span>
          )}
          <div className="min-w-0">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-parchment/40">
              /{folder}
              {date && (
                <>
                  {" "}
                  <span className="text-parchment/20">·</span> {date}
                </>
              )}
            </div>
            <h3 className="font-sans text-lg md:text-xl text-parchment group-hover:text-signal-cyan transition-colors truncate mt-0.5">
              {title}
            </h3>
          </div>
        </div>
        <ArrowUpRight
          className="w-4 h-4 text-parchment/40 group-hover:text-signal-cyan group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0 mt-1"
          strokeWidth={1.5}
        />
      </div>

      {summary && (
        <p className="mt-3 text-sm text-parchment/65 leading-relaxed line-clamp-2">
          {summary}
        </p>
      )}

      {tags.length > 0 && (
        <div className="mt-4 flex items-center gap-1.5 flex-wrap">
          {tags.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[10px] font-mono border border-signal-teal/30 bg-signal-teal/5 text-signal-cyan/85 whitespace-nowrap"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </button>
  );
}
