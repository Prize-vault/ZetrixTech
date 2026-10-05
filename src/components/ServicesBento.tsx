import React from 'react';
import { Smartphone, QrCode, MapPin, RefreshCw, Zap, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const ServicesBento: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-neutral-950 border-b border-neutral-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            Everything Your Venue Needs Online
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Tailored Specifically for Local Food & Hospitality Businesses
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300">
            We don’t build bloated 20-page corporate websites that no hungry guest ever reads. We build focused, ultra-fast one-page experiences engineered to convert browsing locals and travelers into paying patrons.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 01: The Marquee Service - Spans 2 Columns */}
          <div className="md:col-span-2 rounded-2xl bg-neutral-900/60 border border-neutral-800 p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-display text-sm font-bold text-amber-400">
                  01. Mobile-First One-Page Website
                </span>
                <span className="text-xs text-neutral-400 font-mono">
                  &lt; 0.9s Load Time
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                Menu or Rooms, Photo Gallery, Timings & 1-Tap Contact
              </h3>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                Designed from the ground up for guests standing outside your door, looking at your board, or searching on Google Maps while walking through Gwalior. Your complete menu with pricing or room categories with tariffs, crisp photo showcase, opening hours, and prominent 1-tap WhatsApp and Call buttons.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-neutral-800/80 text-xs text-neutral-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Works seamlessly across iOS & Android phones</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Direct WhatsApp reservation pre-filled link</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>High-resolution dish and ambience photos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Fast cloud hosting with custom .com or .in domain</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 02: Tabletop QR Codes */}
          <div className="rounded-2xl bg-neutral-900/60 border border-neutral-800 p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-display text-sm font-bold text-emerald-400">
                  02. Smart QR Code Menus
                </span>
                <QrCode className="w-5 h-5 text-emerald-400" />
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
                Zero App Downloads for Dining Guests
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                Replace stained, outdated paper card menus with elegant, print-ready QR codes designed for acrylic table stands, bar tops, and hotel room compendiums. Guests scan with their phone camera and your fresh digital menu opens in under a second.
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-800/80 text-xs text-neutral-400">
              High-resolution vector files ready for local Gwalior printers or acrylic fabrication.
            </div>
          </div>

          {/* Card 03: Google Maps Optimization */}
          <div className="rounded-2xl bg-neutral-900/60 border border-neutral-800 p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-display text-sm font-bold text-sky-400">
                  03. Google Maps Sync
                </span>
                <MapPin className="w-5 h-5 text-sky-400" />
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
                Fix Your Pin & Business Details
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                Guests find you first on Google Maps. We audit and correct your location pin, opening timings, official phone number, category tags, and link your official one-page website directly to your Google Business Profile.
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-800/80 text-xs text-neutral-400">
              Helps nearby hungry diners and hotel bookers find you above unverified competitors.
            </div>
          </div>

          {/* Card 04: Monthly Content Updates - Spans 2 Columns */}
          <div className="md:col-span-2 rounded-2xl bg-neutral-900/60 border border-neutral-800 p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-display text-sm font-bold text-violet-400">
                  04. Monthly Hands-Free Updates
                </span>
                <RefreshCw className="w-5 h-5 text-violet-400" />
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Never Deal with Stale Prices or Outdated Menus
              </h3>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                Restaurant menus change often: ingredients cost more, new chef specials debut on weekends, seasonal room tariffs shift between summer and wedding season. You don’t need to learn WordPress or hire expensive web designers. Just send us a WhatsApp photo of your updated menu or notes—we update your live site within hours.
              </p>

              <div className="flex flex-wrap gap-4 text-xs text-neutral-300 pt-4 border-t border-neutral-800/80">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  Fast WhatsApp submission
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  Price changes updated same day
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  Seasonal promotions & banner updates
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
