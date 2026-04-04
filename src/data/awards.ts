export interface AwardTool {
  name: string;
  url: string;
  bestFor: string;
  description: string;
}

export interface SweetSpot {
  program: string;
  route: string;
  cost: string;
  cabin: string;
  note: string;
}

export const awardTools: AwardTool[] = [
  {
    name: 'Seats.aero',
    url: 'https://seats.aero',
    bestFor: 'Fastest saver space discovery',
    description: 'The gold standard for finding award availability across virtually all airlines in real-time. Seats.aero aggregates saver pricing from 45+ airline programs in a single searchable interface, making it invaluable for identifying sweet spots and obscure routings. Ideal for award hunters who need speed and breadth; queries return results in seconds and reveal multi-airline strategies you wouldn\'t see searching each program individually.',
  },
  {
    name: 'Roame',
    url: 'https://roame.travel',
    bestFor: 'Flexible date search + intelligent alerts',
    description: 'Roame specializes in flexible date searches and automated alert systems for award availability. Set parameters (origin, destination, date window, cabin preference) and Roame continuously monitors and notifies you when inventory appears. The intelligent filtering cuts through noise by suppressing low-value routings and highlighting genuine sweet spots based on historical data and your preferences.',
  },
  {
    name: 'Point.me',
    url: 'https://point.me',
    bestFor: 'Step-by-step booking paths and multi-program routing',
    description: 'Point.me maps redemption paths across 200+ partners and airline programs, showing exactly which credit card, miles program, or transfer partner gets you booked. The step-by-step guidance is invaluable for complex bookings (like Aeroplan transfers to SkyTeam carriers or using Virgin Atlantic to book British Airways flights). It\'s particularly strong for revealing non-obvious routing strategies.',
  },
  {
    name: 'AwardTool',
    url: 'https://awardtool.com',
    bestFor: 'Multi-program search and historical data',
    description: 'AwardTool searches across 25+ major airline award programs simultaneously, showing you pricing across each. It excels at revealing price variations—same route may cost 55K miles on one program and 85K on another. Historical pricing data helps you understand if current availability is a sweet spot or inflated, essential for deciding whether to book now or wait.',
  },
  {
    name: 'ExpertFlyer',
    url: 'https://expertflyer.com',
    bestFor: 'Seat alerts + fare bucket transparency',
    description: 'ExpertFlyer provides automated seat alerts (be notified when first class opens on your target flight) and reveals airline fare buckets, helping you understand inventory and pricing dynamics. It\'s a power-user tool requiring subscription, but the intelligence on exactly which seats are available in which cabins is unmatched. Essential for premium cabin hunters who need precision.',
  },
  {
    name: 'MaxMyPoint',
    url: 'https://maxmypoint.com',
    bestFor: 'Hotel award optimization and value calculation',
    description: 'MaxMyPoint specializes in hotel award programs, comparing redemption rates across Hyatt, Marriott, IHG, Hilton, and others. It reveals which properties offer exceptional value (e.g., category 3 Hyatts in expensive cities like Tokyo) and which are overpriced. The value calculator shows you whether paying cash or using points makes more sense—critical for maximizing redemption value.',
  },
  {
    name: 'Rooms.aero',
    url: 'https://rooms.aero',
    bestFor: 'Hotel award availability across all programs',
    description: 'Rooms.aero aggregates hotel award inventory from major programs, allowing side-by-side comparison of rates. Search a property and immediately see availability and pricing on Hyatt, Marriott, IHG, and smaller chains. Eliminates the need to check each program separately and reveals opportunities (like booking the same hotel on two different programs at vastly different rates).',
  },
  {
    name: 'Gondola',
    url: 'https://gondola.com',
    bestFor: 'Hyatt sweet spots and ultra-luxury redemptions',
    description: 'Gondola is obsessively focused on Hyatt redemptions, surfacing the best value categories and highlighting properties where award pricing outperforms cash rates. It\'s exceptional for finding luxury redemptions at reasonable point costs and discovering off-radar Hyatt properties. If Hyatt is your primary hotel program, Gondola is indispensable.',
  },
];

export const sweetSpots: SweetSpot[] = [
  {
    program: 'Virgin Atlantic Flying Club',
    route: 'SEA-NRT (via partner)',
    cost: '~110K VS miles RT',
    cabin: 'First',
    note: 'No fuel surcharges; available on BA metal. Aeroplan transfers to VS also unlock first-class availability.',
  },
  {
    program: 'Virgin Atlantic Flying Club',
    route: 'SEA-LHR',
    cost: '~70K VS miles RT',
    cabin: 'Business',
    note: 'Excellent value for US-UK business; fuel surcharges modest compared to other programs.',
  },
  {
    program: 'Aeroplan',
    route: 'SEA-ICN via Incheon',
    cost: '~65K AP miles RT',
    cabin: 'Business',
    note: 'Strong availability year-round; Star Alliance sweet spot for Asia routes.',
  },
  {
    program: 'ANA Mileage Club via Virgin Atlantic transfer',
    route: 'SEA-NRT',
    cost: '~120K ANA miles RT',
    cabin: 'First',
    note: 'One of the few ways to access ANA first without astronomical costs. Transfer via VS from Aeroplan or credit card programs.',
  },
  {
    program: 'ANA Mileage Club',
    route: 'SEA-NRT',
    cost: '~75K ANA miles RT',
    cabin: 'Business',
    note: 'Direct pricing; excellent value and often available. Consider premium economy for 2-3K mile savings.',
  },
  {
    program: 'Hyatt',
    route: 'Category 3 properties in expensive cities',
    cost: '~12,500 points/night',
    cabin: 'Standard Room',
    note: 'Park Hyatt Tokyo, Park Hyatt Sydney, Hyatt Centric Seoul in mid-range categories. Huge value for luxury brands in premium locations.',
  },
  {
    program: 'Hyatt',
    route: 'Category 4-5 beach/resort properties',
    cost: '~20,000-25,000 points/night',
    cabin: 'Standard Room',
    note: 'Grand Hyatt Bali, Andaz Maui, resort properties with $400+ cash rates. Exceptional value for leisure travel.',
  },
  {
    program: 'Marriott Bonvoy',
    route: 'Category 4-5 urban properties',
    cost: '~30,000-35,000 points/night',
    cabin: 'Standard Room',
    note: 'Pan Pacific, St. Regis, W Hotels in category range. Requires high point balances but solid value on premium brands.',
  },
  {
    program: 'IHG Rewards',
    route: 'Category 3 iconic properties',
    cost: '~15,000-20,000 points/night',
    cabin: 'Standard Room',
    note: 'InterContinental Tokyo, Hong Kong; Voco Bali; boutique Four Seasons. Underrated program with strong category distribution.',
  },
  {
    program: 'Cathay Pacific Asia Miles',
    route: 'SEA-HKG-Southeast Asia routing',
    cost: '~55K AM miles RT',
    cabin: 'Business',
    note: 'Excellent for multi-city Southeast Asia loops. Transfer from Amex (2.5x on travel cards) or other programs.',
  },
  {
    program: 'Korean Air SkyPass',
    route: 'SEA-ICN',
    cost: '~63K SkyPass miles RT',
    cabin: 'Business',
    note: 'If you have miles; strong availability. Partner with Aeroplan via transfers for additional access.',
  },
  {
    program: 'Qatar Airways Privilege Club',
    route: 'SEA-DOH (connecting)',
    cost: '~85K QR miles RT',
    cabin: 'Business',
    note: 'Doha hub positioning; excellent for Middle East and Europe connections. Fuel surcharges moderate.',
  },
  {
    program: 'Singapore Airlines KrisFlyer',
    route: 'SEA-SIN (for onward bookings)',
    cost: '~50K KF miles RT',
    cabin: 'Business',
    note: 'Home carrier advantage; especially strong for first-class bookings to Europe via partnerships.',
  },
];
