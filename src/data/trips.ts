export type TripStatus = 'booked' | 'partially_booked' | 'needs_action' | 'planning' | 'decision_needed' | 'canceled';

export interface Flight {
  segment: number;
  date: string;
  route: string;
  time?: string;
  airline?: string;
  aircraft?: string;
  cabin?: string;
  confirmation?: string;
  status: 'booked' | 'pending' | 'needs_action' | 'canceled';
  notes?: string;
}

export interface Hotel {
  property: string;
  location: string;
  checkIn?: string;
  checkOut?: string;
  program?: string;
  status: 'booked' | 'pending' | 'not_booked';
  notes?: string;
  cost?: string;
}

export interface ActionItem {
  text: string;
  urgent: boolean;
}

export interface IntelSection {
  title: string;
  content: string;
}

export interface AwardTip {
  program: string;
  route?: string;
  cost?: string;
  note: string;
}

export interface ItineraryDay {
  date: string;
  label: string;
  description: string;
  type: 'travel' | 'activity' | 'rest' | 'flexible';
}

export interface TripCost {
  category: 'flight' | 'hotel' | 'activity' | 'transfer' | 'other';
  description: string;
  points?: number;   // raw count, NOT a cash equivalent
  program?: string;  // e.g., "Hyatt", "Hilton FNC", "Turkish Miles&Smiles", "AAdvantage"
  cashUsd?: number;
  note?: string;
  canceled?: boolean; // cancelled items are shown but excluded from totals
}

export interface Trip {
  slug: string;
  title: string;
  subtitle: string;
  region: string;
  country?: string;
  dates: string;
  month: string;
  year: number;
  status: TripStatus;
  statusLabel: string;
  travelers: string;
  heroImage?: string;
  flights: Flight[];
  hotels: Hotel[];
  actionItems: ActionItem[];
  intel: IntelSection[];
  awardTips: AwardTip[];
  itinerary: ItineraryDay[];
  costs: TripCost[];
  options?: { name: string; description: string }[];
}

export const trips: Trip[] = [
  // ═══════════════════════════════════════════════════════
  // KRUGER SAFARI — April 2026
  // ═══════════════════════════════════════════════════════
  {
    slug: 'safari-apr-2026',
    title: 'Greater Kruger Safari',
    subtitle: 'Timbavati & Klaserie Reserves',
    region: 'Southern Africa',
    country: 'South Africa',
    dates: 'April 12–29, 2026',
    month: 'April',
    year: 2026,
    status: 'partially_booked',
    statusLabel: 'Partially Booked',
    travelers: '4 adults (Terry Lin, Janelle Tam, Dorothy Fong, Kam Chiu Tam)',
    heroImage: 'kruger-safari-lion',
    flights: [
      // ── Terry & Janelle: Chicago Stopover + Outbound ──
      { segment: 1, date: '2026-04-20', route: 'SEA → ORD', time: '2:39pm → 8:50pm', airline: 'United Airlines (UA2101)', confirmation: 'JT7CSG', status: 'booked', notes: 'Positioning flight to Chicago' },
      { segment: 2, date: '2026-04-21', route: 'ORD → LHR', time: '9:15pm → 11:15am +1', airline: 'British Airways (BA296)', cabin: 'Business (Club World)', confirmation: 'EDGBNO', status: 'booked', notes: 'Terry seat 02K, Janelle seat 02A. Ticketed as Alaska.' },
      { segment: 3, date: '2026-04-22', route: 'LHR → JNB', time: '19:00 → 06:00 +1', airline: 'British Airways (BA55)', cabin: 'Business (Club World)', confirmation: 'EDGBNO', status: 'booked', notes: '11hr flight. Terry seat 59J, Janelle seat 59K. Arrive JNB April 23. Ticketed as Alaska.' },
      // ── Everyone: Hoedspruit ──
      { segment: 4, date: '2026-04-23', route: 'JNB → HDS (Hoedspruit)', time: '10:30am → 11:30am', airline: 'Airlink', confirmation: 'XEB2ZT', status: 'booked', notes: 'Regional hop, transfer to Shindzela' },
      // ── Terry & Janelle: Return (to Seattle) ──
      { segment: 5, date: '2026-04-28', route: 'JNB → FRA', time: '6:35pm → 6:00am +1', airline: 'Condor (DE 2289)', cabin: 'Business', confirmation: 'AFR58A', status: 'booked', notes: '8h 15min layover in Frankfurt' },
      { segment: 6, date: '2026-04-29', route: 'FRA → SEA', time: '2:15pm → 3:40pm', airline: 'Condor (DE 2032)', cabin: 'Business', confirmation: 'AFR58A', status: 'booked', notes: 'Arrive Seattle' },
      // ── Parents (Dorothy & Kam Chiu): Outbound (from Toronto) ──
      { segment: 7, date: '2026-04-12', route: 'YYZ → FRA', time: '6:15pm → 7:55pm → 9:40am +1', airline: 'Condor (DE2403)', cabin: 'Business', confirmation: 'LMVEXT', status: 'booked', notes: 'Parents outbound. Ticketed as Alaska. 10h 50min layover in FRA.' },
      { segment: 8, date: '2026-04-13', route: 'FRA → JNB', time: '8:30pm → 7:30am +1', airline: 'Condor (DE2288)', cabin: 'Business', confirmation: 'LMVEXT', status: 'booked', notes: 'Parents arrive JNB April 14. Ticketed as Alaska.' },
      // ── Parents: Return (to Toronto) ──
      { segment: 9, date: '2026-04-28', route: 'JNB → FRA', time: '6:35pm → 6:00am +1', airline: 'Condor (DE 2289)', cabin: 'Business', confirmation: 'ARQAHJ', status: 'booked', notes: 'Parents return. 9h 15min layover in FRA' },
      { segment: 10, date: '2026-04-29', route: 'FRA → YYZ', time: '3:15pm → 5:55pm', airline: 'Condor (DE 2402)', cabin: 'Business', confirmation: 'ARQAHJ', status: 'booked', notes: 'Parents arrive Toronto' },
    ],
    hotels: [
      { property: 'Waldorf Astoria Chicago', location: 'Chicago, IL', checkIn: '2026-04-20', checkOut: '2026-04-21', program: 'Hilton', status: 'booked', notes: 'Conf: 9086634522999. Pre-departure stopover.' },
      { property: 'Saxon Hotel, Villas and Spa', location: 'Johannesburg, South Africa', checkIn: '2026-04-22', checkOut: '2026-04-23', status: 'booked', notes: 'Conf: 9074244467855. Arrival night JNB.' },
      { property: 'Park Hyatt Johannesburg', location: 'Johannesburg, South Africa', checkIn: '2026-04-22', checkOut: '2026-04-23', program: 'Hyatt', status: 'booked', notes: 'Conf: 56460504. Second room JNB arrival night.' },
      { property: 'Shindzela Tented Camp', location: 'Timbavati Reserve', checkIn: '2026-04-23', checkOut: '2026-04-25', status: 'booked', cost: 'R47,310 ZAR (~$2,557 USD for 4 pax)', notes: 'Conf: 6200479437 / 5983749295 / 5413883735. Intimate bush camp, 5–8 guests per group.' },
      { property: 'Last Word Kitara', location: 'Klaserie Reserve', checkIn: '2026-04-25', checkOut: '2026-04-28', program: 'Preferred Points', status: 'booked', notes: 'Conf: 9911SF004182 / 9911SF004183. Luxury private reserve.' },
    ],
    actionItems: [
      { text: 'Confirm final payment for Shindzela Tented Camp', urgent: true },
      { text: 'Confirm Last Word Kitara points booking and payment plan', urgent: true },
      { text: 'Arrange HDS → JNB transfer for April 28 departure', urgent: true },
      { text: 'Start malaria prophylaxis 1–2 weeks before departure', urgent: true },
      { text: 'Obtain travel insurance with medical evacuation coverage', urgent: true },
      { text: 'Verify passports valid 6+ months beyond return date', urgent: false },
    ],
    intel: [
      { title: 'The Greater Kruger Ecosystem', content: 'The Greater Kruger encompasses multiple private reserves (Timbavati, Klaserie, Sabi Sands, Kruger proper) that operate as a unified ecosystem spanning nearly 24,000 sq km. What makes this region exceptional is the density of large predators—leopard, lion, painted wild dog, hyena—combined with open access between reserves that allows wildlife to roam freely. Timbavati and Klaserie are considered premium mid-tier reserves: more exclusive than Kruger proper but less crowded and expensive than Sabi Sands. April is autumn in South Africa, with cooling temperatures (highs around 70°F, lows 45–50°F), sparse grass (making animals easier to spot), and fewer international tourists than peak season (June–August).' },
      { title: 'Big 5 Viewing & Game Drive Strategy', content: 'The "Big 5"—lion, leopard, elephant, cape buffalo, rhino—is a colonial hunting term, not an ecological classification, but they remain the marquee sightings. Leopards are the hardest to spot; your best chances are early morning or late afternoon drives. Lions are social and more predictable; guides often locate prides by sound and movement patterns. Elephants congregate at water sources year-round. Early morning game drives (5:30–10am) are mandatory: animals are active, light is perfect for photography, and the bush is cooler. Afternoon drives (3–6pm) are secondary; night drives yield nocturnal predators like hyena and leopard.' },
      { title: 'Timbavati vs. Klaserie', content: 'Timbavati (your first 2 nights) is known for open plains, excellent lion viewing, and smaller, more intimate camp experiences. Shindzela sits in classic Timbavati habitat with low acacia woodland and grassland—perfect for spotting cats and large herds. Klaserie (your next 3 nights) has more riverine forest, denser vegetation, and notably higher leopard densities. Last Word Kitara is a flagship property with exclusive use options, meaning guides focus entirely on your party. The transition between reserves gives you variety in landscape and animal behavior.' },
      { title: 'Packing, Tipping & Practical Notes', content: 'Pack neutral earth tones (khaki, olive, tan)—bright colors startle wildlife. Binoculars are essential. South African tipping: R50–100 ZAR per day for guides, R20–50 for general staff. Bring cash (USD or ZAR) for tips; cards often aren\'t practical in remote areas. Travel insurance is non-negotiable; ensure it covers medical evacuation. Internet and cell coverage are spotty in private reserves—expect to disconnect almost entirely for 5 days.' },
    ],
    awardTips: [
      { program: 'Alaska Mileage Plan', route: 'ORD–LHR–JNB via BA', cost: 'Booked', note: 'Booked through Alaska Mileage Plan on British Airways metal' },
      { program: 'Preferred Points', route: 'Last Word Kitara', cost: 'Booked on preferred points', note: 'Kitara booked on preferred points — confirmed' },
    ],
    itinerary: [
      { date: 'April 21', label: 'Depart Chicago', description: 'Fly ORD → LHR. Overnight flight. Rest on the plane — long travel day ahead.', type: 'travel' },
      { date: 'April 22', label: 'London → Johannesburg', description: 'Arrive LHR early morning. Connect LHR → JNB. Land in Johannesburg evening. Overnight at airport hotel or transit lounge.', type: 'travel' },
      { date: 'April 23', label: 'Arrive Timbavati', description: 'Morning flight JNB → HDS (Hoedspruit, conf: XEB2ZT). Transfer to Shindzela Tented Camp. Check in and settle. Afternoon game drive (3–6pm) — first Big 5 sighting chance. Bush dinner under the stars.', type: 'activity' },
      { date: 'April 24', label: 'Full Day Safari — Timbavati', description: 'Early morning game drive (5:30–10am) through open acacia plains. Brunch at camp. Pool and relaxation. Afternoon drive (3–6pm). Night drive for nocturnal predators. Intimate camp with 5–8 guests.', type: 'activity' },
      { date: 'April 25', label: 'Transfer to Klaserie', description: 'Final morning drive at Shindzela. Check out. Transfer to Last Word Kitara in Klaserie Reserve. Afternoon game drive in riverine forest — prime leopard territory.', type: 'activity' },
      { date: 'April 26', label: 'Full Day Safari — Klaserie', description: 'Early morning drive through dense Klaserie vegetation. High leopard density. Brunch at lodge. Spa or pool. Afternoon drive focused on elephant herds and buffalo. Exclusive-use vehicle.', type: 'activity' },
      { date: 'April 27', label: 'Full Day Safari — Klaserie', description: 'Final full day of game drives. Morning drive targeting remaining Big 5 sightings. Leisurely brunch. Afternoon photography-focused drive — golden hour light. Farewell bush dinner.', type: 'activity' },
      { date: 'April 28', label: 'Fly Home — Leg 1', description: 'Morning check-out from Last Word Kitara. Transfer to JNB. Afternoon flight JNB → FRA on Condor DE 2289 (conf: AFR58A). Overnight flight. Parents on same JNB→FRA leg (conf: ARQAHJ).', type: 'travel' },
      { date: 'April 29', label: 'Arrive Home', description: 'Arrive Frankfurt 6:00am. Terry & Janelle: FRA → SEA on DE 2032 at 2:15pm, arrive 3:40pm. Parents: FRA → YYZ on DE 2402 at 3:15pm, arrive 5:55pm. Trip complete.', type: 'travel' },
    ],
    costs: [
      { category: 'hotel', description: 'Shindzela Tent 6 (Terry + Janelle, 2 nts)', cashUsd: 1170, note: 'ZAR 21,680 at booking FX' },
      { category: 'hotel', description: 'Shindzela Tent 5 (parents, 1 nt)', cashUsd: 586, note: 'ZAR 10,840' },
      { category: 'hotel', description: 'Shindzela Tent 1 (parents, 1 nt)', cashUsd: 586, note: 'ZAR 10,840' },
      { category: 'other', description: 'Shindzela conservation levy + vehicle fee', cashUsd: 214, note: 'ZAR 3,950' },
      { category: 'transfer', description: '3-leg ground transfers (third party)', cashUsd: 400 },
      { category: 'hotel', description: 'Last Word Kitara (3 nts)', program: 'Preferred Points', points: 0, note: 'Points count TBD' },
      { category: 'hotel', description: 'Park Hyatt Johannesburg (1 nt, PNR 56460504)', program: 'Hyatt', points: 0, note: 'Points TBD' },
      { category: 'hotel', description: 'Waldorf Astoria Chicago (1 nt)', program: 'Hilton', points: 0, note: 'Points TBD' },
      { category: 'hotel', description: 'Saxon Hotel JNB (1 nt)', cashUsd: 0, note: 'Cash TBD' },
      { category: 'flight', description: 'Flights (BA/Condor/United/Airlink)', note: 'All documented in flights, cash/points not yet captured' },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // JANELLE — SAN FRANCISCO / ART OF ACCOMPLISHMENT — May 2026
  // ═══════════════════════════════════════════════════════
  {
    slug: 'janelle-sf-may-2026',
    title: 'San Francisco & AoA Retreat',
    subtitle: 'Art of the Accomplishment — Sycamore',
    region: 'North America',
    country: 'United States',
    dates: 'May 20–26, 2026',
    month: 'May',
    year: 2026,
    status: 'partially_booked',
    statusLabel: 'Partially Booked',
    travelers: 'Janelle Tam',
    flights: [
      { segment: 1, date: '2026-05-20', route: 'SEA → SFO', time: 'TBD', airline: 'TBD', cabin: 'TBD', status: 'needs_action', notes: 'Janelle outbound to San Francisco — flight not yet booked' },
      { segment: 2, date: '2026-05-26', route: 'SFO → SJD', time: '10:50am → 2:02pm', airline: 'Alaska Airlines', cabin: 'Economy', confirmation: 'K3NPTC', status: 'booked', notes: 'Janelle departs SF to Cabo — ties into Mobulas trip' },
    ],
    hotels: [
      { property: 'Sycamore (AoA Retreat Venue)', location: 'South of San Francisco, CA', checkIn: '2026-05-20', checkOut: '2026-05-24', program: 'N/A', status: 'booked', notes: 'Art of the Accomplishment class retreat. Checkout 3pm May 24. Driving from SFO via National rental car.' },
      { property: 'Ritz-Carlton Half Moon Bay', location: 'Half Moon Bay, CA', checkIn: '2026-05-25', checkOut: '2026-05-26', program: 'Marriott Bonvoy', status: 'pending', notes: 'Tentative — may book alternative if unavailable' },
    ],
    actionItems: [
      { text: 'Book Janelle\'s SEA → SFO flight for May 20', urgent: true },
      { text: 'Confirm National rental car reservation (SFO pickup)', urgent: true },
      { text: 'Book Ritz-Carlton Half Moon Bay May 25–26 (or find alternative)', urgent: true },
      { text: 'Confirm Sycamore retreat hotel details and address', urgent: false },
      { text: 'Plan May 24 evening after checkout — driving back to SF area', urgent: false },
    ],
    intel: [
      { title: 'Trip Structure', content: 'Janelle flies to SFO on May 20 and picks up a National rental car at the airport. She drives south to the Sycamore hotel for the Art of the Accomplishment class retreat (May 21–24). Checkout is 3pm on the 24th, then she drives back toward the SF/Half Moon Bay area. May 25–26 she stays at Ritz-Carlton Half Moon Bay (tentative). On May 26 she drops the rental at SFO and flies SFO → SJD at 10:50am to join Terry for the Cabo/Mobulas trip. The SFO → SJD flight is shared with the Mobulas trip entry.' },
      { title: 'Art of the Accomplishment', content: 'Art of the Accomplishment (AoA) is a personal development program focused on emotional intelligence, authentic connection, and accomplishment methodology. The multi-day retreat format is an immersive container — expect group exercises, coaching sessions, and reflective work. The Sycamore venue south of San Francisco provides a residential retreat setting. Plan for a digital detox mindset during the retreat days (May 21–24).' },
      { title: 'Ritz-Carlton Half Moon Bay', content: 'The Ritz-Carlton Half Moon Bay is a clifftop resort overlooking the Pacific — one of the most dramatic coastal hotel settings in California. Scottish links-style golf courses, Ocean Terrace restaurant, fire pits overlooking the bluffs. Half Moon Bay itself is a charming coastal town: Coastside Trail for walking/biking, Sam\'s Chowder House for lobster rolls, Half Moon Bay Brewing Company. May weather is mild (55–65°F) with possible morning fog burning off by noon. The drive from Half Moon Bay to SFO is only 30 minutes — easy for the May 26 morning flight.' },
      { title: 'Driving Logistics', content: 'National rental car pickup is at SFO — use National\'s Emerald Club for skip-the-counter access. SFO to Sycamore area: ~1–1.5 hours depending on exact location (likely along the coast or in the Santa Cruz mountains). Take Highway 1 south for the scenic coastal route. Sycamore to Half Moon Bay: ~30–45 minutes via Highway 1 north. Half Moon Bay to SFO: 30 minutes via Highway 92. Return the car at SFO before the 10:50am flight — arrive by 8:30am for domestic check-in.' },
    ],
    awardTips: [
      { program: 'Marriott Bonvoy', route: 'Ritz-Carlton Half Moon Bay', cost: 'TBD', note: 'Check points availability for May 25–26. Consider free night certificates if category matches.' },
    ],
    itinerary: [
      { date: 'May 20', label: 'Fly to SF & Drive to Retreat', description: 'Janelle flies SEA → SFO (flight TBD). Pick up National rental car at SFO. Drive south to Sycamore hotel. Check in and settle for retreat.', type: 'travel' },
      { date: 'May 21–24', label: 'Art of the Accomplishment Retreat', description: 'Four-day immersive retreat at Sycamore. Checkout is 3pm on May 24.', type: 'activity' },
      { date: 'May 24', label: 'Drive Back to SF', description: 'Check out of Sycamore by 3pm. Drive back toward San Francisco area. Evening free.', type: 'travel' },
      { date: 'May 25', label: 'Half Moon Bay', description: 'Check into Ritz-Carlton Half Moon Bay (tentative). Relax day before flying to Cabo.', type: 'rest' },
      { date: 'May 26', label: 'Fly to Cabo', description: 'Check out Ritz-Carlton. Drive to SFO, return rental car. SFO → SJD 10:50am → 2:02pm on Alaska (conf: K3NPTC). Meet Terry in Cabo for Mobulas trip.', type: 'travel' },
    ],
    costs: [],
  },

  // ═══════════════════════════════════════════════════════
  // MOBULA RAY EXPEDITION — May 2026
  // ═══════════════════════════════════════════════════════
  {
    slug: 'mobulas-may-2026',
    title: 'Mobula Ray Expedition',
    subtitle: 'Sea of Cortez, Baja California',
    region: 'Central America',
    country: 'Mexico',
    dates: 'May 26–31, 2026',
    month: 'May',
    year: 2026,
    status: 'partially_booked',
    statusLabel: 'Partially Booked',
    travelers: '2 adults',
    heroImage: 'mobula-rays-jumping',
    flights: [
      { segment: 1, date: '2026-05-26', route: 'SEA → SJD', time: '9:25am → 2:00pm', airline: 'Delta Air Lines (DL1914)', cabin: 'Economy', confirmation: 'GMSPZ9', status: 'booked', notes: 'Terry flight' },
      { segment: 2, date: '2026-05-26', route: 'SFO → SJD', time: '10:50am → 2:02pm', airline: 'Alaska Airlines', cabin: 'Economy', confirmation: 'K3NPTC', status: 'booked', notes: 'Janelle flight' },
      { segment: 3, date: '2026-05-31', route: 'SJD → SEA', time: '3:30pm → 8:00pm', airline: 'Alaska Airlines (AS1401)', cabin: 'Economy', confirmation: 'IMDKIR', status: 'booked', notes: 'Terry return' },
      { segment: 4, date: '2026-05-31', route: 'SJD → SEA', time: '3:14pm → 7:53pm', airline: 'Delta Air Lines (DL1837)', confirmation: 'JQDOIY', status: 'booked', notes: 'Alternative return flight' },
    ],
    hotels: [
      { property: 'Park Hyatt Cabo Del Sol', location: 'Cabo San Lucas', checkIn: '2026-05-25', checkOut: '2026-05-27', program: 'Hyatt', status: 'booked', notes: 'Conf: 66455641. Arrives day before flights.' },
    ],
    actionItems: [
      { text: 'Confirm Park Hyatt Cabo booking for May 26–27 (or change hotel)', urgent: true },
      { text: 'Book expedition operator (Pelagic Fleet or Dive Ninja)', urgent: true },
      { text: 'Book La Paz accommodations for expedition days (May 27–30)', urgent: true },
      { text: 'Arrange Cabo → La Paz transfer for May 27', urgent: false },
      { text: 'Bring reef-safe sunscreen and underwater camera gear', urgent: false },
    ],
    intel: [
      { title: 'The Mobula Ray Phenomenon', content: 'The Sea of Cortez hosts one of nature\'s most spectacular seasonal events: the mobula ray aggregation. From late April through June, hundreds of thousands of Munk\'s devil rays (often called mobula rays) migrate through the narrow channel between Baja and mainland Mexico, breaching and jumping in synchronized waves — sometimes leaping 10+ feet out of the water. Late May through early June offers the highest probability of witnessing mass breaching events. The phenomenon is driven by plankton blooms and water temperature. Visibility and sea calmness matter more than lunar phase. This is truly a bucket-list wildlife encounter.' },
      { title: 'Operators & Logistics', content: 'Pelagic Fleet and Dive Ninja Expeditions are the two gold-standard operators for mobula encounters. Pelagic Fleet: Mexican-owned, fast pangas (open boats), marine biologist guides, emphasis on photography. Typical 3-day package includes daily boat trips, snorkeling with mobulas + sea lions + whale sharks, lunch on the water. Cost: ~$350–500/person/day. Dive Ninja: more diving-focused, also does snorkel-only, based in La Paz marina. Both operators are ethical and conservation-minded. Water temperature in late May is 75–80°F — 3mm wetsuit or rashguard is fine. Seasickness is real on the open sea — take Dramamine or Bonine the night before and morning of.' },
      { title: 'La Paz vs. Cabo', content: 'La Paz is the authentic choice: a colonial city on the Sea of Cortez side with the Malecón waterfront promenade, vibrant fish markets, hole-in-the-wall taco spots, and genuine Mexican character. Cabo San Lucas is the resort playground 2.5 hours south. You\'re arriving and staying the first night in Cabo (Park Hyatt), then transferring to La Paz for the expedition days. The Cabo → La Paz drive is scenic (Highway 1, desert and cactus). La Paz dining: Bismark for seafood, Mariscos El Molinito for fish tacos, rooftop bars along the Malecón for sunset.' },
      { title: 'Packing & Preparation', content: 'Essential gear: reef-safe sunscreen (required in Mexican marine parks), underwater camera or GoPro with red filter, rash guard or 3mm wetsuit, polarized sunglasses. Seasickness prep: Bonine or Dramamine (non-drowsy), ginger chews, acupressure wristbands. Hydration is critical — desert climate plus ocean sun is dehydrating. Pack light for La Paz — it\'s casual and warm. Bring a waterproof dry bag for electronics on the boat.' },
    ],
    awardTips: [
      { program: 'Hyatt Points', route: 'Park Hyatt Los Cabos', cost: '~30–40K per night', note: 'Park Hyatt Cabo Del Sol booked (conf: 66455641). Category 7. Good redemption value for a luxury Cabo resort.' },
      { program: 'Delta SkyMiles', route: 'SEA–SJD', note: 'Terry\'s outbound on Delta DL1914. Return on Alaska AS1401 and backup Delta DL1837.' },
      { program: 'Alaska Mileage Plan', route: 'SFO–SJD + SJD–SEA', note: 'Janelle\'s flights on Alaska. Consider Alaska companion fare for future Cabo trips.' },
    ],
    itinerary: [
      { date: 'May 26', label: 'Fly to Cabo', description: 'Terry: SEA 9:45am → SJD 2:10pm. Janelle: SFO 10:50am → SJD 2:02pm (conf: K3NPTC). Meet at Park Hyatt Los Cabos. Check in. Dinner and early night before expedition.', type: 'travel' },
      { date: 'May 27', label: 'Transfer to La Paz & Prep', description: 'Check out Park Hyatt. Transfer Cabo → La Paz (~2.5 hours). Check into La Paz accommodations. Afternoon briefing with expedition operator. Gear check and safety orientation. Explore the Malecón. Early dinner.', type: 'travel' },
      { date: 'May 28', label: 'Expedition Day 1', description: 'Early 5am departure by boat into the Sea of Cortez. 6–8 hours on the water searching for mobula ray aggregations. Snorkeling with rays when schools are located. Possible whale shark or sea lion encounters. Return to port by afternoon.', type: 'activity' },
      { date: 'May 29', label: 'Expedition Day 2', description: 'Second day on the water. Different location based on spotter reports. Peak breaching activity often mid-morning. Underwater photography opportunities. Marine biologist guide context on ray behavior.', type: 'activity' },
      { date: 'May 30', label: 'Expedition Day 3 or Rest', description: 'Optional third expedition day or rest/explore day. La Paz markets, seafood restaurants, sunset on the Malecón. Transfer back to Cabo area if needed for morning flight.', type: 'flexible' },
      { date: 'May 31', label: 'Fly Home', description: 'SJD 11:20am → SEA 3:56pm on Alaska (conf: IMDKIR). Home by evening.', type: 'travel' },
    ],
    costs: [
      { category: 'flight', description: 'SEA→SJD Delta DL1914 First (Terry, May 25, PNR GMSPZ9)', cashUsd: 380, note: '$380.02 cash + $498.96 eCredit applied' },
      { category: 'hotel', description: 'Park Hyatt Cabo Del Sol 2 nts (PNR 66455641)', program: 'Hyatt', points: 0, note: 'Points TBD' },
      { category: 'flight', description: 'Other flights (SFO→SJD, returns)', note: 'Costs not yet documented' },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // HORSE TREKKING — July/August 2026
  // ═══════════════════════════════════════════════════════
  {
    slug: 'stans-aug-2026',
    title: 'Horse Trekking in the Stans',
    subtitle: 'Kyrgyzstan & Kazakhstan',
    region: 'Central Asia',
    country: 'Kyrgyzstan & Kazakhstan',
    dates: 'July 31 – August 12, 2026',
    month: 'August',
    year: 2026,
    status: 'partially_booked',
    statusLabel: 'Partially Booked',
    travelers: '2 adults (Terry & Janelle)',
    heroImage: 'kyrgyzstan-mountains-horses',
    flights: [
      { segment: 1, date: '2026-07-31', route: 'SEA → IST', time: '19:10 → 17:00 +1', airline: 'Turkish Airlines', cabin: 'Business', confirmation: 'S3BPNY', status: 'booked', notes: 'Seats 4A & 6A' },
      { segment: 2, date: '2026-08-01', route: 'IST → FRU (Bishkek)', time: '20:20 → 04:30 +1', airline: 'Turkish Airlines', aircraft: 'A321', cabin: 'Business', confirmation: 'RP7MM5', status: 'booked', notes: '35K + $121/person' },
      { segment: 3, date: '2026-08-12', route: 'ALA → IST', time: '9:00am → 1:15pm', airline: 'Turkish Airlines (TK0353)', cabin: 'Business', confirmation: 'VT8IUE', status: 'booked', notes: 'Almaty to Istanbul. 1hr 40min layover.' },
      { segment: 4, date: '2026-08-12', route: 'IST → SEA', time: '2:55pm → 5:15pm', airline: 'Turkish Airlines (TK203)', cabin: 'Business', confirmation: 'TD67GM', status: 'booked', notes: '12hr 20min flight. Direct Istanbul to Seattle.' },
      { segment: 5, date: '2026-08-12', route: 'HEL → SEA', time: '4:25pm → 4:00pm', airline: 'Finnair (AY33)', confirmation: 'DFMG2R', status: 'booked', notes: 'Ticketed as Qantas. Backup/alternative return. Also conf 96MPQQ.' },
    ],
    hotels: [
      { property: 'TBD — Bishkek', location: 'Bishkek, Kyrgyzstan', checkIn: '2026-08-02', checkOut: '2026-08-03', status: 'not_booked', notes: 'Need to book — pre-trek acclimatization night' },
      { property: 'Yurt stays (Song-Kol Lake)', location: 'Song-Kol Lake, Kyrgyzstan', status: 'pending', notes: 'Included with trek operator booking' },
      { property: 'TBD — Almaty', location: 'Almaty, Kazakhstan', status: 'not_booked', notes: 'Post-trek recovery nights before Aug 12 departure' },
    ],
    actionItems: [
      { text: 'Book IST → SEA return flight for Aug 12 (FinnAir cancelled — need replacement)', urgent: true },
      { text: 'Cancel Janelle\'s Qantas booking DFMG2R (90K + €68.82)', urgent: true },
      { text: 'Book Bishkek hotel for Aug 2 arrival night', urgent: true },
      { text: 'Book Almaty hotel for Aug 6–12 (post-trek recovery)', urgent: true },
      { text: 'Research and confirm horse trekking operator', urgent: true },
      { text: 'Verify Kyrgyzstan e-Visa process', urgent: false },
      { text: 'Confirm Kazakhstan visa-free entry', urgent: false },
    ],
    intel: [
      { title: 'The Horse in Kyrgyz Culture', content: 'In Kyrgyzstan, the horse is central to identity, spirituality, and survival on the high Tian Shan mountains. Kyrgyz nomadic herders have lived on horseback for over 1,000 years. The phrase "Kyrgyz without a horse is not Kyrgyz" encapsulates the cultural weight. Traditional games like buzkashi remain central to festivals. Staying in a yurt community and learning to ride in Kyrgyz tradition—eating fermented horse milk (kumis) with herders, sleeping in a felt home—is an immersive cultural experience. August is peak trekking season.' },
      { title: 'Song-Kol Lake: High Alpine Trekking', content: 'Song-Kol Lake sits at 10,000 feet in central Kyrgyzstan—a pristine alpine lake ringed by snow-capped peaks and endless grassland. The 3–4 day horse trek features riding across high passes (Tian Shan range) with nights in yurts. Guides are Kyrgyz herders, meals are simple (bread, cheese, yak butter, mutton). August offers warm days (60–70°F) but nights drop to 40°F. Altitude sickness is possible; acclimatize in Bishkek first.' },
      { title: 'Bishkek & Almaty', content: 'Bishkek (2,600 ft) is your acclimatization point. Osh Bazaar is the city\'s soul: spices, textiles, dried fruits, leather goods, street food. Almaty, Kazakhstan\'s former capital, has strong coffee culture, hiking access, and Green Bazaar which rivals Osh Bazaar for sensory overload. Both cities offer great post-trek recovery.' },
    ],
    awardTips: [
      { program: 'Turkish Airlines', route: 'SEA–IST–FRU', cost: '35K + $121/person', note: 'Already booked outbound. Return IST–SEA needs booking.' },
    ],
    itinerary: [
      { date: 'July 31', label: 'Depart Seattle', description: 'SEA 19:10 → IST 17:00 next day (conf: S3BPNY). Seats 4A & 6A. Overnight flight.', type: 'travel' },
      { date: 'August 1', label: 'Istanbul → Bishkek', description: 'Arrive IST 17:00. Layover. Depart IST 20:20 → FRU (Bishkek) 04:30 on Aug 2 (conf: RP7MM5). A321.', type: 'travel' },
      { date: 'August 2', label: 'Arrive Bishkek', description: 'Land at 4:30am. Check into hotel. Sleep and acclimatize. Afternoon: Osh Bazaar — spices, nan bread, kumis. Meet trek operator for briefing and gear check.', type: 'rest' },
      { date: 'August 3', label: 'Drive to Trailhead', description: 'Morning drive from Bishkek toward Song-Kol region (5–6 hours). Meet horses and Kyrgyz herder guides. Short afternoon ride to first yurt camp.', type: 'travel' },
      { date: 'August 4', label: 'Horse Trek — Day 1', description: '5–6 hours in the saddle crossing high passes. Gradual altitude gain toward Song-Kol (10,000 ft). Lunch at herder\'s yurt. Simple dinner — bread, cheese, mutton stew.', type: 'activity' },
      { date: 'August 5', label: 'Horse Trek — Day 2', description: 'Ride along shores of Song-Kol Lake. Blue alpine water, snow-capped peaks. Visit nomadic herding families. Beshbarmak dinner. Night in lakeside yurt — extraordinary stars.', type: 'activity' },
      { date: 'August 6', label: 'Trek Complete — Transfer', description: 'Final morning ride. Descend from high passes. Vehicle transfer back. Trek done. Hot shower and real bed.', type: 'activity' },
      { date: 'Aug 7–11', label: 'Recovery & Explore', description: 'Travel to Almaty. Green Bazaar, coffee culture, hiking. Recovery days before departure. Explore Kyrgyz and Kazakh cuisine.', type: 'flexible' },
      { date: 'August 12', label: 'Fly Home', description: 'ALA 9:00am → IST 13:25. Connect IST → SEA (need to book). Home by evening.', type: 'travel' },
    ],
    costs: [
      { category: 'flight', description: 'IST→FRU Turkish Business (2 pax, PNR RP7MM5)', points: 35000, program: 'Turkish Miles&Smiles', cashUsd: 242, note: '$121/pp × 2' },
      { category: 'flight', description: 'Other Turkish segments (SEA→IST, ALA→IST, IST→SEA)', note: 'Cash/points not yet documented' },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // IOP — September/October 2026 (Indonesia + Taipei)
  // ═══════════════════════════════════════════════════════
  {
    slug: 'iop-sep-2026',
    title: 'IOP — Indonesia & Taipei',
    subtitle: 'Alor Diving + Taipei Stopover',
    region: 'Southeast Asia',
    country: 'Indonesia & Taiwan',
    dates: 'September 24 – October 13, 2026',
    month: 'September',
    year: 2026,
    status: 'partially_booked',
    statusLabel: 'Partially Booked',
    travelers: 'Terry',
    flights: [
      { segment: 1, date: '2026-09-24', route: 'SEA → SIN', time: '10:15am → 17:35 +1', airline: 'Singapore Airlines', cabin: 'Business', confirmation: 'F6MWR7', status: 'booked', notes: 'Arrive Singapore Sept 25' },
      { segment: 2, date: '2026-09-25', route: 'SIN → CGK', time: '18:30 → 19:20', airline: 'Singapore Airlines', cabin: 'Economy', confirmation: 'DISMSE', status: 'booked', notes: 'Same evening connection' },
      { segment: 3, date: '2026-09-26', route: 'CGK → KOE', time: '7:05am → 11:05am', airline: 'Garuda Indonesia', cabin: 'Economy', confirmation: 'AENN85', status: 'booked', notes: 'Jakarta to Kupang' },
      { segment: 4, date: '2026-09-27', route: 'KOE → ARD', time: '8:30am → 9:30am', airline: 'TransNusa', cabin: 'Economy', confirmation: 'HKSRAV', status: 'booked', notes: 'Kupang to Alor' },
      { segment: 5, date: '2026-10-09', route: 'AMQ → CGK', time: '4:15pm → 5:40pm', airline: 'Garuda Indonesia', cabin: 'Economy', confirmation: 'DOSB8U', status: 'booked', notes: 'Ambon to Jakarta' },
      { segment: 6, date: '2026-10-10', route: 'CGK → TPE', time: '2:40pm → 9:10pm', airline: 'Air France', cabin: 'Business', confirmation: 'YRIBKT', status: 'booked', notes: 'Jakarta to Taipei' },
      { segment: 7, date: '2026-10-13', route: 'TPE → SEA', time: '15:15 → 21:00', airline: 'EVA Air', cabin: 'Business', confirmation: 'FA6F6L', status: 'booked', notes: 'Alt: 21:50 LAX + connection, or 8:45am departure' },
    ],
    hotels: [
      { property: 'Park Hyatt Jakarta', location: 'Jakarta, Indonesia', checkIn: '2026-09-25', checkOut: '2026-09-26', program: 'Hyatt', status: 'not_booked', notes: 'Overnight transit — needs booking' },
      { property: 'Dive Operator Accommodation', location: 'Alor & surrounds, Indonesia', checkIn: '2026-09-27', checkOut: '2026-10-09', status: 'booked', notes: '12 nights, 4,900 euros. Liveaboard or dive resort.' },
      { property: 'Park Hyatt Jakarta', location: 'Jakarta, Indonesia', checkIn: '2026-10-09', checkOut: '2026-10-10', program: 'Hyatt', status: 'not_booked', notes: 'Overnight before Taipei flight — needs booking' },
      { property: 'TBD — Taipei', location: 'Taipei, Taiwan', checkIn: '2026-10-10', checkOut: '2026-10-13', status: 'not_booked', notes: '3 nights in Taipei' },
    ],
    actionItems: [
      { text: 'Book Park Hyatt Jakarta for Sept 25 overnight', urgent: true },
      { text: 'Book Park Hyatt Jakarta for Oct 9 overnight', urgent: true },
      { text: 'Book Taipei hotel for Oct 10–13 (3 nights)', urgent: true },
      { text: 'Confirm dive operator details and departure from Alor Sept 27', urgent: false },
      { text: 'Decide TPE → SEA routing: direct 15:15 or via LAX', urgent: false },
    ],
    intel: [
      { title: 'Alor — World-Class Diving', content: 'Alor is one of Indonesia\'s most remote and pristine diving destinations, located in the Lesser Sunda Islands east of Flores. The waters around Alor are known for extraordinary biodiversity, strong currents bringing pelagic species, and macro diving that rivals Lembeh Strait. Expect manta rays, hammerhead sharks, pygmy seahorses, and vibrant coral walls. The 12-night expedition covers multiple dive sites across the Alor archipelago. Water temperatures are 75–82°F; visibility is typically 60–100+ feet.' },
      { title: 'Getting to Alor', content: 'The route is complex: SEA → SIN → CGK (Jakarta) overnight → KOE (Kupang) → ARD (Alor). Each leg is a step deeper into eastern Indonesia. Kupang is the capital of East Nusa Tenggara province and serves as the gateway to Alor. The KOE → ARD flight is a small regional hop. Return route goes through Ambon (AMQ), suggesting the dive expedition moves through the Banda Sea.' },
      { title: 'Taipei Stopover', content: 'Three nights in Taipei (Oct 10–13) is a perfect decompression stop. Night markets (Shilin, Raohe), Din Tai Fung original location, tea houses in Jiufen, and world-class coffee culture. October weather is pleasant (75–85°F). Taipei is walkable with excellent MRT transit.' },
    ],
    awardTips: [
      { program: 'Singapore Airlines KrisFlyer', route: 'SEA–SIN', cost: 'Booked', note: 'SQ Business outbound — world-class product. Conf: F6MWR7.' },
      { program: 'Air France Flying Blue', route: 'CGK–TPE', cost: 'Booked', note: 'AF Business Jakarta to Taipei. Conf: YRIBKT.' },
      { program: 'EVA Air', route: 'TPE–SEA', cost: 'Booked', note: 'EVA Business return. Conf: FA6F6L.' },
      { program: 'Hyatt Points', route: 'Park Hyatt Jakarta (x2)', cost: '~15–20K per night', note: 'Two overnight transits in Jakarta. Good value redemption.' },
    ],
    itinerary: [
      { date: 'Sept 24', label: 'Depart Seattle', description: 'SEA 10:15am → SIN, arriving Sept 25 at 17:35. Long-haul flight.', type: 'travel' },
      { date: 'Sept 25', label: 'Singapore → Jakarta', description: 'Arrive SIN 17:35. Connect SIN 18:30 → CGK 19:20. Check into Park Hyatt Jakarta (needs booking). Quick overnight.', type: 'travel' },
      { date: 'Sept 26', label: 'Jakarta → Kupang', description: 'Early morning Garuda CGK 7:05am → KOE 11:05am (conf: AENN85). Arrive Kupang. Overnight or connect depending on schedule.', type: 'travel' },
      { date: 'Sept 27', label: 'Kupang → Alor — Diving Begins', description: 'KOE 8:30am → ARD 9:30am (conf: HKSRAV). Arrive Alor. Check in with dive operator. Orientation dive. 12-night expedition begins. 4,900 euros all-in.', type: 'activity' },
      { date: 'Sept 28 – Oct 8', label: '11 Days of Diving', description: 'Daily diving across Alor archipelago and Banda Sea. Manta rays, hammerheads, pygmy seahorses, vibrant coral walls. Multiple dive sites. Moving through eastern Indonesian waters toward Ambon.', type: 'activity' },
      { date: 'Oct 9', label: 'Diving Ends — Fly to Jakarta', description: 'Expedition complete. Garuda AMQ 4:15pm → CGK 5:40pm (conf: DOSB8U). Check into Park Hyatt Jakarta (needs booking). Decompress.', type: 'travel' },
      { date: 'Oct 10', label: 'Jakarta → Taipei', description: 'Air France CGK 2:40pm → TPE 9:10pm (conf: YRIBKT). Arrive Taipei. Check into hotel. Late-night street food at Raohe Night Market.', type: 'travel' },
      { date: 'Oct 11–12', label: 'Explore Taipei', description: 'Night markets, Din Tai Fung, tea houses in Jiufen, coffee shops. MRT everywhere. Decompress from 12 days of diving. Eat everything.', type: 'activity' },
      { date: 'Oct 13', label: 'Fly Home', description: 'TPE 15:15 → SEA 21:00 (conf: FA6F6L). Home by evening. Trip complete — 19 days.', type: 'travel' },
    ],
    costs: [
      { category: 'activity', description: 'Alor dive operator 12 nts all-inclusive', cashUsd: 5500, note: '€4,900 approx' },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // SOUTH KOREA — October 2026 (Janelle solo)
  // ═══════════════════════════════════════════════════════
  {
    slug: 'korea-oct-2026',
    title: 'South Korea',
    subtitle: 'Seoul — Janelle Solo Trip',
    region: 'East Asia',
    country: 'South Korea',
    dates: 'October 2026',
    month: 'October',
    year: 2026,
    status: 'planning',
    statusLabel: 'Planning',
    travelers: 'Janelle (solo)',
    heroImage: 'seoul-autumn',
    flights: [
      { segment: 1, date: 'TBD', route: 'SEA → ICN', status: 'pending', notes: 'Award booking via Aeroplan, ANA, or Korean Air SkyPass' },
    ],
    hotels: [
      { property: 'Park Hyatt Seoul or Boutique Alternative', location: 'Hannam-dong, Seoul', status: 'not_booked', notes: 'Hannam-dong is the design/dining hub' },
    ],
    actionItems: [
      { text: 'Confirm travel dates', urgent: false },
      { text: 'Search award availability: Aeroplan, ANA, Korean Air SkyPass', urgent: false },
      { text: 'Book hotel in Hannam-dong', urgent: false },
      { text: 'Research K-beauty shopping and café scene', urgent: false },
    ],
    intel: [
      { title: 'Seoul Neighborhoods', content: 'Hannam-dong is Seoul\'s creative heart — design studios, galleries, elevated dining, and the Blue Bottle flagship. Ikseon-dong is the hanok café district: narrow lanes, 100-year-old wood houses converted into specialty coffee shops and wine bars. Yeonnam-dong is the indie food and music neighborhood with Gyeongui Line Forest Park running through it. Seongsu-dong is Seoul\'s Brooklyn — converted warehouses, craft breweries, concept stores. October is perfection: 55–65°F, crisp mornings, autumn foliage peaks mid-to-late October. Namsan and Bukhansan are spectacular for fall colors.' },
      { title: 'K-Beauty & Shopping', content: 'Garosugil boulevard for K-beauty flagships: Sulwhasoo flagship (Hannam-dong), Amorepacific headquarters building (Yongsan, designed by David Chipperfield — the architecture alone is worth the visit), Innisfree Green Café. Myeongdong is the mass-market beauty strip — Olive Young, Etude House, Tony Moly. For curated high-end: Gentle Monster flagship in Hannam (eyewear-as-art-installation). Lotte Duty Free for tax-free beauty shopping on departure.' },
      { title: 'Food Culture', content: 'Gwangjang Market is Seoul\'s oldest running market — must-have: bindaetteok (mung bean pancakes, stall row along the center aisle), mayak gimbap (addictive mini rolls), raw beef yukhoe. For modern Korean: Jungsik (2 Michelin stars, Cheongdam-dong) or Mingles (1 Michelin star, Hannam-dong). Coffee culture is world-class — Fritz Coffee, Center Coffee, Anthracite in converted factories. Download Kakao T (taxi, faster than Uber in Seoul), Naver Maps (Google Maps is unreliable in Korea), get a T-money card at any convenience store for subway/bus.' },
      { title: 'October Autumn Strategy', content: 'Mid-to-late October is peak autumn foliage in Seoul. Best spots: Changdeokgung Secret Garden (book the English tour — limited spots), Namsan Tower trail (take the cable car up, walk down through flaming maples), Bukhansan National Park (Bukhansanseong trail for panoramic fall views). For a day trip: Nami Island (2hr from Seoul) is the quintessential Korean autumn postcard. Gyeongbokgung Palace with hanbok rental is a classic — wearing hanbok gets you free palace entry.' },
    ],
    awardTips: [
      { program: 'Aeroplan', route: 'SEA–ICN', cost: '~65K AP miles RT', note: 'Book early for October; Asia routes fill quickly' },
      { program: 'Korean Air SkyPass', route: 'SEA–ICN', cost: '~63K SkyPass miles RT', note: 'Check if Janelle has Korean Air status' },
    ],
    itinerary: [
      { date: 'Day 1', label: 'Fly to Seoul', description: 'Depart SEA → ICN. Long-haul flight.', type: 'travel' },
      { date: 'Day 2', label: 'Arrive Seoul', description: 'Land at Incheon. AREX to Seoul Station. Check into Hannam-dong hotel. Rest. Evening walk through Itaewon.', type: 'travel' },
      { date: 'Day 3', label: 'Hannam-dong & Ikseon-dong', description: 'Morning coffee and galleries in Hannam-dong. Afternoon hanok cafés in Ikseon-dong. Dinner at Gwangjang Market.', type: 'activity' },
      { date: 'Day 4', label: 'K-Beauty & Garosugil', description: 'Morning at Garosugil — K-beauty flagships. Lunch at a design café. Afternoon Myeongdong shopping. Evening wine bar.', type: 'activity' },
      { date: 'Day 5', label: 'Autumn Foliage', description: 'Morning hike up Namsan for foliage views. Han River golden hour. Lunch in Yeonnam-dong. Afternoon at Leeum Museum.', type: 'activity' },
      { date: 'Day 6', label: 'Flexible Day', description: 'Day trip to DMZ or Bukchon Hanok Village. Or slow café morning and street food crawl.', type: 'flexible' },
      { date: 'Day 7', label: 'Depart Seoul', description: 'Final morning shopping. AREX to Incheon. Fly ICN → SEA.', type: 'travel' },
    ],
    costs: [],
  },
  // AUSTRALIA — November 2026

  // ═══════════════════════════════════════════════════════
  // SINGAPORE, MALDIVES & SRI LANKA — Dec 2026 / Jan 2027
  // ═══════════════════════════════════════════════════════
  {
    slug: 'singapore-maldives-dec-2026',
    title: 'Singapore, Maldives & Sri Lanka',
    subtitle: 'Holiday Season — Three Countries',
    region: 'Asia & Indian Ocean',
    country: 'Singapore, Maldives & Sri Lanka',
    dates: 'December 24, 2026 – January 4, 2027',
    month: 'December',
    year: 2026,
    status: 'partially_booked',
    statusLabel: 'Partially Booked',
    travelers: 'TBD (likely 2–4)',
    heroImage: 'singapore-gardens-night',
    flights: [
      { segment: 1, date: '2026-12-24', route: 'SEA → SIN', time: '8:45am → 5:45pm +1', airline: 'Singapore Airlines (SQ027)', cabin: 'Business', confirmation: 'F6MWR7', status: 'booked', notes: 'Christmas Eve departure. 17hr flight. SQ Business is world-class — 1-2-1 layout.' },
      { segment: 2, date: '2026-12-28', route: 'SIN → MLE', status: 'needs_action', notes: 'Need to book Singapore to Malé. Check SQ or budget carriers (Scoot). ~4.5hr flight.' },
      { segment: 3, date: '2027-01-01', route: 'MLE → CMB', status: 'needs_action', notes: 'Need to book Malé to Colombo for Sri Lanka leg. ~1.5hr flight. SriLankan Airlines or Maldivian.' },
      { segment: 4, date: '2027-01-03', route: 'CMB → DOH', time: '10:15am → 12:45pm', airline: 'Qatar Airways (QR665)', cabin: 'Business', confirmation: '9YPE29', status: 'booked', notes: '5hr flight. 19hr layover in Doha — explore or Al Mourjan lounge.' },
      { segment: 5, date: '2027-01-04', route: 'DOH → SEA', time: '7:55am → 11:40am', airline: 'Qatar Airways (QR719)', cabin: 'Business', confirmation: '9BHJHH', status: 'booked', notes: 'Qsuites if available. Also on conf 9YPE29. Home by lunch.' },
    ],
    hotels: [
      { property: 'Andaz Singapore', location: 'Kampong Glam, Singapore', checkIn: '2026-12-25', checkOut: '2026-12-28', program: 'Hyatt', status: 'booked', notes: 'Conf: 30914538. Boutique-style Hyatt in Kampong Glam — Arab Street, Haji Lane, Sultan Mosque. Rooftop pool with skyline views.' },
      { property: 'Park Hyatt Maldives Hadahaa', location: 'Gaafu Alifu Atoll, Maldives', checkIn: '2026-12-28', checkOut: '2027-01-01', program: 'Hyatt', status: 'booked', notes: 'Conf: 25671158. Remote southern atoll — 50 villas, world-class house reef. Overwater or beach villa. NYE in the Maldives.' },
      { property: 'TBD — Sri Lanka', location: 'South Coast or Hill Country, Sri Lanka', checkIn: '2027-01-01', checkOut: '2027-01-03', status: 'not_booked', notes: 'Need to book — 2 nights. Options: Weligama (south coast beach + surfing), Galle (Dutch fort, boutique hotels), or Kandy/Ella (hill country tea plantations). CMB departure is Jan 3 at 10:15am.' },
      { property: 'TBD — Doha Layover', location: 'Doha, Qatar', checkIn: '2027-01-03', checkOut: '2027-01-04', status: 'not_booked', notes: '19hr Doha layover. Options: Park Hyatt Doha, Mandarin Oriental Doha, or stay in Al Mourjan Business Lounge (newly expanded).' },
    ],
    actionItems: [
      { text: 'Book SIN → MLE flight for Dec 28', urgent: true },
      { text: 'Book MLE → CMB flight for Jan 1 (Maldives to Sri Lanka)', urgent: true },
      { text: 'Book Sri Lanka accommodations for Jan 1–3 (2 nights)', urgent: true },
      { text: 'Decide Sri Lanka itinerary: south coast (Galle/Weligama) vs hill country (Kandy/Ella)', urgent: true },
      { text: 'Book Doha layover hotel or confirm Al Mourjan lounge plan', urgent: false },
      { text: 'Confirm Park Hyatt Maldives villa type (overwater vs beach)', urgent: false },
      { text: 'Research Maldives visa (free on arrival for US) and Sri Lanka ETA', urgent: false },
      { text: 'Reserve NYE dinner at Park Hyatt Maldives', urgent: false },
    ],
    intel: [
      { title: 'Singapore: Hawker Centres & Neighborhoods', content: 'Singapore\'s food culture is the trip\'s opening act. Must-hit hawker centres: Maxwell Food Centre (Tian Tian chicken rice — the stall that won the Michelin star), Old Airport Road (broadest selection, locals\' favorite), Chinatown Complex (1,000 stalls, char kway teow at stall #2-30). Tiong Bahru is the coffee and kaya toast neighborhood — 40 Hands, Nylon Coffee. Joo Chiat/Katong for Peranakan shophouses, laksa at 328 Katong Laksa. Gardens by the Bay Supertree light show at 7:45pm and 8:45pm nightly. Christmas decorations along Orchard Road are spectacular in late December.' },
      { title: 'Park Hyatt Maldives Hadahaa', content: 'Hadahaa is the remote, intimate option in the Maldives — located in the southern Gaafu Alifu Atoll, far from the crowded atolls near Malé. Only 50 villas on the island. The house reef is exceptional: step off your overwater villa deck and snorkel over pristine coral with reef sharks, rays, and turtles. The dive center offers PADI courses and guided dives to nearby channels with manta rays and whale sharks. December 28 – January 1 is peak season with perfect weather: calm seas, 85°F, minimal rain. NYE dinner on the beach is a resort highlight. Note: getting to Hadahaa requires a domestic flight from Malé to Kooddoo (55 min) + speedboat (15 min) — the resort arranges this.' },
      { title: 'Sri Lanka: The Missing Piece', content: 'The trip ends with 2 nights in Sri Lanka (Jan 1–3) before the CMB → DOH flight. Two options: (1) SOUTH COAST — Galle Fort is a UNESCO Dutch colonial fort with boutique hotels, sunset cocktails on the ramparts, and the best food scene outside Colombo. Weligama is nearby for beach vibes and surfing. (2) HILL COUNTRY — Kandy (Temple of the Tooth, botanical gardens) or Ella (tea plantations, Nine Arches Bridge) for a complete change of pace. South coast is easier given the Jan 3 morning flight from Colombo (2.5hr drive). Hill country is 4–5 hours. Internal transport: hire a car + driver (~$50–70/day, the standard way to travel Sri Lanka).' },
      { title: 'Doha Layover — 19 Hours', content: 'With 19 hours in Doha (arrive 12:45pm, depart 7:55am next day), you can explore the city. Souq Waqif is the atmospheric old market — spice stalls, falcon sellers, alley restaurants serving machboos (Qatari rice dish). The Museum of Islamic Art (I.M. Pei designed) is world-class and free. The Pearl-Qatar is the modern waterfront district. Qatar Airways Business passengers have access to Al Mourjan Lounge (recently expanded — spa, quiet rooms, à la carte dining). If staying overnight: Park Hyatt Doha is excellent.' },
    ],
    awardTips: [
      { program: 'Hyatt Points', route: 'Andaz SIN + Park Hyatt MLE', cost: '12–15K (Andaz) + 25–30K (PH Maldives) per night', note: '~100–120K total for all Hyatt nights. Peak holiday pricing. Book confirmations already in hand.' },
      { program: 'Singapore Airlines KrisFlyer', route: 'SEA–SIN', cost: 'Booked', note: 'SQ Business outbound confirmed. World-class product.' },
      { program: 'Qatar Airways Avios', route: 'CMB–DOH–SEA', cost: 'Booked', note: 'Return on Qatar Business. Qsuites if lucky — check seat map closer to departure.' },
      { program: 'Hyatt Points', route: 'Park Hyatt Doha', cost: '~20–25K per night', note: 'For the Doha layover. Alternative: skip hotel and use Al Mourjan lounge for 19 hours.' },
    ],
    itinerary: [
      { date: 'Dec 24', label: 'Fly to Singapore', description: 'SEA 8:45am → SIN 5:45pm +1 on Singapore Airlines SQ027 Business (conf: F6MWR7). Christmas Eve in the air with SQ\'s legendary service. Book of Wonders menu. Arrive Christmas Day evening.', type: 'travel' },
      { date: 'Dec 25', label: 'Christmas in Singapore', description: 'Arrive 5:45pm. Check into Andaz Singapore (conf: 30914538) in Kampong Glam. Christmas evening walk along Orchard Road lights. Late dinner at hawker centre or hotel.', type: 'travel' },
      { date: 'Dec 26', label: 'Hawker Centre Day', description: 'Morning: Tiong Bahru coffee + kaya toast at 40 Hands. Joo Chiat/Katong for Peranakan heritage + 328 Katong Laksa. Afternoon: Gardens by the Bay — Cloud Forest dome. Evening: Chinatown Complex hawker crawl. Supertree light show at 8:45pm.', type: 'activity' },
      { date: 'Dec 27', label: 'Singapore Explore', description: 'Maxwell Food Centre for Tian Tian chicken rice. Marina Bay Sands observation deck. Little India and Haji Lane shopping. Evening: cocktails at Atlas Bar (Art Deco gin palace) or Lau Pa Sat satay street.', type: 'activity' },
      { date: 'Dec 28', label: 'Fly to Maldives', description: 'Fly SIN → MLE (needs booking, ~4.5hr). Domestic flight MLE → Kooddoo (55 min, resort arranges). Speedboat to Park Hyatt Hadahaa (15 min). Check in. First swim in the house reef. Sunset cocktails on the deck.', type: 'travel' },
      { date: 'Dec 29–30', label: 'Maldives Paradise', description: 'Overwater villa life. Morning snorkeling on the house reef (reef sharks, turtles). Afternoon dive excursion to nearby channels. Spa treatments. Beach dinner. Dec 30: guided manta ray snorkel trip if conditions are right.', type: 'rest' },
      { date: 'Dec 31', label: 'New Year\'s Eve — Maldives', description: 'Morning diving or kayaking. Afternoon relaxation. NYE gala dinner on the beach at Park Hyatt. Countdown under Maldivian stars. Ring in 2027 in paradise.', type: 'activity' },
      { date: 'Jan 1', label: 'Fly to Sri Lanka', description: 'Fly MLE → CMB (needs booking, ~1.5hr). Arrive Colombo. Drive to south coast — Galle Fort (2.5hr) or Weligama. Check into boutique hotel. Evening sunset on the ramparts of Galle Fort with a cocktail.', type: 'travel' },
      { date: 'Jan 2', label: 'Sri Lanka Day', description: 'Explore Galle Fort — Dutch architecture, boutique shops, the lighthouse walk. Or beach day at Weligama. Seafood dinner at a south coast restaurant. Pack for early departure.', type: 'activity' },
      { date: 'Jan 3', label: 'Fly Home — Leg 1', description: 'Early morning drive Galle → Colombo (2.5hr, depart by 6am). CMB 10:15am → DOH 12:45pm on Qatar QR665 (conf: 9YPE29). 19hr Doha layover. Explore Souq Waqif and Museum of Islamic Art, or rest in Al Mourjan Lounge.', type: 'travel' },
      { date: 'Jan 4', label: 'Arrive Home', description: 'DOH 7:55am → SEA 11:40am on Qatar QR719 Business (conf: 9BHJHH / 9YPE29). Home by lunch. 12-day, 3-country holiday season trip complete.', type: 'travel' },
    ],
    costs: [
      { category: 'hotel', description: 'Andaz Singapore + Park Hyatt Maldives (Hyatt points)', program: 'Hyatt', points: 0, note: 'Points counts TBD — confirmations in hand' },
    ],
  },
  // HAWAII — May 2026
  // TAIWAN — May/June 2026
  // JAPAN SUMMER — July 2026
  // LAS VEGAS — August 2026
  // ASPEN — August 2026
  // STARLUX RETURN — September 2026
  // LAS VEGAS — September 2026
  // LAS VEGAS — October 2026
  // TAIPEI — November 2026

  // ═══════════════════════════════════════════════════════
  // CROATIA — November 2026
  // ═══════════════════════════════════════════════════════
  {
    slug: 'croatia-nov-2026',
    title: 'Croatia',
    subtitle: 'Zagreb via Istanbul — Canceled (mistake fare) · Turkish Airlines cancelled this booking (PNR UG8BHN) after their April 2026 pricing-system error on Vancouver-Europe routes.',
    region: 'Europe',
    country: 'Croatia',
    dates: 'November 21–23, 2026',
    month: 'November',
    year: 2026,
    status: 'canceled',
    statusLabel: 'Canceled (mistake fare)',
    travelers: 'TBD',
    heroImage: 'croatia-dubrovnik',
    flights: [
      { segment: 1, date: '2026-11-21', route: 'SEA → IST', time: '7:00pm → 6:00pm +1', airline: 'Turkish Airlines (TK204)', cabin: 'Business', confirmation: 'UG8BHN', status: 'booked', notes: '12hr flight. TK Business lounge at IST is world-class — use the 14hr layover.' },
      { segment: 2, date: '2026-11-23', route: 'IST → ZAG', time: '8:20am → 8:30am', airline: 'Turkish Airlines (TK1053)', confirmation: 'UG8BHN', status: 'booked', notes: '2hr 10min flight to Zagreb. Local time same (CET).' },
    ],
    hotels: [
      { property: 'TBD — Zagreb', location: 'Zagreb, Croatia', status: 'not_booked', notes: 'Look at Esplanade Zagreb Hotel (historic Art Deco, near train station) or boutique options in Upper Town (Gornji Grad). November is Advent Market season — book central.' },
    ],
    actionItems: [
      { text: 'Book Zagreb hotel — Advent Market season fills fast', urgent: true },
      { text: 'Book return flights ZAG → SEA (or extend to Dubrovnik/Split)', urgent: true },
      { text: 'Decide trip duration — currently only shows arrival day', urgent: true },
      { text: 'Plan Istanbul layover activities (14hrs = enough for Sultanahmet)', urgent: false },
      { text: 'Research Zagreb Advent Market dates and events (typically late Nov through Jan)', urgent: false },
    ],
    intel: [
      { title: 'Zagreb Advent & Christmas Markets', content: 'Zagreb\'s Advent market has been voted Europe\'s best Christmas market multiple years running — and late November is the opening weekend. Ban Jelačić Square transforms into a winter wonderland with mulled wine (kuhano vino), štrukli (cheese pastry), and artisan crafts. Zrinjevac Park gets a light tunnel. The ice rink at King Tomislav Square is magical. Upper Town (Gornji Grad) has intimate smaller markets with better food and fewer crowds. This timing is perfect.' },
      { title: 'Istanbul Layover — 14 Hours', content: 'With 14 hours in Istanbul, you have time to explore. Turkish Airlines Business passengers get free Istanbul Touristanbul guided tours (book in advance). Otherwise: taxi to Sultanahmet (30 min from IST airport), see Hagia Sophia, Blue Mosque, Grand Bazaar, and grab a kebab at Sultanahmet Köftecisi. Istanbul\'s new airport (IST) is far from the center — budget 45–60 min each way. Alternatively, the Turkish Airlines Business Lounge at IST is legendary: spa, sleep rooms, full restaurant, golf simulator. You could comfortably spend the entire layover there.' },
      { title: 'Croatian Cuisine & Culture', content: 'Croatian food is underrated — it\'s where Mediterranean meets Central European. Zagreb specialties: štrukli (baked cheese rolls), peka (slow-cooked meat under a bell lid), black risotto (crni rižot). Coffee culture is serious — Croatians sit for hours over a single cup. The Dolac Market (open-air farmers market above Ban Jelačić Square) is the city\'s beating heart. Tkalčićeva Street is the café and bar strip. November weather is cold (35–45°F) but the Advent atmosphere more than compensates.' },
      { title: 'Getting Around Zagreb', content: 'Zagreb is very walkable — the historic core (Upper Town + Lower Town) is compact. The funicular connecting Lower to Upper Town is the world\'s shortest public funicular (66 meters, 55 seconds). Trams cover the wider city. Uber works well. The cathedral, Stone Gate, and Lotrščak Tower are all within a 15-minute walk of each other.' },
    ],
    awardTips: [
      { program: 'Turkish Airlines Miles&Smiles', route: 'SEA–IST–ZAG', note: 'Already booked outbound. Return options: ZAG–IST–SEA on TK, or consider Aeroplan for Star Alliance routing.' },
      { program: 'Hyatt Points', route: 'Esplanade Zagreb', cost: '~15–20K per night', note: 'Esplanade is not Hyatt-affiliated — check IHG or book cash. Boutique hotels may be better value.' },
    ],
    itinerary: [
      { date: 'Nov 21', label: 'Depart Seattle', description: 'SEA 7:00pm → IST 6:00pm +1 on Turkish TK204 (conf: UG8BHN). Business class overnight flight. Rest up — long travel day.', type: 'travel' },
      { date: 'Nov 22', label: 'Istanbul Layover', description: '14hr layover at IST. Options: (1) Turkish Airlines Business Lounge — spa, sleep rooms, restaurant, or (2) Sultanahmet tour — Hagia Sophia, Blue Mosque, Grand Bazaar. Touristanbul free tour available for TK Business. Return to airport by evening.', type: 'flexible' },
      { date: 'Nov 23', label: 'Arrive Zagreb — Advent Opens', description: 'IST 8:20am → ZAG 8:30am on TK1053 (conf: UG8BHN). Check into hotel. Walk to Ban Jelačić Square for Advent Market opening. Mulled wine and štrukli at the stalls. Evening: Tkalčićeva Street for dinner and bar hopping. Upper Town lights at night.', type: 'travel' },
    ],
    costs: [],
  },

  // ═══════════════════════════════════════════════════════
  // NICARAGUA — November 2026
  // ═══════════════════════════════════════════════════════
  {
    slug: 'nicaragua-nov-2026',
    title: 'Nicaragua',
    subtitle: 'Calala Island — Private Island (conflicts with Seychelles Nov 23: only one happens)',
    region: 'Central America',
    country: 'Nicaragua',
    dates: 'November 23–29, 2026',
    month: 'November',
    year: 2026,
    status: 'decision_needed',
    statusLabel: 'Decision Needed',
    travelers: 'TBD',
    heroImage: 'nicaragua-island',
    flights: [
      { segment: 1, date: '2026-11-23', route: 'SEA → MIA', time: '8:05am → 5:06pm', airline: 'Alaska Airlines (AS311)', confirmation: 'WUBULX', status: 'booked', notes: '2hr 4min layover in Miami' },
      { segment: 2, date: '2026-11-23', route: 'MIA → MGA', time: '7:10pm → 8:56pm', airline: 'American Airlines (AA1369)', confirmation: 'KLKSII', status: 'booked', notes: 'Arrive Managua late evening' },
    ],
    hotels: [
      { property: 'TBD — Managua', location: 'Managua, Nicaragua', checkIn: '2026-11-23', checkOut: '2026-11-25', status: 'not_booked', notes: 'Need 1–2 nights before Calala transfer. Consider Hotel Contempo or Los Cardones near airport.' },
      { property: 'Calala Island', location: 'Caribbean Coast, Nicaragua', checkIn: '2026-11-25', checkOut: '2026-11-29', status: 'booked', notes: 'Conf: 1000415272. Ultra-luxury private island, 3–6 suites max. All-inclusive. Checkout 6am Nov 29.' },
    ],
    actionItems: [
      { text: 'Arrange Managua → Calala Island charter transfer (typically Cessna, ~30–45 min)', urgent: true },
      { text: 'Book return flights MGA → SEA for Nov 29', urgent: true },
      { text: 'Book Managua hotel for Nov 23–25 (2 nights pre-island)', urgent: true },
      { text: 'Confirm Calala all-inclusive inclusions (diving, snorkeling gear, excursions)', urgent: false },
      { text: 'Check Nicaragua visa requirements (US passport = visa-free 90 days)', urgent: false },
    ],
    intel: [
      { title: 'Calala Island — Ultra-Luxury Private Island', content: 'Calala Island is one of the most exclusive properties in Central America — a private island off Nicaragua\'s Caribbean Mosquito Coast with a maximum of 3–6 suites. The concept is barefoot luxury meets Robinson Crusoe: overwater bungalows, pristine reef snorkeling steps from your room, no other guests in sight. All-inclusive covers gourmet meals (Caribbean seafood, lobster, ceviche), premium spirits, and most water activities. The island is ringed by coral reef — snorkeling and kayaking are world-class. This is a digital detox destination; connectivity is limited by design.' },
      { title: 'Getting to Calala', content: 'Calala is accessible only by charter aircraft from Managua — typically a Cessna or similar light aircraft, 30–45 minutes over the Caribbean jungle canopy to a private airstrip. The resort coordinates transfers. You\'ll need to overnight in Managua (arrive 8:56pm on Nov 23) and fly to the island the morning of Nov 25. The Nov 24 gap day could be spent exploring Managua or resting.' },
      { title: 'Caribbean Nicaragua', content: 'Nicaragua\'s Caribbean coast is a completely different world from the Pacific side — Afro-Caribbean culture, Miskito indigenous communities, reggae rhythms, coconut-based cuisine. The Mosquito Coast is one of the least-visited regions in Central America. Wildlife is extraordinary: howler monkeys, scarlet macaws, sea turtles, and reef fish. November is the tail end of the rainy season transitioning to dry — expect warm weather (80–85°F) with occasional afternoon showers.' },
    ],
    awardTips: [
      { program: 'Alaska Mileage Plan', route: 'SEA–MIA on AS', note: 'Outbound booked on Alaska. Return: check AS or AA award space MGA–MIA–SEA.' },
    ],
    itinerary: [
      { date: 'Nov 23', label: 'Travel to Managua', description: 'SEA 8:05am → MIA 5:06pm on Alaska AS311 (conf: WUBULX). Connect MIA 7:10pm → MGA 8:56pm on American AA1369 (conf: KLKSII). Late arrival — check into Managua hotel. Rest.', type: 'travel' },
      { date: 'Nov 24', label: 'Managua Day', description: 'Free day in Managua before island transfer. Options: explore Masaya Volcano National Park (30 min drive), browse Masaya Artisan Market, or rest at hotel pool. Confirm charter flight details with Calala for next morning.', type: 'flexible' },
      { date: 'Nov 25', label: 'Charter to Calala Island', description: 'Morning charter flight from Managua to Calala Island (~30–45 min Cessna over Caribbean jungle). Arrive on the island. Welcome cocktail. Settle into overwater bungalow. Afternoon snorkeling on house reef. Sunset dinner on the beach.', type: 'travel' },
      { date: 'Nov 26', label: 'Island Day 1', description: 'Wake to Caribbean sunrise. Morning kayak or paddleboard around the island. Snorkeling the reef — tropical fish, sea fans, possible turtle sighting. Afternoon hammock time. Gourmet dinner — fresh lobster, ceviche, local rum cocktails.', type: 'rest' },
      { date: 'Nov 27', label: 'Island Day 2', description: 'Guided reef snorkeling excursion to outer reef. Picnic lunch on a sandbar. Afternoon fishing or island walk through coconut palms. Sunset cocktails. Multi-course Caribbean seafood dinner.', type: 'activity' },
      { date: 'Nov 28', label: 'Island Day 3', description: 'Final full day. Morning diving or deep-water snorkeling. Explore the mangroves by kayak. Afternoon spa or total relaxation. Farewell dinner under the stars. Pack for early departure.', type: 'rest' },
      { date: 'Nov 29', label: 'Depart Calala', description: 'Early 6am checkout. Charter flight back to Managua. Connect to return flights MGA → SEA (needs booking).', type: 'travel' },
    ],
    costs: [],
  },

  // ═══════════════════════════════════════════════════════
  // BEAVER CREEK — January 2027
  // ═══════════════════════════════════════════════════════
  {
    slug: 'beaver-creek-jan-2027',
    title: 'Beaver Creek',
    subtitle: 'Park Hyatt Ski Trip #1',
    region: 'North America',
    country: 'USA',
    dates: 'January 21–24, 2027',
    month: 'January',
    year: 2027,
    status: 'partially_booked',
    statusLabel: 'Partially Booked',
    travelers: 'TBD',
    heroImage: 'beaver-creek-ski',
    flights: [
      { segment: 1, date: '2027-01-21', route: 'SEA → DEN or EGE', status: 'needs_action', notes: 'Need to book. DEN = 2hr drive to Beaver Creek via I-70. EGE (Eagle County) = 30 min drive but limited flights and often pricier. Consider United SEA→DEN nonstop.' },
    ],
    hotels: [
      { property: 'Park Hyatt Beaver Creek Resort and Spa', location: 'Beaver Creek, CO', checkIn: '2027-01-21', checkOut: '2027-01-24', program: 'Hyatt', status: 'booked', notes: 'Conf: 58037120. Ski-in/ski-out access. Allegria Spa. Altitude 8,100 ft — hydrate.' },
    ],
    actionItems: [
      { text: 'Book flights SEA → DEN or EGE for Jan 21 and return Jan 24', urgent: true },
      { text: 'Arrange ground transport — DEN→Beaver Creek shuttle or rental', urgent: true },
      { text: 'Book lift tickets or confirm if Ikon/Epic pass applies', urgent: false },
      { text: 'Reserve restaurant at Splendido or Toscanini in the village', urgent: false },
      { text: 'Rent ski gear if not bringing own equipment', urgent: false },
    ],
    intel: [
      { title: 'Beaver Creek Resort', content: 'Beaver Creek is Vail\'s more exclusive, less crowded neighbor — the same Vail Resorts ownership but with a fraction of the visitors. 1,832 skiable acres across 150 trails, with terrain split roughly 19% beginner, 43% intermediate, 38% advanced/expert. The Birds of Prey downhill course hosts World Cup races. January is peak powder season with average snowfall of 25+ inches per month. The village is manicured and upscale — cookies handed out at 3pm daily at the base. Less party atmosphere than Vail, more refined.' },
      { title: 'Park Hyatt Beaver Creek', content: 'The Park Hyatt is the premier ski-in/ski-out property at Beaver Creek. Located right at the base of the Centennial Express lift. Allegria Spa is one of Colorado\'s best mountain spas — book the post-ski hot stone massage. Dining: 8100 Mountainside Bar & Grill for elevated American, plus the lobby bar for après-ski cocktails. Rooms typically have mountain views and fireplaces. Altitude is 8,100 ft — drink extra water, avoid heavy alcohol on arrival day.' },
      { title: 'Getting There & Altitude', content: 'Two airport options: Denver (DEN) is 2 hours via I-70 through the Eisenhower Tunnel — reliable but weather can close the pass. Eagle County (EGE) is 30 minutes away but has limited flight options and premium pricing. Epic Mountain Express runs shuttles from DEN. January weather on I-70 requires chains or AWD. Altitude sickness is real at 8,100+ ft: hydrate aggressively, go easy on day one, skip alcohol the first evening.' },
      { title: 'Dining & Après-Ski', content: 'Splendido at the Chateau is the fine dining anchor — Northern Italian with a legendary wine list. Toscanini is the village\'s upscale Italian. The Red Lion at Vail (15 min shuttle) is the classic après-ski dive. Beaver Creek village has Dusty Boot Saloon for casual après. For a splurge: Sweet Basil in Vail Village (reservations essential). The 3pm cookie tradition at the base of the mountain is non-negotiable — fresh-baked chocolate chip, handed out free.' },
    ],
    awardTips: [
      { program: 'Hyatt Points', route: 'Park Hyatt Beaver Creek', cost: '~25–40K per night', note: 'January is peak — points rate may be higher. Check for Globalist suite upgrades.' },
      { program: 'United MileagePlus', route: 'SEA–DEN', cost: '~12.5K each way', note: 'United has frequent SEA–DEN nonstops. Good saver availability in January.' },
    ],
    itinerary: [
      { date: 'Jan 21', label: 'Travel to Beaver Creek', description: 'Fly SEA → DEN or EGE (needs booking). Ground transfer to Beaver Creek (2hr from DEN, 30min from EGE). Check into Park Hyatt (conf: 58037120) by 4pm. Acclimatize — hydrate, light dinner, early bed. Skip hard skiing today; altitude adjustment is critical at 8,100 ft.', type: 'travel' },
      { date: 'Jan 22', label: 'Ski Day 1', description: 'Full day on the mountain. Morning: warm up on Centennial (intermediate groomer right outside the hotel). Midday: explore Birds of Prey terrain or Larkspur Bowl for advanced runs. Grab the 3pm fresh cookies at the base. Après-ski at Dusty Boot or hotel lobby bar. Dinner at Splendido.', type: 'activity' },
      { date: 'Jan 23', label: 'Ski Day 2', description: 'Second full day. Morning: hit the back bowls early for fresh tracks. Consider a shuttle to Vail for variety (15 min, same lift ticket). Afternoon: Allegria Spa post-ski — hot stone massage and hydrotherapy. Evening: dinner at Toscanini or venture to Vail Village for Sweet Basil.', type: 'activity' },
      { date: 'Jan 24', label: 'Depart', description: 'Optional early morning run (lifts open 9am). Check out by 11am. Ground transfer to airport. Fly home.', type: 'travel' },
    ],
    costs: [],
  },

  // ═══════════════════════════════════════════════════════
  // JAPAN WINTER — February 2027
  // ═══════════════════════════════════════════════════════
  {
    slug: 'japan-feb-2027',
    title: 'Japan Winter',
    subtitle: 'Tokyo, Niseko & Kyoto — Park Hyatt Grand Tour',
    region: 'East Asia',
    country: 'Japan',
    dates: 'February 4–18, 2027',
    month: 'February',
    year: 2027,
    status: 'booked',
    statusLabel: 'Booked',
    travelers: 'TBD (likely 2–4, overlapping dates suggest multi-party)',
    heroImage: 'japan-winter-niseko',
    flights: [
      { segment: 1, date: '2027-02-04', route: 'SEA → NRT', time: '11:55am → 3:05pm +1', airline: 'JAL (JL67)', cabin: 'Business', confirmation: 'EH6NYK', status: 'booked', notes: 'Ticketed as Cathay Pacific award. Arrive Narita Feb 5 afternoon.' },
      { segment: 2, date: '2027-02-16', route: 'TPE → SEA', time: '11:00pm → 5:30pm', airline: 'EVA Air (BR24)', cabin: 'Business', confirmation: 'FK5O97', status: 'booked', notes: 'Return via Taipei. EVA Royal Laurel Class.' },
    ],
    hotels: [
      { property: 'Park Hyatt Tokyo', location: 'Shinjuku, Tokyo', checkIn: '2027-02-05', checkOut: '2027-02-06', program: 'Hyatt', status: 'booked', notes: 'Conf: 32906849. Arrival night. Lost in Translation hotel — 52nd floor views of Shinjuku.' },
      { property: 'Park Hyatt Niseko Hanazono', location: 'Niseko, Hokkaido', checkIn: '2027-02-06', checkOut: '2027-02-11', program: 'Hyatt', status: 'booked', notes: 'Conf: 19374554. 5 nights. Ski-in/ski-out Hanazono area. Onsen on-site.' },
      { property: 'Park Hyatt Kyoto', location: 'Higashiyama, Kyoto', checkIn: '2027-02-10', checkOut: '2027-02-15', program: 'Hyatt', status: 'booked', notes: 'Conf: 35675427. Room 1. Ninenzaka location — steps from Kiyomizu-dera.' },
      { property: 'Park Hyatt Kyoto', location: 'Higashiyama, Kyoto', checkIn: '2027-02-10', checkOut: '2027-02-15', program: 'Hyatt', status: 'booked', notes: 'Conf: 47489247. Room 2. Overlapping Niseko dates suggest split party.' },
      { property: 'Park Hyatt Niseko Hanazono', location: 'Niseko, Hokkaido', checkIn: '2027-02-13', checkOut: '2027-02-18', program: 'Hyatt', status: 'booked', notes: 'Conf: 2552461. Second Niseko stay — return for more powder.' },
      { property: 'Park Hyatt Tokyo', location: 'Shinjuku, Tokyo', checkIn: '2027-02-14', checkOut: '2027-02-18', program: 'Hyatt', status: 'booked', notes: 'Conf: 50440509. Return to Tokyo. 4 nights. Farewell block.' },
    ],
    actionItems: [
      { text: 'Clarify traveler breakdown — who is in Niseko vs Kyoto during Feb 10–13 overlap', urgent: true },
      { text: 'Book internal flights: NRT → CTS (Hokkaido) and CTS → KIX/ITM (Kyoto)', urgent: true },
      { text: 'Book NRT → TPE flight for Feb 15–16 (connects to EVA return)', urgent: true },
      { text: 'Reserve kaiseki dinner in Kyoto (Kikunoi, Gion Sasaki, or Hyotei)', urgent: false },
      { text: 'Research JR Pass vs. point-to-point Shinkansen tickets', urgent: false },
      { text: 'Book onsen ryokan day trip from Niseko if desired', urgent: false },
    ],
    intel: [
      { title: 'The Park Hyatt Grand Tour', content: 'This trip connects three of Japan\'s most iconic Park Hyatt properties: Tokyo (the Lost in Translation hotel, 52nd floor Shinjuku views), Niseko Hanazono (ski-in/ski-out in Hokkaido\'s legendary powder), and Kyoto (Higashiyama location on Ninenzaka, steps from Kiyomizu-dera temple). The overlapping dates suggest a multi-party trip where different travelers rotate between locations. As a Globalist, push for suite upgrades at all three — February is peak at Niseko but not at Tokyo or Kyoto.' },
      { title: 'Niseko — February Powder', content: 'February is peak powder season in Niseko. Hokkaido receives 15+ meters of annual snowfall thanks to Siberian weather systems crossing the Sea of Japan. The snow is ultra-dry "Japow" — lighter than anything in the Rockies or Alps. Hanazono area has the best tree skiing and the famous Hanazono Bowl. Grand Hirafu has the most terrain. Night skiing under the lights is a Niseko institution. Off the slopes: onsen (hot springs) are essential — the hotel has one, but Yukichichibu or Goshiki onsen are worth the drive. Ramen in Kutchan town is the après-ski meal.' },
      { title: 'Kyoto in Winter', content: 'Winter Kyoto is magical and uncrowded. The bamboo groves, temple gardens, and stone paths of Higashiyama are serene without summer tourists. If it snows (uncommon but possible in February), the golden pavilion Kinkaku-ji blanketed in white is one of Japan\'s most photographed scenes. Kaiseki (multi-course traditional dinner) is at its winter peak — seasonal ingredients like fugu (pufferfish), turnip, and yuzu. Book Kikunoi (3 Michelin stars), Gion Sasaki, or the Park Hyatt\'s own Kyoto Bistro. Morning visits to Fushimi Inari (the thousand torii gates) are best before 8am.' },
      { title: 'Getting Between Cities', content: 'Tokyo → Niseko: Fly NRT/HND → New Chitose (CTS), then 2.5hr bus or car to Niseko. Niseko → Kyoto: Fly CTS → KIX (Kansai) or ITM (Itami/Osaka), then train to Kyoto (75 min from KIX, 15 min from ITM). Kyoto → Tokyo: Shinkansen Nozomi, 2hr 15min, runs every 10 minutes. Tokyo → Taipei: Multiple carriers (Peach, JAL, ANA, EVA). JR Pass may be worth it if doing Shinkansen segments, but calculate against point-to-point tickets for the specific legs.' },
    ],
    awardTips: [
      { program: 'Cathay Pacific Asia Miles', route: 'SEA–NRT via JAL', cost: 'Booked', note: 'Outbound booked via Cathay miles on JAL metal. Strong sweet spot.' },
      { program: 'Hyatt Points', route: 'Park Hyatt Tokyo/Niseko/Kyoto', cost: '25–40K per night', note: '6 bookings across 3 properties. Globalist suite upgrades most likely at Tokyo and Kyoto in February. Niseko is peak — upgrades less likely.' },
      { program: 'EVA Air', route: 'TPE–SEA', cost: 'Booked', note: 'Royal Laurel Class return. Top-tier J product.' },
    ],
    itinerary: [
      { date: 'Feb 4', label: 'Fly to Tokyo', description: 'SEA 11:55am → NRT 3:05pm +1 on JAL JL67 (conf: EH6NYK, Cathay award). Cross the date line — arrive Feb 5 afternoon. Narita Express to Shinjuku (90 min).', type: 'travel' },
      { date: 'Feb 5', label: 'Arrive Tokyo', description: 'Check into Park Hyatt Tokyo (conf: 32906849). Freshen up on the 52nd floor. Evening walk through Shinjuku — Golden Gai for intimate bars, Omoide Yokocho for yakitori. Jet lag strategy: stay up until 10pm local.', type: 'travel' },
      { date: 'Feb 6', label: 'Tokyo → Niseko', description: 'Morning flight HND/NRT → CTS (New Chitose). Bus or car to Niseko (2.5 hrs through snowy Hokkaido landscape). Check into Park Hyatt Niseko Hanazono (conf: 19374554). Afternoon orientation run — get your ski legs. Evening: onsen at the hotel, ramen in Kutchan.', type: 'travel' },
      { date: 'Feb 7–10', label: 'Niseko Powder Days', description: '4 full days of Japow skiing. Hanazono Bowl, Grand Hirafu, Niseko Village terrain. Morning first tracks, afternoon tree runs. Night skiing sessions. Daily onsen recovery. Ramen, izakaya, and hot pot dinners. This is what you came for.', type: 'activity' },
      { date: 'Feb 11', label: 'Niseko → Kyoto', description: 'Fly CTS → KIX or ITM. Train to Kyoto. Check into Park Hyatt Kyoto (conf: 35675427 / 47489247, Ninenzaka location). Evening walk through Higashiyama — stone lanes, tea houses, temple silhouettes at dusk. Kaiseki dinner.', type: 'travel' },
      { date: 'Feb 12–14', label: 'Kyoto Cultural Days', description: 'Morning: Fushimi Inari before 8am (thousand torii gates, no crowds). Kinkaku-ji (Golden Pavilion). Arashiyama bamboo grove. Afternoon: tea ceremony experience, Nishiki Market food crawl. Kaiseki at Kikunoi or Gion Sasaki. Gion geisha district evening walk. If snow falls — Kinkaku-ji in snow is once-in-a-lifetime.', type: 'activity' },
      { date: 'Feb 15', label: 'Kyoto → Tokyo or Taipei', description: 'Shinkansen Kyoto → Tokyo (2hr 15min) for final Tokyo nights, OR fly to Taipei for the return connection. Depends on traveler routing. Some may return to Niseko (conf: 2552461).', type: 'travel' },
      { date: 'Feb 16', label: 'Fly Home via Taipei', description: 'TPE 11:00pm → SEA 5:30pm on EVA Air BR24 Royal Laurel Class (conf: FK5O97). Taipei stopover possible if arriving early. Home same day (date line gain).', type: 'travel' },
    ],
    costs: [],
  },

  // ═══════════════════════════════════════════════════════
  // BEAVER CREEK — February 2027
  // ═══════════════════════════════════════════════════════
  {
    slug: 'beaver-creek-feb-2027',
    title: 'Beaver Creek',
    subtitle: 'Park Hyatt Ski Trip #2 — Late Season',
    region: 'North America',
    country: 'USA',
    dates: 'February 25–28, 2027',
    month: 'February',
    year: 2027,
    status: 'partially_booked',
    statusLabel: 'Partially Booked',
    travelers: 'TBD',
    heroImage: 'beaver-creek-ski',
    flights: [
      { segment: 1, date: '2027-02-25', route: 'SEA → DEN or EGE', status: 'needs_action', notes: 'Need to book. Same routing options as January trip — DEN (2hr drive) or EGE (30 min). Presidents Day week crowds will have cleared by Feb 25.' },
    ],
    hotels: [
      { property: 'Park Hyatt Beaver Creek Resort and Spa', location: 'Beaver Creek, CO', checkIn: '2027-02-25', checkOut: '2027-02-28', program: 'Hyatt', status: 'booked', notes: 'Conf: 28563350. Second visit — request preferred room from Jan stay. Allegria Spa.' },
    ],
    actionItems: [
      { text: 'Book flights SEA → DEN or EGE for Feb 25 and return Feb 28', urgent: true },
      { text: 'Arrange ground transport to Beaver Creek', urgent: true },
      { text: 'Request same room or upgrade as Jan stay (Globalist leverage)', urgent: false },
      { text: 'Book any restaurants missed in January', urgent: false },
    ],
    intel: [
      { title: 'Late February Conditions', content: 'Late February at Beaver Creek is the sweet spot: deep snowpack from cumulative winter storms, longer daylight hours (sunrise 6:45am, sunset 5:50pm), and the post-Presidents Day lull means fewer crowds. Snow quality transitions from pure powder to more consolidated base with fresh dustings — morning groomed runs are fast and smooth, while ungroomed terrain holds surprises. The back bowls and glades will have the best snow. Average high is 36°F at base, 22°F at summit.' },
      { title: 'Return Visit Strategy', content: 'This is your second Park Hyatt Beaver Creek stay in 5 weeks. As a return guest, request the room you liked from January. Globalist members should push for suite upgrades — occupancy is lower in late February. Explore terrain you missed in January: Bachelor Gulch (tree skiing), Stone Creek Chutes (expert), or take the shuttle to Vail\'s legendary Back Bowls. Try restaurants you didn\'t hit in January.' },
      { title: 'Spring Skiing Preview', content: 'Late February begins the transition toward spring skiing. Sun angles are higher, creating corn snow on south-facing slopes by afternoon. Strategy: ski north-facing terrain in the morning (holds cold snow), switch to south-facing groomers after lunch when they soften. The combination of deep base and warming temps makes this some of the most enjoyable skiing of the season.' },
    ],
    awardTips: [
      { program: 'Hyatt Points', route: 'Park Hyatt Beaver Creek', cost: '~25–40K per night', note: 'Post-Presidents Day may have better award availability than January. Check for 4th night free promos.' },
    ],
    itinerary: [
      { date: 'Feb 25', label: 'Travel to Beaver Creek', description: 'Fly SEA → DEN or EGE (needs booking). Transfer to Beaver Creek. Check into Park Hyatt (conf: 28563350) by 4pm. Already acclimated from January visit — can ski a few afternoon runs if arriving early. Dinner at a restaurant missed in January.', type: 'travel' },
      { date: 'Feb 26', label: 'Ski Day 1', description: 'Full day on the mountain. Morning: hit the north-facing runs early for cold snow. Explore Bachelor Gulch or Stone Creek Chutes. Grab 3pm cookies at the base. Après-ski at Dusty Boot. Evening: try Grouse Mountain Grill or venture to Vail for Mountain Standard.', type: 'activity' },
      { date: 'Feb 27', label: 'Ski Day 2', description: 'Second full day. Morning: Vail Back Bowls via the shuttle (15 min) — Sun Up Bowl and China Bowl for wide-open terrain. Afternoon return to Beaver Creek for spa at Allegria. Farewell dinner at 8100 Mountainside or Splendido.', type: 'activity' },
      { date: 'Feb 28', label: 'Depart', description: 'Optional sunrise run on Centennial. Check out by 11am. Transfer to airport. Fly home.', type: 'travel' },
    ],
    costs: [],
  },

  // ═══════════════════════════════════════════════════════
  // PARIS — March 2027
  // ═══════════════════════════════════════════════════════
  {
    slug: 'paris-mar-2027',
    title: 'Paris',
    subtitle: 'Park Hyatt Paris-Vendôme',
    region: 'Europe',
    country: 'France',
    dates: 'March 25–28, 2027',
    month: 'March',
    year: 2027,
    status: 'partially_booked',
    statusLabel: 'Partially Booked',
    travelers: 'TBD',
    heroImage: 'paris-vendome',
    flights: [
      { segment: 1, date: '2027-03-24', route: 'SEA → CDG', status: 'needs_action', notes: 'Need to book. Options: Air France nonstop SEA→CDG, Delta via partner, or Alaska → BA/AF. Red-eye to arrive morning Mar 25.' },
    ],
    hotels: [
      { property: 'Park Hyatt Paris-Vendôme', location: 'Paris, France', checkIn: '2027-03-25', checkOut: '2027-03-28', program: 'Hyatt', status: 'booked', notes: 'Conf: 36693055. Rue de la Paix, steps from Place Vendôme and Opéra. Ed. Vuillard-inspired interiors. Pur\' restaurant (Michelin). Globalist upgrades possible.' },
    ],
    actionItems: [
      { text: 'Book flights SEA → CDG (and return) — check Air France award via Flying Blue or Alaska partners', urgent: true },
      { text: 'Make dinner reservations: Pur\' at the hotel, plus 1–2 Paris restaurants', urgent: true },
      { text: 'Book Louvre or Musée d\'Orsay timed tickets in advance', urgent: false },
      { text: 'Research Marché des Enfants Rouges and other food markets for spring', urgent: false },
      { text: 'Check if Hyatt Globalist benefits apply (suite upgrade, breakfast)', urgent: false },
    ],
    intel: [
      { title: 'Park Hyatt Paris-Vendôme', content: 'The Park Hyatt Paris-Vendôme is a 5-star palace hotel on Rue de la Paix — one of the most prestigious addresses in Paris, steps from Place Vendôme\'s jewelers and the Opéra Garnier. The interiors are inspired by painter Édouard Vuillard with a warmth unusual for luxury Paris hotels. Pur\' is the hotel\'s Michelin-starred restaurant (contemporary French, tasting menus). The spa is intimate and excellent. Rooms start at 30 sqm. Globalist members should request a Vendôme Suite upgrade — availability is best in March before spring tourist season.' },
      { title: 'March in Paris — Early Spring', content: 'Late March is one of the best times to visit Paris: crowds are thin (pre-Easter, pre-tourist season), cherry blossoms begin appearing along the Seine and in the Tuileries, and the weather is transitioning (45–55°F, variable — pack layers and a good rain jacket). Restaurant reservations are easier than summer. The Paris art scene is in full swing with spring exhibitions at the Palais de Tokyo and Grand Palais.' },
      { title: 'Neighborhood Guide — 1st & 2nd Arrondissements', content: 'The hotel sits at the border of the 1st and 2nd arrondissements — the historic commercial heart of Paris. Walking distance: Louvre (10 min), Palais Royal gardens (5 min), Galeries Lafayette (8 min), Tuileries (7 min). The 2nd arrondissement has evolved into a food destination — Rue du Nil (home of Frenchie restaurant, Terroirs d\'Avenir provisions) is a 10-minute walk. For coffee: Telescope (Rue Villedo) and Café Kitsuné (Palais Royal). The Seine is a 12-minute walk south.' },
      { title: 'Dining — Michelin & Beyond', content: 'Paris dining strategy: book one Michelin experience (Pur\' at the hotel, or Frenchie across the street for neo-bistro), one classic brasserie (Bouillon Chartier for the Art Nouveau room, or Le Grand Véfour at Palais Royal for historic splendor), and one market lunch (Marché des Enfants Rouges in the Marais — oldest covered market in Paris, incredible Japanese-French crepes, Moroccan couscous). For pastry: Cédric Grolet\'s Opéra boutique is a 5-minute walk from the hotel.' },
    ],
    awardTips: [
      { program: 'Hyatt Points', route: 'Park Hyatt Paris-Vendôme', cost: '~30–40K per night', note: 'Category 7 property. March availability is better than peak summer. Globalist suite upgrade highly likely in spring.' },
      { program: 'Air France Flying Blue', route: 'SEA–CDG', cost: '~55–80K miles RT', note: 'Air France has nonstop SEA–CDG. Transfer from Amex MR, Chase UR, or Citi TY. March should have good saver availability.' },
      { program: 'Alaska Mileage Plan', route: 'SEA–CDG via partners', note: 'Check Cathay Pacific, Finnair, or BA routing through partner awards.' },
    ],
    itinerary: [
      { date: 'Mar 25', label: 'Arrive Paris', description: 'Arrive CDG morning (red-eye from Seattle). RER B or taxi to hotel (45 min). Check into Park Hyatt Paris-Vendôme (conf: 36693055). Freshen up. Walk to Palais Royal gardens and Tuileries. Light lunch at a café. Afternoon at the Louvre (pre-booked timed entry). Evening: dinner at Pur\' (hotel Michelin restaurant) or Frenchie nearby.', type: 'travel' },
      { date: 'Mar 26', label: 'Left Bank & Museums', description: 'Morning: Musée d\'Orsay (Impressionists, pre-book). Walk across Pont des Arts. Lunch in Saint-Germain-des-Prés — Café de Flore or a modern bistro. Afternoon: wander the Marais — Marché des Enfants Rouges for snacks, Place des Vosges. Evening: Le Grand Véfour at Palais Royal or Bouillon Chartier for a classic brasserie experience.', type: 'activity' },
      { date: 'Mar 27', label: 'Montmartre & Indulgence', description: 'Morning: Sacré-Cœur and Montmartre village — explore the artists\' quarter, coffee at La Maison Rose. Pastry at Cédric Grolet Opéra (near hotel). Afternoon: Galeries Lafayette rooftop for city views, or spa at the hotel. Final evening: Seine river walk at golden hour, farewell dinner at a restaurant of choice.', type: 'activity' },
      { date: 'Mar 28', label: 'Depart Paris', description: 'Final morning — croissant and café crème at a neighborhood spot. Check out by noon. Taxi or RER to CDG. Fly home.', type: 'travel' },
    ],
    costs: [],
  },

  // ═══════════════════════════════════════════════════════
  // SEYCHELLES DIVING — November 2026
  // ═══════════════════════════════════════════════════════
  {
    slug: 'seychelles-nov-2026',
    title: 'Seychelles Diving',
    subtitle: 'Waldorf Astoria Platte Island + Indian Ocean granite reefs',
    region: 'Indian Ocean',
    country: 'Seychelles',
    dates: 'November 23, 2026 – TBD',
    month: 'November',
    year: 2026,
    status: 'partially_booked',
    statusLabel: 'Partially Booked',
    travelers: 'Terry Lin + Janelle Tam (Janelle not on outbound PNR yet)',
    heroImage: 'seychelles-beach',
    flights: [
      { segment: 1, date: '2026-11-23', route: 'SEA → IST', time: '7:00pm PT → 6:00pm local +1', airline: 'Turkish Airlines (TK204)', cabin: 'Business (I)', confirmation: 'S46R5Q', status: 'booked', notes: '12h direct. Seat 03K. Only Terry on PNR — Janelle status TBD.' },
    ],
    hotels: [
      { property: 'Waldorf Astoria Seychelles Platte Island', location: 'Platte Island, Seychelles', program: 'Hilton FNC', status: 'not_booked', notes: 'Planning — target redemption with Hilton Free Night Certificates.' },
    ],
    actionItems: [
      { text: 'Verify Janelle on PNR or book her separately', urgent: true },
      { text: 'Book IST→SEZ on separate Turkish award', urgent: true },
      { text: 'Decide Seychelles vs. Calala (both Nov 23)', urgent: true },
      { text: 'Book Waldorf Astoria Platte Island with Hilton FNCs', urgent: false },
    ],
    intel: [
      { title: 'Why Seychelles, Why November', content: 'November is one of the two best diving windows in Seychelles. Southwest monsoon ends, water temp hits 29°C, visibility reaches 30 meters. Tail end of whale shark season.\nSeychelles has granite reef formations found nowhere else on earth.' },
    ],
    awardTips: [
      { program: 'Turkish Miles&Smiles', route: 'SEA→IST one-way', cost: '65K miles + $219', note: 'Classic Star Alliance sweet spot, transferable from Capital One' },
    ],
    itinerary: [],
    costs: [
      { category: 'flight', description: 'SEA→IST Turkish TK204 Business (Terry only, PNR S46R5Q)', points: 65000, program: 'Turkish Miles&Smiles', cashUsd: 219, note: '$190 fuel + $29 tax' },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // FRENCH POLYNESIA — April 2027
  // ═══════════════════════════════════════════════════════
  {
    slug: 'french-polynesia-2027',
    title: 'French Polynesia',
    subtitle: 'Papeete via LAX on Qantas Points',
    region: 'South Pacific',
    country: 'French Polynesia',
    dates: 'April 4, 2027 – TBD',
    month: 'April',
    year: 2027,
    status: 'partially_booked',
    statusLabel: 'Partially Booked',
    travelers: 'Terry Lin (+ Janelle TBC)',
    heroImage: 'french-polynesia-overwater',
    flights: [
      { segment: 1, date: '2027-04-04', route: 'LAX → PPT', airline: 'Qantas (likely Air Tahiti Nui metal)', cabin: 'TBD', confirmation: 'ERJ75I', status: 'booked', notes: 'Qantas-ticketed. Flight # / cabin TBD — pull from Qantas app with PNR ERJ75I.' },
    ],
    hotels: [],
    actionItems: [
      { text: 'Pull exact flight # and cabin from Qantas app using PNR ERJ75I', urgent: true },
      { text: 'Book SEA→LAX positioning flight', urgent: true },
      { text: 'Confirm Janelle is on this booking', urgent: true },
      { text: 'Book return PPT→SEA', urgent: false },
      { text: 'Decide island(s): Bora Bora / Moorea / Tikehau', urgent: false },
    ],
    intel: [
      { title: 'Qantas LAX-PPT via Air Tahiti Nui', content: 'This PNR was issued by Qantas but the operating carrier is almost certainly Air Tahiti Nui (TN 102 is the daily LAX-PPT). Qantas Points oneworld award chart applies.\nStill need to source SEA→LAX positioning — Alaska MVP cheapest option.' },
    ],
    awardTips: [
      { program: 'Qantas Points', route: 'LAX→PPT one-way', cost: 'TBD (points not yet verified)', note: 'Booked April 16, 2026. Open Qantas app with PNR ERJ75I to see actual points cost.' },
    ],
    itinerary: [],
    costs: [],
  },
];
