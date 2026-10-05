import React from 'react';
import { Phone, MessageSquare, MapPin, Mail, ArrowUp } from 'lucide-react';
import { CONTACT_CONFIG, getWhatsAppLink } from '../data/contactConfig';

interface FooterProps {
  onOpenAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAudit }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const link = getWhatsAppLink(
      "Hi ZetrixTech! I'd like to talk about a one-page website for my restaurant or hotel in Gwalior."
    );
    window.open(link, '_blank');
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 text-xs border-t border-neutral-800">
      {/* Pre-footer Callout */}
      <div className="border-b border-neutral-900 py-16 bg-gradient-to-b from-neutral-900/30 to-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to give your restaurant or hotel a faster website?
          </h3>
          <p className="text-neutral-400 text-sm max-w-xl mx-auto mb-8">
            Get your mobile one-page website, custom QR code menus, and Google Maps sync ready in 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenAudit}
              type="button"
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md"
            >
              Request Free Online Presence Review
            </button>
            <button
              onClick={handleWhatsApp}
              type="button"
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-emerald-400 bg-neutral-900 border border-emerald-800 hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp ({CONTACT_CONFIG.phone})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Regional Context */}
          <div className="md:col-span-1">
            <span className="font-display text-xl font-bold text-white block mb-2">
              ZetrixTech
            </span>
            <p className="text-neutral-400 text-xs leading-relaxed mb-4">
              Building fast, mobile-friendly one-page websites, QR code digital menus, and monthly updates for restaurants, cafes, and hotels in Gwalior, Madhya Pradesh.
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-amber-400 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>Based in Gwalior, Madhya Pradesh</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Services & Solutions
                </a>
              </li>
              <li>
                <a href="#simulator" className="hover:text-amber-400 transition-colors">
                  Interactive Demos
                </a>
              </li>
              <li>
                <a href="#why-one-page" className="hover:text-amber-400 transition-colors">
                  Why One-Page Websites
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-amber-400 transition-colors">
                  Transparent Packages
                </a>
              </li>
              <li>
                <a href="#audit" className="hover:text-amber-400 transition-colors">
                  Free Online Presence Review
                </a>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>Mobile-First Hospitality Websites</li>
              <li>Acrylic-Ready Tabletop QR Menus</li>
              <li>Google Maps & Business Verification</li>
              <li>Monthly Menu & Tariff Maintenance</li>
              <li>WhatsApp Direct Table Reservations</li>
              <li>High-Resolution Dish & Suite Photos</li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">
              Get in Touch
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`tel:${CONTACT_CONFIG.phoneRaw}`} className="hover:text-white transition-colors">
                  {CONTACT_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <button onClick={handleWhatsApp} className="hover:text-white transition-colors text-left">
                  WhatsApp: {CONTACT_CONFIG.phone}
                </button>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                <a href={`mailto:${CONTACT_CONFIG.email}`} className="hover:text-white transition-colors">
                  {CONTACT_CONFIG.email}
                </a>
              </div>
              <div className="text-[11px] text-neutral-400 pt-2">
                Location: {CONTACT_CONFIG.location}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-neutral-400 text-center sm:text-left">
            © {new Date().getFullYear()} ZetrixTech. All rights reserved. Built for Gwalior's food & hospitality industry.
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
