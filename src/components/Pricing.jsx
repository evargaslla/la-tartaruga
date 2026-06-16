import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Pricing() {
  const { t } = useLanguage();

  const plans = [
    {
      name: t('pricing', 'plan1_name'),
      desc: t('pricing', 'plan1_desc'),
      price: "120",
      features: [
        t('pricing', 'plan1_feat1'),
        t('pricing', 'plan1_feat2'),
        t('pricing', 'plan1_feat3')
      ],
      highlight: false
    },
    {
      name: t('pricing', 'plan2_name'),
      desc: t('pricing', 'plan2_desc'),
      price: "180",
      features: [
        t('pricing', 'plan2_feat1'),
        t('pricing', 'plan2_feat2'),
        t('pricing', 'plan2_feat3'),
        t('pricing', 'plan2_feat4')
      ],
      highlight: true
    },
    {
      name: t('pricing', 'plan3_name'),
      desc: t('pricing', 'plan3_desc'),
      price: "250",
      features: [
        t('pricing', 'plan3_feat1'),
        t('pricing', 'plan3_feat2'),
        t('pricing', 'plan3_feat3'),
        t('pricing', 'plan3_feat4')
      ],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-32 px-8 md:px-16 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-charcoal mb-4">
            {t('pricing', 'title')}
          </h2>
          <p className="font-serif text-2xl text-charcoal/70">
            {t('pricing', 'subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`rounded-4xl p-8 md:p-10 transition-all duration-300 ${
                plan.highlight 
                  ? 'bg-moss text-charcoal shadow-2xl md:scale-105 border border-moss/20 relative z-10' 
                  : 'bg-moss text-charcoal shadow-sm border border-charcoal/10 relative z-0'
              }`}
            >
              <h3 className="font-sans font-bold text-2xl mb-2">{plan.name}</h3>
              <p className={`font-sans text-sm mb-8 ${plan.highlight ? 'text-charcoal/70' : 'text-charcoal/60'}`}>{plan.desc}</p>
              <div className="font-serif italic text-6xl mb-8">
                €{plan.price} <span className={`font-sans font-normal text-lg not-italic ${plan.highlight ? 'text-charcoal/50' : 'text-charcoal/50'}`}>{t('pricing', 'per_night')}</span>
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${plan.highlight ? 'text-clay' : 'text-clay'}`} />
                    <span className="font-sans text-sm font-medium">{feat}</span>
                  </li>
                ))}
              </ul>
              <button 
                className={`w-full py-4 rounded-full font-sans font-bold text-sm tracking-wide transition-transform hover:scale-105 ${
                  plan.highlight 
                    ? 'bg-clay text-white hover:bg-[#b04a29]' 
                    : 'bg-clay/10 text-clay hover:bg-clay hover:text-moss'
                }`}
              >
                {t('pricing', 'select')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
