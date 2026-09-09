"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { BadgeDollarSign, Camera, Car, FileCheck2, MapPin, Truck } from "lucide-react";
import { useLanguage } from "./context/LanguageContext";

const inputClassName =
  "w-full rounded-xl border border-white/15 bg-[#181818] px-4 py-3.5 text-white outline-none transition placeholder:text-white/35 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/15";

export default function JunkCarCash() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const [sent, setSent] = useState(false);
  const { t } = useLanguage();

  const submitLead = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const titleConfirmed = formData.get("title_confirmed") === "yes";
    const completeConfirmed = formData.get("complete_confirmed") === "yes";

    if (!titleConfirmed || !completeConfirmed) {
      setSent(false);
      setStatus(t.junkEligibilityMessage);
      return;
    }

    setSending(true);
    setSent(false);
    setStatus("");

    const message = [
      "CASH FOR JUNK CAR LEAD",
      `Vehicle: ${formData.get("year")} ${formData.get("make")} ${formData.get("model")}`,
      `Condition: ${formData.get("condition")}`,
      `Pickup location: ${formData.get("pickup_location")}`,
      `Requested cash: $${formData.get("asking_price")}`,
      "Title in seller's name: Yes",
      "Vehicle complete: Yes",
      `Notes: ${formData.get("notes") || "None"}`,
      "Please contact this seller and request photos of the vehicle, VIN and title.",
    ].join("\n");

    try {
      await emailjs.send(
        "service_mj8tzmq",
        "template_nvij8ik",
        {
          name: String(formData.get("name") ?? ""),
          phone: String(formData.get("phone") ?? ""),
          email: String(formData.get("email") ?? ""),
          message,
        },
        "XyEb8v-l9r2i_q1G8"
      );

      setSent(true);
      setStatus(t.junkRequestSent);
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setStatus(t.junkRequestFailed);
    } finally {
      setSending(false);
    }
  };

  return (
      <section
        id="sell-your-car"
        className="scroll-mt-24 overflow-hidden border-y border-yellow-400/20 bg-[#050505] py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-yellow-400">
                {t.junkEyebrow}
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                <span className="block">{t.junkTitleBefore}</span>
                <span className="block text-yellow-400">{t.junkTitleHighlight}</span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                {t.junkDescription}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {[t.junkCashBadge, t.junkPickupBadge, t.junkTitleBadge].map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-300"
                  >
                    ✓ {badge}
                  </span>
                ))}
              </div>

              <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[2rem] border border-yellow-400/25 shadow-[0_24px_70px_rgba(0,0,0,.55)]">
                <Image
                  src="/images/junk-car-cash.jpeg"
                  alt={t.junkImageAlt}
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-400">
                    Integral Business LLC
                  </p>
                  <p className="mt-2 text-xl font-extrabold text-white">{t.junkArea}</p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { icon: BadgeDollarSign, title: t.junkStepOfferTitle, text: t.junkStepOfferText },
                  { icon: Truck, title: t.junkStepPickupTitle, text: t.junkStepPickupText },
                  { icon: FileCheck2, title: t.junkStepPaidTitle, text: t.junkStepPaidText },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                    <Icon className="h-7 w-7 text-yellow-400" />
                    <h3 className="mt-4 font-extrabold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-yellow-400/25 bg-[#101010] p-6 shadow-[0_24px_80px_rgba(250,204,21,.08)] sm:p-9">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-400 text-black">
                  <Car className="h-7 w-7" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-3xl font-extrabold text-white">{t.junkFormTitle}</h3>
                  <p className="mt-2 leading-6 text-slate-400">{t.junkFormDescription}</p>
                </div>
              </div>

              <form ref={formRef} onSubmit={submitLead} className="mt-8 space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className={inputClassName} name="name" placeholder={t.fullName} required />
                  <input className={inputClassName} name="phone" type="tel" placeholder={t.phoneNumber} required />
                </div>

                <input className={inputClassName} name="email" type="email" placeholder={t.emailOptional} />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <input className={inputClassName} name="year" inputMode="numeric" placeholder={t.junkYear} required />
                  <input className={inputClassName} name="make" placeholder={t.junkMake} required />
                  <input className={inputClassName} name="model" placeholder={t.junkModel} required />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="relative">
                    <MapPin className="pointer-events-none absolute left-4 top-4 h-5 w-5 text-yellow-400" />
                    <input className={`${inputClassName} pl-12`} name="pickup_location" placeholder={t.junkPickupLocation} required />
                  </label>
                  <input className={inputClassName} name="asking_price" type="number" min="0" step="1" placeholder={t.junkAskingPrice} required />
                </div>

                <select className={inputClassName} name="condition" required defaultValue="">
                  <option value="" disabled>{t.junkCondition}</option>
                  <option value={t.junkConditionNotRunning}>{t.junkConditionNotRunning}</option>
                  <option value={t.junkConditionAccident}>{t.junkConditionAccident}</option>
                  <option value={t.junkConditionOther}>{t.junkConditionOther}</option>
                </select>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="rounded-2xl border border-white/10 bg-black/25 p-4 text-sm text-white">
                    <span className="block font-bold">{t.junkTitleQuestion}</span>
                    <select className={`${inputClassName} mt-3`} name="title_confirmed" required defaultValue="">
                      <option value="" disabled>{t.junkChoose}</option>
                      <option value="yes">{t.junkYes}</option>
                      <option value="no">{t.junkNo}</option>
                    </select>
                  </label>

                  <label className="rounded-2xl border border-white/10 bg-black/25 p-4 text-sm text-white">
                    <span className="block font-bold">{t.junkCompleteQuestion}</span>
                    <select className={`${inputClassName} mt-3`} name="complete_confirmed" required defaultValue="">
                      <option value="" disabled>{t.junkChoose}</option>
                      <option value="yes">{t.junkYes}</option>
                      <option value="no">{t.junkNo}</option>
                    </select>
                  </label>
                </div>

                <textarea className={`${inputClassName} resize-none`} name="notes" rows={4} placeholder={t.junkNotes} />

                <button
                  type="submit"
                  disabled={sending}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-300 to-yellow-400 px-6 py-4 text-lg font-extrabold text-black shadow-lg shadow-yellow-500/20 transition hover:-translate-y-0.5 hover:shadow-yellow-400/35 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <BadgeDollarSign className="h-6 w-6" />
                  {sending ? t.junkSending : t.junkSubmit}
                </button>

                {status && (
                  <div
                    aria-live="polite"
                    className={`rounded-xl border px-4 py-3 text-center text-sm font-semibold ${
                      sent
                        ? "border-green-500/30 bg-green-500/10 text-green-300"
                        : "border-yellow-400/30 bg-yellow-400/10 text-yellow-200"
                    }`}
                  >
                    {status}
                  </div>
                )}

                {sent && (
                  <a
                    href={`https://wa.me/14073606109?text=${encodeURIComponent(t.junkWhatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-green-500/50 bg-green-500/10 px-6 py-3.5 font-bold text-green-300 transition hover:bg-green-500/15"
                  >
                    <Camera className="h-5 w-5" />
                    {t.junkWhatsappPhotos}
                  </a>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
  );
}
