import React, { useEffect } from 'react';
import { X, MapPin, Calendar, Clock, Home, Check, ArrowRight } from 'lucide-react';
import { Destination } from '../types/travel';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  onInquire: (destinationName: string) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  onClose,
  onInquire,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (destination) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [destination, onClose]);

  if (!destination) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="destination-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#F8F6F0] rounded-sm border border-[#DCD7CD] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] mb-1 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>{destination.region}</span>
              <span>·</span>
              <span className="font-mono text-[11px] text-white/70">{destination.coordinates}</span>
            </div>
            <h2 id="destination-modal-title" className="text-3xl sm:text-4xl font-serif font-normal">
              {destination.name}, {destination.country}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Tagline & Description */}
          <div>
            <p className="text-base sm:text-lg font-serif italic text-[#A68A5B] mb-3">
              "{destination.tagline}"
            </p>
            <p className="text-sm text-[#262824]/85 leading-relaxed">
              {destination.description}
            </p>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-white rounded-sm border border-[#DCD7CD]/80">
            <div className="flex items-start gap-3">
              <Calendar className="w-4 h-4 text-[#A68A5B] mt-0.5 shrink-0" />
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#A69B89] block font-semibold">Best Season</span>
                <span className="text-xs font-medium text-[#262824]">{destination.bestSeason}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-[#A68A5B] mt-0.5 shrink-0" />
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#A69B89] block font-semibold">Ideal Pacing</span>
                <span className="text-xs font-medium text-[#262824]">{destination.idealDuration}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Home className="w-4 h-4 text-[#A68A5B] mt-0.5 shrink-0" />
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#A69B89] block font-semibold">Estimated Sample</span>
                <span className="text-xs font-medium text-[#243C32]">{destination.illustrativePrice}</span>
              </div>
            </div>
          </div>

          {/* Signature Stay Recommendation */}
          <div className="p-4 bg-[#243C32]/5 border-l-2 border-[#243C32] rounded-xs">
            <span className="text-[11px] uppercase tracking-wider text-[#243C32] font-semibold block mb-1">
              Curated Signature Stay
            </span>
            <p className="text-xs text-[#262824]/90 leading-relaxed font-serif text-base">
              {destination.signatureStay}
            </p>
          </div>

          {/* Key Experiences & Moments */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#243C32] font-semibold mb-3">
              Bespoke Experiences & Private Highlights
            </h3>
            <ul className="space-y-2.5">
              {destination.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs text-[#262824]/85 leading-normal">
                  <span className="w-4 h-4 rounded-full bg-[#243C32]/10 text-[#243C32] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5" />
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-white border-t border-[#DCD7CD] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-[#A69B89]">
            *Prices and availability are illustrative guidelines in Indian Rupees (₹) for private bespoke itineraries.
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 text-xs uppercase tracking-wider text-[#262824]/70 hover:text-[#262824] transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onInquire(destination.name);
              }}
              className="w-1/2 sm:w-auto px-6 py-2.5 bg-[#243C32] hover:bg-[#192A22] text-[#F8F6F0] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Plan Trip Here</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
