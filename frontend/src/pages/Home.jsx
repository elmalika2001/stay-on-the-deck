import { useEffect, useRef, useState } from "react";
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
  BookOpen,
  Pencil,
  ScrollText,
} from "lucide-react";
import { useLang } from "../contexts/LangContext";

const SEA_HERO =
  "https://images.unsplash.com/photo-1621451787112-888885307a8c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwzfHxtb29keSUyMGRlZXAlMjBzZWElMjBvY2VhbnxlbnwwfHx8fDE3NzcwNjg2NjR8MA&ixlib=rb-4.1.0&q=85";
const DEEP_SEA =
  "https://images.pexels.com/photos/25811744/pexels-photo-25811744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const PORTRAIT_MAP = {
  original: "/assets/portrait.jpg",
  cutout: "/assets/portrait-cutout.png",
  atmospheric: "/assets/portrait-atmospheric.png",
};

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
  const { t, lang } = useLang();
  const heroRef = useRef(null);
  const [portraitVariant, setPortraitVariant] = useState(
    () => (typeof window !== "undefined" && localStorage.getItem("nd_portrait_pick")) || "original"
  );
  useEffect(() => {
    const onStorage = () => {
      setPortraitVariant(localStorage.getItem("nd_portrait_pick") || "original");
    };
    window.addEventListener("storage", onStorage);
    const interval = setInterval(onStorage, 1000);
    return () => {
      window.removeEventListener("storage", onStorage);
      clearInterval(interval);
    };
  }, []);
  const portraitSrc = PORTRAIT_MAP[portraitVariant] || PORTRAIT;
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
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-screen w-full overflow-hidden vignette"
        data-testid="hero-section"
      >
        <motion.div
          style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <img src={SEA_HERO} alt="" className="w-full h-full object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-b from-abyss-black/70 via-abyss-black/40 to-abyss-black" />
        </motion.div>

        <div className="relative z-10 min-h-screen flex flex-col justify-between px-6 md:px-16 pt-28 pb-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="flex items-center justify-between"
          >
            <SmallLabel testid="hero-coord-label">{t("hero.coords")}</SmallLabel>
            <SmallLabel testid="hero-edition-label">{t("hero.edition")}</SmallLabel>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end pt-12">
            <div className="md:col-span-8 order-2 md:order-1">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-brass mb-4"
                data-testid="hero-name-tag"
              >
                {t("hero.name")}
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1] }}
                className="font-serif text-[16vw] md:text-[10.5vw] leading-[0.88] tracking-tight text-parchment"
                data-testid="hero-title"
              >
                {t("hero.title_a")}
                <span className="italic font-light text-brass"> {t("hero.title_b")}</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="mt-6 md:mt-8 max-w-2xl text-base md:text-lg text-parchment/80 leading-relaxed"
                data-testid="hero-subtitle"
              >
                {t("hero.subtitle")}{" "}
                <span className="text-brass">42 Abu Dhabi</span>
                {t("hero.subtitle_after")}
                <br className="hidden md:block" />
                {t("hero.subtitle_line2")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.7 }}
                className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.25em] text-parchment/55"
              >
                <span>
                  <span className="text-brass/80">{t("hero.tag.past")} ·</span>{" "}
                  {t("hero.tag.past_v")}
                </span>
                <span className="hidden md:inline text-parchment/20">/</span>
                <span>
                  <span className="text-brass/80">{t("hero.tag.now")} ·</span>{" "}
                  {t("hero.tag.now_v")}
                </span>
                <span className="hidden md:inline text-parchment/20">/</span>
                <span>
                  <span className="text-brass/80">{t("hero.tag.course")} ·</span>{" "}
                  {t("hero.tag.course_v")}
                </span>
              </motion.div>
            </div>

            {/* Portrait — emerging from the deep */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.6, delay: 0.6, ease: [0.19, 1, 0.22, 1] }}
              style={{ y: portraitY }}
              className="md:col-span-4 order-1 md:order-2 max-w-xs md:max-w-none mx-auto md:mx-0 w-full"
              data-testid="hero-portrait"
            >
              <div
                className={`relative aspect-[3/4] w-full ${
                  portraitVariant === "original" ? "portrait-fade" : ""
                }`}
              >
                <img
                  src={portraitSrc}
                  alt="Sara Abouelkassem"
                  className={`w-full h-full ${
                    portraitVariant === "cutout"
                      ? "object-contain portrait-cutout-img"
                      : portraitVariant === "atmospheric"
                      ? "object-cover portrait-edited"
                      : "object-cover photo-portrait"
                  }`}
                />
              </div>
              {/* Edit portrait — discreet pencil link */}
              <Link
                to="/portrait"
                className="mt-3 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-parchment/40 hover:text-brass transition-colors"
                data-testid="edit-portrait-link"
                title="Edit portrait"
              >
                <Pencil className="w-3 h-3" strokeWidth={1.5} />
                Edit portrait
              </Link>
              <div className="mt-4 font-mono text-[9px] uppercase tracking-[0.3em] text-brass/60 text-center md:text-start">
                {t("hero.plate")}
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
                {t("hero.scroll")}
              </span>
            </div>
            <Link
              to="/log"
              className="group flex items-center gap-3 border border-brass/40 px-5 py-3 hover:bg-brass hover:text-abyss-black transition-all duration-500"
              data-testid="hero-cta-log"
            >
              <Compass className="w-4 h-4" strokeWidth={1.5} />
              <span className="font-mono text-[11px] uppercase tracking-[0.3em]">
                {t("hero.cta")}
              </span>
              <ArrowUpRight
                className="w-3.5 h-3.5 -translate-y-px group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                strokeWidth={1.5}
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* BEAT 1 — origin */}
      <section
        className="relative px-6 md:px-16 py-28 md:py-40 border-t border-brass/10"
        data-testid="beat-origin"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <SmallLabel testid="beat1-chapter">{t("b1.chapter")}</SmallLabel>
            <div className="mt-3 flex items-center gap-2 text-parchment/40 font-mono text-[10px] uppercase tracking-[0.25em]">
              <Anchor className="w-3 h-3" strokeWidth={1.5} />
              <span>{t("b1.tag")}</span>
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
              {t("b1.title_1")} <span className="italic text-brass">{t("b1.title_1_em")}</span>.
              <br />
              {t("b1.title_2")} <span className="italic text-brass">{t("b1.title_2_em")}</span>.
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 text-parchment/80 leading-relaxed text-lg max-w-4xl">
              <p>{t("b1.p1")}</p>
              <p>{t("b1.p2")}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BEAT 2 — Dubai (the crossing) */}
      <section
        className="relative px-6 md:px-16 py-28 md:py-40 border-t border-brass/10"
        data-testid="beat-dubai"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <SmallLabel testid="beat-dubai-chapter">{t("b_dubai.chapter")}</SmallLabel>
            <div className="mt-3 flex items-center gap-2 text-parchment/40 font-mono text-[10px] uppercase tracking-[0.25em]">
              <ScrollText className="w-3 h-3" strokeWidth={1.5} />
              <span>{t("b_dubai.tag")}</span>
            </div>
            <h3 className="mt-4 font-serif text-3xl md:text-5xl leading-tight text-parchment">
              {t("b_dubai.title_1")}
              <br />
              {t("b_dubai.title_2")}{" "}
              <span className="italic text-brass">{t("b_dubai.title_em")}</span>{" "}
              {t("b_dubai.title_3")}
            </h3>
            <p className="mt-6 text-parchment/80 leading-relaxed text-lg">
              {t("b_dubai.p1")}
            </p>
            <p className="mt-4 text-parchment/75 leading-relaxed text-lg">
              {t("b_dubai.p2")}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1 }}
            className="md:col-span-7 order-1 md:order-2"
          >
            {/* Typographic diploma "plate" — no photo, just a credential card */}
            <div className="relative border border-brass/25 bg-midnight-navy/40 p-8 md:p-12 overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                aria-hidden
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 1px, transparent 18px)",
                }}
              />
              <div className="relative">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brass/80 flex items-center gap-3 mb-8">
                  <span className="w-6 h-px bg-brass/60" />
                  {t("b_dubai.diploma_label")}
                </div>
                <div className="font-serif text-3xl md:text-5xl leading-tight text-parchment">
                  {t("b_dubai.diploma_title")}
                </div>
                <div className="mt-2 font-serif italic text-brass text-xl md:text-2xl">
                  {t("b_dubai.diploma_sub")}
                </div>
                <div className="mt-10 h-px bg-gradient-to-r from-brass/50 via-brass/15 to-transparent" />
                <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 font-mono text-[11px] md:text-xs text-parchment/65">
                  <div>// C# · Python</div>
                  <div>// Databases</div>
                  <div>// StarUML</div>
                  <div>// Hardware</div>
                  <div>// Forensic Cyber</div>
                  <div>// Networks</div>
                </div>
                <div className="mt-10 font-mono text-[10px] uppercase tracking-[0.3em] text-parchment/45">
                  University of Dubai
                </div>
              </div>
            </div>
            <div className="photo-caption">{t("b_dubai.caption")}</div>
          </motion.div>
        </div>
      </section>

      {/* BEAT 3 — harbor */}
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
              <img src={CAMPUS} alt="" className="w-full h-full object-cover photo-naval" />
            </div>
            <div className="photo-caption">{t("b2.caption")}</div>
          </motion.div>

          <div className="md:col-span-5 md:ps-6">
            <SmallLabel testid="beat2-chapter">{t("b2.chapter")}</SmallLabel>
            <h3 className="mt-4 font-serif text-3xl md:text-5xl leading-tight text-parchment">
              {t("b2.title_1")}<br />
              {t("b2.title_2")}
            </h3>
            <p className="mt-6 text-parchment/75 leading-relaxed text-lg">{t("b2.body")}</p>
            <div className="mt-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-brass/70">
              <GraduationCap className="w-3 h-3" strokeWidth={1.5} />
              {t("b2.tag")}
            </div>
          </div>
        </div>
      </section>

      {/* BEAT 3 — fellowship */}
      <section
        className="relative px-6 md:px-16 py-28 md:py-40 border-t border-brass/10"
        data-testid="beat-fellowship"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 md:pe-6 order-2 md:order-1">
            <SmallLabel testid="beat3-chapter">{t("b3.chapter")}</SmallLabel>
            <h3 className="mt-4 font-serif text-3xl md:text-5xl leading-tight text-parchment">
              {t("b3.title_1")}<br />
              {t("b3.title_2")} <span className="italic text-brass">{t("b3.title_2_em")}</span>.
            </h3>
            <p className="mt-6 text-parchment/75 leading-relaxed text-lg">{t("b3.body")}</p>
            <div className="mt-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-brass/70">
              <Users className="w-3 h-3" strokeWidth={1.5} />
              {t("b3.tag")}
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
              <img src={COHORT} alt="" className="w-full h-full object-cover photo-naval" />
            </div>
            <div className="photo-caption">{t("b3.caption")}</div>
          </motion.div>
        </div>
      </section>

      {/* BEAT 4 — logbook on failure */}
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
              {t("b4.label")}
            </span>
            <span className="h-px flex-1 bg-brass/30" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-parchment/50">
              {t("b4.subject")}
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
            {t("b4.quote")}
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-10 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl"
          >
            {[
              { n: lang === "ar" ? "١١" : "11", l: t("b4.stat_1") },
              { n: lang === "ar" ? "٠٢" : "02", l: t("b4.stat_2") },
              { n: lang === "ar" ? "٠١" : "01", l: t("b4.stat_3") },
            ].map((s, i) => (
              <div key={i} className="border-s-2 border-brass/40 ps-4">
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
            {t("b4.outro_1")}{" "}
            <span className="text-brass">{t("b4.outro_em")}</span>{" "}
            {t("b4.outro_2")}
          </p>

          <Link
            to="/story"
            className="mt-10 inline-flex items-center gap-3 border border-brass/40 px-5 py-3 hover:bg-brass hover:text-abyss-black transition-all duration-500"
            data-testid="beat-logbook-read-full"
          >
            <BookOpen className="w-4 h-4" strokeWidth={1.5} />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em]">
              {t("b4.read_full")}
            </span>
          </Link>
        </div>
      </section>

      {/* BEAT 5 — making port */}
      <section
        className="relative px-6 md:px-16 py-28 md:py-40 border-t border-brass/10"
        data-testid="beat-port"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <SmallLabel testid="beat5-chapter">{t("b5.chapter")}</SmallLabel>
            <h3 className="mt-4 font-serif text-3xl md:text-5xl leading-tight text-parchment">
              {t("b5.title_1")} <span className="italic text-brass">{t("b5.title_em")}</span>{" "}
              {t("b5.title_2")}
            </h3>
            <p className="mt-6 text-parchment/70 leading-relaxed">{t("b5.body")}</p>
            <div className="mt-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-brass/70">
              <Globe2 className="w-3 h-3" strokeWidth={1.5} />
              {t("b5.tag")}
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
                <img src={HACKSPHERE} alt="" className="w-full h-full object-cover photo-naval" />
              </div>
              <div className="photo-caption">{t("b5.cap_4")}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative sm:mt-12"
            >
              <div className="photo-frame aspect-[3/4] w-full">
                <img src={GCLOUD} alt="" className="w-full h-full object-cover photo-naval" />
              </div>
              <div className="photo-caption">{t("b5.cap_5")}</div>
            </motion.div>
          </div>
        </div>

        {/* Field ops — CTF credentials rail */}
        <div className="mt-20 md:mt-28 max-w-6xl mx-auto" data-testid="field-ops-rail">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end mb-8">
            <div className="md:col-span-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brass/80 flex items-center gap-3">
                <span className="w-6 h-px bg-brass/60" />
                {t("b5.ops_label")}
              </div>
              <h3 className="mt-3 font-serif text-3xl md:text-4xl leading-tight text-parchment">
                {t("b5.ops_title")}
              </h3>
            </div>
            <p className="md:col-span-7 text-parchment/70 leading-relaxed text-base md:text-lg">
              {t("b5.ops_body")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {[
              {
                img: "/assets/cert-42-ctf.png",
                title: t("b5.op1_title"),
                org: t("b5.op1_org"),
                date: t("b5.op1_date"),
                tag: "ATTACK / DEFENCE",
              },
              {
                img: "/assets/cert-exploit3rs.png",
                title: t("b5.op2_title"),
                org: t("b5.op2_org"),
                date: t("b5.op2_date"),
                tag: "WORKSHOP",
              },
              {
                img: null,
                title: t("b5.op3_title"),
                org: t("b5.op3_org"),
                date: t("b5.op3_date"),
                tag: "LAW ENFORCEMENT",
                initials: "SP",
              },
              {
                img: null,
                title: t("b5.op4_title"),
                org: t("b5.op4_org"),
                date: t("b5.op4_date"),
                tag: "LEADERSHIP",
                initials: "MR",
              },
            ].map((op, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="group relative border border-brass/15 bg-midnight-navy/40 hover:border-brass/50 transition-colors duration-500"
                data-testid={`field-op-card-${i}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-abyss-black border-b border-brass/10">
                  {op.img ? (
                    <img
                      src={op.img}
                      alt=""
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 photo-naval"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-serif text-6xl italic text-brass/30 select-none">
                        {op.initials}
                      </span>
                    </div>
                  )}
                  <div className="absolute top-2 left-2 font-mono text-[9px] uppercase tracking-[0.2em] text-brass bg-abyss-black/80 px-2 py-0.5 border border-brass/30">
                    {op.tag}
                  </div>
                </div>
                <div className="p-4">
                  <div className="font-serif text-base md:text-lg text-parchment leading-tight">
                    {op.title}
                  </div>
                  <div className="mt-2 text-xs text-parchment/60 leading-relaxed font-sans">
                    {op.org}
                  </div>
                  <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-brass/70">
                    {op.date}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* BEAT 6 — descend */}
      <section
        className="relative px-6 md:px-16 py-28 md:py-40 border-t border-brass/10"
        data-testid="beat-cta"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <SmallLabel testid="beat6-chapter">{t("b6.chapter")}</SmallLabel>
            <h3 className="mt-4 font-serif text-4xl md:text-6xl leading-[1.05] text-parchment">
              {t("b6.title_1")}
              <br />
              {t("b6.title_2")} <span className="italic text-brass">{t("b6.title_em")}</span>{" "}
              {t("b6.title_3")}
            </h3>
            <p className="mt-8 max-w-xl text-parchment/70 text-lg leading-relaxed">
              {t("b6.body")}
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
                {t("b6.cta")}
              </span>
              <ArrowUpRight
                className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="relative px-6 md:px-16 py-16 border-t border-brass/10"
        data-testid="home-footer"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brass/70 mb-3">
              {t("footer.author")}
            </div>
            <div className="font-serif text-5xl md:text-8xl leading-none text-parchment/30">
              {t("footer.signoff")}
            </div>
          </div>
          <div className="flex flex-col gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-parchment/50">
            <div>{t("footer.edition")}</div>
            <div>
              {t("footer.repo")} ·{" "}
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
