import Link from "next/link";
import { trips } from "@/data/trips";

export default function Home() {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  const yearLabel = `${currentYear}-${nextYear}`;

  // Calculate stats
  const activeTrips = trips.length;
  const uniqueCountries = new Set(trips.map((t) => t.country || t.region)).size;
  const totalActionItems = trips.reduce(
    (sum, trip) => sum + trip.actionItems.length,
    0
  );
  const bookedTrips = trips.filter((t) => t.status === "booked").length;

  // Group trips by month/year for timeline
  const sortedTrips = [...trips].sort((a, b) => {
    const aDate = new Date(`${a.month} 1, ${a.year}`);
    const bDate = new Date(`${b.month} 1, ${b.year}`);
    return aDate.getTime() - bDate.getTime();
  });

  // Get status badge styling
  const getStatusBadgeStyle = (status: string) => {
    switch (status) {
      case "booked":
        return "bg-success/20 text-success";
      case "partially_booked":
        return "bg-warning/20 text-warning";
      case "needs_action":
        return "bg-error/20 text-error";
      case "planning":
        return "bg-accent/20 text-accent";
      case "decision_needed":
        return "bg-border text-text-muted";
      case "canceled":
        return "bg-border text-text-muted line-through";
      default:
        return "bg-border text-text-muted";
    }
  };

  return (
    <div className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-12 md:pt-20 pb-8 md:pb-12">
        <div className="fade-in-up">
          <h1 className="font-display text-5xl md:text-6xl font-700 text-text mb-4">
            Your Year of Travel
          </h1>
          <p className="text-xl text-text-secondary mb-6">
            {activeTrips} trips · {uniqueCountries} countries · Every detail,
            curated
          </p>
          <div className="h-px bg-border/50 w-24" />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border/50 bg-surface-elevated/40">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="stagger-1 text-center">
              <p className="text-accent font-display text-4xl md:text-5xl font-700 mb-2">
                {activeTrips}
              </p>
              <p className="font-mono text-xs md:text-sm text-text-muted uppercase tracking-wide">
                Active Trips
              </p>
            </div>
            <div className="stagger-2 text-center">
              <p className="text-accent font-display text-4xl md:text-5xl font-700 mb-2">
                {uniqueCountries}
              </p>
              <p className="font-mono text-xs md:text-sm text-text-muted uppercase tracking-wide">
                Countries
              </p>
            </div>
            <div className="stagger-3 text-center">
              <p className="text-accent font-display text-4xl md:text-5xl font-700 mb-2">
                {totalActionItems}
              </p>
              <p className="font-mono text-xs md:text-sm text-text-muted uppercase tracking-wide">
                Action Items
              </p>
            </div>
            <div className="stagger-4 text-center">
              <p className="text-accent font-display text-4xl md:text-5xl font-700 mb-2">
                {bookedTrips}
              </p>
              <p className="font-mono text-xs md:text-sm text-text-muted uppercase tracking-wide">
                Booked
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 py-12 md:py-20">
        <div className="space-y-8 md:space-y-12">
          {sortedTrips.map((trip, index) => (
            <div
              key={trip.slug}
              className={`stagger-${Math.min(index + 1, 8)} group`}
            >
              <Link href={`/trips/${trip.slug}`}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 hover:opacity-75 transition-opacity duration-200">
                  {/* Month Label */}
                  <div className="md:text-right">
                    <p className="font-mono text-sm text-text-muted uppercase tracking-wide">
                      {trip.month}
                    </p>
                    <p className="font-mono text-xs text-text-muted/60">
                      {trip.year}
                    </p>
                  </div>

                  {/* Trip Card */}
                  <div className="md:col-span-3">
                    <div className="bg-surface-elevated/60 hover:bg-surface-elevated border border-border/50 hover:border-accent/30 rounded-2xl p-6 md:p-8 transition-all duration-200 hover:-translate-y-0.5">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="font-display text-2xl md:text-3xl font-600 text-text mb-2 group-hover:text-accent transition-colors">
                            {trip.title}
                          </h3>
                          <p className="text-text-secondary text-sm md:text-base">
                            {trip.subtitle}
                          </p>
                        </div>
                        <span
                          className={`inline-block px-3 py-1.5 rounded-full text-xs font-500 whitespace-nowrap mt-3 md:mt-0 ${getStatusBadgeStyle(
                            trip.status
                          )}`}
                        >
                          {trip.statusLabel}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-text-muted">
                        <div className="flex items-center gap-2">
                          <span className="text-text-muted">Dates:</span>
                          <span className="text-text">{trip.dates}</span>
                        </div>
                        <div className="hidden md:block h-4 w-px bg-border/30" />
                        <div className="flex items-center gap-2">
                          <span className="text-text-muted">Travelers:</span>
                          <span className="text-text">{trip.travelers}</span>
                        </div>
                        <div className="hidden md:block h-4 w-px bg-border/30" />
                        <div className="flex items-center gap-2">
                          <span className="text-text-muted">Action Items:</span>
                          <span className="text-text font-600">
                            {trip.actionItems.length}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
