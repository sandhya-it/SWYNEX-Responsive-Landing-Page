import { Destination } from '../types/travel';

export const DESTINATIONS: Destination[] = [
  {
    id: 'amalfi-coast',
    name: 'Amalfi Coast',
    country: 'Italy',
    region: 'Campania, Southern Italy',
    category: 'coast',
    categoryLabel: 'Coast & Islands',
    tagline: 'Terraced lemon groves and dramatic cliffside Mediterranean vistas.',
    description: 'Carved into dramatic limestone cliffs towering above the azure Tyrrhenian Sea, the Amalfi Coast represents the pinnacle of Mediterranean romance. From Positano’s pastel houses to the quiet gardens of Ravello, every turn reveals timeless coastal serenity.',
    illustrativePrice: 'From ₹3,50,000 / person',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1400&q=80',
    bestSeason: 'May to October',
    idealDuration: '7 to 10 Days',
    signatureStay: 'Historic 18th-century cliffside palazzo with private ocean-view pergola.',
    highlights: [
      'Private sunset wooden boat cruise to the Faraglioni of Capri',
      'Artisanal lemon grove walking tour and private limoncello tasting in Minori',
      'Classical music dusk recital at Ravello’s Villa Rufolo gardens',
      'Secluded cove swimming accessible only by local vintage gozzo boat'
    ],
    coordinates: "40°37'N 14°29'E"
  },
  {
    id: 'kyoto',
    name: 'Kyoto & Nara',
    country: 'Japan',
    region: 'Kansai Region',
    category: 'culture',
    categoryLabel: 'Culture & Heritage',
    tagline: 'Centuries of refined craft, quiet moss gardens, and meditative temples.',
    description: 'Former imperial capital of Japan, Kyoto is an enduring sanctuary of classical aesthetics. Experience unhurried morning tea ceremonies in Gion, walk under tranquil bamboo canopies in Arashiyama, and discover centuries of artisan joinery and ceramic heritage.',
    illustrativePrice: 'From ₹4,10,000 / person',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=80',
    bestSeason: 'March to May & October to December',
    idealDuration: '8 to 11 Days',
    signatureStay: 'Century-old Sukiya-style Machiya townhome bordering an ancient dry landscape garden.',
    highlights: [
      'Private dawn entrance to Saiho-ji (Kokedera) Moss Temple before general opening',
      'Private matcha masterclass with a 15th-generation Uji tea practitioner',
      'Traditional kaiseki dinner prepared by a Michelin three-star chef in a secluded forest ryokan',
      'Curated bamboo forest bicycle tour at dawn'
    ],
    coordinates: "35°01'N 135°46'E"
  },
  {
    id: 'swiss-alps',
    name: 'Swiss Alps',
    country: 'Switzerland',
    region: 'Bernese Oberland & Valais',
    category: 'mountain',
    categoryLabel: 'Nature & Mountain',
    tagline: 'Snow-dusted granite peaks, pristine alpine valleys, and timber sanctuaries.',
    description: 'Immerse yourself in the majesty of Europe’s highest summits. From car-free mountain villages like Zermatt to glass-fronted timber chalets overlooking the Matterhorn, the Swiss Alps offer pure alpine air, private scenic rail journeys, and unhurried stillness.',
    illustrativePrice: 'From ₹3,85,000 / person',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1400&q=80',
    bestSeason: 'June to September (Hiking) or Dec to March (Winter)',
    idealDuration: '7 to 9 Days',
    signatureStay: 'Panoramic cedar & glass timber chalet with outdoor hot springs facing the Eiger.',
    highlights: [
      'Private scenic Glacier Express panoramic rail compartment across mountain viaducts',
      'Guided meadow botanical trek with an alpine herbalist',
      'Raclette & Grand Cru tasting inside a century-old cellar in Valais',
      'Helicopter flight over the Aletsch Glacier with private high-altitude champagne picnic'
    ],
    coordinates: "46°35'N 7°58'E"
  },
  {
    id: 'bali',
    name: 'Bali & Nusa Islands',
    country: 'Indonesia',
    region: 'Lesser Sunda Islands',
    category: 'retreat',
    categoryLabel: 'Slow Retreats',
    tagline: 'Emerald rice terraces, spiritual sanctuaries, and oceanfront pavilions.',
    description: 'Bali marries rich sacred traditions with breathtaking tropical landscape. Unwind amidst the jungle canopies of Ubud, witness golden hour over Indian Ocean sea temples in Uluwatu, and experience transformative holistic wellness retreats.',
    illustrativePrice: 'From ₹2,85,000 / person',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=80',
    bestSeason: 'April to October',
    idealDuration: '8 to 12 Days',
    signatureStay: 'Open-air teak villa perched above the Ayung River valley with private infinity pool.',
    highlights: [
      'Private water purification ceremony at an ancient sacred temple spring with local priest',
      'Sunrise trekking to Mount Batur caldera followed by natural volcanic hot springs',
      'Holistic Ayurvedic treatments and herbal sound healing sessions in Ubud',
      'Catamaran day sail to the dramatic manta ray bays of Nusa Penida'
    ],
    coordinates: "8°20'S 115°11'E"
  },
  {
    id: 'santorini',
    name: 'Santorini & Milos',
    country: 'Greece',
    region: 'Cyclades, Aegean Sea',
    category: 'coast',
    categoryLabel: 'Coast & Islands',
    tagline: 'Whitewashed cliff villages, volcanic calderas, and Aegean gold light.',
    description: 'The Cyclades embody pure Mediterranean minimalism. Gaze out across the cobalt caldera from private whitewashed suites in Imerovigli, sail to sea caves in Milos, and savor fresh Aegean seafood paired with crisp Assyrtiko volcanic wines.',
    illustrativePrice: 'From ₹3,45,000 / person',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1400&q=80',
    bestSeason: 'May to October',
    idealDuration: '7 to 10 Days',
    signatureStay: 'Cave villa carved into the Oia caldera cliffs with private heated plunge pool.',
    highlights: [
      'Private catamaran cruise through the submerged volcanic caldera at sunset',
      'Sommelier-led tasting tour of 200-year-old ungrafted Assyrtiko vineyards',
      'Helicopter transfer to the moonscape beaches and sea caves of Milos',
      'Private dinner perched on an ancient Byzantine fortress terrace'
    ],
    coordinates: "36°25'N 25°26'E"
  },
  {
    id: 'maldives',
    name: 'Private Atolls, Maldives',
    country: 'Maldives',
    region: 'Noonu & Baa Atolls',
    category: 'retreat',
    categoryLabel: 'Slow Retreats',
    tagline: 'Crystalline lagoons, private overwater residences, and marine sanctuaries.',
    description: 'An idyllic realm of turquoise waters, powder-soft white sand, and unparalleled privacy. Comfy Travels curated overwater villas feature direct lagoon access, retractable stargazing roofs, and bespoke marine biologist excursions.',
    illustrativePrice: 'From ₹5,40,000 / person',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1400&q=80',
    bestSeason: 'November to April',
    idealDuration: '6 to 9 Days',
    signatureStay: 'Two-story overwater reserve with glass-floor viewing lounge and private saltwater slide.',
    highlights: [
      'Snorkeling with resident manta rays in the UNESCO Biosphere Reserve of Hanifaru Bay',
      'Private sandbank candlelit dining under the equatorial Milky Way',
      'Subsurface coral reef restoration masterclass with marine conservationists',
      'Sunset dolphin sail on an artisanal Maldivian wooden dhoni'
    ],
    coordinates: "3°12'N 73°02'E"
  },
  {
    id: 'marrakech',
    name: 'Marrakech & Atlas',
    country: 'Morocco',
    region: 'Marrakech-Safi',
    category: 'culture',
    categoryLabel: 'Culture & Heritage',
    tagline: 'Hidden riad courtyards, spice markets, and majestic Atlas foothills.',
    description: 'A sensory oasis where ancient Medina architecture meets timeless Berber hospitality. Stay in tranquil riads scented with orange blossom, wander historic secret gardens, and venture into the high snow-dusted Atlas Mountains.',
    illustrativePrice: 'From ₹3,15,000 / person',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=80',
    bestSeason: 'September to May',
    idealDuration: '6 to 9 Days',
    signatureStay: 'Restored 17th-century palace riad with Andalusian courtyards and private hammam.',
    highlights: [
      'Private dawn tour of the iconic Majorelle Gardens and Berber Museum before opening',
      'Curated artisan guild visits in the Medina: leather tanners, brass lanterns & carpet weavers',
      'Private expedition into the Ourika Valley with Berber tea at a high-mountain family village',
      'Dusk hot air balloon ascension over the Agafay Stone Desert'
    ],
    coordinates: "31°37'N 7°59'W"
  },
  {
    id: 'patagonia',
    name: 'Patagonia & Fjords',
    country: 'Chile & Argentina',
    region: 'Torres del Paine & Los Glaciares',
    category: 'mountain',
    categoryLabel: 'Nature & Mountain',
    tagline: 'Granite towers, crystalline glaciers, and untamed southern wilderness.',
    description: 'At the edge of the habitable world lies Patagonia—a dramatic expanse of turquoise glacial lakes, windswept grasslands, and towering granite spires. Experience private wilderness lodges offering sustainable luxury and guided backcountry discoveries.',
    illustrativePrice: 'From ₹4,70,000 / person',
    image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1400&q=80',
    bestSeason: 'November to March',
    idealDuration: '9 to 12 Days',
    signatureStay: 'All-inclusive sustainable timber eco-lodge overlooking Lake Pehoe and Torres del Paine.',
    highlights: [
      'Private guided trek to the iconic Base of the Torres spires with gourmet field lunch',
      'Navigating the Grey Glacier icebergs on a private zodiac vessel',
      'Gaucho horseback riding across vast Patagonian estancias with traditional asado barbecue',
      'Puma conservation tracking with expert local biologists'
    ],
    coordinates: "51°15'S 72°58'W"
  }
];
