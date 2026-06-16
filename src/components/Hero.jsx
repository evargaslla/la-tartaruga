import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const comp = useRef(null);
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['/img/fachada_pegnana.jpg', '/img/arluno.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1.4,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.4
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} id="hero" className="relative w-full h-[100dvh] flex items-end pb-24 px-8 md:px-16 overflow-hidden rounded-b-4xl md:rounded-b-6xl z-10">
      <div className="absolute inset-0 z-0 bg-moss overflow-hidden">
        {images.map((src, index) => (
          <img 
            key={src}
            src={src} 
            alt="Fachada La Tartaruga"
            className={`absolute w-full h-full object-cover transition-all duration-[1500ms] ease-in-out ${
              index === currentImageIndex 
                ? 'opacity-80 translate-x-0' 
                : 'opacity-0 -translate-x-10 scale-105'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-moss via-moss/40 to-transparent mix-blend-multiply opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 pb-32">
        <img 
          src="/img/logo.png" 
          alt="La Tartaruga Logo" 
          className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.6)] opacity-90 hero-text"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-end">
        <div className="max-w-4xl">
          <p className="hero-text text-charcoal/70 font-mono text-xs md:text-sm mb-6 uppercase tracking-[0.2em]">
            {t('hero', 'subtitle')}
          </p>
          <h1 className="text-white leading-[1.05]">
            <span className="hero-text block font-sans font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight">
              {t('hero', 'title1')}
            </span>
            <span className="hero-text block font-serif italic text-6xl md:text-8xl lg:text-[10rem] text-charcoal mt-2 md:mt-0">
              {t('hero', 'title2')}
            </span>
          </h1>
          <div className="hero-text mt-10 md:mt-12 flex flex-wrap gap-4">
            <button onClick={scrollToContact} className="bg-clay text-moss px-8 py-4 rounded-full font-sans font-bold text-lg hover:scale-105 transition-transform duration-300 ease-out shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] hover:bg-[#b5952f]">
              {t('hero', 'cta')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
