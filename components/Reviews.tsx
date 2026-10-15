"use client";

import { useLanguage } from "./context/LanguageContext";

export default function Reviews() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-[#080808] py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(250,204,21,0.06),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <p className="mb-14 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">{t.reviewsEyebrow}</p>
        <div className="grid items-center gap-12 lg:grid-cols-[1.18fr_.82fr]">
          <div>
            <h2 className="text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">
              {t.reviewsTitleOne}{" "}
              <span className="text-yellow-400">{t.reviewsTitleTwo}</span>{" "}
              {t.reviewsTitleThree}
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75">{t.reviewsDescription}</p>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/50">{t.reviewsSupportingText}</p>
          </div>
          <div className="rounded-[2rem] border border-yellow-400/25 bg-white/[0.035] p-8 shadow-[0_24px_70px_rgba(0,0,0,.4)] sm:p-12">
            <p className="text-2xl font-bold text-white">Integral Business LLC</p>
            <p className="mt-3 text-slate-400">{t.orlandoFlorida}</p>
            <a href="https://www.facebook.com/profile.php?id=100083564196667" target="_blank" rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-xl bg-yellow-400 px-6 py-4 font-bold text-black transition hover:bg-yellow-300">
              {t.visitFacebook}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
