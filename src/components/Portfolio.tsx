import React, { useState } from 'react';
import { portfolioItems } from '../data/businessData';
import { PortfolioItem } from '../types';
import { PortfolioLightbox } from './PortfolioLightbox';
import { Sparkles, Eye, ArrowRight, CheckCircle2 } from 'lucide-react';

interface PortfolioProps {
  onOpenQuote: () => void;
}

type FilterCategory = 'all' | 'god-traditional' | 'human-character' | 'animal-wildlife' | 'commercial-decor' | 'murals' | 'traditional-heritage';

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenQuote }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filterTabs: { id: FilterCategory; label: string }[] = [
    { id: 'all', label: 'All Works' },
    { id: 'god-traditional', label: 'God & Traditional' },
    { id: 'human-character', label: 'Human & Character' },
    { id: 'animal-wildlife', label: 'Animals' },
    { id: 'commercial-decor', label: 'Commercial & Décor' },
    { id: 'murals', label: 'Murals' },
    { id: 'traditional-heritage', label: 'Traditional Heritage' },
  ];

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-charcoal-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold-400 uppercase">
              <Sparkles className="w-4 h-4" />
              <span>Craftsmanship Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory-50 tracking-tight">
              Featured Sculptures & Statues
            </h2>
            <p className="text-sm sm:text-base text-ivory-300 font-light leading-relaxed">
              Explore our sculpture work and craftsmanship capabilities. Click any piece for closer detailing and verified workshop specifications.
            </p>
          </div>

          <div className="text-xs text-gold-400/90 font-medium bg-charcoal-900 border border-gold-500/20 px-4 py-2.5 rounded-xl self-start md:self-end">
            All designs can be customized to your specific dimensions
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                activeFilter === tab.id
                  ? 'bg-gold-500 text-charcoal-950 shadow-md shadow-gold-900/30'
                  : 'bg-charcoal-900 text-ivory-200 hover:text-gold-400 hover:bg-charcoal-800 border border-charcoal-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-charcoal-900 border border-charcoal-800 hover:border-gold-500/50 transition-all duration-300 flex flex-col shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Image Frame */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-charcoal-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                {/* Verified Workshop Piece Indicator */}
                {item.isRealWork && (
                  <div className="absolute top-3 left-3 bg-emerald-950/90 border border-emerald-500/60 text-emerald-300 text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-md backdrop-blur-sm">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>Real Workshop Piece</span>
                  </div>
                )}

                {/* Hover Eye Action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-charcoal-950/40 backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-2 bg-gold-500 text-charcoal-950 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                    <Eye className="w-4 h-4" />
                    <span>Inspect Details</span>
                  </span>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[10px] tracking-widest text-gold-400 uppercase font-semibold block">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-ivory-50 group-hover:text-gold-400 transition-colors mt-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-ivory-300 leading-relaxed font-light mt-1.5 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Metadata Pills (if verified) */}
                <div className="pt-2 border-t border-charcoal-800/80 flex flex-wrap items-center justify-between text-[11px] text-stone-300">
                  {item.material ? (
                    <span className="truncate max-w-[200px]">{item.material}</span>
                  ) : (
                    <span>Custom specifications</span>
                  )}
                  <span className="text-gold-500 font-medium">View &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Project Callout Card */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-charcoal-900 via-charcoal-850 to-charcoal-900 border border-gold-500/30 p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory-50">
              Have a statue idea of your own?
            </h3>
            <p className="text-sm text-ivory-200/90 font-light leading-relaxed">
              Tell us what you have in mind. Share your reference photograph, rough sketch, or custom dimensions, and we will formulate a viable sculpture execution plan.
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 hover:from-gold-500 hover:to-gold-400 text-charcoal-950 font-bold px-8 py-4 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-gold-950/40 hover:shadow-gold-500/20 active:scale-95 flex-shrink-0"
          >
            <span>Start Your Custom Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      <PortfolioLightbox
        item={selectedItem}
        items={filteredItems}
        onClose={() => setSelectedItem(null)}
        onNavigate={(newItem) => setSelectedItem(newItem)}
      />
    </section>
  );
};
