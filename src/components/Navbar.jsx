import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <div 
        className={`relative pointer-events-auto transition-all duration-500 ease-out px-8 py-4 rounded-full flex items-center justify-between w-full max-w-6xl ${
          scrolled ? 'glass text-clay shadow-sm' : 'bg-transparent text-charcoal drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]'
        }`}
      >
        <div className="font-outfit font-bold text-2xl tracking-tight flex items-center gap-3">
          <span style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>La Tartaruga</span>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-sans font-medium text-sm">
          <a href="#hero" className="hover:opacity-70 transition-opacity">{t('navbar', 'home')}</a>
          <a href="#gallery" className="hover:opacity-70 transition-opacity">{t('navbar', 'rooms')}</a>
          <a href="#services" className="hover:opacity-70 transition-opacity">{t('navbar', 'services')}</a>
          <a href="#manifesto" className="hover:opacity-70 transition-opacity">{t('navbar', 'philosophy')}</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity">{t('navbar', 'contact')}</a>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <div className="flex gap-2 font-mono text-xs font-semibold bg-black/10 px-3 py-1.5 rounded-full border border-white/20">
            <button onClick={() => setLanguage('es')} className={`transition-opacity ${language === 'es' ? 'opacity-100 text-clay' : 'opacity-50 hover:opacity-80'}`}>ES</button>
            <span className="opacity-30">|</span>
            <button onClick={() => setLanguage('en')} className={`transition-opacity ${language === 'en' ? 'opacity-100 text-clay' : 'opacity-50 hover:opacity-80'}`}>EN</button>
            <span className="opacity-30">|</span>
            <button onClick={() => setLanguage('it')} className={`transition-opacity ${language === 'it' ? 'opacity-100 text-clay' : 'opacity-50 hover:opacity-80'}`}>IT</button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hover:opacity-70 transition-opacity"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full mt-4 glass-dark rounded-3xl flex flex-col gap-4 shadow-xl border border-clay/20 md:hidden overflow-hidden text-charcoal">
            <nav className="flex flex-col font-sans font-medium text-lg">
              <a href="#hero" onClick={() => setIsMobileMenuOpen(false)} className="px-8 py-4 border-b border-white/5 hover:bg-white/5 active:bg-white/10">{t('navbar', 'home')}</a>
              <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="px-8 py-4 border-b border-white/5 hover:bg-white/5 active:bg-white/10">{t('navbar', 'rooms')}</a>
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="px-8 py-4 border-b border-white/5 hover:bg-white/5 active:bg-white/10">{t('navbar', 'services')}</a>
              <a href="#manifesto" onClick={() => setIsMobileMenuOpen(false)} className="px-8 py-4 border-b border-white/5 hover:bg-white/5 active:bg-white/10">{t('navbar', 'philosophy')}</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="px-8 py-4 border-b border-white/5 hover:bg-white/5 active:bg-white/10">{t('navbar', 'contact')}</a>
            </nav>
            <div className="flex justify-center gap-6 p-6 bg-black/20 font-mono font-semibold">
              <button onClick={() => { setLanguage('es'); setIsMobileMenuOpen(false); }} className={language === 'es' ? 'text-clay' : 'opacity-50'}>ES</button>
              <button onClick={() => { setLanguage('en'); setIsMobileMenuOpen(false); }} className={language === 'en' ? 'text-clay' : 'opacity-50'}>EN</button>
              <button onClick={() => { setLanguage('it'); setIsMobileMenuOpen(false); }} className={language === 'it' ? 'text-clay' : 'opacity-50'}>IT</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
