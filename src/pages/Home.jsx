import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/Sections/Hero";
import Journey from "../components/Sections/Journey";
import Recovery from "../components/Sections/Recovery";
import ROI from "../components/Sections/ROI";
import WhyLoveView from "../components/Sections/WhyLoveView";
import Plans from "../components/Sections/Plans";
import GrowthServices from "../components/Sections/GrowthServices";
import FAQ from "../components/Sections/FAQ";
import CTA from "../components/Sections/CTA";


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