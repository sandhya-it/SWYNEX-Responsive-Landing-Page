import React, { useEffect } from 'react';
import { X, Compass, Sparkles, Heart } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPlanTrip: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onPlanTrip,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-modal-title"
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

        {/* Header Hero */}
        <div className="relative h-60 w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
            alt="Comfy Travels philosophy - unhurried coastal horizon"
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#D4AF37] mb-1 font-medium">
              <Compass className="w-3.5 h-3.5" />
              <span>Our Founding Vision</span>
            </div>
            <h2 id="about-modal-title" className="text-3xl sm:text-4xl font-serif font-normal">
              Travel Beautifully. Remember Forever.
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          <div>
            <h3 className="text-lg font-serif text-[#243C32] font-semibold mb-2">
              The Philosophy of Thoughtful Travel
            </h3>
            <p className="text-sm text-[#262824]/85 leading-relaxed font-light">
              Comfy Travels was conceived from a simple conviction: modern travel had become too hurried, too standardized, and too focused on digital validation rather than genuine personal comfort and deep cultural connection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-white border border-[#DCD7CD] rounded-sm">
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#243C32] mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#A68A5B]" />
                <span>The Art of Selection</span>
              </h4>
              <p className="text-xs text-[#262824]/75 leading-relaxed">
                We reject the idea that more is better. We work with an intimate collection of vetted boutique properties, historic estates, and conservation sanctuaries where hospitality is an art form.
              </p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#243C32] mb-1 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-[#A68A5B]" />
                <span>Respect for Culture & Land</span>
              </h4>
              <p className="text-xs text-[#262824]/75 leading-relaxed">
                Every journey honors local traditions, supports heritage crafts, and partners directly with conservation naturalists and resident communities.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest text-[#243C32] font-semibold mb-2">
              Our Promise to You
            </h3>
            <p className="text-xs sm:text-sm text-[#262824]/85 leading-relaxed font-light">
              When you travel with Comfy Travels, you are never just a booking reference. You receive honest counsel, transparent Rupee pricing guidelines, meticulous logistics, and the quiet assurance that your time off is treated with the reverence it deserves.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-white border-t border-[#DCD7CD] flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs uppercase tracking-wider text-[#262824]/70 hover:text-[#262824]"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onPlanTrip();
            }}
            className="px-6 py-2.5 bg-[#243C32] hover:bg-[#192A22] text-[#F8F6F0] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all"
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
};
