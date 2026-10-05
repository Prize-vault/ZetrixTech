import React from 'react';
import { MessageSquare, Phone, Sparkles } from 'lucide-react';
import { CONTACT_CONFIG, getWhatsAppLink } from '../data/contactConfig';

interface MobileStickyBarProps {
  onOpenAudit: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenAudit }) => {
  const handleWhatsApp = () => {
    const link = getWhatsAppLink(
      "Hi ZetrixTech! I'd like to get a fast one-page website and QR menu for my restaurant/hotel in Gwalior."
    );
    window.open(link, '_blank');
  };

  return (
    <aside 
      aria-label="Quick contact actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800 px-3 py-2 flex items-center justify-between gap-2 shadow-2xl h-[56px]"
    >
      <button
        onClick={handleWhatsApp}
        type="button"
        className="flex-1 flex items-center justify-center gap-1.5 h-10 px-2 text-xs font-bold text-emerald-950 bg-emerald-400 rounded-lg hover:bg-emerald-300 transition-colors whitespace-nowrap active:scale-[0.98]"
      >
        <MessageSquare className="w-3.5 h-3.5 shrink-0" />
        <span className="truncate">WhatsApp</span>
      </button>

      <a
        href={`tel:${CONTACT_CONFIG.phoneRaw}`}
        className="flex-1 flex items-center justify-center gap-1.5 h-10 px-2 text-xs font-semibold text-neutral-200 bg-neutral-900 border border-neutral-700/80 rounded-lg hover:bg-neutral-800 transition-colors whitespace-nowrap active:scale-[0.98]"
      >
        <Phone className="w-3.5 h-3.5 shrink-0 text-amber-400" />
        <span className="truncate">Call Now</span>
      </a>

      <button
        onClick={onOpenAudit}
        type="button"
        className="flex-1 flex items-center justify-center gap-1.5 h-10 px-2 text-xs font-bold text-neutral-950 bg-amber-400 rounded-lg hover:bg-amber-300 transition-colors whitespace-nowrap active:scale-[0.98]"
      >
        <Sparkles className="w-3.5 h-3.5 shrink-0" />
        <span className="truncate">Free Audit</span>
      </button>
    </aside>
  );
};

