import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { venueData } from '@/data/venueData.js';
import AmenityCard from '@/components/AmenityCard.jsx';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

const AmenitiesPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-24">
      <Helmet>
        <title>{`Luxury Amenities & Facilities | Sandal Tree By SK`}</title>
        <meta name="description" content="Discover our world-class amenities including Anand Vihar Metro proximity, 400-car complimentary valet parking, multi-cuisine dining, and custom floral decor." />
      </Helmet>

      {/* HERO BANNER */}
      <section className="py-16 px-4 text-center max-w-4xl mx-auto mb-12">
        <span className="text-primary text-xs font-semibold tracking-widest uppercase block mb-3">
          Uncompromising Convenience
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-foreground mb-6">
          World-Class Venue Amenities
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed text-balance">
          From prime transit connectivity to master gourmet kitchens, every facility at Sandal Tree By SK is engineered to provide absolute comfort and grandeur.
        </p>
      </section>

      {/* AMENITIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {venueData.amenities.map((amenity) => (
            <AmenityCard key={amenity.id} amenity={amenity} />
          ))}
        </div>
      </section>

      {/* DEEP DIVE SECTION ON CUISINE & DECOR */}
      <section className="py-20 bg-card border-y border-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-xs uppercase tracking-widest font-semibold block mb-2">
                Gastronomy & Styling
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                The Pillars of Unforgettable Hospitality
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We believe that the soul of any celebration lies in its feast and ambiance. Our dedicated culinary directors craft pure vegetarian and authentic royal non-vegetarian menus tailored to dietary preferences, while our design studio builds bespoke mandaps and stage backdrops.
              </p>

              <div className="space-y-3 mb-8 text-sm">
                <div className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span>100% Hygiene-Certified Master Kitchens</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span>Exclusive Bridal Suites With Private Powder Rooms</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span>High-Capacity Backup Silent Generators</span>
                </div>
              </div>

              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                <span>Schedule a Private Food Tasting</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg border border-border">
                <img src="/images/DSC_0296.JPG" alt="Catering Setup" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg border border-border mt-8">
                <img src="/images/DSC_0294.JPG" alt="Decor Detail" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AmenitiesPage;