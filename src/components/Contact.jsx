import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Send, Mail, User, MessageSquare, Calendar } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkin: '',
    checkout: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = `Nueva solicitud de reserva / New booking request:
Nombre/Name: ${formData.name}
Email: ${formData.email}
Check-in: ${formData.checkin}
Check-out: ${formData.checkout}
Mensaje/Message: ${formData.message}`;

    try {
      // Enviar a Formspree
      await fetch('https://formspree.io/f/mkoaypqo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          checkin: formData.checkin,
          checkout: formData.checkout,
          message: formData.message,
          _subject: `Nueva solicitud de reserva - ${formData.name}`
        })
      });

      // Enviar a backend local (WhatsApp)
      try {
        await fetch('http://localhost:3001/api/whatsapp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: text })
        });
      } catch (waError) {
        console.error("El backend de WhatsApp no está disponible o falló:", waError);
      }

      alert("¡Solicitud enviada con éxito!");
      setFormData({ name: '', email: '', checkin: '', checkout: '', message: '' });
    } catch (error) {
      console.error(error);
      alert("Hubo un error al enviar el formulario. Por favor intenta de nuevo.");
    }
  };

  const locations = [
    {
      city: t('contact', 'hq1_city'),
      address: t('contact', 'hq1_address'),
      extra: t('contact', 'hq1_contact'),
    },
    {
      city: t('contact', 'hq2_city'),
      address: t('contact', 'hq2_address'),
    },
    {
      city: t('contact', 'hq3_city'),
      address: t('contact', 'hq3_address'),
    }
  ];

  return (
    <section id="contact" className="relative bg-moss text-charcoal py-32 px-8 md:px-16 overflow-hidden rounded-t-[3rem] mt-[-3rem] z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] animate-on-scroll">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-moss/20 to-transparent mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Column: Form & Locations */}
          <div className="flex flex-col gap-16">
            
            {/* Contact Form */}
            <div>
              <h2 className="font-sans font-bold text-4xl md:text-5xl mb-4">{t('contact', 'form_title')}</h2>
              <p className="font-serif text-xl text-charcoal/70 mb-8">{t('contact', 'form_desc')}</p>
              
              <form className="space-y-6 glass-dark p-8 rounded-4xl" onSubmit={handleSubmit}>
                <div className="relative">
                  <User className="absolute top-4 left-4 w-5 h-5 text-charcoal/40" />
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t('contact', 'name')} 
                    className="w-full bg-black/20 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-moss transition-colors font-sans text-sm"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute top-4 left-4 w-5 h-5 text-charcoal/40" />
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t('contact', 'email')} 
                    className="w-full bg-black/20 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-moss transition-colors font-sans text-sm"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <Calendar className="absolute top-4 left-4 w-5 h-5 text-charcoal/40" />
                    <input 
                      type="text" 
                      onFocus={(e) => (e.target.type = "date")}
                      onBlur={(e) => { if (!e.target.value) e.target.type = "text"; }}
                      name="checkin"
                      value={formData.checkin}
                      onChange={handleChange}
                      required
                      placeholder={t('contact', 'checkin')}
                      className="w-full bg-black/20 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-moss transition-colors font-sans text-sm min-h-[54px]"
                    />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute top-4 left-4 w-5 h-5 text-charcoal/40" />
                    <input 
                      type="text" 
                      onFocus={(e) => (e.target.type = "date")}
                      onBlur={(e) => { if (!e.target.value) e.target.type = "text"; }}
                      name="checkout"
                      value={formData.checkout}
                      onChange={handleChange}
                      required
                      placeholder={t('contact', 'checkout')}
                      className="w-full bg-black/20 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-moss transition-colors font-sans text-sm min-h-[54px]"
                    />
                  </div>
                </div>
                <div className="relative">
                  <MessageSquare className="absolute top-4 left-4 w-5 h-5 text-charcoal/40" />
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder={t('contact', 'message')} 
                    rows={4}
                    className="w-full bg-black/20 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-moss transition-colors font-sans text-sm resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-clay text-moss py-4 rounded-2xl font-sans font-bold flex items-center justify-center gap-2 hover:bg-[#b5952f] transition-colors shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                  {t('contact', 'send')} <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Locations */}
            <div>
              <h3 className="font-mono text-sm uppercase tracking-widest text-clay mb-6 border-b border-white/10 pb-4">
                {t('contact', 'locations_title')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {locations.map((loc, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-6 flex items-start gap-4 hover:bg-white/10 transition-colors group">
                    <MapPin className="w-6 h-6 text-clay shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <div>
                      <h4 className="font-sans font-bold text-lg mb-1">{loc.city}</h4>
                      <p className="font-sans text-sm text-charcoal/70 mb-2">{loc.address}</p>
                      {loc.extra && (
                        <p className="font-mono text-xs text-clay bg-clay/10 inline-block px-2 py-1 rounded-md mt-2">{loc.extra}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Map */}
          <div className="h-[600px] lg:h-auto rounded-4xl overflow-hidden border border-white/10 relative shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="absolute top-6 left-6 z-20 bg-moss/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-clay animate-pulse"></div>
              <span className="font-mono text-xs uppercase tracking-widest">{t('contact', 'map_title')}</span>
            </div>
            
            {/* Estilización avanzada del iframe para que parezca un mapa de telemetría/radar */}
            <div className="w-full h-full relative" style={{ filter: "grayscale(100%) invert(90%) contrast(1.2) hue-rotate(180deg)" }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.100912169728!2d8.995967676646873!3d45.507063671074744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786eb792ffef23b%3A0x7d013f9c6e3d2ff4!2sLargo%20Roma%2C%2017%2C%2020006%20Pregnana%20Milanese%20MI%2C%20Italia!5e0!3m2!1ses!2s!4v1717618000000!5m2!1ses!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 pointer-events-auto"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
