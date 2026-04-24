import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDownRight,
  Compass,
  ArrowUpRight,
  Anchor,
  GraduationCap,
  Users,
  Globe2,
} from "lucide-react";

const SEA_HERO =
  "https://images.unsplash.com/photo-1621451787112-888885307a8c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwzfHxtb29keSUyMGRlZXAlMjBzZWElMjBvY2VhbnxlbnwwfHx8fDE3NzcwNjg2NjR8MA&ixlib=rb-4.1.0&q=85";
const DEEP_SEA =
  "https://images.pexels.com/photos/25811744/pexels-photo-25811744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const PORTRAIT = "/assets/portrait.jpg";
const CAMPUS = "/assets/campus.png";
const COHORT = "/assets/cohort.jpg";
const HACKSPHERE = "/assets/hacksphere.jpg";
const GCLOUD = "/assets/google-security.jpg";

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
  const portraitY = useTransform(scrollY, [0, 800], [0, -60]);

  useEffect(() => {
    document.title = "Sara Abouelkassem · Naval Depth";
  }, []);

  return (
    <div className="bg-abyss-black text-parchment min-h-screen" data-testid="home-root">
      {/* ======================= HERO ======================= */}
      <section
        ref={heroRef}
        className="relative min-h-screen w-full overflow-hidden vignette"
        data-testid="hero-section"
      >
        <motion.div
          style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <img
            src={SEA_HERO}
            alt="Moody deep sea"
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-abyss-black/70 via-abyss-black/40 to-abyss-black" />
        </motion.div>

        <div className="relative z-10 min-h-screen flex flex-col justify-between px-6 md:px-16 pt-28 pb-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="flex items-center justify-between"
          >
            <SmallLabel testid="hero-coord-label">
              N 24° 28′ · E 54° 22′ · Abu Dhabi
            </SmallLabel>
            <SmallLabel testid="hero-edition-label">
              Logbook · Edition MMXXVI
            </SmallLabel>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end pt-12">
            <div className="md:col-span-8 order-2 md:order-1">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="font-mono text-[10px] uppercase tracking-[0.3em] text-brass/70 mb-4"
                data-testid="hero-name-tag"
              >
                — Sara Abouelkassem
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1] }}
                className="font-serif text-[16vw] md:text-[10.5vw] leading-[0.88] tracking-tight text-parchment"
                data-testid="hero-title"
              >
                Naval<span className="italic font-light text-brass"> Depth</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="mt-6 md:mt-8 max-w-2xl text-base md:text-lg text-parchment/80 leading-relaxed"
                data-testid="hero-subtitle"
              >
                I once trained to navigate ships at the Arab Academy for Science,
                Technology &amp; Maritime Transport. Now I'm learning to navigate
                systems at <span className="text-brass">42 Abu Dhabi</span>.
                <br className="hidden md:block" />
                This is the logbook in between.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.7 }}
                className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.25em] text-parchment/55"
              >
                <span>
                  <span className="text-brass/80">Past ·</span> Marine Navigation,
                  AASTMT
                </span>
                <span className="hidden md:inline text-parchment/20">/</span>
                <span>
                  <span className="text-brass/80">Now ·</span> Software Cadet,
                  42 Abu Dhabi
                </span>
                <span className="hidden md:inline text-parchment/20">/</span>
                <span>
                  <span className="text-brass/80">Course ·</span> Choosing the
                  next port
                </span>
              </motion.div>
            </div>

            {/* Portrait card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4, delay: 0.6, ease: [0.19, 1, 0.22, 1] }}
              style={{ y: portraitY }}
              className="md:col-span-4 order-1 md:order-2 max-w-xs md:max-w-none mx-auto md:mx-0 w-full"
              data-testid="hero-portrait"
            >
              <div className="photo-frame relative aspect-[3/4] w-full">
                <img
                  src={PORTRAIT}
                  alt="Sara Abouelkassem — portrait at 42 Abu Dhabi"
                  className="w-full h-full object-cover photo-portrait"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-abyss-black via-abyss-black/40 to-transparent p-4 z-[3]">
                  <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-brass/80">
                    Plate 01 · 42 AD · 2025
                  </div>
                  <div className="font-serif text-xl text-parchment leading-tight mt-1">
                    Sara A.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mt-10"
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
              <Compass className="w-4 h-4" strokeWidth={1.5} />
              <span className="font-mono text-[11px] uppercase tracking-[0.3em]">
                Read the log
              </span>
              <ArrowUpRight
                className="w-3.5 h-3.5 -translate-y-px group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                strokeWidth={1.5}
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ======================= BEAT 1 — origin / two oceans ======================= */}
      <section
        className="relative px-6 md:px-16 py-28 md:py-40 border-t border-brass/10"
        data-testid="beat-origin"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <SmallLabel testid="beat1-chapter">Chapter I · Origin</SmallLabel>
            <div className="mt-3 flex items-center gap-2 text-parchment/40 font-mono text-[10px] uppercase tracking-[0.25em]">
              <Anchor className="w-3 h-3" strokeWidth={1.5} />
              <span>Two oceans</span>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.1, ease: [0.19, 1, 0.22, 1] }}
            className="md:col-span-9"
          >
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] text-parchment">
              First, the <span className="italic text-brass">sea</span>.
              <br />
              Then, the <span className="italic text-brass">silicon</span>.
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 text-parchment/80 leading-relaxed text-lg max-w-4xl">
              <p>
                I came up studying Marine Navigation at AASTMT — charts,
                bearings, the lonely arithmetic of getting a vessel from one
                coordinate to another. The sea taught me a kind of patience that
                had nothing to do with motivation.
              </p>
              <p>
                The screen, it turns out, is also an ocean. Same fog. Same need
                for reckoning. Same long stretches of nothing followed by a
                sudden landmark. I'm not switching disciplines so much as
                changing the ship.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================= BEAT 2 — campus / new harbor ======================= */}
      <section
        className="relative px-6 md:px-16 py-28 md:py-40 border-t border-brass/10 overflow-hidden"
        data-testid="beat-harbor"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1 }}
            className="md:col-span-7 relative"
          >
            <div className="photo-frame aspect-[16/10] w-full">
              <img
                src={CAMPUS}
                alt="42 Abu Dhabi campus at sunset"
                className="w-full h-full object-cover photo-naval"
              />
            </div>
            <div className="photo-caption">Plate 02 · 42 Abu Dhabi · the new harbor</div>
          </motion.div>

          <div className="md:col-span-5 md:pl-6">
            <SmallLabel testid="beat2-chapter">Chapter II · The harbor</SmallLabel>
            <h3 className="mt-4 font-serif text-3xl md:text-5xl leading-tight text-parchment">
              42 Abu Dhabi —<br />
              the harbor I sailed into.
            </h3>
            <p className="mt-6 text-parchment/75 leading-relaxed text-lg">
              No teachers. No grades. Peer-to-peer combat with C, with
              algorithms, with your own stamina. You build the ship while you're
              already at sea.
            </p>
            <div className="mt-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-brass/70">
              <GraduationCap className="w-3 h-3" strokeWidth={1.5} />
              Cadet · piscine veteran · still on deck
            </div>
          </div>
        </div>
      </section>

      {/* ======================= BEAT 3 — fellow voyagers ======================= */}
      <section
        className="relative px-6 md:px-16 py-28 md:py-40 border-t border-brass/10"
        data-testid="beat-fellowship"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 md:pr-6 order-2 md:order-1">
            <SmallLabel testid="beat3-chapter">Chapter III · Fellow voyagers</SmallLabel>
            <h3 className="mt-4 font-serif text-3xl md:text-5xl leading-tight text-parchment">
              Nobody crosses<br />
              the deep <span className="italic text-brass">alone</span>.
            </h3>
            <p className="mt-6 text-parchment/75 leading-relaxed text-lg">
              The cohort is the ship. The certificates are landmarks, not
              destinations. The real artifact is the people you can call at 3 AM
              when a segfault doesn't make sense.
            </p>
            <div className="mt-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-brass/70">
              <Users className="w-3 h-3" strokeWidth={1.5} />
              Cohort · 42 Abu Dhabi
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1 }}
            className="md:col-span-7 relative order-1 md:order-2"
          >
            <div className="photo-frame aspect-[16/11] w-full">
              <img
                src={COHORT}
                alt="42 Abu Dhabi cohort with certificates"
                className="w-full h-full object-cover photo-naval"
              />
            </div>
            <div className="photo-caption">Plate 03 · cohort · the crew</div>
          </motion.div>
        </div>
      </section>

      {/* ======================= BEAT 4 — logbook entry on failure ======================= */}
      <section
        className="relative px-6 md:px-16 py-32 md:py-52 border-t border-brass/10 overflow-hidden"
        data-testid="beat-logbook"
      >
        <div
          className="absolute inset-0 -z-0 opacity-25"
          style={{
            backgroundImage: `url(${DEEP_SEA})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(2px) saturate(0.6)",
          }}
        />
        <div className="absolute inset-0 bg-abyss-black/75 -z-0" />

        <div className="relative max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brass">
              Logbook · entry IV
            </span>
            <span className="h-px flex-1 bg-brass/30" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-parchment/50">
              On failure
            </span>
          </div>

          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2 }}
            className="font-serif italic text-2xl md:text-4xl leading-[1.25] text-parchment"
          >
            <span className="text-brass not-italic font-sans font-light text-5xl md:text-7xl mr-2 align-top">
              &ldquo;
            </span>
            I have surfaced eleven times to take the same exam. I have fallen
            back into the deep eleven times. The eleventh failure does not weigh
            more than the first — the sea does not keep score. What it teaches
            is patience, and patience is the navigator's only real instrument.
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-10 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl"
          >
            {[
              { n: "11", l: "rank-2 attempts" },
              { n: "02", l: "piscines (so far)" },
              { n: "01", l: "black hole · survived" },
            ].map((s) => (
              <div key={s.l} className="border-l border-brass/40 pl-4">
                <div className="font-serif text-5xl md:text-6xl text-brass leading-none">
                  {s.n}
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-parchment/60">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>

          <p className="mt-12 max-w-2xl text-parchment/75 leading-relaxed text-base md:text-lg">
            If you're reading this in the middle of your own crossing — the
            hundredth failed test, the rejected application, the night where
            quitting feels reasonable —{" "}
            <span className="text-brass">stay on deck.</span> The story is not
            the failure. The story is that the log keeps going.
          </p>
        </div>
      </section>

      {/* ======================= BEAT 5 — making port ======================= */}
      <section
        className="relative px-6 md:px-16 py-28 md:py-40 border-t border-brass/10"
        data-testid="beat-port"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <SmallLabel testid="beat5-chapter">Chapter V · Making port</SmallLabel>
            <h3 className="mt-4 font-serif text-3xl md:text-5xl leading-tight text-parchment">
              The world I'm <span className="italic text-brass">preparing</span> for.
            </h3>
            <p className="mt-6 text-parchment/70 leading-relaxed">
              Industry events, security floors, conversations with the people
              already doing the work. Not credentials. <em>Reconnaissance.</em>
            </p>
            <div className="mt-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-brass/70">
              <Globe2 className="w-3 h-3" strokeWidth={1.5} />
              Field · GISEC · Google Cloud Security
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="relative"
            >
              <div className="photo-frame aspect-[3/4] w-full">
                <img
                  src={HACKSPHERE}
                  alt="Sara at HackSphere · GISEC"
                  className="w-full h-full object-cover photo-naval"
                />
              </div>
              <div className="photo-caption">Plate 04 · HackSphere · GISEC</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative sm:mt-12"
            >
              <div className="photo-frame aspect-[3/4] w-full">
                <img
                  src={GCLOUD}
                  alt="Sara at Google Cloud Security booth"
                  className="w-full h-full object-cover photo-naval"
                />
              </div>
              <div className="photo-caption">Plate 05 · Google Cloud · landfall</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================= BEAT 6 — descend to log ======================= */}
      <section
        className="relative px-6 md:px-16 py-28 md:py-40 border-t border-brass/10"
        data-testid="beat-cta"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <SmallLabel testid="beat6-chapter">Chapter VI · Descend</SmallLabel>
            <h3 className="mt-4 font-serif text-4xl md:text-6xl leading-[1.05] text-parchment">
              Surface ends here.
              <br />
              The <span className="italic text-brass">log</span> begins below.
            </h3>
            <p className="mt-8 max-w-xl text-parchment/70 text-lg leading-relaxed">
              From here on, the atmosphere changes. Cormorant yields to Plex
              Mono. Parchment to cyan. Stories become entries. Read what I'm
              learning, the failures included.
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
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brass/70 mb-3">
              — Sara Abouelkassem
            </div>
            <div className="font-serif text-6xl md:text-9xl leading-none text-parchment/30">
              Stay&nbsp;on&nbsp;deck.
            </div>
          </div>
          <div className="flex flex-col gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-parchment/50">
            <div>Soundings · MMXXVI</div>
            <div>
              Logbook on GitHub ·{" "}
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
