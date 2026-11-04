import React, { useState } from 'react';
import { Compass, ArrowUp, MapPin, Sparkles, Mail } from 'lucide-react';
import { LegalModal } from './LegalModal';

interface FooterProps {
  onSelectDestinationLink: (destName: string) => void;
  onPlanTrip: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectDestinationLink, onPlanTrip }) => {
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | 'prototype' | null>(null);
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#192A22] text-[#F8F6F0] pt-16 pb-12 border-t border-[#2F4D40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
            {/* Col 1 & 2: Brand & Ethos */}
            <div className="lg:col-span-2 space-y-4">
              <a href="#home" className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-[#A68A5B] text-[#192A22] flex items-center justify-center font-bold">
                  <Compass className="w-4 h-4" />
                </span>
                <span className="font-serif text-2xl tracking-[0.18em] font-medium uppercase text-white">
                  Comfy <span className="text-[#A68A5B] font-light">Travels</span>
                </span>
              </a>

              <p className="text-xs text-white/75 font-light leading-relaxed max-w-sm">
                A modern luxury travel house crafting unhurried, comfortable, bespoke journeys, private escapes, and transformative cultural encounters with transparent Indian Rupee (₹) pricing.
              </p>

              <div className="pt-2">
                <button
                  onClick={onPlanTrip}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#A68A5B] hover:bg-[#C4A778] text-[#192A22] text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors shadow-sm cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Start Planning With Us</span>
                </button>
              </div>
            </div>

            {/* Col 3: Quick Navigation */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#A68A5B] font-semibold mb-4">
                Explore
              </h3>
              <ul className="space-y-2.5 text-xs text-white/75">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">Home</a>
                </li>
                <li>
                  <a href="#planner" className="hover:text-white transition-colors">Trip Planner</a>
                </li>
                <li>
                  <a href="#destinations" className="hover:text-white transition-colors">Popular Destinations</a>
                </li>
                <li>
                  <a href="#experiences" className="hover:text-white transition-colors">Signature Experiences</a>
                </li>
                <li>
                  <a href="#packages" className="hover:text-white transition-colors">Travel Packages</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#journal" className="hover:text-white transition-colors">Travel Journal</a>
                </li>
              </ul>
            </div>

            {/* Col 4: Featured Destinations */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#A68A5B] font-semibold mb-4">
                Destinations
              </h3>
              <ul className="space-y-2.5 text-xs text-white/75">
                {['Amalfi Coast, Italy', 'Kyoto, Japan', 'Swiss Alps, Switzerland', 'Bali, Indonesia', 'Santorini, Greece', 'Private Maldives'].map((d) => (
                  <li key={d}>
                    <button
                      onClick={() => onSelectDestinationLink(d.split(',')[0])}
                      className="hover:text-white transition-colors text-left cursor-pointer flex items-center gap-1.5"
                    >
                      <MapPin className="w-3 h-3 text-[#A68A5B]" />
                      <span>{d}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 5: Discretion & Assurance */}
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-widest text-[#A68A5B] font-semibold mb-4">
                Direct Contact
              </h3>
              <p className="text-xs text-white/75 font-light leading-relaxed">
                Our curation team reviews private inquiries seven days a week.
              </p>
              <div className="text-xs text-white/80 space-y-1">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#A68A5B]" />
                  <span>curation@comfytravels.com</span>
                </div>
              </div>
              <div className="pt-3">
                <button
                  onClick={() => setLegalType('prototype')}
                  className="text-[11px] text-[#A68A5B] hover:text-white underline underline-offset-4 transition-colors"
                >
                  Portfolio Demonstration Notice
                </button>
              </div>
            </div>
          </div>

          {/* Sub-Footer Legal & Back to Top */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/60">
            <div className="flex flex-wrap items-center gap-4">
              <span>© {currentYear} Comfy Travels. All rights reserved.</span>
              <span className="text-white/20">|</span>
              <button
                onClick={() => setLegalType('privacy')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <span className="text-white/20">|</span>
              <button
                onClick={() => setLegalType('terms')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Terms of Curation
              </button>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1 text-white/50">
                Crafted with care for discerning travelers
              </span>
              <button
                onClick={scrollToTop}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Back to top"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      <LegalModal
        type={legalType}
        onClose={() => setLegalType(null)}
      />
    </>
  );
};
