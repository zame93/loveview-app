import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/sections/Hero";
import Journey from "../components/sections/Journey";
import Recovery from "../components/sections/Recovery";
import ROI from "../components/sections/ROI";
import WhyLoveView from "../components/sections/WhyLoveView";
import Plans from "../components/sections/Plans";
import GrowthServices from "../components/sections/GrowthServices";
import FAQ from "../components/sections/FAQ";
import CTA from "../components/sections/CTA";


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