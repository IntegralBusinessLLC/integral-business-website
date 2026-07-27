"use client";

import { motion } from "framer-motion";
import { useLanguage, Language } from "./context/LanguageContext";

const languages: {
  code: Language;
  flag: string;
  label: string;
}[] = [
  {
    code: "en",
    flag: "https://flagcdn.com/w80/us.png",
    label: "English",
  },
  {
    code: "es",
    flag: "https://flagcdn.com/w80/es.png",
    label: "Español",
  },
  {
    code: "pt",
    flag: "https://flagcdn.com/w80/br.png",
    label: "Português",
  },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/60 p-1 shadow-xl backdrop-blur-md">
      {languages.map((item) => {
        const active = language === item.code;

        return (
          <motion.button
            key={item.code}
            type="button"
            aria-label={item.label}
            aria-pressed={active}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.94 }}
            transition={{ duration: 0.15 }}
            onClick={() => setLanguage(item.code)}
            className={`relative flex h-10 w-11 items-center justify-center rounded-full transition-all duration-300 ${
              active
                ? "bg-yellow-400 shadow-[0_0_22px_rgba(250,204,21,.55)] ring-2 ring-yellow-200/80 ring-offset-2 ring-offset-[#111]"
                : "opacity-60 hover:bg-white/10 hover:opacity-100"
            }`}
          >
            <img
              src={item.flag}
              alt=""
              className="h-5 w-7 rounded-[3px] object-cover shadow-sm"
            />

            {active && (
              <motion.span
                layoutId="active-language-flag"
                className="absolute inset-0 rounded-full border border-yellow-100/70"
                transition={{ type: "spring", stiffness: 380, damping: 28 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}