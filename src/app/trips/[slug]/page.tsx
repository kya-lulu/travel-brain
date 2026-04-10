import React from 'react';
import { trips } from '@/data/trips';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  AlertTriangle,
  CheckCircle,
  Plane,
  Building2,
  BookOpen,
  Sparkles,
  Calendar,
  MapPin,
  Clock,
  Compass,
  Camera,
  Sun,
} from 'lucide-react';

type TripStatus =
  | 'booked'
  | 'partially_booked'
  | 'needs_action'
  | 'planning'
  | 'decision_needed'
  | 'canceled'
  | 'pending'
  | 'not_booked';

function StatusBadge({ status, label }: { status: TripStatus; label: string }) {
  const colors: Record<TripStatus, string> = {
    booked: 'bg-success-soft text-success',
    partially_booked: 'bg-warning-soft text-warning',
    needs_action: 'bg-error-soft text-error',
    planning: 'bg-accent-soft text-accent',
    decision_needed: 'bg-[#f0ece6] text-text-muted',
    canceled: 'bg-[#f0ece6] text-text-muted line-through',
    pending: 'bg-accent-soft text-accent',
    not_booked: 'bg-error-soft text-error',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium ${
        colors[status] || 'bg-[#f0ece6] text-text-muted'
      }`}
    >
      {label}
    </span>
  );
}

const dayTypeStyles: Record<string, { border: string; icon: typeof Plane }> = {
  travel: { border: 'border-l-accent', icon: Plane },
  activity: { border: 'border-l-success', icon: Compass },
  rest: { border: 'border-l-blue-400', icon: Sun },
  flexible: { border: 'border-l-warning', icon: Calendar },
};

// ─── Destination images: hero, gallery, and ambient side/break images ───
const tripImages: Record<string, {
  hero: string;
  gallery: string[];
  ambient: string[];   // 4+ ambient images for side panels & section breaks
}> = {
  'safari-apr-2026': {
    hero: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1400&h=500&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=500&h=350&fit=crop&q=80',
      'https://images.unsplash.com/photo-1549366021-9f761d450615?w=500&h=350&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=500&h=350&fit=crop&q=80',
    ],
    ambient: [
      'https://images.unsplash.com/photo-1534177616064-ef536dfeacfb?w=600&h=800&fit=crop&q=80',  // giraffe silhouette
      'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&h=400&fit=crop&q=80',     // african sunset
      'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=600&h=800&fit=crop&q=80',  // elephant close
      'https://images.unsplash.com/photo-1504598318550-17eba1008a68?w=800&h=400&fit=crop&q=80',  // savanna landscape
    ],
  },
  'mobulas-may-2026': {
    hero: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1400&h=500&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=500&h=350&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=350&fit=crop&q=80',
      'https://images.unsplash.com/photo-1518467166681-9e3e0747e3ca?w=500&h=350&fit=crop&q=80',
    ],
    ambient: [
      'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&h=800&fit=crop&q=80',  // underwater
      'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&h=400&fit=crop&q=80',  // ocean surface
      'https://images.unsplash.com/photo-1437719417032-8799f32df5ba?w=600&h=800&fit=crop&q=80',  // beach sunset
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=400&fit=crop&q=80',  // beach wide
    ],
  },
  'stans-aug-2026': {
    hero: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&h=500&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&h=350&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600298882525-1ac42413b969?w=500&h=350&fit=crop&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&h=350&fit=crop&q=80',
    ],
    ambient: [
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=600&h=800&fit=crop&q=80',  // mountain peak
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop&q=80',  // mountain panorama
      'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&h=800&fit=crop&q=80',  // horseback
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=400&fit=crop&q=80',  // valley
    ],
  },
  'iop-sep-2026': {
    hero: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1400&h=500&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=500&h=350&fit=crop&q=80',
      'https://images.unsplash.com/photo-1559628233-100c798642d4?w=500&h=350&fit=crop&q=80',
      'https://images.unsplash.com/photo-1470004914212-05527e49370b?w=500&h=350&fit=crop&q=80',
    ],
    ambient: [
      'https://images.unsplash.com/photo-1544551763-77932-1e8e3e04b84d?w=600&h=800&fit=crop&q=80',  // coral reef
      'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&h=400&fit=crop&q=80',     // tropical island aerial
      'https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=600&h=800&fit=crop&q=80',     // indonesia temple
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=400&fit=crop&q=80',     // tropical water
    ],
  },
  'korea-oct-2026': {
    hero: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=1400&h=500&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1553621042-f6e147245754?w=500&h=350&fit=crop&q=80',
      'https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=500&h=350&fit=crop&q=80',
      'https://images.unsplash.com/photo-1541692641319-981cc79ee10a?w=500&h=350&fit=crop&q=80',
    ],
    ambient: [
      'https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=600&h=800&fit=crop&q=80',  // korean temple
      'https://images.unsplash.com/photo-1538669715315-155098f0fb1c?w=800&h=400&fit=crop&q=80',  // seoul skyline
      'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600&h=800&fit=crop&q=80',  // korean food
      'https://images.unsplash.com/photo-1546874177-9e664107314e?w=800&h=400&fit=crop&q=80',  // autumn palace
    ],
  },
  'australia-nov-2026': {
    hero: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1400&h=500&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=500&h=350&fit=crop&q=80',
      'https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=500&h=350&fit=crop&q=80',
      'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?w=500&h=350&fit=crop&q=80',
    ],
    ambient: [
      'https://images.unsplash.com/photo-1494233892892-84542a694e72?w=600&h=800&fit=crop&q=80',  // great barrier reef
      'https://images.unsplash.com/photo-1524820197278-540916411e20?w=800&h=400&fit=crop&q=80',  // sydney harbor
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=800&fit=crop&q=80',  // outback
      'https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?w=800&h=400&fit=crop&q=80',  // beach sunrise
    ],
  },
  'singapore-maldives-dec-2026': {
    hero: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1400&h=500&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=500&h=350&fit=crop&q=80',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=500&h=350&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=500&h=350&fit=crop&q=80',
    ],
    ambient: [
      'https://images.unsplash.com/photo-1540202404-a2f29016b523?w=600&h=800&fit=crop&q=80',  // maldives overwater
      'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&h=400&fit=crop&q=80',  // singapore marina bay
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&h=800&fit=crop&q=80',  // maldives water villa
      'https://images.unsplash.com/photo-1496939376851-89342e90adcd?w=800&h=400&fit=crop&q=80',  // tropical sunset
    ],
  },
};

const fallbackHero = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1400&h=500&fit=crop&q=80';

// Confirmation codes are now shown in full — site is password-protected

// Match an ISO date (e.g. "2026-04-21") to an itinerary day label (e.g. "April 21", "Aug 7–11")
function isoMatchesDay(isoDate: string, dayDate: string): boolean {
  if (!isoDate || isoDate === 'TBD') return false;
  const d = new Date(isoDate + 'T12:00:00');
  const day = d.getUTCDate();
  const mi = d.getUTCMonth();
  const full = ['January','February','March','April','May','June','July','August','September','October','November','December'][mi];
  const short = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'][mi];
  for (const mn of [full, short]) {
    const direct = new RegExp(`${mn}\\s+${day}(?!\\d)`);
    if (direct.test(dayDate)) return true;
    const range = dayDate.match(new RegExp(`${mn}\\s+(\\d+)[–\\-](\\d+)`));
    if (range && day >= parseInt(range[1]) && day <= parseInt(range[2])) return true;
  }
  return false;
}

export const generateStaticParams = async () => {
  return trips.map((trip) => ({ slug: trip.slug }));
};

export default async function TripPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trip = trips.find((t) => t.slug === slug);

  if (!trip) {
    notFound();
  }

  const images = tripImages[trip.slug] || { hero: fallbackHero, gallery: [], ambient: [] };
  const amb = images.ambient || [];

  return (
    <div className="min-h-screen bg-bg">

      {/* ━━━ Full-width Hero Image ━━━ */}
      <div className="relative w-full overflow-hidden" style={{ height: '420px' }}>
        <img
          src={images.hero}
          alt={trip.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />

        {/* Back button overlaid on image */}
        <div
          className="absolute top-6 left-0 right-0 mx-auto px-8 md:px-16 lg:px-24"
          style={{ maxWidth: '960px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm font-body backdrop-blur-sm bg-black/20 px-3 py-1.5 rounded-full"
          >
            <ArrowLeft size={14} />
            Back to trips
          </Link>
        </div>
      </div>

      {/* ━━━ Main Content ━━━ */}
      <div
        className="px-8 md:px-16 lg:px-24 pb-16"
        style={{ maxWidth: '960px', marginLeft: 'auto', marginRight: 'auto', marginTop: '-100px', position: 'relative', zIndex: 10 }}
      >

        {/* Hero header — centered */}
        <header className="text-center mb-12 md:mb-14 pb-10 border-b border-border/60 fade-in-up">
          <p className="font-mono text-xs tracking-[0.15em] uppercase text-accent mb-4">
            {trip.region}
          </p>
          <h1 className="font-display text-[clamp(2.4rem,5vw,3.8rem)] font-700 text-text leading-[1.1] mb-3">
            {trip.title}
          </h1>
          <p className="text-base md:text-lg text-text-secondary font-body leading-relaxed mb-6" style={{ maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
            {trip.subtitle}
          </p>

          {/* Context chips */}
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border/80 font-mono text-xs text-text-muted whitespace-nowrap">
              <Calendar size={14} className="text-accent" />
              <strong className="text-text font-500">{trip.dates}</strong>
            </span>
            <StatusBadge status={trip.status as TripStatus} label={trip.statusLabel} />
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border/80 font-mono text-xs text-text-muted whitespace-nowrap">
              {trip.travelers}
            </span>
          </div>
        </header>

        {/* ━━━ Day-by-Day Itinerary ━━━ */}
        {trip.itinerary.length > 0 && (
          <section className="mb-14 md:mb-16 stagger-1">
            <h2 className="font-display text-[1.8rem] font-600 text-text mb-2">
              Day-by-Day Schedule
            </h2>
            <p className="text-text-muted text-sm font-body mb-8">
              Your trip at a glance — what happens each day.
            </p>

            <div className="space-y-4">
              {trip.itinerary.map((day, idx) => {
                const style = dayTypeStyles[day.type] || dayTypeStyles.flexible;
                const DayIcon = style.icon;
                const dayFlights = trip.flights.filter(f => isoMatchesDay(f.date, day.date));
                const dayHotelCheckins = trip.hotels.filter(h => h.checkIn && isoMatchesDay(h.checkIn, day.date));
                const dayHotelCheckouts = trip.hotels.filter(h => h.checkOut && isoMatchesDay(h.checkOut, day.date));

                return (
                  <div
                    key={idx}
                    className={`border-l-4 ${style.border} bg-surface rounded-xl p-5 md:p-6 shadow-card`}
                    style={{
                      animation: `fadeInUp 0.4s ease-out ${0.05 * (idx + 1)}s backwards`,
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-bg flex items-center justify-center mt-0.5">
                        <DayIcon size={18} className="text-text-muted" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                          <span className="font-mono text-xs text-accent font-500 tracking-wide uppercase">
                            {day.date}
                          </span>
                          <span className="font-display text-lg md:text-xl font-600 text-text leading-snug">
                            {day.label}
                          </span>
                        </div>
                        <p className="text-sm text-text-secondary font-body leading-relaxed">
                          {day.description}
                        </p>

                        {/* Inline flights for this day */}
                        {dayFlights.map((flight, fIdx) => (
                          <div key={`f-${fIdx}`} className="mt-3 flex items-start gap-3 p-3 rounded-lg bg-bg border border-border/40">
                            <Plane size={14} className="text-accent flex-shrink-0 mt-1" />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-baseline gap-2 flex-wrap">
                                <span className="font-mono text-sm font-600 text-text">{flight.route}</span>
                                {flight.time && <span className="font-mono text-xs text-text-muted">{flight.time}</span>}
                              </div>
                              <div className="flex items-center gap-2 mt-1 flex-wrap">
                                {flight.airline && <span className="text-xs text-text-muted">{flight.airline}</span>}
                                {flight.aircraft && <span className="text-xs text-text-muted">· {flight.aircraft}</span>}
                                {flight.cabin && <span className="text-xs text-accent font-500">{flight.cabin}</span>}
                                {flight.confirmation && (
                                  <span className="font-mono text-xs text-text-muted">Conf: {flight.confirmation}</span>
                                )}
                                <StatusBadge status={flight.status as TripStatus} label={flight.status} />
                              </div>
                              {flight.notes && <p className="text-xs text-text-muted mt-1">{flight.notes}</p>}
                            </div>
                          </div>
                        ))}

                        {/* Inline hotel check-ins */}
                        {dayHotelCheckins.map((hotel, hIdx) => (
                          <div key={`hi-${hIdx}`} className="mt-3 flex items-start gap-3 p-3 rounded-lg bg-bg border border-border/40">
                            <Building2 size={14} className="text-accent flex-shrink-0 mt-1" />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-baseline gap-2 flex-wrap">
                                <span className="font-display text-sm font-600 text-text">{hotel.property}</span>
                                <span className="text-xs text-text-muted">{hotel.location}</span>
                              </div>
                              <div className="flex items-center gap-2 mt-1 flex-wrap">
                                <span className="text-xs text-accent font-500">Check-in</span>
                                {hotel.program && <span className="text-xs text-text-muted">· {hotel.program}</span>}
                                {hotel.cost && <span className="font-mono text-xs text-text-muted">{hotel.cost}</span>}
                                <StatusBadge status={hotel.status as TripStatus} label={hotel.status} />
                              </div>
                              {hotel.notes && <p className="text-xs text-text-muted mt-1">{hotel.notes}</p>}
                            </div>
                          </div>
                        ))}

                        {/* Inline hotel check-outs */}
                        {dayHotelCheckouts.map((hotel, hIdx) => (
                          <div key={`ho-${hIdx}`} className="mt-3 flex items-start gap-3 p-3 rounded-lg bg-bg border border-border/40">
                            <Building2 size={14} className="text-text-muted flex-shrink-0 mt-1" />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-baseline gap-2 flex-wrap">
                                <span className="font-display text-sm font-500 text-text-muted">{hotel.property}</span>
                              </div>
                              <span className="text-xs text-text-muted">Check-out</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ━━━ Cinematic Image Break ━━━ */}
        {amb[1] && (
          <div className="mb-14 md:mb-16 -mx-8 md:-mx-16 lg:-mx-24" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', width: '100vw' }}>
            <div className="relative overflow-hidden" style={{ height: '280px' }}>
              <img
                src={amb[1]}
                alt={`${trip.title} atmosphere`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-bg/40 via-transparent to-bg/40" />
            </div>
          </div>
        )}

        {/* ━━━ Photo Gallery Strip ━━━ */}
        {images.gallery.length > 0 && (
          <section className="mb-14 md:mb-16">
            <div className="flex items-center gap-2 mb-6">
              <Camera size={18} className="text-accent" />
              <span className="font-mono text-xs tracking-[0.12em] uppercase text-accent font-500">What awaits you</span>
            </div>
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {images.gallery.map((src, idx) => (
                <div key={idx} className="aspect-[4/3] rounded-xl overflow-hidden">
                  <img
                    src={src}
                    alt={`${trip.title} destination ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ━━━ Action Items ━━━ */}
        {trip.actionItems.length > 0 && (
          <section className="mb-14 md:mb-16 stagger-2">
            <div className="flex items-center gap-3 mb-2">
              <AlertTriangle size={20} className="text-accent" />
              <h2 className="font-display text-[1.8rem] font-600 text-text">
                Action Items
              </h2>
            </div>
            <p className="text-text-muted text-sm font-body mb-8">
              Things that need your attention before this trip.
            </p>

            <div className="space-y-3">
              {trip.actionItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-4 rounded-xl bg-surface border border-border/60 shadow-card"
                  style={{
                    animation: `fadeInUp 0.4s ease-out ${0.05 * (idx + 1)}s backwards`,
                  }}
                >
                  {item.urgent ? (
                    <AlertTriangle size={16} className="text-error flex-shrink-0 mt-0.5" />
                  ) : (
                    <CheckCircle size={16} className="text-success flex-shrink-0 mt-0.5" />
                  )}
                  <span className={`font-body text-sm ${item.urgent ? 'text-error font-500' : 'text-text-secondary'}`}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Flights and Hotels are now integrated into the Day-by-Day Schedule above */}

        {/* ━━━ Second Cinematic Break (before Intel) ━━━ */}
        {amb[3] && (
          <div className="mb-14 md:mb-16 -mx-8 md:-mx-16 lg:-mx-24" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', width: '100vw' }}>
            <div className="relative overflow-hidden" style={{ height: '240px' }}>
              <img
                src={amb[3]}
                alt={`${trip.title} landscape`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-bg/40 via-transparent to-bg/40" />
            </div>
          </div>
        )}

        {/* ━━━ Destination Intelligence — Magazine Layout ━━━ */}
        {trip.intel.length > 0 && (
          <section className="mb-14 md:mb-16 stagger-5">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen size={20} className="text-accent" />
              <h2 className="font-display text-[1.8rem] font-600 text-text">Destination Intelligence</h2>
            </div>
            <p className="text-text-muted text-sm font-body mb-10">Curated local knowledge and recommendations.</p>

            <div className="space-y-12">
              {trip.intel.map((section, idx) => {
                // Alternate: even index = image on right, odd = image on left
                const hasAmbientImage = amb[idx % amb.length];
                const imageOnRight = idx % 2 === 0;

                return (
                  <div
                    key={idx}
                    style={{ animation: `fadeInUp 0.4s ease-out ${0.05 * (idx + 1)}s backwards` }}
                  >
                    {hasAmbientImage ? (
                      <div className={`flex flex-col ${imageOnRight ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-8 items-start`}>
                        {/* Text side */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-display text-xl md:text-2xl font-600 text-text mb-4">{section.title}</h3>
                          <div className="prose">
                            {section.content.split('\n').map((para, pIdx) => (
                              <p key={pIdx} className="text-text-secondary text-sm leading-[1.75] mb-4 last:mb-0">{para}</p>
                            ))}
                          </div>
                        </div>
                        {/* Ambient image side */}
                        <div className="w-full md:w-2/5 flex-shrink-0">
                          <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-card">
                            <img
                              src={amb[idx % amb.length]}
                              alt={`${section.title} atmosphere`}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <h3 className="font-display text-xl md:text-2xl font-600 text-text mb-4">{section.title}</h3>
                        <div className="prose">
                          {section.content.split('\n').map((para, pIdx) => (
                            <p key={pIdx} className="text-text-secondary text-sm leading-[1.75] mb-4 last:mb-0">{para}</p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ━━━ Award Tips ━━━ */}
        {trip.awardTips.length > 0 && (
          <section className="mb-14 md:mb-16 stagger-6">
            <div className="flex items-center gap-3 mb-2">
              <Sparkles size={20} className="text-accent" />
              <h2 className="font-display text-[1.8rem] font-600 text-text">Award Tips</h2>
            </div>
            <p className="text-text-muted text-sm font-body mb-8">Points and miles strategies.</p>

            <div className="grid gap-4 md:grid-cols-2">
              {trip.awardTips.map((tip, idx) => (
                <div
                  key={idx}
                  className="p-5 md:p-6 rounded-xl bg-surface border border-border/60 shadow-card"
                  style={{ animation: `fadeInUp 0.4s ease-out ${0.05 * (idx + 1)}s backwards` }}
                >
                  <p className="font-mono text-[0.7rem] tracking-[0.12em] uppercase text-accent mb-1">Program</p>
                  <p className="text-text font-display text-lg font-600 mb-4">{tip.program}</p>
                  <div className="space-y-3 pt-4 border-t border-border/40">
                    {tip.route && <div><p className="font-mono text-[0.7rem] tracking-[0.12em] uppercase text-accent mb-1">Route</p><p className="text-text-secondary text-sm font-body">{tip.route}</p></div>}
                    {tip.cost && <div><p className="font-mono text-[0.7rem] tracking-[0.12em] uppercase text-accent mb-1">Cost</p><p className="text-accent text-sm font-mono">{tip.cost}</p></div>}
                    <div><p className="font-mono text-[0.7rem] tracking-[0.12em] uppercase text-accent mb-1">Notes</p><p className="text-text-secondary text-sm font-body">{tip.note}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ━━━ Options (decision_needed) ━━━ */}
        {trip.options && trip.options.length > 0 && (
          <section className="mb-14 md:mb-16 stagger-7">
            <h2 className="font-display text-[1.8rem] font-600 text-text mb-2">Options to Consider</h2>
            <p className="text-text-muted text-sm font-body mb-8">Decide between these options.</p>
            <div className="grid gap-4 md:grid-cols-2">
              {trip.options.map((option, idx) => (
                <div
                  key={idx}
                  className="p-5 md:p-6 rounded-xl bg-surface border border-accent/20 shadow-card hover:border-accent/40 transition-all duration-200"
                  style={{ animation: `fadeInUp 0.4s ease-out ${0.05 * (idx + 1)}s backwards` }}
                >
                  <h3 className="font-display text-xl font-600 text-accent mb-3">{option.name}</h3>
                  <p className="text-text-secondary text-sm font-body leading-relaxed">{option.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
