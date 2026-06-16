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
            <h4 className="font-mono text-xs uppercase tracking-widest text-clay mb-2">{t('footer', 'navigation')}</h4>
            <a href="#hero" className="opacity-70 hover:opacity-100 transition-opacity">{t('navbar', 'home')}</a>
            <a href="#gallery" className="opacity-70 hover:opacity-100 transition-opacity">{t('navbar', 'rooms')}</a>
            <a href="#services" className="opacity-70 hover:opacity-100 transition-opacity">{t('navbar', 'services')}</a>
            <a href="#manifesto" className="opacity-70 hover:opacity-100 transition-opacity">{t('navbar', 'philosophy')}</a>
            <a href="#contact" className="opacity-70 hover:opacity-100 transition-opacity">{t('navbar', 'contact')}</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-clay mb-2">{t('footer', 'connect')}</h4>
            <div className="flex items-center gap-4">
              <a href="https://wa.me/" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#25D366] text-white hover:opacity-90 transition-opacity">
                <i className="fab fa-whatsapp fa-lg"></i>
              </a>

              <a href="https://facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2] text-white hover:opacity-90 transition-opacity">
                <i className="fab fa-facebook-f fa-lg"></i>
              </a>

              <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white hover:opacity-90 transition-opacity">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
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
