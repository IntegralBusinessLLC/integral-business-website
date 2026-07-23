"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-black/95 backdrop-blur border-b border-yellow-500/40 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Integral Business LLC"
              width={60}
              height={60}
            />

            <div>
              <h1 className="text-yellow-400 font-bold text-xl">
                Integral Business LLC
              </h1>

              <p className="text-gray-400 text-sm">
                Towing & Roadside Assistance
              </p>
            </div>
          </div>

          {/* Navegación */}
          <nav className="hidden md:flex items-center gap-12 text-white">
            <a
              href="#home"
              className="group relative font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:text-yellow-400"
            >
              Home
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#services"
              className="group relative font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:text-yellow-400"
            >
              Services
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#fleet"
              className="group relative font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:text-yellow-400"
            >
              Fleet
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#contact"
              className="group relative font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:text-yellow-400"
            >
              Contact
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>

          {/* Premium CTA */}
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
                  Need a Tow?
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
                    Available Now
                  </span>
                </div>

                <h3 className="mt-3 text-3xl font-extrabold text-black">
                  (407) 360-6109
                </h3>

                <p className="mt-2 text-black/80">
                  24/7 towing and roadside assistance throughout Orlando.
                </p>
              </div>

              <div className="space-y-5 p-6">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-[2px] text-yellow-400">
                    Fast Response
                  </h4>

                  <p className="mt-2 leading-7 text-white/70">
                    Call now for immediate towing, jump starts, lockouts, fuel
                    delivery, tire changes, and vehicle transport.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:+14073606109"
                    className="rounded-xl bg-yellow-400 py-4 text-center font-bold text-black transition hover:scale-105"
                  >
                    📞 Call Now
                  </a>

                  <a
                    href="https://wa.me/14073606109"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-green-500 py-4 text-center font-bold text-green-400 transition hover:scale-105 hover:bg-green-500/10"
                  >
                    WhatsApp
                  </a>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="font-semibold text-yellow-400">
                    Why choose us?
                  </div>

                  <ul className="mt-3 space-y-2 text-sm text-white/70">
                    <li>✔ 24/7 Emergency Service</li>
                    <li>✔ Fast Arrival Times</li>
                    <li>✔ Licensed & Insured</li>
                    <li>✔ Professional Equipment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}