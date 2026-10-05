import React, { useState } from 'react';
import { DEMO_CLIENTS } from '../data/mockDemos';
import { DemoClient } from '../types';
import { 
  Smartphone, 
  Monitor, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  QrCode, 
  Utensils, 
  BedDouble, 
  Check, 
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export const LivePreviewSimulator: React.FC = () => {
  const [selectedClientId, setSelectedClientId] = useState<string>('heritage-cafe');
  const [deviceMode, setDeviceMode] = useState<'mobile' | 'desktop'>('mobile');
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [showQrModal, setShowQrModal] = useState<boolean>(false);
  const [interactionFeedback, setInteractionFeedback] = useState<string | null>(null);

  const client: DemoClient = DEMO_CLIENTS.find((c) => c.id === selectedClientId) || DEMO_CLIENTS[0];

  // Set default category when client changes
  React.useEffect(() => {
    if (client.categories && client.categories.length > 0) {
      setActiveCategory(client.categories[0]);
    }
  }, [client]);

  const handleActionClick = (actionName: string, detail: string) => {
    setInteractionFeedback(`Simulated Client Action: ${actionName} (${detail})`);
    setTimeout(() => {
      setInteractionFeedback(null);
    }, 3500);
  };

  return (
    <section id="simulator" className="py-20 bg-neutral-900/60 border-b border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            Interactive Live Prototype
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            See Exactly What Your Guests Will Experience
          </h2>
          <p className="mt-4 text-base text-neutral-300">
            Select a business model below to test the lightning-fast mobile experience we build for Gwalior restaurants and hotels.
          </p>
        </div>

        {/* Client Selection Filter Tabs (Functional segmented buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {DEMO_CLIENTS.map((c) => {
            const isActive = c.id === selectedClientId;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedClientId(c.id)}
                type="button"
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-amber-400 text-neutral-950 shadow-md shadow-amber-400/10'
                    : 'bg-neutral-800/80 text-neutral-300 hover:bg-neutral-800 hover:text-white border border-neutral-700/60'
                }`}
              >
                {c.type === 'restaurant' && <Utensils className="w-4 h-4" />}
                {c.type === 'hotel' && <BedDouble className="w-4 h-4" />}
                {c.type === 'cafe' && <Utensils className="w-4 h-4" />}
                <span>{c.name.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Viewport & Device Controls */}
        <div className="flex items-center justify-between max-w-5xl mx-auto mb-6 px-2">
          <div className="text-xs font-medium text-neutral-400">
            Previewing: <span className="text-white font-semibold">{client.name}</span>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-neutral-800/90 rounded-lg border border-neutral-700/60">
            <button
              onClick={() => setDeviceMode('mobile')}
              type="button"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                deviceMode === 'mobile'
                  ? 'bg-neutral-700 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile Frame</span>
            </button>
            <button
              onClick={() => setDeviceMode('desktop')}
              type="button"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                deviceMode === 'desktop'
                  ? 'bg-neutral-700 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop View</span>
            </button>
          </div>
        </div>

        {/* Interactive Feedback Toast */}
        {interactionFeedback && (
          <div className="fixed bottom-24 right-4 z-50 bg-emerald-950 border border-emerald-500/60 text-emerald-200 px-4 py-3 rounded-xl shadow-2xl text-xs flex items-center gap-2 max-w-sm">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{interactionFeedback}</span>
          </div>
        )}

        {/* Device Container Frame */}
        <div className="flex justify-center">
          {deviceMode === 'mobile' ? (
            /* iPhone-Style Mobile Frame */
            <div className="relative w-full max-w-[390px] rounded-[42px] border-[10px] border-neutral-800 bg-neutral-950 shadow-2xl shadow-black/80 overflow-hidden ring-1 ring-neutral-700/60">
              {/* Speaker / Dynamic Notch */}
              <div className="h-6 w-full bg-neutral-900 flex items-center justify-center relative">
                <div className="w-20 h-3.5 bg-neutral-800 rounded-full" />
              </div>

              {/* Inside Website Content */}
              <div className="h-[640px] overflow-y-auto bg-neutral-950 text-neutral-100 flex flex-col justify-between selection:bg-amber-400 selection:text-neutral-950 scrollbar-none">
                {/* Simulated Web Header */}
                <div className="sticky top-0 z-20 bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-800 px-4 py-3 flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-bold text-sm text-white leading-tight">
                      {client.name}
                    </h4>
                    <p className="text-[10px] text-amber-400 font-medium">Gwalior, M.P.</p>
                  </div>
                  <button
                    onClick={() => setShowQrModal(true)}
                    type="button"
                    title="View QR Code Menu"
                    className="p-1.5 text-neutral-300 hover:text-white bg-neutral-800 rounded-lg text-[10px] flex items-center gap-1"
                  >
                    <QrCode className="w-3.5 h-3.5" />
                    <span>QR</span>
                  </button>
                </div>

                {/* Hero / Cover Simulation */}
                <div className="p-4 bg-gradient-to-b from-neutral-900 to-neutral-950 border-b border-neutral-800/80">
                  <div className="text-[11px] text-neutral-400 mb-1 leading-snug">
                    {client.tagline}
                  </div>
                  <h3 className="font-display text-base font-bold text-white mb-2 leading-tight">
                    {client.heroHeading}
                  </h3>

                  {/* 1-Tap Contact Action Island for Guests */}
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleActionClick("WhatsApp Chat", "Instant Table / Room Inquiry")}
                      type="button"
                      className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold text-emerald-950 bg-emerald-400 rounded-lg hover:bg-emerald-300 transition-colors shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </button>
                    <button
                      onClick={() => handleActionClick("Direct Phone Call", client.phone)}
                      type="button"
                      className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold text-neutral-100 bg-neutral-800 border border-neutral-700 rounded-lg hover:bg-neutral-700 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Now</span>
                    </button>
                  </div>

                  {/* Location & Timings Quick Bar */}
                  <div className="mt-3 pt-3 border-t border-neutral-800/80 space-y-1.5 text-[11px] text-neutral-300">
                    <div className="flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="leading-tight">{client.location}</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="leading-tight">{client.timings}</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Content: Menu OR Rooms */}
                <div className="p-4 flex-1">
                  {/* Category switcher */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
                    {client.categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        type="button"
                        className={`text-[11px] px-2.5 py-1 rounded-md font-medium whitespace-nowrap transition-colors ${
                          activeCategory === cat
                            ? 'bg-neutral-200 text-neutral-900 font-semibold'
                            : 'bg-neutral-900 text-neutral-400 hover:text-neutral-200 border border-neutral-800'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  {/* If client is restaurant / cafe */}
                  {client.menuItems && (
                    <div className="mt-3 space-y-2.5">
                      {client.menuItems
                        .filter((item) => activeCategory === '' || item.category === activeCategory || client.categories[0] === activeCategory)
                        .map((item, idx) => (
                          <div
                            key={idx}
                            className="p-2.5 rounded-lg bg-neutral-900/70 border border-neutral-800/70 flex justify-between items-start gap-2"
                          >
                            <div className="flex-1">
                              <div className="flex items-center gap-1.5 mb-1">
                                {item.isVeg !== undefined && (
                                  <span
                                    className={`w-2.5 h-2.5 rounded-xs border flex items-center justify-center ${
                                      item.isVeg ? 'border-emerald-500' : 'border-rose-500'
                                    }`}
                                  >
                                    <span
                                      className={`w-1.5 h-1.5 rounded-full ${
                                        item.isVeg ? 'bg-emerald-500' : 'bg-rose-500'
                                      }`}
                                    />
                                  </span>
                                )}
                                <h5 className="font-semibold text-xs text-white leading-tight">
                                  {item.name}
                                </h5>
                              </div>
                              <p className="text-[10px] text-neutral-400 leading-snug line-clamp-2">
                                {item.description}
                              </p>
                            </div>
                            <span className="font-mono text-xs font-bold text-amber-400 shrink-0">
                              {item.price}
                            </span>
                          </div>
                        ))}
                    </div>
                  )}

                  {/* If client is hotel */}
                  {client.rooms && (
                    <div className="mt-3 space-y-3">
                      {client.rooms.map((room, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-lg bg-neutral-900/80 border border-neutral-800"
                        >
                          <div className="flex justify-between items-start mb-1">
                            <h5 className="font-semibold text-xs text-white">
                              {room.name}
                            </h5>
                            <span className="font-mono text-xs font-bold text-emerald-400">
                              {room.price}
                            </span>
                          </div>
                          <p className="text-[10px] text-neutral-400 mb-2">
                            {room.description}
                          </p>
                          <div className="flex flex-wrap gap-1 mb-2.5">
                            {room.amenities.slice(0, 3).map((a, i) => (
                              <span key={i} className="text-[9px] text-neutral-300 bg-neutral-800 px-1.5 py-0.5 rounded">
                                {a}
                              </span>
                            ))}
                          </div>
                          <button
                            onClick={() => handleActionClick("Room Booking Request", room.name)}
                            type="button"
                            className="w-full py-1.5 text-[11px] font-semibold text-neutral-950 bg-amber-400 rounded hover:bg-amber-300 transition-colors"
                          >
                            Check Availability on WhatsApp
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Google Maps Pin & Directions Section inside simulated page */}
                  <div className="mt-4 p-3 rounded-lg bg-neutral-900/90 border border-neutral-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">
                        Google Maps Location
                      </span>
                      <button
                        onClick={() => handleActionClick("Google Maps Navigation", client.location)}
                        type="button"
                        className="text-[10px] text-sky-400 hover:underline flex items-center gap-1 font-medium"
                      >
                        <span>Open in Maps</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </button>
                    </div>
                    <div className="h-16 rounded bg-neutral-800 flex items-center justify-center text-center p-2 border border-neutral-700/50">
                      <div className="text-[11px] text-neutral-300">
                        📍 Direct Navigation to {client.location.split(',')[0]}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sticky simulated bottom bar */}
                <div className="sticky bottom-0 bg-neutral-900/98 border-t border-neutral-800 p-2.5 flex items-center justify-between text-[11px]">
                  <span className="text-neutral-400 text-[10px]">
                    Powered by <strong className="text-white">ZetrixTech</strong>
                  </span>
                  <button
                    onClick={() => handleActionClick("Instant WhatsApp Table/Room Booking", "Guest Quick Tap")}
                    type="button"
                    className="flex items-center gap-1 px-3 py-1.5 bg-emerald-500 text-neutral-950 font-bold rounded-md text-[11px]"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>WhatsApp Guest Desk</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Desktop View Frame */
            <div className="w-full max-w-5xl rounded-xl border border-neutral-700 bg-neutral-950 shadow-2xl overflow-hidden">
              {/* Browser chrome header */}
              <div className="bg-neutral-900 border-b border-neutral-800 px-4 py-2.5 flex items-center justify-between text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="ml-3 font-mono text-[11px] text-neutral-300 bg-neutral-950 px-3 py-1 rounded border border-neutral-800">
                    https://{client.id}.zetrixtech.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setShowQrModal(true)}
                    type="button"
                    className="flex items-center gap-1 text-neutral-300 hover:text-white"
                  >
                    <QrCode className="w-3.5 h-3.5" />
                    <span>Table QR</span>
                  </button>
                </div>
              </div>

              {/* Desktop Preview Content */}
              <div className="p-6 md:p-10 bg-neutral-950">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-neutral-800">
                  <div className="max-w-xl">
                    <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                      {client.tagline}
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                      {client.heroHeading}
                    </h3>
                    <p className="text-sm text-neutral-300">
                      {client.heroSubhead}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0">
                    <button
                      onClick={() => handleActionClick("WhatsApp Chat", "Instant Table / Room Inquiry")}
                      type="button"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-emerald-950 bg-emerald-400 rounded-lg hover:bg-emerald-300 transition-colors shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Reserve via WhatsApp</span>
                    </button>
                    <button
                      onClick={() => handleActionClick("Direct Phone Call", client.phone)}
                      type="button"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-neutral-200 bg-neutral-800 border border-neutral-700 rounded-lg hover:bg-neutral-700 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{client.phone}</span>
                    </button>
                  </div>
                </div>

                {/* Location and Timing info strip */}
                <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-neutral-300 bg-neutral-900/60 p-4 rounded-lg border border-neutral-800">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{client.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{client.timings}</span>
                  </div>
                </div>

                {/* Menu / Rooms Grid */}
                <div className="mt-8">
                  <h4 className="font-display text-lg font-bold text-white mb-4">
                    {client.type === 'hotel' ? 'Featured Rooms & Tariff' : 'Chef Specials & Recommended Items'}
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {client.menuItems && client.menuItems.map((item, idx) => (
                      <div key={idx} className="p-4 rounded-lg bg-neutral-900 border border-neutral-800 flex justify-between items-start gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            {item.isVeg !== undefined && (
                              <span className={`w-3 h-3 rounded-xs border flex items-center justify-center ${item.isVeg ? 'border-emerald-500' : 'border-rose-500'}`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                              </span>
                            )}
                            <h5 className="font-semibold text-sm text-white">{item.name}</h5>
                          </div>
                          <p className="text-xs text-neutral-400 leading-relaxed">{item.description}</p>
                        </div>
                        <span className="font-mono text-sm font-bold text-amber-400 shrink-0">{item.price}</span>
                      </div>
                    ))}

                    {client.rooms && client.rooms.map((room, idx) => (
                      <div key={idx} className="p-4 rounded-lg bg-neutral-900 border border-neutral-800 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <h5 className="font-bold text-base text-white">{room.name}</h5>
                            <span className="font-mono text-sm font-bold text-emerald-400">{room.price}</span>
                          </div>
                          <p className="text-xs text-neutral-400 mb-3">{room.description}</p>
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {room.amenities.map((a, i) => (
                              <span key={i} className="text-[10px] text-neutral-300 bg-neutral-800 px-2 py-0.5 rounded">
                                {a}
                              </span>
                            ))}
                          </div>
                        </div>
                        <button
                          onClick={() => handleActionClick("Direct Inquiry", room.name)}
                          type="button"
                          className="w-full py-2 text-xs font-semibold text-neutral-950 bg-amber-400 rounded-md hover:bg-amber-300 transition-colors"
                        >
                          Inquire for Dates on WhatsApp
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* QR Code Stand Popup Preview Modal */}
        {showQrModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-neutral-900 border border-neutral-700 rounded-2xl max-w-sm w-full p-6 text-center shadow-2xl relative">
              <div className="w-12 h-12 bg-amber-400/10 text-amber-400 rounded-xl flex items-center justify-center mx-auto mb-4 border border-amber-400/20">
                <QrCode className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-1">
                Tabletop QR Code Included
              </h3>
              <p className="text-xs text-neutral-300 mb-6">
                Print-ready high-resolution QR design for dining tables, billing counters, and hotel key cards.
              </p>

              {/* Simulated QR graphic */}
              <div className="p-5 bg-white rounded-xl inline-block shadow-inner mx-auto mb-4">
                <div className="w-40 h-40 bg-neutral-950 p-2 flex flex-col justify-between">
                  <div className="flex justify-between">
                    <div className="w-8 h-8 border-4 border-white bg-neutral-950" />
                    <div className="w-8 h-8 border-4 border-white bg-neutral-950" />
                  </div>
                  <div className="text-center font-bold text-[9px] text-amber-400 font-mono">
                    SCAN FOR MENU
                  </div>
                  <div className="flex justify-between">
                    <div className="w-8 h-8 border-4 border-white bg-neutral-950" />
                    <div className="w-6 h-6 bg-white/80" />
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-neutral-400 mb-5">
                Guests scan with any smartphone camera · Zero app downloads required · Loads in &lt;1 second
              </div>

              <button
                onClick={() => setShowQrModal(false)}
                type="button"
                className="w-full py-2.5 text-xs font-bold text-neutral-900 bg-neutral-200 hover:bg-white rounded-lg transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
