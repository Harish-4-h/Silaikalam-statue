import React, { useEffect } from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { businessInfo } from '../data/businessData';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-950/90 backdrop-blur-md p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 max-w-3xl w-full bg-charcoal-900 border border-gold-500/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="p-6 border-b border-charcoal-800 flex items-center justify-between bg-charcoal-950">
          <div className="flex items-center gap-3">
            {type === 'privacy' ? (
              <Shield className="w-5 h-5 text-gold-400" />
            ) : (
              <FileText className="w-5 h-5 text-gold-400" />
            )}
            <h3 className="font-serif text-xl font-bold text-ivory-50">
              {type === 'privacy' ? 'Privacy Policy' : 'Website Terms of Service'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-ivory-300 hover:text-ivory-50 hover:bg-charcoal-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-xs sm:text-sm text-ivory-300 leading-relaxed font-light">
          {type === 'privacy' ? (
            <>
              <p>
                <strong className="text-ivory-100 font-semibold">{businessInfo.name}</strong> respects your privacy. This policy outlines how we handle information shared through this website and our direct communication channels.
              </p>
              <h4 className="font-serif text-base font-bold text-ivory-100 pt-2">
                1. Information We Collect
              </h4>
              <p>
                When you submit a quote request or reach out via WhatsApp/Phone, you may provide your name, telephone number, email, delivery location, and custom statue specifications (such as dimensions and reference images).
              </p>
              <h4 className="font-serif text-base font-bold text-ivory-100 pt-2">
                2. How We Use Your Information
              </h4>
              <p>
                Your information is used strictly to evaluate your custom sculpture requirements, calculate material feasibility and estimates, communicate project milestones, and coordinate logistics.
              </p>
              <h4 className="font-serif text-base font-bold text-ivory-100 pt-2">
                3. Information Sharing
              </h4>
              <p>
                We do not sell, rent, or trade your contact information to third-party advertisers. Information is only shared with verified transport providers when arranging delivery of your finished sculpture.
              </p>
              <h4 className="font-serif text-base font-bold text-ivory-100 pt-2">
                4. Direct Inquiries
              </h4>
              <p>
                For questions regarding your data or to update your quotation details, contact Arun Karthik directly at {businessInfo.contacts.primary.phone}.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to the official website of <strong className="text-ivory-100 font-semibold">{businessInfo.name}</strong>. By browsing this website or submitting project specifications, you agree to these standard business terms.
              </p>
              <h4 className="font-serif text-base font-bold text-ivory-100 pt-2">
                1. Custom Craftsmanship & Variations
              </h4>
              <p>
                All sculptures, fibreglass figures, murals, and traditional sets are individually handcrafted. Subtle variations in surface texture, hand-painted gradients, and artistic nuances are inherent to custom artisan manufacturing.
              </p>
              <h4 className="font-serif text-base font-bold text-ivory-100 pt-2">
                2. Quotations & Project Feasibility
              </h4>
              <p>
                Website estimates or initial consultations are subject to final material confirmation, armature reinforcement requirements, site accessibility, and delivery distance.
              </p>
              <h4 className="font-serif text-base font-bold text-ivory-100 pt-2">
                3. Intellectual Property & Portfolio
              </h4>
              <p>
                Photographs of custom statues created by Silaikalam remain the creative documentation of Silaikalam Statue Makers and may be displayed in workshop archives.
              </p>
              <h4 className="font-serif text-base font-bold text-ivory-100 pt-2">
                4. Location & Jurisdiction
              </h4>
              <p>
                All operations and contractual agreements are governed under the jurisdiction of the courts of Coimbatore, Tamil Nadu, India.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-charcoal-950 border-t border-charcoal-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-charcoal-800 hover:bg-gold-500 hover:text-charcoal-950 text-xs font-semibold uppercase tracking-wider text-ivory-100 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
