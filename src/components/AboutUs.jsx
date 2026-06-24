import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

export default function AboutUs() {
  const sectionRef = useRef(null);
  const { t } = useLanguage();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".about-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 px-8 md:px-16 bg-cream">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="about-text font-sans font-bold text-4xl md:text-5xl text-charcoal mb-10 tracking-tight">
          {t('about', 'title')}
        </h2>
        <div className="space-y-6 font-serif text-xl md:text-2xl text-charcoal/80 leading-relaxed">
          <p className="about-text">
            {t('about', 'desc1')}
          </p>
          <p className="about-text">
            {t('about', 'desc2')}
          </p>
          <p className="about-text font-medium text-clay">
            {t('about', 'desc3')}
          </p>
        </div>
      </div>
    </section>
  );
}
