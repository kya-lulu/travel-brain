import { Trip } from '@/data/trips';

interface StatsBarProps {
  trips: Trip[];
}

export function StatsBar({ trips }: StatsBarProps) {
  const bookedTrips = trips.filter((t) => t.status === 'booked').length;
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
    <div className="border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`stagger-${index + 1}`}
            >
              <p className="text-accent font-display text-4xl md:text-5xl font-700 mb-1">
                {stat.value}
              </p>
              <p className="font-mono text-xs text-text-muted uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
