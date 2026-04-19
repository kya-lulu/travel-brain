import { Flight } from './trips';

export interface FamilyMember {
  name: string;
  relation: string;
}

export interface FamilyTrip {
  slug: string;
  title: string;
  subtitle: string;
  traveler: FamilyMember;
  dates: string;
  month: string;
  year: number;
  status: 'booked' | 'pending';
  flights: (Flight & { milesUsed?: string; ticketedAs?: string })[];
  notes?: string;
}

export const familyTrips: FamilyTrip[] = [
  // ═══════════════════════════════════════════════════════
  // MOM — Taiwan, May/June 2026
  // ═══════════════════════════════════════════════════════
  {
    slug: 'mom-taiwan-2026',
    title: 'Taiwan',
    subtitle: 'Taipei — via Air France & Air Canada awards',
    traveler: { name: 'Mom', relation: 'Mother' },
    dates: 'May 31 – June 23, 2026',
    month: 'May',
    year: 2026,
    status: 'booked',
    flights: [
      {
        segment: 1,
        date: '2026-05-31',
        route: 'LAX → TPE',
        time: '4:25pm → 9:30pm +1',
        airline: 'China Airlines (CI7)',
        confirmation: 'XA7AO4',
        status: 'booked',
        ticketedAs: 'Air France',
        milesUsed: '69K miles',
        notes: 'Ticketed as Air France. 69K miles.',
      },
      {
        segment: 2,
        date: '2026-06-23',
        route: 'TPE → SEA',
        time: '11:40pm → 7:30pm',
        airline: 'EVA Air (BR026)',
        confirmation: 'BXLULV',
        status: 'booked',
        ticketedAs: 'Air Canada',
        milesUsed: '75K + $117.80',
        notes: 'Ticketed as Air Canada. 75K miles + $117.80.',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // MOM — Japan, July 2026
  // ═══════════════════════════════════════════════════════
  {
    slug: 'mom-japan-jul-2026',
    title: 'Japan Summer',
    subtitle: 'Tokyo — via ANA First Class on Virgin Atlantic miles',
    traveler: { name: 'Mom', relation: 'Mother' },
    dates: 'July 10–24, 2026',
    month: 'July',
    year: 2026,
    status: 'booked',
    flights: [
      {
        segment: 1,
        date: '2026-07-10',
        route: 'SFO → HND',
        time: '1:45am → 4:30am',
        airline: 'ANA (NH107)',
        confirmation: 'EDLH2G',
        status: 'booked',
        ticketedAs: 'Virgin Atlantic',
        milesUsed: '72K miles',
        notes: 'ANA conf: BFLSKC. Ticketed as Virgin Atlantic. 72K miles. Seat #134.',
      },
      {
        segment: 2,
        date: '2026-07-24',
        route: 'NRT → SFO',
        time: '5:00pm → 10:55am',
        airline: 'ANA (NH8)',
        confirmation: 'DVYGM2',
        status: 'booked',
        ticketedAs: 'Virgin Atlantic',
        notes: 'Ticketed as Virgin Atlantic.',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // JANELLE'S PARENTS — Safari, April 2026
  // ═══════════════════════════════════════════════════════
  {
    slug: 'parents-safari-apr-2026',
    title: 'South Africa Safari',
    subtitle: 'Greater Kruger — Condor Business via Alaska miles',
    traveler: { name: "Janelle's Parents", relation: "Janelle's Parents" },
    dates: 'April 12–29, 2026',
    month: 'April',
    year: 2026,
    status: 'booked',
    flights: [
      {
        segment: 1,
        date: '2026-04-12',
        route: 'YYZ → FRA',
        time: '6:15pm → 9:40am +1',
        airline: 'Condor (DE2403)',
        cabin: 'Business',
        confirmation: 'LMVEXT',
        status: 'booked',
        ticketedAs: 'Alaska',
        notes: 'Parents outbound. Ticketed as Alaska. 10h 50min layover in FRA.',
      },
      {
        segment: 2,
        date: '2026-04-13',
        route: 'FRA → JNB',
        time: '8:30pm → 7:30am +1',
        airline: 'Condor (DE2288)',
        cabin: 'Business',
        confirmation: 'LMVEXT',
        status: 'booked',
        ticketedAs: 'Alaska',
        notes: 'Parents arrive JNB April 14. Ticketed as Alaska.',
      },
      {
        segment: 3,
        date: '2026-04-28',
        route: 'JNB → FRA',
        time: '6:35pm → 6:00am +1',
        airline: 'Condor (DE 2289)',
        cabin: 'Business',
        confirmation: 'ARQAHJ',
        status: 'booked',
        ticketedAs: 'Alaska',
        notes: 'Parents return. 9h 15min layover in FRA.',
      },
      {
        segment: 4,
        date: '2026-04-29',
        route: 'FRA → YYZ',
        time: '3:15pm → 5:55pm',
        airline: 'Condor (DE 2402)',
        cabin: 'Business',
        confirmation: 'ARQAHJ',
        status: 'booked',
        ticketedAs: 'Alaska',
        notes: 'Parents arrive Toronto.',
      },
    ],
  },
];
