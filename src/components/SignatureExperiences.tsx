import React from 'react';
import { EXPERIENCES } from '../data/experiences';
import { ExperienceCategory } from '../types/travel';
import { Sparkles, ArrowRight } from 'lucide-react';

interface SignatureExperiencesProps {
  onSelectExperience: (experience: ExperienceCategory) => void;
}

export const SignatureExperiences: React.FC<SignatureExperiencesProps> = ({
  onSelectExperience,
}) => {
  const [featuredExperience, ...otherExperiences] = EXPERIENCES;

  return (
    <section id="experiences" className="py-20 lg:py-28 bg-[#F2EFE9] border-y border-[#DCD7CD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A68A5B] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Expressions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#243C32] font-normal leading-tight">
            Signature Travel Experiences
          </h2>
          <p className="text-sm sm:text-base text-[#262824]/80 mt-3 font-light leading-relaxed">
            Every journey we craft begins with how you wish to feel—from restorative coastal stillness to exhilarating high alpine expeditions.
          </p>
        </div>

        {/* Asymmetric Grid: 1 Marquee Feature Card + 5 Supporting Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Large Marquee Card (Col span 5 on desktop) */}
          <div
            onClick={() => onSelectExperience(featuredExperience)}
            className="lg:col-span-5 group relative bg-white rounded-sm border border-[#DCD7CD] overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 flex flex-col"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectExperience(featuredExperience);
              }
            }}
          >
            <div className="relative h-80 sm:h-96 lg:h-full min-h-[300px] overflow-hidden">
              <img
                src={featuredExperience.image}
                alt={featuredExperience.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-3">
                <span className="text-[10px] tracking-widest uppercase font-semibold text-[#D4AF37] block">
                  Marquee Experience
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-normal">
                  {featuredExperience.title}
                </h3>
                <p className="text-xs text-white/85 line-clamp-3 leading-relaxed">
                  {featuredExperience.description}
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] group-hover:text-white transition-colors">
                    <span>Explore Inclusions</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 5 Supporting Cards (Col span 7 on desktop, 2-column or 3-column subgrid) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherExperiences.map((exp) => (
              <div
                key={exp.id}
                onClick={() => onSelectExperience(exp)}
                className="group bg-white rounded-sm border border-[#DCD7CD] overflow-hidden cursor-pointer hover:shadow-md hover:border-[#A68A5B]/40 transition-all flex flex-col justify-between"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectExperience(exp);
                  }
                }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-medium block">
                      {exp.subtitle}
                    </span>
                    <h3 className="text-lg font-serif font-normal">
                      {exp.title}
                    </h3>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <p className="text-xs text-[#262824]/80 line-clamp-2 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="pt-2 border-t border-[#DCD7CD]/60 flex items-center justify-between">
                    <span className="text-[10px] text-[#A69B89] uppercase tracking-wider font-medium">
                      Bespoke Itinerary
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#243C32] group-hover:text-[#A68A5B] transition-colors">
                      <span>Details</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
