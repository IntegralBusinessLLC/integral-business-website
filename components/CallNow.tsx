"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "./context/LanguageContext";

export default function CallNow() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const { t } = useLanguage();

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "service_mj8tzmq",
        "template_nvij8ik",
        formRef.current,
        "XyEb8v-l9r2i_q1G8"
      );

      setStatus(t.requestSent);
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus(t.requestFailed);
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-28 bg-[#080808] py-24 border-t border-yellow-500/20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 rounded-3xl border border-yellow-500/20 bg-[#111] p-10 shadow-2xl shadow-yellow-500/10">

          <div className="flex flex-col justify-center">
            <h2 className="text-yellow-400 text-lg font-semibold uppercase tracking-[4px]">
              {t.contactEyebrow}
            </h2>

            <h3 className="mt-4 text-5xl font-extrabold text-white">
              {t.contactTitle}
            </h3>

            <p className="mt-5 text-lg text-gray-400 leading-8">
              {t.contactDescription}
            </p>

            <p className="mt-8 text-5xl font-extrabold text-yellow-400">
              (407) 360-6109
            </p>

            <a
              href="tel:+14073606109"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-yellow-300 to-yellow-400 px-8 py-4 text-lg font-bold text-black shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              📞 {t.callNow}
            </a>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white mb-8">
              {t.requestAssistance}
            </h3>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-5">

              <input
                type="text"
                name="name"
                required
                placeholder={t.fullName}
                className="w-full rounded-xl bg-[#1a1a1a] border border-gray-700 px-5 py-4 text-white outline-none focus:border-yellow-400"
              />

              <input
                type="tel"
                name="phone"
                required
                placeholder={t.phoneNumber}
                className="w-full rounded-xl bg-[#1a1a1a] border border-gray-700 px-5 py-4 text-white outline-none focus:border-yellow-400"
              />

              <input
                type="email"
                name="email"
                placeholder={t.emailOptional}
                className="w-full rounded-xl bg-[#1a1a1a] border border-gray-700 px-5 py-4 text-white outline-none focus:border-yellow-400"
              />

              <textarea
                rows={5}
                name="message"
                required
                placeholder={t.tellUsWhatHappened}
                className="w-full rounded-xl bg-[#1a1a1a] border border-gray-700 px-5 py-4 text-white outline-none resize-none focus:border-yellow-400"
              />

              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-xl bg-gradient-to-r from-yellow-300 to-yellow-400 py-4 text-lg font-bold text-black transition-all duration-300 hover:scale-[1.02] disabled:opacity-60"
              >
                {sending ? t.sending : t.sendRequest}
              </button>

              {status && (
                <p className="text-center text-sm text-white">
                  {status}
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}