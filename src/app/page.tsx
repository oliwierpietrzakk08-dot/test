import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import WhyMe from "@/components/sections/WhyMe";
import Realizations from "@/components/sections/Realizations";
import Testimonials from "@/components/sections/Testimonials";
import AboutMe from "@/components/sections/AboutMe";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <WhyMe />
      <Realizations />
      <Testimonials />
      <AboutMe />
      <Contact />
      <Footer />
    </main>
  );
}
