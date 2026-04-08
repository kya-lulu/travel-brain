'use client';

import { awardTools, sweetSpots } from '@/data/awards';
import { ExternalLink, Search, Sparkles, Plane, Building2 } from 'lucide-react';

export default function AwardTools() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Section 1: Search Tools */}
      <section className="mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-24" style={{ maxWidth: '960px', marginLeft: 'auto', marginRight: 'auto' }}>
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Search className="w-8 h-8 text-accent" />
            <h1 className="font-display text-4xl md:text-5xl font-600 text-text">
              Award Tools
            </h1>
          </div>
          <p className="font-body text-lg text-text-secondary max-w-2xl">
            Your toolkit for finding the best redemptions
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {awardTools.map((tool, index) => (
            <div
              key={tool.name}
              className="group bg-surface border border-border/60 rounded-xl p-8 shadow-card transition-all duration-200 hover:border-border-strong hover:shadow-card-hover hover:-translate-y-0.5"
              style={{
                animation: `slideInUp 0.5s ease-out ${index * 0.05}s both`,
              }}
            >
              <h2 className="font-display text-2xl font-600 text-text mb-3">
                {tool.name}
              </h2>

              {/* Best For Badge */}
              <div className="mb-4">
                <span className="inline-block font-mono text-xs font-500 text-accent bg-accent-soft px-3 py-1 rounded-full">
                  {tool.bestFor}
                </span>
              </div>

              {/* Description */}
              <p className="font-body text-text-secondary leading-relaxed mb-6">
                {tool.description}
              </p>

              {/* Visit Link */}
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-accent hover:text-accent-hover transition-colors duration-200 group/link"
              >
                <span className="text-sm font-500">Visit</span>
                <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Sweet Spots */}
      <section className="mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-24 border-t border-border" style={{ maxWidth: '960px', marginLeft: 'auto', marginRight: 'auto' }}>
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-accent" />
            <h2 className="font-display text-4xl md:text-5xl font-600 text-text">
              Sweet Spots from Seattle
            </h2>
          </div>
          <p className="font-body text-lg text-text-secondary max-w-2xl">
            Best value redemptions from your home airport
          </p>
        </div>

        {/* Flights Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Plane className="w-5 h-5 text-accent" />
            <h3 className="font-display text-2xl font-600 text-text">Flights</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {sweetSpots
              .filter((spot) => spot.cabin === 'First' || spot.cabin === 'Business')
              .map((spot, index) => (
                <div
                  key={`${spot.program}-${spot.route}`}
                  className="bg-surface border border-border/60 rounded-xl p-6 md:p-8 border-l-4 border-l-accent shadow-card transition-all duration-200 hover:border-border-strong hover:shadow-card-hover"
                  style={{
                    animation: `slideInUp 0.5s ease-out ${(20 + index) * 0.05}s both`,
                  }}
                >
                  <h4 className="font-display text-lg font-600 text-text mb-2">
                    {spot.program}
                  </h4>

                  <div className="font-mono text-xs text-text-muted mb-4">
                    {spot.route}
                  </div>

                  <div className="mb-4">
                    <div className="font-display text-2xl font-600 text-accent">
                      {spot.cost}
                    </div>
                  </div>

                  {/* Cabin Badge */}
                  <div className="mb-4">
                    <span className="inline-block font-body text-xs font-500 text-accent bg-accent-soft px-2 py-1 rounded">
                      {spot.cabin}
                    </span>
                  </div>

                  {/* Note */}
                  <p className="font-body text-sm text-text-secondary leading-relaxed">
                    {spot.note}
                  </p>
                </div>
              ))}
          </div>
        </div>

        {/* Hotels Section */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <Building2 className="w-5 h-5 text-accent" />
            <h3 className="font-display text-2xl font-600 text-text">Hotels</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {sweetSpots
              .filter((spot) => spot.cabin === 'Standard Room')
              .map((spot, index) => (
                <div
                  key={`${spot.program}-${spot.route}`}
                  className="bg-surface border border-border/60 rounded-xl p-6 md:p-8 border-l-4 border-l-accent shadow-card transition-all duration-200 hover:border-border-strong hover:shadow-card-hover"
                  style={{
                    animation: `slideInUp 0.5s ease-out ${(25 + index) * 0.05}s both`,
                  }}
                >
                  <h4 className="font-display text-lg font-600 text-text mb-2">
                    {spot.program}
                  </h4>

                  <div className="font-mono text-xs text-text-muted mb-4">
                    {spot.route}
                  </div>

                  <div className="mb-4">
                    <div className="font-display text-2xl font-600 text-accent">
                      {spot.cost}
                    </div>
                  </div>

                  {/* Cabin Badge */}
                  <div className="mb-4">
                    <span className="inline-block font-body text-xs font-500 text-accent bg-accent-soft px-2 py-1 rounded">
                      {spot.cabin}
                    </span>
                  </div>

                  {/* Note */}
                  <p className="font-body text-sm text-text-secondary leading-relaxed">
                    {spot.note}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Animation keyframes */}
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
