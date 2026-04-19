import Link from "next/link";
import { trips } from "@/data/trips";
import {
  Calendar,
  MapPin,
  Users,
  AlertCircle,
  CheckCircle2,
  Clock,
  Compass,
  Globe,
  Plane,
} from "lucide-react";

// Unsplash destination images
const destinationImages: Record<string, string> = {
  "tokyo-shibuya":
    "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=530&fit=crop&q=80",
  "kruger-safari-lion":
    "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=530&fit=crop&q=80",
  "mobula-rays-jumping":
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=530&fit=crop&q=80",
  "kyrgyzstan-mountains-horses":
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=530&fit=crop&q=80",
  "seoul-autumn":
    "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800&h=530&fit=crop&q=80",
  "singapore-gardens-night":
    "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=530&fit=crop&q=80",
  "croatia-dubrovnik":
    "https://images.unsplash.com/photo-1555990538-1e7a4d75aa14?w=800&h=530&fit=crop&q=80",
  "nicaragua-island":
    "https://images.unsplash.com/photo-1580237072617-771c3ecc4a24?w=800&h=530&fit=crop&q=80",
  "beaver-creek-ski":
    "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800&h=530&fit=crop&q=80",
  "japan-winter-niseko":
    "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=800&h=530&fit=crop&q=80",
  "paris-vendome":
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=530&fit=crop&q=80",
  "seychelles-beach":
    "https://images.unsplash.com/photo-1589179447559-26b2ea42f87c?w=800&h=530&fit=crop&q=80",
  "french-polynesia-overwater":
    "https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?w=800&h=530&fit=crop&q=80",
};

const fallbackImage =
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=530&fit=crop&q=80";

export default function Home() {
  const activeTrips = trips.length;
  const uniqueCountries = new Set(trips.map((t) => t.country || t.region))
    .size;
  const totalActionItems = trips.reduce(
    (sum, trip) => sum + trip.actionItems.length,
    0
  );
  const bookedTrips = trips.filter((t) => t.status === "booked").length;

  const sortedTrips = [...trips].sort((a, b) => {
    const aDate = new Date(`${a.month} 1, ${a.year}`);
    const bDate = new Date(`${b.month} 1, ${b.year}`);
    return aDate.getTime() - bDate.getTime();
  });

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "booked":
        return { text: "text-success", icon: CheckCircle2 };
      case "partially_booked":
        return { text: "text-warning", icon: Clock };
      case "needs_action":
        return { text: "text-error", icon: AlertCircle };
      case "planning":
        return { text: "text-accent", icon: Compass };
      case "decision_needed":
        return { text: "text-text-muted", icon: AlertCircle };
      case "canceled":
        return { text: "text-text-muted", icon: AlertCircle };
      default:
        return { text: "text-text-muted", icon: Clock };
    }
  };

  // Aggregate costs by year for the Yearly Totals section
  const years = Array.from(new Set(trips.map((t) => t.year))).sort();
  type YearTotal = {
    year: number;
    cash: number;
    pointsByProgram: Record<string, number>;
  };
  const yearTotals: YearTotal[] = years.map((year) => {
    const tripsInYear = trips.filter((t) => t.year === year);
    const pointsByProgram: Record<string, number> = {};
    let cash = 0;
    for (const t of tripsInYear) {
      for (const c of t.costs) {
        if (c.canceled) continue;
        if (c.cashUsd) cash += c.cashUsd;
        if (c.points && c.program) {
          pointsByProgram[c.program] = (pointsByProgram[c.program] ?? 0) + c.points;
        }
      }
    }
    return { year, cash, pointsByProgram };
  });
  const grandCash = yearTotals.reduce((sum, y) => sum + y.cash, 0);
  const grandPointsByProgram: Record<string, number> = {};
  for (const y of yearTotals) {
    for (const [program, points] of Object.entries(y.pointsByProgram)) {
      grandPointsByProgram[program] = (grandPointsByProgram[program] ?? 0) + points;
    }
  }

  return (
    <div className="min-h-screen bg-bg">
      {/* Centered container */}
      <div
        className="mx-auto px-8 md:px-16 lg:px-24 py-12 md:py-16"
        style={{ maxWidth: '960px', marginLeft: 'auto', marginRight: 'auto' }}
      >

        {/* Hero — centered */}
        <header className="text-center mb-12 md:mb-14 pb-10 border-b border-border/60 fade-in-up">
          <p className="font-mono text-xs tracking-[0.15em] uppercase text-accent mb-4">
            Personal Travel Intelligence
          </p>
          <h1 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] font-700 text-text leading-[1.1] mb-4">
            Your Year of Travel
          </h1>
          <p className="text-base md:text-lg text-text-secondary font-body leading-relaxed mx-auto" style={{ maxWidth: '480px' }}>
            Every trip, flight, and action item — all in one place.
          </p>
        </header>

        {/* Stats — centered pill row */}
        <div className="flex flex-wrap gap-3 justify-center mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border/80 font-mono text-xs text-text-muted">
            <Globe size={14} className="text-accent" />
            <strong className="text-text font-500">{activeTrips}</strong> trips
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border/80 font-mono text-xs text-text-muted">
            <MapPin size={14} className="text-accent" />
            <strong className="text-text font-500">{uniqueCountries}</strong> countries
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border/80 font-mono text-xs text-text-muted">
            <AlertCircle size={14} className="text-warning" />
            <strong className="text-text font-500">{totalActionItems}</strong> action items
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border/80 font-mono text-xs text-text-muted">
            <CheckCircle2 size={14} className="text-success" />
            <strong className="text-text font-500">{bookedTrips}</strong> booked
          </span>
        </div>

        {/* Trips Grid */}
        <div id="trips-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {sortedTrips.map((trip, index) => {
            const status = getStatusStyle(trip.status);
            const StatusIcon = status.icon;
            const imageUrl = trip.heroImage
              ? destinationImages[trip.heroImage] || fallbackImage
              : fallbackImage;

            return (
              <Link
                key={trip.slug}
                href={`/trips/${trip.slug}`}
                className={`stagger-${Math.min(index + 1, 8)} group block`}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src={imageUrl}
                    alt={trip.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-600 bg-white/95 backdrop-blur-sm shadow-sm ${status.text}`}
                    >
                      <StatusIcon size={12} />
                      {trip.statusLabel}
                    </span>
                  </div>
                </div>

                {/* Text block */}
                <div className="mt-4 space-y-2">
                  <h3 className="font-display text-xl md:text-[1.35rem] font-600 text-text group-hover:text-accent transition-colors leading-snug">
                    {trip.title}
                  </h3>
                  <p className="text-sm text-text-secondary font-body leading-relaxed line-clamp-2">
                    {trip.subtitle}
                  </p>
                  <div className="flex items-center gap-3 pt-1.5 text-text-muted">
                    <span className="inline-flex items-center gap-1 font-mono text-[0.7rem] whitespace-nowrap">
                      <Calendar size={11} className="shrink-0" />
                      {trip.month} {trip.year}
                    </span>
                    <span className="w-px h-3 bg-border" />
                    {trip.actionItems.length > 0 && (
                      <span className="inline-flex items-center gap-1 font-mono text-[0.7rem] text-warning font-500 whitespace-nowrap">
                        {trip.actionItems.length} to-do{trip.actionItems.length !== 1 ? "s" : ""}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* ━━━ Year by the Numbers ━━━ */}
        <section className="mt-24 md:mt-28 pt-14 border-t border-border/60">
          <div className="text-center mb-12 md:mb-14">
            <p className="font-mono text-xs tracking-[0.15em] uppercase text-accent mb-3">
              Cash &amp; Points, Ledgered
            </p>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] font-700 text-text leading-[1.15] mb-3">
              Year by the Numbers
            </h2>
            <p className="text-sm md:text-base text-text-secondary font-body mx-auto" style={{ maxWidth: '460px' }}>
              What each year of travel actually costs — raw totals, no valuations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {yearTotals.map((yt) => {
              const programEntries = Object.entries(yt.pointsByProgram).filter(
                ([, v]) => v > 0
              );
              return (
                <div
                  key={yt.year}
                  className="p-6 md:p-7 rounded-2xl bg-surface border border-border/60 shadow-card"
                >
                  <p className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-text-muted mb-3">
                    {yt.year}
                  </p>
                  <p className="font-display text-[2rem] md:text-[2.4rem] font-700 text-accent leading-none mb-4">
                    {yt.cash > 0 ? `$${yt.cash.toLocaleString()}` : '—'}
                  </p>
                  <p className="font-mono text-[0.65rem] tracking-[0.12em] uppercase text-text-muted mb-3">
                    Cash committed
                  </p>
                  {programEntries.length > 0 ? (
                    <div className="pt-4 border-t border-border/40 space-y-2">
                      <p className="font-mono text-[0.65rem] tracking-[0.12em] uppercase text-text-muted mb-2">
                        Points
                      </p>
                      {programEntries.map(([program, points]) => (
                        <div
                          key={program}
                          className="flex items-baseline justify-between gap-3"
                        >
                          <span className="font-body text-xs text-text-secondary truncate">
                            {program}
                          </span>
                          <span className="font-mono text-sm text-text font-500">
                            {points.toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="pt-4 border-t border-border/40">
                      <p className="font-body text-xs text-text-muted italic">
                        No points logged yet.
                      </p>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Grand Total */}
            <div className="p-6 md:p-7 rounded-2xl bg-accent/5 border-2 border-accent/30 shadow-card">
              <p className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-accent mb-3">
                Grand Total
              </p>
              <p className="font-display text-[2rem] md:text-[2.4rem] font-700 text-accent leading-none mb-4">
                {grandCash > 0 ? `$${grandCash.toLocaleString()}` : '—'}
              </p>
              <p className="font-mono text-[0.65rem] tracking-[0.12em] uppercase text-text-muted mb-3">
                All years, cash
              </p>
              {Object.entries(grandPointsByProgram).filter(([, v]) => v > 0).length > 0 ? (
                <div className="pt-4 border-t border-accent/20 space-y-2">
                  <p className="font-mono text-[0.65rem] tracking-[0.12em] uppercase text-text-muted mb-2">
                    Points across all programs
                  </p>
                  {Object.entries(grandPointsByProgram)
                    .filter(([, v]) => v > 0)
                    .map(([program, points]) => (
                      <div
                        key={program}
                        className="flex items-baseline justify-between gap-3"
                      >
                        <span className="font-body text-xs text-text-secondary truncate">
                          {program}
                        </span>
                        <span className="font-mono text-sm text-text font-600">
                          {points.toLocaleString()}
                        </span>
                      </div>
                    ))}
                </div>
              ) : (
                <div className="pt-4 border-t border-accent/20">
                  <p className="font-body text-xs text-text-muted italic">
                    No points logged yet.
                  </p>
                </div>
              )}
            </div>
          </div>

          <p className="text-center text-xs text-text-muted font-body italic mt-10">
            Tracked as raw numbers. No cents-per-point valuations applied.
          </p>
        </section>

      </div>
    </div>
  );
}
