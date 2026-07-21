"use client";

import { motion, AnimatePresence } from "framer-motion";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactModal({
  isOpen,
  onClose,
}: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="w-[90%] max-w-md rounded-2xl bg-[#111] border border-yellow-400 p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
          >
            <h2 className="text-3xl font-bold text-yellow-400 text-center">
              CONTACT US
            </h2>

            <p className="text-center text-gray-400 mt-2">
              24/7 Towing & Roadside Assistance
            </p>

            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>

              <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
                Available Now
              </span>
            </div>

            <div className="mt-6 space-y-6 text-white">
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-1">
                  Phone
                </p>

                <a
                  href="tel:+14073606109"
                  className="text-4xl font-bold hover:text-yellow-400 transition"
                >
                  (407) 360-6109
                </a>
              </div>

              <div className="text-center">
                <p className="text-gray-400 text-sm">
                  Location
                </p>

                <p className="font-semibold">
                  Orlando, Florida
                </p>
              </div>
            </div>

            <a
              href="tel:+14073606109"
              className="mt-8 block w-full rounded-xl bg-yellow-400 py-4 text-center font-bold text-black hover:bg-yellow-300 hover:scale-105 transition"
            >
              📞 Call Now
            </a>

            <button
              onClick={onClose}
              className="mt-4 w-full rounded-xl border border-gray-600 py-3 text-gray-300 hover:bg-gray-800 transition"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}