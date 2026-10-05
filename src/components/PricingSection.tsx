import React from 'react';
import { Check, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import { CONTACT_CONFIG, getWhatsAppLink } from '../data/contactConfig';

export const PricingSection: React.FC = () => {
  const handleSelectPlan = (planName: string, price: string) => {
    const link = getWhatsAppLink(
      `Hi ZetrixTech! I'm interested in the "${planName}" package (${price}) for my restaurant/hotel in Gwalior. Let's discuss!`
    );
    window.open(link, '_blank');
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-neutral-950 border-b border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            Simple & Transparent Pricing
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Clear Packages. No Hidden Agency Surprises.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300">
            Everything you need to launch your one-page website, get your QR code menus printing, and keep your prices updated every single month.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Plan 1: Starter Dine / Cafe */}
          <div className="rounded-2xl bg-neutral-900/60 border border-neutral-800 p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors">
            <div>
              <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                Starter Dine
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Quick Cafe & Takeaway
              </h3>
              <p className="text-xs text-neutral-400 mb-6">
                Perfect for quick bites, cloud kitchens, and small cafes looking to put their menu online.
              </p>

              <div className="mb-6">
                <span className="font-display text-4xl font-extrabold text-white">₹3,999</span>
                <span className="text-xs text-neutral-400 ml-2">one-time setup</span>
              </div>

              <div className="space-y-3 pt-4 border-t border-neutral-800 text-xs text-neutral-300">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Mobile-friendly 1-page menu website</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>1-Tap WhatsApp & direct phone call buttons</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Google Maps location & opening timings</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Print-ready digital QR code file</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Sub-second (&lt; 0.9s) mobile loading speed</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <button
                onClick={() => handleSelectPlan('Starter Dine', '₹3,999')}
                type="button"
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-neutral-200 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 transition-colors flex items-center justify-center gap-2"
              >
                <span>Choose Starter Plan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Plan 2: Pro Hospitality (Marquee / Most Popular) */}
          <div className="rounded-2xl bg-neutral-900 border-2 border-amber-400 p-8 flex flex-col justify-between relative shadow-2xl shadow-amber-400/10">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-neutral-950 text-[11px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider">
              Most Popular in Gwalior
            </div>

            <div>
              <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                Pro Hospitality
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Dine-In & Boutique Stays
              </h3>
              <p className="text-xs text-neutral-300 mb-6">
                Complete solution for full-service restaurants, rooftop lounges, and boutique hotels wanting hands-free maintenance.
              </p>

              <div className="mb-6">
                <span className="font-display text-4xl font-extrabold text-white">₹6,999</span>
                <span className="text-xs text-neutral-400 ml-2">one-time</span>
                <div className="text-xs text-amber-400 font-semibold mt-1">
                  + ₹499/mo for all future menu & price updates
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-neutral-800 text-xs text-neutral-200">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-semibold text-white">Full food menu OR room categories with photos</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-semibold text-white">Monthly updates included: WhatsApp us new dishes anytime</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Branded tabletop QR code artwork ready for acrylic stands</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Google Maps & Google Business Profile audit & sync</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Custom domain connection (.com or .in) + secure SSL</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Pre-filled WhatsApp reservation booking messages</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <button
                onClick={() => handleSelectPlan('Pro Hospitality', '₹6,999 + ₹499/mo')}
                type="button"
                className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20 active:scale-[0.98]"
              >
                <span>Get Pro Package</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Plan 3: Enterprise & Resort */}
          <div className="rounded-2xl bg-neutral-900/60 border border-neutral-800 p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors">
            <div>
              <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                Resort & Banquets
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Hotels & Multi-Outlet
              </h3>
              <p className="text-xs text-neutral-400 mb-6">
                Designed for large properties with multiple room tiers, banquet inquiry flows, or multi-outlet food chains.
              </p>

              <div className="mb-6">
                <span className="font-display text-4xl font-extrabold text-white">₹11,999</span>
                <span className="text-xs text-neutral-400 ml-2">one-time</span>
                <div className="text-xs text-neutral-400 font-medium mt-1">
                  + ₹799/mo for priority updates & hosting
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-neutral-800 text-xs text-neutral-300">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>All room tiers, banquet halls, and conference packages</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Priority 2-hour turnaround for weekend dish / tariff updates</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Multi-location or multi-floor QR code routing</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Dedicated event inquiry flow for weddings & corporatemeets</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Free annual design freshening and seasonal re-themes</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <button
                onClick={() => handleSelectPlan('Resort & Banquets', '₹11,999 + ₹799/mo')}
                type="button"
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-neutral-200 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 transition-colors flex items-center justify-center gap-2"
              >
                <span>Choose Resort Plan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Reassurance note */}
        <div className="mt-12 text-center text-xs text-neutral-300">
          Have unique requirements or multiple restaurants in Gwalior?{' '}
          <button
            onClick={() => handleSelectPlan('Custom Hospitality', 'Custom')}
            className="text-amber-400 hover:underline font-semibold"
          >
            Chat with our founder directly on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};
