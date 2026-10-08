import React from 'react';
import { processSteps } from '../data/businessData';
import { ArrowRight, CheckCircle2, GitCommit } from 'lucide-react';

interface ProcessProps {
  onOpenQuote: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenQuote }) => {
  return (
    <section id="process" className="py-24 bg-charcoal-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold-400 uppercase">
            <GitCommit className="w-4 h-4" />
            <span>Workflow & Execution</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory-50 tracking-tight">
            How We Build Your Custom Statue
          </h2>
          <p className="text-sm sm:text-base text-ivory-300 font-light leading-relaxed">
            From preliminary photos to structural moulding, hand-finishing, and final on-site installation coordination.
          </p>
        </div>

        {/* Process Timeline Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {processSteps.map((step, idx) => (
            <div
              key={step.number}
              className="relative rounded-2xl bg-charcoal-900 border border-charcoal-800 p-6 flex flex-col justify-between hover:border-gold-500/40 transition-all duration-300 shadow-xl"
            >
              <div className="space-y-4">
                {/* Step Number */}
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-extrabold text-gold-500/80">
                    {step.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-stone-300 font-semibold bg-charcoal-800 px-2 py-0.5 rounded">
                    Phase {idx + 1}
                  </span>
                </div>

                {/* Step Title & Description */}
                <div>
                  <h3 className="font-serif text-lg font-bold text-ivory-50">
                    {step.title}
                  </h3>
                  <p className="text-xs text-ivory-300 leading-relaxed font-light mt-2">
                    {step.description}
                  </p>
                </div>

                {/* Details Checkmarks */}
                <div className="space-y-1.5 pt-3 border-t border-charcoal-800">
                  {step.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-1.5 text-[11px] text-ivory-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-4 pt-3 border-t border-charcoal-800/60 text-[10px] text-stone-300 italic">
                Step {idx + 1} of 5
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-charcoal-900 border border-gold-500/25 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-xl font-bold text-ivory-50">
              Ready to discuss feasibility and initial sizing?
            </h4>
            <p className="text-xs sm:text-sm text-ivory-300">
              Speak directly with Arun Karthik to review reference images and receive an honest project assessment.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-bold px-6 py-3 rounded-lg text-xs uppercase tracking-wider transition-colors flex-shrink-0"
          >
            <span>Initiate Step 01</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
