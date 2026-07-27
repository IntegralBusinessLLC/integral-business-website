"use client";

import Image from "next/image";
import { useLanguage } from "./context/LanguageContext";

export default function Fleet() {
  const { t } = useLanguage();
  const truckImages = [
    "/images/hero-truck.jpeg",
    "/images/hero-truck2.jpeg",
    "/images/hero-truck3.jpeg",
  ];
  const trucks = t.fleetItems.map((name, index) => ({
    name,
    image: truckImages[index],
  }));
  /* const trucks = [
    {
      name: "Black Flatbed",
      image: "/images/hero-truck.jpeg",
    },
    {
      name: "Light Duty Tow Truck",
      image: "/images/hero-truck2.jpeg",
    },
    {
      name: "White Flatbed",
      image: "/images/hero-truck3.jpeg",
    },
  ]; */

  return (
    <section
      id="fleet"
      className="bg-[#080808] py-20 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Encabezado */}
        <div className="mb-16 text-center">

          <p className="text-yellow-400 uppercase tracking-[5px] font-semibold text-sm">
            {t.fleetEyebrow}
          </p>

          <h2 className="mt-3 text-5xl font-extrabold text-white">
            {t.fleetTitleBefore}{" "}
            <span className="text-yellow-400">{t.fleetTitleHighlight}</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-400 text-lg leading-8">
            {t.fleetDescription}
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-[2px] w-16 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="h-[2px] w-16 rounded-full bg-yellow-400"></div>
          </div>

        </div>

        {/* Camiones */}
        <div className="grid md:grid-cols-3 gap-8">

          {trucks.map((truck) => (

            <div
              key={truck.name}
              className="group overflow-hidden rounded-2xl border border-yellow-500/20 bg-[#111] transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-500/20"
            >

              <div className="relative h-64 overflow-hidden">

                <Image
                  src={truck.image}
                  alt={truck.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              </div>

              <div className="p-6">

                <h3 className="text-center text-xl font-bold text-white transition-colors duration-300 group-hover:text-yellow-400">
                  {truck.name}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}