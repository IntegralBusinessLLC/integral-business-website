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
      title: "Flatbed Towing",
      icon: Truck,
    },
    {
      title: "Roadside Assistance",
      icon: Wrench,
    },
    {
      title: "Emergency Towing",
      icon: Siren,
    },
    {
      title: "Vehicle Recovery",
      icon: Car,
    },
    {
      title: "Long Distance",
      icon: Route,
    },
    {
      title: "Jump Starts",
      icon: BatteryCharging,
    },
  ];

  return (
    <AnimatedSection>
      <section
        id="services"
        className="bg-[#0b0b0b] py-20 border-t border-yellow-500/20"
      >
        <div className="max-w-7xl mx-auto px-8">

          {/* Nuevo encabezado */}
          <div className="mb-16 text-center">

            <p className="text-yellow-400 uppercase tracking-[5px] font-semibold text-sm">
              WHAT WE OFFER
            </p>

            <h2 className="mt-3 text-5xl font-extrabold text-white">
              Our <span className="text-yellow-400">Services</span>
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-gray-400 text-lg leading-8">
              Professional towing and roadside assistance available
              24 hours a day, 7 days a week throughout Orlando
              and the surrounding areas.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">

              <div className="h-[2px] w-16 bg-yellow-400 rounded-full"></div>

              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>

              <div className="h-[2px] w-16 bg-yellow-400 rounded-full"></div>

            </div>

          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group bg-[#111] border border-yellow-500/30 rounded-2xl p-7 text-center transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-500/20 cursor-pointer"
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