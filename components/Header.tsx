"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "./context/LanguageContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const panelRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const { t } = useLanguage();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (panelRef.current && !panelRef.current.contains(target)) {
        setOpen(false);
      }

      if (mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        setMobileMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-black/95 backdrop-blur border-b border-yellow-500/40 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:px-6">
          {/* Logo */}
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <Image
              src="/images/logo.png"
              alt={t.logoAlt}
              width={60}
              height={60}
              className="h-11 w-11 shrink-0 sm:h-[60px] sm:w-[60px]"
            />

            <div className="min-w-0">
              <h1 className="truncate text-base font-bold text-yellow-400 sm:text-xl">
                Integral Business LLC
              </h1>

              <p className="truncate text-xs text-gray-400 sm:text-sm">
                {t.towingRoadsideAssistance}
              </p>
            </div>
          </div>

          {/* Navegación de computadora */}
          <nav className="hidden md:flex items-center gap-12 text-white">
            <a
              href="#home"
              className="group relative font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:text-yellow-400"
            >
              {t.home}
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#services"
              className="group relative font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:text-yellow-400"
            >
              {t.services}
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#fleet"
              className="group relative font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:text-yellow-400"
            >
              {t.fleet}
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#contact"
              className="group relative font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:text-yellow-400"
            >
              {t.contact}
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>

          {/* Premium CTA de computadora */}
          <div ref={panelRef} className="relative hidden md:block">
            <button
              type="button"
              onClick={() => setOpen((current) => !current)}
              aria-expanded={open}
              aria-controls="towing-contact-panel"
              className="flex items-center gap-4 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-400 px-7 py-3 border border-yellow-200/50 shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-yellow-400/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-2xl">
                📞
              </div>

              <div className="leading-tight text-left">
                <div className="text-[11px] font-semibold uppercase tracking-[2px] text-gray-700">
                  {t.needTow}
                </div>

                <div className="text-2xl font-extrabold text-black">
                  (407) 360-6109
                </div>
              </div>
            </button>

            <div
              id="towing-contact-panel"
              className={`absolute right-0 top-full mt-5 w-[380px] origin-top-right overflow-hidden rounded-3xl border border-yellow-400/30 bg-[#111111]/95 backdrop-blur-xl shadow-[0_0_45px_rgba(250,204,21,.25)] transition-all duration-300 ${
                open
                  ? "visible translate-y-0 scale-100 opacity-100"
                  : "invisible -translate-y-2 scale-95 opacity-0 pointer-events-none"
              }`}
            >
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 p-5">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />

                  <span className="text-sm font-bold uppercase tracking-[3px] text-black">
                    {t.availableNow}
                  </span>
                </div>

                <h3 className="mt-3 text-3xl font-extrabold text-black">
                  (407) 360-6109
                </h3>

                <p className="mt-2 text-black/80">
                  {t.towingAvailableDescription}
                </p>
              </div>

              <div className="space-y-5 p-6">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-[2px] text-yellow-400">
                    {t.fastResponse}
                  </h4>

                  <p className="mt-2 leading-7 text-white/70">
                    {t.fastResponseDescription}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:+14073606109"
                    className="rounded-xl bg-yellow-400 py-4 text-center font-bold text-black transition hover:scale-105"
                  >
                    📞 {t.callNow}
                  </a>

                  <a
                    href="https://wa.me/14073606109"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-green-500 py-4 text-center font-bold text-green-400 transition hover:scale-105 hover:bg-green-500/10"
                  >
                    {t.whatsapp}
                  </a>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="font-semibold text-yellow-400">
                    {t.whyChooseUs}
                  </div>

                  <ul className="mt-3 space-y-2 text-sm text-white/70">
                    <li>✔ {t.emergencyService}</li>
                    <li>✔ {t.fastArrivalTimes}</li>
                    <li>✔ {t.licensedInsured}</li>
                    <li>✔ {t.professionalEquipment}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Selector de idioma premium de computadora */}
          <div className="relative hidden md:flex items-center">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-yellow-400/20 via-yellow-300/10 to-yellow-400/20 blur-md opacity-70 transition-opacity duration-300 hover:opacity-100" />

            <div className="relative rounded-2xl border border-yellow-400/25 bg-white/[0.04] p-1.5 shadow-[0_10px_30px_rgba(0,0,0,.35)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-yellow-400/50 hover:bg-white/[0.07]">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Botones exclusivos de teléfono */}
          <div
            ref={mobileMenuRef}
            className="relative flex items-center gap-2 md:hidden"
          >
            <a
              href="tel:+14073606109"
              aria-label={t.callNow}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-yellow-200/50 bg-gradient-to-br from-yellow-300 to-yellow-400 text-xl shadow-lg shadow-yellow-500/25 transition-transform duration-300 active:scale-95"
            >
              📞
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((current) => !current)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-yellow-400/50 bg-[#121212] text-2xl text-yellow-400 shadow-[0_0_20px_rgba(250,204,21,.15)] transition-all duration-300 active:scale-95"
            >
              <span
                className={`transition-transform duration-300 ${
                  mobileMenuOpen ? "rotate-90" : "rotate-0"
                }`}
              >
                {mobileMenuOpen ? "✕" : "☰"}
              </span>
            </button>

            <div
              id="mobile-navigation-menu"
              className={`absolute right-0 top-full mt-4 w-[min(360px,calc(100vw-2rem))] origin-top-right overflow-hidden rounded-3xl border border-yellow-400/30 bg-[#0b0b0b]/98 shadow-[0_0_45px_rgba(250,204,21,.18)] backdrop-blur-xl transition-all duration-300 ${
                mobileMenuOpen
                  ? "visible translate-y-0 scale-100 opacity-100"
                  : "invisible -translate-y-3 scale-95 opacity-0 pointer-events-none"
              }`}
            >
              <div className="border-b border-yellow-400/15 bg-gradient-to-r from-yellow-400 to-yellow-300 p-5">
                <p className="text-[11px] font-bold uppercase tracking-[3px] text-black/70">
                  {t.needTow}
                </p>

                <a
                  href="tel:+14073606109"
                  onClick={closeMobileMenu}
                  className="mt-1 block text-2xl font-extrabold text-black"
                >
                  (407) 360-6109
                </a>

                <div className="mt-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-black/75">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-600 animate-pulse" />
                  {t.availableNow}
                </div>
              </div>

              <nav className="p-3">
                <a
                  href="#home"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between rounded-2xl px-5 py-4 text-base font-bold text-white transition-colors hover:bg-white/5 hover:text-yellow-400"
                >
                  {t.home}
                  <span className="text-yellow-400">→</span>
                </a>

                <a
                  href="#services"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between rounded-2xl px-5 py-4 text-base font-bold text-white transition-colors hover:bg-white/5 hover:text-yellow-400"
                >
                  {t.services}
                  <span className="text-yellow-400">→</span>
                </a>

                <a
                  href="#fleet"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between rounded-2xl px-5 py-4 text-base font-bold text-white transition-colors hover:bg-white/5 hover:text-yellow-400"
                >
                  {t.fleet}
                  <span className="text-yellow-400">→</span>
                </a>

                <a
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between rounded-2xl px-5 py-4 text-base font-bold text-white transition-colors hover:bg-white/5 hover:text-yellow-400"
                >
                  {t.contact}
                  <span className="text-yellow-400">→</span>
                </a>
              </nav>

              <div className="border-t border-white/10 p-5">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[2px] text-white/45">
                  Language / Idioma
                </p>

                <div className="rounded-2xl border border-yellow-400/25 bg-white/[0.04] p-2">
                  <LanguageSwitcher />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <a
                    href="tel:+14073606109"
                    onClick={closeMobileMenu}
                    className="rounded-xl bg-yellow-400 py-3.5 text-center font-bold text-black transition active:scale-95"
                  >
                    📞 {t.callNow}
                  </a>

                  <a
                    href="https://wa.me/14073606109"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-green-500 py-3.5 text-center font-bold text-green-400 transition active:scale-95"
                  >
                    {t.whatsapp}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}