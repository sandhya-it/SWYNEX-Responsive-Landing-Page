import React from 'react';
import { ArrowDown, Compass, MapPin, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onPlanClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onPlanClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Dark Vignette Overlay for Crisp Contrast */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2000&q=85"
          alt="Breathtaking panoramic view of the Amalfi Coast cliffside villas and Mediterranean Sea"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
          loading="eager"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Styled graceful fallback if network image fails
            const target = e.currentTarget;
            target.style.display = 'none';
          }}
        />
        {/* Multi-stage luxury gradient scrim: dark on top for nav, soft center, rich dark base */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-[#243C32]/25 mix-blend-multiply pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20 flex flex-col items-center">
        {/* Eyebrow kicker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F8F6F0] text-xs uppercase tracking-[0.25em] font-medium mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Curated Journeys · Bespoke Escapes</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#F8F6F0] font-normal leading-[1.08] tracking-tight max-w-4xl mb-6 text-balance drop-shadow-md">
          The World Is Waiting for You.
        </h1>

        {/* Supporting description */}
        <p className="text-base sm:text-lg md:text-xl text-[#F8F6F0]/90 max-w-2xl font-light leading-relaxed mb-10 text-pretty">
          Discover extraordinary destinations, private sanctuaries, and thoughtfully curated holiday experiences designed around the way you want to see the world.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#F8F6F0] text-[#243C32] text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 rounded-sm hover:bg-[#DCD7CD] hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#A68A5B]" />
            <span>Explore Destinations</span>
          </button>

          <button
            onClick={onPlanClick}
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/60 text-[#F8F6F0] text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 rounded-sm hover:bg-white/15 hover:border-white active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer backdrop-blur-xs"
          >
            <span>Plan Your Journey</span>
          </button>
        </div>

        {/* Featured Destination Badge & Location Credit */}
        <div className="mt-14 sm:mt-16 flex items-center gap-2 text-xs text-white/75 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
          <MapPin className="w-3.5 h-3.5 text-[#A68A5B]" />
          <span>Featured: Positano & Amalfi Coast · Italy</span>
          <span className="hidden sm:inline text-white/40">|</span>
          <span className="hidden sm:inline font-mono text-[11px] text-white/60">40°37'N 14°29'E</span>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <a
        href="#planner"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/70 hover:text-white transition-colors cursor-pointer group"
        aria-label="Scroll down to travel search and planner"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Scroll to Discover</span>
        <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-[#A68A5B]" />
      </a>
    </section>
  );
};
