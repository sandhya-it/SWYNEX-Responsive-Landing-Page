import React, { useState } from 'react';
import { Calendar, Users, MapPin, Sparkles, Search, CheckCircle2, AlertCircle, ArrowRight, Info } from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';
import { TRAVEL_PACKAGES } from '../data/packages';
import { TravelPackage } from '../types/travel';

interface TripSearchPlannerProps {
  onSelectPackage: (pkg: TravelPackage) => void;
  onInquireWithPlan: (details: { destination: string; departure: string; returnDate: string; travelers: string; style: string }) => void;
}

export const TripSearchPlanner: React.FC<TripSearchPlannerProps> = ({
  onSelectPackage,
  onInquireWithPlan,
}) => {
  const [selectedDestination, setSelectedDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [travelers, setTravelers] = useState('2');
  const [travelStyle, setTravelStyle] = useState('All');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [searchResults, setSearchResults] = useState<TravelPackage[] | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  // Today's date in YYYY-MM-DD for min date attribute
  const today = new Date().toISOString().split('T')[0];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!departureDate) {
      newErrors.departureDate = 'Please select a departure date.';
    }

    if (returnDate && departureDate && returnDate < departureDate) {
      newErrors.returnDate = 'Return date cannot be earlier than departure date.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setHasSearched(true);

    // Filter matching sample packages
    let matches = TRAVEL_PACKAGES.filter((pkg) => {
      const matchDest = !selectedDestination || pkg.destination.toLowerCase().includes(selectedDestination.toLowerCase()) || pkg.country.toLowerCase().includes(selectedDestination.toLowerCase());
      const matchStyle = travelStyle === 'All' || pkg.category.toLowerCase() === travelStyle.toLowerCase();
      return matchDest && matchStyle;
    });

    // If too specific and no exact match, provide nearest recommended packages
    if (matches.length === 0) {
      matches = TRAVEL_PACKAGES.slice(0, 3);
    }

    setSearchResults(matches);
  };

  const handleReset = () => {
    setSelectedDestination('');
    setDepartureDate('');
    setReturnDate('');
    setTravelers('2');
    setTravelStyle('All');
    setErrors({});
    setSearchResults(null);
    setHasSearched(false);
  };

  return (
    <section id="planner" className="relative -mt-10 sm:-mt-14 z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="bg-white rounded-lg shadow-xl border border-[#DCD7CD] p-6 sm:p-8 lg:p-10 transition-all">
        {/* Header & Context */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-[#DCD7CD]/60">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#A68A5B] mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored Curation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#243C32] font-normal">
              Plan Your Bespoke Escape
            </h2>
            <p className="text-sm text-[#262824]/70 mt-1 max-w-xl">
              Select your travel window, party size, and preferred style to explore curated sample itineraries.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#A69B89] bg-[#F8F6F0] px-3.5 py-1.5 rounded-sm border border-[#DCD7CD]">
            <Info className="w-3.5 h-3.5 shrink-0 text-[#243C32]" />
            <span>Illustrative itinerary curation · All tariffs in INR (₹)</span>
          </div>
        </div>

        {/* Search & Planner Form */}
        <form onSubmit={handleSearch} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* 1. Destination */}
            <div className="space-y-1.5">
              <label htmlFor="destination-select" className="block text-xs font-semibold text-[#243C32] uppercase tracking-wider">
                Destination
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-[#A68A5B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  id="destination-select"
                  value={selectedDestination}
                  onChange={(e) => setSelectedDestination(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-[#F8F6F0] border border-[#DCD7CD] rounded-sm text-sm text-[#262824] focus:outline-none focus:border-[#243C32] focus:ring-1 focus:ring-[#243C32] transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Any Destination</option>
                  {DESTINATIONS.map((dest) => (
                    <option key={dest.id} value={dest.name}>
                      {dest.name}, {dest.country}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* 2. Departure Date */}
            <div className="space-y-1.5">
              <label htmlFor="departure-date" className="block text-xs font-semibold text-[#243C32] uppercase tracking-wider">
                Departure Date
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-[#A68A5B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="date"
                  id="departure-date"
                  min={today}
                  value={departureDate}
                  onChange={(e) => {
                    setDepartureDate(e.target.value);
                    if (errors.departureDate) setErrors((prev) => ({ ...prev, departureDate: '' }));
                  }}
                  className={`w-full pl-9 pr-3 py-2.5 bg-[#F8F6F0] border ${
                    errors.departureDate ? 'border-red-500 bg-red-50/30' : 'border-[#DCD7CD]'
                  } rounded-sm text-sm text-[#262824] focus:outline-none focus:border-[#243C32] focus:ring-1 focus:ring-[#243C32] transition-colors`}
                />
              </div>
              {errors.departureDate && (
                <p className="text-[11px] text-red-600 flex items-center gap-1 mt-0.5">
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  <span>{errors.departureDate}</span>
                </p>
              )}
            </div>

            {/* 3. Return Date */}
            <div className="space-y-1.5">
              <label htmlFor="return-date" className="block text-xs font-semibold text-[#243C32] uppercase tracking-wider">
                Return Date
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-[#A68A5B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="date"
                  id="return-date"
                  min={departureDate || today}
                  value={returnDate}
                  onChange={(e) => {
                    setReturnDate(e.target.value);
                    if (errors.returnDate) setErrors((prev) => ({ ...prev, returnDate: '' }));
                  }}
                  className={`w-full pl-9 pr-3 py-2.5 bg-[#F8F6F0] border ${
                    errors.returnDate ? 'border-red-500 bg-red-50/30' : 'border-[#DCD7CD]'
                  } rounded-sm text-sm text-[#262824] focus:outline-none focus:border-[#243C32] focus:ring-1 focus:ring-[#243C32] transition-colors`}
                />
              </div>
              {errors.returnDate && (
                <p className="text-[11px] text-red-600 flex items-center gap-1 mt-0.5">
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  <span>{errors.returnDate}</span>
                </p>
              )}
            </div>

            {/* 4. Number of Travellers */}
            <div className="space-y-1.5">
              <label htmlFor="travelers-select" className="block text-xs font-semibold text-[#243C32] uppercase tracking-wider">
                Travellers
              </label>
              <div className="relative">
                <Users className="w-4 h-4 text-[#A68A5B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  id="travelers-select"
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-[#F8F6F0] border border-[#DCD7CD] rounded-sm text-sm text-[#262824] focus:outline-none focus:border-[#243C32] focus:ring-1 focus:ring-[#243C32] transition-colors appearance-none cursor-pointer"
                >
                  <option value="1">1 Solo Traveller</option>
                  <option value="2">2 Travellers (Couple)</option>
                  <option value="3-4">3 to 4 Travellers</option>
                  <option value="5+">5+ Travellers (Family / Group)</option>
                </select>
              </div>
            </div>

            {/* 5. Travel Style */}
            <div className="space-y-1.5">
              <label htmlFor="style-select" className="block text-xs font-semibold text-[#243C32] uppercase tracking-wider">
                Holiday Style
              </label>
              <div className="relative">
                <Sparkles className="w-4 h-4 text-[#A68A5B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  id="style-select"
                  value={travelStyle}
                  onChange={(e) => setTravelStyle(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-[#F8F6F0] border border-[#DCD7CD] rounded-sm text-sm text-[#262824] focus:outline-none focus:border-[#243C32] focus:ring-1 focus:ring-[#243C32] transition-colors appearance-none cursor-pointer"
                >
                  <option value="All">All Travel Styles</option>
                  <option value="Romance">Honeymoon & Romance</option>
                  <option value="Culture">Culture & Heritage</option>
                  <option value="Mountain">Mountain & Nature</option>
                  <option value="Island">Island & Beach</option>
                  <option value="Luxury">Ultra Luxury & Buyouts</option>
                </select>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="text-xs text-[#262824]/60">
              *Dates and requirements will be forwarded to your personal Comfy Travels itinerary specialist upon inquiry.
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {hasSearched && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2.5 text-xs text-[#262824]/70 hover:text-[#262824] transition-colors cursor-pointer"
                >
                  Reset
                </button>
              )}
              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3 bg-[#243C32] text-[#F8F6F0] text-xs font-semibold tracking-wider uppercase rounded-sm hover:bg-[#192A22] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:translate-y-px"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Search Trips</span>
              </button>
            </div>
          </div>
        </form>

        {/* Search Results Display */}
        {hasSearched && searchResults && (
          <div className="mt-8 pt-8 border-t border-[#DCD7CD] animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div>
                <h3 className="text-lg font-serif text-[#243C32] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Found {searchResults.length} Curated Matches for Your Preferences</span>
                </h3>
                <p className="text-xs text-[#262824]/70 mt-0.5">
                  Illustrative sample packages based on your dates ({departureDate || 'Flexible'} {returnDate ? `to ${returnDate}` : ''}) and {travelers} travellers.
                </p>
              </div>

              <button
                onClick={() =>
                  onInquireWithPlan({
                    destination: selectedDestination || 'Open to suggestions',
                    departure: departureDate,
                    returnDate,
                    travelers,
                    style: travelStyle,
                  })
                }
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#243C32] hover:text-[#A68A5B] transition-colors underline underline-offset-4"
              >
                <span>Request Custom Quote with These Dates</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {searchResults.map((pkg) => (
                <div
                  key={pkg.id}
                  className="group bg-[#F8F6F0] border border-[#DCD7CD] rounded-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#243C32]/90 backdrop-blur-xs text-[#F8F6F0] text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-xs">
                      {pkg.category}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-mono px-2 py-0.5 rounded-xs">
                      {pkg.duration}
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] text-[#A69B89] uppercase tracking-wider font-medium mb-1">
                        {pkg.destination}, {pkg.country}
                      </div>
                      <h4 className="text-base font-serif text-[#243C32] font-semibold leading-snug mb-2">
                        {pkg.title}
                      </h4>
                      <p className="text-xs text-[#262824]/80 line-clamp-2 leading-relaxed mb-4">
                        {pkg.summary}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#DCD7CD]/80 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#A69B89] block">Sample Price</span>
                        <span className="font-serif text-sm font-bold text-[#243C32]">
                          ₹{pkg.illustrativePrice.toLocaleString('en-IN')}{' '}
                          <span className="text-[11px] font-normal text-[#262824]/60">/ person</span>
                        </span>
                      </div>

                      <button
                        onClick={() => onSelectPackage(pkg)}
                        className="text-xs font-semibold uppercase tracking-wider text-[#243C32] hover:text-[#A68A5B] flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
