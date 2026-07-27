"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock3, MapPin, Phone } from "lucide-react";
import { useLanguage } from "./context/LanguageContext";

const cityPoints = [
  { name: "Orlando", left: "50%", top: "49%", primary: true },
  { name: "Winter Park", left: "57%", top: "33%" },
  { name: "Lake Nona", left: "67%", top: "64%" },
  { name: "Kissimmee", left: "38%", top: "68%" },
  { name: "Davenport", left: "18%", top: "78%" },
  { name: "Clermont", left: "18%", top: "39%" },
  { name: "Altamonte Springs", left: "48%", top: "19%" },
  { name: "Sanford", left: "59%", top: "12%" },
];

const content = {
  en: {
    eyebrow: "SERVICE AREA",
    titleStart: "Wherever you are in",
    titleHighlight: "Central Florida.",
    description:
      "Fast, dependable towing and roadside assistance throughout Orlando and the surrounding area.",
    coverageTitle: "We come to you",
    coverageDescription:
      "From a flat tire in Kissimmee to a roadside emergency in Sanford, our team is ready to help.",
    listTitle: "Areas we serve",
    callTitle: "Need a tow outside these areas?",
    callButton: "Call us now",
    availability: "Available 24/7 for emergencies",
    central: "Orlando",
  },
  es: {
    eyebrow: "ZONA DE SERVICIO",
    titleStart: "Donde estés en",
    titleHighlight: "Florida Central.",
    description:
      "Servicio de grúas y asistencia en carretera rápido y confiable en Orlando y sus alrededores.",
    coverageTitle: "Vamos hasta ti",
    coverageDescription:
      "Desde una llanta pinchada en Kissimmee hasta una emergencia en Sanford, nuestro equipo está listo para ayudarte.",
    listTitle: "Áreas que atendemos",
    callTitle: "¿Necesitas una grúa fuera de estas áreas?",
    callButton: "Llámanos ahora",
    availability: "Disponible 24/7 para emergencias",
    central: "Orlando",
  },
  pt: {
    eyebrow: "ÁREA DE ATENDIMENTO",
    titleStart: "Onde você estiver na",
    titleHighlight: "Flórida Central.",
    description:
      "Serviço de guincho e assistência na estrada rápido e confiável em Orlando e regiões próximas.",
    coverageTitle: "Vamos até você",
    coverageDescription:
      "De um pneu furado em Kissimmee a uma emergência em Sanford, nossa equipe está pronta para ajudar.",
    listTitle: "Áreas atendidas",
    callTitle: "Precisa de um guincho fora dessas áreas?",
    callButton: "Ligue agora",
    availability: "Disponível 24/7 para emergências",
    central: "Orlando",
  },
};

export default function ServiceAreas() {
  const { language } = useLanguage();
  const text = content[language];

  return (
    <section
      id="service-areas"
      className="relative overflow-hidden border-y border-yellow-400/15 bg-[#080808] py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/[0.045] blur-[110px]" />
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.07),transparent_48%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.42em] text-yellow-400 sm:text-sm">
            {text.eyebrow}
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            {text.titleStart}{" "}
            <span className="text-yellow-400">{text.titleHighlight}</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            {text.description}
          </p>

          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-yellow-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 shadow-[0_0_16px_rgba(250,204,21,0.95)]" />
            <span className="h-px w-12 bg-yellow-400/80" />
          </div>
        </motion.div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <div className="relative aspect-[1.08/1] overflow-hidden rounded-[2rem] border border-yellow-400/25 bg-[#0d0d0d] shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
              <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(250,204,21,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(250,204,21,0.12)_1px,transparent_1px)] [background-size:34px_34px]" />

              <div className="absolute inset-[8%] rounded-[42%_58%_55%_45%/44%_41%_59%_56%] border border-yellow-400/15 bg-yellow-400/[0.025]" />

              <div className="absolute left-1/2 top-1/2 h-[67%] w-[67%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-400/20" />
              <div className="absolute left-1/2 top-1/2 h-[45%] w-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-400/30" />
              <div className="absolute left-1/2 top-1/2 h-[23%] w-[23%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-400/40" />

              <motion.div
                animate={{ scale: [1, 1.16, 1], opacity: [0.32, 0.06, 0.32] }}
                transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-400/50"
              />

              <div className="absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#111] bg-yellow-400 shadow-[0_0_0_8px_rgba(250,204,21,0.12),0_0_35px_rgba(250,204,21,0.7)]">
                <MapPin className="h-7 w-7 fill-black text-black" strokeWidth={2.8} />
              </div>

              <div className="absolute left-1/2 top-[calc(50%+3.25rem)] z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-yellow-300/40 bg-black/85 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em] text-yellow-400 shadow-xl backdrop-blur-md">
                {text.central}
              </div>

              {cityPoints
                .filter((city) => !city.primary)
                .map((city, index) => (
                  <motion.div
                    key={city.name}
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.06 }}
                    className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: city.left, top: city.top }}
                  >
                    <div className="group flex flex-col items-center">
                      <div className="h-3.5 w-3.5 rounded-full border-2 border-[#111] bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.8)]" />
                      <span className="mt-1.5 whitespace-nowrap rounded bg-black/75 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.08em] text-white/85 backdrop-blur-sm sm:text-[10px]">
                        {city.name}
                      </span>
                    </div>
                  </motion.div>
                ))}

              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/70 p-3.5 backdrop-blur-md">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-500/15">
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]" />
                </div>

                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-white">
                    Integral Business LLC
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">{text.availability}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <div className="rounded-[2rem] border border-yellow-400/20 bg-[#101010] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.42)] sm:p-9">
              <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-yellow-400 text-black shadow-[0_0_24px_rgba(250,204,21,0.32)]">
                <MapPin className="h-7 w-7" strokeWidth={2.5} />
              </div>

              <h3 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl">
                {text.coverageTitle}
              </h3>

              <p className="mt-4 max-w-xl text-base leading-7 text-slate-400">
                {text.coverageDescription}
              </p>

              <div className="mt-8 border-t border-white/10 pt-7">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
                  {text.listTitle}
                </p>

                <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-2">
                  {cityPoints.map((city) => (
                    <div key={city.name} className="flex items-center gap-2.5 text-sm font-semibold text-white/90">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-yellow-400" strokeWidth={2.5} />
                      {city.name}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-yellow-400/20 bg-black/40 p-5">
                <div className="flex gap-3">
                  <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
                  <div>
                    <p className="font-bold text-white">{text.callTitle}</p>
                    <a
                      href="tel:+14073606109"
                      className="mt-4 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-sm font-extrabold text-black transition hover:bg-yellow-300"
                    >
                      <Phone className="h-4 w-4 fill-black" />
                      {text.callButton}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}