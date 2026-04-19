import { familyTrips } from '@/data/family-trips';
import {
  Plane,
  Users,
  Calendar,
  CheckCircle2,
  Clock,
  Globe,
} from 'lucide-react';

export default function FamilyPage() {
  const totalFlights = familyTrips.reduce((sum, t) => sum + t.flights.length, 0);
  const uniqueTravelers = new Set(familyTrips.map((t) => t.traveler.name)).size;

  return (
    <div className="min-h-screen bg-bg">
      <div
        className="mx-auto px-8 md:px-16 lg:px-24 py-12 md:py-16"
        style={{ maxWidth: '960px', marginLeft: 'auto', marginRight: 'auto' }}
      >
        {/* Hero — centered */}
        <header className="text-center mb-12 md:mb-14 pb-10 border-b border-border/60 fade-in-up">
          <p className="font-mono text-xs tracking-[0.15em] uppercase text-accent mb-4">
            Family Travel
          </p>
          <h1 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] font-700 text-text leading-[1.1] mb-4">
            Booked for Family
          </h1>
          <p
            className="text-base md:text-lg text-text-secondary font-body leading-relaxed mx-auto"
            style={{ maxWidth: '480px' }}
          >
            Flights you&apos;ve booked for family members — all confirmations in one place.
          </p>
        </header>

        {/* Stats — centered pill row */}
        <div className="flex flex-wrap gap-3 justify-center mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border/80 font-mono text-xs text-text-muted">
            <Users size={14} className="text-accent" />
            <strong className="text-text font-500">{uniqueTravelers}</strong> traveler{uniqueTravelers !== 1 ? 's' : ''}
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border/80 font-mono text-xs text-text-muted">
            <Plane size={14} className="text-accent" />
            <strong className="text-text font-500">{totalFlights}</strong> flights
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border/80 font-mono text-xs text-text-muted">
            <Globe size={14} className="text-accent" />
            <strong className="text-text font-500">{familyTrips.length}</strong> trips
          </span>
        </div>

        {/* Trip cards */}
        <div className="space-y-12 md:space-y-16">
          {familyTrips
            .sort((a, b) => {
              const aDate = new Date(`${a.month} 1, ${a.year}`);
              const bDate = new Date(`${b.month} 1, ${b.year}`);
              return aDate.getTime() - bDate.getTime();
            })
            .map((trip, tripIdx) => (
              <section
                key={trip.slug}
                className={`stagger-${Math.min(tripIdx + 1, 8)}`}
              >
                {/* Trip header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-accent-soft text-accent">
                      {trip.traveler.name}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-success-soft text-success">
                      <CheckCircle2 size={12} />
                      Booked
                    </span>
                  </div>
                  <h2 className="font-display text-2xl md:text-[1.8rem] font-600 text-text leading-snug">
                    {trip.title}
                  </h2>
                  <p className="text-sm text-text-secondary font-body leading-relaxed mt-1">
                    {trip.subtitle}
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-text-muted">
                    <Calendar size={13} className="text-accent" />
                    <span className="font-mono text-xs">{trip.dates}</span>
                  </div>
                </div>

                {/* Flights table */}
                <div className="space-y-3">
                  {trip.flights.map((flight, fIdx) => (
                    <div
                      key={`${trip.slug}-f-${fIdx}`}
                      className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-border/60 shadow-card"
                      style={{
                        animation: `fadeInUp 0.4s ease-out ${0.05 * (fIdx + 1)}s backwards`,
                      }}
                    >
                      <Plane
                        size={14}
                        className="text-accent flex-shrink-0 mt-1"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2 flex-wrap">
                          <span className="font-mono text-sm font-600 text-text">
                            {flight.route}
                          </span>
                          {flight.time && (
                            <span className="font-mono text-xs text-text-muted">
                              {flight.time}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-1 flex-wrap">
                          {flight.airline && (
                            <span className="text-xs text-text-muted">
                              {flight.airline}
                            </span>
                          )}
                          {flight.cabin && (
                            <span className="text-xs text-accent font-500">
                              {flight.cabin}
                            </span>
                          )}
                          {flight.confirmation && (
                            <span className="font-mono text-xs text-text-muted">
                              Conf: {flight.confirmation}
                            </span>
                          )}
                          {(flight as any).milesUsed && (
                            <span className="font-mono text-xs text-accent font-500">
                              {(flight as any).milesUsed}
                            </span>
                          )}
                        </div>
                        {flight.notes && (
                          <p className="text-xs text-text-muted mt-1">
                            {flight.notes}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
        </div>
      </div>
    </div>
  );
}
