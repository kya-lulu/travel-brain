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
    "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&h=530&fit=crop&q=80",
  "seoul-autumn":
    "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800&h=530&fit=crop&q=80",
  "tropical-island-nz-mountains":
    "https://images.unsplash.com/photo-1469521669194-babb45599def?w=800&h=530&fit=crop&q=80",
  "singapore-gardens-night":
    "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=530&fit=crop&q=80",
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
      default:
        return { text: "text-text-muted", icon: Clock };
    }
  };

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
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

      </div>
    </div>
  );
}
