import React from 'react';
import { services, createWhatsAppUrl } from '../data/businessData';
import { ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 bg-charcoal-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold-400 uppercase">
            <Sparkles className="w-4 h-4" />
            <span>Sculpture & Statue Categories</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory-50 tracking-tight">
            Custom Manufacturing Services
          </h2>
          <p className="text-sm sm:text-base text-ivory-200/90 font-light leading-relaxed">
            Every piece is built to order in our Coimbatore workshop. From devotional sanctum idols and life-size wildlife statues to commercial landmarks and traditional bullock carts.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl overflow-hidden bg-charcoal-900 border border-charcoal-800 hover:border-gold-500/40 transition-all duration-300 flex flex-col shadow-xl shadow-black/50 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-60 overflow-hidden bg-charcoal-950">
                <img
                  src={service.image}
                  alt={`${service.title} - Silaikalam Statue Makers Coimbatore`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-transparent" />
                
                {/* Category Number Badge */}
                <div className="absolute top-4 left-4 font-serif text-sm font-bold tracking-wider text-charcoal-950 bg-gold-400 px-3 py-1 rounded-md shadow-md">
                  {service.number}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-ivory-100 group-hover:text-gold-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ivory-300 leading-relaxed font-light">
                    {service.shortDescription}
                  </p>

                  {/* Key Highlights */}
                  <ul className="pt-2 space-y-1.5 border-t border-charcoal-800/80">
                    {service.highlights.map((h, i) => (
                      <li key={i} className="text-[11px] sm:text-xs text-ivory-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500/80 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Materials Note */}
                  <div className="pt-2 text-[11px] text-stone-300 italic">
                    <span className="text-gold-500/80 font-medium not-italic">Material: </span>
                    {service.materialsNote}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-charcoal-800 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="text-xs font-semibold uppercase tracking-wider text-gold-400 hover:text-gold-300 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Request Quote</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <a
                    href={createWhatsAppUrl(`Hello Silaikalam, I am interested in inquiring about ${service.title}. Could you provide details?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 px-3 py-1.5 rounded-md text-xs font-medium border border-emerald-500/30 transition-colors"
                    title="Inquire on WhatsApp"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
