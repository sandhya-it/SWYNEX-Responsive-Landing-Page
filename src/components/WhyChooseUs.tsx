import React from 'react';
import { Compass, Sparkles, ShieldCheck, HeartHandshake, Eye, Award } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Compass,
      title: 'Personalized Itineraries',
      description: 'Every journey is designed from an empty page around your rhythm, interests, preferred aesthetics, and dietary desires.'
    },
    {
      icon: Eye,
      title: 'Carefully Curated Destinations',
      description: 'We prioritize intimate boutique hotels, historic palazzos, and secluded wilderness sanctuaries with character and atmosphere.'
    },
    {
      icon: Sparkles,
      title: 'Thoughtful Travel Planning',
      description: 'Unrushed itineraries with balanced pacing—allowing genuine moments of discovery, spontaneous strolls, and morning quiet.'
    },
    {
      icon: ShieldCheck,
      title: 'Transparent Information',
      description: 'Clear, honest sample pricing guidelines in Indian Rupees (₹) and genuine descriptions of experiences without hidden asterisks.'
    },
    {
      icon: HeartHandshake,
      title: 'Dedicated Private Assistance',
      description: 'From initial consultation through the final return flight, enjoy seamless, discreet support from your dedicated specialist.'
    },
    {
      icon: Award,
      title: 'Memorable, Unhurried Experiences',
      description: 'Private after-hours temple visits, boat charters to secluded coves, and dinners in hidden vineyards that stay with you forever.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F2EFE9] border-t border-[#DCD7CD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A68A5B] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Comfy Travels Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#243C32] font-normal leading-tight">
            Why Discerning Travelers Choose Us
          </h2>
          <p className="text-sm sm:text-base text-[#262824]/80 mt-3 font-light leading-relaxed">
            We believe the quality of your journey is defined not by how many sites you check off, but by how deeply you connect with the places you visit.
          </p>
        </div>

        {/* 6 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-sm border border-[#DCD7CD] hover:border-[#A68A5B]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#243C32]/5 text-[#243C32] flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-[#243C32]" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-[#243C32] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#262824]/75 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#DCD7CD]/40 flex items-center gap-2 text-[11px] font-mono text-[#A69B89]">
                  <span>0{index + 1}</span>
                  <span className="w-6 h-px bg-[#DCD7CD]" />
                  <span className="uppercase tracking-widest text-[9px]">Pillar</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
