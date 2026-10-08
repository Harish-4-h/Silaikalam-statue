import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { QuoteForm } from './QuoteForm';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-950/90 backdrop-blur-md p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative z-10 max-w-4xl w-full my-8">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 rounded-full bg-charcoal-900 border border-charcoal-700 text-ivory-200 hover:text-gold-400 hover:border-gold-500/50 transition-colors z-20"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        <QuoteForm
          isModal={true}
          initialProjectType={initialService}
          onClose={onClose}
        />
      </div>
    </div>
  );
};
