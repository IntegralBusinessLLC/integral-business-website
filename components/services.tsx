"use client";

import { useState } from "react";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import {
  Truck,
  Wrench,
  Siren,
  Car,
  Route,
  BatteryCharging,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "flatbed Towing",
      icon: Truck,
      image: "/images/flatbed.jpg",
      description:
        "Safe and damage-free transportation for cars, SUVs, luxury and exotic vehicles.",
    },
    {
      title: "Roadside Assistance",
      icon: Wrench,
      image: "/images/roadside.jpg",
      description:
        "Flat tires, lockouts, fuel delivery and roadside help whenever you need it.",
    },
    {
      title: "Emergency Towing",
      icon: Siren,
      image: "/images/emergency.jpg",
      description:
        "24/7 emergency towing with fast response times across Orlando.",
    },
    {
      title: "Vehicle Recovery",
      icon: Car,
      image: "/images/recovery.jpg",
      description:
        "Professional recovery for stuck, disabled or off-road vehicles.",
    },
    {
      title: "Long Distance",
      icon: Route,
      image: "/images/longdistance.jpg",
      description:
        "Reliable long-distance vehicle transportation throughout Florida.",
    },
    {
      title: "Jump Starts",
      icon: BatteryCharging,
      image: "/images/jumpstart.jpg",
      description:
        "Quick battery jump-start service to get you back on the road.",
    },
  ];

  const [activeService, setActiveService] = useState(services[0]);

  return (
    <AnimatedSection>
      <section
        id="services"
        className="bg-[#0b0b0b] py-20 border-t border-yellow-500/20"
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16 text-center">
            <p className="text-yellow-400 uppercase tracking-[5px] font-semibold text-sm">
              WHAT WE OFFER
            </p>

            <h2 className="mt-3 text-5xl font-extrabold text-white">
              Our <span className="text-yellow-400">Services</span>
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-gray-400 text-lg leading-8">
              Professional towing and roadside assistance available 24 hours a
              day, 7 days a week throughout Orlando and the surrounding areas.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="h-[2px] w-16 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="h-[2px] w-16 bg-yellow-400 rounded-full"></div>
            </div>
          </div>

          <div className="mb-14">
            <div className="relative mx-auto h-[420px] max-w-5xl overflow-hidden rounded-3xl border border-yellow-500/30">
              <Image
                src={activeService.image}
                alt={activeService.title}
                fill
                className="object-cover transition-all duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-4xl font-bold text-white">
                  {activeService.title}
                </h3>

                <p className="mt-3 max-w-xl text-gray-200 text-lg leading-7">
                  {activeService.description}
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  onMouseEnter={() => setActiveService(service)}
                  className={`group rounded-2xl border p-7 text-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-500/20 ${
                    activeService.title === service.title
                      ? "border-yellow-400 bg-[#171717]"
                      : "border-yellow-500/30 bg-[#111]"
                  }`}
                >
                  <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400 text-black transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon size={40} strokeWidth={2.5} />
                  </div>

                  <h3 className="text-white font-semibold leading-6 group-hover:text-yellow-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}