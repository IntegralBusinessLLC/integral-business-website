"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

import { en } from "../Locales/en";
import { es } from "../Locales/es";
import { pt } from "../Locales/pt";

export type Language = "en" | "es" | "pt";

const translations = {
  en,
  es,
  pt,
};

type Translation = typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({
  children,
}: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem(
      "integral-language"
    ) as Language | null;

    if (
      savedLanguage &&
      ["en", "es", "pt"].includes(savedLanguage)
    ) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem("integral-language", newLanguage);
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: {
        ...en,
        ...translations[language],
      },
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider."
    );
  }

  return context;
}