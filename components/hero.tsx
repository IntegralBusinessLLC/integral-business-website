"use client";

import Image from "next/image";
import { useLanguage } from "./context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative h-[90vh] w-full overflow-hidden scroll-mt-24"
    >
      {/* Imagen de fondo */}
      <Image
        src="/images/hero-truck.jpeg"
        alt={t.logoAlt}
        fill
        priority
        className="object-cover scale-105"
      />

      {/* Overlay mucho más suave */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Degradado solo a la izquierda */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-7xl mx-auto w-full px-8">

          <div className="max-w-2xl">

            {/* Encabezado */}
            <div className="flex items-center gap-4 mb-6">

              <div className="h-[3px] w-16 rounded-full bg-yellow-400" />

              <p className="text-yellow-400 font-bold tracking-[4px] uppercase text-sm drop-shadow-lg">
                {t.heroEyebrow}
              </p>

            </div>

            {/* Título */}
            <h1 className="text-6xl md:text-7xl font-extrabold leading-none text-white drop-shadow-[0_6px_25px_rgba(0,0,0,0.95)]">

              {t.heroTitleFast}

              <br />

              {t.heroTitleReliable}

              <br />

              <span className="text-yellow-400">
                {t.heroTitleTowing}
              </span>{" "}
              {t.heroTitleLocation}

            </h1>

            {/* Descripción */}
            <p className="mt-8 max-w-xl text-xl leading-8 text-gray-200 drop-shadow-lg">
              {t.heroSubtitle}
            </p>

            {/* Indicadores */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm font-medium text-white drop-shadow-lg">

              <span className="flex items-center gap-2">
                <span className="text-yellow-400">✓</span>
                {t.available247}
              </span>

              <span className="flex items-center gap-2">
                <span className="text-yellow-400">✓</span>
                {t.fastResponse}
              </span>

              <span className="flex items-center gap-2">
                <span className="text-yellow-400">✓</span>
                {t.licensedInsured}
              </span>

            </div>

            {/* Botones */}
            <div className="mt-10 flex flex-wrap gap-5">

              <a
                href="tel:+14073606109"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-yellow-300
                  to-yellow-400
                  px-8
                  py-4
                  text-lg
                  font-bold
                  text-black
                  shadow-xl
                  shadow-yellow-500/30
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:scale-105
                "
              >
                📞
                {t.callNow}
              </a>

              <a
                href="#services"
                className="
                  rounded-xl
                  border
                  border-yellow-400
                  bg-black/25
                  backdrop-blur-sm
                  px-8
                  py-4
                  text-lg
                  font-bold
                  text-yellow-400
                  transition-all
                  duration-300
                  hover:bg-yellow-400
                  hover:text-black
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