import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Settings, ScanLine, Activity } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Archive() {
  const containerRef = useRef(null);
  const { t } = useLanguage();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.archive-card');
      
      cards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          pin: true,
          pinSpacing: false,
          id: `card-${i}`
        });

        if (i > 0) {
          gsap.to(cards[i - 1], {
            scale: 0.9,
            filter: "blur(20px)",
            opacity: 0.5,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "top top",
              scrub: true
            }
          });
        }
      });
      
      gsap.to('.gear-rotate', {
        rotation: 360,
        duration: 8,
        repeat: -1,
        ease: "linear"
      });

      gsap.to('.laser-line', {
        y: 180,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      gsap.to('.ecg-pulse', {
        scale: 1.5,
        opacity: 0,
        duration: 1.5,
        repeat: -1,
        ease: "power2.out"
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="archive" className="relative w-full bg-moss">
      {/* Card 1 */}
      <div className="archive-card h-[100vh] w-full relative top-0 bg-moss flex items-center justify-center p-8 border-b border-white/10 will-change-transform">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 text-charcoal">
            <h3 className="font-mono text-sm uppercase tracking-widest mb-4 opacity-70">{t('archive', 'sys1')}</h3>
            <h2 className="font-sans font-bold text-5xl mb-6">{t('archive', 'sys1_title')}</h2>
            <p className="font-serif text-2xl opacity-80">{t('archive', 'sys1_desc')}</p>
          </div>
          <div className="flex-1 flex justify-center items-center h-80 w-full bg-black/20 rounded-4xl border border-white/10 relative overflow-hidden">
            <Settings className="gear-rotate w-32 h-32 text-clay absolute" />
            <Settings className="gear-rotate w-20 h-20 text-charcoal/50 absolute" style={{ animationDirection: 'reverse', animationDuration: '6s' }} />
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="archive-card h-[100vh] w-full relative top-0 bg-[#25322b] flex items-center justify-center p-8 border-b border-white/10 shadow-2xl will-change-transform z-10">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 text-charcoal order-2 md:order-1 flex justify-center items-center h-80 w-full bg-black/20 rounded-4xl border border-white/10 relative overflow-hidden">
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
             <div className="laser-line w-full h-1 bg-clay shadow-[0_0_20px_rgba(204,88,51,0.9)] absolute top-4"></div>
             <ScanLine className="w-20 h-20 text-clay opacity-50" />
          </div>
          <div className="flex-1 text-charcoal order-1 md:order-2">
            <h3 className="font-mono text-sm uppercase tracking-widest mb-4 opacity-70">{t('archive', 'sys2')}</h3>
            <h2 className="font-sans font-bold text-5xl mb-6">{t('archive', 'sys2_title')}</h2>
            <p className="font-serif text-2xl opacity-80">{t('archive', 'sys2_desc')}</p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="archive-card h-[100vh] w-full relative top-0 bg-moss flex items-center justify-center p-8 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] will-change-transform z-20">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 text-charcoal">
            <h3 className="font-mono text-sm uppercase tracking-widest mb-4 opacity-70">{t('archive', 'sys3')}</h3>
            <h2 className="font-sans font-bold text-5xl mb-6">{t('archive', 'sys3_title')}</h2>
            <p className="font-serif text-2xl opacity-80">{t('archive', 'sys3_desc')}</p>
          </div>
          <div className="flex-1 flex justify-center items-center h-80 w-full bg-black/20 rounded-4xl border border-white/10 relative overflow-hidden">
             <Activity className="w-32 h-32 text-clay z-10" />
             <div className="ecg-pulse absolute inset-0 bg-clay/30 rounded-full mix-blend-screen" style={{ width: '150px', height: '150px', margin: 'auto' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
