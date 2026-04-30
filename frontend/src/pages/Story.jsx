import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Quote } from "lucide-react";
import { useLang } from "../contexts/LangContext";

const SEA =
  "https://images.pexels.com/photos/25811744/pexels-photo-25811744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

function Section({ children, delay = 0 }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, delay, ease: [0.19, 1, 0.22, 1] }}
      className="mt-12 md:mt-20"
    >
      {children}
    </motion.section>
  );
}

export default function Story() {
  const { t } = useLang();

  useEffect(() => {
    document.title = "Naval Depth · Story";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="bg-abyss-black text-parchment min-h-screen pt-24 md:pt-32 pb-32"
      data-testid="story-root"
    >
      {/* Atmospheric background */}
      <div
        className="fixed inset-0 -z-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage: `url(${SEA})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(3px) saturate(0.5)",
        }}
        aria-hidden
      />
      <div className="fixed inset-0 -z-0 bg-abyss-black/70 pointer-events-none" aria-hidden />

      <article className="relative max-w-3xl mx-auto px-6 md:px-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-parchment/55 hover:text-brass transition-colors"
          data-testid="story-back-link"
        >
          <ArrowLeft className="w-3 h-3" strokeWidth={1.8} />
          {t("story.back")}
        </Link>

        <div className="mt-10 font-mono text-[10px] uppercase tracking-[0.3em] text-brass/80 flex items-center gap-3">
          <span className="w-8 h-px bg-brass/60" />
          {t("story.eyebrow")}
        </div>

        <h1
          className="mt-6 font-serif text-5xl md:text-7xl leading-[1.02] text-parchment"
          data-testid="story-title"
        >
          {t("story.title_1")}{" "}
          <span className="italic text-brass">{t("story.title_em")}</span>
          <br />
          {t("story.title_2")}
        </h1>

        <p className="mt-8 text-xl md:text-2xl font-serif italic text-parchment/75 leading-relaxed max-w-2xl">
          {t("story.lede")}
        </p>

        <div className="mt-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-parchment/45">
          <span>{t("story.author")}</span>
        </div>

        <div className="mt-10 h-px bg-gradient-to-r from-brass/40 via-brass/10 to-transparent" />

        {/* Body */}
        <div className="mt-12 space-y-2 text-parchment/85 text-lg md:text-[1.18rem] leading-[1.85] font-sans">
          <Section>
            <h2 className="font-serif text-2xl md:text-3xl text-brass mb-5">
              {t("story.h1")}
            </h2>
            <p>{t("story.p1")}</p>
          </Section>

          <Section delay={0.05}>
            <h2 className="font-serif text-2xl md:text-3xl text-brass mb-5">
              {t("story.h2")}
            </h2>
            <p>{t("story.p2")}</p>
            <p className="mt-5">{t("story.p3")}</p>
          </Section>

          <Section delay={0.1}>
            <h2 className="font-serif text-2xl md:text-3xl text-brass mb-5">
              {t("story.h3")}
            </h2>
            <p>{t("story.p4")}</p>
            <p className="mt-5">{t("story.p5")}</p>
          </Section>

          <Section delay={0.1}>
            <h2 className="font-serif text-2xl md:text-3xl text-brass mb-5">
              {t("story.h4")}
            </h2>
            <p>{t("story.p6")}</p>
          </Section>

          <Section delay={0.1}>
            <h2 className="font-serif text-2xl md:text-3xl text-brass mb-5">
              {t("story.h5")}
            </h2>
            <p>{t("story.p7")}</p>
            <blockquote className="mt-8 border-s-2 border-brass ps-5 py-2 italic font-serif text-2xl md:text-3xl leading-snug text-parchment">
              <Quote className="w-5 h-5 text-brass/70 mb-2" strokeWidth={1.5} />
              {t("story.p8_a")}
              <br />
              <span className="text-parchment/85 text-xl md:text-2xl not-italic font-sans block mt-3">
                {t("story.p8_b")}
              </span>
            </blockquote>
          </Section>

          <Section delay={0.1}>
            <h2 className="font-serif text-2xl md:text-3xl text-brass mb-5">
              {t("story.h6")}
            </h2>
            <p>{t("story.p9")}</p>
            <p className="mt-5">{t("story.p10")}</p>
          </Section>

          <Section delay={0.1}>
            <h2 className="font-serif text-2xl md:text-3xl text-brass mb-5">
              {t("story.h7")}
            </h2>
            <blockquote className="mt-4 mb-8 border-s-2 border-brass ps-5 py-2 italic font-serif text-2xl md:text-3xl leading-snug text-parchment">
              <Quote className="w-5 h-5 text-brass/70 mb-2" strokeWidth={1.5} />
              {t("story.p11_quote")}
            </blockquote>
            <p>{t("story.p12")}</p>
            <p className="mt-5 text-brass/90 italic">{t("story.p13")}</p>
          </Section>
        </div>

        {/* Signoff */}
        <div className="mt-20 pt-10 border-t border-brass/15">
          <div className="font-serif text-3xl md:text-4xl italic text-brass">
            {t("story.signoff")}
          </div>
          <Link
            to="/log"
            className="mt-10 inline-flex items-center gap-3 border border-brass/40 px-5 py-3 hover:bg-brass hover:text-abyss-black transition-all duration-500"
            data-testid="story-cta-log"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.3em]">
              {t("hero.cta")}
            </span>
          </Link>
        </div>
      </article>
    </div>
  );
}
