import React from 'react';
import { verifiedReviews, businessInfo } from '../data/businessData';
import { Star, ExternalLink, ShieldCheck, MessageSquare } from 'lucide-react';

export const VerifiedReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-charcoal-900/50 relative border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold-400 uppercase">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Authentic Customer Feedback</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory-50 tracking-tight">
              Verified Public Listing Reviews
            </h2>
            <p className="text-sm sm:text-base text-ivory-300 font-light leading-relaxed">
              Read authentic feedback from customers who have engaged Silaikalam for animal statues, human sculptures, and custom artwork.
            </p>
          </div>

          {/* Rating Badge */}
          <div className="p-4 rounded-2xl bg-charcoal-900 border border-gold-500/30 flex items-center gap-4 self-start md:self-end shadow-xl">
            <div className="text-center pr-4 border-r border-charcoal-800">
              <div className="font-serif text-3xl font-bold text-gold-400">
                {businessInfo.publicListing.rating}
              </div>
              <div className="flex text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-bold text-ivory-100">
                {businessInfo.publicListing.reviewCount}+ Public Reviews
              </div>
              <a
                href={businessInfo.publicListing.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-gold-400 hover:text-gold-300 font-medium underline"
              >
                <span>View on Justdial</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {verifiedReviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-charcoal-900 border border-charcoal-800 flex flex-col justify-between space-y-4 shadow-xl"
            >
              <div className="space-y-3">
                {/* Rating Stars & Source */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] tracking-wider text-stone-300 uppercase font-semibold bg-charcoal-800 px-2 py-0.5 rounded">
                    {rev.platform}
                  </span>
                </div>

                {/* Review Body */}
                <p className="text-xs sm:text-sm text-ivory-200/90 leading-relaxed font-light italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Author & Verification Tag */}
              <div className="pt-3 border-t border-charcoal-800 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-semibold text-ivory-100">{rev.author}</h4>
                  <p className="text-[11px] text-stone-300">{rev.date}</p>
                </div>
                <MessageSquare className="w-4 h-4 text-gold-500/60" />
              </div>
            </div>
          ))}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-8 text-center text-xs text-stone-300 max-w-xl mx-auto">
          Reviews shown are direct public testimonials submitted by actual clients to public business discovery directories. Silaikalam does not publish fabricated or unverified claims.
        </div>

      </div>
    </section>
  );
};
