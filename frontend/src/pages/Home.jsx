import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, Compass, FolderTree, ArrowUpRight } from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1621451787112-888885307a8c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwzfHxtb29keSUyMGRlZXAlMjBzZWElMjBvY2VhbnxlbnwwfHx8fDE3NzcwNjg2NjR8MA&ixlib=rb-4.1.0&q=85";
const COMPASS_IMG =
  "https://images.unsplash.com/photo-1672186466193-d3f05e40f112?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwzfHx2aW50YWdlJTIwYnJhc3MlMjBjb21wYXNzJTIwbmF2aWdhdGlvbnxlbnwwfHx8fDE3NzcwNjg2NjR8MA&ixlib=rb-4.1.0&q=85";
const SEA_IMG =
  "https://images.pexels.com/photos/25811744/pexels-photo-25811744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const COMPASS_ALT =
  "https://images.unsplash.com/photo-1769776400503-6ad467d68ac3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYnJhc3MlMjBjb21wYXNzJTIwbmF2aWdhdGlvbnxlbnwwfHx8fDE3NzcwNjg2NjR8MA&ixlib=rb-4.1.0&q=85";

function SmallLabel({ children, testid }) {
  return (
    <span
      className="inline-flex items-center gap-2 text-[10px] md:text-[11px] font-mono uppercase tracking-[0.35em] text-brass/80"
      data-testid={testid}
    >
      <span className="w-6 h-px bg-brass/60" />
      {children}
    </span>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 200]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.3]);
  const heroScale = useTransform(scrollY, [0, 800], [1, 1.1]);

  useEffect(() => {
    document.title = "Naval Depth · Surface";
  }, []);

  return (
    <div
      className="bg-abyss-black text-parchment min-h-screen"
      data-testid="home-root"
    >
      {/* ======================= HERO ======================= */}
      <section
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden vignette"
        data-testid="hero-section"
      >
        <motion.div
          style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <img
            src={HERO_IMG}
            alt="Moody deep sea"
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-abyss-black/60 via-abyss-black/30 to-abyss-black" />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col justify-between px-6 md:px-16 pt-28 pb-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="flex items-center justify-between"
          >
            <SmallLabel testid="hero-coord-label">N 51° 30′ 26″ · W 0° 7′ 39″</SmallLabel>
            <SmallLabel testid="hero-edition-label">Edition MMXXVI · Fathom I</SmallLabel>
          </motion.div>

          <div className="max-w-6xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1] }}
              className="font-serif text-[18vw] md:text-[13vw] leading-[0.88] tracking-tight text-parchment"
              data-testid="hero-title"
            >
              Naval<span className="italic font-light text-brass"> Depth</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="mt-6 md:mt-10 max-w-xl text-base md:text-lg text-parchment/75 leading-relaxed"
              data-testid="hero-subtitle"
            >
              A long-form field journal — part portfolio, part garden. Built for
              the patient reader who still believes in depth, in craft, in the
              sea.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6"
          >
            <div className="flex items-center gap-3 text-parchment/70">
              <ArrowDownRight
                className="w-4 h-4 text-brass animate-pulse"
                strokeWidth={1.5}
              />
              <span className="font-mono text-[11px] uppercase tracking-[0.3em]">
                Scroll — descend
              </span>
            </div>
            <Link
              to="/log"
              className="group flex items-center gap-3 border border-brass/40 px-5 py-3 hover:bg-brass hover:text-abyss-black transition-all duration-500"
              data-testid="hero-cta-log"
            >
              <FolderTree className="w-4 h-4" strokeWidth={1.5} />
              <span className="font-mono text-[11px] uppercase tracking-[0.3em]">
                Enter the log
              </span>
              <ArrowUpRight
                className="w-3.5 h-3.5 -translate-y-px group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                strokeWidth={1.5}
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ======================= BEAT 1 — manifesto ======================= */}
      <section
        className="relative px-6 md:px-16 py-28 md:py-40 border-t border-brass/10"
        data-testid="beat-manifesto"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <SmallLabel testid="beat1-chapter">Chapter I · Premise</SmallLabel>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.1, ease: [0.19, 1, 0.22, 1] }}
            className="md:col-span-9"
          >
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] text-parchment">
              Most of the internet is <span className="italic text-brass">surface</span>.
              <br />
              This one has <span className="italic text-brass">depth</span>.
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 text-parchment/80 leading-relaxed text-lg max-w-4xl">
              <p>
                I keep a journal the way sailors kept logs — hand-written,
                dated, honest. Projects, Areas, Resources, Archives. Four
                compartments. A method to stop the mind from drifting.
              </p>
              <p>
                This site reads those logs directly from a public repository and
                renders them as a garden. Every commit I make shows up here.
                Nothing is lost. Nothing is staged.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================= BEAT 2 — compass / method ======================= */}
      <section
        className="relative px-6 md:px-16 py-28 md:py-40 border-t border-brass/10 overflow-hidden"
        data-testid="beat-compass"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1 }}
            className="md:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <img
                src={COMPASS_IMG}
                alt="Vintage brass compass"
                className="w-full h-full object-cover grayscale-[25%] contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abyss-black via-transparent to-transparent" />
            </div>
            <SmallLabel testid="beat2-plate">Plate · 07 — Brass &amp; Bone</SmallLabel>
          </motion.div>

          <div className="md:col-span-7 md:pl-10">
            <SmallLabel testid="beat2-chapter">Chapter II · Method</SmallLabel>
            <h3 className="mt-4 font-serif text-3xl md:text-5xl leading-tight text-parchment">
              The PARA method as a <span className="italic text-brass">compass</span>.
            </h3>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 font-mono">
              {[
                { k: "P", n: "Projects", d: "Active pursuits with a clear end." },
                { k: "A", n: "Areas", d: "Ongoing standards to maintain." },
                { k: "R", n: "Resources", d: "Topics I want to study." },
                { k: "A", n: "Archives", d: "Finished or abandoned." },
              ].map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="border-l border-brass/40 pl-4"
                  data-testid={`para-card-${c.n.toLowerCase()}`}
                >
                  <div className="text-brass text-5xl md:text-6xl font-serif leading-none">
                    {c.k}
                  </div>
                  <div className="mt-3 text-[11px] uppercase tracking-[0.25em] text-parchment">
                    {c.n}
                  </div>
                  <div className="mt-2 text-xs text-parchment/60 leading-relaxed font-sans">
                    {c.d}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================= BEAT 3 — quote / atmosphere ======================= */}
      <section
        className="relative px-6 md:px-16 py-32 md:py-52 border-t border-brass/10 overflow-hidden"
        data-testid="beat-quote"
      >
        <div
          className="absolute inset-0 -z-0 opacity-25"
          style={{
            backgroundImage: `url(${SEA_IMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(2px) saturate(0.7)",
          }}
        />
        <div className="absolute inset-0 bg-abyss-black/70 -z-0" />
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2 }}
          className="relative max-w-5xl font-serif italic text-3xl md:text-6xl leading-[1.15] text-parchment"
        >
          <span className="text-brass not-italic font-sans font-light text-6xl md:text-8xl mr-2 align-top">
            &ldquo;
          </span>
          We are tied to the ocean. And when we go back to the sea — whether it
          is to sail or to watch — we are going back from whence we came.
          <footer className="mt-10 font-mono not-italic text-[11px] uppercase tracking-[0.3em] text-brass/90">
            — John F. Kennedy
          </footer>
        </motion.blockquote>
      </section>

      {/* ======================= BEAT 4 — enter the log ======================= */}
      <section
        className="relative px-6 md:px-16 py-28 md:py-40 border-t border-brass/10"
        data-testid="beat-cta"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <SmallLabel testid="beat4-chapter">Chapter III · Dive</SmallLabel>
            <h3 className="mt-4 font-serif text-4xl md:text-6xl leading-[1.05] text-parchment">
              Surface is ending.
              <br />
              The <span className="italic text-brass">log</span> begins below.
            </h3>
            <p className="mt-8 max-w-xl text-parchment/70 text-lg leading-relaxed">
              From here on, the atmosphere changes. Cormorant yields to Plex
              Mono. Parchment to cyan. The cinematic becomes the technical.
            </p>
          </div>
          <div className="md:col-span-5 flex md:justify-end">
            <Link
              to="/log"
              className="group relative inline-flex items-center gap-4 bg-brass text-abyss-black px-8 py-5 hover:bg-parchment transition-all duration-500"
              data-testid="beat-cta-log-button"
            >
              <Compass className="w-5 h-5" strokeWidth={1.5} />
              <span className="font-mono text-xs uppercase tracking-[0.3em] font-semibold">
                Descend to /log
              </span>
              <ArrowUpRight
                className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ======================= FOOTER ======================= */}
      <footer
        className="relative px-6 md:px-16 py-16 border-t border-brass/10"
        data-testid="home-footer"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="font-serif text-6xl md:text-9xl leading-none text-parchment/30">
              Depth.
            </div>
          </div>
          <div className="flex flex-col gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-parchment/50">
            <div>Soundings · MMXXVI</div>
            <div>
              Built on GitHub &middot;{" "}
              <a
                href="https://github.com/elmalika2001/port"
                target="_blank"
                rel="noreferrer"
                className="text-brass brass-underline"
                data-testid="footer-repo-link"
              >
                elmalika2001/port
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
