import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/landing/Hero";
import Journey from "../components/landing/Journey";
import Recovery from "../components/landing/Recovery";
import ROI from "../components/landing/ROI";
import WhyLoveView from "../components/landing/WhyLoveView";
import Plans from "../components/landing/Plans";
import GrowthServices from "../components/landing/GrowthServices";
import FAQ from "../components/landing/FAQ";
import CTA from "../components/landing/CTA";


export default function Home() {
  return (
    <>
  <Navbar />

  <Hero />
  <Journey />
  <Recovery />
  <ROI />
  <WhyLoveView />
  <Plans />
  <GrowthServices />
  <CTA />

  <Footer />
</>
  );
}