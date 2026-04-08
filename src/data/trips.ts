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
    dates: 'April 21–29, 2026',
    month: 'April',
    year: 2026,
    status: 'partially_booked',
    statusLabel: 'Partially Booked',
    travelers: '4 adults (Terry, Janelle, Janelle\'s parents)',
    heroImage: 'kruger-safari-lion',
    flights: [
      { segment: 1, date: '2026-04-21', route: 'ORD → LHR', time: '9:15pm → 11:15am +1', airline: 'British Airways', cabin: 'Business', status: 'booked', notes: 'Overnight flight' },
      { segment: 2, date: '2026-04-22', route: 'LHR → JNB', time: '7:00pm → 7:00am +1', airline: 'British Airways', cabin: 'Business', status: 'booked', notes: 'Arrive JNB April 23' },
      { segment: 3, date: '2026-04-23', route: 'JNB → HDS (Hoedspruit)', time: '10:30am → 11:30am', airline: 'Airlink', confirmation: 'XEB2ZT', status: 'booked', notes: 'Regional hop, transfer to Shindzela' },
      { segment: 4, date: '2026-04-28', route: 'JNB → FRA', time: '6:35pm → 6:00am +1', airline: 'Condor', aircraft: 'A330-900neo', cabin: 'Business', confirmation: 'AFR58A', status: 'booked', notes: '8hr layover in Frankfurt' },
      { segment: 5, date: '2026-04-29', route: 'FRA → YYZ', time: '2:15pm → 3:45pm', airline: 'Condor', aircraft: 'A330-900neo', cabin: 'Business', confirmation: 'AFR58A', status: 'booked' },
    ],
    hotels: [
      { property: 'Shindzela Tented Camp', location: 'Timbavati Reserve', checkIn: '2026-04-23', checkOut: '2026-04-25', status: 'booked', cost: 'R47,310 ZAR (~$2,557 USD for 4 pax)', notes: 'Intimate bush camp, 5–8 guests per group' },
      { property: 'Last Word Kitara', location: 'Klaserie Reserve', checkIn: '2026-04-25', checkOut: '2026-04-28', program: 'Booked on Points', status: 'booked', notes: 'Luxury private reserve, exclusive use available' },
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
      { program: 'Virgin Atlantic Flying Club', route: 'SEA–JNB via BA', cost: '~120K VS miles RT', note: 'Use BA Avios for London layover hotel if needed' },
      { program: 'Hyatt Points', route: 'Last Word Kitara', cost: '~50K–75K per night (verify)', note: 'Last Word properties often available on points; confirm cat' },
    ],
    itinerary: [
      { date: 'April 21', label: 'Depart Chicago', description: 'Fly ORD → LHR. Overnight flight. Rest on the plane — long travel day ahead.', type: 'travel' },
      { date: 'April 22', label: 'London → Johannesburg', description: 'Arrive LHR early morning. Connect LHR → JNB. Land in Johannesburg evening. Overnight at airport hotel or transit lounge.', type: 'travel' },
      { date: 'April 23', label: 'Arrive Timbavati', description: 'Morning flight JNB → HDS (Hoedspruit, conf: XEB2ZT). Transfer to Shindzela Tented Camp. Check in and settle. Afternoon game drive (3–6pm) — first Big 5 sighting chance. Bush dinner under the stars.', type: 'activity' },
      { date: 'April 24', label: 'Full Day Safari — Timbavati', description: 'Early morning game drive (5:30–10am) through open acacia plains. Brunch at camp. Pool and relaxation. Afternoon drive (3–6pm). Night drive for nocturnal predators. Intimate camp with 5–8 guests.', type: 'activity' },
      { date: 'April 25', label: 'Transfer to Klaserie', description: 'Final morning drive at Shindzela. Check out. Transfer to Last Word Kitara in Klaserie Reserve. Afternoon game drive in riverine forest — prime leopard territory.', type: 'activity' },
      { date: 'April 26', label: 'Full Day Safari — Klaserie', description: 'Early morning drive through dense Klaserie vegetation. High leopard density. Brunch at lodge. Spa or pool. Afternoon drive focused on elephant herds and buffalo. Exclusive-use vehicle.', type: 'activity' },
      { date: 'April 27', label: 'Full Day Safari — Klaserie', description: 'Final full day of game drives. Morning drive targeting remaining Big 5 sightings. Leisurely brunch. Afternoon photography-focused drive — golden hour light. Farewell bush dinner.', type: 'activity' },
      { date: 'April 28', label: 'Fly Home — Leg 1', description: 'Morning check-out from Last Word Kitara. Transfer to JNB. Afternoon flight JNB → FRA on Condor (conf: AFR58A). Overnight flight.', type: 'travel' },
      { date: 'April 29', label: 'Arrive Home', description: 'Arrive Frankfurt. Connect FRA → YYZ. Arrive Toronto. Trip complete.', type: 'travel' },
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
    status: 'partially_booked',
    statusLabel: 'Partially Booked',
    travelers: '2 adults',
    heroImage: 'mobula-rays-jumping',
    flights: [
      { segment: 1, date: '2026-05-26', route: 'SEA → SJD', time: '9:45am → 2:10pm', airline: 'Alaska Airlines', cabin: 'Economy', status: 'booked', notes: 'Terry flight' },
      { segment: 2, date: '2026-05-26', route: 'SFO → SJD', time: '10:50am → 2:02pm', airline: 'Alaska Airlines', cabin: 'Economy', confirmation: 'K3NPTC', status: 'booked', notes: 'Janelle flight' },
      { segment: 3, date: '2026-05-31', route: 'SJD → SEA', time: '11:20am → 3:56pm', airline: 'Alaska Airlines', cabin: 'Economy', confirmation: 'IMDKIR', status: 'booked', notes: 'Changed from Delta (cancelled)' },
    ],
    hotels: [
      { property: 'Park Hyatt Los Cabos', location: 'Cabo San Lucas', checkIn: '2026-05-26', checkOut: '2026-05-27', program: 'Hyatt', status: 'pending', notes: 'Pre-expedition night — needs to be changed/confirmed' },
    ],
    actionItems: [
      { text: 'Confirm Park Hyatt Cabo booking for May 26–27 (or change hotel)', urgent: true },
      { text: 'Book expedition operator (Pelagic Fleet or Dive Ninja)', urgent: true },
      { text: 'Book La Paz accommodations for expedition days (May 27–30)', urgent: true },
      { text: 'Arrange Cabo → La Paz transfer for May 27', urgent: false },
      { text: 'Bring reef-safe sunscreen and underwater camera gear', urgent: false },
    ],
    intel: [
      { title: 'The Mobula Ray Phenomenon', content: 'The Sea of Cortez hosts one of nature\'s most spectacular seasonal events: the mobula ray aggregation. From late April through June, hundreds of thousands of spotted eagle rays migrate through the narrow channel, breaching and jumping in synchronized waves, sometimes leaping 10+ feet out of the water. Late May through early June offers the highest probability of witnessing mass breaching events. Visibility and calmness matter more than lunar phase.' },
      { title: 'Operators & Logistics', content: 'Pelagic Fleet and Dive Ninja Expeditions are the two gold-standard operators. Both use fast boats, employ marine biologists as guides, and focus on ethical wildlife interaction. Beyond mobulas, the Cortez is home to whale sharks, sea lions, hammerhead sharks, and giant mantas. Water temperature in May is 75–80°F. Seasickness is real — take medication before departure.' },
      { title: 'La Paz vs. Cabo', content: 'La Paz is the authentic choice: a colonial city with vibrant markets, local restaurants, and genuine Mexican character. Cabo San Lucas is the resort playground with all-inclusive resorts and nightlife. You\'re staying the first night in Cabo (Park Hyatt) then will need to transfer to La Paz area for the expedition days.' },
    ],
    awardTips: [
      { program: 'Hyatt Points', route: 'Park Hyatt Los Cabos', cost: '~30–40K per night', note: 'Confirm category and availability' },
    ],
    itinerary: [
      { date: 'May 26', label: 'Fly to Cabo', description: 'Terry: SEA 9:45am → SJD 2:10pm. Janelle: SFO 10:50am → SJD 2:02pm (conf: K3NPTC). Meet at Park Hyatt Los Cabos. Check in. Dinner and early night before expedition.', type: 'travel' },
      { date: 'May 27', label: 'Transfer to La Paz & Prep', description: 'Check out Park Hyatt. Transfer Cabo → La Paz (~2.5 hours). Check into La Paz accommodations. Afternoon briefing with expedition operator. Gear check and safety orientation. Explore the Malecón. Early dinner.', type: 'travel' },
      { date: 'May 28', label: 'Expedition Day 1', description: 'Early 5am departure by boat into the Sea of Cortez. 6–8 hours on the water searching for mobula ray aggregations. Snorkeling with rays when schools are located. Possible whale shark or sea lion encounters. Return to port by afternoon.', type: 'activity' },
      { date: 'May 29', label: 'Expedition Day 2', description: 'Second day on the water. Different location based on spotter reports. Peak breaching activity often mid-morning. Underwater photography opportunities. Marine biologist guide context on ray behavior.', type: 'activity' },
      { date: 'May 30', label: 'Expedition Day 3 or Rest', description: 'Optional third expedition day or rest/explore day. La Paz markets, seafood restaurants, sunset on the Malecón. Transfer back to Cabo area if needed for morning flight.', type: 'flexible' },
      { date: 'May 31', label: 'Fly Home', description: 'SJD 11:20am → SEA 3:56pm on Alaska (conf: IMDKIR). Home by evening.', type: 'travel' },
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
      { segment: 3, date: '2026-08-12', route: 'ALA → IST', time: '9:00am → 13:25', airline: 'Turkish Airlines', cabin: 'Business', status: 'booked', notes: 'Almaty to Istanbul' },
      { segment: 4, date: '2026-08-12', route: 'IST → SEA', airline: 'TBD', cabin: 'Business', status: 'needs_action', notes: 'FinnAir HEL route cancelled. Options: direct IST 185K+$514, or 35K+$128, or 135K+$315' },
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
      { segment: 1, date: '2026-09-24', route: 'SEA → SIN', time: '10:15am → 17:35 +1', airline: 'Singapore Airlines', cabin: 'Business', status: 'booked', notes: 'Arrive Singapore Sept 25' },
      { segment: 2, date: '2026-09-25', route: 'SIN → CGK', time: '18:30 → 19:20', airline: 'Singapore Airlines', cabin: 'Economy', status: 'booked', notes: 'Same evening connection' },
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
    awardTips: [],
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
      { title: 'Seoul Neighborhoods', content: 'Hannam-dong is Seoul\'s creative heart—design studios, galleries, elevated dining. Ikseon-dong is the hanok café district: narrow lanes, 100-year-old wood houses converted into coffee shops. Yeonnam-dong is the indie food and music neighborhood. October is perfection: 55–65°F, crisp mornings, autumn foliage mid-to-late October.' },
      { title: 'K-Beauty & Food', content: 'Garosugil boulevard for K-beauty flagships (Amorepacific, Sulwhasoo). Gwangjang Market for bindaetteok, mayak gimbap, banchan stalls. Coffee culture is serious — specialty pour-over shops on every block. Download Kakao T (taxi), Naver Maps (navigation), T-money card (transit).' },
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
  },

  // ═══════════════════════════════════════════════════════
  // AUSTRALIA — November 2026
  // ═══════════════════════════════════════════════════════
  {
    slug: 'australia-nov-2026',
    title: 'Australia',
    subtitle: 'Australia & Fiji',
    region: 'Oceania',
    country: 'Australia & Fiji',
    dates: 'November 13–25, 2026',
    month: 'November',
    year: 2026,
    status: 'partially_booked',
    statusLabel: 'Partially Booked',
    travelers: 'Terry',
    heroImage: 'tropical-island-nz-mountains',
    flights: [
      { segment: 1, date: '2026-11-13', route: 'LAX → DFW', time: '3:53pm → 8:57pm', airline: 'American Airlines', cabin: 'Business', status: 'booked', notes: '1hr 48min layover in DFW' },
      { segment: 2, date: '2026-11-13', route: 'DFW → SYD', time: '10:45pm → 9:25am +2', airline: 'Qantas', cabin: 'Business', status: 'booked', notes: 'Arrives Nov 15' },
      { segment: 3, date: '2026-11-25', route: 'NAN → SFO', time: '10:00pm → 12:25pm', airline: 'Fiji Airways', cabin: 'Business', confirmation: 'C4R3MG', status: 'booked', notes: 'Return via Fiji' },
    ],
    hotels: [],
    actionItems: [
      { text: 'Book Australia accommodations', urgent: true },
      { text: 'Plan Australia itinerary (cities, activities)', urgent: true },
      { text: 'Book Fiji accommodations if stopping', urgent: false },
      { text: 'Arrange LAX connection from SEA on Nov 13', urgent: false },
      { text: 'Research Australia visa/ETA requirements', urgent: false },
    ],
    intel: [
      { title: 'November in Australia', content: 'November is late spring in the Southern Hemisphere — warm weather (70–85°F depending on region), long daylight hours, and the start of beach season. It\'s an excellent time to visit: fewer crowds than December–February peak summer, lower hotel prices, and pleasant weather across most of the country. Sydney and Melbourne are comfortable, the Great Barrier Reef is entering dive season, and the Outback is bearable before extreme summer heat.' },
      { title: 'Fiji Return Stopover', content: 'Your return routes through Nadi (NAN), Fiji. This opens the possibility of a 1–3 night Fiji stopover on the way home. Nadi is the gateway to the Mamanuca and Yasawa island chains — white sand beaches, world-class snorkeling, and resort options from budget to ultra-luxury. November is the shoulder season with warm weather and lower prices.' },
    ],
    awardTips: [],
    itinerary: [
      { date: 'Nov 13', label: 'Depart for Australia', description: 'LAX 3:53pm → DFW 8:57pm. 1hr 48min layover. DFW 10:45pm → Australia (arrives Nov 15 at 9:25am). Long travel day.', type: 'travel' },
      { date: 'Nov 15', label: 'Arrive Australia', description: 'Land 9:25am. Clear customs. Check into accommodation. Rest and adjust to time zone.', type: 'travel' },
      { date: 'Nov 16–23', label: 'Explore Australia', description: 'Itinerary TBD — cities, national parks, activities to be planned.', type: 'flexible' },
      { date: 'Nov 24', label: 'Transfer to Fiji', description: 'Fly from Australia to Nadi (Fiji). Possible overnight stopover.', type: 'travel' },
      { date: 'Nov 25', label: 'Fly Home from Fiji', description: 'NAN 10:00pm → SFO 12:25pm (conf: C4R3MG). Home.', type: 'travel' },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // SINGAPORE, MALDIVES & SRI LANKA — Dec 2026 / Jan 2027
  // ═══════════════════════════════════════════════════════
  {
    slug: 'singapore-maldives-dec-2026',
    title: 'Singapore, Maldives & Sri Lanka',
    subtitle: 'Holiday Season — Three Countries',
    region: 'Asia & Indian Ocean',
    country: 'Singapore, Maldives & Sri Lanka',
    dates: 'December 24, 2026 – January 2027',
    month: 'December',
    year: 2026,
    status: 'planning',
    statusLabel: 'Planning',
    travelers: 'TBD (likely 2–4)',
    heroImage: 'singapore-gardens-night',
    flights: [
      { segment: 1, date: '2026-12-24', route: 'SEA → SIN', airline: 'Singapore Airlines', cabin: 'Business', status: 'booked', notes: 'Christmas Eve departure' },
    ],
    hotels: [
      { property: 'Andaz Singapore', location: 'Singapore', program: 'Hyatt', status: 'not_booked', notes: 'Modern, mid-range Hyatt' },
      { property: 'TBD — Maldives Resort', location: 'Maldives', status: 'not_booked', notes: 'Overwater villa or island resort — research needed' },
      { property: 'TBD — Sri Lanka', location: 'Sri Lanka', status: 'not_booked', notes: 'Boutique hotel or heritage property' },
    ],
    actionItems: [
      { text: 'Confirm Singapore hotel (Andaz vs. alternative)', urgent: true },
      { text: 'Research and book Maldives resort (points or paid)', urgent: true },
      { text: 'Plan Sri Lanka itinerary and accommodations', urgent: true },
      { text: 'Book internal flights: SIN → MLE, MLE → CMB or direct', urgent: false },
      { text: 'Confirm return flight routing', urgent: false },
      { text: 'Research Maldives and Sri Lanka visa requirements', urgent: false },
    ],
    intel: [
      { title: 'Singapore: Hawker Centres & Neighborhoods', content: 'Singapore\'s food culture is world-class. Tiong Bahru for specialty coffee and kaya toast breakfast. Joo Chiat for Peranakan heritage. Hawker centres are the real dining experience: Maxwell Food Centre, Old Airport Road, Chinatown Complex. Gardens by the Bay at night for the Supertree light show. Christmas decorations make late December festive.' },
      { title: 'Maldives: Overwater Paradise', content: 'The Maldives is a chain of 1,190 coral islands grouped into 26 atolls. December–January is peak season with perfect weather (80–85°F, low humidity, calm seas). Most resorts are self-contained islands with overwater villas, house reefs for snorkeling, and dive centers. Hyatt (Park Hyatt Maldives) and other loyalty programs have options. Book early — holiday season fills months in advance.' },
      { title: 'Sri Lanka: Culture, Tea & Wildlife', content: 'Sri Lanka offers incredible diversity: ancient temples, hill-country tea plantations, wildlife safaris (Yala National Park for leopards), and stunning beaches on the south coast. December is ideal for the south and west coasts. Colombo is a foodie city with emerging fine dining. The cultural triangle (Sigiriya, Dambulla, Kandy) is a must for first-time visitors. Internal travel is by car/driver (affordable and flexible).' },
    ],
    awardTips: [
      { program: 'Hyatt Points', route: 'Andaz Singapore or Park Hyatt Maldives', cost: '~25–55K per night', note: 'Book early for December holiday travel' },
    ],
    itinerary: [
      { date: 'Dec 24', label: 'Fly to Singapore', description: 'Depart SEA → SIN. Christmas Eve in the air.', type: 'travel' },
      { date: 'Dec 25–28', label: 'Singapore', description: 'Christmas in Singapore. Hawker centres, Gardens by the Bay, Tiong Bahru coffee, Joo Chiat Peranakan neighborhood. Festive decorations across Marina Bay.', type: 'activity' },
      { date: 'Dec 29–31', label: 'Maldives', description: 'Fly SIN → MLE. Overwater villa. Snorkeling, diving, beach. New Year\'s Eve in paradise.', type: 'activity' },
      { date: 'Jan 1–4', label: 'Sri Lanka', description: 'Fly MLE → CMB. Explore Colombo, tea plantations, temples. South coast beaches. Wildlife at Yala.', type: 'activity' },
      { date: 'Jan 5+', label: 'Fly Home', description: 'Return routing TBD. CMB → SIN → SEA or direct options.', type: 'travel' },
    ],
  },
];
