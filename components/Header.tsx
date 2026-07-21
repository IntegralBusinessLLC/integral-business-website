"use client";

import Image from "next/image";
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Header() {
  const [isContactOpen, setIsContactOpen] = useState(false);

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

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="#services"
              className="group relative font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:text-yellow-400"
            >
              Services

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="#fleet"
              className="group relative font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:text-yellow-400"
            >
              Fleet

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <button
              onClick={() => setIsContactOpen(true)}
              className="group relative font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:text-yellow-400"
            >
              Contact

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </button>

          </nav>

          {/* Premium CTA */}
          <button
            onClick={() => setIsContactOpen(true)}
            className="
              hidden
              md:flex
              items-center
              gap-4
              rounded-full
              bg-gradient-to-r
              from-yellow-300
              to-yellow-400
              px-7
              py-3
              border
              border-yellow-200/50
              shadow-lg
              shadow-yellow-500/20
              transition-all
              duration-300
              hover:-translate-y-1
              hover:scale-105
              hover:shadow-yellow-400/50
            "
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-2xl">
              📞
            </div>

            <div className="leading-tight">
              <div className="text-[11px] font-semibold uppercase tracking-[2px] text-gray-700">
                Need a Tow?
              </div>

              <div className="text-2xl font-extrabold text-black">
                (407) 360-6109
              </div>
            </div>

          </button>

        </div>
      </header>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}