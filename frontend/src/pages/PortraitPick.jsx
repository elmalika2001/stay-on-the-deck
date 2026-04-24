import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";

const VARIANTS = [
  {
    id: "original",
    file: "/assets/portrait.jpg",
    label: "A · Original (current)",
    desc: "Untouched JPEG with the studio backdrop. Edge-fade applied via CSS.",
  },
  {
    id: "cutout",
    file: "/assets/portrait-cutout.png",
    label: "B · Background removed",
    desc: "Subject isolated on pure abyss-black. Cleanest, lets the page atmosphere take over.",
  },
  {
    id: "atmospheric",
    file: "/assets/portrait-atmospheric.png",
    label: "C · Cinematic deep-sea",
    desc: "AI-painted naval atmosphere baked in — dark water, brass haze. Most dramatic.",
  },
];

export default function PortraitPick() {
  const [chosen, setChosen] = useState(
    () => localStorage.getItem("nd_portrait_pick") || "original"
  );

  useEffect(() => {
    document.title = "Pick the portrait · Naval Depth";
  }, []);

  return (
    <div className="min-h-screen bg-abyss-black text-parchment pt-24 pb-24 px-6 md:px-10" data-testid="pick-root">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-parchment/55 hover:text-brass transition-colors"
          data-testid="pick-back"
        >
          <ArrowLeft className="w-3 h-3" strokeWidth={1.8} />
          Back to surface
        </Link>

        <div className="mt-10">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brass/80 flex items-center gap-3">
            <span className="w-8 h-px bg-brass/60" />
            Editor's pick
          </div>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl leading-[1.05] text-parchment">
            Pick the <span className="italic text-brass">portrait</span>.
          </h1>
          <p className="mt-4 text-parchment/65 max-w-2xl text-base md:text-lg leading-relaxed">
            Three plates. Click any one to set it as the hero portrait across the site.
            Your choice is remembered locally — change it any time.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {VARIANTS.map((v) => {
            const active = chosen === v.id;
            return (
              <button
                key={v.id}
                onClick={() => {
                  setChosen(v.id);
                  localStorage.setItem("nd_portrait_pick", v.id);
                }}
                className={`group text-left relative border transition-all duration-300 ${
                  active
                    ? "border-brass shadow-[0_0_0_3px_rgba(212,175,55,0.15)]"
                    : "border-brass/15 hover:border-brass/60"
                }`}
                data-testid={`pick-card-${v.id}`}
              >
                <div className="relative aspect-[3/4] w-full bg-ink-navy overflow-hidden">
                  <img
                    src={v.file}
                    alt={v.label}
                    className="w-full h-full object-cover"
                  />
                  {active && (
                    <div className="absolute top-3 right-3 bg-brass text-abyss-black w-8 h-8 flex items-center justify-center">
                      <Check className="w-4 h-4" strokeWidth={2.5} />
                    </div>
                  )}
                </div>
                <div className="p-4 bg-midnight-navy/80">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brass/80">
                    {v.label}
                  </div>
                  <p className="mt-2 text-parchment/70 text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-12 border-t border-brass/15 pt-8 font-mono text-[11px] uppercase tracking-[0.25em] text-parchment/55">
          Currently active:{" "}
          <span className="text-brass">
            {VARIANTS.find((v) => v.id === chosen)?.label}
          </span>
          <span className="mx-3 text-parchment/20">·</span>
          <Link to="/" className="text-signal-cyan hover:text-brass transition-colors brass-underline">
            See it on the home page →
          </Link>
        </div>
      </div>
    </div>
  );
}
