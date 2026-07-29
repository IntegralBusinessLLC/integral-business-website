"use client";

import {
  Clock3,
  BadgeCheck,
  Zap,
  MapPinned,
} from "lucide-react";
import { useLanguage } from "./context/LanguageContext";

export default function WhyChooseUs() {
  const { t } = useLanguage();
  const itemIcons = [Clock3, BadgeCheck, Zap, MapPinned];
  const items = t.whyItems.map((item, index) => ({
    ...item,
    icon: itemIcons[index],
  }));
  /* const items = [
    {
      icon: Clock3,
      title: "24/7 Emergency",
      text: "Available day and night",
    },
    {
      icon: BadgeCheck,
      title: "Professional Service",
      text: "Experienced operators",
    },
    {
      icon: Zap,
      title: "Fast Response",
      text: "Quick arrival times",
    },
    {
      icon: MapPinned,
      title: "Orlando Area",
      text: "Serving Central Florida",
    },
  ]; */

  return (
    <section className="bg-[#080808] py-20">
      <div className="max-w-7xl mx-auto px-8">

        {/* Encabezado */}
        <div className="mb-16 text-center">

          <p className="text-yellow-400 uppercase tracking-[5px] font-semibold text-sm">
            {t.whyEyebrow}
          </p>

          <h2 className="mt-3 text-5xl font-extrabold text-white">
            {t.whyTitleBefore}{" "}
            <span className="text-yellow-400">{t.whyTitleHighlight}</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-400 text-lg leading-8">
            {t.whyDescription}
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">

            <div className="h-[2px] w-16 rounded-full bg-yellow-400"></div>

            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>

            <div className="h-[2px] w-16 rounded-full bg-yellow-400"></div>

          </div>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-8">

          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group bg-[#111] rounded-2xl border border-yellow-500/20 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-500/20 cursor-pointer"
              >
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400 text-black transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Icon size={40} strokeWidth={2.5} />
                </div>

                <h3 className="text-white text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-400">
                  {item.text}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}