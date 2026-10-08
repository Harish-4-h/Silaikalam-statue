import React, { useState } from 'react';
import { faqs, createWhatsAppUrl } from '../data/businessData';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-charcoal-950 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold-400 uppercase">
            <HelpCircle className="w-4 h-4" />
            <span>Common Questions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory-50 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-ivory-300 font-light leading-relaxed">
            Everything you need to know about custom sculpture development, materials, scale, and delivery.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl bg-charcoal-900 border border-charcoal-800 transition-colors overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-ivory-100 hover:text-gold-400 transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-ivory-300 leading-relaxed font-light border-t border-charcoal-800/80 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Help CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-charcoal-900/80 border border-gold-500/20 text-center space-y-3">
          <h4 className="font-serif text-lg font-bold text-ivory-50">
            Have a question that is not covered here?
          </h4>
          <p className="text-xs sm:text-sm text-ivory-300">
            Send your specific query or design sketch directly to our craftsman on WhatsApp for immediate guidance.
          </p>
          <div className="pt-2">
            <a
              href={createWhatsAppUrl('Hello Arun Karthik, I have a specific question about a custom statue project.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-charcoal-950 font-bold px-6 py-2.5 rounded-lg text-xs uppercase tracking-wider transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
