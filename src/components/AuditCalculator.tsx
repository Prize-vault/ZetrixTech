import React, { useState } from 'react';
import { CheckCircle2, MessageSquare, ArrowRight, ShieldCheck, HelpCircle, AlertTriangle } from 'lucide-react';
import { AuditFormData } from '../types';
import { CONTACT_CONFIG, getWhatsAppLink } from '../data/contactConfig';

export const AuditCalculator: React.FC = () => {
  const [formData, setFormData] = useState<AuditFormData>({
    businessName: '',
    businessType: 'Restaurant / Dine-in',
    locality: 'City Centre, Gwalior',
    contactNumber: '',
    hasWebsite: 'No website currently',
    hasGoogleMaps: 'Pin is there but unverified / old hours',
    hasQrMenu: 'No QR code',
    notes: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [analyzing, setAnalyzing] = useState<boolean>(false);

  const localities = [
    'Gola ka Mandir, Gwalior',
    'City Centre, Gwalior',
    'Lashkar, Gwalior',
    'Thatipur, Gwalior',
    'Morar, Gwalior',
    'Padav, Gwalior',
    'Hazira, Gwalior',
    'Maharaj Bada, Gwalior',
    'Dabra / Outskirts',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.businessName.trim() || !formData.contactNumber.trim()) {
      alert('Please enter your business name and contact WhatsApp number.');
      return;
    }

    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setSubmitted(true);
    }, 600);
  };

  const handleSendToWhatsApp = () => {
    const message = (
      `Hello ZetrixTech! I'd like a Free Online Presence Review for my business:\n\n` +
      `🏢 Business Name: ${formData.businessName}\n` +
      `📍 Location: ${formData.locality}\n` +
      `🍽️ Type: ${formData.businessType}\n` +
      `📱 Contact: ${formData.contactNumber}\n` +
      `🌐 Current Website: ${formData.hasWebsite}\n` +
      `🗺️ Google Maps Status: ${formData.hasGoogleMaps}\n` +
      `📱 QR Code Status: ${formData.hasQrMenu}\n\n` +
      `Please review our presence and tell us how we can get more direct guests!`
    );
    window.open(getWhatsAppLink(message), '_blank');
  };

  return (
    <section id="audit" className="py-20 md:py-28 bg-neutral-950 border-b border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            Zero Cost · Zero Obligation
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Claim Your Free Online Presence Review
          </h2>
          <p className="mt-4 text-base text-neutral-300">
            Tell us about your restaurant, cafe, or hotel in Gwalior. We’ll analyze your current mobile readiness, Google Maps visibility, and menu accessibility—and share a personalized audit with recommendations.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-neutral-900/80 rounded-2xl border border-neutral-800 p-6 sm:p-10 shadow-2xl relative">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Business Name */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Restaurant / Hotel Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Royal Darbar Cafe"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                {/* Business Type */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Business Category
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    <option value="Restaurant / Dine-in">Restaurant / Dine-in</option>
                    <option value="Boutique Hotel & Stay">Boutique Hotel & Stay</option>
                    <option value="Cafe & Rooftop">Cafe & Rooftop Lounge</option>
                    <option value="Cloud Kitchen & Takeaway">Cloud Kitchen & Takeaway</option>
                    <option value="Bakery & Sweets">Bakery & Sweets Parlour</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Location in Gwalior */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Area in Gwalior
                  </label>
                  <select
                    value={formData.locality}
                    onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    {localities.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>

                {/* WhatsApp Number */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    WhatsApp Number (for the report) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98260 XXXXX"
                    value={formData.contactNumber}
                    onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              {/* Current Online Status Check */}
              <div className="space-y-3 pt-2">
                <span className="block text-xs font-semibold text-neutral-300">
                  Current Status Check:
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] text-neutral-400 mb-1">
                      Website Status
                    </label>
                    <select
                      value={formData.hasWebsite}
                      onChange={(e) => setFormData({ ...formData, hasWebsite: e.target.value })}
                      className="w-full p-2 bg-neutral-950 border border-neutral-800 rounded-md text-xs text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="No website currently">No website currently</option>
                      <option value="Old / Broken on phone">Old / Broken on phone</option>
                      <option value="Have working website">Have working website</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] text-neutral-400 mb-1">
                      Google Maps Details
                    </label>
                    <select
                      value={formData.hasGoogleMaps}
                      onChange={(e) => setFormData({ ...formData, hasGoogleMaps: e.target.value })}
                      className="w-full p-2 bg-neutral-950 border border-neutral-800 rounded-md text-xs text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="Needs pin & hours update">Needs pin & hours update</option>
                      <option value="Never created Google Maps">Never created Google Maps</option>
                      <option value="Accurate and verified">Accurate and verified</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] text-neutral-400 mb-1">
                      Table QR Codes
                    </label>
                    <select
                      value={formData.hasQrMenu}
                      onChange={(e) => setFormData({ ...formData, hasQrMenu: e.target.value })}
                      className="w-full p-2 bg-neutral-950 border border-neutral-800 rounded-md text-xs text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="No QR codes used">No QR codes used</option>
                      <option value="Slow PDF download QR">Slow PDF download QR</option>
                      <option value="Fast web QR working">Fast web QR working</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={analyzing}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-md flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                {analyzing ? (
                  <span>Evaluating Online Presence...</span>
                ) : (
                  <>
                    <span>Generate Free Review Summary</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Free · No sales pressure · Direct report to your WhatsApp</span>
              </div>
            </form>
          ) : (
            /* Results & Direct WhatsApp Dispatch View */
            <div className="text-center py-4 space-y-6">
              <div className="w-14 h-14 bg-amber-400/10 text-amber-400 rounded-2xl flex items-center justify-center mx-auto border border-amber-400/20">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  Review Ready for {formData.businessName}
                </h3>
                <p className="text-xs text-neutral-300">
                  Targeted for {formData.locality} · {formData.businessType}
                </p>
              </div>

              {/* Scorecard Summary Box */}
              <div className="bg-neutral-950 rounded-xl p-5 border border-neutral-800 text-left space-y-3 text-xs">
                <div className="flex justify-between items-center pb-3 border-b border-neutral-800">
                  <span className="font-semibold text-neutral-300">Estimated Direct Guest Conversion:</span>
                  <span className="font-mono font-bold text-amber-400">
                    High Growth Opportunity
                  </span>
                </div>

                <div className="space-y-2 text-neutral-300">
                  <div className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">1.</span>
                    <span>
                      {formData.hasWebsite.includes('No')
                        ? 'Missing mobile-first website: Losing guests searching nearby in Gwalior to competitors with instant menus.'
                        : 'Current website upgrade: Enhancing to a 1-tap WhatsApp reservation page will eliminate booking drop-offs.'}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">2.</span>
                    <span>
                      {formData.hasQrMenu.includes('No') || formData.hasQrMenu.includes('PDF')
                        ? 'Tabletop QR codes: Table acrylic stands will cut printing expenses and make menu updates effortless.'
                        : 'Digital QR menus: Ready to sync with your one-page live link for instant changes.'}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sky-400 font-bold">3.</span>
                    <span>
                      Google Maps Linkage: Direct website button on your Maps pin drives high-intent visitors straight to your WhatsApp.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleSendToWhatsApp}
                  type="button"
                  className="flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-emerald-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-400/10"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Report & Chat on WhatsApp</span>
                </button>

                <button
                  onClick={() => setSubmitted(false)}
                  type="button"
                  className="py-3 px-4 rounded-xl font-semibold text-xs text-neutral-400 hover:text-white bg-neutral-950 border border-neutral-800 hover:border-neutral-700 transition-colors"
                >
                  Edit Information
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
