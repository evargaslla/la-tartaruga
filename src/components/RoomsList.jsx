import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import { BedDouble } from 'lucide-react';

export default function RoomsList() {
  const sectionRef = useRef(null);
  const { t } = useLanguage();
  const rooms = t('roomsList', 'rooms') || [];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".room-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      });
      gsap.from(".rooms-header", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="rooms-list" className="py-24 px-8 md:px-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 rooms-header">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-moss mb-6">
            {t('roomsList', 'title')}
          </h2>
          <p className="font-serif text-xl text-moss/80 mb-4">
            {t('roomsList', 'desc1')}
          </p>
          <p className="font-serif text-xl text-moss/80 text-clay">
            {t('roomsList', 'desc2')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, idx) => (
            <div key={idx} className="room-card bg-cream rounded-3xl p-8 border border-clay/10 shadow-sm hover:shadow-md transition-shadow">
              <img 
                src="/img/PHOTO-2026-06-10-13-24-17.jpg" 
                alt={room.name} 
                className="w-full h-48 object-cover rounded-2xl mb-6"
              />
              <div className="w-12 h-12 bg-clay/10 rounded-full flex items-center justify-center text-clay mb-6">
                <BedDouble className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-bold text-xl text-charcoal mb-3">
                {room.name}
              </h3>
              <p className="font-serif text-charcoal/70 leading-relaxed text-sm">
                {room.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
