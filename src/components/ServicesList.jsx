import React from 'react';
import { Wifi, Tv, Wind, Bed, DoorOpen, Shirt, Zap, Coffee, Droplet, Apple, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ServicesList() {
  const { t } = useLanguage();

  const services = [
    { name: t('services', 'wifi'), icon: <Wifi className="w-5 h-5" /> },
    { name: t('services', 'tv'), icon: <Tv className="w-5 h-5" /> },
    { name: t('services', 'ac'), icon: <Wind className="w-5 h-5" /> },
    { name: t('services', 'linens'), icon: <Bed className="w-5 h-5" /> },
    { name: t('services', 'entrance'), icon: <DoorOpen className="w-5 h-5" /> },
    { name: t('services', 'iron'), icon: <Shirt className="w-5 h-5" /> },
    { name: t('services', 'utilities'), icon: <Zap className="w-5 h-5" /> },
  ];

  const breakfastItems = [
    { name: t('services', 'coffee'), icon: <Coffee className="w-5 h-5" /> },
    { name: t('services', 'milk'), icon: <Droplet className="w-5 h-5" /> },
    { name: t('services', 'water'), icon: <Droplet className="w-5 h-5" /> },
    { name: t('services', 'yogurt'), icon: <CheckCircle2 className="w-5 h-5" /> },
    { name: t('services', 'jam'), icon: <CheckCircle2 className="w-5 h-5" /> },
    { name: t('services', 'butter'), icon: <CheckCircle2 className="w-5 h-5" /> },
    { name: t('services', 'fruit'), icon: <Apple className="w-5 h-5" /> },
    { name: t('services', 'tea'), icon: <Coffee className="w-5 h-5" /> },
    { name: t('services', 'savory'), icon: <CheckCircle2 className="w-5 h-5" /> },
  ];

  return (
    <section id="services" className="py-32 px-8 md:px-16 bg-moss text-charcoal relative overflow-hidden animate-on-scroll">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <h2 className="font-sans font-bold text-4xl md:text-5xl mb-6">
            {t('services', 'title')}
          </h2>
          <p className="font-serif text-2xl text-charcoal/70">
            {t('services', 'subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Main Services Table */}
          <div className="glass-dark rounded-4xl p-8 md:p-10">
            <h3 className="font-mono text-sm text-clay font-semibold uppercase tracking-widest mb-8 border-b border-white/10 pb-4">
              {t('services', 'amenities')}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-charcoal/90 font-sans">
                  <div className="p-2 rounded-lg bg-clay/20 text-clay">{item.icon}</div>
                  <span className="font-medium">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Breakfast Table */}
          <div className="glass-dark rounded-4xl p-8 md:p-10">
            <h3 className="font-mono text-sm text-clay font-semibold uppercase tracking-widest mb-8 border-b border-white/10 pb-4">
              {t('services', 'breakfast')}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {breakfastItems.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-charcoal/80 font-sans text-sm">
                  <span className="text-clay opacity-80">{item.icon}</span>
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
