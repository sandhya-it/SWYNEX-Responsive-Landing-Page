import React, { useState } from 'react';
import { ARTICLES } from '../data/articles';
import { Article } from '../types/travel';
import { ArticleModal } from './ArticleModal';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';

export const TravelJournal: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const [leadArticle, ...supportingArticles] = ARTICLES;

  return (
    <>
      <section id="journal" className="py-20 lg:py-28 bg-[#F8F6F0] border-t border-[#DCD7CD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A68A5B] mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>The Comfy Travels Journal</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#243C32] font-normal leading-tight">
                Notes from Elsewhere
              </h2>
              <p className="text-sm sm:text-base text-[#262824]/80 mt-3 font-light leading-relaxed">
                Essays on quiet places, mindful pacing, culinary heritage, and the transformative psychology of travel.
              </p>
            </div>

            <div className="text-xs text-[#A69B89] uppercase tracking-wider font-mono">
              Volume IV · Curated Stories
            </div>
          </div>

          {/* Magazine Grid Layout: 1 Large Lead Feature + 3 Supporting Stories */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Lead Story (Col Span 7) */}
            <div
              onClick={() => setSelectedArticle(leadArticle)}
              className="lg:col-span-7 group bg-white rounded-sm border border-[#DCD7CD] overflow-hidden flex flex-col justify-between cursor-pointer hover:shadow-xl hover:border-[#A68A5B]/40 transition-all duration-300"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedArticle(leadArticle);
                }
              }}
            >
              <div className="relative h-72 sm:h-96 overflow-hidden">
                <img
                  src={leadArticle.image}
                  alt={leadArticle.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 bg-[#243C32]/90 backdrop-blur-xs text-[#F8F6F0] text-[10px] tracking-wider uppercase px-2.5 py-1 font-semibold rounded-xs">
                  {leadArticle.category}
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 text-xs text-[#D4AF37] tracking-wider uppercase font-medium mb-1">
                    <span>Lead Story</span>
                    <span>·</span>
                    <span className="flex items-center gap-1 text-white/80">
                      <Clock className="w-3 h-3 text-[#A68A5B]" />
                      {leadArticle.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-normal drop-shadow-xs">
                    {leadArticle.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-[#262824]/85 leading-relaxed font-light">
                  {leadArticle.excerpt}
                </p>

                <div className="pt-4 border-t border-[#DCD7CD]/60 flex items-center justify-between">
                  <span className="text-xs text-[#A69B89]">
                    By <strong className="text-[#243C32]">{leadArticle.author}</strong>
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#243C32] group-hover:text-[#A68A5B] transition-colors">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>

            {/* 3 Supporting Stories (Col Span 5) */}
            <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
              {supportingArticles.map((article) => (
                <div
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="group bg-white rounded-sm border border-[#DCD7CD] p-4 sm:p-5 flex gap-4 cursor-pointer hover:shadow-md hover:border-[#A68A5B]/40 transition-all flex-1"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedArticle(article);
                    }
                  }}
                >
                  <div className="relative w-28 sm:w-36 h-28 sm:h-auto shrink-0 rounded-xs overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-[10px] text-[#A69B89] uppercase tracking-wider font-semibold mb-1">
                        <span>{article.category}</span>
                        <span>·</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-serif font-semibold text-[#243C32] group-hover:text-[#A68A5B] transition-colors leading-snug line-clamp-2">
                        {article.title}
                      </h4>
                      <p className="text-[11px] text-[#262824]/75 line-clamp-2 mt-1 leading-relaxed hidden sm:block">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-[11px] text-[#A69B89]">
                      <span>{article.author}</span>
                      <span className="font-semibold uppercase tracking-wider text-[#243C32] flex items-center gap-1 group-hover:text-[#A68A5B]">
                        <span>Read</span>
                        <ArrowRight className="w-2.5 h-2.5" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </>
  );
};
