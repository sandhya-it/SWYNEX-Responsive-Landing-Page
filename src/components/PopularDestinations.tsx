import React, { useState } from 'react';
import { DESTINATIONS } from '../data/destinations';
import { Destination } from '../types/travel';
import { Compass, ArrowRight, MapPin } from 'lucide-react';

interface PopularDestinationsProps {
  onSelectDestination: (destination: Destination) => void;
}

export const PopularDestinations: React.FC<PopularDestinationsProps> = ({
  onSelectDestination,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'coast' | 'culture' | 'mountain' | 'retreat'>('all');

  const filterTabs = [
    { id: 'all', label: 'All Destinations' },
    { id: 'coast', label: 'Coast & Islands' },
    { id: 'culture', label: 'Culture & Heritage' },
    { id: 'mountain', label: 'Nature & Mountain' },
    { id: 'retreat', label: 'Slow Retreats' },
  ] as const;

  const filteredDestinations = activeFilter === 'all'
    ? DESTINATIONS
    : DESTINATIONS.filter((d) => d.category === activeFilter);

  return (
    <section id="destinations" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A68A5B] mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Curated Portfolios</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#243C32] font-normal leading-tight">
            Places worth travelling for.
          </h2>
          <p className="text-sm sm:text-base text-[#262824]/80 mt-3 font-light leading-relaxed">
            From secluded Mediterranean hideaways to ancient temple gardens and high alpine valleys, discover places that reward an unhurried, closer look.
          </p>
        </div>

        {/* Filter Segmented Controls */}
        <div className="flex items-center gap-1 p-1 bg-white border border-[#DCD7CD] rounded-sm overflow-x-auto max-w-full shrink-0">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-medium tracking-wide uppercase rounded-xs transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#243C32] text-[#F8F6F0] shadow-xs'
                    : 'text-[#262824]/70 hover:text-[#262824]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Destinations Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredDestinations.map((dest, index) => {
          // Asymmetric column span for visual rhythm on desktop
          const isMarquee = index === 0 || index === 5;
          return (
            <div
              key={dest.id}
              onClick={() => onSelectDestination(dest)}
              className={`group bg-white rounded-sm border border-[#DCD7CD] overflow-hidden flex flex-col justify-between cursor-pointer hover:shadow-xl hover:border-[#A68A5B]/40 transition-all duration-300 ${
                isMarquee ? 'lg:col-span-2' : 'lg:col-span-1'
              }`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectDestination(dest);
                }
              }}
              aria-label={`View details for ${dest.name}, ${dest.country}`}
            >
              {/* Image Frame */}
              <div className={`relative overflow-hidden ${isMarquee ? 'h-64 sm:h-72' : 'h-60'}`}>
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                {/* Subtle scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3 bg-[#F8F6F0]/90 backdrop-blur-xs text-[#243C32] text-[10px] tracking-wider uppercase px-2.5 py-1 font-semibold rounded-xs">
                  {dest.categoryLabel}
                </div>

                {/* Inset Title Over Image */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#D4AF37] tracking-wider uppercase font-medium mb-0.5">
                    <MapPin className="w-3 h-3" />
                    <span>{dest.country}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-normal drop-shadow-xs">
                    {dest.name}
                  </h3>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-[#262824]/80 leading-relaxed line-clamp-3">
                  {dest.tagline}
                </p>

                <div className="pt-3 border-t border-[#DCD7CD]/60 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#A69B89] uppercase tracking-wider block font-medium">Illustrative Guide</span>
                    <span className="font-serif text-sm font-semibold text-[#243C32]">
                      {dest.illustrativePrice}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#243C32] group-hover:text-[#A68A5B] transition-colors">
                    <span>Discover</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
