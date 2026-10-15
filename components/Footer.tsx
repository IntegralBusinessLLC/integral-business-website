"use client";

import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-yellow-400/20 bg-[#080808] px-6 pb-28 pt-10 text-sm text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link href="/" className="font-bold text-white">Integral Business LLC</Link>
          <p className="mt-2">{t.orlandoFlorida} · {t.towingRoadsideAssistance}</p>
        </div>
        <div className="flex flex-wrap items-center gap-6 sm:pr-40">
          <a href="tel:+14073606109" className="text-yellow-300 hover:underline">(407) 360-6109</a>
          <Link href="/privacy" className="underline underline-offset-4 hover:text-white">{t.privacyPolicy}</Link>
        </div>
      </div>
    </footer>
  );
}
