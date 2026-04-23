import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import Stats from "./components/Stats";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import { CTA, Footer } from "./components/CtaFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f0f4ff]">
      <Navbar />
      <Hero />
      <VideoSection />
      <Stats />
      <HowItWorks />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}
