import React, { useState } from 'react';
import { QuoteFormData } from '../types';
import { createWhatsAppUrl } from '../data/businessData';
import { Send, MessageCircle, CheckCircle, AlertCircle, Image as ImageIcon, Sparkles } from 'lucide-react';

interface QuoteFormProps {
  initialProjectType?: string;
  isModal?: boolean;
  onClose?: () => void;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  initialProjectType = '',
  isModal = false,
  onClose,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    whatsapp: '',
    email: '',
    city: '',
    projectType: initialProjectType || 'God & Traditional Statues',
    statueRequirement: '',
    approxHeight: '',
    preferredMaterial: 'Fibreglass (FRP)',
    quantity: '1',
    placement: 'Outdoor',
    description: '',
    requiredBy: '',
    referralSource: 'Online Search',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedSummary, setSubmittedSummary] = useState<string>('');

  const validate = () => {
    const newErrors: Partial<Record<keyof QuoteFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your contact phone number';
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Please describe your statue requirement or idea';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Build the formatted summary for WhatsApp transmission
    const formattedMessage = `*NEW STATUE QUOTE INQUIRY (Silaikalam Website)*\n` +
      `----------------------------------------\n` +
      `• *Client Name:* ${formData.fullName}\n` +
      `• *Phone:* ${formData.phone}\n` +
      (formData.whatsapp ? `• *WhatsApp:* ${formData.whatsapp}\n` : '') +
      (formData.email ? `• *Email:* ${formData.email}\n` : '') +
      (formData.city ? `• *City / Location:* ${formData.city}\n` : '') +
      `• *Project Type:* ${formData.projectType}\n` +
      (formData.statueRequirement ? `• *Statue Subject:* ${formData.statueRequirement}\n` : '') +
      (formData.approxHeight ? `• *Approx Height / Size:* ${formData.approxHeight}\n` : '') +
      `• *Preferred Material:* ${formData.preferredMaterial}\n` +
      `• *Quantity:* ${formData.quantity}\n` +
      `• *Placement:* ${formData.placement}\n` +
      (formData.requiredBy ? `• *Required By:* ${formData.requiredBy}\n` : '') +
      `• *Project Description:* ${formData.description}\n` +
      `• *Source:* ${formData.referralSource}\n` +
      `----------------------------------------\n` +
      `_I am ready to share reference images and discuss feasibility._`;

    setSubmittedSummary(formattedMessage);
    setIsSubmitted(true);
  };

  const projectTypeOptions = [
    'God & Devotional Statues',
    'Human & Character Statues',
    'Animal & Wildlife Statues',
    'Commercial & Theme Décor',
    'Wall Murals & Decorative Panels',
    'Traditional Maattu Vandi / Heritage Set',
    'Event Sculpture Rental',
    'Other Bespoke Sculpture',
  ];

  const materialOptions = [
    'Fibreglass (FRP) - Recommended for durability',
    'Material varies by project (Consult Craftsman)',
    'Traditional Mixed Media & Composite',
  ];

  return (
    <div className={`relative ${isModal ? 'p-6 sm:p-8' : 'py-20 max-w-5xl mx-auto px-4 sm:px-6'}`}>
      <div className="bg-charcoal-900 border border-gold-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black relative overflow-hidden">
        
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />

        {isSubmitted ? (
          /* Submission Confirmation & 1-Click WhatsApp Transmission */
          <div className="text-center py-8 space-y-6 max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-3xl font-bold text-ivory-50">
                Quotation Request Prepared
              </h3>
              <p className="text-sm text-ivory-200 font-light leading-relaxed">
                Thank you, <strong className="text-gold-400 font-semibold">{formData.fullName}</strong>. Your project specification has been prepared for Silaikalam Statue Makers.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-charcoal-950/80 border border-charcoal-800 text-left space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-gold-400 flex items-center justify-between">
                <span>Summary of Your Specification</span>
                <span className="text-stone-300 font-normal">Ready to transmit</span>
              </div>
              <div className="text-xs text-ivory-200/90 whitespace-pre-wrap font-mono leading-relaxed bg-charcoal-900 p-3 rounded-lg border border-charcoal-800">
                {submittedSummary}
              </div>
            </div>

            {/* Direct WhatsApp Forward Action */}
            <div className="space-y-3 pt-2">
              <a
                href={createWhatsAppUrl(submittedSummary)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-charcoal-950 font-bold py-4 px-6 rounded-xl text-sm uppercase tracking-wider transition-all shadow-xl shadow-emerald-950/50"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send Specification to Arun Karthik on WhatsApp</span>
              </a>

              <p className="text-[11px] text-stone-300">
                Sends directly to primary workshop contact (+91 70100 13920) so you can also attach reference photos immediately.
              </p>
            </div>

            <div className="pt-4 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  if (onClose) onClose();
                }}
                className="text-xs text-stone-300 hover:text-ivory-100 underline decoration-charcoal-700"
              >
                Submit another request or close
              </button>
            </div>
          </div>
        ) : (
          /* Interactive Quote Request Form */
          <div>
            <div className="max-w-2xl space-y-2 mb-8">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold-400 uppercase">
                <Sparkles className="w-4 h-4" />
                <span>Direct Workshop Quotation</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ivory-50 tracking-tight">
                Request a Custom Statue Quote
              </h2>
              <p className="text-xs sm:text-sm text-ivory-300 font-light leading-relaxed">
                Provide your requirements below. Arun Karthik and our team will review the specifications, recommend suitable materials, and provide a clear quotation.
              </p>
            </div>

            {/* Reference Images Helper Box */}
            <div className="mb-8 p-4 rounded-xl bg-charcoal-950/80 border border-gold-500/25 flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-charcoal-800 text-gold-400 flex-shrink-0">
                <ImageIcon className="w-5 h-5" />
              </div>
              <div className="text-xs space-y-1">
                <h4 className="font-semibold text-ivory-100">
                  Have reference photos, drawings or sketches?
                </h4>
                <p className="text-ivory-300 leading-relaxed font-light">
                  Submit this form to generate your specification, or send reference images directly to Arun Karthik via{' '}
                  <a
                    href={createWhatsAppUrl('Hello Arun Karthik, I have reference photos for a custom statue project.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 underline hover:text-emerald-300 font-medium"
                  >
                    WhatsApp (+91 70100 13920)
                  </a>
                  .
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-ivory-200">
                    Full Name <span className="text-gold-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full bg-charcoal-950 border border-charcoal-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-ivory-100 placeholder-stone-500 focus:border-gold-500 focus:outline-none transition-colors"
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-ivory-200">
                    Phone Number <span className="text-gold-400">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full bg-charcoal-950 border border-charcoal-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-ivory-100 placeholder-stone-500 focus:border-gold-500 focus:outline-none transition-colors"
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-ivory-200">
                    WhatsApp Number (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="If different from phone"
                    className="w-full bg-charcoal-950 border border-charcoal-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-ivory-100 placeholder-stone-500 focus:border-gold-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Email & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-ivory-200">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. name@example.com"
                    className="w-full bg-charcoal-950 border border-charcoal-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-ivory-100 placeholder-stone-500 focus:border-gold-500 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-ivory-200">
                    City / Delivery Location
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Coimbatore, Madurai, Salem, etc."
                    className="w-full bg-charcoal-950 border border-charcoal-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-ivory-100 placeholder-stone-500 focus:border-gold-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Project Specifics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-ivory-200">
                    Project Type <span className="text-gold-400">*</span>
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-charcoal-950 border border-charcoal-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-ivory-100 focus:border-gold-500 focus:outline-none transition-colors"
                  >
                    {projectTypeOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-ivory-200">
                    Statue Subject / Figure
                  </label>
                  <input
                    type="text"
                    value={formData.statueRequirement}
                    onChange={(e) => setFormData({ ...formData, statueRequirement: e.target.value })}
                    placeholder="e.g. Kangeyam Bull, Buddha, Portrait figure"
                    className="w-full bg-charcoal-950 border border-charcoal-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-ivory-100 placeholder-stone-500 focus:border-gold-500 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-ivory-200">
                    Approximate Height / Dimensions
                  </label>
                  <input
                    type="text"
                    value={formData.approxHeight}
                    onChange={(e) => setFormData({ ...formData, approxHeight: e.target.value })}
                    placeholder="e.g. 5 feet, 8 feet, Life-size"
                    className="w-full bg-charcoal-950 border border-charcoal-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-ivory-100 placeholder-stone-500 focus:border-gold-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 4: Material, Quantity, Placement */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-ivory-200">
                    Preferred Material
                  </label>
                  <select
                    value={formData.preferredMaterial}
                    onChange={(e) => setFormData({ ...formData, preferredMaterial: e.target.value })}
                    className="w-full bg-charcoal-950 border border-charcoal-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-ivory-100 focus:border-gold-500 focus:outline-none transition-colors"
                  >
                    {materialOptions.map((mat) => (
                      <option key={mat} value={mat}>
                        {mat}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-ivory-200">
                    Quantity
                  </label>
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="e.g. 1 piece, 1 pair"
                    className="w-full bg-charcoal-950 border border-charcoal-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-ivory-100 focus:border-gold-500 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-ivory-200">
                    Placement
                  </label>
                  <select
                    value={formData.placement}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        placement: e.target.value as QuoteFormData['placement'],
                      })
                    }
                    className="w-full bg-charcoal-950 border border-charcoal-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-ivory-100 focus:border-gold-500 focus:outline-none transition-colors"
                  >
                    <option value="Outdoor">Outdoor (Sun & Rain exposure)</option>
                    <option value="Indoor">Indoor (Living / Mandapam / Lobby)</option>
                    <option value="Both">Both / Semi-outdoor</option>
                    <option value="Undecided">Undecided</option>
                  </select>
                </div>
              </div>

              {/* Row 5: Detailed Description */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-ivory-200">
                  Project Description & Specifications <span className="text-gold-400">*</span>
                </label>
                <textarea
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe your vision, intended placement, finishing preference (antique bronze, realistic painting, stone look), and any other notes..."
                  className="w-full bg-charcoal-950 border border-charcoal-800 rounded-lg p-3.5 text-xs sm:text-sm text-ivory-100 placeholder-stone-500 focus:border-gold-500 focus:outline-none transition-colors"
                />
                {errors.description && (
                  <p className="text-[11px] text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.description}</span>
                  </p>
                )}
              </div>

              {/* Row 6: Required By & Referral */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-ivory-200">
                    Target Completion / Required Date (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.requiredBy}
                    onChange={(e) => setFormData({ ...formData, requiredBy: e.target.value })}
                    placeholder="e.g. Next month, Festive season, Specific date"
                    className="w-full bg-charcoal-950 border border-charcoal-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-ivory-100 placeholder-stone-500 focus:border-gold-500 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-ivory-200">
                    How Did You Hear About Us?
                  </label>
                  <select
                    value={formData.referralSource}
                    onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
                    className="w-full bg-charcoal-950 border border-charcoal-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-ivory-100 focus:border-gold-500 focus:outline-none transition-colors"
                  >
                    <option value="Online Search / Google">Online Search / Google</option>
                    <option value="Instagram (@silaikalam_statue_makers)">Instagram (@silaikalam_statue_makers)</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Justdial Business Listing">Justdial Business Listing</option>
                    <option value="Saw Workshop in Kalaiyanur">Saw Workshop on Anaikatti Road</option>
                    <option value="Word of Mouth / Recommendation">Word of Mouth / Recommendation</option>
                  </select>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-charcoal-800">
                <div className="text-xs text-stone-300">
                  <span className="text-gold-400 font-medium">Privacy Assurance: </span>
                  Your information is solely used to discuss your sculpture quotation.
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 hover:from-gold-500 hover:to-gold-400 text-charcoal-950 font-bold px-8 py-3.5 rounded-lg text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-gold-950/40 hover:shadow-gold-500/20 active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Request a Quote</span>
                  </button>
                </div>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
