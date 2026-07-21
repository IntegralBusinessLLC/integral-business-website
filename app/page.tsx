import Header from "../components/Header";
import Hero from "../components/hero";
import Services from "../components/services";
import WhyChooseUs from "../components/WhyChooseUs";
import Fleet from "../components/Fleet";
import CallNow from "../components/CallNow";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Fleet />
      <CallNow />
     

    </main>
  );
}