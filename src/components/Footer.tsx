import React from 'react';
import { businessInfo, services } from '../data/businessData';
import { Phone, MapPin, Instagram, Facebook, ExternalLink, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-950 border-t border-charcoal-800 text-ivory-300 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-charcoal-800/80">
          
          {/* Col 1: Brand & Craftsmanship Focus (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-gold-500/40 bg-charcoal-900 flex items-center justify-center p-1">
                <img
                  src="/images/silaikalam-logo.jpg"
                  alt="Silaikalam Statue Makers Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-ivory-50 tracking-wider uppercase block">
                  {businessInfo.name}
                </span>
                <span className="text-[10px] tracking-[0.2em] text-gold-400 font-semibold uppercase block -mt-0.5">
                  Coimbatore, Tamil Nadu
                </span>
              </div>
            </div>

            <p className="text-xs text-ivory-300 leading-relaxed font-light">
              &ldquo;Custom statues and sculptures crafted in Coimbatore.&rdquo;
            </p>

            <p className="text-xs text-stone-300 leading-relaxed font-light">
              Specializing in custom handcrafted fibreglass (FRP), Hindu devotional idols, human portraits, life-size animal figures, and traditional Maattu Vandi installations for more than 14 years.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={businessInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-charcoal-900 border border-charcoal-800 hover:border-pink-500/50 flex items-center justify-center text-ivory-300 hover:text-pink-400 transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={businessInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-charcoal-900 border border-charcoal-800 hover:border-blue-500/50 flex items-center justify-center text-ivory-300 hover:text-blue-400 transition-colors"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href={businessInfo.social.justdial}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 px-2.5 rounded-lg bg-charcoal-900 border border-charcoal-800 hover:border-gold-500/50 flex items-center justify-center text-ivory-300 hover:text-gold-400 transition-colors gap-1 text-[11px] font-semibold"
                aria-label="Justdial Listing"
              >
                <span>Justdial</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-ivory-50 uppercase tracking-wider text-gold-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About Silaikalam', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Portfolio / Our Work', href: '#portfolio' },
                { label: 'Custom Statue Process', href: '#process' },
                { label: 'Customer Reviews', href: '#reviews' },
                { label: 'FAQs', href: '#faq' },
                { label: 'Contact Workshop', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-ivory-300 hover:text-gold-400 transition-colors text-xs font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Sculpture Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-ivory-50 uppercase tracking-wider text-gold-400">
              Sculpture Categories
            </h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-ivory-300 hover:text-gold-400 transition-colors text-xs font-light block"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Workshop Location (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-ivory-50 uppercase tracking-wider text-gold-400">
              Workshop Contact
            </h4>
            <div className="space-y-2.5 text-xs text-ivory-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="font-light">
                  Kalaiyanur, Thadagam / Anaikatti Road, Nanjundapuram, Coimbatore, Tamil Nadu 641108
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a
                    href={`tel:${businessInfo.contacts.primary.phoneRaw}`}
                    className="block hover:text-gold-300 font-semibold text-ivory-200"
                  >
                    Arun Karthik: +91 70100 13920
                  </a>
                  <a
                    href={`tel:${businessInfo.contacts.secondary.phoneRaw}`}
                    className="block hover:text-gold-300 text-stone-300 font-light"
                  >
                    Priya: +91 78100 73920
                  </a>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-stone-400">
                Operating Hours: 6:00 AM – 10:00 PM Daily
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-400">
          <div>
            &copy; {currentYear} Silaikalam Statue Makers. All rights reserved. Custom sculpture craftsmanship in Coimbatore, Tamil Nadu.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-gold-400 transition-colors underline"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-gold-400 transition-colors underline"
            >
              Website Terms
            </button>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-charcoal-900 border border-charcoal-800 hover:text-gold-400 transition-colors flex items-center gap-1"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
