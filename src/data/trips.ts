export type TripStatus = 'booked' | 'partially_booked' | 'needs_action' | 'planning' | 'decision_needed' | 'canceled';

export interface Flight {
  segment: number;
  date: string;
  route: string;
  time?: string;
  airline?: string;
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
  options?: { name: string; description: string }[];
}

export const trips: Trip[] = [
  {
    slug: 'japan-feb-2025',
    title: 'Japan',
    subtitle: 'Tokyo & Kyoto',
    region: 'East Asia',
    country: 'Japan',
    dates: 'February 2025',
    month: 'February',
    year: 2025,
    status: 'needs_action',
    statusLabel: 'Needs Action',
    travelers: '2 adults',
    heroImage: 'tokyo-shibuya',
    flights: [
      {
        segment: 1,
        date: 'TBD',
        route: 'SEA → NRT',
        airline: 'JetBlue',
        status: 'needs_action',
      },
      {
        segment: 2,
        date: 'TBD',
        route: 'NRT → SEA',
        airline: 'British Airways',
        confirmation: 'BA pending',
        status: 'pending',
      },
    ],
    hotels: [
      {
        property: 'TBD',
        location: 'Tokyo',
        status: 'not_booked',
      },
      {
        property: 'TBD',
        location: 'Kyoto',
        status: 'not_booked',
      },
    ],
    actionItems: [
      { text: 'Accept British Airways flight segment', urgent: true },
      { text: 'Confirm PNR segments are linked (JetBlue + BA)', urgent: true },
      { text: 'Check baggage transfer policy between carriers', urgent: false },
      { text: 'Book Tokyo and Kyoto accommodations', urgent: false },
    ],
    intel: [
      {
        title: 'Tokyo Hidden Neighborhoods',
        content: 'Skip the tourist conveyor belt and explore Tokyo\'s artistic underbelly. Shimokitazawa is a bohemian time capsule of vintage shops, live music venues, and izakayas tucked into alleyways; arrive by 6pm to snag dinner reservations at intimate spots like Karasu. Yanaka, in northeast Tokyo, feels like a Meiji-era village with temple gates, traditional wood-front homes, and cafés like Kissaten Shingetsu serving pour-over coffee in a 1950s setting. Kagurazaka, on the Shinjuku side, is pure romance—a winding neighborhood of wine bars, French bistros, and sake shops that locals keep secret. Skip the standard Shibuya–Shinjuku tourist loop entirely; these neighborhoods reward wandering and spontaneous discoveries.',
      },
      {
        title: 'Kyoto Beyond the Temples',
        content: 'While Fushimi Inari and the bamboo groves are iconic, the real Kyoto reveals itself in smaller neighborhoods. Higashiyama\'s quiet side streets hide tiny machiya teahouses and artisan pottery studios. Arashiyama\'s Okochi Villa offers mountain views that rival the famous grove, with half the crowds. For eating, skip the tourist kaiseki restaurants and head to the covered markets: Kyoto Oike Ichiba is where locals shop for seasonal vegetables, pickles, and prepared foods. The philosopher\'s walk—a tree-lined canal path perfect for morning walks—connects Higashiyama\'s temple clusters and leads to small neighborhood cafés and matcha shops. February is plum blossom season at temples like Kitano Tenmangu; you\'ll see locals in kimono but far fewer international crowds than cherry blossom season.',
      },
      {
        title: 'Food: Where Locals Actually Eat',
        content: 'Tsukiji Outer Market in Tokyo is the real deal—skip the Instagram tourist stalls and eat at Daikokuya (tamagoyaki), Yamamoto for grilled seafood, or any counter-seating sushi bar. Depachika (department store basement food halls) are Japan\'s best-kept eating secret: Shinjuku Mitsukoshi\'s basement rivals Michelin restaurants for quality and variety, with bentō boxes, prepared seafood, wagyu, and desserts at every price point. In both cities, hunt for standing sushi bars (tachi-gui sushi): they\'re cheap, fresh, and full of locals. Ramen alleys in Tokyo (like Ramen Yokocho in Shinjuku) and Kyoto (like Ramen Koji in Ippudo\'s building) offer 10+ tiny stalls of regional ramen styles. Convenience stores (7-Eleven, Family Mart) are genuinely good for late-night onigiri, bento, and prepared meals.',
      },
      {
        title: 'Transit & Practical Intelligence',
        content: 'Buy a Suica or Pasmo card immediately upon arrival—it works on every train, subway, and bus in Japan and eliminates fumbling with tickets. JR Pass is only worth it if you\'re going Tokyo→Kyoto→Osaka multi-leg; day trips within each city don\'t justify the cost. Tokyo Metro is the fastest way around the city; Kyoto\'s buses are more intuitive for visitors, though trains exist. February weather is cold (35-45°F) but dry—pack layers. Plum blossoms (ume) peak mid-February, with less tourist overflow than cherry blossoms (late March–early April). Fewer crowds means restaurant reservations are easier and temples feel contemplative rather than crowded.',
      },
    ],
    awardTips: [
      {
        program: 'Virgin Atlantic Flying Club',
        route: 'SEA-NRT First',
        cost: '~110K VS miles RT',
        note: 'If you can access Aeroplan or partner book with British Airways',
      },
    ],
  },

  {
    slug: 'safari-apr-2026',
    title: 'Greater Kruger Safari',
    subtitle: 'Timbavati & Klaserie Reserves',
    region: 'Southern Africa',
    country: 'South Africa',
    dates: 'April 21-29, 2026',
    month: 'April',
    year: 2026,
    status: 'partially_booked',
    statusLabel: 'Partially Booked',
    travelers: '4 adults (Terry, Janelle, Janelle\'s parents)',
    heroImage: 'kruger-safari-lion',
    flights: [
      {
        segment: 1,
        date: '2026-04-21',
        route: 'ORD → LHR',
        status: 'booked',
      },
      {
        segment: 2,
        date: '2026-04-22',
        route: 'LHR → JNB',
        status: 'booked',
      },
      {
        segment: 3,
        date: '2026-04-23',
        route: 'JNB → HDS',
        confirmation: 'XEB2ZT',
        status: 'booked',
      },
      {
        segment: 4,
        date: '2026-04-28',
        route: 'JNB → FRA',
        airline: 'Condor',
        confirmation: 'AFR58A',
        status: 'booked',
      },
      {
        segment: 5,
        date: '2026-04-29',
        route: 'FRA → YYZ',
        status: 'booked',
      },
    ],
    hotels: [
      {
        property: 'Shindzela Tented Camp',
        location: 'Timbavati Reserve',
        checkIn: '2026-04-23',
        checkOut: '2026-04-25',
        status: 'booked',
        cost: 'R47,310 ZAR (~$2,557 USD for 4 pax)',
        notes: 'Intimate bush camp, 5-8 guests per group',
      },
      {
        property: 'Last Word Kitara',
        location: 'Klaserie Reserve',
        checkIn: '2026-04-25',
        checkOut: '2026-04-28',
        program: 'Booked on Points',
        status: 'booked',
        notes: 'Luxury private reserve, exclusive use available',
      },
    ],
    actionItems: [
      { text: 'Confirm final payment for Shindzela Tented Camp', urgent: true },
      { text: 'Confirm Last Word Kitara points booking and payment plan', urgent: true },
      { text: 'Arrange HDS → JNB transfer for April 28 departure', urgent: true },
      { text: 'Start malaria prophylaxis 1-2 weeks before departure', urgent: true },
      { text: 'Obtain travel insurance with medical evacuation coverage', urgent: true },
      { text: 'Verify passports valid 6+ months beyond return date', urgent: false },
    ],
    intel: [
      {
        title: 'The Greater Kruger Ecosystem',
        content: 'The Greater Kruger encompasses multiple private reserves (Timbavati, Klaserie, Sabi Sands, Kruger proper) that operate as a unified ecosystem spanning nearly 24,000 sq km. What makes this region exceptional is the density of large predators—leopard, lion, painted wild dog, hyena—combined with open access between reserves that allows wildlife to roam freely. Timbavati and Klaserie are considered premium mid-tier reserves: more exclusive than Kruger proper but less crowded and expensive than Sabi Sands. April is autumn in South Africa, with cooling temperatures (highs around 70°F, lows 45-50°F), sparse grass (making animals easier to spot), and fewer international tourists than peak season (June-August). The game viewing in April is often considered superior to winter because wildlife congregates near remaining water sources, but roads are still passable and camps are less crowded.',
      },
      {
        title: 'Big 5 Viewing & Game Drive Strategy',
        content: 'The "Big 5"—lion, leopard, elephant, cape buffalo, rhino—is a colonial hunting term, not an ecological classification, but they remain the marquee sightings. Leopards are the hardest to spot due to nocturnal behavior; your best chances are early morning or late afternoon drives, and the Klaserie reserve (your second leg) has notably strong leopard populations. Lions are social and more predictable; guides often locate prides by sound and movement patterns. Elephants congregate at water sources year-round; April is excellent for elephant viewing as small herds move between reserves. Buffalo travel in large herds and are surprisingly difficult to photograph due to bulk and speed. Rhinos are increasingly rare and sightings are not guaranteed; do not expect to see them. Early morning game drives (5:30-10am) are mandatory: animals are active, light is perfect for photography, and the bush is cooler. Afternoon drives (3-6pm) are secondary; night drives (where permitted) yield nocturnal predators like hyena and leopard. Guides at boutique camps like Shindzela and Last Word are exceptional—they track animals through radio networks and GPS, so your luck is driven more by group size and camp reputation than random chance.',
      },
      {
        title: 'Timbavati vs. Klaserie: Reserve Characteristics',
        content: 'Timbavati (your first 2 nights) is known for open plains, excellent lion viewing, and smaller, more intimate camp experiences. Shindzela, your camp, sits in classic Timbavati habitat with low acacia woodland and grassland—perfect for spotting cats and large herds. Klaserie (your second 3 nights) has more riverine forest, denser vegetation, and notably higher leopard densities; it\'s considered one of the best leopard-viewing reserves in all of Africa. Last Word Kitara is a flagship property with exclusive use options, meaning guides focus entirely on your party rather than rotating through multiple vehicles. The transition between reserves gives you variety in landscape and animal behavior, and both are world-class. April offers the best of both: cool mornings for active wildlife, less competition from other visitors, and guides with high motivation (not burned out from peak-season crowds).',
      },
      {
        title: 'Packing, Tipping & Practical Notes',
        content: 'Pack neutral earth tones (khaki, olive, tan)—bright colors startle wildlife, and game lodge photos look better in natural hues. Binoculars are essential; consider renting quality ones from your camp if you don\'t own them. Camps provide malaria prophylaxis guidance, but start pills 1-2 weeks before arrival; discuss options (mefloquine, doxycycline, atovaquone-proguanil) with your doctor based on your tolerance. South African tipping culture is generous: R50-100 ZAR per day for guides, R20-50 for general staff. Wildlife guides are the backbone of your experience; tip generously. Bring cash (USD or ZAR) for tips; cards often aren\'t practical in remote areas. Travel insurance is non-negotiable; ensure it covers medical evacuation (helicopter rescue from the bush can exceed $100k). Internet and cell coverage are spotty in private reserves; this is intentional. Expect to disconnect almost entirely for 5 days—tell your contacts to expect limited communication.',
      },
    ],
    awardTips: [
      {
        program: 'Virgin Atlantic Flying Club',
        route: 'SEA-JNB via BA',
        cost: '~120K VS miles RT',
        note: 'Use BA Avios for London layover hotel if needed',
      },
      {
        program: 'Hyatt Points',
        route: 'Last Word Kitara',
        cost: '~50K-75K per night (verify)',
        note: 'Last Word properties often available on points; confirm cat',
      },
    ],
  },

  {
    slug: 'mobulas-may-2025',
    title: 'Mobula Ray Expedition',
    subtitle: 'Sea of Cortez, Baja California',
    region: 'Central America',
    country: 'Mexico',
    dates: 'May 2025 (TBD)',
    month: 'May',
    year: 2025,
    status: 'planning',
    statusLabel: 'Planning',
    travelers: '2 adults',
    heroImage: 'mobula-rays-jumping',
    flights: [],
    hotels: [],
    actionItems: [
      { text: 'Confirm travel dates (late May preferred for ray aggregation)', urgent: false },
      { text: 'Search SEA → SJD flights for May dates', urgent: false },
      { text: 'Research and book reputable expedition operator', urgent: false },
      { text: 'Decide: La Paz vs. Cabo San Lucas as base', urgent: false },
      { text: 'Book pre/post-expedition accommodations', urgent: false },
      { text: 'Arrange snorkeling or diving certification if needed', urgent: false },
    ],
    intel: [
      {
        title: 'The Mobula Ray Phenomenon',
        content: 'The Sea of Cortez—what Jacques Cousteau called the "Aquarium of the World"—hosts one of nature\'s most spectacular seasonal events: the mobula ray aggregation. From late April through June, hundreds of thousands of spotted eagle rays (mobulas) migrate through the narrow channel, and on calm days, they breach and jump in synchronized waves, sometimes leaping 10+ feet out of the water. This behavior is still not fully understood by scientists—it may be related to mating, parasite removal, or prey herding. Unlike whale sharks (which you might also encounter), mobulas are small (wing span 3-4 feet) but incredibly agile. The aggregation is predictable but weather-dependent; late May through early June offers the highest probability of witnessing mass breaching events. The 2-3 days around full moons (April 9, May 9, June 8 in 2025) often see more activity, though this is not guaranteed. Visibility and calmness matter more than lunar phase.',
      },
      {
        title: 'Operators, Logistics & Sea of Cortez Marine Life',
        content: 'Pelagic Fleet and Dive Ninja Expeditions are the two gold-standard operators for Cortez mobula expeditions. Both use fast boats, employ marine biologists as guides, and focus on ethical wildlife interaction (no chasing; approaching from downwind/downcurrent). Pelagic is based in La Paz and offers 2-3 day liveaboard expeditions; Dive Ninja operates out of Cabo and offers day trips with hotel stays. Beyond mobulas, the Cortez is home to whale sharks (June-July peak), sea lions, hammerhead sharks, giant mantas, and enormous schools of jacks and sierra. Snorkeling is the primary activity (diving is less common due to wave conditions and current), though if you\'re certified, some operators offer selective deep dives. Water temperature in May is 75-80°F, warm enough for a thin wetsuit or rash guard. Seasickness is real; take medication before departure (Dramamine, scopolamine patch) as the Cortez can be choppy, especially in morning hours. The journey is physically demanding—early 5am departures, 6-8 hours on the water—but rewards are unforgettable.',
      },
      {
        title: 'La Paz vs. Cabo: Which Base?',
        content: 'La Paz, the capital of Baja California Sur, is the authentic choice: a colonial city with vibrant markets, local restaurants, and genuine Mexican character. It\'s the primary hub for Cortez marine expeditions and sits directly on the water. Hotels are simpler and more affordable (unless you choose luxury options), and you\'ll eat better local food. Cabo San Lucas, two hours south, is the resort playground: all-inclusive resorts, high-end dining, nightlife, and cruise-ship tourism. Dive Ninja expeditions are based in Cabo and can pick you up from hotels, but you\'ll be surrounded by tourism. If this is your first Cortez expedition, stay in La Paz for authenticity and community; stay in Cabo if you want creature comforts and nightlife around your expedition days. Most travelers arrive a day early for acclimatization and leave a day after the expedition to recover; plan 4-5 days total (1 travel day, 2-3 expedition days, 1 recovery day).',
      },
      {
        title: 'Preparation & Underwater Photography',
        content: 'Bring a GoPro or underwater camera; this is a once-in-a-lifetime event and you\'ll want footage. Phone-based underwater housings are adequate for snorkeling. If you\'re not a strong swimmer, inform your operator—they\'ll assign a guide to stay near you and consider one-on-one ratios. Sunscreen is crucial (reef-safe only); you\'ll be in water 4-6 hours per day. Bring a wide-brimmed hat, quick-dry shirt, and water shoes (boat decks are slippery). The exertion is real—expect sunburnt shoulders and a tired body. Acoustically, mobula breaches are often silent from underwater, but the vibrations are felt through your body. Some operators offer underwater microphones to record the soundscape. If you\'re flying in from SEA, connect through Mexico City, Cabo, or Los Angeles; direct flights are rare but sometimes available from Seattle to SJD (San José del Cabo).',
      },
    ],
    awardTips: [
      {
        program: 'Virgin Atlantic Flying Club',
        route: 'SEA-SJD',
        cost: '~60K VS miles RT',
        note: 'Book early; summer is peak travel season',
      },
      {
        program: 'IHG Rewards',
        route: 'La Paz (if available)',
        cost: '~15-20K per night',
        note: 'IHG has limited presence in Baja; most are Marriott or independents',
      },
    ],
  },

  {
    slug: 'stans-aug-2025',
    title: 'Horse Trekking in the Stans',
    subtitle: 'Kyrgyzstan & Kazakhstan',
    region: 'Central Asia',
    country: 'Kyrgyzstan & Kazakhstan',
    dates: 'August 2025',
    month: 'August',
    year: 2025,
    status: 'needs_action',
    statusLabel: 'Needs Action',
    travelers: '2 adults',
    heroImage: 'kyrgyzstan-mountains-horses',
    flights: [
      {
        segment: 1,
        date: 'TBD',
        route: 'SEA → OSS/BIS/TAS',
        status: 'booked',
        notes: 'Details TBD',
      },
      {
        segment: 2,
        date: 'TBD',
        route: 'OSS/BIS/TAS → SEA',
        status: 'booked',
        notes: 'Details TBD',
      },
    ],
    hotels: [
      {
        property: 'TBD - City Night in Bishkek',
        location: 'Bishkek, Kyrgyzstan',
        status: 'not_booked',
        notes: 'Pre-trek acclimatization and visa arrangement',
      },
      {
        property: 'TBD - Yurt Stay (Song-Kol Lake)',
        location: 'Song-Kol Lake, Kyrgyzstan',
        status: 'not_booked',
        notes: 'Core horse trekking experience',
      },
      {
        property: 'TBD - City Night in Almaty or Tashkent',
        location: 'Almaty, Kazakhstan or Tashkent, Uzbekistan',
        status: 'not_booked',
        notes: 'Post-trek recovery',
      },
    ],
    actionItems: [
      { text: 'Book city nights in Bishkek (pre-trek)', urgent: true },
      { text: 'Book city night in Almaty or Tashkent (post-trek)', urgent: true },
      { text: 'Research and book reputable horse trekking operator', urgent: true },
      { text: 'Verify Kyrgyzstan e-Visa process (online application)', urgent: false },
      { text: 'Confirm Kazakhstan visa-free entry for Canadians', urgent: false },
      { text: 'Arrange horse riding experience if not confident', urgent: false },
      { text: 'Book return flights with flexible dates (trekking may overrun)', urgent: false },
    ],
    intel: [
      {
        title: 'The Horse in Kyrgyz Culture',
        content: 'In Kyrgyzstan, the horse is not merely a mode of transportation—it is central to identity, spirituality, and survival on the high Pamir and Tian Shan mountains. Kyrgyz nomadic herders have lived on horseback for over 1,000 years, and this heritage is felt instantly upon arrival. The phrase "Kyrgyz without a horse is not Kyrgyz" encapsulates the cultural weight. Horses are broken early (age 3-4), ridden bareback or with minimal saddles, and are treated as partners rather than animals. Traditional games like buzkashi (a wild polo game with a goat carcass) remain central to festivals. Staying in a yurt community and learning to ride in Kyrgyz tradition—eating fermented horse milk (kumis) with herders, understanding herd management, sleeping in a felt home—is an immersive cultural experience that mainstream tourism rarely offers. August is peak trekking season, and the high meadows are alive with herds moving between seasonal pastures.',
      },
      {
        title: 'Song-Kol Lake: High Alpine Trekking',
        content: 'Song-Kol Lake sits at 10,000 feet in central Kyrgyzstan—a pristine alpine lake ringed by snow-capped peaks and endless grassland. The 3-4 day horse trek to and around Song-Kol is a classic Kyrgyz itinerary: you depart Bishkek, drive to a trailhead, and spend 3-4 days riding across high passes (Tian Shan range) with nights in yurts. This is not a resort experience; it is genuinely remote, with limited facilities and real physical demands. Guides are Kyrgyz herders who speak limited English, meals are simple (bread, cheese, yak butter, occasional mutton), and horses are reliable but untrained by Western standards. The lake itself is extraordinary—blue water, surrounding peaks often snow-capped into August, and yurt communities still using the lake as a summer herding ground. Most treks operate July-September; August offers warm days (60-70°F) but nights drop to 40°F. Altitude sickness is possible; acclimatize in Bishkek for 1-2 days before trekking. The experience is humbling and transformative but physically taxing—not a luxury holiday.',
      },
      {
        title: 'Bishkek & Almaty: Gateway Cities & Bazaar Culture',
        content: 'Bishkek, Kyrgyzstan\'s capital, sits in a broad valley at modest elevation (2,600 ft) and is the essential acclimatization point. The city is Soviet in layout (wide avenues, blocky buildings) but rapidly modernizing, with new cafés, galleries, and an emerging nightlife. Osh Bazaar is Bishkek\'s soul: a sprawling market of spices, textiles, dried fruits, leather goods, and street food. Spend a morning navigating stalls, tasting local breads (nan), and observing the haggling culture. Almaty, Kazakhstan\'s former capital (3 hours south of Bishkek), sits at the edge of the Tian Shan mountains and is more sophisticated than Bishkek—with a strong coffee culture, hiking access, and Green Bazaar (Zeleniy Bazaar), which rivals Osh Bazaar for sensory overload and authenticity. Both cities offer 1-2 night stops for recovery, laundry, hot showers, and real restaurants before/after trekking. Tashkent, Uzbekistan\'s capital, is another option (further but more developed) with excellent museums and Silk Road history.',
      },
      {
        title: 'Altitude, Season & Practical Considerations',
        content: 'August is the optimal trekking month in Kyrgyzstan: passes are snow-free, weather is relatively stable, and yurt camps are active. July can be rainy and muddy; September sees early snow on high passes. Song-Kol at 10,000 feet poses mild altitude risk—symptoms include headache, mild shortness of breath, insomnia. Ascending slowly from Bishkek (7,500 ft) to the high passes reduces risk. Bring diamox (acetazolamide) prescribed by your doctor as a precaution; most people adapt quickly. Horses in Kyrgyzstan are hardy mountain breeds, smaller than Western horses but sure-footed and capable on steep terrain. Riding experience is helpful but not required; operators pair inexperienced riders with calm horses. Expect 5-6 hours in saddle per day, with sore legs and backside even for experienced riders. Food consists of bread, cheese, dried fruits, yak meat, and occasional vegetables; dietary restrictions (vegetarian, vegan) must be communicated in advance. Water is typically boiled or bottled. Traditional Kyrgyz foods—beshbarmak (boiled meat and noodles), manti (steamed dumplings), kumis (fermented horse milk)—are staples that build cultural appreciation.',
      },
    ],
    awardTips: [
      {
        program: 'Virgin Atlantic Flying Club',
        route: 'SEA-BIS (via Bishkek)',
        cost: '~80K VS miles RT',
        note: 'Route may require connections through Istanbul or Moscow',
      },
      {
        program: 'Hyatt',
        route: 'Hyatt Regency Bishkek (if available)',
        cost: '~25-30K per night',
        note: 'Limited Hyatt presence; Park Hyatt Almaty is option',
      },
    ],
  },

  {
    slug: 'iop-sep-2025',
    title: 'IOP',
    subtitle: 'Details Pending',
    region: 'TBD',
    country: 'TBD',
    dates: 'September 25, 2025',
    month: 'September',
    year: 2025,
    status: 'booked',
    statusLabel: 'Booked',
    travelers: 'TBD',
    flights: [],
    hotels: [],
    actionItems: [
      { text: 'Clarify IOP destination and itinerary', urgent: true },
      { text: 'Confirm travelers and group size', urgent: true },
      { text: 'Verify booking details and confirmation numbers', urgent: true },
    ],
    intel: [
      {
        title: 'Details Pending',
        content: 'More information needed to provide detailed destination intelligence. Once the destination and itinerary are confirmed, this section will be populated with curated travel recommendations, local insights, and practical logistics.',
      },
    ],
    awardTips: [],
  },

  {
    slug: 'korea-oct-2025',
    title: 'South Korea',
    subtitle: 'Seoul',
    region: 'East Asia',
    country: 'South Korea',
    dates: 'October 2025',
    month: 'October',
    year: 2025,
    status: 'planning',
    statusLabel: 'Planning',
    travelers: 'Janelle (solo or +1)',
    heroImage: 'seoul-autumn',
    flights: [
      {
        segment: 1,
        date: 'TBD',
        route: 'SEA → ICN',
        status: 'pending',
        notes: 'Award booking via Aeroplan, ANA, or Korean Air SkyPass',
      },
    ],
    hotels: [
      {
        property: 'Park Hyatt Seoul or Boutique Alternative',
        location: 'Hannam-dong, Seoul',
        status: 'not_booked',
        notes: 'Hannam-dong is the design/dining hub',
      },
    ],
    actionItems: [
      { text: 'Confirm solo travel vs. +1 companion', urgent: false },
      { text: 'Search award availability: Aeroplan, ANA, Korean Air SkyPass', urgent: false },
      { text: 'Book hotel in Hannam-dong (Park Hyatt or boutique)', urgent: false },
      { text: 'Research K-beauty shopping and afternoon café scene', urgent: false },
    ],
    intel: [
      {
        title: 'Seoul Neighborhood Guide: Design, Dining & Cafés',
        content: 'Hannam-dong is Seoul\'s creative heart—a hillside neighborhood where design studios, galleries, and elevated dining have replaced old villas. Walk the steep residential streets to discover hidden boutiques, ceramics studios, and wine bars tucked into converted hanok (traditional Korean homes). Park Hyatt sits at the apex; even if you don\'t stay there, visit the rooftop bar. Ikseon-dong, just north, is the "hanok café" district: narrow lanes lined with 100-year-old wood houses converted into coffee shops, tea rooms, and small restaurants. Yeonnam-dong, west of Hongdae, is the indie food and music neighborhood—ramen alleys, tteokbokki (spicy rice cakes) street stalls, live music venues, and young Korean creatives. These three neighborhoods exemplify modern Seoul: a blend of preservation, design consciousness, and culinary innovation. Avoid the obvious Gangnam; it\'s beautiful but commercial and exhausting.',
      },
      {
        title: 'Autumn Foliage, October Weather & Timing',
        content: 'October in Seoul is perfection: temperatures 55-65°F, crisp mornings, clear skies, and the first waves of autumn foliage. Namsan (a small mountain in central Seoul) and parks along the Han River turn golden-red mid-October, with peak colors typically mid-to-late October. Korean autumn is shorter and more intense than other seasons, peaking in a 2-3 week window. If Janelle can travel October 15-30, she\'ll catch peak foliage and crisp weather ideal for walking and photography. October also avoids peak summer tourism (July-August) and winter holiday crowds (December); restaurants and hotels are available without weeks of advance notice. Layer clothing: thin sweaters during the day, light jackets for evening.',
      },
      {
        title: 'K-Beauty Shopping, Apps & Local Intelligence',
        content: 'Garosugil is the epicenter of Korean beauty and fashion—a tree-lined boulevard lined with K-beauty flagships (Aesop, Nars, MAC alongside Korean brands like Amorepacific, Sulwhasoo, Purito). Myeongdong is more touristy but comprehensive for beauty shopping. For authentic local life, download Kakao T (taxi/ride-sharing), Naver Maps (superior navigation), Coupang Eats (food delivery), and T-money card (transit). Gwangjang Market in Jongno-gu is the real deal for street food—bindaetteok (Korean pancake made from mung beans), mayak gimbap (seaweed rice rolls so addictive they\'re called "drug rolls"), and stalls of banchan (side dishes) and grilled meat. Sit at a stall counter and eat like locals do. This market is where Korean food writers and chefs eat when off-duty. October crowds are moderate—not the peak summer tourist crush.',
      },
      {
        title: 'Logistics: Transit, Food, Neighborhoods',
        content: 'Seoul\'s subway is clean, efficient, and English-labeled; use T-money card (rechargeable transit card) available at convenience stores. Download Naver Maps (Google Maps is unreliable in Korea). Hannam-dong is quieter than central neighborhoods but walkable to Hongik University (nightlife), Gangnam (if needed), and the Han River parks. Most restaurants don\'t take reservations; arrive at 5:30pm or 9:00pm to avoid waits. Coffee culture is serious in Seoul—specialty coffee shops (often single-origin pour-over) are on every block; expect to spend 6,000-9,000 KRW (~$5-7 USD) for exceptional coffee. Korean food outside of markets is highly refined; don\'t skip restaurants. October is shoulder season—book hotels 2-3 weeks in advance, but last-minute availability is still possible.',
      },
    ],
    awardTips: [
      {
        program: 'Aeroplan',
        route: 'SEA-ICN',
        cost: '~65K AP miles RT',
        note: 'Book early for October; Asia routes fill quickly',
      },
      {
        program: 'ANA Mileage Club via Virgin Atlantic',
        route: 'SEA-ICN via Tokyo',
        cost: '~75K ANA miles RT',
        note: 'If routing via NRT is acceptable',
      },
      {
        program: 'Korean Air SkyPass',
        route: 'SEA-ICN',
        cost: '~63K SkyPass miles RT',
        note: 'Janelle may have Korean Air status; check',
      },
    ],
  },

  {
    slug: 'nov-2025-tbd',
    title: 'November 2025 — Decision Needed',
    subtitle: 'Calala Island or New Zealand',
    region: 'Americas or Oceania',
    country: 'Honduras or New Zealand',
    dates: 'November 2025',
    month: 'November',
    year: 2025,
    status: 'decision_needed',
    statusLabel: 'Decision Needed',
    travelers: 'TBD',
    heroImage: 'tropical-island-nz-mountains',
    flights: [],
    hotels: [],
    actionItems: [
      { text: 'Decide between Calala Island and New Zealand by August 2025', urgent: true },
      { text: 'If NZ: Book award space ASAP (peak season, limited availability)', urgent: true },
      { text: 'If Calala: Confirm dates and guest count with operator', urgent: false },
    ],
    intel: [
      {
        title: 'Option A: Calala Island — Private Island Luxury',
        content: 'Calala Island is an all-inclusive private island resort in Honduras (Bay Islands, Caribbean) with a maximum of 8 guests at any time. The island is a 45-minute flight from La Ceiba or 10 minutes by private boat from Roatán. Accommodations are beachfront thatched bungalows; activities include diving, fishing, snorkeling, spa, and complete disconnection. All meals (Caribbean seafood-focused), drinks, and activities are included; no tipping, no bills—pure all-inclusive simplicity. November is post-hurricane season and ideal weather (80-85°F, low humidity, calm seas). The island is exclusive and romantic, best for couples seeking luxury isolation. Cost is $2,500-$3,500+ per person per night (high, but all-inclusive). Best for: luxury, diving/fishing, romantic escape. Downside: limited exploration; you\'re confined to the island. The exclusive nature makes it ideal for honeymooners or couples seeking uninterrupted time together.',
      },
      {
        title: 'Option B: New Zealand — Multi-Week Adventure',
        content: 'South Island New Zealand is a self-drive adventure spanning 1-2 weeks: Queenstown (adventure capital, bungee/sky diving), Milford Sound (UNESCO fjord, hiking, kayaking), Mt. Cook (hiking mecca, Aoraki views), Wanaka (outdoor hub, wine tasting, scenic drives). November is spring in the Southern Hemisphere—wildflowers blooming, weather warming (60-70°F), daylight extending late (sunsets 9:30pm+). Shoulder season pricing is lower than summer (December-February) but still busy. A typical itinerary: fly into Christchurch or Queenstown, rent a car, drive 7-10 days hitting national parks and scenic drives, fly home. This is active travel—hiking, scenic drives, outdoor meals—requiring more planning than Calala but offering incomparably more depth and variety. Cost: flights + rental car + accommodations + activities = roughly $200-300/person per day (cheaper than Calala when averaged). Best for: adventurous couples, outdoor enthusiasts, photographers, self-guided explorers. Award space is scarce in November; book 6-9 months in advance.',
      },
      {
        title: 'Decision Timeline & Award Booking Strategy',
        content: 'Decision deadline is August 2025 because New Zealand award space (especially premium cabins/routes) books out 6+ months in advance. Calala can often accommodate shorter booking windows (weeks, not months) due to small guest count. If choosing New Zealand, start searching points availability in mid-May 2025 via Seats.aero, Roame, or Point.me. For flights, consider: Aeroplan SEA-CHC (Christchurch) or AUD (Auckland) redemptions (typically 80-100K miles RT), Virgin Atlantic SEA-AKL via LAX, or Cathay Pacific via Hong Kong. Accommodation in NZ ranges from DOC (Department of Conservation) huts (~$25/night, basic) to luxury lodges ($300+/night); mid-range is $80-150/night. Car rental (SUV recommended for rough roads) is $50-70/day. If choosing Calala, contact the operator by October to confirm dates and availability; bookings can often be finalized with 2-4 weeks notice.',
      },
      {
        title: 'Why This Decision Matters',
        content: 'This choice reflects different travel styles and philosophies. Calala Island represents luxury escape and relaxation—finite time to disconnect completely, curated by professionals, zero logistics. New Zealand represents active discovery, self-directed adventure, physical challenge, and deep place-based immersion. Neither is objectively "better"; the decision depends on energy levels, fitness, travel companions, and what type of memory you want to create. If this is a romantic couple\'s trip, Calala offers romance and leisure. If this is a multi-generational trip or friend adventure, New Zealand offers shared activity and variety. If budget is primary constraint, NZ shoulder season is cheaper. Make the decision by August to allow sufficient booking time for either option. Start researching operators (Calala via their website, NZ logistics via newzealand.com and award flight networks) in June.',
      },
    ],
    options: [
      {
        name: 'Calala Island, Honduras',
        description: 'All-inclusive private island, 8 guests max, diving/fishing/spa, luxury escape',
      },
      {
        name: 'New Zealand South Island',
        description: 'Multi-week self-drive adventure, Queenstown/Milford/Mt. Cook, hiking/outdoor/photography',
      },
    ],
    awardTips: [
      {
        program: 'Virgin Atlantic Flying Club',
        route: 'SEA-AKL (NZ option)',
        cost: '~120K VS miles RT',
        note: 'Book early; New Zealand in November is peak booking period',
      },
      {
        program: 'Aeroplan',
        route: 'SEA-CHC or AUD',
        cost: '~80-100K AP miles RT',
        note: 'Aeroplan has strong partnerships with Air Canada (SFO-CHC connections)',
      },
    ],
  },

  {
    slug: 'singapore-qatar-dec-2025',
    title: 'Singapore & Qatar',
    subtitle: 'Holiday Cities',
    region: 'Asia & Middle East',
    country: 'Singapore & Qatar',
    dates: 'December 24, 2025 - January 4, 2026',
    month: 'December',
    year: 2025,
    status: 'partially_booked',
    statusLabel: 'Partially Booked',
    travelers: 'TBD (likely 2-4)',
    heroImage: 'singapore-gardens-night',
    flights: [
      {
        segment: 1,
        date: '2025-12-24',
        route: 'SEA → SIN',
        status: 'booked',
      },
      {
        segment: 2,
        date: '2026-01-04',
        route: 'DOH → SEA',
        status: 'booked',
      },
    ],
    hotels: [
      {
        property: 'Andaz Singapore',
        location: 'Singapore',
        program: 'Hyatt',
        status: 'not_booked',
        notes: 'Modern, mid-range Hyatt, check availability',
      },
      {
        property: 'Capella Singapore',
        location: 'Sentosa Island, Singapore',
        program: 'Luxury alternative',
        status: 'not_booked',
        notes: 'Ultra-luxury, private island, multi-day minimum',
      },
      {
        property: 'Park Hyatt Doha',
        location: 'Doha, Qatar',
        program: 'Hyatt',
        status: 'not_booked',
        notes: 'Beachfront, points or paid, confirm cat',
      },
    ],
    actionItems: [
      { text: 'Confirm Singapore hotel (Andaz vs. Capella vs. alternative)', urgent: true },
      { text: 'Confirm length of stay in Singapore vs. Qatar', urgent: true },
      { text: 'Book Park Hyatt Doha or alternative', urgent: true },
      { text: 'Arrange ground transfer SEA→SIN and internal SIN↔DOH flights', urgent: false },
      { text: 'Research Qatar visa requirements (if applicable)', urgent: false },
    ],
    intel: [
      {
        title: 'Singapore: Neighborhoods & Local Eats',
        content: 'Singapore\'s food culture is world-class, and the city\'s neighborhoods each have distinct character. Tiong Bahru is the Instagram-favorite neighborhood for specialty coffee and local breakfast—cafés like Nylon Coffee Roasters, Chye Seng Huat Hardware (exceptional pour-over coffee in a heritage hardware store), and multiple bakeries serve the morning crowd. Breakfast might be kaya toast (coconut jam and butter on crispy bread) with soft-boiled eggs and coffee. Joo Chiat is the Peranakan (Straits Chinese) neighborhood, with low-rise shophouses painted in pastels, antique shops, and heritage restaurants serving nyonya cuisine (Southeast Asian fusion). Dempsey Hill is a colonial-era barracks converted into a dining and shopping enclave—upscale restaurants, wine bars, and design shops in lush garden settings. The true food experience is hawker centres: Maxwell Food Centre (dim sum, wonton noodles, chicken rice), Old Airport Road (Indian Muslim food, crab omelette), Chinatown Complex (diverse stalls). These are not tourist attractions; they\'re where locals eat breakfast, lunch, and dinner. Arrive early (8-9am for breakfast, 11:30am for lunch) to avoid crowds and ensure food is fresh.',
      },
      {
        title: 'Getting Around Singapore & Late-Night Culture',
        content: 'Use Grab for all transportation—it\'s cheaper, safer, and faster than taxis. Singapore\'s public transit is excellent but Grab is standard for visitors. Gardens by the Bay is a must-see at night: the Supertree Grove lights up with a sound-and-light show (free, 7:45pm and 8:45pm), and the cloud forest/flower dome conservatories are magical early morning (8am, before crowds). Marina Bay Sands is iconic but touristy; the rooftop bar requires reservation and is eye-wateringly expensive. Christmas in Singapore (late December) combines tropical heat with festive decorations and holiday events; shopping districts are full but not overwhelming. New Year\'s Eve celebrations happen at Marina Bay and Sentosa; book accommodations with views if you want to watch fireworks. Singapore is clean, orderly, and efficient—the opposite of chaotic—making it an ideal base for regional travel. The city is expensive (meals $8-15 at hawkers, hotels $150-300/night mid-range), but every dollar is well-spent.',
      },
      {
        title: 'Qatar: Doha Culture, Architecture & Desert Experiences',
        content: 'Qatar in January (post-holiday, cooler weather at 70-75°F) is ideal. Doha is a rapid-growth city blending ultra-modern architecture with Arabian heritage. Souq Waqif is the traditional market—a labyrinth of spice stalls, falconry shops (where Qatari locals still buy trained falcons for hunting), textiles, and restaurants. The falcon market (early morning, 5-7am) is uniquely Qatari—locals in traditional dress trading birds worth thousands of dollars. The Museum of Islamic Art (designed by I.M. Pei) is architectural and curatorial perfection—a world-class collection in a stunning building overlooking Doha Bay. Katara Cultural Village is newer but showcases Arab performing arts, galleries, and restaurants in a traditional village setting. A desert safari day trip (4-5 hours) departs Doha early morning: dune bashing, camel riding, sunset in the desert, Bedouin camp dinner. It\'s touristy but authentic and spectacular. Doha\'s restaurant scene is sophisticated; high-end options (Nobu, Mizumi, Sharq Village restaurants) are available for special meals.',
      },
      {
        title: 'Holiday Travel Logistics & Pacing',
        content: 'December 24-January 4 is 12 days total: likely 6-7 days Singapore, 4-5 days Qatar. This pacing allows deep exploration of Singapore (neighborhoods, markets, day trips to Kuala Lumpur or Melaka if desired) with a taste of Qatar (Doha city, Souq, desert experience, Museum of Islamic Art). Both cities are compact; no rental car needed. Language is not a barrier (English widely spoken in both). Christmas and New Year\'s create festive atmospheres in both cities but also higher pricing and crowds; book accommodations and fine dining reservations in advance. January weather: Singapore is warm (80-85°F, humid), Qatar is cool (70-75°F, dry and pleasant). The contrast between tropical Singapore and desert Qatar makes for a compelling trip. Pack light for tropical heat, but bring a light jacket for Doha evenings and air-conditioned spaces.',
      },
    ],
    awardTips: [
      {
        program: 'Hyatt Points',
        route: 'Andaz or Park Hyatt',
        cost: '~25-40K per night (verify cat)',
        note: 'Book early for December holiday travel',
      },
      {
        program: 'Virgin Atlantic Flying Club',
        route: 'SEA-SIN-DOH-SEA (if multi-leg)',
        cost: '~100K VS miles RT',
        note: 'Doha-SEA return may be cheaper on Qatar Airways (partner)',
      },
    ],
  },
];
