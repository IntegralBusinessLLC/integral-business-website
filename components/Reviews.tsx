"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./context/LanguageContext";

function StarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 fill-current drop-shadow-[0_0_8px_rgba(250,204,21,0.35)]"
    >
      <path d="M12 2.75a.9.9 0 0 1 .81.5l2.55 5.17 5.71.83a.9.9 0 0 1 .5 1.54l-4.13 4.03.97 5.69a.9.9 0 0 1-1.3.95L12 18.77l-5.11 2.69a.9.9 0 0 1-1.3-.95l.97-5.69-4.13-4.03a.9.9 0 0 1 .5-1.54l5.71-.83 2.55-5.17a.9.9 0 0 1 .81-.5Z" />
    </svg>
  );
}

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const { t } = useLanguage();
  const reviews = t.reviewItems;

  useEffect(() => {
    if (reviews.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const review = reviews[current];

  return (
    <section className="relative overflow-hidden bg-[#080808] py-36 md:py-44">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-120px] h-[820px] w-[820px] -translate-x-1/2 rounded-full bg-yellow-400/[0.07] blur-[180px]" />

        <div className="absolute right-[-180px] top-1/3 h-[460px] w-[460px] rounded-full bg-yellow-300/[0.035] blur-[140px]" />

        <div className="absolute left-[-220px] bottom-[-120px] h-[520px] w-[520px] rounded-full bg-white/[0.025] blur-[150px]" />

        <div className="absolute left-0 top-40 h-px w-full bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_65%,rgba(0,0,0,0.55)_100%)]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col px-6 sm:px-8 lg:px-10">
        <div className="mb-24 flex items-center justify-between gap-6 md:mb-28">
          <span className="text-[10px] font-semibold uppercase tracking-[0.45em] text-yellow-400 sm:text-xs">
            {t.reviewsEyebrow}
          </span>

          <span className="text-right text-[10px] uppercase tracking-[0.35em] text-white/25 sm:text-xs">
            INTEGRAL BUSINESS LLC
          </span>
        </div>

        <div className="grid items-center gap-20 lg:grid-cols-[1.18fr_.82fr] xl:gap-24">
          <div>
            <div className="overflow-hidden">
              <h2 className="max-w-5xl text-6xl font-black leading-[0.92] tracking-[-0.055em] text-white md:text-8xl xl:text-[7.8rem]">
                {t.reviewsTitleOne}
              </h2>

              <h2 className="mt-2 max-w-5xl text-6xl font-black leading-[0.92] tracking-[-0.055em] text-yellow-400 drop-shadow-[0_0_28px_rgba(250,204,21,0.14)] md:text-8xl xl:text-[7.8rem]">
                {t.reviewsTitleTwo}
              </h2>

              <h2 className="mt-2 max-w-5xl text-6xl font-black leading-[0.92] tracking-[-0.055em] text-white md:text-8xl xl:text-[7.8rem]">
                {t.reviewsTitleThree}
              </h2>
            </div>

            <div className="mt-16 max-w-2xl md:mt-20">
              <p className="text-xl font-light leading-[1.85] tracking-[-0.015em] text-white/75 sm:text-2xl">
                {t.reviewsDescription}
              </p>

              <p className="mt-8 max-w-xl text-base leading-8 text-white/40 sm:text-lg">
                {t.reviewsSupportingText}
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="relative w-full">
              <div className="absolute -inset-8 rounded-[58px] bg-yellow-400/[0.06] blur-3xl" />

              <div className="absolute -inset-[1px] rounded-[47px] bg-gradient-to-br from-yellow-300/45 via-white/10 to-transparent opacity-80" />

              <div className="absolute -left-7 top-14 h-48 w-px bg-gradient-to-b from-transparent via-yellow-400 to-transparent shadow-[0_0_24px_rgba(250,204,21,0.85)] transition-all duration-700 md:-left-9" />

              <div className="group relative min-h-[580px] overflow-hidden rounded-[46px] border border-white/[0.08] bg-[linear-gradient(145deg,rgba(255,255,255,0.075),rgba(255,255,255,0.018)_48%,rgba(255,255,255,0.035))] p-10 shadow-[0_40px_100px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.02)_inset,0_0_60px_rgba(250,204,21,0.05)] backdrop-blur-xl transition-all duration-700 hover:-translate-y-1 hover:border-yellow-300/20 hover:shadow-[0_50px_120px_rgba(0,0,0,0.7),0_0_75px_rgba(250,204,21,0.09)] sm:p-12 lg:p-14">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.1),transparent_36%)] opacity-70" />

                <div className="pointer-events-none absolute -right-8 top-16 select-none font-serif text-[16rem] font-black leading-none text-yellow-300/[0.035] transition-all duration-700 group-hover:translate-x-[-8px] group-hover:text-yellow-300/[0.055] sm:text-[19rem]">
                  “
                </div>

                <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/20 to-transparent" />

                <div className="relative z-10 flex min-h-[472px] flex-col">
                  <div className="flex items-center justify-between gap-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-yellow-400 sm:text-xs">
                      {t.realCustomerReview}
                    </p>

                    <div className="h-px flex-1 bg-gradient-to-r from-yellow-400/25 to-transparent" />
                  </div>

                  <div
                    key={current}
                    className="mt-14 flex flex-1 animate-[reviewReveal_.8s_cubic-bezier(0.22,1,0.36,1)] flex-col"
                  >
                    <div className="mb-10 flex gap-1.5 text-yellow-400">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <StarIcon key={index} />
                      ))}
                    </div>

                    <blockquote className="relative flex flex-1 flex-col border-l border-yellow-400/40 pl-8 sm:pl-10">
                      <div className="absolute -left-px top-0 h-16 w-px bg-yellow-300 shadow-[0_0_18px_rgba(250,204,21,0.9)]" />

                      <p className="max-w-xl text-xl font-light leading-[1.75] tracking-[-0.02em] text-white/88 sm:text-[1.35rem]">
                        “{review.text}”
                      </p>

                      <footer className="mt-auto pt-12">
                        <p className="text-lg font-semibold tracking-[-0.01em] text-white">
                          {review.name}
                        </p>

                        <p className="mt-2 text-[11px] uppercase tracking-[0.34em] text-white/40">
                          {review.source}
                        </p>
                      </footer>
                    </blockquote>
                  </div>

                  <div className="mt-12 border-t border-white/[0.08] pt-8">
                    <div className="mb-7 h-[3px] overflow-hidden rounded-full bg-white/[0.08]">
                      <div
                        key={`progress-${current}`}
                        className="h-full origin-left rounded-full bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 shadow-[0_0_16px_rgba(250,204,21,0.7)] animate-[reviewProgress_7s_linear_forwards]"
                      />
                    </div>

                    <div className="flex items-center justify-between gap-8">
                      <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/30">
                        {String(current + 1).padStart(2, "0")} /{" "}
                        {String(reviews.length).padStart(2, "0")}
                      </span>

                      <div className="flex items-center gap-2.5">
                        {reviews.map((_, index) => (
                          <div
                            key={index}
                            className={`relative h-2 rounded-full transition-all duration-500 ${
                              current === index
                                ? "w-9 bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.65)]"
                                : "w-2 bg-white/20"
                            }`}
                          >
                            {current === index && (
                              <span className="absolute inset-0 animate-pulse rounded-full bg-yellow-300/50" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 md:mt-40">
          <div className="flex items-center gap-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />

            <span className="text-center text-[10px] uppercase tracking-[0.45em] text-white/25 sm:text-xs">
              {t.builtOnRealExperiences}
            </span>

            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </div>

          <p className="mx-auto mt-10 max-w-4xl text-center text-3xl font-light leading-relaxed tracking-[-0.025em] text-white/85 md:text-4xl">
            {t.reviewsClosingBefore}
            <span className="text-yellow-400 drop-shadow-[0_0_18px_rgba(250,204,21,0.12)]">
              {" "}
              {t.reviewsClosingHighlight}
            </span>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes reviewReveal {
          0% {
            opacity: 0;
            transform: translateY(22px) scale(0.985);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes reviewProgress {
          0% {
            transform: scaleX(0);
            opacity: 0.75;
          }
          100% {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          :global(*) {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
}