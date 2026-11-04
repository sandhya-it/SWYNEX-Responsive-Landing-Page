import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TripSearchPlanner } from './components/TripSearchPlanner';
import { PopularDestinations } from './components/PopularDestinations';
import { DestinationModal } from './components/DestinationModal';
import { SignatureExperiences } from './components/SignatureExperiences';
import { ExperienceModal } from './components/ExperienceModal';
import { FeaturedPackages } from './components/FeaturedPackages';
import { PackageModal } from './components/PackageModal';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutUs } from './components/AboutUs';
import { TravelJournal } from './components/TravelJournal';
import { Testimonials } from './components/Testimonials';
import { InquiryForm } from './components/InquiryForm';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { Destination, TravelPackage, ExperienceCategory } from './types/travel';

export default function App() {
  // Modal states
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceCategory | null>(null);

  // Inquiry Form pre-fill states
  const [inquiryDestination, setInquiryDestination] = useState('');
  const [inquiryTravelers, setInquiryTravelers] = useState('2');
  const [inquiryStyle, setInquiryStyle] = useState('All');
  const [inquiryDates, setInquiryDates] = useState('');

  const scrollToInquiry = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Focus the name field
      setTimeout(() => {
        const input = document.getElementById('inquiry-name');
        if (input) input.focus();
      }, 500);
    }
  };

  const scrollToDestinations = () => {
    const el = document.getElementById('destinations');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInquireForDestination = (destName: string) => {
    setInquiryDestination(destName);
    scrollToInquiry();
  };

  const handleInquireForPackage = (pkgTitle: string) => {
    setInquiryDestination(pkgTitle);
    scrollToInquiry();
  };

  const handleInquireForExperience = (expTitle: string) => {
    setInquiryStyle(expTitle);
    scrollToInquiry();
  };

  const handleInquireWithPlan = (details: {
    destination: string;
    departure: string;
    returnDate: string;
    travelers: string;
    style: string;
  }) => {
    setInquiryDestination(details.destination);
    setInquiryTravelers(details.travelers);
    setInquiryStyle(details.style);
    if (details.departure) {
      setInquiryDates(
        details.returnDate
          ? `${details.departure} to ${details.returnDate}`
          : `Starting ${details.departure}`
      );
    }
    scrollToInquiry();
  };

  return (
    <div className="min-h-screen bg-[#F8F6F0] text-[#262824] flex flex-col font-sans selection:bg-[#243C32] selection:text-[#F8F6F0]">
      {/* 1. Header Navigation */}
      <Navbar onPlanTripClick={scrollToInquiry} />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero
          onExploreClick={scrollToDestinations}
          onPlanClick={scrollToInquiry}
        />

        {/* 3. Travel Search and Trip Planner */}
        <TripSearchPlanner
          onSelectPackage={(pkg) => setSelectedPackage(pkg)}
          onInquireWithPlan={handleInquireWithPlan}
        />

        {/* 4. Popular Destinations */}
        <PopularDestinations
          onSelectDestination={(dest) => setSelectedDestination(dest)}
        />

        {/* 5. Signature Travel Experiences */}
        <SignatureExperiences
          onSelectExperience={(exp) => setSelectedExperience(exp)}
        />

        {/* 6. Featured Travel Packages */}
        <FeaturedPackages
          onSelectPackage={(pkg) => setSelectedPackage(pkg)}
          onPlanPackage={handleInquireForPackage}
        />

        {/* 7. Why Choose Us */}
        <WhyChooseUs />

        {/* 8. About Us */}
        <AboutUs onPlanTrip={scrollToInquiry} />

        {/* 9. Travel Inspiration and Journal */}
        <TravelJournal />

        {/* 10. Testimonials */}
        <Testimonials />

        {/* 11. Travel Inquiry Form */}
        <InquiryForm
          initialDestination={inquiryDestination}
          initialTravelers={inquiryTravelers}
          initialStyle={inquiryStyle}
          initialDates={inquiryDates}
        />

        {/* 12. Newsletter */}
        <Newsletter />
      </main>

      {/* 13. Footer */}
      <Footer
        onSelectDestinationLink={handleInquireForDestination}
        onPlanTrip={scrollToInquiry}
      />

      {/* 14. Floating Back to Top Button */}
      <BackToTop />

      {/* Modals */}
      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onInquire={handleInquireForDestination}
      />

      <PackageModal
        pkg={selectedPackage}
        onClose={() => setSelectedPackage(null)}
        onInquire={handleInquireForPackage}
      />

      <ExperienceModal
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
        onInquire={handleInquireForExperience}
      />
    </div>
  );
}
