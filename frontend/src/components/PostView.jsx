import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";
import * as Icons from "lucide-react";
import { ArrowLeft, FileCode2 } from "lucide-react";

function LucideByName({ name, className, strokeWidth = 1.5 }) {
  if (!name) return null;
  const Cmp = Icons[name];
  if (Cmp) return <Cmp className={className} strokeWidth={strokeWidth} />;
  if (name.length <= 4) return <span className={className}>{name}</span>;
  return null;
}

export default function PostView({ post, onClose, onTagClick }) {
  const { title, summary, tags = [], date, folder, icon, content, path } = post;

  return (
    <article
      className="max-w-3xl mx-auto"
      data-testid="markdown-post-view"
    >
      <button
        onClick={onClose}
        className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-parchment/60 hover:text-signal-cyan transition-colors mb-8"
        data-testid="post-back-button"
      >
        <ArrowLeft
          className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform"
          strokeWidth={1.8}
        />
        Back to index
      </button>

      {/* breadcrumb */}
      <div className="font-mono text-[11px] text-parchment/40 mb-6 flex items-center gap-1.5">
        <FileCode2 className="w-3.5 h-3.5" strokeWidth={1.5} />
        <span className="text-brass/80">/{folder}</span>
        <span className="text-parchment/25">/</span>
        <span className="text-signal-cyan">{path.split("/").pop()}</span>
      </div>

      <div className="flex items-start gap-4 border-b border-brass/15 pb-6 mb-8">
        {icon && (
          <span className="w-12 h-12 flex items-center justify-center border border-brass/30 bg-abyss-black text-brass shrink-0">
            <LucideByName name={icon} className="w-5 h-5" />
          </span>
        )}
        <div className="flex-1 min-w-0">
          <h1 className="font-mono text-3xl md:text-4xl text-parchment leading-tight tracking-tight">
            {title}
          </h1>
          {summary && (
            <p className="mt-3 text-parchment/65 text-base leading-relaxed font-sans">
              {summary}
            </p>
          )}
          <div className="mt-4 flex items-center gap-3 flex-wrap">
            {date && (
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-parchment/45">
                {date}
              </span>
            )}
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => onTagClick?.(t)}
                className="px-2.5 py-0.5 text-[10px] font-mono border border-signal-teal/40 bg-signal-teal/5 text-signal-cyan/90 hover:bg-signal-cyan/15 hover:border-signal-cyan transition-colors"
                data-testid={`post-tag-${t.replace(/\s+/g, "-").toLowerCase()}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="prose-ide" data-testid="post-markdown-body">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {content || ""}
        </ReactMarkdown>
      </div>
    </article>
  );
}
