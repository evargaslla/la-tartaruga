import React, { useState, useEffect, useRef } from 'react';
import { MousePointer2, Calendar as CalendarIcon, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { useLanguage } from '../context/LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-32 px-8 md:px-16 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 max-w-2xl">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-clay mb-6">
            {t('features', 'title')}
          </h2>
          <p className="font-serif text-2xl text-charcoal/70">
            {t('features', 'subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <FeatureDeck />
          <FeatureTelemetry />
          <FeatureAgenda />
        </div>
      </div>
    </section>
  );
}

function FeatureDeck() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  
  const cards = [
    { title: t('features', 'deck_1_title'), desc: t('features', 'deck_1_desc') },
    { title: t('features', 'deck_2_title'), desc: t('features', 'deck_2_desc') },
    { title: t('features', 'deck_3_title'), desc: t('features', 'deck_3_desc') }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-moss rounded-4xl p-8 border border-clay/20 shadow-sm h-96 flex flex-col relative overflow-hidden group">
      <div className="mb-8">
        <h3 className="font-mono text-sm text-clay font-semibold uppercase tracking-widest mb-2">{t('features', 'deck_mod')}</h3>
        <h4 className="font-sans text-2xl font-bold text-charcoal">{t('features', 'deck_title')}</h4>
      </div>
      
      <div className="flex-1 relative mt-4">
        {cards.map((card, idx) => {
          const isActive = idx === activeIndex;
          const isNext = idx === (activeIndex + 1) % 3;
          
          let yOffset = "translate-y-full opacity-0 scale-90";
          let zIndex = 0;
          
          if (isActive) {
            yOffset = "translate-y-0 opacity-100 scale-100";
            zIndex = 20;
          } else if (isNext) {
            yOffset = "translate-y-4 opacity-50 scale-95";
            zIndex = 10;
          }

          return (
            <div 
              key={idx}
              className={`absolute top-0 left-0 w-full bg-cream rounded-2xl p-6 border border-clay/20 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${yOffset}`}
              style={{ zIndex }}
            >
              <CheckCircle2 className="text-clay mb-4 w-6 h-6" />
              <h5 className="font-sans font-bold text-lg text-clay mb-2">{card.title}</h5>
              <p className="font-sans text-sm text-charcoal/70">{card.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FeatureTelemetry() {
  const { t, tArray } = useLanguage();
  const messages = tArray('features', 'tele_msgs');
  const [text, setText] = useState("");
  const [msgIndex, setMsgIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!messages || messages.length === 0) return;
    const currentMsg = messages[msgIndex % messages.length];
    let timeout;

    if (!isDeleting && text === currentMsg) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setMsgIndex((prev) => prev + 1);
    } else {
      timeout = setTimeout(() => {
        setText(currentMsg.substring(0, text.length + (isDeleting ? -1 : 1)));
      }, isDeleting ? 30 : 70);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, msgIndex, messages]);

  return (
    <div className="bg-moss rounded-4xl p-8 border border-white/10 shadow-lg h-96 flex flex-col relative overflow-hidden text-charcoal">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="font-mono text-sm text-clay font-semibold uppercase tracking-widest mb-2">{t('features', 'tele_mod')}</h3>
          <h4 className="font-sans text-2xl font-bold">{t('features', 'tele_title')}</h4>
        </div>
        <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
          <div className="w-2 h-2 rounded-full bg-clay animate-pulse"></div>
          <span className="font-mono text-xs text-white/70 uppercase">{t('features', 'tele_active')}</span>
        </div>
      </div>
      
      <div className="flex-1 mt-auto flex flex-col justify-end bg-black/30 rounded-2xl p-6 font-mono text-sm text-clay border border-white/5">
        <div>
          <span className="text-white/40 mr-2">&gt;</span>
          {text}
          <span className="inline-block w-2 h-4 bg-clay ml-1 animate-pulse align-middle"></span>
        </div>
      </div>
    </div>
  );
}

function FeatureAgenda() {
  const { t } = useLanguage();
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      
      tl.to(".cursor", { x: 80, y: 50, duration: 1, ease: "power2.inOut" })
        .to(".cursor", { scale: 0.8, duration: 0.1 })
        .to(".cursor", { scale: 1, duration: 0.1 })
        .to(".day-btn", { backgroundColor: "#2E4036", color: "#F2F0E9", duration: 0.2 }, "-=0.1")
        .to(".cursor", { x: 180, y: 150, duration: 1, ease: "power2.inOut", delay: 0.5 })
        .to(".cursor", { scale: 0.8, duration: 0.1 })
        .to(".cursor", { scale: 1, duration: 0.1 })
        .to(".save-btn", { scale: 0.95, duration: 0.1 }, "-=0.1")
        .to(".save-btn", { scale: 1, duration: 0.1 })
        .to(".cursor", { opacity: 0, duration: 0.3 })
        .to(".day-btn", { backgroundColor: "transparent", color: "#1A1A1A", duration: 0.1 })
        .set(".cursor", { x: -20, y: -20, opacity: 1 });

    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} className="bg-moss rounded-4xl p-8 border border-clay/20 shadow-sm h-96 flex flex-col relative overflow-hidden">
      <div className="mb-8">
        <h3 className="font-mono text-sm text-clay font-semibold uppercase tracking-widest mb-2">{t('features', 'agenda_mod')}</h3>
        <h4 className="font-sans text-2xl font-bold text-charcoal">{t('features', 'agenda_title')}</h4>
      </div>
      
      <div className="flex-1 relative border border-clay/20 rounded-2xl p-6 bg-cream/50 flex flex-col">
        <div className="grid grid-cols-7 gap-2 mb-4 text-center font-mono text-xs text-charcoal/50">
          <span>L</span><span>M</span><span>X</span><span>J</span><span>V</span><span>S</span><span>D</span>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {[...Array(14)].map((_, i) => (
            <div 
              key={i} 
              className={`aspect-square rounded-md border border-clay/20 flex items-center justify-center font-sans text-xs ${i === 9 ? 'day-btn' : 'bg-moss'}`}
            >
              {i + 1}
            </div>
          ))}
        </div>
        
        <div className="mt-auto flex justify-end">
          <button className="save-btn bg-moss text-white font-sans text-xs px-4 py-2 rounded-full mt-4 flex items-center gap-2">
            {t('features', 'agenda_btn')} <CheckCircle2 className="w-3 h-3" />
          </button>
        </div>

        <div className="cursor absolute top-0 left-0 text-charcoal -translate-x-full -translate-y-full drop-shadow-md z-50">
          <MousePointer2 className="w-6 h-6 fill-white" />
        </div>
      </div>
    </div>
  );
}
