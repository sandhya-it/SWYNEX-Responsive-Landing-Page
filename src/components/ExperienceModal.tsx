import React, { useEffect } from 'react';
import { X, Check, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { ExperienceCategory } from '../types/travel';

interface ExperienceModalProps {
  experience: ExperienceCategory | null;
  onClose: () => void;
  onInquire: (experienceTitle: string) => void;
}

export const ExperienceModal: React.FC<ExperienceModalProps> = ({
  experience,
  onClose,
  onInquire,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (experience) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [experience, onClose]);

  if (!experience) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="experience-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#F8F6F0] rounded-sm border border-[#DCD7CD] shadow-2xl overflow-hidden my-8"
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

        {/* Header Media */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden">
          <img
            src={experience.image}
            alt={experience.title}
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#D4AF37] mb-1 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{experience.subtitle}</span>
            </div>
            <h2 id="experience-modal-title" className="text-3xl sm:text-4xl font-serif font-normal">
              {experience.title}
            </h2>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-sm text-[#262824]/85 leading-relaxed">
            {experience.description}
          </p>

          {/* Core Pillars / Inclusions */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#243C32] font-semibold mb-3">
              Included Standards of Curation
            </h3>
            <ul className="space-y-2.5">
              {experience.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#262824]/85 leading-normal">
                  <span className="w-4 h-4 rounded-full bg-[#243C32]/10 text-[#243C32] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5" />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular destinations */}
          <div className="p-4 bg-white border border-[#DCD7CD] rounded-xs">
            <span className="text-[11px] uppercase tracking-wider text-[#A69B89] font-semibold block mb-2">
              Featured Regional Sanctuaries
            </span>
            <div className="flex flex-wrap gap-2">
              {experience.popularDestinations.map((dest, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-[#F8F6F0] text-[#243C32] text-xs rounded-xs border border-[#DCD7CD]"
                >
                  <MapPin className="w-3 h-3 text-[#A68A5B]" />
                  <span>{dest}</span>
                </span>
              ))}
            </div>
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
              onInquire(experience.title);
            }}
            className="px-6 py-2.5 bg-[#243C32] hover:bg-[#192A22] text-[#F8F6F0] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <span>Plan This Experience</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
