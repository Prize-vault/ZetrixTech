import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Why a one-page website instead of a traditional 10-page website?',
      a: 'Guests on mobile phones do not want to click through 5 nested dropdown menus or wait for heavy pages to load. They want your menu/room photos, pricing, location, timings, and a quick way to reserve or call. Our one-page design puts everything on a single, ultra-fast scrolling canvas that loads in under 1 second.',
    },
    {
      q: 'Do guests need to download any application to view the QR code menu?',
      a: 'No, absolutely not. Guests simply point their standard iPhone or Android camera at the QR code stand on your table, and your live menu opens instantly in their mobile browser with zero app installation, zero sign-ups, and zero battery drain.',
    },
    {
      q: 'How fast can you build and launch our website?',
      a: 'Once you send us your menu, room photos, and basic details over WhatsApp or email, we will have your complete ready-to-use one-page website and print-ready QR codes delivered within 48 hours.',
    },
    {
      q: 'What happens when our food prices change or we add new weekend specials?',
      a: 'That is the beauty of ZetrixTech. You don’t need to learn coding or hire a developer. Simply take a photo of your new menu or drop us a quick WhatsApp text note with the price changes. We update your live website and digital QR menu within hours so your information is always current.',
    },
    {
      q: 'How does this help us save money on Zomato, Swiggy, and MakeMyTrip commissions?',
      a: 'Delivery apps and hotel aggregators take 20% to 30% of every order or booking. When repeat guests or nearby locals search for your name on Google or scan your table QR code, they interact directly with your brand and place their orders or room inquiries via WhatsApp with 0% commission.',
    },
    {
      q: 'Can we connect our own custom domain name (e.g. www.hotelgwalior.com)?',
      a: 'Yes! We configure and connect your official custom domain with full SSL security certificates and high-speed global CDN hosting included in our packages.',
    },
    {
      q: 'What does the Google Maps optimization service include?',
      a: 'We audit your Google Business Profile to verify your exact physical GPS pin, ensure opening and closing hours are correct for all 7 days, verify your primary contact phone number, and link your new one-page website directly so visitors can browse your menu with one tap.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-neutral-950 border-b border-neutral-800">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            Frequently Answered Questions
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Clear Answers for Busy Owners
          </h2>
          <p className="mt-4 text-base text-neutral-300">
            Have questions before starting? Here is everything you need to know about working with ZetrixTech in Gwalior.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-neutral-800 bg-neutral-900/60 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-semibold text-white hover:text-amber-400 transition-colors"
                >
                  <span className="leading-snug">{faq.q}</span>
                  <span className="shrink-0 text-amber-400">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
