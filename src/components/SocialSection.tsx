import React from 'react';
import { businessInfo } from '../data/businessData';
import { Instagram, Facebook, ExternalLink, Camera } from 'lucide-react';

export const SocialSection: React.FC = () => {
  return (
    <section className="py-20 bg-charcoal-900/40 relative border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold-400 uppercase">
            <Camera className="w-4 h-4" />
            <span>Behind The Scenes & Workshop Updates</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ivory-50 tracking-tight">
            See Our Latest Creations
          </h2>
          <p className="text-xs sm:text-sm text-ivory-300 font-light leading-relaxed">
            Follow our physical work in progress, new animal statues, custom temple murals, and workshop video reels directly on our official social channels.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Instagram Card */}
          <a
            href={businessInfo.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-2xl bg-charcoal-900 border border-charcoal-800 hover:border-pink-500/40 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl hover:-translate-y-1"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-md">
                  <Instagram className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose-400 group-hover:underline">
                  <span>Visit Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-ivory-50 group-hover:text-rose-300 transition-colors">
                  @silaikalam_statue_makers
                </h3>
                <p className="text-xs text-ivory-300 font-light leading-relaxed mt-2">
                  Explore fresh reels showing day-to-day clay detailing, fibreglass lamination, spray painting techniques, and finished client installations across Tamil Nadu.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-charcoal-800 text-[11px] text-stone-300 flex items-center justify-between">
              <span>Official Instagram Profile</span>
              <span className="text-rose-400 font-medium">Follow & Watch Reels &rarr;</span>
            </div>
          </a>

          {/* Facebook Card */}
          <a
            href={businessInfo.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-2xl bg-charcoal-900 border border-charcoal-800 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl hover:-translate-y-1"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
                  <Facebook className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 group-hover:underline">
                  <span>Visit Facebook</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-ivory-50 group-hover:text-blue-300 transition-colors">
                  SilaiKalam Statue makers
                </h3>
                <p className="text-xs text-ivory-300 font-light leading-relaxed mt-2">
                  View photographic project logs, event announcements, customer inquiries, and video showcases of our life-size Kangeyam bulls and decorative sets.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-charcoal-800 text-[11px] text-stone-300 flex items-center justify-between">
              <span>Official Facebook Page</span>
              <span className="text-blue-400 font-medium">Connect on Facebook &rarr;</span>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
};
