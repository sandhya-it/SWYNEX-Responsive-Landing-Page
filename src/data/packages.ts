import { TravelPackage } from '../types/travel';

export const TRAVEL_PACKAGES: TravelPackage[] = [
  {
    id: 'mediterranean-solitude',
    title: 'The Mediterranean Solitude',
    destination: 'Amalfi Coast & Capri',
    country: 'Italy',
    category: 'Romance',
    duration: '8 Days / 7 Nights',
    durationDays: 8,
    illustrativePrice: 405000,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    summary: 'A leisurely coastal escape combining private cliffside villas, vintage wooden boat cruises to Capri, and candlelit lemon-grove dining.',
    highlights: [
      'Private sunset cruise aboard an artisanal Riva boat along Positano cliffs',
      'Exclusive access to cliffside Ravello gardens and private wine tastings',
      'Michelin-starred seaside dining overlooking the Bay of Naples',
      'Private chauffeured transfers in vintage Italian Alfa Romeo or Mercedes'
    ],
    itinerary: [
      { day: 'Day 1–2', title: 'Arrival & Positano Cliffside Welcome', description: 'Private transfer from Naples to your cliffside palazzo in Positano. Welcome aperitivo on your private terrace overlooking the sea.' },
      { day: 'Day 3–4', title: 'Capri by Sea & Grotta Azzurra', description: 'Full-day private voyage to the island of Capri. Swim in secluded turquoise coves and dine at a cliffside seafood trattoria in Anacapri.' },
      { day: 'Day 5–6', title: 'Ravello Heights & Ancient Vineyards', description: 'Journey to the high mountain village of Ravello. Tour Villa Rufolo’s historic pergolas and sample rare volcanic vintages at a private estate.' },
      { day: 'Day 7–8', title: 'Artisanal Amalfi & Farewell Dusk Cruise', description: 'Explore ancient paper-making workshops in Amalfi town. Conclude with a celebratory dusk dinner on a secluded private beach.' }
    ],
    included: [
      '7 nights in luxury 5-star cliffside palazzo suites',
      'Daily gourmet Mediterranean breakfast & selected vintage tastings',
      'Private dedicated concierge & chauffeured Mercedes-Benz fleet',
      'Private full-day Capri boat charter with skipper and champagne'
    ]
  },
  {
    id: 'kyoto-mind-craft',
    title: 'Kyoto Mind & Kyoto Craft',
    destination: 'Kyoto, Nara & Uji',
    country: 'Japan',
    category: 'Culture',
    duration: '9 Days / 8 Nights',
    durationDays: 9,
    illustrativePrice: 435000,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    summary: 'A culturally immersive journey through Kyoto’s centuries-old artisan traditions, quiet zen moss temples, and private tea estates.',
    highlights: [
      'Exclusive private opening of Kokedera Moss Temple before public access',
      'Private tea ceremony with a celebrated 15th-generation Uji tea master',
      'Sukiya-style heritage Machiya accommodation with private onsen bath',
      'Private woodblock printing and ceramic atelier workshops with living treasures'
    ],
    itinerary: [
      { day: 'Day 1–2', title: 'Arrive in Kansai & Traditional Gion', description: 'Bullet train transfer to Kyoto. Check in to your serene Sukiya machiya with Japanese cedar bath. Evening quiet lantern walk in historic Gion.' },
      { day: 'Day 3–4', title: 'The Zen of Gardens & Kokedera', description: 'Early morning meditation at a secluded zen temple. Private calligraphy session and private stroll through the tranquil Arashiyama bamboo forest.' },
      { day: 'Day 5–6', title: 'Sacred Uji Tea Country & Nara Crafts', description: 'Venture into Uji’s misty tea hills. Harvest shaded gyokuro leaves with master growers, followed by a cultural excursion to Nara’s wooden Todai-ji.' },
      { day: 'Day 7–9', title: 'Kaiseki Mastery & Artisanal Ateliers', description: 'Visit master sword makers, textile weavers, and ceramicists. Conclude with an intimate twelve-course kaiseki banquet.' }
    ],
    included: [
      '8 nights in premium heritage Machiya suites and traditional onsen ryokan',
      'All private cultural admissions and master artisan honorariums',
      'Private bilingual cultural historian guide throughout',
      'First-class Shinkansen bullet train transfers'
    ]
  },
  {
    id: 'alpine-sanctuary',
    title: 'Alpine Sanctuary & High Valleys',
    destination: 'Bernese Oberland & Zermatt',
    country: 'Switzerland',
    category: 'Mountain',
    duration: '7 Days / 6 Nights',
    durationDays: 7,
    illustrativePrice: 385000,
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    summary: 'Restorative mountain serenity in private timber chalets facing the Matterhorn, panoramic Swiss rail journeys, and high-alpine wildflower meadows.',
    highlights: [
      'Panoramic first-class Glacier Express rail journey across soaring viaducts',
      'Private timber chalet with heated outdoor mineral pool facing mountain peaks',
      'Guided trek across Aletsch Glacier with certified alpine mountaineers',
      'Private fondue and Swiss Grand Cru tasting in a historic high-mountain refuge'
    ],
    itinerary: [
      { day: 'Day 1–2', title: 'Zurich to Zermatt & The Iconic Matterhorn', description: 'Scenic rail transfer to the car-free village of Zermatt. Evening alpine welcome dinner beside a roaring stone fireplace.' },
      { day: 'Day 3–4', title: 'Gornergrat Sunrise & High Altitude Wellness', description: 'Private cogwheel rail ascent to Gornergrat for dawn light on 29 mountain summits. Afternoon alpine herb sauna and spa therapies.' },
      { day: 'Day 5–6', title: 'Bernese Oberland Valleys & Waterfalls', description: 'Glacier Express transit through the Rhine Gorge to the valley of 72 waterfalls in Lauterbrunnen. Private meadow botanical tour.' },
      { day: 'Day 7', title: 'Alpine Farewell & Departure', description: 'Breakfast on your sun terrace overlooking snow peaks before first-class rail transfer to Zurich airport.' }
    ],
    included: [
      '6 nights in luxury Swiss alpine chalets & mountain spa resorts',
      'Swiss First Class Rail Pass for seamless scenic mountain transport',
      'Private IFMGA mountain guide for customized hiking and glacier walks',
      'All breakfasts and curated mountain dining experiences'
    ]
  },
  {
    id: 'balinese-haven',
    title: 'The Balinese Haven & Coastal Sanctum',
    destination: 'Ubud, Sidemen & Uluwatu',
    country: 'Indonesia',
    category: 'Island',
    duration: '8 Days / 7 Nights',
    durationDays: 8,
    illustrativePrice: 295000,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    summary: 'A restorative journey across jungle valleys and limestone clifftops, featuring sacred temple blessings, yoga sanctuaries, and private ocean villas.',
    highlights: [
      'Private pool villa suspended over the emerald Ayung River jungle valley',
      'Sacred water cleansing ceremony with a respected high Balinese priest',
      'Organic farm-to-table culinary masterclass in a traditional village compound',
      'Sunset clifftop cocktails and traditional Kecak dance in Uluwatu'
    ],
    itinerary: [
      { day: 'Day 1–3', title: 'Heart of Ubud & Sacred Valleys', description: 'Arrive at your tranquil jungle sanctuary. Daily private morning yoga overlooking rice terraces. Private blessing at Tirta Empul spring.' },
      { day: 'Day 4–5', title: 'Sidemen Unhurried Countryside', description: 'Escape to the serene foothills of Mount Agung. Explore quiet handloom weaving villages and trek through terraced river valleys.' },
      { day: 'Day 6–8', title: 'Uluwatu Clifftops & Ocean Sunset', description: 'Relocate to an oceanfront cliff villa in southern Bali. Relax on secluded white-sand beaches and enjoy private sunset catamaran sailing.' }
    ],
    included: [
      '7 nights in secluded private pool luxury villas',
      'Dedicated private vehicle and private Balinese cultural driver',
      'Daily holistic spa treatments and personalized wellness consultations',
      'All cultural site permits and sacred temple offerings'
    ]
  },
  {
    id: 'aegean-twilight',
    title: 'Aegean Twilight & Caldera',
    destination: 'Santorini & Milos',
    country: 'Greece',
    category: 'Romance',
    duration: '7 Days / 6 Nights',
    durationDays: 7,
    illustrativePrice: 350000,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
    summary: 'Unwind in whitewashed cliffside cave suites, sail secluded volcanic coves, and sample mineral-rich wines under the warm Aegean sun.',
    highlights: [
      'Private sunset catamaran charter around the Santorini volcanic caldera',
      'Helicopter flight to the lunar white sea cliffs of Milos',
      'Private sommelier tasting at an ancient cliffside volcanic winery',
      'Secluded cliffside plunge pool overlooking the Aegean horizon'
    ],
    itinerary: [
      { day: 'Day 1–3', title: 'Imerovigli Caldera Heights', description: 'Check in to your cave suite in Imerovigli, away from the crowds. Sunset champagne on your private terrace. Private historic Akrotiri tour.' },
      { day: 'Day 4–5', title: 'The Secret Caves of Milos', description: 'Scenic helicopter hop to Milos. Board a private sailboat to Kleftiko pirate sea caves and swim in crystalline turquoise waters.' },
      { day: 'Day 6–7', title: 'Oia Quiet Twilight & Aegean Farewell', description: 'Explore hidden artisan lanes of Oia in early morning. Celebratory private clifftop dining on fresh Mediterranean catch.' }
    ],
    included: [
      '6 nights in private cliffside cave suites with plunge pools',
      'Private catamaran yacht charters with full crew and open bar',
      'Inter-island helicopter transfers and private chauffeured cars',
      'All gourmet breakfasts and curated seaside dinners'
    ]
  },
  {
    id: 'atoll-overwater-serenity',
    title: 'Atoll Overwater Serenity',
    destination: 'Noonu Atoll',
    country: 'Maldives',
    category: 'Luxury',
    duration: '6 Days / 5 Nights',
    durationDays: 6,
    illustrativePrice: 540000,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
    summary: 'The ultimate overwater sanctuary with panoramic crystal lagoons, retractable star-gazing ceilings, and private coral reef diving.',
    highlights: [
      'Two-story overwater villa with retractable roof for sleeping under constellations',
      'Private marine biologist escort for snorkeling with manta rays and sea turtles',
      'Private sandbank dining surrounded 360 degrees by gentle turquoise waves',
      'Subsurface glass-walled observatory cocktail experience'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Seaplane Arrival & Overwater Check-In', description: 'Breathtaking 45-minute seaplane flight over turquoise atolls. Welcome champagne on your private sun deck with ocean ladder.' },
      { day: 'Day 2–3', title: 'Marine Conservation & Coral Gardens', description: 'Guided reef discovery with resident marine biologists. Adopt a coral fragment and snorkel vibrant underwater drop-offs.' },
      { day: 'Day 4–5', title: 'Sandbank Solitude & Sunset Dhoni Sail', description: 'Cast away for an afternoon on a private desert island sandbank. Evening dolphin cruise with fine vintage champagne.' },
      { day: 'Day 6', title: 'Sunrise Lagoon Swim & Seaplane Farewell', description: 'Final leisurely morning over the crystalline lagoon before scenic seaplane return to Male.' }
    ],
    included: [
      '5 nights in ultra-luxury overwater villa with private saltwater slide & pool',
      'Roundtrip scenic seaplane transfers from Male International Airport',
      'Private dedicated Mr./Ms. Friday butler service 24/7',
      'All fine dining, vintage wines, and non-motorized water sports'
    ]
  }
];
