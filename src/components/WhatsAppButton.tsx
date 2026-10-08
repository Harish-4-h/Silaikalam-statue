import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { businessInfo, createWhatsAppUrl } from '../data/businessData';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage =
    'Hello Silaikalam Statue Makers, I am interested in a custom statue/sculpture. I would like to discuss my requirement with Arun Karthik.';

  return (
    <div className="fixed bottom-20 sm:bottom-8 right-5 z-40 flex flex-col items-end gap-2">
      {/* Tooltip notice */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-charcoal-900 border border-gold-500/30 text-ivory-100 text-xs px-3.5 py-2 rounded-xl shadow-2xl animate-fade-in backdrop-blur-md">
          <span>Chat with Arun Karthik on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-ivory-100 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={createWhatsAppUrl(defaultMessage, businessInfo.contacts.primary.whatsapp)}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-charcoal-950 shadow-2xl shadow-emerald-950/80 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
        aria-label="Chat directly on WhatsApp with Silaikalam Statue Makers"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping opacity-60 pointer-events-none" />
        <MessageCircle className="w-7 h-7 text-charcoal-950 group-hover:scale-105 transition-transform" />
      </a>
    </div>
  );
};
