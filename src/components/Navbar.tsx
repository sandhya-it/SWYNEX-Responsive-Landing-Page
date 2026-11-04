import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onPlanTripClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onPlanTripClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section spy
      const sections = ['home', 'planner', 'destinations', 'experiences', 'packages', 'about', 'journal', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Destinations', href: '#destinations', id: 'destinations' },
    { name: 'Experiences', href: '#experiences', id: 'experiences' },
    { name: 'Travel Packages', href: '#packages', id: 'packages' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Travel Journal', href: '#journal', id: 'journal' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F6F0]/95 backdrop-blur-md shadow-sm border-b border-[#DCD7CD] py-4 text-[#262824]'
            : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Brand Wordmark (Zone 1) */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#243C32]"
            aria-label="Comfy Travels homepage"
          >
            <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              isScrolled ? 'bg-[#243C32] text-[#F8F6F0]' : 'bg-white/20 backdrop-blur-sm text-white'
            }`}>
              <Compass className="w-4 h-4 transition-transform duration-500 group-hover:rotate-45" />
            </span>
            <span className="font-serif text-xl sm:text-2xl tracking-[0.18em] font-medium uppercase">
              Comfy <span className="text-[#A68A5B] font-light tracking-[0.25em]">Travels</span>
            </span>
          </a>

          {/* Desktop Navigation Links (Zone 2) */}
          <nav
            className="hidden lg:flex items-center gap-7 text-xs tracking-wider uppercase font-medium"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 transition-colors duration-200 whitespace-nowrap shrink-0 hover:text-[#A68A5B] ${
                    isScrolled
                      ? isActive ? 'text-[#243C32] font-semibold' : 'text-[#262824]/80'
                      : isActive ? 'text-white font-semibold' : 'text-white/85'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className={`absolute bottom-0 left-0 w-full h-[1.5px] transition-all ${
                      isScrolled ? 'bg-[#243C32]' : 'bg-[#A68A5B]'
                    }`} />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Primary Action Button (Zone 3) */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onPlanTripClick}
              className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-300 rounded-sm whitespace-nowrap shrink-0 shadow-sm ${
                isScrolled
                  ? 'bg-[#243C32] text-[#F8F6F0] hover:bg-[#192A22] active:translate-y-px'
                  : 'bg-white text-[#243C32] hover:bg-[#F8F6F0] active:translate-y-px'
              }`}
            >
              <span>Plan Your Trip</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors ${
                isScrolled
                  ? 'text-[#262824] hover:bg-[#DCD7CD]/40'
                  : 'text-white hover:bg-white/20'
              }`}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#F8F6F0] text-[#262824] animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Top Bar inside Mobile Menu */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#DCD7CD]">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <span className="w-8 h-8 rounded-full bg-[#243C32] text-[#F8F6F0] flex items-center justify-center">
                <Compass className="w-4 h-4" />
              </span>
              <span className="font-serif text-xl tracking-[0.18em] font-medium uppercase text-[#243C32]">
                Comfy <span className="text-[#A68A5B] font-light">Travels</span>
              </span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#262824] hover:bg-[#DCD7CD]/40 rounded-md transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links list */}
          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
            <nav className="space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-2xl font-serif text-[#243C32] hover:text-[#A68A5B] transition-colors py-2 border-b border-[#DCD7CD]/40"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-8 space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onPlanTripClick();
                }}
                className="w-full py-3.5 px-6 bg-[#243C32] text-[#F8F6F0] text-sm font-semibold tracking-wider uppercase rounded-sm flex items-center justify-center gap-2 shadow-md hover:bg-[#192A22]"
              >
                <span>Plan Your Trip</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-center text-[#A69B89] tracking-wide">
                Bespoke Journeys · Curated Holidays · Exceptional Stays
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
