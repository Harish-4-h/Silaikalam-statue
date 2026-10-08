import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle, MapPin, Layers, Maximize2 } from 'lucide-react';
import { PortfolioItem } from '../types';
import { createWhatsAppUrl } from '../data/businessData';

interface PortfolioLightboxProps {
  item: PortfolioItem | null;
  items: PortfolioItem[];
  onClose: () => void;
  onNavigate: (newItem: PortfolioItem) => void;
}

export const PortfolioLightbox: React.FC<PortfolioLightboxProps> = ({
  item,
  items,
  onClose,
  onNavigate,
}) => {
  const currentIndex = items.findIndex((i) => i.id === item?.id);

  const handleNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      onNavigate(items[currentIndex + 1]);
    } else {
      onNavigate(items[0]);
    }
  }, [currentIndex, items, onNavigate]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(items[currentIndex - 1]);
    } else {
      onNavigate(items[items.length - 1]);
    }
  }, [currentIndex, items, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose, handleNext, handlePrev]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-950/95 backdrop-blur-xl p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      {/* Background Click to Dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Lightbox Content Container */}
      <div className="relative z-10 max-w-5xl w-full bg-charcoal-900 border border-gold-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-black flex flex-col lg:flex-row max-h-[92vh]">
        
        {/* Left: Image Container with Nav Buttons */}
        <div className="relative flex-1 bg-charcoal-950 flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[420px] lg:min-h-[550px]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain max-h-[60vh] lg:max-h-[75vh]"
          />

          {/* Prev/Next Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-charcoal-900/80 hover:bg-gold-500 hover:text-charcoal-950 text-ivory-100 border border-charcoal-700 transition-all focus:outline-none"
            aria-label="Previous artwork"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-charcoal-900/80 hover:bg-gold-500 hover:text-charcoal-950 text-ivory-100 border border-charcoal-700 transition-all focus:outline-none"
            aria-label="Next artwork"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Verified Silaikalam Work Badge */}
          {item.isRealWork && (
            <div className="absolute top-4 left-4 bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 text-xs px-3 py-1 rounded-full font-medium">
              Verified Workshop Piece • Kalaiyanur
            </div>
          )}
        </div>

        {/* Right: Details & Custom Consultation */}
        <div className="lg:w-96 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-charcoal-900 border-t lg:border-t-0 lg:border-l border-charcoal-800">
          <div className="space-y-5">
            {/* Top Bar: Category & Close */}
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
                {item.categoryLabel}
              </span>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-ivory-300 hover:text-ivory-50 hover:bg-charcoal-800 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Title & Description */}
            <div className="space-y-3">
              <h3 className="font-serif text-2xl font-bold text-ivory-50 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-ivory-300 leading-relaxed font-light">
                {item.description}
              </p>
            </div>

            {/* Verified Metadata only */}
            <div className="space-y-2 pt-2 border-t border-charcoal-800 text-xs text-ivory-300">
              {item.material && (
                <div className="flex items-start gap-2">
                  <Layers className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-ivory-200">Material: </strong>
                    {item.material}
                  </span>
                </div>
              )}

              {item.sizeTag && (
                <div className="flex items-start gap-2">
                  <Maximize2 className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-ivory-200">Scale: </strong>
                    {item.sizeTag}
                  </span>
                </div>
              )}

              {item.locationTag && (
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-ivory-200">Workshop Yard: </strong>
                    {item.locationTag}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Action Box */}
          <div className="pt-6 mt-6 border-t border-charcoal-800 space-y-3">
            <a
              href={createWhatsAppUrl(`Hello Silaikalam, I am interested in a statue similar to: ${item.title}. Can you share details and feasibility?`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-charcoal-950 font-bold py-3 px-4 rounded-lg text-xs uppercase tracking-wider transition-colors shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire About Similar Piece</span>
            </a>

            <div className="text-center text-[11px] text-ivory-400">
              Navigation: Use keyboard arrows ← → to browse
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
