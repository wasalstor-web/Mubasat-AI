import Header from "../components/Header";
import Hero from "../components/Hero";
import LogoTicker from "../components/LogoTicker";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}