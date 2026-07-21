import React from 'react';
import { Train, Car, UtensilsCrossed, Sparkles, ShieldCheck, Wifi, Music, Flower2 } from 'lucide-react';

const iconMap = {
  Train: Train,
  Car: Car,
  UtensilsCrossed: UtensilsCrossed,
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
  Wifi: Wifi,
  Music: Music,
  Flower2: Flower2
};

const AmenityCard = ({ amenity }) => {
  const IconComponent = iconMap[amenity.icon] || Sparkles;

  return (
    <div className="group relative bg-card p-8 rounded-2xl border border-border/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl overflow-hidden flex flex-col h-full">
      <div className="absolute -right-12 -top-12 w-32 h-32 bg-primary/5 rounded-full transition-transform duration-500 group-hover:scale-150 pointer-events-none" />
      
      <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 transition-transform duration-300 group-hover:scale-110">
        <IconComponent className="w-7 h-7 stroke-[1.5]" />
      </div>

      <h3 className="font-serif text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
        {amenity.title}
      </h3>

      <p className="text-foreground/80 font-medium mb-3 text-sm tracking-wide">
        {amenity.shortDesc}
      </p>

      <p className="text-muted-foreground text-sm leading-relaxed mt-auto">
        {amenity.detailedDesc}
      </p>
    </div>
  );
};

export default AmenityCard;