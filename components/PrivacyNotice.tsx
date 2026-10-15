"use client";

import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";

export default function PrivacyNotice({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const { t } = useLanguage();

  return (
    <p className={`text-sm leading-6 ${tone === "light" ? "text-slate-600" : "text-slate-400"}`}>
      {t.formPrivacyNotice}{" "}
      <Link href="/privacy" className={`underline underline-offset-4 ${tone === "light" ? "text-amber-800 hover:text-amber-950" : "text-yellow-300 hover:text-yellow-200"}`}>
        {t.privacyPolicy}
      </Link>
    </p>
  );
}
