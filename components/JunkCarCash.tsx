"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import PrivacyNotice from "./PrivacyNotice";
import { ArrowUpRight, BadgeDollarSign, Camera, Car, FileCheck2, Truck } from "lucide-react";
import { useLanguage } from "./context/LanguageContext";

const inputClassName =
  "min-w-0 w-full rounded-xl border border-slate-300 bg-white px-3 py-3.5 text-sm text-slate-950 outline-none transition placeholder:text-slate-500 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/30 sm:px-4 sm:text-base";

const labelClassName = "mb-2 block text-sm font-semibold leading-6 text-slate-700 sm:text-base";

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

    if (formData.get("contact_consent") !== "yes") {
      setSent(false);
      setStatus(t.junkContactConsentRequired);
      return;
    }

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
      `Name: ${formData.get("name")}`,
      `Phone: ${formData.get("phone")}`,
      `Email: ${formData.get("email") || "Not provided"}`,
      `Vehicle: ${formData.get("year")} ${formData.get("make")} ${formData.get("model")}`,
      `Runs: ${formData.get("runs")}`,
      `Pickup location: ${formData.get("pickup_location")}`,
      "Title in seller's name: Yes",
      "Vehicle complete: Yes",
      "Permission to contact about this request: Yes",
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
          <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="lg:sticky lg:top-28">
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

            <div className="rounded-[2rem] border border-slate-200 bg-[#f4f7fa] p-5 shadow-[0_24px_80px_rgba(0,0,0,.3)] sm:p-9">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-400 text-black">
                  <Car className="h-7 w-7" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-950 sm:text-3xl">{t.junkFormTitle}</h3>
                  <p className="mt-2 leading-6 text-slate-600">{t.junkFormDescription}</p>
                </div>
              </div>

              <form ref={formRef} method="post" onSubmit={submitLead} className="mt-8 space-y-7">
                <fieldset>
                  <legend className="mb-5 text-lg font-bold text-slate-950">{t.junkContactHeading}</legend>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                    <label className="min-w-0">
                      <span className={`${labelClassName} min-h-12 sm:min-h-6`}>{t.fullName} <span aria-hidden="true">*</span></span>
                      <input className={inputClassName} name="name" autoComplete="name" required />
                    </label>
                    <label className="min-w-0">
                      <span className={`${labelClassName} min-h-12 sm:min-h-6`}>{t.phoneNumber} <span aria-hidden="true">*</span></span>
                      <input className={inputClassName} name="phone" type="tel" autoComplete="tel" placeholder="(407) 555-0123" required />
                    </label>
                    <label className="min-w-0">
                      <span className={`${labelClassName} min-h-12 sm:min-h-6`}>{t.emailOptional}</span>
                      <input className={inputClassName} name="email" type="email" autoComplete="email" />
                    </label>
                    <label className="min-w-0">
                      <span className={`${labelClassName} min-h-12 sm:min-h-6`}>{t.junkPickupLocation} <span aria-hidden="true">*</span></span>
                      <input className={inputClassName} name="pickup_location" placeholder={t.junkLocationPlaceholder} required />
                    </label>
                  </div>
                </fieldset>

                <fieldset className="border-t border-slate-200 pt-7">
                  <legend className="float-left mb-6 w-full text-2xl font-extrabold text-slate-950">{t.junkVehicleHeading}</legend>
                  <div className="clear-both space-y-5">
                    <label className="block">
                      <span className={labelClassName}>{t.junkYear} <span aria-hidden="true">*</span></span>
                      <input className={inputClassName} name="year" inputMode="numeric" placeholder="2015" required />
                    </label>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                      <label className="min-w-0">
                        <span className={labelClassName}>{t.junkMake} <span aria-hidden="true">*</span></span>
                        <input className={inputClassName} name="make" placeholder="Ford" required />
                      </label>
                      <label className="min-w-0">
                        <span className={labelClassName}>{t.junkModel} <span aria-hidden="true">*</span></span>
                        <input className={inputClassName} name="model" placeholder="Explorer" required />
                      </label>
                      <label className="grid min-w-0 grid-rows-[1fr_auto]">
                        <span className={labelClassName}>{t.junkRunsQuestion} <span aria-hidden="true">*</span></span>
                        <select className={inputClassName} name="runs" required defaultValue="">
                          <option value="" disabled>{t.junkChoose}</option>
                          <option value="yes">{t.junkYes}</option>
                          <option value="no">{t.junkNo}</option>
                          <option value="unknown">{t.junkNotSure}</option>
                        </select>
                      </label>
                      <label className="grid min-w-0 grid-rows-[1fr_auto]">
                        <span className={labelClassName}>{t.junkTitleShortQuestion} <span aria-hidden="true">*</span></span>
                        <select className={inputClassName} name="title_confirmed" required defaultValue="">
                          <option value="" disabled>{t.junkChoose}</option>
                          <option value="yes">{t.junkYes}</option>
                          <option value="no">{t.junkNo}</option>
                        </select>
                      </label>
                    </div>
                    <label className="block">
                      <span className={labelClassName}>{t.junkCompleteQuestion} <span aria-hidden="true">*</span></span>
                      <select className={inputClassName} name="complete_confirmed" required defaultValue="">
                        <option value="" disabled>{t.junkChoose}</option>
                        <option value="yes">{t.junkYes}</option>
                        <option value="no">{t.junkNo}</option>
                      </select>
                    </label>
                  </div>
                </fieldset>

                <label className="block">
                  <span className={labelClassName}>{t.junkNotes}</span>
                  <textarea className={`${inputClassName} resize-y`} name="notes" rows={4} placeholder={t.junkNotesPlaceholder} />
                </label>

                <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-slate-700 sm:text-base">
                  <input className="mt-1 h-5 w-5 shrink-0 accent-yellow-500" type="checkbox" name="contact_consent" value="yes" required />
                  <span>{t.junkContactConsent}</span>
                </label>

                <button
                  type="submit"
                  disabled={sending}
                  className="flex w-full items-center justify-between gap-4 rounded-xl bg-yellow-400 px-5 py-4 text-base font-extrabold text-black shadow-lg shadow-yellow-500/15 transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60 sm:px-6 sm:text-lg"
                >
                  <span>{sending ? t.junkSending : t.junkSubmit}</span>
                  <ArrowUpRight className="h-6 w-6 shrink-0" />
                </button>

                {status && (
                  <div
                    aria-live="polite"
                    className={`rounded-xl border px-4 py-3 text-center text-sm font-semibold ${
                      sent
                        ? "border-green-600/30 bg-green-50 text-green-800"
                        : "border-amber-500/30 bg-amber-50 text-amber-900"
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
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-green-600/30 bg-green-50 px-6 py-3.5 font-bold text-green-800 transition hover:bg-green-100"
                  >
                    <Camera className="h-5 w-5" />
                    {t.junkWhatsappPhotos}
                  </a>
                )}
                <p className="text-sm leading-6 text-slate-600">{t.junkFormDisclaimer}</p>
                <PrivacyNotice tone="light" />
                <noscript><p className="text-sm text-amber-900">{t.formNeedsJavascript}</p></noscript>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
}
