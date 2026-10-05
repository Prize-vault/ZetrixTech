import React, { useState } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { CONTACT_CONFIG, getWhatsAppLink } from '../data/contactConfig';

interface NavbarProps {
  onOpenAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAudit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const link = getWhatsAppLink(
      "Hi ZetrixTech! I run a restaurant/hotel in Gwalior and would like to get a fast one-page website and QR menu."
    );
    window.open(link, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-neutral-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark in display face */}
        <a href="#" className="font-display text-2xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors">
          ZetrixTech
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
          <a href="#services" className="hover:text-amber-400 transition-colors">
            Services
          </a>
          <a href="#simulator" className="hover:text-amber-400 transition-colors">
            Live Demos
          </a>
          <a href="#why-one-page" className="hover:text-amber-400 transition-colors">
            Why One-Page
          </a>
          <a href="#pricing" className="hover:text-amber-400 transition-colors">
            Pricing
          </a>
          <a href="#audit" className="hover:text-amber-400 transition-colors">
            Free Audit
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleWhatsAppClick}
            type="button"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 rounded-lg hover:bg-emerald-900/60 transition-colors whitespace-nowrap shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp Us</span>
          </button>

          <button
            onClick={onOpenAudit}
            type="button"
            className="px-4 py-2 text-xs font-bold text-neutral-950 bg-amber-400 rounded-lg hover:bg-amber-300 transition-all shadow-sm whitespace-nowrap shrink-0 active:scale-95"
          >
            Get Free Audit
          </button>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 text-neutral-400 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-800 bg-neutral-900/98 px-4 py-5 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-neutral-200">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400 transition-colors"
            >
              Services & Capabilities
            </a>
            <a
              href="#simulator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400 transition-colors"
            >
              Interactive Live Demos
            </a>
            <a
              href="#why-one-page"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400 transition-colors"
            >
              Why One-Page Websites Win
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400 transition-colors"
            >
              Transparent Packages
            </a>
            <a
              href="#audit"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400 transition-colors"
            >
              Free Online Presence Audit
            </a>
          </nav>

          <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsAppClick();
              }}
              type="button"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 rounded-lg hover:bg-emerald-900/60 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp ({CONTACT_CONFIG.phone})</span>
            </button>
            <a
              href={`tel:${CONTACT_CONFIG.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-neutral-300 bg-neutral-800/80 border border-neutral-700 rounded-lg hover:bg-neutral-800 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us Directly ({CONTACT_CONFIG.phone})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
