import React from 'react';
import { Helmet } from 'react-helmet';
import { venueData } from '@/data/venueData.js';
import SpaceCard from '@/components/SpaceCard.jsx';
import { Sparkles } from 'lucide-react';

const SpacesPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-24">
      <Helmet>
        <title>{`Venue Spaces & Capacities | Sandal Tree By SK`}</title>
        <meta name="description" content="Explore our three premier luxury spaces: Wedding Hall (up to 1200 guests), Reception Ballroom, and Starlight Party Lounge at Sandal Tree By SK Sahibabad." />
      </Helmet>

      {/* HEADER HERO */}
      <section className="py-16 px-4 text-center max-w-4xl mx-auto mb-12">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Architectural Grandeur
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-foreground mb-6">
          Our Premier Event Spaces
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed text-balance">
          Explore our meticulously crafted venues designed to host both monumental celebrations and intimate gatherings with effortless elegance.
        </p>
      </section>

      {/* SPACES SHOWCASE LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {venueData.spaces.map((space, index) => (
          <SpaceCard key={space.id} space={space} featured={true} />
        ))}
      </section>

      {/* CAPACITY COMPARISON TABLE */}
      <section className="mt-24 max-w-5xl mx-auto px-4">
        <div className="bg-card border border-border/80 rounded-2xl p-6 sm:p-10 shadow-xl">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-2 text-center">
            Quick Specifications Summary
          </h3>
          <p className="text-sm text-muted-foreground text-center mb-8">
            Compare dimensions and guest accommodations across our facilities.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border text-xs uppercase tracking-wider text-primary font-semibold">
                  <th className="pb-4 px-4">Venue Name</th>
                  <th className="pb-4 px-4">Ideal For</th>
                  <th className="pb-4 px-4">Guest Capacity</th>
                  <th className="pb-4 px-4">Total Area</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50 text-sm">
                {venueData.spaces.map((sp) => (
                  <tr key={sp.id} className="hover:bg-muted/40 transition-colors">
                    <td className="py-4 px-4 font-serif font-bold text-foreground text-base">{sp.title}</td>
                    <td className="py-4 px-4 text-muted-foreground">{sp.category}</td>
                    <td className="py-4 px-4 font-medium text-foreground">{sp.capacity}</td>
                    <td className="py-4 px-4 text-muted-foreground tabular-nums">{sp.area}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpacesPage;