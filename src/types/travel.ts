export interface Destination {
  id: string;
  name: string;
  country: string;
  region: string;
  category: 'coast' | 'culture' | 'mountain' | 'retreat';
  categoryLabel: string;
  tagline: string;
  description: string;
  illustrativePrice: string;
  image: string;
  bestSeason: string;
  idealDuration: string;
  signatureStay: string;
  highlights: string[];
  coordinates: string;
}

export interface TravelPackage {
  id: string;
  title: string;
  destination: string;
  country: string;
  category: 'Romance' | 'Culture' | 'Mountain' | 'Island' | 'Luxury';
  duration: string;
  durationDays: number;
  illustrativePrice: number;
  image: string;
  summary: string;
  highlights: string[];
  itinerary: { day: string; title: string; description: string }[];
  included: string[];
}

export interface ExperienceCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  popularDestinations: string[];
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
  content: string[];
  pullQuote?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  trip: string;
  year: string;
  rating: number;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone?: string;
  destination: string;
  travelDates: string;
  returnDate?: string;
  travelers: string;
  travelStyle: string;
  budgetRange: string;
  message?: string;
}
