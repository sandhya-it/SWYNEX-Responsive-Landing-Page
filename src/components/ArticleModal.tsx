import React, { useEffect } from 'react';
import { X, Clock, Calendar, ArrowLeft } from 'lucide-react';
import { Article } from '../types/travel';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#F8F6F0] rounded-sm border border-[#DCD7CD] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close article"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#D4AF37] mb-2 font-medium">
              <span>{article.category}</span>
              <span>·</span>
              <span className="flex items-center gap-1 text-white/80">
                <Clock className="w-3 h-3 text-[#A68A5B]" />
                {article.readTime}
              </span>
            </div>
            <h1 id="article-modal-title" className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal leading-tight">
              {article.title}
            </h1>
          </div>
        </div>

        {/* Article Metadata Bar */}
        <div className="px-6 sm:px-8 py-3.5 bg-white border-b border-[#DCD7CD] flex items-center justify-between text-xs text-[#262824]/70">
          <div className="flex items-center gap-2">
            <span>By <strong className="text-[#243C32]">{article.author}</strong></span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#A68A5B]" />
              {article.date}
            </span>
          </div>
          <span className="text-[11px] uppercase tracking-wider text-[#A68A5B]">Comfy Travels Journal</span>
        </div>

        {/* Article Content */}
        <div className="p-6 sm:p-8 space-y-5 max-h-[55vh] overflow-y-auto">
          <p className="text-base font-serif italic text-[#243C32] leading-relaxed">
            {article.subtitle}
          </p>

          {/* Pull Quote */}
          {article.pullQuote && (
            <div className="my-6 p-5 bg-white border-l-2 border-[#A68A5B] rounded-xs shadow-xs">
              <p className="font-serif italic text-base sm:text-lg text-[#243C32] leading-relaxed">
                "{article.pullQuote}"
              </p>
            </div>
          )}

          {/* Editorial Paragraphs */}
          {article.content.map((p, idx) => (
            <p key={idx} className="text-xs sm:text-sm text-[#262824]/85 leading-relaxed font-light">
              {p}
            </p>
          ))}
        </div>

        {/* Footer */}
        <div className="p-6 bg-white border-t border-[#DCD7CD] flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#243C32] hover:text-[#A68A5B] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Travel Journal</span>
          </button>

          <span className="text-[11px] text-[#A69B89]">
            Comfy Travels Editorial Edition
          </span>
        </div>
      </div>
    </div>
  );
};
