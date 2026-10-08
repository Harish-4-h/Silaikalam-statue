import React from 'react';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { businessInfo, createWhatsAppUrl } from '../data/businessData';

interface StickyMobileBarProps {
  onOpenQuote: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenQuote }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-charcoal-950/95 border-t border-gold-500/30 p-2 sm:hidden backdrop-blur-lg shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Now */}
        <a
          href={`tel:${businessInfo.contacts.primary.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-charcoal-900 border border-charcoal-800 text-ivory-100 hover:text-gold-400 active:bg-charcoal-800 transition-colors"
        >
          <Phone className="w-4 h-4 text-gold-400 mb-0.5" />
          <span className="text-[10px] uppercase font-bold tracking-wider">Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href={createWhatsAppUrl('Hello Silaikalam, I would like to inquire about custom statues.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-emerald-950/90 border border-emerald-600/40 text-emerald-300 active:bg-emerald-900 transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="text-[10px] uppercase font-bold tracking-wider">WhatsApp</span>
        </a>

        {/* Get Quote */}
        <button
          onClick={onOpenQuote}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-gold-500 text-charcoal-950 font-bold active:bg-gold-400 transition-colors shadow-md"
        >
          <FileText className="w-4 h-4 text-charcoal-950 mb-0.5" />
          <span className="text-[10px] uppercase font-bold tracking-wider">Get Quote</span>
        </button>
      </div>
    </div>
  );
};
