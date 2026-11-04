import React, { useEffect } from 'react';
import { X, Shield, FileText, Info } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'prototype' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#F8F6F0] rounded-sm border border-[#DCD7CD] shadow-2xl p-6 sm:p-8 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#262824]/60 hover:text-[#262824] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#243C32]">
              <Shield className="w-5 h-5 text-[#A68A5B]" />
              <h2 id="legal-modal-title" className="text-xl font-serif font-semibold">
                Privacy & Discretion Policy
              </h2>
            </div>
            <p className="text-xs text-[#262824]/80 leading-relaxed font-light">
              At Comfy Travels, we value guest confidentiality and personal discretion above all else. Any details shared through our itinerary planning inquiry forms are used strictly to curate your bespoke proposal.
            </p>
            <p className="text-xs text-[#262824]/80 leading-relaxed font-light">
              We never monetize, sell, or disclose traveler information to third-party commercial marketing services. All communications are private and handled directly by our senior curation leads.
            </p>
          </div>
        )}

        {type === 'terms' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#243C32]">
              <FileText className="w-5 h-5 text-[#A68A5B]" />
              <h2 id="legal-modal-title" className="text-xl font-serif font-semibold">
                Terms of Curation & Travel Standards
              </h2>
            </div>
            <p className="text-xs text-[#262824]/80 leading-relaxed font-light">
              All itineraries proposed on this platform are illustrative custom concepts designed to showcase the caliber and pacing of our bespoke travel services with pricing indicated in Indian Rupees (₹).
            </p>
            <p className="text-xs text-[#262824]/80 leading-relaxed font-light">
              Actual booking contracts, confirmed luxury hotel reservations, and private aviation or maritime charters are finalized individually following comprehensive direct consultation with your dedicated specialist.
            </p>
          </div>
        )}

        {type === 'prototype' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#243C32]">
              <Info className="w-5 h-5 text-[#A68A5B]" />
              <h2 id="legal-modal-title" className="text-xl font-serif font-semibold">
                Prototype & Portfolio Disclosure
              </h2>
            </div>
            <p className="text-xs text-[#262824]/80 leading-relaxed font-light">
              Comfy Travels is a luxury travel brand conceptualized and engineered as a high-fidelity frontend showcase.
            </p>
            <p className="text-xs text-[#262824]/80 leading-relaxed font-light">
              All destination photographs, articles, sample packages, and pricing guidelines in Indian Rupees (₹) are curated for illustrative evaluation. All forms provide real client-side validation and demonstration states.
            </p>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-[#DCD7CD] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#243C32] text-white text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#192A22] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
