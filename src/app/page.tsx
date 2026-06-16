import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import WhatsAppButton from '@/components/WhatsAppButton';
import type { Metadata } from "next";



export default function Home() {
  return (
    <main className="bg-black min-h-screen overflow-x-hidden">
      <div className="grain-overlay" />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
      <WhatsAppButton />
    </main>
  );
}
