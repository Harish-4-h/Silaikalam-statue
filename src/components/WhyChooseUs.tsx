import React from 'react';
import { whyChoosePoints } from '../data/businessData';
import { Award, PencilRuler, Sparkles, ShieldCheck, Layers, PhoneCall, Check } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Award,
  PencilRuler,
  Sparkles,
  ShieldCheck,
  Layers,
  PhoneCall,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-charcoal-900/40 relative border-y border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold-400 uppercase">
            <Check className="w-4 h-4" />
            <span>Credibility & Assurance</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory-50 tracking-tight">
            Why Choose Silaikalam
          </h2>
          <p className="text-sm sm:text-base text-ivory-300 font-light leading-relaxed">
            We physically build sculptures in Coimbatore with a clear focus on structural strength, proportionate beauty, and honest direct communication.
          </p>
        </div>

        {/* 6 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChoosePoints.map((point) => {
            const Icon = iconMap[point.iconName] || Sparkles;
            return (
              <div
                key={point.title}
                className="p-8 rounded-2xl bg-charcoal-900 border border-charcoal-800 hover:border-gold-500/40 transition-all duration-300 space-y-4 group shadow-xl hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-charcoal-800 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-charcoal-950 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-ivory-100 group-hover:text-gold-400 transition-colors">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-ivory-300 leading-relaxed font-light">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
