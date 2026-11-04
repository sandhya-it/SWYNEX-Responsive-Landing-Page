import React, { useState } from 'react';
import { Compass, ArrowRight } from 'lucide-react';
import { AboutModal } from './AboutModal';

interface AboutUsProps {
  onPlanTrip: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onPlanTrip }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="about" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Storytelling Diptych */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Large Image */}
              <div className="relative h-80 sm:h-[440px] rounded-sm overflow-hidden border border-[#DCD7CD] shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80"
                  alt="Historic architectural courtyard in Marrakech"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Offset Accent Card */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-60 sm:w-64 bg-white p-5 rounded-sm border border-[#DCD7CD] shadow-xl">
                <span className="text-[10px] uppercase tracking-widest text-[#A68A5B] font-semibold block mb-1">
                  Our Mission
                </span>
                <p className="text-xs text-[#243C32] font-serif italic leading-relaxed">
                  "To turn travel from an exhausting sprint into a deeply comfortable, contemplative art form."
                </p>
                <div className="mt-3 pt-2 border-t border-[#DCD7CD]/60 text-[10px] text-[#A69B89] uppercase tracking-wider">
                  Comfy Travels Principles
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Prose */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A68A5B]">
              <Compass className="w-3.5 h-3.5" />
              <span>About Comfy Travels</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#243C32] font-normal leading-tight">
              Travel, Considered.
            </h2>

            <p className="text-sm sm:text-base text-[#262824]/85 leading-relaxed font-light">
              We founded Comfy Travels for those who believe that travel should be quiet, personal, profoundly comfortable, and restorative. Not simply where you go, but how relaxed and inspired you feel when you arrive.
            </p>

            <p className="text-xs sm:text-sm text-[#262824]/75 leading-relaxed font-light">
              Our travel specialists have spent years establishing intimate relationships with family-run vineyard estates, boutique mountain chalets, and heritage riads. We don’t assemble rushed tour packages. Instead, we listen to what inspires you, provide transparent Rupee pricing, and sculpt journeys that allow time for genuine discovery.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#DCD7CD]">
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-normal text-[#243C32]">100%</span>
                <span className="text-[11px] text-[#A69B89] uppercase tracking-wider">Bespoke Pacing</span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-normal text-[#243C32]">24/7</span>
                <span className="text-[11px] text-[#A69B89] uppercase tracking-wider">Dedicated Lead</span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-normal text-[#243C32]">0</span>
                <span className="text-[11px] text-[#A69B89] uppercase tracking-wider">Rigid Schedules</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#243C32] hover:bg-[#192A22] text-[#F8F6F0] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer shadow-sm"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <AboutModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onPlanTrip={onPlanTrip}
      />
    </>
  );
};
