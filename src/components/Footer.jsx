import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-moss text-charcoal pb-12 px-8 md:px-16 pt-8 relative z-20 animate-on-scroll">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 mb-16 border-t border-white/10 pt-16">
        <div className="max-w-sm">
          <h2 className="font-outfit font-bold text-3xl tracking-tight mb-6">La Tartaruga</h2>
          <p className="font-serif text-xl opacity-70 mb-8">
            {t('footer', 'desc')}
          </p>
          <div className="flex items-center gap-3 bg-white/5 px-4 py-2.5 rounded-full border border-white/10 w-max">
            <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] shadow-[0_0_10px_#10b981] animate-pulse"></div>
            <span className="font-mono text-xs uppercase tracking-widest text-white/80">{t('footer', 'status')}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-12 font-sans text-sm">
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-clay mb-2">{t('footer', 'protocols')}</h4>
            <a href="#pricing" className="opacity-70 hover:opacity-100 transition-opacity">Reservas</a>
            <a href="#features" className="opacity-70 hover:opacity-100 transition-opacity">Instalaciones</a>
            <a href="#services" className="opacity-70 hover:opacity-100 transition-opacity">Servicios</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono opacity-50">
        <p>{t('footer', 'rights')}</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-clay transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-clay transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
