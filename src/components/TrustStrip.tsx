import React from 'react';
import { Calendar, Hammer, Shield, MapPin } from 'lucide-react';
import { trustPoints } from '../data/businessData';

export const TrustStrip: React.FC = () => {
  const icons = [Calendar, Hammer, Shield, MapPin];

  return (
    <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-charcoal-900/95 border border-gold-500/25 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-black/80">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-charcoal-800">
          {trustPoints.map((point, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={point.label}
                className={`flex flex-col space-y-2 ${index > 0 ? 'sm:pl-6 pt-4 sm:pt-0' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-charcoal-800 border border-gold-500/30 flex items-center justify-center text-gold-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-ivory-50">
                    {point.value}
                  </span>
                </div>
                <h3 className="text-sm font-semibold tracking-wide text-gold-400 uppercase">
                  {point.label}
                </h3>
                <p className="text-xs text-ivory-300 leading-relaxed font-light">
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
