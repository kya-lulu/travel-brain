export type TripStatus = 'booked' | 'partially_booked' | 'needs_action' | 'planning' | 'decision_needed' | 'canceled' | 'complete';

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
  taxesUsd?: number; // taxes/fuel surcharges (informational; typically already included in cashUsd)
  seat?: string;     // seat assignment if known (e.g., "02K", "14A/14B")
  pnr?: string;      // confirmation code for easy reference
  changePenaltyUsd?: number;
  cancelPenaltyUsd?: number;
  note?: string;
  source?: string;   // e.g., "Gmail: Delta receipt Apr 18 2026"
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
    status: 'complete',
    statusLabel: 'Complete',
    travelers: '4 adults (Terry Lin, Janelle Tam, Dorothy Fong, Kam Chiu Tam)',
    heroImage: 'kruger-safari-lion',
    flights: [
      // ── Terry & Janelle: Chicago Stopover + Outbound ──
      { segment: 1, date: '2026-04-20', route: 'SEA → ORD', time: '2:39pm → 8:50pm', airline: 'United Airlines (UA2101)', confirmation: 'JT7CSG', status: 'booked', notes: 'Positioning flight to Chicago' },
      { segment: 2, date: '2026-04-21', route: 'ORD → LHR', time: '9:15pm → 11:15am +1', airline: 'British Airways (BA296)', cabin: 'Business (Club World)', confirmation: 'EDGBNO', status: 'booked', notes: 'Terry seat 02K, Janelle seat 02A. Ticketed as Alaska.' },
      { segment: 3, date: '2026-04-22', route: 'LHR → JNB', time: '19:00 → 06:00 +1', airline: 'British Airways (BA55)', cabin: 'Business (Club World)', confirmation: 'EDGBNO', status: 'booked', notes: '11hr flight. Terry seat 59J, Janelle seat 59K. Arrive JNB April 23. Ticketed as Alaska.' },
      // ── Everyone: Hoedspruit ──
      { segment: 4, date: '2026-04-23', route: 'JNB → HDS (Hoedspruit)', time: '10:30am → 11:30am', airline: 'Airlink', confirmation: 'XEB2ZT', status: 'booked', notes: 'Regional hop, transfer to Shindzela' },
      { segment: 4.5, date: '2026-04-28', route: 'HDS (Hoedspruit) → JNB', airline: 'Airlink', status: 'booked', notes: 'Return hop after Kitara checkout — connects to international departure same day' },
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
      // ─── Flights (Terry + Janelle) ───
      { category: 'flight', description: 'SEA → ORD (Terry positioning, UA2101)', pnr: 'JT7CSG', cashUsd: 500, note: 'United, booked Mar 24 2026. Cash: ~$500.', source: 'Gmail: United eTicket JT7CSG' },
      { category: 'flight', description: 'SEA → ORD (Janelle positioning, Apr 19)', cashUsd: 500, note: 'PNR lives in Janelle\'s inbox. Cash: ~$500.' },
      { category: 'flight', description: 'ORD → LHR → JNB on BA296 + BA55 (Club World, Terry + Janelle)', pnr: 'EDGBNO', points: 260000, program: 'Alaska Mileage Plan', cashUsd: 900, seat: 'Terry 02K/59J · Janelle 02A/59K', note: '130K AS + $450 taxes per person × 2 pax. Single PNR for both ORD-LHR + LHR-JNB legs.', source: 'Gmail: Alaska confirmation EDGBNO' },
      { category: 'flight', description: 'JNB → Hoedspruit roundtrip (Airlink, 4 pax — outbound Apr 23 + return Apr 28)', pnr: 'XEB2ZT', cashUsd: 400, note: 'Regional hop both directions, ~1hr each way. Family roundtrip total cash; per-person breakdown not captured.' },
      { category: 'flight', description: 'JNB → FRA → SEA on Condor (Business, Terry + Janelle return)', pnr: 'AFR58A', points: 220000, program: 'Alaska Mileage Plan', cashUsd: 600, note: '110K AS + $300 taxes per person × 2 pax. Apr 28–29.' },
      // ─── Flights (Parents: Dorothy + Kam Chiu, out of YYZ) ───
      { category: 'flight', description: 'YYZ → FRA → JNB on Condor (parents outbound)', pnr: 'LMVEXT', note: 'Apr 12–14 arrival, Alaska-ticketed. Points/cash TBD — likely similar to return (~180K AS + ~$600 cash).', source: 'Gmail: Alaska confirmation LMVEXT' },
      { category: 'flight', description: 'JNB → FRA → YYZ on Condor (parents return)', pnr: 'ARQAHJ', points: 180000, program: 'Alaska Mileage Plan', cashUsd: 600, note: '90K AS + $300 taxes per person × 2 pax. Apr 28–29.' },
      // ─── Lodging ───
      { category: 'hotel', description: 'Saxon Hotel JNB (1 nt arrival, Apr 22)', pnr: '9074244467855', note: 'Cash — invoice in Gmail, USD not extractable from HTML. Pending verification.' },
      { category: 'hotel', description: 'Park Hyatt Johannesburg (1 nt, Apr 22)', program: 'Hyatt', pnr: '56460504', note: 'Second room for arrival night. Hyatt points count pending verification.' },
      { category: 'hotel', description: 'Shindzela Tent 6 (Terry + Janelle, 2 nts)', pnr: 'WB12488 / 6200479437', cashUsd: 1170, note: 'ZAR 21,680 @ ~18.5 FX', source: 'Booking.com / Shindzela invoice' },
      { category: 'hotel', description: 'Shindzela Tent 5 (parents, 1 nt Apr 23)', pnr: 'WB12489 / 5983749295', cashUsd: 586, note: 'ZAR 10,840' },
      { category: 'hotel', description: 'Shindzela Tent 1 (parents, 1 nt Apr 24)', pnr: 'WB12490 / 5413883735', cashUsd: 586, note: 'ZAR 10,840 — parents swap tents after night 1' },
      { category: 'hotel', description: 'Last Word Kitara (3 nts, Apr 25–28)', program: 'Preferred Hotels', pnr: '9911SF004182 / 9911SF004183', note: 'Booked on Preferred Points, count not documented' },
      // ─── Transfers / Fees / Tips ───
      { category: 'other', description: 'Shindzela conservation levy (R450 × 4 pax × 2 nts) + vehicle fee (R350)', cashUsd: 214, note: 'ZAR 3,950' },
      { category: 'transfer', description: 'Airport transfers via Swift Kruger — HDS → Shindzela → Kitara → HDS', cashUsd: 400, note: '3-leg ground, 3rd-party booked' },
      { category: 'transfer', description: 'Shindzela → Kitara game-reserve transfer (R3,430 one-way × 2)', cashUsd: 370, note: 'ZAR 6,860 RT for 4 pax — per Shindzela email Apr 6' },
      { category: 'other', description: 'Tips at Shindzela + Last Word Kitara (4 pax across 5 lodge nights)', cashUsd: 600, note: 'Combined gratuities for guides + general staff at both lodges' },
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
    status: 'complete',
    statusLabel: 'Complete',
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
    costs: [
      // ─── Flights ───
      { category: 'flight', description: 'SEA → SFO (Janelle outbound, May 20)', note: 'BOOKED — confirmation lives in janelle.tam@gmail.com (not in Terry\'s inbox). PNR + airline + cabin + cash TBD until Janelle\'s Gmail is accessible. Cash purchase, amount TBD.' },
      { category: 'flight', description: 'SFO → SJD (Janelle, Alaska Airlines, May 26)', pnr: 'K3NPTC', note: 'Booked Economy on cash. Amount lives in janelle.tam@gmail.com — TBD until accessible.' },
      // ─── Lodging ───
      { category: 'hotel', description: 'Sycamore (AoA retreat venue, 4 nts May 20–24)', note: 'Booked as part of AoA retreat package. Lodging cost may be bundled with program fee — verify.' },
      { category: 'hotel', description: 'Ritz-Carlton Half Moon Bay (1 nt May 25–26)', program: 'Marriott Bonvoy', note: 'Pending — not yet booked. Bonvoy points or cash TBD; cash rate ~$400–600/night.' },
      // ─── Activities ───
      { category: 'activity', description: 'Art of the Accomplishment retreat program fee', note: 'Program tuition separate from lodging. Cost TBD.' },
      // ─── Transfers / Rental ───
      { category: 'transfer', description: 'National rental car (6 days, SFO pickup May 20 → return May 26)', note: 'Booking pending — ~$300–450 expected for compact/mid-size.' },
      { category: 'other', description: 'Fuel + meals + incidentals (rough buffer)', note: 'Estimate ~$200–400 across the 6 days; many meals included in retreat package.' },
    ],
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
    status: 'complete',
    statusLabel: 'Complete',
    travelers: '2 adults',
    heroImage: 'mobula-rays-jumping',
    flights: [
      { segment: 1, date: '2026-05-25', route: 'SEA → SJD', time: '9:45am → 2:09pm', airline: 'Delta Air Lines (DL1914)', cabin: 'First (Z fare)', confirmation: 'GMSPZ9', status: 'booked', notes: 'Terry flight — rebooked & upgraded from May 26 Economy to May 25 First Class. Ticket 0062423684425.' },
      { segment: 2, date: '2026-05-26', route: 'SFO → SJD', time: '10:50am → 2:02pm', airline: 'Alaska Airlines', cabin: 'Economy', confirmation: 'K3NPTC', status: 'booked', notes: 'Janelle flight (also in Janelle SF trip)' },
      { segment: 3, date: '2026-05-31', route: 'SJD → SEA', time: '3:30pm → 8:00pm', airline: 'Alaska Airlines (AS1401)', cabin: 'Economy', confirmation: 'IMDKIR', status: 'booked', notes: 'Terry return' },
      { segment: 4, date: '2026-05-31', route: 'SJD → SEA', time: '3:14pm → 7:53pm', airline: 'Delta Air Lines (DL1837)', confirmation: 'JQDOIY', status: 'booked', notes: 'Janelle return' },
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
      { title: 'Post-Trip Retro — May 2026', content: 'Verdict: a hit. The mobula aggregation delivered and the trip was a blast. Two lessons captured for future planning. (1) CABIN — the economy legs (Janelle SFO→SJD, and both SJD→SEA returns) were the weak point; only Terry\'s outbound was up front. Going forward we default to business/first on every leg, even short-haul, and Dr. G should price premium cabins first rather than defaulting to coach. (2) DIY OVER GUIDED — we could have skipped the packaged operator entirely: drive/transfer ourselves, book our own La Paz hotel, and arrange day boat trips à la carte. The guided expedition was convenient but not necessary. For trips like this we now prefer to self-plan rather than buy a guided package.' },
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
      { date: 'May 25', label: 'Terry arrives Cabo (solo)', description: 'Terry: SEA 9:45am → SJD 2:09pm on Delta DL1914 First Class (rebooked from May 26 Economy). Check in at Park Hyatt Los Cabos. Solo evening — adjust to Baja time before Janelle arrives.', type: 'travel' },
      { date: 'May 26', label: 'Janelle arrives Cabo', description: 'Janelle: SFO 10:50am → SJD 2:02pm (conf: K3NPTC). Reunite at Park Hyatt Los Cabos. Dinner and early night before expedition.', type: 'travel' },
      { date: 'May 27', label: 'Transfer to La Paz & Prep', description: 'Check out Park Hyatt. Transfer Cabo → La Paz (~2.5 hours). Check into La Paz accommodations. Afternoon briefing with expedition operator. Gear check and safety orientation. Explore the Malecón. Early dinner.', type: 'travel' },
      { date: 'May 28', label: 'Expedition Day 1', description: 'Early 5am departure by boat into the Sea of Cortez. 6–8 hours on the water searching for mobula ray aggregations. Snorkeling with rays when schools are located. Possible whale shark or sea lion encounters. Return to port by afternoon.', type: 'activity' },
      { date: 'May 29', label: 'Expedition Day 2', description: 'Second day on the water. Different location based on spotter reports. Peak breaching activity often mid-morning. Underwater photography opportunities. Marine biologist guide context on ray behavior.', type: 'activity' },
      { date: 'May 30', label: 'Expedition Day 3 or Rest', description: 'Optional third expedition day or rest/explore day. La Paz markets, seafood restaurants, sunset on the Malecón. Transfer back to Cabo area if needed for morning flight.', type: 'flexible' },
      { date: 'May 31', label: 'Fly Home', description: 'Terry: SJD 3:30pm → SEA 8:00pm on Alaska AS1401 (conf: IMDKIR). Janelle: SJD 3:14pm → SEA 7:53pm on Delta DL1837 (conf: JQDOIY). Home by evening.', type: 'travel' },
    ],
    costs: [
      // ─── Flights ───
      { category: 'flight', description: 'SEA → SJD on Delta DL1914 (First, Z fare, Terry)', pnr: 'GMSPZ9', cashUsd: 380, taxesUsd: 88.52, note: '$380.02 paid + $498.96 eCredit applied. Includes $5.60 9/11 + $23.40 US transport tax + $55.52 MX tourism tax + $4.50 PFC. Rebooked from May 26 Economy to May 25 First. Remaining eCredit $118.94 on #0060540847087 (verify expiry).', source: 'Gmail: Delta receipt Apr 18 2026' },
      { category: 'flight', description: 'SFO → SJD on Alaska (Janelle, May 26)', pnr: 'K3NPTC', note: 'Cash purchase. Amount lives in janelle.tam@gmail.com — TBD until accessible.' },
      { category: 'flight', description: 'SJD → SEA on Alaska AS1401 (Terry return)', pnr: 'IMDKIR', points: 18000, program: 'Alaska Mileage Plan', note: '~18K AS award per Terry\'s recall. Exact points + cash taxes lives in janelle.tam@gmail.com — verify when accessible.' },
      { category: 'flight', description: 'SJD → SEA on Delta DL1837 (Janelle return)', pnr: 'JQDOIY', points: 18000, note: '~18K points per Terry\'s recall. Program (likely Delta SkyMiles or AS partner) + exact points + cash taxes lives in janelle.tam@gmail.com — verify when accessible.' },
      // ─── Lodging ───
      { category: 'hotel', description: 'Park Hyatt Cabo Del Sol (2 nts, May 25–27)', program: 'Hyatt', pnr: '66455641', points: 35000, note: '~35K Hyatt points per Terry\'s recall — VERIFY against current chart (PH Cabo is Cat 7: 30K standard, 25K off-peak, 40K peak per night, so 2 nts likely 60–80K total — 35K may be per-night not total).' },
      // ─── Activities (includes lodging via operator) ───
      { category: 'activity', description: 'Dive Ninja mobula expedition (incl. La Paz lodging, May 27–30)', note: 'BOOKED with Dive Ninja Expeditions. Package includes 3 nights La Paz accommodation + expedition days. Cost details TBD — confirm cash total + days included.' },
      // ─── Transfers ───
      { category: 'transfer', description: 'SJD airport → Park Hyatt Cabo (Terry May 25, Janelle May 26)', note: 'Hyatt arranges or Uber. ~$50–80 each direction.' },
      { category: 'transfer', description: 'Cabo → La Paz transfer (May 27)', note: 'May be included in Dive Ninja package — verify. Otherwise ~$200–300 private car, $50–80 shuttle.' },
      { category: 'transfer', description: 'La Paz → SJD return transfer (May 31 morning)', note: 'May be included in Dive Ninja package — verify. Otherwise ~$200–250 private, $50–75 shuttle.' },
      // ─── Other ───
      { category: 'other', description: 'Meals + drinks + dive gear rental + reef-safe sunscreen + tips', note: 'Estimate ~$400–600 for 6 days (2 pax). Some meals may be included in Dive Ninja package.' },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // LA WEEKEND — July 2026
  // ═══════════════════════════════════════════════════════
  {
    slug: 'la-jul-2026',
    title: 'LA Weekend',
    subtitle: 'Olivia Dean Concert',
    region: 'North America',
    country: 'United States',
    dates: 'July 14–16, 2026',
    month: 'July',
    year: 2026,
    status: 'booked',
    statusLabel: 'Booked',
    travelers: '2 adults (Terry & Janelle)',
    heroImage: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da',
    flights: [
      { segment: 1, date: '2026-07-14', route: 'SEA → BUR', time: '11:20 AM → 1:56 PM', airline: 'Alaska Airlines (AS529)', aircraft: 'Boeing 737-800', cabin: 'Economy', confirmation: 'KSHTZK', status: 'booked', notes: 'Nonstop, 2h 36m. Pick up National rental car at BUR.' },
      { segment: 2, date: '2026-07-16', route: 'ONT → SEA', time: '2:05 PM → 4:45 PM', airline: 'Alaska Airlines (AS567)', cabin: 'Economy', confirmation: 'KSVWMI', status: 'booked', notes: 'Nonstop, 2h 40m. Drop National rental car at ONT before flight.' },
    ],
    hotels: [
      { property: 'Hyatt House Medical Plaza', location: 'Los Angeles, CA', checkIn: '2026-07-14', checkOut: '2026-07-15', program: 'Hyatt', status: 'booked', notes: '12K Hyatt points. Night of Jul 14. Olivia Dean concert same evening.' },
    ],
    actionItems: [],
    intel: [
      { title: 'Getting Around', content: 'National rental car pickup at BUR (Burbank), drop-off at ONT (Ontario). Driving is the right call in LA — covers multiple areas and allows drop-off at the departure airport.' },
    ],
    awardTips: [],
    itinerary: [
      { date: 'July 14', label: 'Fly to LA — Concert Night', description: 'SEA 11:20 AM → BUR 1:56 PM on Alaska AS529 (conf: KSHTZK). Pick up National rental car at BUR. Check into Hyatt House Medical Plaza. Olivia Dean concert that evening (Marriott win).', type: 'travel' },
      { date: 'July 15', label: 'Day in LA', description: 'Free day in Los Angeles.', type: 'flexible' },
      { date: 'July 16', label: 'Fly Home', description: 'Check out Hyatt House Medical Plaza. Drop National rental car at ONT. ONT 2:05 PM → SEA 4:45 PM nonstop (2h 40m).', type: 'travel' },
    ],
    costs: [
      { category: 'flight', description: 'SEA → BUR on Alaska AS529 (Jul 14)', pnr: 'KSHTZK', note: 'Economy. Boeing 737-800.' },
      { category: 'flight', description: 'ONT → SEA on Alaska AS567 (Jul 16)', pnr: 'KSVWMI', note: 'Economy. Nonstop 2h 40m.' },
      { category: 'hotel', description: 'Hyatt House Medical Plaza (1 nt, Jul 14–15)', program: 'Hyatt', points: 12000, note: '12K Hyatt points.' },
      { category: 'activity', description: 'Olivia Dean concert tickets (Jul 14)', note: 'Won via Marriott promotion.' },
      { category: 'transfer', description: 'National rental car — BUR pickup, ONT drop-off (Jul 14–16)', note: '2 days. Covers LA area + airport flexibility.' },
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
      { segment: 0.5, date: '2026-07-26', route: 'SEA → LHR', time: '21:45 (Jul 26) → 15:05 (Jul 27)', airline: 'Alaska Airlines (AS100)', cabin: 'Business', confirmation: 'OMKZTH', status: 'booked', notes: 'JANELLE ONLY — pre-trip positioning to London. SEA 21:45 Jul 26 → LHR T3 15:05 Jul 27, 9h 20m. Booked via Turkish Miles&Smiles (90K miles + ~$200–300 taxes), operated by Alaska AS100. ~5 days in London before the Aug 1 LHR→Bishkek leg.' },
      { segment: 1, date: '2026-07-31', route: 'SEA → IST', time: '19:10 → 17:00 +1', airline: 'Turkish Airlines', cabin: 'Business', confirmation: 'S3BPNY', status: 'booked', notes: 'TERRY ONLY — Janelle split off this PNR (she now routes via London, conf T6CGRM). Terry seat 4A. Remove Janelle from S3BPNY and redeposit her SEA→IST miles.' },
      { segment: 1.5, date: '2026-08-01', route: 'LHR → IST → BSZ (Bishkek)', time: '13:20 → 04:30 +2', airline: 'Turkish Airlines (TK1990 + TK348)', cabin: 'Business', confirmation: 'T6CGRM', status: 'booked', notes: 'JANELLE ONLY — Janelle flies to London first (SEA→LHR booked separately), then LHR 13:20 Aug 1 → IST → Bishkek (BSZ/Manas) 04:30 Aug 2. Final leg TK348 departs IST 20:25 — SAME flight as Terry\'s RP7MM5. They reunite at Istanbul and arrive together.' },
      { segment: 2, date: '2026-08-01', route: 'IST → BSZ (Bishkek)', time: '20:25 → 04:30 +1', airline: 'Turkish Airlines (TK348)', aircraft: 'A321neo', cabin: 'Business', confirmation: 'RP7MM5', status: 'booked', notes: 'TERRY ONLY — 35K + $121. 5h 5m. Manas International Airport (BSZ). Janelle is on this same TK348 flight via her London ticket (T6CGRM); remove her from RP7MM5 and redeposit those miles.' },
      { segment: 2.5, date: '2026-08-08', route: 'BSZ → ALA', time: '18:55 (BSZ) → 18:45 (ALA)', airline: 'Air Astana', cabin: 'Economy', status: 'booked', notes: 'Bishkek → Almaty. 50 min direct. Arrives 10 min "earlier" due to Bishkek (UTC+6) → Almaty (UTC+5) time zone shift. 24K Turkish Miles&Smiles.' },
      { segment: 3, date: '2026-08-12', route: 'ALA → IST', time: '08:55 → 13:15', airline: 'Turkish Airlines (TK353)', aircraft: 'A321neo', cabin: 'Business', confirmation: 'VT8IUE', status: 'booked', notes: 'Almaty to Istanbul. 6h 20m. 1hr 40min layover before IST→SEA.' },
      { segment: 4, date: '2026-08-12', route: 'IST → SEA', time: '2:55pm → 5:15pm', airline: 'Turkish Airlines (TK203)', cabin: 'Business', confirmation: 'TD67GM', status: 'booked', notes: '12hr 20min flight. Direct Istanbul to Seattle.' },
      { segment: 5, date: '2026-08-12', route: 'HEL → SEA', time: '4:25pm → 4:00pm', airline: 'Finnair (AY33)', confirmation: 'DFMG2R', status: 'booked', notes: 'Ticketed as Qantas. Backup/alternative return. Also conf 96MPQQ.' },
    ],
    hotels: [
      { property: 'Hyatt Regency Bishkek', location: 'Bishkek, Kyrgyzstan', checkIn: '2026-08-02', checkOut: '2026-08-03', program: 'Hyatt', status: 'booked', notes: 'Aug 2 arrival night. Flight lands 4:30am — earliest official check-in 8:00am. Contact concierge in advance to request early access. Trek operator picks up from hotel on Aug 3.' },
      { property: 'Yurt stays (Gusary Stables)', location: 'Song-Kol Lake region, Kyrgyzstan', checkIn: '2026-08-03', checkOut: '2026-08-07', status: 'booked', notes: 'Aug 3–7, included with Gusary Stables trek. 4 nights in yurt camps.' },
      { property: 'Hyatt Regency Bishkek', location: 'Bishkek, Kyrgyzstan', checkIn: '2026-08-07', checkOut: '2026-08-08', program: 'Hyatt', status: 'booked', notes: 'Post-trek recovery night in Bishkek before Aug 8 flight to Almaty.' },
      { property: 'TBD — Almaty', location: 'Almaty, Kazakhstan', checkIn: '2026-08-08', checkOut: '2026-08-12', status: 'not_booked', notes: 'Post-trek recovery, 4 nights (Aug 8–12). Fly in from Bishkek on Aug 8.' },
    ],
    actionItems: [
      { text: 'Split outbound PNRs: remove Janelle from S3BPNY (SEA→IST) AND RP7MM5 (IST→Bishkek) — she now routes via London on T6CGRM. Redeposit her miles on both legs.', urgent: true },
      { text: 'Verify RP7MM5 IST→Bishkek = TK348 (same flight as Janelle\'s T6CGRM final leg) and that BSZ = Manas/FRU, so they truly arrive together', urgent: true },
      { text: 'Confirm Janelle\'s Qantas/Finnair DFMG2R cancellation completed (90K refund?)', urgent: true },
      { text: 'Contact Hyatt Bishkek concierge — arrive 4:30am, earliest official check-in 8am, request early room access', urgent: true },
      { text: 'Book Almaty hotel for Aug 6–12 (post-trek recovery)', urgent: true },
      { text: 'Confirm Gusary Stables trek details: dates, cost, transfers in/out', urgent: false },
      { text: 'Obtain Kyrgyzstan e-Visa (online, 24–48 hrs; do by mid-July)', urgent: false },
      { text: 'Confirm Kazakhstan visa-free entry (US passport, 30-day stay)', urgent: false },
    ],
    intel: [
      { title: 'The Horse in Kyrgyz Culture', content: 'In Kyrgyzstan, the horse is central to identity, spirituality, and survival on the high Tian Shan mountains. Kyrgyz nomadic herders have lived on horseback for over 1,000 years. The phrase "Kyrgyz without a horse is not Kyrgyz" encapsulates the cultural weight. Traditional games like buzkashi remain central to festivals. Staying in a yurt community and learning to ride in Kyrgyz tradition—eating fermented horse milk (kumis) with herders, sleeping in a felt home—is an immersive cultural experience. August is peak trekking season.' },
      { title: 'Song-Kol Lake: High Alpine Trekking', content: 'Song-Kol Lake sits at 10,000 feet in central Kyrgyzstan—a pristine alpine lake ringed by snow-capped peaks and endless grassland. The 3–4 day horse trek features riding across high passes (Tian Shan range) with nights in yurts. Guides are Kyrgyz herders, meals are simple (bread, cheese, yak butter, mutton). August offers warm days (60–70°F) but nights drop to 40°F. Altitude sickness is possible; acclimatize in Bishkek first.' },
      { title: 'Bishkek & Almaty', content: 'Bishkek (2,600 ft) is your acclimatization point. Osh Bazaar is the city\'s soul: spices, textiles, dried fruits, leather goods, street food. Almaty, Kazakhstan\'s former capital, has strong coffee culture, hiking access, and Green Bazaar which rivals Osh Bazaar for sensory overload. Both cities offer great post-trek recovery.' },
    ],
    awardTips: [
      { program: 'Turkish Miles&Smiles', route: 'SEA → IST', cost: '65K + ~$300/pp', note: 'Outbound long-haul. 130K miles + $600 cash for 2 pax.' },
      { program: 'Turkish Miles&Smiles', route: 'IST → FRU (Bishkek)', cost: '35K + $121/pp', note: 'Outbound regional. 70K miles + $242 cash for 2 pax.' },
      { program: 'Turkish Miles&Smiles', route: 'ALA → IST', cost: '35K + $180/pp', note: 'Return regional. 70K miles + $360 cash for 2 pax.' },
      { program: 'Turkish Miles&Smiles', route: 'IST → SEA', cost: '135K + ~$300/pp', note: 'Return long-haul. 270K miles + $600 cash for 2 pax. Total Turkish miles trip-wide: ~540K for 2 pax.' },
    ],
    itinerary: [
      { date: 'July 26–27', label: 'Janelle Flies to London', description: 'Janelle: SEA 21:45 → LHR T3 15:05 next day on Alaska AS100 Business (conf: OMKZTH). 9h 20m. Pre-trip in London before continuing to Bishkek on Aug 1.', type: 'travel' },
      { date: 'July 31', label: 'Terry Departs Seattle', description: 'Terry: SEA 19:10 → IST 17:00 next day (conf: S3BPNY, seat 4A). Overnight flight. Janelle is already in London.', type: 'travel' },
      { date: 'August 1', label: 'Reunite in Istanbul → Bishkek', description: 'Terry arrives IST 17:00. Janelle flies LHR 13:20 → IST (TK1990, conf: T6CGRM) and meets Terry at the airport. They board the SAME flight together — TK348 IST 20:25 → Bishkek (BSZ/Manas) 04:30 on Aug 2, 5h 5m, A321neo, Business (Terry: RP7MM5, Janelle: T6CGRM).', type: 'travel' },
      { date: 'August 2', label: 'Arrive Bishkek — Hyatt', description: 'Land 4:30am at Manas (BSZ). Transfer to Hyatt Bishkek (~30 min). Earliest official check-in 8am — concierge contacted in advance for early access. Sleep and recover. Light afternoon in the city.', type: 'rest' },
      { date: 'August 3', label: 'Trek Begins — Gusary Stables Pickup', description: 'Gusary Stables picks up from Hyatt Bishkek lobby. Head downstairs with gear and depart. ~5–6 hour drive south toward Song-Kol region. Meet horses and guides at trailhead. Short afternoon ride to first yurt camp.', type: 'travel' },
      { date: 'August 4', label: 'Horse Trek — Day 1', description: '5–6 hours in the saddle crossing high passes. Gradual altitude gain toward Song-Kol (10,000 ft). Lunch at herder\'s yurt. Simple dinner — bread, cheese, mutton stew.', type: 'activity' },
      { date: 'August 5', label: 'Horse Trek — Day 2', description: 'Ride along shores of Song-Kol Lake. Blue alpine water, snow-capped peaks. Visit nomadic herding families. Beshbarmak dinner. Night in lakeside yurt — extraordinary stars.', type: 'activity' },
      { date: 'August 6', label: 'Horse Trek — Day 3', description: 'Continued riding through Tian Shan highland terrain. Yurt camp overnight.', type: 'activity' },
      { date: 'August 7', label: 'Trek Complete — Return to Bishkek', description: 'Final morning ride. Descend from high passes. Trek done. Return to Bishkek, check into Hyatt Regency Bishkek for recovery night.', type: 'activity' },
      { date: 'August 8', label: 'Fly Bishkek → Almaty', description: 'Air Astana BSZ 18:55 → ALA 18:45 (50 min direct; arrives earlier due to UTC+6→UTC+5 time zone shift). Check into Almaty hotel. Begin recovery.', type: 'travel' },
      { date: 'Aug 9–11', label: 'Almaty — Recovery & Explore', description: 'Green Bazaar, coffee culture, hiking, Charyn Canyon day trip option. Recovery days before departure. Explore Kazakh cuisine.', type: 'flexible' },
      { date: 'August 12', label: 'Fly Home (together)', description: 'Check out Almaty hotel by 06:30. Terry & Janelle fly home together: ALA 9:00am → IST 13:15 (conf: VT8IUE), then IST 14:55 → SEA 17:15 on Turkish TK203 (conf: TD67GM). Home Seattle evening.', type: 'travel' },
    ],
    costs: [
      // ─── Flights — Outbound (Terry: Seattle · Janelle: via London) ───
      { category: 'flight', description: 'SEA → IST on Turkish Business (Jul 31, TERRY only)', pnr: 'S3BPNY', seat: 'Terry 4A', points: 65000, program: 'Turkish Miles&Smiles', cashUsd: 300, note: 'Terry solo — 65K miles + $300. Janelle split off this PNR (now routes via London); redeposit her 65K + $300.' },
      { category: 'flight', description: 'IST → Bishkek on Turkish TK348 Business A321 (Aug 1, TERRY only)', pnr: 'RP7MM5', points: 35000, program: 'Turkish Miles&Smiles', cashUsd: 121, note: 'Terry solo — 35K miles + $121. Janelle is on this SAME TK348 flight via her London ticket (T6CGRM); remove her from RP7MM5 and redeposit her 35K + $121.' },
      { category: 'flight', description: 'SEA → LHR on Alaska AS100 Business (Jul 26, JANELLE only)', pnr: 'OMKZTH', points: 90000, program: 'Turkish Miles&Smiles', cashUsd: 250, note: 'Janelle\'s pre-trip positioning to London. SEA 21:45 → LHR T3 15:05 Jul 27. 9h 20m, Business. Booked via Turkish Miles&Smiles (90K miles + ~$200–300 taxes), operated by Alaska AS100.' },
      { category: 'flight', description: 'LHR → IST → Bishkek on Turkish Business (Aug 1, JANELLE only)', pnr: 'T6CGRM', program: 'Turkish Miles&Smiles', note: 'Janelle LHR 13:20 → IST (TK1990) → Bishkek 04:30 (TK348, same flight as Terry\'s RP7MM5). Miles + cash TBD — pull from Janelle\'s Turkish booking.' },
      // ─── Flights — Bishkek → Almaty ───
      { category: 'flight', description: 'BSZ → ALA on Air Astana (Aug 8, 2 pax)', points: 24000, program: 'Turkish Miles&Smiles', note: '18:55 BSZ → 18:45 ALA, 50 min direct. 24K Turkish Miles&Smiles transfer.' },
      // ─── Flights — Return ───
      { category: 'flight', description: 'ALA → IST on Turkish TK0353 Business (Aug 12, 2 pax)', pnr: 'VT8IUE', points: 70000, program: 'Turkish Miles&Smiles', cashUsd: 360, note: '35K miles + $180 cash per person × 2 pax = 70K miles + $360 cash.' },
      { category: 'flight', description: 'IST → SEA on Turkish TK203 Business (Aug 12, 2 pax)', pnr: 'TD67GM', points: 270000, program: 'Turkish Miles&Smiles', cashUsd: 600, note: '135K miles + $300 cash per person × 2 pax = 270K miles + $600 cash. Replaced cancelled Finnair AY33 backup.' },
      { category: 'flight', description: 'HEL → SEA on Finnair AY33 (backup, cancelled)', pnr: 'DFMG2R / 96MPQQ', canceled: true, note: 'Qantas-ticketed alternative return — confirm cancellation processed and 90K Janelle refund received.' },
      // ─── Lodging ───
      { category: 'hotel', description: 'Hyatt Regency Bishkek (1 nt, Aug 2–3)', program: 'Hyatt', note: 'Booked. Arrive 4:30am — earliest check-in 8am. Concierge contact needed for early access. Trek pickup from lobby Aug 3.' },
      { category: 'hotel', description: 'Hyatt Regency Bishkek (1 nt, Aug 7–8)', program: 'Hyatt', note: 'Booked. Post-trek recovery night. Fly to Almaty on Aug 8.' },
      { category: 'hotel', description: 'Yurt stays at Song-Kol Lake (3 nts trek, Aug 3–6)', note: 'Bundled with Gusary Stables trek operator — see Activities below.' },
      { category: 'hotel', description: 'Almaty hotel (6 nts, Aug 6–12)', note: 'Not yet booked. Recovery base — Ritz-Carlton (luxury w/ spa) or Hilton Garden Inn (mid-range). $150–500/night × 6 = $900–3,000.' },
      // ─── Activities ───
      { category: 'activity', description: 'Gusary Stables horse trek — Song-Kol Lake (Aug 3–6)', note: 'BOOKED with Gusary Stables. Includes horses, guides, all meals, yurt accommodation. Cost details TBD — confirm trek days, total cash, what\'s included (transfers in/out).' },
      { category: 'activity', description: 'Trek guide gratuities (~$10–20/pp/day × 2 pax × 4 days)', note: 'Cash for herder guides at end of trek — ~$80–160 USD or KGS equivalent.' },
      // ─── Transfers ───
      { category: 'transfer', description: 'Bishkek airport → hotel (Aug 2, 4:30am arrival)', note: 'Yandex Taxi / Uber. ~$10–20.' },
      { category: 'transfer', description: 'Trek-end → Almaty transfer (Aug 6)', note: 'Verify if Gusary Stables includes Almaty drop-off. Otherwise private car (~$200) or shared transfer (~$80–150).' },
      { category: 'transfer', description: 'Almaty hotel → airport (Aug 12)', note: 'Yandex Taxi / Uber. ~$10–20.' },
      // ─── Other ───
      { category: 'other', description: 'Kyrgyzstan e-Visa (~$60/person × 2)', cashUsd: 120, note: 'Apply 24–48 hrs in advance at evisa.e-gov.kg.' },
      { category: 'other', description: 'Meals (Bishkek + Almaty) + market shopping + drinks', note: 'Estimate ~$400–800 across 13 days for 2 pax. Trek meals included.' },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // IOP — September/October 2026 (Indonesia + Taipei)
  // ═══════════════════════════════════════════════════════
  {
    slug: 'iop-sep-2026',
    title: 'IOP — Indo Ocean Project',
    subtitle: 'Alor Diving Expedition + Taipei Stopover',
    region: 'Southeast Asia',
    country: 'Indonesia & Taiwan',
    dates: 'September 24 – October 12, 2026',
    month: 'September',
    year: 2026,
    status: 'partially_booked',
    statusLabel: 'Partially Booked',
    travelers: 'Terry',
    flights: [
      { segment: 1, date: '2026-09-24', route: 'SEA → SIN', time: '10:15 → 17:35 +1', airline: 'Singapore Airlines SQ 027 (A350-900)', cabin: 'Business', confirmation: 'DISMSE', status: 'booked', notes: 'Seat 15A. 107K KrisFlyer + $17.20. Arrive Singapore Sept 25.' },
      { segment: 2, date: '2026-09-25', route: 'SIN → CGK', time: '18:30 → 19:20', airline: 'Singapore Airlines SQ 966 (A350-900)', cabin: 'Business', confirmation: 'DISMSE', status: 'booked', notes: 'Seat 15K. Same PNR as SEA-SIN — combined SQ KrisFlyer Business redemption.' },
      { segment: 3, date: '2026-09-26', route: 'CGK → KOE', time: '06:45 → 10:45', airline: 'Garuda Indonesia GA456', cabin: 'Business', confirmation: 'DOUUN7', status: 'booked', notes: '21.5K Virgin Atlantic Flying Club + $10.40. Early start — leave Jakarta hotel by 04:30.' },
      { segment: 4, date: '2026-09-27', route: 'KOE → ARD', time: '08:40 → 09:40', airline: 'Wings Air IW1943', cabin: 'Economy', confirmation: 'HKSRAV', status: 'booked', notes: 'ATR turboprop. Baggage: 1 personal + 1 carry-on 7kg + 1 checked 10kg — tight for dive gear.' },
      { segment: 5, date: '2026-10-09', route: 'AMQ → CGK', time: '16:10 → 17:40', airline: 'Garuda Indonesia GA647', cabin: 'Business', confirmation: 'DOSB8U', status: 'booked', notes: '21.5K Virgin Atlantic Flying Club + $4.50. Ambon to Jakarta after Banda Sea expedition.' },
      { segment: 6, date: '2026-10-10', route: 'CGK → TPE', time: '14:40 → 21:10', airline: 'China Airlines CI 0762', cabin: 'Business', confirmation: 'YRIBKT', status: 'booked', notes: 'Jakarta T3 to Taipei T1. Operating + marketing carrier is China Airlines. Confirm ticket stock (CI vs AF codeshare).' },
      { segment: 7, date: '2026-10-12', route: 'TPE → SEA', time: '23:40 → 19:30 PT (same day)', airline: 'EVA Air BR26', cabin: 'Business', confirmation: 'FA6F6L', status: 'booked', notes: '75K Star Alliance + ~TWD 4,010 (~$130). 10h 50m. Date-line magic: arrives Seattle evening of same calendar day.' },
    ],
    hotels: [
      { property: 'Park Hyatt Jakarta', location: 'Jakarta, Indonesia', checkIn: '2026-09-25', checkOut: '2026-09-26', program: 'Hyatt', status: 'booked', notes: '20K Hyatt points. Overnight transit before 06:45 GA456 — check out by 04:30.' },
      { property: 'Kupang overnight hotel (TBD — Sotis / Swiss-Belinn / Aston)', location: 'Kupang, Indonesia', checkIn: '2026-09-26', checkOut: '2026-09-27', status: 'not_booked', notes: 'Forced overnight in Kupang: GA456 lands 10:45 Sept 26, Wings Air IW1943 to Alor is the only daily option at 08:40 Sept 27. ~$45-80 cash. Top picks: Sotis Hotel Kupang, Swiss-Belinn Kristal, Aston Kupang.' },
      { property: 'Indo Ocean Project — Alor Expedition', location: 'Alor & Banda Sea, Indonesia', checkIn: '2026-09-27', checkOut: '2026-10-09', status: 'booked', notes: '12 nights, €4,900. Shore-based / liveaboard — citizen-science dive expedition (indooceanproject.org).' },
      { property: 'Park Hyatt Jakarta', location: 'Jakarta, Indonesia', checkIn: '2026-10-09', checkOut: '2026-10-10', program: 'Hyatt', status: 'booked', notes: '20K Hyatt points. Recovery night after dive expedition.' },
      { property: 'Grand Hyatt Taipei', location: 'Taipei, Taiwan', checkIn: '2026-10-10', checkOut: '2026-10-12', program: 'Hyatt', status: 'booked', notes: '34K Hyatt points (17K × 2 nights), Oct 10 + Oct 11 in Xinyi. Request late checkout / day-use Oct 12 to cover the 23:40 BR26 flight.' },
    ],
    actionItems: [
      { text: 'Book Kupang overnight hotel for Sept 26 (Sotis / Swiss-Belinn / Aston — cash $45-80)', urgent: true },
      { text: 'Request late checkout / day-use room at Grand Hyatt Taipei for Oct 12 (BR26 departs 23:40)', urgent: false },
      { text: 'Contact Indo Ocean Project to confirm Sept 27 ARD arrival logistics + gear list', urgent: false },
      { text: 'Confirm CI 0762 ticket stock (CI direct vs AF codeshare) — affects seat management', urgent: false },
      { text: 'Address Wings Air 10kg checked baggage limit (ship dive gear ahead or pay extra)', urgent: false },
      { text: 'Indonesia e-Visa application (apply 30+ days before)', urgent: false },
      { text: 'Travel insurance with diving + remote location + medical evac coverage', urgent: false },
    ],
    intel: [
      { title: 'Indo Ocean Project — The Operator', content: 'IOP (indooceanproject.org) is a marine conservation organization running citizen-science dive expeditions in Indonesia (Nusa Penida, Komodo, Alor). The 4,900 EUR / 12-night Alor program is research-focused — daily 3–4 dives with data collection (manta ID, reef monitoring, megafauna surveys). Small group (6–12), shore-based or liveaboard rotation. Down-to-earth and scientific rather than white-glove luxury — ideal for solo divers who want depth (literal and figurative).' },
      { title: 'Alor — World-Class Diving', content: 'Alor is one of Indonesia\'s most remote and pristine diving destinations, located in the Lesser Sunda Islands east of Flores. The waters around Alor are known for extraordinary biodiversity, strong currents bringing pelagic species, and macro diving that rivals Lembeh Strait. Expect manta rays, hammerhead sharks, pygmy seahorses, and vibrant coral walls. Water temperatures are 75–82°F; visibility is typically 60–100+ feet.' },
      { title: 'Getting to Alor', content: 'The route is complex: SEA → SIN → CGK (Jakarta) overnight → KOE (Kupang) → ARD (Alor). Each leg is a step deeper into eastern Indonesia. Kupang is the capital of East Nusa Tenggara province and serves as the gateway to Alor. The KOE → ARD flight on Wings Air is a small ATR turboprop hop. Return route goes through Ambon (AMQ), reflecting the dive expedition moving through the Banda Sea.' },
      { title: 'Taipei Stopover', content: 'Two paid nights in Taipei (Oct 10 + 11) plus a late checkout or day room on Oct 12 for the 23:40 BR26 flight. Night markets (Shilin, Raohe), Din Tai Fung original location, tea houses in Jiufen, and world-class coffee culture. October weather is pleasant (75–85°F). Taipei is walkable with excellent MRT transit.' },
    ],
    awardTips: [
      { program: 'Singapore Airlines KrisFlyer', route: 'SEA → SIN → CGK (both legs Business)', cost: '107K KrisFlyer + $17.20', note: 'Single combined Business award — SEA-SIN on SQ 027 + SIN-CGK on SQ 966, both A350-900. Confirmation DISMSE. World-class long-haul product. Seats 15A and 15K.' },
      { program: 'Virgin Atlantic Flying Club', route: 'CGK → KOE on Garuda GA456 Business', cost: '21,500 VS + $10.40', note: 'Sweet spot: Garuda intra-Indonesia Business via Virgin Atlantic partner award. Confirmation DOUUN7.' },
      { program: 'Virgin Atlantic Flying Club', route: 'AMQ → CGK on Garuda GA647 Business', cost: '21,500 VS + $4.50', note: 'Second VS partner redemption for the return Garuda leg. Confirmation DOSB8U.' },
      { program: 'TBD (Star Alliance / Flying Blue)', route: 'CGK → TPE on China Airlines CI 0762 Business', cost: 'Award booking', note: 'Operating + marketing carrier is China Airlines (CI). Confirmation YRIBKT. Confirm which program issued the ticket.' },
      { program: 'Star Alliance partner award', route: 'TPE → SEA on EVA BR26 Business', cost: '75K + ~TWD 4,010 (~$130)', note: 'EVA Business return. Confirmation FA6F6L. 75K is consistent with Aeroplan or United Saver — confirm exact program for any future changes.' },
      { program: 'World of Hyatt', route: 'Park Hyatt Jakarta (Sept 25 + Oct 9)', cost: '40K total (20K × 2 nts)', note: 'Booked. 20K/night — solid redemption for both transit nights.' },
      { program: 'World of Hyatt', route: 'Grand Hyatt Taipei (Oct 10–12, 2 nts)', cost: '34K total (17K × 2 nts)', note: 'Booked. Cat 4 standard rate in Xinyi. Need late checkout / day-use Oct 12 for the 23:40 BR26 flight.' },
    ],
    itinerary: [
      { date: 'Sept 24', label: 'Depart Seattle', description: 'SQ 027 SEA 10:15 → SIN 17:35 +1 (Business, seat 15A). 16h 20m long-haul. PNR DISMSE.', type: 'travel' },
      { date: 'Sept 25', label: 'Singapore → Jakarta', description: 'SQ 966 SIN 18:30 → CGK 19:20 (Business, seat 15K). Check in to Park Hyatt Jakarta. Sleep early — 04:30 wake-up.', type: 'travel' },
      { date: 'Sept 26', label: 'Jakarta → Kupang', description: 'Check out Park Hyatt Jakarta 04:30. Garuda GA456 CGK 06:45 → KOE 10:45 (Business, PNR DOUUN7 via Virgin Atlantic). Check in to Kupang overnight hotel (Sotis / Swiss-Belinn / Aston — TBD).', type: 'travel' },
      { date: 'Sept 27', label: 'Kupang → Alor — IOP Expedition Begins', description: 'Check out Kupang hotel 07:00. Wings Air IW1943 KOE 08:40 → ARD 09:40 (PNR HKSRAV). Meet Indo Ocean Project crew. Orientation dive. 12-night expedition begins (€4,900 all-in).', type: 'activity' },
      { date: 'Sept 28 – Oct 8', label: '11 Days of Diving', description: 'Daily 3–4 dives across Alor archipelago and Banda Sea with the IOP team. Manta rays, hammerheads, pygmy seahorses, vibrant coral walls. Citizen-science data collection. Boat moves through eastern Indonesian waters toward Ambon.', type: 'activity' },
      { date: 'Oct 9', label: 'Diving Ends — Fly to Jakarta', description: 'Disembark IOP expedition at Ambon. Garuda GA647 AMQ 16:10 → CGK 17:40 (Business, PNR DOSB8U via Virgin Atlantic). Check in to Park Hyatt Jakarta. Decompress.', type: 'travel' },
      { date: 'Oct 10', label: 'Jakarta → Taipei', description: 'Check out Park Hyatt Jakarta (mid-morning). China Airlines CI 0762 CGK 14:40 → TPE 21:10 (Business, PNR YRIBKT). Check in to Grand Hyatt Taipei. Late-night street food at Raohe Night Market.', type: 'travel' },
      { date: 'Oct 11', label: 'Explore Taipei — Markets & Food', description: 'Raohe and Shilin night markets. Din Tai Fung original location. Bubble tea, xiaolongbao, mango shaved ice. MRT everywhere. Same Grand Hyatt for the night.', type: 'activity' },
      { date: 'Oct 12', label: 'Taipei → Late-Night Flight Home', description: 'Coffee at Cafe Junkissa or Funicello. Jiufen tea houses or Taipei 101. Late checkout / day-use room at Grand Hyatt Taipei. Transfer to TPE T2 at 20:30. EVA BR26 TPE 23:40 → SEA 19:30 PT *same day* (Business, PNR FA6F6L). Home by 21:00 Oct 12 — trip complete, 19 days.', type: 'travel' },
    ],
    costs: [
      // ─── Flights — Outbound (SEA → Alor) ───
      { category: 'flight', description: 'SEA → SIN → CGK on Singapore Airlines SQ 027 + SQ 966 (both Business)', pnr: 'DISMSE', points: 107000, program: 'Singapore KrisFlyer', cashUsd: 17.20, note: 'Single combined KrisFlyer Business redemption — both A350-900 legs. Seats 15A and 15K.' },
      { category: 'flight', description: 'CGK → KOE on Garuda GA456 Business (Sept 26)', pnr: 'DOUUN7', points: 21500, program: 'Virgin Atlantic Flying Club', cashUsd: 10.40, note: 'Sweet spot — Garuda intra-Indonesia Business via Virgin Atlantic partner award.' },
      { category: 'flight', description: 'KOE → ARD on Wings Air IW1943 Economy (Sept 27)', pnr: 'HKSRAV', note: 'Cash purchase. ATR turboprop. 10kg checked baggage limit — tight for dive gear.' },
      // ─── Flights — Return (Alor → Home) ───
      { category: 'flight', description: 'AMQ → CGK on Garuda GA647 Business (Oct 9)', pnr: 'DOSB8U', points: 21500, program: 'Virgin Atlantic Flying Club', cashUsd: 4.50, note: 'Second VS partner redemption for return Garuda leg.' },
      { category: 'flight', description: 'CGK → TPE on China Airlines CI 0762 Business (Oct 10)', pnr: 'YRIBKT', program: 'TBD (Star Alliance / Flying Blue)', note: 'Operating + marketing carrier is China Airlines (CI). Confirm ticket stock for change/cancel handling.' },
      { category: 'flight', description: 'TPE → SEA on EVA BR26 Business (Oct 12, 23:40 departure)', pnr: 'FA6F6L', points: 75000, program: 'Star Alliance partner award', cashUsd: 130, note: '75K + ~TWD 4,010 (~$130). Arrives Seattle same calendar day (Oct 12 19:30 PT). Confirm exact award program for future changes.' },
      // ─── Lodging ───
      { category: 'hotel', description: 'Park Hyatt Jakarta (1 nt, Sept 25 transit)', pnr: 'TBD', points: 20000, program: 'World of Hyatt', note: 'Booked at 20K Hyatt points.' },
      { category: 'hotel', description: 'Kupang overnight (1 nt, Sept 26)', cashUsd: 60, note: 'Forced overnight — only daily KOE→ARD flight is Sept 27 morning. Sotis / Swiss-Belinn / Aston ~$45-80 cash. Booking pending.' },
      { category: 'hotel', description: 'Park Hyatt Jakarta (1 nt, Oct 9 transit)', pnr: 'TBD', points: 20000, program: 'World of Hyatt', note: 'Booked at 20K Hyatt points.' },
      { category: 'hotel', description: 'Grand Hyatt Taipei (2 nts, Oct 10–12)', pnr: 'TBD', points: 34000, program: 'World of Hyatt', note: 'Booked at 17K × 2 = 34K Hyatt points. Late checkout / day-use needed Oct 12 (BR26 departs 23:40).' },
      // ─── Activities ───
      { category: 'activity', description: 'Alor dive operator (12 nts all-inclusive liveaboard/resort, Sept 27 – Oct 9)', cashUsd: 5500, note: '€4,900 booked, approx $5,500 USD at ~1.12 FX. Includes 4–5 dives/day, accommodation, all meals, gear, guides.' },
      { category: 'activity', description: 'Dive crew gratuities (~$10–15/day × 12 days)', note: 'Cash for dive crew at end — ~$120–180 USD.' },
      // ─── Other ───
      { category: 'other', description: 'Indonesia visa-on-arrival or e-Visa', cashUsd: 35, note: '~$35 USD on arrival or via online e-VOA.' },
      { category: 'other', description: 'Meals + drinks + snacks in Jakarta + Taipei', note: 'Estimate ~$300–500 across the non-dive days. Most meals included on dive expedition.' },
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
    dates: 'October 11+, 2026',
    month: 'October',
    year: 2026,
    status: 'partially_booked',
    statusLabel: 'Partially Booked',
    travelers: 'Janelle (solo)',
    heroImage: 'seoul-autumn',
    flights: [
      { segment: 0, date: '2026-10-11', route: 'SEA → ICN', cabin: 'Business', status: 'needs_action', notes: '⚠️ CANCEL THIS BOOKING — original direct outbound, replaced by new SEA→FRA→LHR→SGN→ICN routing. Pull PNR from janelle.tam@gmail.com and cancel.' },
      { segment: 1, date: '2026-10-11', route: 'SEA → FRA', time: '5:40 PM (Oct 11) → 12:45 PM (Oct 12)', airline: 'Condor (DE 2033)', cabin: 'Business', status: 'booked', notes: 'Terminal 1. 75K JetBlue points + $22.50. Janelle departs Seattle for Frankfurt, continues to London for work trip.' },
      { segment: 2, date: '2026-10-12', route: 'FRA → LHR', airline: 'TBD', cabin: 'TBD', status: 'needs_action', notes: 'Frankfurt to London — connecting leg for work trip. Details TBD.' },
      { segment: 3, date: 'TBD', route: 'LHR → SGN → ICN', airline: 'Vietnam Airlines', cabin: 'TBD', status: 'needs_action', notes: 'London to Seoul via Saigon (Ho Chi Minh City/SGN) on Vietnam Airlines. Details + PNR TBD.' },
      { segment: 4, date: 'TBD', route: 'ICN → SEA', cabin: 'Business', status: 'needs_action', notes: 'Janelle return Seoul → Seattle. Details TBD.' },
    ],
    hotels: [
      { property: 'Park Hyatt Seoul or Boutique Alternative', location: 'Hannam-dong, Seoul', status: 'not_booked', notes: 'Hannam-dong is the design/dining hub' },
    ],
    actionItems: [
      { text: 'CANCEL original SEA→ICN booking — replaced by new routing via FRA/LHR/SGN', urgent: true },
      { text: 'Book FRA→LHR connecting flight (Oct 12, after 12:45 PM arrival)', urgent: true },
      { text: 'Confirm Vietnam Airlines LHR→SGN→ICN details: dates, PNR, cabin, cost', urgent: true },
      { text: 'Lock Seoul arrival date and confirm full itinerary once London work trip dates are set', urgent: true },
      { text: 'Book hotel in Hannam-dong (Park Hyatt Seoul or boutique alternative)', urgent: false },
      { text: 'Book ICN→SEA return flight', urgent: false },
      { text: 'Make reservations: Jungsik / Mingles for Michelin dinner', urgent: false },
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
      { date: 'Day 7', label: 'Depart Seoul', description: 'Final morning shopping. Check out Hannam-dong hotel. AREX to Incheon. Fly ICN → SEA.', type: 'travel' },
    ],
    costs: [
      // ─── Flights ───
      { category: 'flight', description: 'SEA → ICN (Janelle outbound, Business)', points: 75000, note: '75K points one-way per Terry. Program (likely Aeroplan, ANA, or Korean Air SkyPass) + cash taxes + exact dates + PNR live in janelle.tam@gmail.com.' },
      { category: 'flight', description: 'ICN → SEA (Janelle return, Business)', points: 75000, note: '75K points one-way per Terry. Same booking as outbound likely. Details in janelle.tam@gmail.com.' },
      // ─── Lodging ───
      { category: 'hotel', description: 'Park Hyatt Seoul or boutique alternative (~7 nts, Hannam-dong)', program: 'Hyatt', note: 'Not yet booked. Park Hyatt Seoul Cat 5 = 25K Hyatt/night. ~$400–600/night cash.' },
      // ─── Transfers ───
      { category: 'transfer', description: 'AREX (Incheon Express) airport ↔ Seoul Station', cashUsd: 20, note: '~$10 each direction. Faster + cheaper than taxi.' },
      // ─── Other ───
      { category: 'other', description: 'Meals + cafés + K-beauty shopping + activities', note: 'Estimate ~$800–1,500 across 7 days solo. Includes Michelin meals (Jungsik/Mingles), market food, café crawl, Leeum, Changdeokgung, hanbok rental.' },
    ],
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
      { segment: 1, date: '2026-12-24', route: 'SEA → SIN', time: '8:45am → 5:45pm +1', airline: 'Singapore Airlines (SQ027)', cabin: 'Business', confirmation: 'TBD-FIX (was wrongly F6MWR7)', status: 'booked', notes: 'Christmas Eve departure. 17hr flight. SQ Business is world-class — 1-2-1 layout. PNR needs correction — F6MWR7 is the Sept 2026 IOP trip\'s PNR; this Dec booking has a different one (pull from Gmail).' },
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
      { program: 'Hyatt Points', route: 'Andaz SIN + Park Hyatt MLE', cost: '~45K (Andaz 3 nts) + ~120–160K (PH Maldives 4 nts)', note: '~165–205K total Hyatt for all booked nights. Peak holiday pricing on PH Hadahaa. Verify exact counts from confirmations 30914538 + 25671158.' },
      { program: 'Singapore Airlines KrisFlyer', route: 'SEA–SIN (Dec 24)', cost: 'KrisFlyer award (miles count TBD)', note: 'SQ Business outbound. PNR needs correction (currently incorrectly stored as F6MWR7).' },
      { program: 'Qatar Avios', route: 'CMB–DOH–SEA', cost: '140K Avios + $300/pp = 280K Avios + $600 cash for 2 pax', note: 'Return on Qatar Business. Qsuites if lucky — check seat map closer to departure.' },
      { program: 'Hyatt Points', route: 'Park Hyatt Doha (alternative)', cost: '~20–25K per night', note: 'For the 19hr Doha layover. Alternative: skip hotel and use Al Mourjan lounge.' },
    ],
    itinerary: [
      { date: 'Dec 24', label: 'Fly to Singapore', description: 'SEA 8:45am → SIN 5:45pm +1 on Singapore Airlines SQ027 Business (conf: F6MWR7). Christmas Eve in the air with SQ\'s legendary service. Book of Wonders menu. Arrive Christmas Day evening.', type: 'travel' },
      { date: 'Dec 25', label: 'Christmas in Singapore', description: 'Arrive 5:45pm. Check into Andaz Singapore (conf: 30914538) in Kampong Glam. Christmas evening walk along Orchard Road lights. Late dinner at hawker centre or hotel.', type: 'travel' },
      { date: 'Dec 26', label: 'Hawker Centre Day', description: 'Morning: Tiong Bahru coffee + kaya toast at 40 Hands. Joo Chiat/Katong for Peranakan heritage + 328 Katong Laksa. Afternoon: Gardens by the Bay — Cloud Forest dome. Evening: Chinatown Complex hawker crawl. Supertree light show at 8:45pm.', type: 'activity' },
      { date: 'Dec 27', label: 'Singapore Explore', description: 'Maxwell Food Centre for Tian Tian chicken rice. Marina Bay Sands observation deck. Little India and Haji Lane shopping. Evening: cocktails at Atlas Bar (Art Deco gin palace) or Lau Pa Sat satay street.', type: 'activity' },
      { date: 'Dec 28', label: 'Fly to Maldives', description: 'Check out Andaz Singapore. Fly SIN → MLE (needs booking, ~4.5hr). Domestic flight MLE → Kooddoo (55 min, resort arranges). Speedboat to Park Hyatt Hadahaa (15 min). Check in to Park Hyatt Hadahaa. First swim in the house reef. Sunset cocktails on the deck.', type: 'travel' },
      { date: 'Dec 29–30', label: 'Maldives Paradise', description: 'Overwater villa life. Morning snorkeling on the house reef (reef sharks, turtles). Afternoon dive excursion to nearby channels. Spa treatments. Beach dinner. Dec 30: guided manta ray snorkel trip if conditions are right.', type: 'rest' },
      { date: 'Dec 31', label: 'New Year\'s Eve — Maldives', description: 'Morning diving or kayaking. Afternoon relaxation. NYE gala dinner on the beach at Park Hyatt. Countdown under Maldivian stars. Ring in 2027 in paradise.', type: 'activity' },
      { date: 'Jan 1', label: 'Fly to Sri Lanka', description: 'Check out Park Hyatt Hadahaa (speedboat + domestic flight back to MLE — resort arranges). Fly MLE → CMB (needs booking, ~1.5hr). Arrive Colombo. Drive to south coast — Galle Fort (2.5hr) or Weligama. Check in to boutique hotel. Evening sunset on the ramparts of Galle Fort with a cocktail.', type: 'travel' },
      { date: 'Jan 2', label: 'Sri Lanka Day', description: 'Explore Galle Fort — Dutch architecture, boutique shops, the lighthouse walk. Or beach day at Weligama. Seafood dinner at a south coast restaurant. Pack for early departure.', type: 'activity' },
      { date: 'Jan 3', label: 'Fly Home — Leg 1', description: 'Check out Galle boutique by 05:30. Drive Galle → Colombo (2.5hr, depart by 6am). CMB 10:15am → DOH 12:45pm on Qatar QR665 (conf: 9YPE29). 19hr Doha layover. Explore Souq Waqif and Museum of Islamic Art, or rest in Al Mourjan Lounge.', type: 'travel' },
      { date: 'Jan 4', label: 'Arrive Home', description: 'DOH 7:55am → SEA 11:40am on Qatar QR719 Business (conf: 9BHJHH / 9YPE29). Home by lunch. 12-day, 3-country holiday season trip complete.', type: 'travel' },
    ],
    costs: [
      // ─── Flights — Outbound ───
      { category: 'flight', description: 'SEA → SIN on Singapore SQ027 Business (Dec 24)', pnr: 'TBD (different from F6MWR7)', program: 'Singapore KrisFlyer', note: 'PNR FIX NEEDED: trips.ts incorrectly shows F6MWR7 (which is actually the Sept 24 IOP trip\'s PNR). Dec 24 is a separate booking — pull correct PNR from Terry\'s Gmail. Booked on KrisFlyer award; miles count + cash taxes TBD.' },
      { category: 'flight', description: 'SIN → MLE (Dec 28)', note: 'Not yet booked. SQ direct ~$300–600 cash, or Scoot budget ~$150–250.' },
      // ─── Flights — Inter-region ───
      { category: 'flight', description: 'MLE → CMB (Maldives → Sri Lanka, Jan 1)', note: 'Not yet booked. SriLankan ~$170 cash, ~1.5hr.' },
      // ─── Flights — Return ───
      { category: 'flight', description: 'CMB → DOH → SEA on Qatar Business (Jan 3 + Jan 4, both pax)', pnr: '9YPE29 / 9BHJHH', program: 'Qatar Avios', points: 280000, cashUsd: 600, note: '140K Avios + $300 cash per person × 2 pax = 280K Avios + $600 cash. CMB-DOH on QR665 (5hr), DOH-SEA on QR719 (Qsuites if available). 19hr Doha layover between.' },
      // ─── Lodging ───
      { category: 'hotel', description: 'Andaz Singapore (3 nts, Dec 25–28)', program: 'Hyatt', pnr: '30914538', note: 'Booked on Hyatt points. Cat 4 = ~15K/nt × 3 = ~45K Hyatt estimated. Verify exact count.' },
      { category: 'hotel', description: 'Park Hyatt Maldives Hadahaa (4 nts, Dec 28–Jan 1, NYE)', program: 'Hyatt', pnr: '25671158', note: 'Booked on Hyatt points. Cat 7 = 30K standard / 40K peak per night × 4 = 120K–160K Hyatt estimated. Verify exact count. NYE gala dinner mandatory ~$2,200/couple.' },
      { category: 'hotel', description: 'Sri Lanka south coast (2 nts, Jan 1–3)', note: 'Not yet booked. Galle (Amangalla / Fort Bazaar / Cape Weligama) or Weligama. ~$300–800/nt depending on property.' },
      { category: 'hotel', description: 'Doha layover (1 nt, Jan 3–4)', program: 'Hyatt', note: 'Not yet booked. Park Hyatt Doha ~20–25K Hyatt/nt or skip hotel and use Al Mourjan Business Lounge for the 19hr layover.' },
      // ─── Transfers ───
      { category: 'transfer', description: 'MLE → Kooddoo domestic flight + speedboat RT to Hadahaa', note: 'Resort arranges. ~$500/pp RT typical for the seaplane/domestic combo.' },
      { category: 'transfer', description: 'CMB → Galle / Weligama → CMB (private car + driver)', note: 'Hire private driver ~$50–70/day for 2 days = ~$100–150 cash.' },
      // ─── Activities / Other ───
      { category: 'other', description: 'Park Hyatt Maldives NYE gala dinner (mandatory)', cashUsd: 2200, note: '~$1,100/adult with alcohol = ~$2,200/couple. Mandatory at PH Hadahaa for NYE Dec 31.' },
      { category: 'other', description: 'Diving + spa + meals + drinks (Maldives + Singapore + Sri Lanka)', note: 'Estimate ~$1,500–3,000 across the trip. Includes ~$150/dive at PH Hadahaa, hawker meals in SG, Aman/Resplendent dining in Sri Lanka.' },
      { category: 'other', description: 'Sri Lanka ETA visa (~$50/pp)', note: 'Apply online at eta.gov.lk before travel. ~$50–100 for 2 pax.' },
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
      { segment: 1, date: '2027-01-21', route: 'SEA → DEN or EGE (one leg booked on JetBlue)', airline: 'JetBlue (direction TBD)', status: 'booked', notes: 'JetBlue booking — one of outbound/return is locked in. PNR + exact direction TBD.' },
      { segment: 2, date: '2027-01-24', route: 'DEN or EGE → SEA (other direction)', status: 'needs_action', notes: 'Match to direction not covered by JetBlue. United SEA-DEN nonstop or similar.' },
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
    costs: [
      // ─── Flights ───
      { category: 'flight', description: 'JetBlue flight (one direction, Jan 2027)', program: 'JetBlue TrueBlue', note: 'BOOKED on JetBlue (one of the two legs — direction TBD). PNR + cost + cabin TBD. Other direction still needs booking.' },
      { category: 'flight', description: 'Other-direction flight (DEN/EGE ↔ SEA)', note: 'Not yet booked. United nonstop SEA→DEN ~12.5K UR/MP each way or ~$200–400 cash. Match to whichever direction the JetBlue covers.' },
      // ─── Lodging ───
      { category: 'hotel', description: 'Park Hyatt Beaver Creek (3 nts, Jan 21–24)', program: 'Hyatt', pnr: '58037120', points: 135000, note: 'BOOKED on 45K Hyatt points/night × 3 nts = 135K Hyatt total. (Peak Jan rate above standard Cat 6 25K.)' },
      // ─── Transfers ───
      { category: 'transfer', description: 'Airport → Beaver Creek (2hr from DEN via I-70 or 30min from EGE)', note: 'Epic Mountain Express shuttle ~$80–120/pp from DEN. Or rent AWD ~$80–120/day for 3 days = ~$300 total. Chains may be required.' },
      // ─── Activities ───
      { category: 'activity', description: 'Lift tickets (3 days × 2 pax)', note: 'Beaver Creek single-day lift ~$300/day in peak Jan. Consider Epic Pass (~$1,000/season) if doing both Beaver Creek trips. Ikon doesn\'t cover Vail Resorts.' },
      { category: 'activity', description: 'Allegria Spa treatments (optional)', note: 'Post-ski massage ~$200–300 each. Hot stone or hydrotherapy recommended.' },
      // ─── Other ───
      { category: 'other', description: 'Ski rentals (if not bringing own)', note: '~$50–100/day × 3 days × 2 pax = $300–600 if renting. Skip if bringing own gear.' },
      { category: 'other', description: 'Dinners (Splendido, Toscanini, Sweet Basil) + après-ski', note: 'Estimate ~$600–1,200 across 3 evenings for 2 pax. Splendido is the splurge ($150–250/pp).' },
    ],
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
    travelers: '2 adults (Terry + Janelle)',
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
      { text: 'CRITICAL: Reconcile 6 hotel bookings vs 2 travelers — Niseko 2 (Feb 13–18) overlaps Kyoto (Feb 10–15) AND Tokyo final (Feb 14–18). Some bookings likely need cancellation.', urgent: true },
      { text: 'Book internal flights: NRT → CTS (Hokkaido) and CTS → KIX/ITM (Kyoto)', urgent: true },
      { text: 'Book NRT/KIX → TPE flight for Feb 15–16 (connects to EVA return)', urgent: true },
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
      { program: 'Cathay Pacific Asia Miles', route: 'SEA–NRT via JAL', cost: '63K + $200 per pax = 126K + $400 total', note: 'Booked via Cathay miles on JAL metal. Classic oneworld sweet spot.' },
      { program: 'EVA Infinity MileageLands', route: 'TPE–SEA', cost: '75K + $100 per pax = 150K + $200 total', note: 'Royal Laurel Class return. Same 75K rate as the iop-sep TPE-SEA leg.' },
      { program: 'Hyatt Points', route: 'Park Hyatt Tokyo/Niseko/Kyoto', cost: '45K per night across all properties', note: 'TOTAL: 1,125K Hyatt points across 6 bookings (Tokyo 1+4 = 5 nts, Niseko 5+5 = 10 nts, Kyoto 5+5 = 10 room-nts) at 45K/nt. WARNING: Niseko 2 + Kyoto Room 2 overlap and only 2 travelers — likely cancellable bookings, real burn could be ~675K–900K.' },
    ],
    itinerary: [
      { date: 'Feb 4', label: 'Fly to Tokyo', description: 'SEA 11:55am → NRT 3:05pm +1 on JAL JL67 (conf: EH6NYK, Cathay award). Cross the date line — arrive Feb 5 afternoon. Narita Express to Shinjuku (90 min).', type: 'travel' },
      { date: 'Feb 5', label: 'Arrive Tokyo', description: 'Check into Park Hyatt Tokyo (conf: 32906849). Freshen up on the 52nd floor. Evening walk through Shinjuku — Golden Gai for intimate bars, Omoide Yokocho for yakitori. Jet lag strategy: stay up until 10pm local.', type: 'travel' },
      { date: 'Feb 6', label: 'Tokyo → Niseko', description: 'Check out Park Hyatt Tokyo (conf: 32906849). Morning flight HND/NRT → CTS (New Chitose). Bus or car to Niseko (2.5 hrs through snowy Hokkaido landscape). Check in to Park Hyatt Niseko Hanazono (conf: 19374554). Afternoon orientation run — get your ski legs. Evening: onsen at the hotel, ramen in Kutchan.', type: 'travel' },
      { date: 'Feb 7–10', label: 'Niseko Powder Days', description: '4 full days of Japow skiing. Hanazono Bowl, Grand Hirafu, Niseko Village terrain. Morning first tracks, afternoon tree runs. Night skiing sessions. Daily onsen recovery. Ramen, izakaya, and hot pot dinners. This is what you came for.', type: 'activity' },
      { date: 'Feb 11', label: 'Niseko → Kyoto', description: 'Check out Park Hyatt Niseko Hanazono (conf: 19374554). Fly CTS → KIX or ITM. Train to Kyoto. Check in to Park Hyatt Kyoto (conf: 35675427 / 47489247, Ninenzaka location). Evening walk through Higashiyama — stone lanes, tea houses, temple silhouettes at dusk. Kaiseki dinner.', type: 'travel' },
      { date: 'Feb 12–14', label: 'Kyoto Cultural Days', description: 'Morning: Fushimi Inari before 8am (thousand torii gates, no crowds). Kinkaku-ji (Golden Pavilion). Arashiyama bamboo grove. Afternoon: tea ceremony experience, Nishiki Market food crawl. Kaiseki at Kikunoi or Gion Sasaki. Gion geisha district evening walk. If snow falls — Kinkaku-ji in snow is once-in-a-lifetime.', type: 'activity' },
      { date: 'Feb 15', label: 'Kyoto → Tokyo or Taipei', description: 'Check out Park Hyatt Kyoto (conf: 35675427 / 47489247). Shinkansen Kyoto → Tokyo (2hr 15min) for final Tokyo nights, OR fly to Taipei for the return connection. Depends on traveler routing. Some may return to Niseko (conf: 2552461). Check in to next accommodation on arrival.', type: 'travel' },
      { date: 'Feb 16', label: 'Fly Home via Taipei', description: 'Check out of final accommodation (Tokyo Hyatt or Taipei hotel depending on Feb 15 routing). TPE 23:00 → SEA 17:30 on EVA Air BR24 Royal Laurel Class (conf: FK5O97). Taipei stopover possible if arriving early. Home same day (date line gain).', type: 'travel' },
    ],
    costs: [
      // ─── International Flights ───
      { category: 'flight', description: 'SEA → NRT on JAL JL67 Business (Feb 4, 2 pax)', pnr: 'EH6NYK', program: 'Cathay Pacific Asia Miles', points: 126000, cashUsd: 400, note: '63K Cathay Asia Miles + $200 cash per person × 2 pax = 126K Asia Miles + $400 cash. Booked via Cathay on JAL metal — classic Star Alliance/oneworld sweet spot.' },
      { category: 'flight', description: 'TPE → SEA on EVA BR24 Royal Laurel (Feb 16, 2 pax)', pnr: 'FK5O97', program: 'EVA Infinity MileageLands', points: 150000, cashUsd: 200, note: '75K EVA Infinity miles + $100 cash per person × 2 pax = 150K miles + $200 cash. Royal Laurel top-tier J product.' },
      // ─── Internal Flights (TBD) ───
      { category: 'flight', description: 'NRT/HND → CTS (Tokyo → Hokkaido, ~Feb 6)', note: 'Not yet booked. JAL/ANA ~$150–250 Y, ~$400–600 J one-way.' },
      { category: 'flight', description: 'CTS → KIX/ITM (Hokkaido → Kansai, ~Feb 11)', note: 'Not yet booked. JAL/ANA ~$200–350 Y, ~$500–700 J one-way.' },
      { category: 'flight', description: 'NRT or KIX → TPE (Japan → Taipei, ~Feb 15–16)', note: 'Not yet booked. Multiple carriers (Peach budget, JAL/ANA full-service, EVA). $100–300 Y typical.' },
      { category: 'flight', description: 'Possible return Niseko trip (Feb 13–14)', note: 'Some travelers return to Niseko per overlapping bookings. Internal flights TBD.' },
      // ─── Lodging — Park Hyatt Tokyo ───
      { category: 'hotel', description: 'Park Hyatt Tokyo — Arrival night (1 nt, Feb 5–6)', program: 'Hyatt', pnr: '32906849', points: 45000, note: '45K Hyatt points (1 nt × 45K).' },
      { category: 'hotel', description: 'Park Hyatt Tokyo — Farewell block (4 nts, Feb 14–18)', program: 'Hyatt', pnr: '50440509', points: 180000, note: '180K Hyatt points (4 nts × 45K).' },
      // ─── Lodging — Park Hyatt Niseko Hanazono ───
      { category: 'hotel', description: 'Park Hyatt Niseko Hanazono — First stay (5 nts, Feb 6–11)', program: 'Hyatt', pnr: '19374554', points: 225000, note: '225K Hyatt points (5 nts × 45K).' },
      { category: 'hotel', description: 'Park Hyatt Niseko Hanazono — Second stay (5 nts, Feb 13–18) ⚠️ OVERLAP', program: 'Hyatt', pnr: '2552461', points: 225000, note: '225K Hyatt points (5 nts × 45K). OVERLAPS with Kyoto (Feb 10–15) AND Tokyo final (Feb 14–18) — only 2 travelers, can\'t be in 2 places. Likely candidate for cancellation/restructure.' },
      // ─── Lodging — Park Hyatt Kyoto ───
      { category: 'hotel', description: 'Park Hyatt Kyoto — Room 1 (5 nts, Feb 10–15)', program: 'Hyatt', pnr: '35675427', points: 225000, note: '225K Hyatt points (5 nts × 45K).' },
      { category: 'hotel', description: 'Park Hyatt Kyoto — Room 2 (5 nts, Feb 10–15) ⚠️ EXTRA ROOM', program: 'Hyatt', pnr: '47489247', points: 225000, note: '225K Hyatt points (5 nts × 45K). Two rooms in Kyoto for just 2 travelers — confirm purpose (more space?) or cancel one.' },
      // ─── Activities ───
      { category: 'activity', description: 'Niseko lift tickets + ski rentals (5–10 days)', note: 'Niseko All-Mountain pass ~¥7,500/day (~$50). Total estimate $250–500/pp depending on day count.' },
      { category: 'activity', description: 'Kaiseki dinners in Kyoto (Kikunoi / Gion Sasaki / Hyotei)', note: 'Top-tier kaiseki ~$200–500/pp. Estimate 2–3 dinners across the Kyoto stay.' },
      // ─── Other ───
      { category: 'other', description: 'JR Pass or point-to-point Shinkansen tickets', note: '14-day JR Pass ~$435/pp; point-to-point Tokyo-Kyoto round-trip ~$200/pp. Calculate which is better given internal flights.' },
      { category: 'other', description: 'Meals + drinks + Tokyo/Niseko/Kyoto incidentals', note: 'Big trip — estimate ~$2,000–4,000 across 14 days for the full party. Sushi, izakaya, ramen, onsen entry fees.' },
    ],
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
    costs: [
      // ─── Flights ───
      { category: 'flight', description: 'SEA → DEN or EGE (Feb 25)', note: 'Not yet booked. Same routing as Jan trip — United nonstop SEA→DEN ~12.5K UR/MP each way.' },
      { category: 'flight', description: 'DEN or EGE → SEA return (Feb 28)', note: 'Not yet booked.' },
      // ─── Lodging ───
      { category: 'hotel', description: 'Park Hyatt Beaver Creek (3 nts, Feb 25–28)', program: 'Hyatt', pnr: '28563350', note: 'BOOKED on Hyatt points. Late Feb post-Presidents Day, may be lower than Jan peak — possibly ~30–40K/nt × 3 = ~90–120K. Verify exact count.' },
      // ─── Transfers ───
      { category: 'transfer', description: 'Airport → Beaver Creek (2hr from DEN or 30min from EGE)', note: 'Same options as Jan trip — Epic Mountain Express shuttle ~$80–120/pp or AWD rental.' },
      // ─── Activities ───
      { category: 'activity', description: 'Lift tickets (3 days × 2 pax)', note: 'If Epic Pass purchased for Jan trip, no additional cost. Otherwise ~$280/day late Feb (slightly cheaper than Jan peak).' },
      { category: 'activity', description: 'Allegria Spa treatments (optional)', note: '~$200–300 each. Same options as Jan visit.' },
      // ─── Other ───
      { category: 'other', description: 'Ski rentals (if not bringing own)', note: '~$50–100/day × 3 days × 2 pax = $300–600.' },
      { category: 'other', description: 'Dinners (try restaurants missed in Jan) + après-ski', note: 'Estimate ~$600–1,200 for 3 evenings. Grouse Mountain Grill, 8100 Mountainside.' },
    ],
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
    costs: [
      // ─── Flights ───
      { category: 'flight', description: 'SEA → CDG (Mar 24/25)', note: 'Not yet booked. Air France nonstop SEA→CDG ~55–80K Flying Blue RT in J, or ~$2,000–3,500 cash Business.' },
      { category: 'flight', description: 'CDG → SEA return (Mar 28)', note: 'Not yet booked. Same target as outbound.' },
      // ─── Lodging ───
      { category: 'hotel', description: 'Park Hyatt Paris-Vendôme (3 nts, Mar 25–28)', program: 'Hyatt', pnr: '36693055', note: 'BOOKED on Hyatt points. Cat 7 = ~30K standard / 40K peak per night × 3 = ~90K–120K estimated. Verify exact count. Globalist suite upgrade highly possible in March.' },
      // ─── Transfers ───
      { category: 'transfer', description: 'CDG → Paris (RER B or taxi)', cashUsd: 80, note: 'RER B ~€12/pp = ~$30 for 2 pax round-trip; or taxi ~€55 each way = ~$120 round-trip.' },
      // ─── Activities ───
      { category: 'activity', description: 'Louvre + Musée d\'Orsay timed tickets', cashUsd: 50, note: '~€22/pp Louvre, ~€16/pp d\'Orsay. ~$50–80 for both museums for 2 pax.' },
      // ─── Other ───
      { category: 'other', description: 'Dinners (Pur\' + Frenchie + Le Grand Véfour + bouillon)', note: 'Estimate ~$800–1,500 across 3 evenings for 2 pax. Pur\' tasting menu ~€200/pp.' },
      { category: 'other', description: 'Pastry + cafés + Marché lunch + neighborhood meals', note: 'Estimate ~$300–500. Cédric Grolet ~€20/pastry.' },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // SEYCHELLES + KENYA SAFARI — November 2026 (Platte Island + Finch Hattons, Tsavo West)
  // ═══════════════════════════════════════════════════════
  {
    slug: 'seychelles-madagascar-nov-2026',
    title: 'Seychelles + Kenya Safari',
    subtitle: 'Platte Island granite reefs + Finch Hattons, Tsavo West',
    region: 'Indian Ocean & East Africa',
    country: 'Seychelles & Kenya',
    dates: 'November 23 – December 4, 2026',
    month: 'November',
    year: 2026,
    status: 'partially_booked',
    statusLabel: 'Partially Booked',
    travelers: 'Terry Lin + Janelle Tam',
    heroImage: 'seychelles-beach',
    flights: [
      // ─── Seychelles outbound ───
      { segment: 1, date: '2026-11-23', route: 'SEA → IST', time: '7:00pm PT → 6:00pm local +1', airline: 'Turkish Airlines (TK204)', cabin: 'Business (I)', confirmation: 'S46R5Q', status: 'booked', notes: '12h direct. Seat 03K. Terry on this PNR.' },
      { segment: 2, date: '2026-11-23', route: 'SEA → IST (Janelle)', time: '7:00pm PT → 6:00pm local +1', airline: 'Turkish Airlines (TK204)', cabin: 'Business (I)', confirmation: 'TLBR8E', status: 'booked', notes: '12h direct. Janelle on her own PNR (TLBR8E), same TK204 flight as Terry. Onward IST→ leg still to book.' },
      { segment: 3, date: '2026-11-24', route: 'IST → SEZ (Mahé)', time: '21:45 → 06:50 +1', airline: 'Turkish Airlines', aircraft: 'A330-300', cabin: 'Business (I)', confirmation: 'TB6NH6', status: 'booked', notes: 'Direct, 8h 05m. REBOOKED to the 21:45 Nov 24 departure (earlier TK748 02:15 was cancelled) — now a same-evening connection off the SEA→IST 18:00 arrival, no Istanbul overnight. Arrives Mahé 06:50 Nov 25 → Waldorf lounge (opens 07:00) → 13:00 IDC flight to Platte. Verify Janelle is on this too.' },
      // ─── Seychelles → Kenya (Mahé pre-position night, then early flight) ───
      { segment: 4, date: '2026-11-30', route: 'SEZ → NBO (Mahé → Nairobi)', time: 'early morning (~07:35 arr)', airline: 'Kenya Airways', cabin: 'Business', status: 'needs_action', notes: 'Primary plan (Build 1): early-morning KQ Nov 30 after a Mahé pre-position night → lands NBO ~07:35 → camp same afternoon. Re-confirm exact time. Alternative Build 2 (see the "transit night" intel card): 11:15 Platte→Mahé + KQ 13:45→NBO 15:55 + a Nairobi night.' },
      { segment: 5, date: '2026-11-30', route: 'NBO (Wilson) → Finch Hattons airstrip (Tsavo West)', time: 'daytime', airline: 'SafariLink/AirKenya scheduled OR private charter', cabin: 'Light aircraft', status: 'needs_action', notes: '~1h, lands 10 min from camp. KQ lands at JKIA; safari flights leave from Wilson — 30–60 min road transfer. Daylight-only airstrip; afternoon arrival into camp. Charter (~$1.5–2.5k) is the flexible backup.' },
      // ─── Kenya → Home (evening departure, keeps full last game-drive morning) ───
      { segment: 6, date: '2026-12-03', route: 'Finch Hattons airstrip → NBO (Wilson)', time: 'late afternoon', airline: 'SafariLink/AirKenya OR charter', cabin: 'Light aircraft', status: 'needs_action', notes: 'After a FULL final safari day (dawn + afternoon drives). Transfer Wilson→JKIA, evening at the lounge before the 01:35 QR1342.' },
      { segment: 7, date: '2026-12-04', route: 'NBO → DOH (Nairobi → Doha)', time: '01:35 → 06:35', airline: 'Qatar Airways QR1342', aircraft: '777-300ER', cabin: 'Business', status: 'needs_action', notes: 'Post-midnight departure (lets you keep a full final safari day Dec 3). Just a 1h20 connection at Doha to QR719. ~340K total for 2 pax NBO→SEA.' },
      { segment: 8, date: '2026-12-04', route: 'DOH → SEA (Doha → Seattle)', time: '07:55 → 11:40', airline: 'Qatar Airways QR719', aircraft: '777-300ER', cabin: 'Business (Qsuites)', status: 'needs_action', notes: 'Qsuites on the 14h 45m transpacific leg. 1h20 connection from QR1342. Arrive Seattle Dec 4 11:40. Part of the 340K/2 pax award.' },
    ],
    hotels: [
      { property: 'Waldorf Astoria Seychelles Platte Island', location: 'Platte Island, Outer Seychelles', checkIn: '2026-11-25', checkOut: '2026-11-29', program: 'Hilton Honors', status: 'not_booked', notes: '4 nights on ~480K Hilton points (Terry has the points; availability confirmed). Cash equivalent ~$6,000–12,000. PADI 5-Star Dive Resort on-site. Transfer is the scheduled IDC fixed-wing flight (Mahé→Platte 13:00, Platte→Mahé 13:45; ~20 min, daylight only) — not a seaplane.' },
      { property: 'Mahé Hilton — transit night', location: 'Mahé, Seychelles', checkIn: '2026-11-29', checkOut: '2026-11-30', program: 'Hilton Honors', status: 'not_booked', notes: 'One night pre-positioning for the early KQ to Nairobi (primary plan, Build 1) — DoubleTree Allamanda near the airport / Mango House LXR / Northolme, on points. Build 2 swaps this for a Nairobi hotel instead (see the "transit night" intel card).' },
      { property: 'Finch Hattons Luxury Tented Camp', location: 'Tsavo West National Park, Kenya', checkIn: '2026-11-30', checkOut: '2026-12-03', status: 'not_booked', notes: '3 nights on ~300K Virgin points (Terry has the points; availability confirmed — verify the exact loyalty currency/transfer path). Luxury tented camp in the Chyulu Hills with Kilimanjaro views; typically all-inclusive (game drives, meals, park fees).' },
    ],
    actionItems: [
      { text: 'Re-confirm the Kenya Airways SEZ→NBO times/days around Nov 29–30 and pick a build: Build 1 (early-morning KQ Nov 30 + Mahé night) or Build 2 (13:45 KQ Nov 29 + Nairobi night).', urgent: true },
      { text: 'Book SEZ → NBO Kenya Airways for the travel day (2 pax, business)', urgent: true },
      { text: 'Book Waldorf Astoria Platte Island Nov 25–29 (4 nts, ~480K Hilton points) + the IDC round-trip transfer', urgent: true },
      { text: 'Book Finch Hattons Nov 30 – Dec 3 (3 nts, ~300K Virgin points) — verify the exact loyalty currency', urgent: true },
      { text: 'Arrange Finch Hattons air via the camp travel desk: Wilson→camp on Nov 30 + camp→Wilson (late afternoon) Dec 3. Scheduled SafariLink or a charter (Build 2 needs a morning camp flight).', urgent: true },
      { text: 'Lock the Qatar return award: QR1342 NBO 01:35 Dec 4 → DOH + QR719 → SEA (Qsuites), ~340K total / 2 pax', urgent: true },
      { text: 'Book Janelle\'s IST→SEZ leg to match Terry\'s 21:45 Nov 24 flight (verify she\'s on TB6NH6 or has her own PNR)', urgent: true },
      { text: 'Confirm the Nov 30 Nairobi→Tsavo connection: KQ/JKIA arrival → Wilson (30–60 min road) → daylight-only camp flight', urgent: true },
      { text: 'Kenya: apply for eTA (electronic travel authorization) for both travelers', urgent: false },
      { text: 'Yellow fever — transiting from Seychelles may trigger a YF certificate requirement for Kenya entry; verify', urgent: false },
      { text: 'Start malaria prophylaxis 1–2 weeks before departure (Tsavo is a malaria zone)', urgent: false },
      { text: 'Travel insurance covering diving + safari medical evacuation', urgent: false },
    ],
    intel: [
      { title: 'Why this combination', content: 'A beach-then-bush pairing across two Indian Ocean / East Africa worlds. Seychelles Platte Island gives you granite-reef topography (unique on Earth), tail-end whale shark season, and Outer Islands access in calm-sea November. Finch Hattons delivers a classic Big Five safari in Tsavo West — but with a distinct flavor versus the April 2026 Kruger trip: Tsavo\'s famous red-dust elephants, the Chyulu Hills and Mt Kilimanjaro backdrop, the crystal Mzima Springs, and old lava flows. The arc works emotionally too — dive/relax first, then end on the drama of the safari before flying home from Nairobi.' },
      { title: 'Why late November works for both', content: 'Seychelles: November is one of the two peak dive windows (SW monsoon ends, calm seas, ~30m visibility, ~29°C water, tail end of whale shark season Sept–Nov). Tsavo West: late November is the "short rains" / green season — the bush is lush, dramatic skies for photography, newborn game and excellent birding, and far fewer vehicles than the July–Sept peak. Expect occasional afternoon showers, not all-day rain; mornings are usually clear for the dawn drive.' },
      { title: 'Waldorf Astoria Platte Island', content: 'Private-island Hilton-portfolio resort on Platte Island, ~130km south of Mahé. 50 villas, private pools, beach access. PADI 5-Star Dive Resort on-site (Big Blue Divers / Blue Safari Seychelles operate). 13km barrier reef provides the local dive territory — granite swim-throughs, walls, drops to 30m. Reef sharks, eagle rays, turtles, schools of jacks. Cannot reach Aldabra / Cosmoledo / Astove from Platte (those are liveaboard-only). Cash rates $1,500–3,000/nt make the ~480K Hilton-points redemption for 4 nights exceptional value.' },
      { title: 'Finch Hattons & Tsavo West', content: 'Finch Hattons is a luxury tented camp in Tsavo West National Park, set among spring-fed pools in the Chyulu Hills with views toward Kilimanjaro. Tsavo is Kenya\'s largest wilderness — far less crowded than the Mara — known for big tuskers and the iconic red elephants (dust-bathed in Tsavo\'s ochre soil), plus lion, leopard, buffalo, hippo and crocodile at Mzima Springs. The camp typically runs all-inclusive (game drives, meals, park fees). Access is by air to its own all-weather airstrip ~10 min from camp — ~1hr from Nairobi\'s Wilson Airport by light aircraft, or a private charter.' },
      { title: 'The Platte transfer (read this — it drives the dates)', content: 'Mahé↔Platte is a scheduled IDC fixed-wing flight, NOT a seaplane: one round trip daily, Mahé→Platte 13:00 (arr 13:20) and Platte→Mahé 13:45 (arr 14:05), ~20 min, daylight only, check in 1h30 prior. A private charter (€5,000/flight, 06:30–17:45) is the only off-schedule option. This single daily flight is why a transit overnight on the Seychelles→Kenya hop is unavoidable.' },
      { title: 'The transit night — two builds (the itinerary shows Build 1)', content: 'You can\'t reach Finch Hattons the same day you leave Platte (the camp airstrip is daylight-only and the Nairobi connections don\'t line up), so there is exactly one transit night — pick a build. They differ ONLY on Nov 29–30; everything else is identical (Platte 4 nts, Finch Nov 30–Dec 3, home Dec 4). ▸ BUILD 1 (shown in the itinerary): 13:45 Platte→Mahé Nov 29, sleep at a Mahé Hilton, early-morning KQ to Nairobi Nov 30, camp by afternoon. Cleanest connection — the only downside is a ~4:30am wakeup. ▸ BUILD 2: 11:15 Platte→Mahé Nov 29 + the 13:45 KQ to Nairobi (a tight ~1h35 self-connect), sleep in Nairobi, camp the morning of Nov 30. No pre-dawn wakeup, but the tight connection on a weather-prone flight carries some risk. (We ruled out the reverse order, Kenya-first, because the twice-weekly NBO→Mahé red-eye plus the daylight-only Platte flight would stack up 1–2 dead Nairobi nights.)' },
      { title: 'Coral reality at Platte', content: 'Per Terry\'s marine trip lens: the 4th global coral bleaching event (2024–2025) hit Western Indian Ocean. BUT outer islands like Platte and Aldabra recovered faster from the 2016 bleaching than inner Seychelles. Expect reasonable coral + healthy fish life — not pristine Coral Triangle reef. Frame expectations as "spectacular topography + decent coral + great pelagic encounters." For pristine reef, that\'s a separate future dedicated Outer Atolls liveaboard (Aldabra Expeditions / MY Basilisk).' },
    ],
    awardTips: [
      { program: 'Turkish Miles&Smiles', route: 'SEA→IST', cost: '65K + $219/pp', note: 'Terry outbound booked. Janelle needs same booking.' },
      { program: 'Turkish Miles&Smiles', route: 'IST→SEZ', cost: '75K + $200/pp = 150K + $400 for 2 pax', note: 'Booked by friend (TB6NH6). Verify Janelle is on it.' },
      { program: 'Kenya Airways / Avios', route: 'SEZ→NBO (Mahé→Nairobi)', cost: '~$200–350/pp cash, or Avios partner award', note: 'Nonstop ~3h10. Confirm Mon Nov 30 operates; target a midday departure for the same-day Tsavo connection.' },
      { program: 'Hilton Honors', route: 'Waldorf Astoria Platte (4 nts)', cost: '~480K Hilton points', note: 'Cash rates $1,500–3,000/nt → ~$6,000–12,000 cash equivalent for 4 nts. Outstanding points value; availability confirmed.' },
      { program: 'Virgin (verify currency)', route: 'Finch Hattons (3 nts)', cost: '~300K points', note: 'Terry has the points and confirmed availability. Verify the exact loyalty program/transfer path — most safari camps are cash or operator-billed, so confirm how the redemption is being made.' },
      { program: 'Qatar Privilege Club / Avios', route: 'NBO→DOH→SEA return (Dec 4)', cost: '~340K total / 2 pax', note: 'QR1342 NBO 01:35→DOH + QR719 DOH 07:55→SEA 11:40 (Qsuites on the 777). Just a 1h20 Doha connection, and keeps a full final safari day Dec 3. Strong value — lock the award.' },
    ],
    itinerary: [
      { date: 'Nov 23', label: 'Depart Seattle', description: 'SEA 7:00pm → IST 6:00pm +1 on Turkish TK204 Business (Terry conf S46R5Q seat 03K; Janelle conf TLBR8E, same flight). 12hr direct overnight flight.', type: 'travel' },
      { date: 'Nov 24', label: 'Istanbul → Seychelles (same evening)', description: 'Arrive IST 18:00, then connect the same evening to IST 21:45 → SEZ 06:50 +1 on Turkish Business (A330, conf TB6NH6). No Istanbul overnight.', type: 'travel' },
      { date: 'Nov 25', label: 'Arrive Seychelles → Platte Island', description: 'Land Mahé 06:50. Relax at the Waldorf Arrival Lounge (opens 07:00), then the once-daily IDC 13:00 → Platte 13:20 scheduled transfer (the resort flight — not a seaplane). Check in to Waldorf Astoria villa. House reef snorkel; sunset cocktails.', type: 'travel' },
      { date: 'Nov 26', label: 'Platte Dive Day 1', description: '2-tank morning dive (granite topography, outer wall) + 1-tank afternoon. Lunch + sunset at the resort.', type: 'activity' },
      { date: 'Nov 27', label: 'Platte Dive Day 2', description: '2-tank dive — focus on whale shark hot zones if plankton conditions allow. Afternoon: spa, fishing, or house reef snorkeling.', type: 'activity' },
      { date: 'Nov 28', label: 'Platte Dive Day 3', description: 'More diving across the 13km reef — walls, swim-throughs, pelagic action. Afternoon at leisure: kayak, paddleboard, or beach time.', type: 'activity' },
      { date: 'Nov 29', label: 'Platte → Mahé (transit night)', description: 'Final Platte morning (last dive/snorkel), then the 13:45 IDC flight → Mahé 14:05. Overnight at a Mahé Hilton (DoubleTree Allamanda near the airport), pre-positioning for the early KQ to Nairobi. (Alternative "Build 2" swaps this for an 11:15 Platte flight + a Nairobi night — see the transit-night intel card.)', type: 'travel' },
      { date: 'Nov 30', label: 'Mahé → Nairobi → Tsavo', description: 'Early-morning Kenya Airways Mahé → Nairobi (~07:35). Road JKIA → Wilson, then light aircraft to the Finch Hattons airstrip (~1h). Afternoon game drive. Check in to Finch Hattons. (Finch night 1.)', type: 'travel' },
      { date: 'Dec 1', label: 'Tsavo Safari Day 1', description: 'Dawn and late-afternoon game drives in Tsavo West. Tsavo\'s red elephants, lion, buffalo, giraffe, plentiful plains game. Midday: Mzima Springs (hippo + crocodile, underwater viewing chamber) and Chyulu Hills views toward Kilimanjaro.', type: 'activity' },
      { date: 'Dec 2', label: 'Tsavo Safari Day 2', description: 'Full day on safari — Shetani lava flows, Roaring Rocks viewpoint, leopard country. Optional bush breakfast or sundowner. Evening drinks under the stars at camp.', type: 'activity' },
      { date: 'Dec 3', label: 'Full Final Safari Day', description: 'Dawn + afternoon game drives — a full last day in Tsavo. Late checkout, then late-afternoon light aircraft Finch Hattons → Wilson, transfer to JKIA. Evening at the lounge before the post-midnight departure.', type: 'activity' },
      { date: 'Dec 4', label: 'Fly Home (Qsuites)', description: 'NBO 01:35 → DOH 06:35 on Qatar QR1342, 1h20 connection, then DOH 07:55 → SEA 11:40 on QR719 (777-300ER, Qsuites). Home by midday. ~340K points total for 2 pax NBO→SEA. Reef to bush — trip complete.', type: 'travel' },
    ],
    costs: [
      // ─── Flights — Booked ───
      { category: 'flight', description: 'SEA → IST on Turkish TK204 (Business I, Terry only)', pnr: 'S46R5Q', seat: 'Terry 03K', points: 65000, program: 'Turkish Miles&Smiles', cashUsd: 219, taxesUsd: 29, changePenaltyUsd: 70, cancelPenaltyUsd: 170, note: '$190 fuel + $29 tax. Terry only — Janelle needs separate booking.', source: 'Gmail: Turkish Airlines S46R5Q Apr 17 2026' },
      { category: 'flight', description: 'IST → SEZ (Mahé, both pax)', points: 150000, program: 'Turkish Miles&Smiles (booked by friend)', cashUsd: 400, note: 'BOOKED by friend. 75K + $200/pp × 2 pax = 150K + $400. Higher than expected rate; verify cabin when PNR available.' },
      // ─── Flights — To Book ───
      { category: 'flight', description: 'SEA → IST on Turkish TK204 (Business I, Janelle)', pnr: 'TLBR8E', points: 65000, program: 'Turkish Miles&Smiles', cashUsd: 219, note: 'BOOKED — Janelle\'s own PNR, same TK204 as Terry. Onward IST→ leg still to book.' },
      { category: 'flight', description: 'SEZ → NBO on Kenya Airways (Mahé → Nairobi, Nov 30, 2 pax)', cashUsd: 600, note: 'Nonstop ~3h10. ~$200–350/pp cash or Avios partner award. Confirm Mon Nov 30 operates + midday departure.' },
      { category: 'flight', description: 'NBO → DOH → SEA return on Qatar (QR1342 + QR719 Qsuites, Dec 4, 2 pax)', points: 340000, program: 'Qatar Avios / Privilege Club', note: 'Found at 340K total for 2 pax. Qsuites on the DOH→SEA 777. QR1342 departs NBO 01:35; 1h20 Doha connection. Not yet ticketed — lock award space.' },
      // ─── Lodging ───
      { category: 'hotel', description: 'Waldorf Astoria Platte Island (4 nts, Nov 25–29)', program: 'Hilton Honors', points: 480000, note: 'Not yet booked. ~480K Hilton points, availability confirmed. Cash equivalent ~$6,000–12,000 — outstanding value.' },
      { category: 'hotel', description: 'Transit night — Mahé Hilton (Build 1) or Nairobi (Build 2), Nov 29–30', note: 'One night on the Seychelles→Kenya hop. Mahé Hilton on points (Build 1) or a Nairobi hotel (Build 2). ~$0 on points to ~$300 cash.' },
      { category: 'hotel', description: 'Finch Hattons Luxury Tented Camp (3 nts, Nov 30 – Dec 3)', points: 300000, program: 'Virgin (verify currency)', note: 'Not yet booked. ~300K points (Terry has them; availability confirmed). Typically all-inclusive — game drives, meals, park fees. Verify exact loyalty currency/transfer path.' },
      // ─── Transfers ───
      { category: 'transfer', description: 'Mahé ↔ Platte IDC scheduled flight (round trip, 2 pax)', cashUsd: 1200, note: 'Scheduled IDC fixed-wing (13:00 out / 13:45 back), ~€550/pp round trip = ~$1,200 for 2. Private charter €5,000/flight if you need off-schedule timing (e.g., Build 2 morning).' },
      { category: 'transfer', description: 'Wilson ↔ Finch Hattons air (Nov 30 in + Dec 3 out, 2 pax)', cashUsd: 1800, note: 'Scheduled SafariLink/AirKenya ~$220/pp/leg, OR private charter ~$1,500–2,500/leg (recommended Nov 30 to guarantee same-day connection). Camp travel desk coordinates.' },
      { category: 'transfer', description: 'JKIA ↔ Wilson road transfers (Nairobi, Nov 30 + Dec 3)', cashUsd: 80, note: '~30–60 min each way. ~$20–40 per transfer.' },
      // ─── Activities ───
      { category: 'activity', description: 'Diving at Platte (~6–8 dives, 2 pax)', cashUsd: 1600, note: '$80–120/dive × 6–8 dives × 2 pax over 4 nights. Booked through Big Blue Divers or Blue Safari Seychelles on-site.' },
      { category: 'activity', description: 'Tsavo game drives + park fees', note: 'Typically included in the Finch Hattons all-inclusive rate — confirm. Otherwise Tsavo West park fees ~$52/pp/day.' },
      // ─── Other ───
      { category: 'other', description: 'Kenya eTA (2 pax)', cashUsd: 70, note: '~$30–35/pp electronic travel authorization, applied online before travel.' },
      { category: 'other', description: 'Yellow fever + malaria prophylaxis (2 pax)', cashUsd: 200, note: 'Transiting from Seychelles may trigger a YF certificate requirement for Kenya — verify. Tsavo is a malaria zone.' },
      { category: 'other', description: 'Tips + meals + drinks + incidentals', cashUsd: 800, note: 'Tips for dive crew, camp/safari staff, drivers/guides. Plus drinks and any meals not included.' },
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
    itinerary: [
      { date: 'TBD pre-Apr 4', label: 'Position SEA → LAX', description: 'Need to book a positioning flight (likely Alaska or Delta) to connect to LAX → PPT departure on Apr 4.', type: 'travel' },
      { date: 'Apr 4', label: 'LAX → Papeete', description: 'LAX → PPT (likely Air Tahiti Nui TN 102) on Qantas-ticketed booking, conf ERJ75I. Overnight flight (~8hr).', type: 'travel' },
      { date: 'Apr 5+', label: 'Tahiti / Bora Bora / Moorea — TBD', description: 'Itinerary pending — decide island(s). Bora Bora for overwater bungalows, Moorea for hiking + diving, Tikehau for atoll life.', type: 'flexible' },
      { date: 'TBD', label: 'Return PPT → SEA', description: 'Return flight not yet booked. Same Qantas/oneworld routing or alternative.', type: 'travel' },
    ],
    costs: [
      // ─── Flights ───
      { category: 'flight', description: 'SEA → LAX positioning (TBD pre-Apr 4)', note: 'Not yet booked. Alaska MVP target ~$80–150 cash or ~5K AS miles.' },
      { category: 'flight', description: 'LAX → PPT on Air Tahiti Nui (likely TN 102)', pnr: 'ERJ75I', program: 'Qantas Points', note: 'BOOKED via Qantas Points (oneworld partner award). Booked Apr 16 2026. Open Qantas app with PNR ERJ75I to verify exact points + cabin + flight #.' },
      { category: 'flight', description: 'PPT → SEA return', note: 'Not yet booked. Mirror Qantas/Air Tahiti Nui or alternative.' },
      // ─── Lodging ───
      { category: 'hotel', description: 'Tahiti / Bora Bora / Moorea — island lodging TBD', note: 'No bookings yet. Options: Conrad Bora Bora Nui (Hilton FNCs!), Four Seasons Bora Bora, InterContinental Moorea (IHG points). Cash rates $700–2,500/nt typical.' },
      // ─── Transfers ───
      { category: 'transfer', description: 'PPT inter-island flights (Air Tahiti)', note: 'Inter-island hops $100–300 RT depending on island. Book separately on Air Tahiti.' },
      // ─── Other ───
      { category: 'other', description: 'Diving + meals + activities', note: 'Estimate heavily depends on islands chosen + duration. Plan post-itinerary lock.' },
    ],
  },
];
