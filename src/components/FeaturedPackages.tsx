import React, { useState } from 'react';
import { TRAVEL_PACKAGES } from '../data/packages';
import { TravelPackage } from '../types/travel';
import { Clock, MapPin, Sparkles, ArrowRight, Check } from 'lucide-react';

interface FeaturedPackagesProps {
  onSelectPackage: (pkg: TravelPackage) => void;
  onPlanPackage: (packageName: string) => void;
}

export const FeaturedPackages: React.FC<FeaturedPackagesProps> = ({
  onSelectPackage,
  onPlanPackage,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Romance', 'Culture', 'Mountain', 'Island', 'Luxury'];

  const filteredPackages = activeCategory === 'All'
    ? TRAVEL_PACKAGES
    : TRAVEL_PACKAGES.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="packages" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A68A5B] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Itineraries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#243C32] font-normal leading-tight">
            Featured Travel Packages
          </h2>
          <p className="text-sm sm:text-base text-[#262824]/80 mt-3 font-light leading-relaxed">
            Thoughtfully structured sample itineraries that balance private guided immersion with generous time to unwind at your own pace.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1 p-1 bg-white border border-[#DCD7CD] rounded-sm overflow-x-auto max-w-full shrink-0">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium tracking-wide uppercase rounded-xs transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#243C32] text-[#F8F6F0] shadow-xs'
                    : 'text-[#262824]/70 hover:text-[#262824]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPackages.map((pkg) => (
          <div
            key={pkg.id}
            className="group bg-white rounded-sm border border-[#DCD7CD] overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-[#A68A5B]/50 transition-all duration-300"
          >
            {/* Image Container */}
            <div className="relative h-60 overflow-hidden">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute top-3 left-3 bg-[#243C32]/90 backdrop-blur-xs text-[#F8F6F0] text-[10px] tracking-wider uppercase px-2.5 py-1 font-semibold rounded-xs">
                {pkg.category}
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white flex items-end justify-between">
                <div>
                  <div className="flex items-center gap-1 text-[11px] text-[#D4AF37] tracking-wider uppercase font-medium">
                    <MapPin className="w-3 h-3" />
                    <span>{pkg.destination}, {pkg.country}</span>
                  </div>
                  <h3 className="text-xl font-serif font-normal drop-shadow-xs">
                    {pkg.title}
                  </h3>
                </div>
                <div className="flex items-center gap-1 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-xs text-[11px] font-mono text-white/90 shrink-0">
                  <Clock className="w-3 h-3 text-[#A68A5B]" />
                  <span>{pkg.durationDays}D / {pkg.durationDays - 1}N</span>
                </div>
              </div>
            </div>

            {/* Package Details */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <p className="text-xs text-[#262824]/80 leading-relaxed mb-4">
                  {pkg.summary}
                </p>

                {/* Highlights list */}
                <div className="space-y-1.5 pt-2 border-t border-[#DCD7CD]/60">
                  <span className="text-[10px] uppercase tracking-wider text-[#A69B89] font-semibold block mb-1">
                    Signature Highlights
                  </span>
                  {pkg.highlights.slice(0, 2).map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-[#262824]/85 leading-tight">
                      <Check className="w-3 h-3 text-emerald-700 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Actions Strip */}
              <div className="pt-4 border-t border-[#DCD7CD] flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#A69B89] uppercase tracking-wider block font-medium">Sample Tariff</span>
                    <span className="font-serif text-base font-bold text-[#243C32]">
                      ₹{pkg.illustrativePrice.toLocaleString('en-IN')}{' '}
                      <span className="text-[11px] font-normal text-[#262824]/60">/ person</span>
                    </span>
                  </div>
                  <span className="text-[10px] text-[#A69B89] bg-[#F8F6F0] px-2 py-0.5 rounded-xs border border-[#DCD7CD]">
                    Illustrative quote
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className="w-full py-2.5 px-3 bg-[#F8F6F0] hover:bg-[#DCD7CD]/70 text-[#243C32] text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>View Itinerary</span>
                  </button>

                  <button
                    onClick={() => onPlanPackage(pkg.title)}
                    className="w-full py-2.5 px-3 bg-[#243C32] hover:bg-[#192A22] text-[#F8F6F0] text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-1 cursor-pointer shadow-xs"
                  >
                    <span>Plan Trip</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
