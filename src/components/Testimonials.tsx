import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/testimonials';
import { Quote, ChevronLeft, ChevronRight, Star, Info } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-[#F2EFE9] border-t border-[#DCD7CD]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#A68A5B] mb-2">
            <Quote className="w-3.5 h-3.5" />
            <span>Traveler Perspectives</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#243C32] font-normal leading-tight">
            Memories That Endure
          </h2>
          <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-[#A69B89] bg-white px-3 py-1 rounded-full border border-[#DCD7CD]">
            <Info className="w-3 h-3 text-[#A68A5B]" />
            <span>Sample guest reflections · Illustrative design representation</span>
          </div>
        </div>

        {/* Carousel Card */}
        <div className="relative bg-white p-8 sm:p-12 lg:p-14 rounded-sm border border-[#DCD7CD] shadow-lg">
          {/* Subtle Quote Symbol */}
          <div className="absolute top-6 right-8 text-[#DCD7CD]/60 font-serif text-8xl leading-none select-none pointer-events-none">
            “
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            {/* Stars */}
            <div className="flex items-center justify-center gap-1 text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
              ))}
            </div>

            {/* Quote Body */}
            <blockquote className="text-lg sm:text-2xl font-serif text-[#243C32] italic font-normal leading-relaxed text-balance">
              "{current.quote}"
            </blockquote>

            {/* Author info */}
            <div className="pt-4 border-t border-[#DCD7CD]/60">
              <div className="font-serif text-base font-semibold text-[#243C32]">
                {current.author}
              </div>
              <div className="text-xs text-[#A69B89] mt-0.5">
                {current.location}
              </div>
              <div className="text-xs text-[#A68A5B] font-medium mt-1">
                {current.trip}
              </div>
            </div>
          </div>

          {/* Prev / Next Navigation Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#DCD7CD]/40">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-[#DCD7CD] hover:border-[#243C32] hover:bg-[#F8F6F0] text-[#243C32] transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === i ? 'w-6 bg-[#243C32]' : 'bg-[#DCD7CD] hover:bg-[#A69B89]'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-full border border-[#DCD7CD] hover:border-[#243C32] hover:bg-[#F8F6F0] text-[#243C32] transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
