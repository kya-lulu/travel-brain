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
    booked: 'bg-success/15 text-success',
    partially_booked: 'bg-accent/15 text-accent',
    needs_action: 'bg-error/15 text-error',
    planning: 'bg-accent/15 text-accent',
    decision_needed: 'bg-text-muted/15 text-text-muted',
    canceled: 'bg-text-muted/15 text-text-muted line-through',
    pending: 'bg-accent/15 text-accent',
    not_booked: 'bg-error/15 text-error',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium transition-colors duration-200 ${
        colors[status] || 'bg-text-muted/15 text-text-muted'
      }`}
    >
      {label}
    </span>
  );
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

  return (
    <div className="min-h-screen bg-bg">
      {/* Back Navigation */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-6 md:py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors duration-200"
        >
          <ArrowLeft size={18} />
          Back to trips
        </Link>
      </div>

      {/* Hero Header */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-8 md:py-12 fade-in">
        <div className="mb-6">
          <h1 className="font-display text-5xl md:text-6xl font-700 text-text mb-2">
            {trip.title}
          </h1>
          <p className="text-text-secondary text-lg md:text-xl font-body">
            {trip.subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <span className="text-text-muted text-sm font-mono">
              {trip.dates}
            </span>
          </div>
          <StatusBadge status={trip.status as TripStatus} label={trip.statusLabel} />
          <div className="text-text-secondary text-sm font-body">
            {trip.travelers}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 pb-12">
        {/* Action Items Section */}
        {trip.actionItems.length > 0 && (
          <section className="mb-16 stagger-1">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle size={24} className="text-accent" />
              <h2 className="font-display text-3xl font-700 text-text">
                Action Items
              </h2>
            </div>

            <div className="grid gap-4">
              {trip.actionItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-4 rounded-xl bg-surface border border-border/50 hover:border-border transition-all duration-200"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${0.05 * (idx + 1)}s backwards`,
                  }}
                >
                  {item.urgent ? (
                    <AlertTriangle
                      size={20}
                      className="text-error flex-shrink-0 mt-0.5"
                    />
                  ) : (
                    <CheckCircle
                      size={20}
                      className="text-success flex-shrink-0 mt-0.5"
                    />
                  )}
                  <span
                    className={`font-body text-sm ${
                      item.urgent ? 'text-error' : 'text-text-secondary'
                    }`}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Flights Section */}
        {trip.flights.length > 0 && (
          <section className="mb-16 stagger-2">
            <div className="flex items-center gap-3 mb-6">
              <Plane size={24} className="text-accent" />
              <h2 className="font-display text-3xl font-700 text-text">
                Flights
              </h2>
            </div>

            <div className="grid gap-4 md:gap-6">
              {trip.flights.map((flight, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-surface border border-border/50 hover:border-border transition-all duration-200"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${0.05 * (idx + 1)}s backwards`,
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                    <div>
                      <p className="text-text-muted text-xs font-mono mb-1">
                        Route
                      </p>
                      <p className="text-text font-display text-lg font-600">
                        {flight.route}
                      </p>
                    </div>
                    <div>
                      <p className="text-text-muted text-xs font-mono mb-1">
                        Date
                      </p>
                      <p className="text-text font-mono text-sm">
                        {flight.date}
                      </p>
                    </div>
                    <div>
                      <p className="text-text-muted text-xs font-mono mb-1">
                        Status
                      </p>
                      <StatusBadge
                        status={flight.status as TripStatus}
                        label={flight.status}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t border-border/30">
                    {flight.airline && (
                      <div>
                        <p className="text-text-muted text-xs font-mono mb-1">
                          Airline
                        </p>
                        <p className="text-text-secondary text-sm font-body">
                          {flight.airline}
                        </p>
                      </div>
                    )}
                    {flight.cabin && (
                      <div>
                        <p className="text-text-muted text-xs font-mono mb-1">
                          Cabin
                        </p>
                        <p className="text-text-secondary text-sm font-body">
                          {flight.cabin}
                        </p>
                      </div>
                    )}
                    {flight.confirmation && (
                      <div>
                        <p className="text-text-muted text-xs font-mono mb-1">
                          Confirmation
                        </p>
                        <p className="text-text-secondary text-sm font-mono">
                          {flight.confirmation}
                        </p>
                      </div>
                    )}
                    {flight.time && (
                      <div>
                        <p className="text-text-muted text-xs font-mono mb-1">
                          Time
                        </p>
                        <p className="text-text-secondary text-sm font-mono">
                          {flight.time}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Hotels Section */}
        {trip.hotels.length > 0 && (
          <section className="mb-16 stagger-3">
            <div className="flex items-center gap-3 mb-6">
              <Building2 size={24} className="text-accent" />
              <h2 className="font-display text-3xl font-700 text-text">
                Hotels
              </h2>
            </div>

            <div className="grid gap-4 md:gap-6">
              {trip.hotels.map((hotel, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-surface border border-border/50 hover:border-border transition-all duration-200"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${0.05 * (idx + 1)}s backwards`,
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                    <div>
                      <p className="text-text-muted text-xs font-mono mb-1">
                        Property
                      </p>
                      <p className="text-text font-display text-lg font-600">
                        {hotel.property}
                      </p>
                    </div>
                    <div>
                      <p className="text-text-muted text-xs font-mono mb-1">
                        Location
                      </p>
                      <p className="text-text-secondary text-sm font-body">
                        {hotel.location}
                      </p>
                    </div>
                    <div>
                      <p className="text-text-muted text-xs font-mono mb-1">
                        Status
                      </p>
                      <StatusBadge
                        status={hotel.status as TripStatus}
                        label={hotel.status}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t border-border/30">
                    {hotel.checkIn && (
                      <div>
                        <p className="text-text-muted text-xs font-mono mb-1">
                          Check-in
                        </p>
                        <p className="text-text-secondary text-sm font-mono">
                          {hotel.checkIn}
                        </p>
                      </div>
                    )}
                    {hotel.checkOut && (
                      <div>
                        <p className="text-text-muted text-xs font-mono mb-1">
                          Check-out
                        </p>
                        <p className="text-text-secondary text-sm font-mono">
                          {hotel.checkOut}
                        </p>
                      </div>
                    )}
                    {hotel.program && (
                      <div>
                        <p className="text-text-muted text-xs font-mono mb-1">
                          Program
                        </p>
                        <p className="text-text-secondary text-sm font-body">
                          {hotel.program}
                        </p>
                      </div>
                    )}
                    {hotel.cost && (
                      <div>
                        <p className="text-text-muted text-xs font-mono mb-1">
                          Cost
                        </p>
                        <p className="text-accent text-sm font-mono">
                          {hotel.cost}
                        </p>
                      </div>
                    )}
                  </div>

                  {hotel.notes && (
                    <p className="text-text-secondary text-sm font-body mt-4 pt-4 border-t border-border/30">
                      {hotel.notes}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Destination Intelligence Section */}
        {trip.intel.length > 0 && (
          <section className="mb-16 stagger-4">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen size={24} className="text-accent" />
              <h2 className="font-display text-3xl font-700 text-text">
                Destination Intelligence
              </h2>
            </div>

            <div className="grid gap-8 md:gap-10">
              {trip.intel.map((section, idx) => (
                <div
                  key={idx}
                  className="max-w-3xl"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${0.05 * (idx + 1)}s backwards`,
                  }}
                >
                  <h3 className="font-display text-2xl md:text-2xl font-600 text-text mb-4">
                    {section.title}
                  </h3>
                  <div className="prose">
                    {section.content.split('\n').map((para, pIdx) => (
                      <p key={pIdx} className="text-text-secondary leading-relaxed mb-4">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Award Tips Section */}
        {trip.awardTips.length > 0 && (
          <section className="mb-16 stagger-5">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles size={24} className="text-accent" />
              <h2 className="font-display text-3xl font-700 text-text">
                Award Tips
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 md:gap-6">
              {trip.awardTips.map((tip, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-surface border border-border/50 hover:border-border transition-all duration-200"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${0.05 * (idx + 1)}s backwards`,
                  }}
                >
                  <div className="mb-4">
                    <p className="text-text-muted text-xs font-mono mb-1">
                      Program
                    </p>
                    <p className="text-text font-display text-lg font-600">
                      {tip.program}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 pt-4 border-t border-border/30">
                    {tip.route && (
                      <div>
                        <p className="text-text-muted text-xs font-mono mb-1">
                          Route
                        </p>
                        <p className="text-text-secondary text-sm font-body">
                          {tip.route}
                        </p>
                      </div>
                    )}
                    {tip.cost && (
                      <div>
                        <p className="text-text-muted text-xs font-mono mb-1">
                          Cost
                        </p>
                        <p className="text-accent text-sm font-mono">
                          {tip.cost}
                        </p>
                      </div>
                    )}
                    <div>
                      <p className="text-text-muted text-xs font-mono mb-1">
                        Notes
                      </p>
                      <p className="text-text-secondary text-sm font-body">
                        {tip.note}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Options Section (for decision_needed trips) */}
        {trip.options && trip.options.length > 0 && (
          <section className="mb-16 stagger-6">
            <h2 className="font-display text-3xl font-700 text-text mb-6">
              Options to Consider
            </h2>

            <div className="grid gap-4 md:grid-cols-2 md:gap-6">
              {trip.options.map((option, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-surface border border-accent/30 hover:border-accent transition-all duration-200"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${0.05 * (idx + 1)}s backwards`,
                  }}
                >
                  <h3 className="font-display text-xl font-600 text-accent mb-3">
                    {option.name}
                  </h3>
                  <p className="text-text-secondary text-sm font-body leading-relaxed">
                    {option.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
