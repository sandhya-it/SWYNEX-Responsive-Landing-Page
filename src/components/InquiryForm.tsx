import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Compass, Sparkles, User, Mail, Phone, Calendar, Users, DollarSign, MessageSquare, Info } from 'lucide-react';
import { InquiryFormData } from '../types/travel';

interface InquiryFormProps {
  initialDestination?: string;
  initialTravelers?: string;
  initialStyle?: string;
  initialDates?: string;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({
  initialDestination = '',
  initialTravelers = '2',
  initialStyle = 'All',
  initialDates = '',
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    destination: initialDestination,
    travelDates: initialDates,
    travelers: initialTravelers,
    travelStyle: initialStyle === 'All' ? 'Bespoke Leisure' : initialStyle,
    budgetRange: 'Flexible',
    message: '',
  });

  // Sync initial props if changed
  useEffect(() => {
    if (initialDestination) {
      setFormData((prev) => ({ ...prev, destination: initialDestination }));
    }
  }, [initialDestination]);

  useEffect(() => {
    if (initialDates) {
      setFormData((prev) => ({ ...prev, travelDates: initialDates }));
    }
  }, [initialDates]);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<InquiryFormData | null>(null);

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.destination.trim()) {
      errs.destination = 'Please mention a destination or region of interest.';
    }

    if (!formData.travelDates.trim()) {
      errs.travelDates = 'Please specify your tentative dates or preferred season.';
    }

    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Honest prototype submission timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 800);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      destination: '',
      travelDates: '',
      travelers: '2',
      travelStyle: 'Bespoke Leisure',
      budgetRange: 'Flexible',
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F8F6F0] border-t border-[#DCD7CD]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A68A5B] mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Begin the Conversation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#243C32] font-normal leading-tight">
            Let’s Plan Something Extraordinary.
          </h2>
          <p className="text-sm sm:text-base text-[#262824]/80 mt-3 font-light leading-relaxed">
            Tell us a little about the journey you envision. Every itinerary is shaped in private consultation with your personal Comfy Travels curator with transparent Rupee (₹) pricing.
          </p>
        </div>

        {/* Confirmation State (Honest Prototype Submission) */}
        {submittedData ? (
          <div className="bg-white p-8 sm:p-12 rounded-sm border border-[#DCD7CD] shadow-lg animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="text-center max-w-lg mx-auto mb-8">
              <h3 className="text-2xl font-serif text-[#243C32] mb-2">
                Inquiry Successfully Recorded
              </h3>
              <p className="text-xs sm:text-sm text-[#262824]/80 leading-relaxed font-light">
                Thank you, <strong className="text-[#243C32]">{submittedData.fullName}</strong>. Your custom journey preferences have been captured in this interactive prototype demonstration.
              </p>
            </div>

            {/* Submitted Summary Details */}
            <div className="p-5 bg-[#F8F6F0] border border-[#DCD7CD] rounded-sm space-y-3 mb-8 text-xs">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#A68A5B]">
                Your Proposed Journey Summary:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#262824]/85">
                <div><span className="text-[#A69B89]">Contact:</span> {submittedData.email} {submittedData.phone ? `(${submittedData.phone})` : ''}</div>
                <div><span className="text-[#A69B89]">Destination:</span> {submittedData.destination}</div>
                <div><span className="text-[#A69B89]">Dates / Timing:</span> {submittedData.travelDates}</div>
                <div><span className="text-[#A69B89]">Party Size:</span> {submittedData.travelers} Travellers</div>
                <div><span className="text-[#A69B89]">Holiday Style:</span> {submittedData.travelStyle}</div>
                <div><span className="text-[#A69B89]">Budget Guideline (₹):</span> {submittedData.budgetRange}</div>
              </div>
              {submittedData.message && (
                <div className="pt-2 border-t border-[#DCD7CD]/60 text-[11px]">
                  <span className="text-[#A69B89]">Special Notes:</span> "{submittedData.message}"
                </div>
              )}
            </div>

            {/* Prototype Notice Box */}
            <div className="flex items-start gap-2.5 p-3.5 bg-amber-50/50 border border-amber-200/60 rounded-xs text-[11px] text-[#A69B89] mb-8">
              <Info className="w-4 h-4 text-[#A68A5B] shrink-0 mt-0.5" />
              <span>
                <strong>Prototype Notice:</strong> This is an interactive frontend demonstration. In a production environment with email/CRM connected, this would dispatch to your private Comfy Travels consultation team within 24 hours.
              </span>
            </div>

            <div className="text-center">
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#243C32] hover:bg-[#192A22] text-[#F8F6F0] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
              >
                Plan Another Journey
              </button>
            </div>
          </div>
        ) : (
          /* Form Card */
          <div className="bg-white p-6 sm:p-10 lg:p-12 rounded-sm border border-[#DCD7CD] shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* 1. Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="inquiry-name" className="block text-xs font-semibold text-[#243C32] uppercase tracking-wider">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#A68A5B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      id="inquiry-name"
                      placeholder="e.g. Eleanor Vance"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
                      }}
                      className={`w-full pl-9 pr-3 py-2.5 bg-[#F8F6F0] border ${
                        errors.fullName ? 'border-red-500' : 'border-[#DCD7CD]'
                      } rounded-sm text-sm text-[#262824] focus:outline-none focus:border-[#243C32] focus:ring-1 focus:ring-[#243C32] transition-colors`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-[11px] text-red-600 flex items-center gap-1 mt-0.5">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* 2. Email Address */}
                <div className="space-y-1.5">
                  <label htmlFor="inquiry-email" className="block text-xs font-semibold text-[#243C32] uppercase tracking-wider">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#A68A5B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="email"
                      id="inquiry-email"
                      placeholder="e.g. eleanor@example.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      className={`w-full pl-9 pr-3 py-2.5 bg-[#F8F6F0] border ${
                        errors.email ? 'border-red-500' : 'border-[#DCD7CD]'
                      } rounded-sm text-sm text-[#262824] focus:outline-none focus:border-[#243C32] focus:ring-1 focus:ring-[#243C32] transition-colors`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-[11px] text-red-600 flex items-center gap-1 mt-0.5">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* 3. Phone (Optional) */}
                <div className="space-y-1.5">
                  <label htmlFor="inquiry-phone" className="block text-xs font-semibold text-[#243C32] uppercase tracking-wider">
                    Phone Number <span className="text-xs font-normal text-[#A69B89]">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#A68A5B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      id="inquiry-phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-[#F8F6F0] border border-[#DCD7CD] rounded-sm text-sm text-[#262824] focus:outline-none focus:border-[#243C32] focus:ring-1 focus:ring-[#243C32] transition-colors"
                    />
                  </div>
                </div>

                {/* 4. Preferred Destination */}
                <div className="space-y-1.5">
                  <label htmlFor="inquiry-dest" className="block text-xs font-semibold text-[#243C32] uppercase tracking-wider">
                    Destination or Region <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Compass className="w-4 h-4 text-[#A68A5B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      id="inquiry-dest"
                      placeholder="e.g. Amalfi Coast, Kyoto, or Swiss Alps"
                      value={formData.destination}
                      onChange={(e) => {
                        setFormData({ ...formData, destination: e.target.value });
                        if (errors.destination) setErrors({ ...errors, destination: '' });
                      }}
                      className={`w-full pl-9 pr-3 py-2.5 bg-[#F8F6F0] border ${
                        errors.destination ? 'border-red-500' : 'border-[#DCD7CD]'
                      } rounded-sm text-sm text-[#262824] focus:outline-none focus:border-[#243C32] focus:ring-1 focus:ring-[#243C32] transition-colors`}
                    />
                  </div>
                  {errors.destination && (
                    <p className="text-[11px] text-red-600 flex items-center gap-1 mt-0.5">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.destination}</span>
                    </p>
                  )}
                </div>

                {/* 5. Travel Dates / Season */}
                <div className="space-y-1.5">
                  <label htmlFor="inquiry-dates" className="block text-xs font-semibold text-[#243C32] uppercase tracking-wider">
                    Tentative Dates or Season <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#A68A5B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      id="inquiry-dates"
                      placeholder="e.g. May 2027 or Autumn Foliage Season"
                      value={formData.travelDates}
                      onChange={(e) => {
                        setFormData({ ...formData, travelDates: e.target.value });
                        if (errors.travelDates) setErrors({ ...errors, travelDates: '' });
                      }}
                      className={`w-full pl-9 pr-3 py-2.5 bg-[#F8F6F0] border ${
                        errors.travelDates ? 'border-red-500' : 'border-[#DCD7CD]'
                      } rounded-sm text-sm text-[#262824] focus:outline-none focus:border-[#243C32] focus:ring-1 focus:ring-[#243C32] transition-colors`}
                    />
                  </div>
                  {errors.travelDates && (
                    <p className="text-[11px] text-red-600 flex items-center gap-1 mt-0.5">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.travelDates}</span>
                    </p>
                  )}
                </div>

                {/* 6. Number of Travellers */}
                <div className="space-y-1.5">
                  <label htmlFor="inquiry-travelers" className="block text-xs font-semibold text-[#243C32] uppercase tracking-wider">
                    Number of Travellers
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-[#A68A5B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      id="inquiry-travelers"
                      value={formData.travelers}
                      onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-[#F8F6F0] border border-[#DCD7CD] rounded-sm text-sm text-[#262824] focus:outline-none focus:border-[#243C32] focus:ring-1 focus:ring-[#243C32] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="1">1 Traveller (Solo Expedition)</option>
                      <option value="2">2 Travellers (Couple / Companion)</option>
                      <option value="3-4">3 to 4 Travellers</option>
                      <option value="5+">5+ Travellers (Multi-gen / Group)</option>
                    </select>
                  </div>
                </div>

                {/* 7. Travel Style */}
                <div className="space-y-1.5">
                  <label htmlFor="inquiry-style" className="block text-xs font-semibold text-[#243C32] uppercase tracking-wider">
                    Preferred Travel Style
                  </label>
                  <div className="relative">
                    <Sparkles className="w-4 h-4 text-[#A68A5B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      id="inquiry-style"
                      value={formData.travelStyle}
                      onChange={(e) => setFormData({ ...formData, travelStyle: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-[#F8F6F0] border border-[#DCD7CD] rounded-sm text-sm text-[#262824] focus:outline-none focus:border-[#243C32] focus:ring-1 focus:ring-[#243C32] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="Relaxed Escapes">Relaxed Escapes & Wellness</option>
                      <option value="Culture & Heritage">Culture & Architectural Heritage</option>
                      <option value="Nature & Adventure">Nature, Alpine & Adventure</option>
                      <option value="Food & Wine">Food, Wine & Culinary Immersion</option>
                      <option value="Romantic Journeys">Romantic Journeys & Honeymoons</option>
                      <option value="Family Travel">Enriching Family Travel</option>
                      <option value="Not Sure Yet">Not Sure Yet · Curate For Us</option>
                    </select>
                  </div>
                </div>

                {/* 8. Estimated Budget Range (in Rupees) */}
                <div className="space-y-1.5">
                  <label htmlFor="inquiry-budget" className="block text-xs font-semibold text-[#243C32] uppercase tracking-wider">
                    Budget Guideline (₹ INR) <span className="text-xs font-normal text-[#A69B89]">(Per Person)</span>
                  </label>
                  <div className="relative">
                    <DollarSign className="w-4 h-4 text-[#A68A5B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      id="inquiry-budget"
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-[#F8F6F0] border border-[#DCD7CD] rounded-sm text-sm text-[#262824] focus:outline-none focus:border-[#243C32] focus:ring-1 focus:ring-[#243C32] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="Flexible">Flexible / Discuss with Specialist</option>
                      <option value="₹2,50,000 – ₹5,00,000">₹2,50,000 – ₹5,00,000 / person</option>
                      <option value="₹5,00,000 – ₹8,00,000">₹5,00,000 – ₹8,00,000 / person</option>
                      <option value="₹8,00,000+">₹8,00,000+ / person (Ultra-Luxury / Buyout)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 9. Additional Notes & Preferences */}
              <div className="space-y-1.5">
                <label htmlFor="inquiry-message" className="block text-xs font-semibold text-[#243C32] uppercase tracking-wider">
                  Additional Preferences, Celebrations, or Requests
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-[#A68A5B] absolute left-3 top-3 pointer-events-none" />
                  <textarea
                    id="inquiry-message"
                    rows={4}
                    placeholder="Share any specific wishes—anniversaries, dietary needs, desire for private yachts, preferred pace, or architectural styles..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 bg-[#F8F6F0] border border-[#DCD7CD] rounded-sm text-sm text-[#262824] focus:outline-none focus:border-[#243C32] focus:ring-1 focus:ring-[#243C32] transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Submit Button & Disclaimer */}
              <div className="pt-4 border-t border-[#DCD7CD] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-[11px] text-[#A69B89] max-w-sm">
                  We respect your privacy. Details are used solely to prepare your bespoke travel proposal in Indian Rupees.
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#243C32] hover:bg-[#192A22] text-[#F8F6F0] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};
