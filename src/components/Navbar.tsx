import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowRight } from 'lucide-react';
import { businessInfo, createWhatsAppUrl } from '../data/businessData';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-charcoal-950/95 backdrop-blur-md py-3 border-b border-gold-500/20 shadow-xl shadow-black/40'
            : 'bg-gradient-to-b from-charcoal-950/90 via-charcoal-950/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              className="group flex items-center gap-3 focus:outline-none"
              aria-label="Silaikalam Statue Makers Homepage"
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden border border-gold-500/40 bg-charcoal-900 flex items-center justify-center shadow-md shadow-black/50 group-hover:border-gold-400 transition-colors">
                <img
                  src="/images/silaikalam-logo.jpg"
                  alt="Silaikalam Statue Makers Logo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to stylized lettermark if image fails
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <span className="font-serif font-bold text-gold-400 text-lg">SK</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-ivory-50 group-hover:text-gold-400 transition-colors uppercase">
                  SILAIKALAM
                </span>
                <span className="text-[10px] tracking-[0.22em] text-gold-500 font-semibold uppercase -mt-0.5">
                  Statue Makers • Coimbatore
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs uppercase tracking-widest text-ivory-200 hover:text-gold-400 transition-colors font-medium relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold-500 hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${businessInfo.contacts.primary.phoneRaw}`}
                className="flex items-center gap-2 text-xs font-semibold text-ivory-200 hover:text-gold-400 transition-colors px-2 py-1 rounded"
                title="Call Arun Karthik"
              >
                <Phone className="w-3.5 h-3.5 text-gold-500" />
                <span>+91 70100 13920</span>
              </a>

              <a
                href={createWhatsAppUrl('Hello Silaikalam Statue Makers, I would like to discuss a custom statue project.')}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-950/40 rounded-lg border border-emerald-500/20 transition-all"
                title="Chat on WhatsApp"
                aria-label="WhatsApp Us"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenQuote}
                className="relative inline-flex items-center gap-2 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 hover:from-gold-500 hover:to-gold-400 text-charcoal-950 font-semibold px-4 py-2 rounded-md text-xs uppercase tracking-wider transition-all duration-300 shadow-md shadow-gold-900/20 hover:shadow-gold-500/20 active:scale-95"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenQuote}
                className="bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-bold px-3 py-1.5 rounded text-xs uppercase tracking-wider transition-colors"
              >
                Quote
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-ivory-100 hover:text-gold-400 focus:outline-none"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-charcoal-900/98 border-b border-gold-500/20 px-4 pt-3 pb-6 mt-3 space-y-4 shadow-2xl backdrop-blur-xl">
            <div className="flex flex-col space-y-2 border-b border-charcoal-800 pb-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm uppercase tracking-wider text-ivory-100 hover:text-gold-400 hover:bg-charcoal-800/50 rounded-md font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <a
                href={`tel:${businessInfo.contacts.primary.phoneRaw}`}
                className="flex items-center justify-center gap-2 bg-charcoal-800 hover:bg-charcoal-700 text-ivory-100 py-2.5 px-3 rounded-md text-xs font-semibold border border-charcoal-700"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>Call Owner</span>
              </a>

              <a
                href={createWhatsAppUrl('Hello Silaikalam, I am interested in custom statues and would like to inquire.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 py-2.5 px-3 rounded-md text-xs font-semibold border border-emerald-700/50"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-charcoal-950 py-3 rounded-md text-xs font-bold uppercase tracking-wider shadow-lg"
            >
              <span>Request Custom Statue Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </header>
    </>
  );
};
