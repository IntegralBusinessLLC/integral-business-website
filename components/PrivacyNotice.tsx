"use client";

import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";

export default function PrivacyNotice() {
  const { t } = useLanguage();

  return (
    <p className="text-sm leading-6 text-slate-400">
      {t.formPrivacyNotice}{" "}
      <Link href="/privacy" className="text-yellow-300 underline underline-offset-4 hover:text-yellow-200">
        {t.privacyPolicy}
      </Link>
    </p>
  );
}
