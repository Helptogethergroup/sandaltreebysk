import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Sparkles, Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import { venueData } from '@/data/venueData.js';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-20 pb-10 border-t border-border/40 relative overflow-hidden">
      {/* Subtle luxury glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-border/30">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-serif text-3xl font-bold tracking-wider text-white">
                Sandal Tree
              </span>
              <span className="block text-xs tracking-[0.3em] uppercase text-primary font-medium -mt-1">
                By SK
              </span>
            </Link>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              An architectural crown jewel in NCR designed for grand royal weddings, elite corporate galas, and bespoke luxury celebrations.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-card border border-border/50 flex items-center justify-center text-white/80 hover:text-primary hover:border-primary transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-card border border-border/50 flex items-center justify-center text-white/80 hover:text-primary hover:border-primary transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-serif text-lg font-semibold text-white tracking-wide block">
              Navigation
            </span>
            <ul className="space-y-2.5 text-sm">
              {['Home', 'About', 'Spaces', 'Amenities', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <Link 
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Spaces */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-serif text-lg font-semibold text-white tracking-wide block">
              Venue Spaces
            </span>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {venueData.spaces.map((sp) => (
                <li key={sp.id}>
                  <Link to="/spaces" className="hover:text-primary transition-colors">
                    {sp.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-serif text-lg font-semibold text-white tracking-wide block">
              Concierge Contact
            </span>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                <span>{venueData.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href={`tel:${venueData.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                  {venueData.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href={`mailto:${venueData.email}`} className="hover:text-white transition-colors">
                  {venueData.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Sandal Tree By SK. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="flex items-center gap-1 text-primary font-medium">
              <Sparkles className="w-3 h-3" /> Crafted for Elegance
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;