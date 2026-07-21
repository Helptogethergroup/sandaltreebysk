
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CalendarCheck, ShieldCheck, Star, Users, MapPin, CheckCircle } from 'lucide-react';
import { venueData } from '@/data/venueData.js';
import SpaceCard from '@/components/SpaceCard.jsx';
import AmenityCard from '@/components/AmenityCard.jsx';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{`Sandal Tree By SK | Premier Wedding & Event Venue in Ghaziabad`}</title>
        <meta name="description" content="Experience royal grandeur at Sandal Tree By SK. A luxury wedding venue featuring grand ballrooms, valet parking, and gourmet cuisine near Anand Vihar Metro." />
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden">
        {/* Background Image with Depth Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1700542944115-c89f881259ff" 
            alt="Sandal Tree By SK Grand Ballroom Chandelier"
            className="w-full h-full object-cover scale-105 animate-pulse duration-[15000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary mb-6 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold">Premier Luxury Destination</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 text-balance"
            style={{ letterSpacing: '-0.02em' }}
          >
            Sandal Tree Banquet <br />
            <span className="text-primary italic font-normal">By SK</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed mb-10 text-balance"
          >
            An architectural masterpiece in Sahibabad featuring grand ballrooms, bespoke décor artistry, and royal gastronomy for celebrations that echo through generations.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Link 
              to="/spaces"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 active:scale-95 flex items-center justify-center gap-2 text-base"
            >
              <span>Explore Venues</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link 
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium border border-white/20 backdrop-blur-md transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 text-base"
            >
              <CalendarCheck className="w-5 h-5 text-primary" />
              <span>Book Consultation</span>
            </Link>
          </motion.div>

          {/* Quick Stats Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-20 pt-10 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {venueData.stats.map((st, idx) => (
              <div key={idx} className="text-center">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-primary tabular-nums block">
                  {st.value}
                </span>
                <span className="text-xs uppercase tracking-widest text-white/70 mt-1 block">
                  {st.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION HIGHLIGHTS */}
      <section className="py-24 bg-card/50 relative border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-primary text-xs font-semibold tracking-widest uppercase block">
                The Sandal Tree Experience
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-foreground leading-tight text-balance">
                Designed for Grandeur, Tailored to Perfection
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Nestled strategically in Sahibabad Industrial Area Site 4, Sandal Tree By SK offers an oasis of refined luxury. Whether hosting an elaborate 1,200-guest wedding reception or an intimate high-society soirée, every inch of our venue speaks of unmatched sophistication.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  { title: "Strategic Accessibility", desc: "Minutes from Anand Vihar Metro Station" },
                  { title: "Hassle-Free Arrival", desc: "400-vehicle complimentary valet parking" },
                  { title: "Culinary Excellence", desc: "Pure vegetarian & royal non-veg menus" },
                  { title: "Bespoke Production", desc: "In-house luxury floral styling teams" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border/60">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link to="/about" className="text-primary hover:underline font-medium inline-flex items-center gap-1 text-sm">
                  <span>Learn more about our heritage</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-primary/30">
                  <img 
                    src="images/DSC_0291.JPG" 
                    alt="Luxury Wedding Setup"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl border border-border shadow-2xl max-w-xs">
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <Star className="w-4 h-4 fill-primary" />
                    <Star className="w-4 h-4 fill-primary" />
                    <Star className="w-4 h-4 fill-primary" />
                    <Star className="w-4 h-4 fill-primary" />
                    <Star className="w-4 h-4 fill-primary" />
                  </div>
                  <p className="font-serif text-foreground font-bold text-lg">"The premier crown jewel for royal celebrations in Delhi NCR."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SPACES SECTION */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-primary text-xs font-semibold tracking-widest uppercase block mb-2">
                Our Royal Venues
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-foreground">
                Iconic Event Spaces
              </h2>
            </div>
            <Link 
              to="/spaces"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              <span>View All Spaces & Floorplans</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-12">
            {/* Show primary space featured */}
            <SpaceCard space={venueData.spaces[0]} featured={true} />

            {/* Grid for remaining spaces */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <SpaceCard space={venueData.spaces[1]} />
              <SpaceCard space={venueData.spaces[2]} />
            </div>
          </div>
        </div>
      </section>

      {/* KEY AMENITIES HIGHLIGHT */}
      <section className="py-24 bg-secondary text-secondary-foreground relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-xs font-semibold tracking-widest uppercase block mb-2">
              Unrivaled Comfort
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
              Curated Luxury Amenities
            </h2>
            <p className="text-muted-foreground text-base">
              Every detail is calibrated to eliminate logistics stress and elevate your celebration into pure enchantment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {venueData.amenities.map((amenity) => (
              <AmenityCard key={amenity.id} amenity={amenity} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              to="/amenities" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-card hover:bg-card/80 text-white font-medium border border-border transition-all shadow-lg"
            >
              <span>Explore All Venue Facilities</span>
              <ArrowRight className="w-4 h-4 text-primary" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 bg-gradient-to-t from-background to-card relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Begin Planning Your Royal Event
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Our dates for the upcoming wedding season are booking rapidly. Secure your private site tour and culinary tasting session today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold transition-all hover:bg-primary/90 shadow-xl shadow-primary/25"
            >
              Request Consultation
            </Link>
            <a
              href={`tel:${venueData.phone.replace(/[^0-9+]/g, '')}`}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold transition-all"
            >
              Call Concierge: {venueData.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
