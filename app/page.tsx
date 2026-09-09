import Header from "../components/Header";
import Hero from "../components/hero";
import Services from "../components/services";
import WhyChooseUs from "../components/WhyChooseUs";
import Fleet from "../components/Fleet";
import ServiceAreas from "@/components/ServiceAreas";
import CallNow from "../components/CallNow";
import Reviews from "@/components/Reviews";
import FloatingButtons from "@/components/FloatingButtons";
import JunkCarCash from "@/components/JunkCarCash";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <JunkCarCash />
      <Services />
      <WhyChooseUs />
      <Fleet />
      <ServiceAreas />
      <CallNow />
      <Reviews />
      <FloatingButtons />
    </main>
  );
}
