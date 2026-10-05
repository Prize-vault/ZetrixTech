import React from 'react';
import { Check, X, ShieldAlert, Sparkles } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  return (
    <section id="why-one-page" className="py-20 md:py-28 bg-neutral-900/40 border-b border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            The Smart Hospitality Strategy
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why One-Page Websites Convert Better
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300">
            A customer searching for dinner or a hotel room has zero patience. Compare how ZetrixTech stacks up against old-fashioned agency websites and relying solely on delivery portals.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Option 1: Old-School 10-Page Websites */}
          <div className="rounded-2xl bg-neutral-950/80 border border-neutral-800/80 p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                Traditional Web Agencies
              </div>
              <h3 className="font-display text-xl font-bold text-neutral-200 mb-3">
                Complex Multi-Page Sites
              </h3>
              <p className="text-xs text-neutral-400 mb-6">
                Overpriced WordPress websites with 10 empty pages that take weeks to build and months to update.
              </p>

              <div className="space-y-3 text-xs text-neutral-300">
                <div className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Slow load speeds (3–6 seconds on mobile)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Hidden behind confusing navigation menus</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Expensive ₹20,000–₹40,000 development fee</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Outdated prices sit for years with no maintenance</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-900 text-[11px] text-neutral-300">
              Result: 70% of hungry guests bounce before seeing your food.
            </div>
          </div>

          {/* Option 2: Relying ONLY on Zomato / Swiggy / OTAs */}
          <div className="rounded-2xl bg-neutral-950/80 border border-neutral-800/80 p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                Third-Party Portals Only
              </div>
              <h3 className="font-display text-xl font-bold text-neutral-200 mb-3">
                Aggregators & OTAs
              </h3>
              <p className="text-xs text-neutral-400 mb-6">
                Listing only on third-party apps where competitors are placed directly right next to your profile.
              </p>

              <div className="space-y-3 text-xs text-neutral-300">
                <div className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Pay 20% to 30% heavy commission on every single bill</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>You don’t own guest contact info or loyalty</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Direct competitors advertise directly below your menu</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>No direct booking or WhatsApp connection for regulars</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-900 text-[11px] text-neutral-300">
              Result: Thousands of rupees paid monthly in avoidable commissions.
            </div>
          </div>

          {/* Option 3: ZetrixTech One-Page Website (The Winner) */}
          <div className="rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 border-2 border-amber-500/80 p-6 flex flex-col justify-between relative shadow-xl shadow-amber-500/5">
            <div className="absolute -top-3 left-6 bg-amber-400 text-neutral-950 text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
              Recommended
            </div>

            <div>
              <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2 pt-1">
                ZetrixTech Formula
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                Fast Mobile One-Page Website
              </h3>
              <p className="text-xs text-neutral-300 mb-6">
                Engineered for immediate action: menu/rooms, photos, location, and 1-tap WhatsApp or phone call.
              </p>

              <div className="space-y-3 text-xs text-neutral-200">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="font-medium">Sub-second (&lt; 0.9s) mobile speed for 4G/5G users</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="font-medium">Zero commission on direct reservations and inquiries</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="font-medium">Free acrylic-ready tabletop QR code included</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="font-medium">Monthly updates handled: Just WhatsApp us new prices</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="font-medium">Google Maps pin and opening hours synced</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 text-[11px] text-amber-300 font-medium">
              Result: Maximize direct guests and repeat footfall in Gwalior.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
