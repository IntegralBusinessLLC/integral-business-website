"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 250);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-10 right-10 z-50 transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-8 opacity-0"
      }`}
    >
      <div className="flex items-center gap-4">
        {/* WhatsApp */}
        <a
          href="https://wa.me/14073606109?text=Hi!%20I%20need%20a%20tow%20truck."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="relative flex items-center"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {hover && (
            <div className="absolute right-20 flex w-56 items-center rounded-2xl border border-yellow-400/40 bg-[#101010]/95 px-5 py-3 shadow-[0_0_35px_rgba(250,204,21,.16)] backdrop-blur-xl animate-[fadeIn_.25s_ease]">
              <div>
                <p className="text-sm font-semibold text-white">
                  Need a tow?
                </p>
                <p className="text-xs text-white/55">
                  Chat on WhatsApp
                </p>
              </div>
            </div>
          )}

          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-yellow-400/50 bg-[#090909] shadow-[0_0_30px_rgba(250,204,21,.18)] transition-transform duration-300 hover:scale-110">
            <FaWhatsapp className="text-[34px] text-[#25D366]" />
          </div>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/profile.php?id=100083564196667"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="relative flex items-center"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-yellow-400/50 bg-[#090909] shadow-[0_0_30px_rgba(250,204,21,.18)] transition-transform duration-300 hover:scale-110">
            <FaFacebookF className="text-[30px] text-[#1877F2]" />
          </div>
        </a>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}