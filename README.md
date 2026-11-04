# Comfy Travels — Bespoke Journeys & Curated Holidays

A production-grade, responsive luxury travel and tourism website built for **Comfy Travels**, a bespoke travel curation brand dedicated to unhurried, comfortable, and meaningful journeys, private escapes, and transformative cultural encounters with transparent Indian Rupee (₹) pricing.

---

## Brand Ethos & Design Philosophy

- **Brand:** Comfy Travels
- **Tagline:** "Travel beautifully. Remember forever."
- **Aesthetic:** Minimalist luxury, editorial typography, restrained color harmony, and cinematic destination photography.
- **Currency:** Indian Rupee (₹ INR) for all packages, destination estimates, and inquiry guidelines.
- **Color Palette:**
  - Deep Forest Green (`#243C32`) — Primary brand tone & grounding accent
  - Warm Ivory (`#F8F6F0`) & Pure White (`#FFFFFF`) — Clean, airy surfaces
  - Charcoal (`#262824`) — High-contrast, readable editorial typography
  - Warm Stone & Taupe (`#DCD7CD`, `#A69B89`) — Hairline borders and subtle metadata
  - Antique Gold (`#A68A5B`) — Quiet luxury accents
- **Typography:**
  - Heading & Display: **Cormorant Garamond** (Google Fonts)
  - Body & UI Controls: **Plus Jakarta Sans** (Google Fonts)

---

## Key Features & User Experience

1. **Top Bar Contract & Responsive Navigation**
   - Transparent gradient header transitioning to refined solid warm ivory on scroll.
   - Comfy Travels wordmark, clean single-line navigation links, active section spy, and primary "Plan Your Trip" action.
   - Fully accessible mobile drawer with keyboard escape and focus containment.

2. **Cinematic Hero**
   - High-resolution Mediterranean destination photography with contrast scrim.
   - Fluid responsive typography with `text-wrap: balance`.
   - "Explore Destinations" & "Plan Your Journey" quick actions.

3. **Travel Search & Trip Planner**
   - Interactive planner with destination select, calendar departure/return pickers, party size, and travel style.
   - Client-side date validation (prevents return date earlier than departure date, blocks past dates).
   - Dynamic sample package matching with prices in Indian Rupees (₹) and direct prefill trigger.

4. **Curated Destinations Gallery**
   - 8 marquee destinations across 4 continents (Amalfi Coast, Kyoto, Swiss Alps, Bali, Santorini, Maldives, Marrakech, Patagonia).
   - Filter tabs: *All Destinations*, *Coast & Islands*, *Culture & Heritage*, *Nature & Mountain*, *Slow Retreats*.
   - Interactive modal detailing signature stays, best season, ideal pacing, and starting tariffs in ₹ INR.

5. **Signature Travel Experiences**
   - 6 pillars: Luxury Escapes, Cultural Discoveries, Adventure & Trekking, Honeymoon Holidays, Family Vacations, and Beach Retreats.
   - Asymmetric bento-grid layout with marquee card and detailed inclusion modals.

6. **Featured Travel Packages**
   - Sample itineraries with duration, day-by-day highlights, illustrative tariffs in Indian Rupees (e.g. ₹2,95,000 to ₹5,40,000 / person), and inclusions.
   - Travel style filtering (Romance, Culture, Mountain, Island, Luxury).
   - "View Itinerary" and "Plan This Trip" pre-fill triggers.

7. **The Comfy Travels Journal**
   - Magazine-style editorial articles on slow travel, Kyoto moss gardens, island living, and high-alpine valleys.
   - In-depth reader modal with complete prose and pull quotes.

8. **Why Choose Us & Brand Story**
   - 6 core pillars of unhurried, comfortable travel and an about section with mission diptych.

9. **Validated Travel Inquiry Flow**
   - Full name, email, phone, destination, dates, travelers, holiday style, budget in ₹ INR, and special notes.
   - Real-time client validation with accessible feedback and honest prototype confirmation state.

10. **Newsletter & Comprehensive Footer**
    - Email validation with feedback.
    - Quick navigation, destination links, legal policy dialogs (Privacy, Terms of Curation, Prototype Notice), and dynamic copyright.

---

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run TypeScript checks
npm run lint
```
