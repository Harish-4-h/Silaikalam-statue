import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Process } from './components/Process';
import { QuoteForm } from './components/QuoteForm';
import { VerifiedReviews } from './components/VerifiedReviews';
import { FAQ } from './components/FAQ';
import { SocialSection } from './components/SocialSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { StickyMobileBar } from './components/StickyMobileBar';
import { QuoteModal } from './components/QuoteModal';
import { LegalModals } from './components/LegalModals';

export const App: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('');
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForQuote(serviceName);
    }
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-charcoal-950 text-ivory-100 flex flex-col selection:bg-gold-500 selection:text-charcoal-950 font-sans pb-16 sm:pb-0">
      {/* Top Navbar */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* 2. Trust Strip */}
        <TrustStrip />

        {/* 3. About Section */}
        <About onOpenQuote={() => handleOpenQuote()} />

        {/* 4. Services Section */}
        <Services onSelectService={(serviceTitle) => handleOpenQuote(serviceTitle)} />

        {/* 5. Portfolio Section with Lightbox */}
        <Portfolio onOpenQuote={() => handleOpenQuote()} />

        {/* 6. Why Choose Us */}
        <WhyChooseUs />

        {/* 7. Custom Statue Process Timeline */}
        <Process onOpenQuote={() => handleOpenQuote()} />

        {/* 8. Dedicated Quote Form Section */}
        <section id="quote" className="bg-charcoal-950 border-t border-charcoal-800">
          <QuoteForm />
        </section>

        {/* 9. Verified Customer Reviews from Justdial */}
        <VerifiedReviews />

        {/* 10. Frequently Asked Questions */}
        <FAQ />

        {/* 11. Social Media Links */}
        <SocialSection />

        {/* 12. Contact & Location Map */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setActiveLegalModal('privacy')}
        onOpenTerms={() => setActiveLegalModal('terms')}
      />

      {/* Persistent Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Mobile Bottom Sticky Action Bar (<768px) */}
      <StickyMobileBar onOpenQuote={() => handleOpenQuote()} />

      {/* Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialService={selectedServiceForQuote}
      />

      {/* Privacy & Terms Modals */}
      <LegalModals
        type={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />
    </div>
  );
};

export default App;
