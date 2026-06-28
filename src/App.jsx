import Hero from "./components/Sections/Hero";
import Navbar from "./components/layout/Navbar";
import Journey from "./components/Sections/Journey";
import Recovery from "./components/Sections/Recovery";
import ROI from "./components/Sections/ROI";
import WhyLoveView from "./components/Sections/WhyLoveView";
import Plans from "./components/Sections/Plans";
import GrowthServices from "./components/Sections/GrowthServices";
import CTA from "./components/Sections/CTA";
import Footer from "./components/layout/Footer";
export default function App() {
  return (
    <div className="min-h-screen bg-white">
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
</div>
)
}
