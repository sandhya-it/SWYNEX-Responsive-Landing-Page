import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Please provide an email address.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please provide a valid email address.');
      return;
    }

    setError('');
    setSubscribed(true);
  };

  return (
    <section className="py-16 bg-[#243C32] text-[#F8F6F0] relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#A68A5B_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-2">
          The Comfy Travels Dispatch
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal tracking-tight mb-3">
          A Little Inspiration for Your Next Journey
        </h2>
        <p className="text-xs sm:text-sm text-[#F8F6F0]/80 max-w-lg mx-auto font-light leading-relaxed mb-8">
          Occasional destination stories, considered recommendations, and ideas for travelling well. Delivered without haste.
        </p>

        {subscribed ? (
          <div className="max-w-md mx-auto p-4 bg-white/10 backdrop-blur-md rounded-sm border border-white/20 text-center animate-fadeIn">
            <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mx-auto mb-1.5" />
            <h3 className="text-sm font-semibold text-white">Thank you for joining our readership</h3>
            <p className="text-[11px] text-[#F8F6F0]/80 mt-1">
              Demo confirmation: In a live system, a welcome letter would be dispatched to <strong>{email}</strong>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-2">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 text-[#A68A5B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  className={`w-full pl-9 pr-4 py-3 bg-white/10 border ${
                    error ? 'border-red-400' : 'border-white/20'
                  } text-white placeholder-white/50 text-xs rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors`}
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-[#F8F6F0] hover:bg-[#DCD7CD] text-[#243C32] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            {error && (
              <p className="text-[11px] text-red-300 flex items-center justify-center gap-1 mt-1">
                <AlertCircle className="w-3 h-3" />
                <span>{error}</span>
              </p>
            )}
            <p className="text-[10px] text-white/50 pt-1">
              Zero spam. Unsubscribe with one click at any time.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
