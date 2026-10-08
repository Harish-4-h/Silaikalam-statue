import { Hammer, CheckCircle2, MapPin, Phone } from 'lucide-react';
import { businessInfo } from '../data/businessData';

interface AboutProps {
  onOpenQuote: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenQuote }) => {
  return (
    <section id="about" className="py-24 bg-charcoal-950 relative overflow-hidden">
      {/* Subtle stone background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase & Workshop Crest */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative group rounded-2xl overflow-hidden border border-gold-500/30 bg-charcoal-900 shadow-2xl shadow-black/80">
              <img
                src="/images/sculpture-molding.jpg"
                alt="Artisan sculpting and finishing statue mould in workshop"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent" />
              
              {/* Badge overlay on image */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-charcoal-900/90 border border-gold-500/25 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-charcoal-800 border border-gold-500/40 flex items-center justify-center p-1.5 flex-shrink-0">
                    <img
                      src="/images/silaikalam-crest.jpg"
                      alt="Silaikalam Master Craftsman Badge"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-ivory-100">
                      Kalaiyanur Workshop, Coimbatore
                    </h4>
                    <p className="text-xs text-gold-400 font-medium">
                      Physically handcrafting sculptures for 14+ years
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Workshop Quote */}
            <div className="p-6 rounded-xl bg-charcoal-900/80 border border-charcoal-800 space-y-3">
              <p className="text-xs sm:text-sm italic text-ivory-200/90 font-serif leading-relaxed">
                &ldquo;Every statue begins with an understanding of proportion, purpose, and environment. We take client ideas from rough photos to durable, life-sized physical works that stand strong outdoors for decades.&rdquo;
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-charcoal-800 text-xs">
                <div>
                  <span className="font-bold text-ivory-100 block">Arun Karthik</span>
                  <span className="text-gold-500 text-[11px]">Owner & Craftsman, Silaikalam</span>
                </div>
                <a
                  href={`tel:${businessInfo.contacts.primary.phoneRaw}`}
                  className="inline-flex items-center gap-1.5 text-gold-400 hover:text-gold-300 font-medium text-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Directly</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Craftsmanship Rationale */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold-400 uppercase">
                <Hammer className="w-4 h-4" />
                <span>Our Story & Craftsmanship</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory-50 tracking-tight leading-tight">
                Sculpture Craftsmanship From The Heart of Coimbatore
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-ivory-200/90 font-light leading-relaxed">
              <p>
                <strong className="text-ivory-100 font-semibold">Silaikalam Statue Makers</strong> is a Coimbatore-based custom statue and sculpture manufacturing company with more than 14 years of hands-on experience. Operating from our workshop yard in Kalaiyanur on the Anaikatti Road, we specialize in translating custom requirements into durable, meticulously sculpted physical forms.
              </p>
              <p>
                From traditional Hindu devotional deities sculpted according to classical postures and temple proportions, to lifelike Kangeyam bulls, deer, and dogs, to large-scale commercial selfie installations and relief wall murals — our focus is physical craftsmanship and structural longevity.
              </p>
              <p>
                A primary material in our workshop is <strong className="text-gold-400 font-medium">handcrafted Fibreglass (FRP)</strong>. Fibreglass allows us to create intricate surface detailing, fine facial expressions, and expansive monumental scales with outstanding weather resistance, UV stability, and manageable structural weight.
              </p>
            </div>

            {/* Key Capabilities Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Custom human, deity & wildlife portraiture',
                'Durable handcrafted fibreglass (FRP) composite',
                'Life-size scales with internal reinforcement',
                'Specialized Maattu Vandi bullock cart heritage sets',
                'Automotive-grade all-weather exterior paint finishes',
                'Direct craftsman consultation from concept to finish',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-ivory-200">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-bold px-6 py-3 rounded-lg text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
              >
                Discuss Your Requirement
              </button>
              <a
                href={businessInfo.location.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-ivory-200 hover:text-gold-400 px-4 py-3 rounded-lg border border-charcoal-700 hover:border-gold-500/40 transition-colors"
              >
                <MapPin className="w-4 h-4 text-gold-400" />
                <span>Visit Kalaiyanur Workshop</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
