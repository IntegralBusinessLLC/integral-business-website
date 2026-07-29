"use client";

import Image from "next/image";
import { useLanguage } from "./context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

 return (
  <section
    id="home"
className="relative h-[calc(100svh-5rem)] min-h-[590px] max-h-[820px] w-full overflow-hidden scroll-mt-24 sm:min-h-[620px] lg:min-h-[680px]"  >
      {/* Imagen de fondo */}
      <Image
        src="/images/hero-truck.jpeg"
        alt={t.logoAlt}
        fill
        priority
        className="object-cover object-[62%_center] scale-105 sm:object-[58%_center] lg:object-[center_48%] xl:object-[center_45%]"
      />

      {/* Overlay general ligero */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Degradado horizontal para mejorar la lectura del texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent sm:from-black/90 sm:via-black/55 lg:via-black/42" />

      {/* Degradado vertical sutil para dar profundidad */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/20" />

      {/* Contenido */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 sm:py-12">
          <div className="max-w-2xl lg:translate-x-4 2xl:translate-x-5">
            {/* Encabezado */}
            <div className="mb-7 flex items-center gap-3 sm:gap-4">
              <div className="h-[3px] w-12 rounded-full bg-yellow-400 shadow-[0_0_14px_rgba(250,204,21,0.7)] sm:w-16" />

              <p className="text-[13px] font-bold uppercase tracking-[4.5px] text-yellow-400 drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)] sm:text-[15px] sm:tracking-[5px]">
                {t.heroEyebrow}
              </p>
            </div>

            {/* Título */}
            <h1 className="text-[2.7rem] font-extrabold leading-[0.93] text-white drop-shadow-[0_7px_28px_rgba(0,0,0,0.98)] sm:text-[3.2rem] md:text-[3.75rem] lg:text-[3.95rem] xl:text-[4rem] 2xl:text-[4.45rem]">
              {t.heroTitleFast}

              <br />

              {t.heroTitleReliable}

              <br />

              <span className="text-yellow-400 drop-shadow-[0_4px_18px_rgba(250,204,21,0.2)]">
                {t.heroTitleTowing}
              </span>{" "}
              {t.heroTitleLocation}
            </h1>

            {/* Descripción */}
            <p className="mt-9 max-w-xl text-[1.08rem] leading-[1.72] text-gray-100 drop-shadow-[0_3px_14px_rgba(0,0,0,0.98)] sm:mt-10 sm:text-[1.18rem] md:text-[1.3rem]">
              {t.heroSubtitle}
            </p>

            {/* Indicadores */}
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-[15px] font-semibold leading-6 text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.98)] sm:mt-8 sm:text-base">
              <span className="flex items-center gap-2">
                <span className="text-lg leading-none text-yellow-400">✓</span>
                {t.available247}
              </span>

              <span className="flex items-center gap-2">
                <span className="text-lg leading-none text-yellow-400">✓</span>
                {t.fastResponse}
              </span>

              <span className="flex items-center gap-2">
                <span className="text-lg leading-none text-yellow-400">✓</span>
                {t.licensedInsured}
              </span>
            </div>

            {/* Botones */}
            <div className="mt-9 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-5">
              <a
                href="tel:+14073606109"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-yellow-200/60
                  bg-gradient-to-r
                  from-yellow-300
                  to-yellow-400
                  px-8
                  py-4
                  text-lg
                  font-bold
                  text-black
                  shadow-xl
                  shadow-yellow-500/35
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:scale-[1.03]
                  hover:shadow-[0_14px_35px_rgba(250,204,21,0.48)]
                  sm:w-auto
                  sm:hover:scale-105
                "
              >
                📞
                {t.callNow}
              </a>

              <a
                href="#services"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-yellow-400/85
                  bg-black/55
                  px-8
                  py-4
                  text-lg
                  font-bold
                  text-yellow-400
                  shadow-[0_8px_24px_rgba(0,0,0,0.32),0_0_16px_rgba(250,204,21,0.12)]
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-yellow-300
                  hover:bg-yellow-400/12
                  hover:shadow-[0_12px_28px_rgba(0,0,0,0.42),0_0_22px_rgba(250,204,21,0.2)]
                  sm:w-auto
                "
              >
                {t.viewServices}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}