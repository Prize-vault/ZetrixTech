import React from 'react';
import { Star, MessageSquare } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Raghvendra Tomar',
      role: 'Co-Founder & General Manager',
      establishment: 'The Royal Tandoor & Rooftop Lounge, City Centre Gwalior',
      result: '+42% Direct WhatsApp Table Bookings',
      quote:
        'Before ZetrixTech, guests would message us on Instagram asking for our menu PDF, and half the time our staff was too busy during peak rush to reply. ZetrixTech put up our clean one-page site with QR codes on all 24 tables in 48 hours. Now guests open our menu instantly, and weekend reservations arrive formatted right on WhatsApp.',
    },
    {
      name: 'Dr. Vivek Saxena',
      role: 'Managing Partner',
      establishment: 'Fortview Residency & Heritage Suites, Lashkar Gwalior',
      result: 'Saved ₹38,000 in Portal Commissions in 90 Days',
      quote:
        'We were tired of paying 22% commissions to booking portals for business travelers visiting the High Court and Gwalior Fort. ZetrixTech designed our rooms showcase with a direct WhatsApp booking link and synced our Google Maps pin. Guests visiting our listing now book directly with our front desk.',
    },
    {
      name: 'Aditi Chhabra',
      role: 'Owner & Head Baker',
      establishment: 'Crust & Cocoa Artisanal Bakery, Thatipur Gwalior',
      result: '1,400+ Monthly Menu Scans with Zero Paper Waste',
      quote:
        'Our menu changes every season with fresh cakes and holiday bakes. With traditional printed menus, we wasted thousands re-printing laminated cards. With ZetrixTech, whenever I introduce a new dessert, I simply send a photo on WhatsApp, and my live QR menu is updated before afternoon tea.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-neutral-900/50 border-b border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            Local Hospitality Proof
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted by Gwalior's Leading Restaurateurs & Hoteliers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300">
            Real outcomes from local dining and lodging venues that switched to ZetrixTech's fast, mobile-friendly one-page systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-neutral-950 border border-neutral-800 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <div className="text-xs font-mono font-bold text-emerald-400 mb-3">
                  {t.result}
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-900">
                <div className="font-bold text-sm text-white">{t.name}</div>
                <div className="text-[11px] text-amber-400 font-medium">{t.role}</div>
                <div className="text-[11px] text-neutral-300 mt-0.5">{t.establishment}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
