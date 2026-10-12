import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import DriftWall from "./components/reactbits/DriftWall";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Plans from "./components/Plans";
import Panel from "./components/Panel";
import Buyers from "./components/Buyers";
import Stepper from "./components/Stepper";
import FAQ from "./components/FAQ";
import CTABand from "./components/CTABand";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <DriftWall />
        <Stats />
        <Features />
        <Plans />
        <Panel />
        <Buyers />
        <Stepper />
        <FAQ />
        <CTABand />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
