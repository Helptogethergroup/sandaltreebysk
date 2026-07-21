import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, CalendarCheck } from 'lucide-react';
import { venueData } from '@/data/venueData.js';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Spaces', path: '/spaces' },
  { name: 'Amenities', path: '/amenities' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border/60 py-3 shadow-xl shadow-black/20' 
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Branding */}
        <Link to="/" className="flex flex-col group">
          <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-white transition-colors group-hover:text-primary">
            Sandal Tree
          </span>
          <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-primary font-medium -mt-1">
            By SK
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 bg-card/40 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/10 shadow-inner">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors duration-200 relative py-1 ${
                  isActive ? 'text-primary font-semibold' : 'text-white/80 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full animate-in fade-in duration-300" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-4">
          <a 
            href={`tel:${venueData.phone.replace(/[^0-9+]/g, '')}`} 
            className="flex items-center gap-2 text-xs font-medium text-white/90 hover:text-primary transition-colors px-3 py-2 rounded-lg bg-white/5 border border-white/10"
          >
            <Phone className="w-3.5 h-3.5 text-primary" />
            <span>{venueData.phone}</span>
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 active:scale-95"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Book Now</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-white/10 text-white hover:text-primary transition-colors"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-border p-6 shadow-2xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4 mb-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-lg font-serif px-4 py-2 rounded-xl transition-colors ${
                    isActive ? 'bg-primary/10 text-primary font-bold border-l-4 border-primary' : 'text-foreground/80 hover:bg-muted'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="pt-4 border-t border-border flex flex-col gap-3">
            <a 
              href={`tel:${venueData.phone.replace(/[^0-9+]/g, '')}`} 
              className="flex items-center justify-center gap-2 text-sm font-medium text-foreground py-3 rounded-xl bg-muted"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>{venueData.phone}</span>
            </a>

            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-center shadow-lg shadow-primary/20"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Consultation</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;