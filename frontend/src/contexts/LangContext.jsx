import { createContext, useContext, useEffect, useState, useCallback } from "react";
import translations from "../i18n/translations";

const LangContext = createContext({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
});

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window === "undefined") return "en";
    return localStorage.getItem("nd_lang") || "en";
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.classList.toggle("rtl", lang === "ar");
    localStorage.setItem("nd_lang", lang);
  }, [lang]);

  const setLang = useCallback((next) => {
    setLangState(next);
  }, []);

  const t = useCallback(
    (key) => {
      const dict = translations[lang] || translations.en;
      return dict[key] ?? translations.en[key] ?? key;
    },
    [lang]
  );

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
