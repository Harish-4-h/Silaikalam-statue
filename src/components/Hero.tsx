import React from 'react';
import { ArrowRight, MessageCircle, Star, Compass, ShieldCheck } from 'lucide-react';
import { businessInfo, createWhatsAppUrl } from '../data/businessData';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image: Authentic Silaikalam Kangeyam Bulls & Maattu Vandi Sculpture */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/silaikalam-traditional-bulls.jpg"
          alt="Authentic Silaikalam Custom Sculptures and Traditional Kangeyam Bulls at Coimbatore Workshop"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Dark Cinematic Multilayer Overlays */}
        <div className="absolute inset-0 bg-charcoal-950/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/70 to-charcoal-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/80 to-transparent" />
        <div className="absolute inset-0 bg-workshop-texture opacity-40 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 sm:pt-6">
        <div className="max-w-3xl space-y-6">
          {/* Experience & Location Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal-900/90 border border-gold-500/30 backdrop-blur-md shadow-lg shadow-black/40">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-ivory-100">
              {businessInfo.experienceYears}+ Years of Sculpture Craftsmanship • Coimbatore, Tamil Nadu
            </span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-ivory-50 leading-[1.08]">
            Custom Statues.{' '}
            <span className="block text-gold-gradient italic font-normal mt-1 sm:mt-2">
              Crafted to Make an Impression.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-ivory-200/90 font-light leading-relaxed max-w-2xl">
            Custom statues, sculptures and fibreglass creations handcrafted in Coimbatore, Tamil Nadu. Built around your concept, reference photograph, or architectural space.
          </p>

          {/* Verified Rating Pill */}
          <div className="flex flex-wrap items-center gap-3 pt-1 pb-2">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-charcoal-900/80 border border-gold-500/20 text-xs text-ivory-200">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-ivory-100">{businessInfo.publicListing.rating} / 5</span>
              <span className="text-stone-300">({businessInfo.publicListing.reviewCount}+ public platform reviews)</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-charcoal-900/80 border border-charcoal-700 text-xs text-ivory-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Durable Handcrafted FRP / Fibreglass</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 hover:from-gold-500 hover:to-gold-400 text-charcoal-950 font-bold px-7 py-3.5 rounded-lg text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-gold-950/40 hover:shadow-gold-500/30 active:scale-95 group"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 bg-charcoal-900/80 hover:bg-charcoal-800 text-ivory-100 hover:text-gold-400 px-6 py-3.5 rounded-lg text-sm font-semibold border border-charcoal-700 hover:border-gold-500/40 transition-all backdrop-blur-sm"
            >
              <Compass className="w-4 h-4 text-gold-400" />
              <span>View Our Work</span>
            </a>

            <a
              href={createWhatsAppUrl('Hello Silaikalam Statue Makers, I am looking for custom statue pricing and execution details.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-950/70 hover:bg-emerald-900/80 text-emerald-300 px-5 py-3.5 rounded-lg text-sm font-semibold border border-emerald-500/30 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Direct Owner Consultation Note */}
          <div className="pt-4 border-t border-charcoal-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-ivory-300/80">
            <div className="flex items-center gap-2">
              <span className="text-gold-400 font-medium">Direct Workshop Contact:</span>
              <a
                href={`tel:${businessInfo.contacts.primary.phoneRaw}`}
                className="hover:text-gold-300 transition-colors underline decoration-gold-500/40"
              >
                Arun Karthik (Owner): +91 70100 13920
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`tel:${businessInfo.contacts.secondary.phoneRaw}`}
                className="hover:text-gold-300 transition-colors underline decoration-gold-500/40"
              >
                Priya: +91 78100 73920
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-charcoal-950 to-transparent pointer-events-none" />
    </section>
  );
};
