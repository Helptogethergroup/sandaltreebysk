import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Sparkles, Award, HeartHandshake, ShieldCheck, Users, CheckCircle2 } from 'lucide-react';
import { venueData } from '@/data/venueData.js';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-20">
      <Helmet>
        <title>{`About Sandal Tree By SK | Heritage & Venue Story`}</title>
        <meta name="description" content="Discover the story behind Sandal Tree By SK. Our mission is delivering premier wedding elegance, bespoke decor, and exceptional culinary experiences in Ghaziabad NCR." />
      </Helmet>

      {/* HEADER HERO */}
      <section className="py-16 md:py-24 px-4 bg-card border-b border-border/60 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e5a93b_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-primary text-xs uppercase tracking-[0.25em] font-semibold block mb-3">
            Our Heritage & Vision
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-foreground mb-6">
            The Story of Sandal Tree By SK
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed text-balance max-w-2xl mx-auto">
            Founded with an unwavering dedication to luxury hospitality, we transform monumental life milestones into timeless royal experiences.
          </p>
        </div>
      </section>

      {/* NARRATIVE & SOPHISTICATION STORY */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-primary/30">
              <img 
                src="images/about.jpeg" 
                alt="Sandal Tree Banquet Elegance"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 hidden sm:block aspect-square w-48 rounded-2xl overflow-hidden shadow-2xl border-2 border-primary">
              <img 
                src="images/DSC_0303.JPG" 
                alt="Luxury Floral Detail"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-primary font-semibold text-xs tracking-widest uppercase">
              A Venue Born From Excellence
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
              Redefining Grand Celebrations in National Capital Region
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Located in the accessible hub of Sahibabad, Sandal Tree By SK was conceived as an architectural sanctuary where grand Indian traditions meet European palace aesthetics. Recognizing that weddings and galas require immaculate coordination, our founders engineered a venue featuring pillar-less grand halls, acoustic perfection, and dedicated bridal suites.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Every celebration hosted within our walls is guided by our personalized concierge philosophy. From your first site visit to the final farewell departure, our seasoned event directors manage every facet with grace, precision, and absolute discretion.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-6 border-t border-border">
              <div>
                <h4 className="font-serif text-2xl font-bold text-primary">Uncompromising</h4>
                <p className="text-xs text-muted-foreground mt-1">Quality in culinary ingredients and floral design</p>
              </div>
              <div>
                <h4 className="font-serif text-2xl font-bold text-primary">Pillarless Hall</h4>
                <p className="text-xs text-muted-foreground mt-1">Unobstructed sightlines for all 1,200 guests</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & POSITIONING */}
      <section className="py-20 bg-secondary text-secondary-foreground my-12 border-y border-border/40">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-8">
          <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mx-auto">
            <Sparkles className="w-8 h-8" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Our Mission Statement
          </h2>
          <blockquote className="font-serif text-xl sm:text-2xl text-white/90 italic leading-relaxed max-w-3xl mx-auto">
            "To provide an atmosphere of regal enchantment and impeccable hospitality, ensuring every host feels like royalty and every guest departs with cherished lifelong memories."
          </blockquote>
          <div className="flex flex-wrap justify-center gap-8 pt-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Transparent Pricing</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Master Culinary Team</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Absolute Privacy</span>
          </div>
        </div>
      </section>

      {/* DETAILED OFFERINGS */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold block mb-2">
            Bespoke Celebrations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
            Tailored Event Offerings
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Weddings & Ceremonies",
              desc: "Sacred pheras, vibrant mehendi nights, and grand royal receptions executed with custom floral mandaps and dedicated VIP hospitality.",
              icon: HeartHandshake
            },
            {
              title: "Receptions & Banquets",
              desc: "Sophisticated black-tie galas featuring multi-course seated dinners, interactive cocktail lounges, and stunning chandelier lighting.",
              icon: Award
            },
            {
              title: "Corporate Soirées",
              desc: "Product launches, annual awards galas, and high-level corporate symposiums equipped with high-speed Wi-Fi and audio-visual setups.",
              icon: ShieldCheck
            }
          ].map((off, i) => (
            <div key={i} className="bg-card p-8 rounded-2xl border border-border/60 hover:border-primary/40 transition-all shadow-lg flex flex-col justify-between">
              <div>
                <off.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">{off.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{off.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM & EXPERTISE */}
      <section className="py-20 px-4 bg-card/40 border-t border-border/60">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
            <div>
              <span className="text-primary text-xs uppercase tracking-widest font-semibold block mb-2">
                The Artisans Behind The Magic
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
                Our Pillars of Expertise
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md text-sm">
              Our 100+ member in-house staff brings decades of luxury hotel management and wedding production experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { role: "Executive Master Chefs", expertise: "Culinary Curation", desc: "Specializing in Marwari, Mughlai, Mughalai delicacies and international live gastronomy." },
              { role: "Floral Production Stylists", expertise: "Thematic Décor", desc: "Crafting lush floral architectures sourcing fresh blooms daily from elite growers." },
              { role: "Dedicated VIP Concierges", expertise: "Guest Hospitality", desc: "Ensuring seamless valet drop-offs, elderly assistance, and VIP lounge services." },
              { role: "Acoustic & Lighting Engineers", expertise: "Ambient Technology", desc: "Calibrating chandelier dimming and crystal-clear sound frequencies for toasts." }
            ].map((tm, idx) => (
              <div key={idx} className="bg-background p-6 rounded-xl border border-border/80">
                <span className="text-xs font-semibold text-primary block mb-1 uppercase tracking-wider">{tm.expertise}</span>
                <h4 className="font-serif text-xl font-bold text-foreground mb-2">{tm.role}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{tm.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;