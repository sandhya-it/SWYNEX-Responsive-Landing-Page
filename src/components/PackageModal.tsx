import React, { useEffect } from 'react';
import { X, Clock, MapPin, Check, ArrowRight, Calendar, Info } from 'lucide-react';
import { TravelPackage } from '../types/travel';

interface PackageModalProps {
  pkg: TravelPackage | null;
  onClose: () => void;
  onInquire: (packageName: string) => void;
}

export const PackageModal: React.FC<PackageModalProps> = ({
  pkg,
  onClose,
  onInquire,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (pkg) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [pkg, onClose]);

  if (!pkg) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="package-modal-title"
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

        {/* Hero Media */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] mb-1 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>{pkg.destination}, {pkg.country}</span>
              <span>·</span>
              <span className="bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded-xs text-[10px]">{pkg.category}</span>
            </div>
            <h2 id="package-modal-title" className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal">
              {pkg.title}
            </h2>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Summary & Price Strip */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-white border border-[#DCD7CD] rounded-sm">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#A69B89] block font-semibold">Suggested Duration</span>
              <span className="text-sm font-semibold text-[#243C32] flex items-center gap-1.5 mt-0.5">
                <Clock className="w-4 h-4 text-[#A68A5B]" />
                <span>{pkg.duration}</span>
              </span>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#A69B89] block font-semibold">Illustrative Tariff</span>
              <span className="font-serif text-xl font-bold text-[#243C32]">
                ₹{pkg.illustrativePrice.toLocaleString('en-IN')}{' '}
                <span className="text-xs font-normal text-[#262824]/60">/ person</span>
              </span>
            </div>
          </div>

          <p className="text-sm text-[#262824]/85 leading-relaxed">
            {pkg.summary}
          </p>

          {/* Sample Day-by-Day Itinerary */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#243C32] font-semibold mb-3 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#A68A5B]" />
              <span>Sample Curated Itinerary</span>
            </h3>
            <div className="space-y-3">
              {pkg.itinerary.map((step, idx) => (
                <div key={idx} className="p-3.5 bg-white border border-[#DCD7CD]/80 rounded-xs">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-mono font-semibold uppercase bg-[#243C32]/10 text-[#243C32] px-2 py-0.5 rounded-xs">
                      {step.day}
                    </span>
                    <h4 className="text-xs sm:text-sm font-semibold text-[#243C32]">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#262824]/80 leading-relaxed pl-1">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Curated Inclusions */}
          <div className="p-4 bg-[#F2EFE9] border border-[#DCD7CD] rounded-xs">
            <h4 className="text-xs uppercase tracking-widest text-[#243C32] font-semibold mb-2.5">
              What Is Included In This Journey
            </h4>
            <ul className="space-y-1.5">
              {pkg.included.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-[#262824]/80">
                  <Check className="w-3.5 h-3.5 text-emerald-700 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Prototype Disclosure Notice */}
          <div className="flex items-start gap-2 p-3 bg-white text-[11px] text-[#A69B89] border border-[#DCD7CD] rounded-xs">
            <Info className="w-4 h-4 shrink-0 text-[#A68A5B] mt-0.5" />
            <span>
              All Comfy Travels itineraries are customized to guest dates, preferences, and pace. Pricing shown is illustrative in Indian Rupees (₹) and reflects double-occupancy luxury suite standards.
            </span>
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
              onInquire(pkg.title);
            }}
            className="px-6 py-2.5 bg-[#243C32] hover:bg-[#192A22] text-[#F8F6F0] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <span>Plan This Trip</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
