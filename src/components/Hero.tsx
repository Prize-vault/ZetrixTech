import React from 'react';
import { ArrowRight, MessageSquare, Sparkles, MapPin, Clock, Smartphone, QrCode } from 'lucide-react';
import { CONTACT_CONFIG, getWhatsAppLink } from '../data/contactConfig';

interface HeroProps {
  onOpenAudit: () => void;
  onExploreDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit, onExploreDemo }) => {
  const handleWhatsApp = () => {
    const link = getWhatsAppLink(
      "Hi ZetrixTech! I run a restaurant/hotel in Gwalior and would like a free review of my online presence."
    );
    window.open(link, '_blank');
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-neutral-800/80 bg-neutral-950">
      {/* Subtle radial ambient glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-48 right-10 w-[350px] h-[350px] bg-emerald-500/5 blur-[100px] rounded-full"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Regional Trust Marker - clean unboxed typography with bullet separator */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-amber-400 mb-6">
            <span>Gwalior Dedicated Studio</span>
            <span aria-hidden="true">·</span>
            <span>Restaurants, Cafes & Hotels</span>
            <span aria-hidden="true">·</span>
            <span>Live in 48 Hours</span>
          </div>

          {/* Main Headline with balanced wrap */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] text-balance">
            Simple, Fast, Mobile-Friendly Websites for Restaurants & Hotels
          </h1>

          {/* Subheading addressing the exact business problem */}
          <p className="mt-6 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto text-balance">
            Your guests judge your hospitality on their smartphones. We build clean one-page websites with your menu or rooms, photo gallery, location, timings, and a 1-tap WhatsApp or Call button so guests find you and reach you in seconds.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onOpenAudit}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-lg shadow-amber-400/15 whitespace-nowrap active:scale-[0.98]"
            >
              <span>Get Free Online Presence Review</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleWhatsApp}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-emerald-300 bg-neutral-900 border border-emerald-800/80 hover:bg-neutral-800/90 rounded-xl transition-colors whitespace-nowrap active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Message Us on WhatsApp</span>
            </button>
          </div>

          {/* Unboxed Metadata Trust Strip */}
          <div className="mt-12 pt-8 border-t border-neutral-900 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="p-3 rounded-lg bg-neutral-900/40 border border-neutral-800/50">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
                <Smartphone className="w-4 h-4" />
                <span>Mobile First</span>
              </div>
              <p className="text-xs text-neutral-300 leading-snug">
                Under 1s load speed on 4G/5G mobile networks.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-neutral-900/40 border border-neutral-800/50">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">
                <QrCode className="w-4 h-4" />
                <span>Smart QR Menus</span>
              </div>
              <p className="text-xs text-neutral-300 leading-snug">
                Tabletop acrylic-ready QR codes for touchless menus.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-neutral-900/40 border border-neutral-800/50">
              <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-1">
                <MapPin className="w-4 h-4" />
                <span>Google Maps Sync</span>
              </div>
              <p className="text-xs text-neutral-300 leading-snug">
                Accurate pin, timings, and direct navigation links.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-neutral-900/40 border border-neutral-800/50">
              <div className="flex items-center gap-2 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-1">
                <Clock className="w-4 h-4" />
                <span>Monthly Updates</span>
              </div>
              <p className="text-xs text-neutral-300 leading-snug">
                Menu or price changed? Just WhatsApp us, we update it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
