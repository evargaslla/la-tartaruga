import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

export default function Manifesto() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const { t } = useLanguage();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".parallax-bg", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      const lines = gsap.utils.toArray('.manifesto-line');
      
      lines.forEach((line) => {
        gsap.from(line, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: line,
            start: "top 85%",
          }
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="manifesto" className="relative w-full min-h-[80vh] flex items-center justify-center py-32 px-8 overflow-hidden bg-moss">
      <div className="absolute inset-0 z-0">
        <div className="parallax-bg absolute inset-0 -top-[20%] h-[140%] w-full">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2070" 
            alt="Textura Orgánica"
            className="w-full h-full object-cover opacity-30 grayscale mix-blend-overlay"
          />
        </div>
        <div className="absolute inset-0 bg-moss/80"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center" ref={textRef}>
        <h2 className="font-sans font-bold text-4xl md:text-6xl lg:text-7xl leading-tight text-white/50 mb-12">
          <div className="manifesto-line overflow-hidden py-2">
            {t('manifesto', 'normal_ask')}
          </div>
          <div className="manifesto-line overflow-hidden text-white font-serif italic py-2">
            {t('manifesto', 'normal_q')}
          </div>
        </h2>
        
        <h2 className="font-sans font-bold text-4xl md:text-6xl lg:text-7xl leading-tight text-white mt-12">
          <div className="manifesto-line overflow-hidden py-2 text-clay">
            {t('manifesto', 'we_ask')}
          </div>
          <div className="manifesto-line overflow-hidden text-charcoal py-2">
            {t('manifesto', 'we_q')}
          </div>
        </h2>
      </div>
    </section>
  );
}
