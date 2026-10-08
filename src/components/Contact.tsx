import React from 'react';
import { businessInfo, createWhatsAppUrl } from '../data/businessData';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Compass,
  ExternalLink,
  Instagram,
  Facebook,
  ShieldCheck,
} from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-charcoal-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold-400 uppercase">
            <Compass className="w-4 h-4" />
            <span>Connect & Visit</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory-50 tracking-tight">
            Contact Silaikalam Statue Makers
          </h2>
          <p className="text-sm sm:text-base text-ivory-300 font-light leading-relaxed">
            Reach out directly to discuss your custom statue ideas, check workshop collections, or visit our yard in Kalaiyanur, Coimbatore.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Details (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Primary Workshop Card */}
            <div className="p-8 rounded-2xl bg-charcoal-900 border border-gold-500/30 space-y-6 shadow-2xl">
              <div className="space-y-2">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-gold-400">
                  Manufacturing Yard & Office
                </span>
                <h3 className="font-serif text-2xl font-bold text-ivory-50">
                  {businessInfo.name}
                </h3>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 text-sm text-ivory-200">
                <div className="p-2.5 rounded-xl bg-charcoal-800 text-gold-400 border border-charcoal-700 flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-ivory-100">Workshop Address:</p>
                  <p className="text-ivory-300 font-light leading-relaxed">
                    Kalaiyanur, Thadagam / Anaikatti Road, Nanjundapuram,
                    <br />
                    Coimbatore, Tamil Nadu 641108, India
                  </p>
                  <p className="text-xs text-stone-300 pt-1">
                    Verified Coordinates: 11.0711° N, 76.8769° E
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 text-sm text-ivory-200">
                <div className="p-2.5 rounded-xl bg-charcoal-800 text-gold-400 border border-charcoal-700 flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-ivory-100">Workshop Hours:</p>
                  <p className="text-ivory-300 font-light">
                    {businessInfo.publicListing.hours}
                  </p>
                  <p className="text-xs text-stone-300">
                    Open 7 days a week for customer consultations & collections
                  </p>
                </div>
              </div>

              {/* Direct Personnel Contacts */}
              <div className="pt-6 border-t border-charcoal-800 space-y-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gold-400">
                  Direct Personnel Contacts:
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Arun Karthik (Owner) */}
                  <div className="p-4 rounded-xl bg-charcoal-950 border border-charcoal-800 space-y-2">
                    <div>
                      <span className="text-xs font-bold text-ivory-100 block">
                        {businessInfo.contacts.primary.name}
                      </span>
                      <span className="text-[11px] text-gold-500 font-medium">
                        {businessInfo.contacts.primary.title}
                      </span>
                    </div>

                    <div className="flex flex-col gap-2 pt-2">
                      <a
                        href={`tel:${businessInfo.contacts.primary.phoneRaw}`}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-ivory-100 hover:text-gold-400 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-gold-400" />
                        <span>{businessInfo.contacts.primary.phone}</span>
                      </a>

                      <a
                        href={createWhatsAppUrl('Hello Arun Karthik, I would like to consult with you regarding a custom statue order.', businessInfo.contacts.primary.whatsapp)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  {/* Priya */}
                  <div className="p-4 rounded-xl bg-charcoal-950 border border-charcoal-800 space-y-2">
                    <div>
                      <span className="text-xs font-bold text-ivory-100 block">
                        {businessInfo.contacts.secondary.name}
                      </span>
                      <span className="text-[11px] text-stone-300 font-medium">
                        Inquiries & Coordination
                      </span>
                    </div>

                    <div className="flex flex-col gap-2 pt-2">
                      <a
                        href={`tel:${businessInfo.contacts.secondary.phoneRaw}`}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-ivory-100 hover:text-gold-400 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-gold-400" />
                        <span>{businessInfo.contacts.secondary.phone}</span>
                      </a>

                      <a
                        href={createWhatsAppUrl('Hello Priya, I would like to inquire about Silaikalam statues.', businessInfo.contacts.secondary.whatsapp)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="pt-2">
                <a
                  href={businessInfo.location.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-charcoal-800 hover:bg-gold-500 hover:text-charcoal-950 text-ivory-100 font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 border border-gold-500/40"
                >
                  <Compass className="w-4 h-4 text-gold-400 group-hover:text-charcoal-950" />
                  <span>Get Directions in Google Maps</span>
                </a>
              </div>

            </div>

            {/* Social & Discovery Badges */}
            <div className="p-6 rounded-2xl bg-charcoal-900 border border-charcoal-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span className="text-xs text-ivory-200">
                  Public Listing Profile Verified on Justdial (4.9 / 5 rating)
                </span>
              </div>
              <a
                href={businessInfo.publicListing.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-gold-400 hover:text-gold-300 font-semibold underline"
              >
                <span>View Listing</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Map Preview & Fast Contact (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Map Frame Card with OpenStreetMap Verified Coordinate Embed */}
            <div className="rounded-2xl overflow-hidden bg-charcoal-900 border border-charcoal-800 shadow-xl">
              <div className="p-4 bg-charcoal-950 border-b border-charcoal-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-ivory-200">
                  <MapPin className="w-4 h-4 text-gold-400" />
                  <span>Location Map • Kalaiyanur, Coimbatore</span>
                </div>
                <a
                  href={businessInfo.location.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-gold-400 hover:underline flex items-center gap-1 font-medium"
                >
                  <span>Open Full Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map embed iframe centered at 11.0711058, 76.8769013 */}
              <div className="relative h-72 sm:h-80 w-full bg-charcoal-950">
                <iframe
                  title="Silaikalam Statue Makers Location Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=76.8569013%2C11.0511058%2C76.8969013%2C11.0911058&amp;layer=mapnik&amp;marker=11.0711058%2C76.8769013"
                  className="w-full h-full border-0 filter invert contrast-125 hue-rotate-180 opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>

              <div className="p-4 bg-charcoal-900 text-xs text-ivory-300 space-y-1">
                <p className="font-semibold text-ivory-100">Workshop Yard Navigation:</p>
                <p className="text-[11px] text-stone-300">
                  Situated on Thadagam / Anaikatti Road in Kalaiyanur. Landmark sculptures and bullock cart installations visible at roadside workshop frontage.
                </p>
              </div>
            </div>

            {/* Quick Connect Action Box */}
            <div className="p-6 rounded-2xl bg-charcoal-900 border border-charcoal-800 space-y-4">
              <h4 className="font-serif text-lg font-bold text-ivory-50">
                Connect on Social Channels
              </h4>
              <div className="flex flex-col gap-2.5">
                <a
                  href={businessInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-charcoal-950 hover:bg-charcoal-800 border border-charcoal-800 text-xs text-ivory-200 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Instagram className="w-4 h-4 text-pink-400" />
                    <span>Instagram: @silaikalam_statue_makers</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
                </a>

                <a
                  href={businessInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-charcoal-950 hover:bg-charcoal-800 border border-charcoal-800 text-xs text-ivory-200 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Facebook className="w-4 h-4 text-blue-400" />
                    <span>Facebook: SilaiKalam Statue makers</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
