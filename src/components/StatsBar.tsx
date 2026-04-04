import { Trip } from '@/data/trips';

interface StatsBarProps {
  trips: Trip[];
}

export function StatsBar({ trips }: StatsBarProps) {
  const bookedTrips = trips.filter((t) => t.status === 'booked').length;
  const totalFlights = trips.reduce((sum, trip) => sum + trip.flights.length, 0);
  const totalHotels = trips.reduce((sum, trip) => sum + trip.hotels.length, 0);
  const uniqueCountries = new Set(
    trips.map((t) => t.country || t.region)
  ).size;

  const stats = [
    { label: 'Active Trips', value: trips.length },
    { label: 'Booked Trips', value: bookedTrips },
    { label: 'Countries', value: uniqueCountries },
    { label: 'Action Items', value: trips.reduce((sum, trip) => sum + trip.actionItems.length, 0) },
  ];

  return (
    <div className="bg-surface-elevated/40 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center stagger-${index + 1}`}
            >
              <p className="text-accent font-display text-4xl md:text-5xl font-700 mb-2">
                {stat.value}
              </p>
              <p className="font-mono text-xs md:text-sm text-text-muted uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
