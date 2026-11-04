import { ExperienceCategory } from '../types/travel';

export const EXPERIENCES: ExperienceCategory[] = [
  {
    id: 'luxury-escapes',
    title: 'Luxury Escapes',
    subtitle: 'Private Sanctuaries & Discerning Comfort',
    description: 'Secluded villas, private islands, and boutique historic estates with discrete butler service, private jet or helicopter transfers, and world-class culinary curation.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Exclusive buyouts of private villas and boutique heritage palazzos',
      '24/7 dedicated private concierge & private chef curation',
      'VIP airport tarmac meet-and-greet with express diplomatic clearance',
      'Private yacht charters and secluded helicopter flight routes'
    ],
    popularDestinations: ['Amalfi Coast, Italy', 'Noonu Atoll, Maldives', 'Lake Como, Italy', 'St. Barts']
  },
  {
    id: 'cultural-discoveries',
    title: 'Cultural Discoveries',
    subtitle: 'Living Traditions & Architectural Heritage',
    description: 'Immersive access to ancient arts, historic monuments after hours, conversations with living national treasures, and authentic regional gastronomy.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Private after-hours entry to UNESCO heritage sites and historic palaces',
      'Curated introductions to master craftsmen, textile weavers, and ceramicists',
      'Private classical music, tea masters, and culinary historian guided walks',
      'Restored heritage stays reflecting centuries of vernacular design'
    ],
    popularDestinations: ['Kyoto, Japan', 'Marrakech, Morocco', 'Oaxaca, Mexico', 'Florence, Italy']
  },
  {
    id: 'adventure-trekking',
    title: 'Adventure & Trekking',
    subtitle: 'Untamed Wilderness & Alpine Solitude',
    description: 'Active expeditions into spectacular remote landscapes with top certified alpine guides, luxury wilderness camps, and unforgettable high-altitude vistas.',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Private certified IFMGA mountain guides and wilderness naturalists',
      'High-comfort expedition base camps with heated geodesic domes and fine dining',
      'Helicopter-assisted glacial trekking and backcountry exploration',
      'Bespoke route pacing tailored to personal endurance and photography goals'
    ],
    popularDestinations: ['Swiss Alps, Switzerland', 'Torres del Paine, Patagonia', 'Dolomites, Italy', 'Southern Alps, New Zealand']
  },
  {
    id: 'honeymoon-romance',
    title: 'Honeymoon Holidays',
    subtitle: 'Timeless Romance & Intimate Hideaways',
    description: 'Unforgettable beginnings crafted around peaceful secluded suites, candlelit private dining under the stars, sunset sails, and unhurried time together.',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Overwater pavilions, cave plunge pools, and private clifftop terraces',
      'Champagne sunset cruises aboard classic wooden schooners',
      'Couples restorative spa rituals in open-air jungle or sea pavilions',
      'Complimentary honeymoon amenities, vintage reserves, and memory keepsakes'
    ],
    popularDestinations: ['Santorini, Greece', 'Baa Atoll, Maldives', 'Uluwatu, Bali', 'Bora Bora']
  },
  {
    id: 'family-vacations',
    title: 'Family Vacations',
    subtitle: 'Enriching Multi-Generational Journeys',
    description: 'Thoughtfully paced adventures that captivate curious young minds while providing relaxation and seamless comfort for parents and grandparents alike.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Multi-bedroom private villas with interconnecting suites and heated pools',
      'Hands-on wildlife conservation, astronomy, and artisanal cooking classes',
      'Private child-friendly guides who bring history and science to life',
      'Luggage-free transfers and flexible unhurried daily scheduling'
    ],
    popularDestinations: ['Costa Rica Rainforests', 'Tuscany, Italy', 'Kyoto, Japan', 'Galapagos Islands']
  },
  {
    id: 'beach-retreats',
    title: 'Beach & Island Retreats',
    subtitle: 'Turquoise Waters & Barefoot Sophistication',
    description: 'The antidote to modern busyness. Warm breezes, crystalline waters, private sandbanks, and barefoot elegance at the world’s most pristine shorelines.',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Direct beach and lagoon access from private oceanfront verandas',
      'Private marine reserve snorkeling with manta rays and sea turtles',
      'Open-air seaside wellness pavilions with organic botanical therapies',
      'Private catamaran sunset charters with freshly caught seafood'
    ],
    popularDestinations: ['Maldives Atolls', 'Turks & Caicos', 'Seychelles', 'Sumba, Indonesia']
  }
];
