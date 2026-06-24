import React, { useLayoutEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import RoomsList from './components/RoomsList';

import ServicesList from './components/ServicesList';
import Manifesto from './components/Manifesto';

import RoomGallery from './components/RoomGallery';

import Contact from './components/Contact';
import Footer from './components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LanguageProvider } from './context/LanguageContext';
import { Analytics } from '@vercel/analytics/react';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.utils.toArray('.animate-on-scroll').forEach((el) => {
        gsap.fromTo(el, 
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <LanguageProvider>
      <div className="relative w-full bg-cream min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <AboutUs />

          <ServicesList />
          <Manifesto />

          <RoomsList />
          <RoomGallery />

          <Contact />
        </main>
        <Footer />
      </div>
      <Analytics />
    </LanguageProvider>
  );
}

export default App;
