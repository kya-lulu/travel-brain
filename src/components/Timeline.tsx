import Link from "next/link";
import { Trip } from "@/data/trips";

interface TimelineProps {
  trips: Trip[];
}

export function Timeline({ trips }: TimelineProps) {
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

  // Sort trips chronologically
  const sortedTrips = [...trips].sort((a, b) => {
    const aDate = new Date(`${a.month} 1, ${a.year}`);
    const bDate = new Date(`${b.month} 1, ${b.year}`);
    return aDate.getTime() - bDate.getTime();
  });

  return (
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
  );
}
