import Hero from "@/components/sections/home/Hero";
import Services from "@/components/sections/home/Services";
import Portfolio from "@/components/sections/home/Portfolio";
import Stats from "@/components/sections/home/Stats";
import Testimonials from "@/components/sections/home/Testimonials";
import CTA from "@/components/sections/home/CTA";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Services />
      <Stats />
      <Portfolio />
      <Testimonials />
      <CTA />
    </main>
  );
}
