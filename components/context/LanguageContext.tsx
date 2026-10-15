"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
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

function subscribeToLanguage(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function readSavedLanguage(): Language {
  try {
    const saved = localStorage.getItem("integral-language");
    return saved === "es" || saved === "pt" ? saved : "en";
  } catch {
    return "en";
  }
}

function serverLanguage(): Language {
  return "en";
}

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({
  children,
}: LanguageProviderProps) {
  const savedLanguage = useSyncExternalStore(
    subscribeToLanguage,
    readSavedLanguage,
    serverLanguage
  );
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  const language = selectedLanguage ?? savedLanguage;

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((newLanguage: Language) => {
    setSelectedLanguage(newLanguage);
    try {
      localStorage.setItem("integral-language", newLanguage);
    } catch {
      // Language selection also works when browser storage is unavailable.
    }
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: {
        ...en,
        ...translations[language],
      },
    }),
    [language, setLanguage]
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
