import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Maximize2, CheckCircle2, ArrowRight } from 'lucide-react';

const SpaceCard = ({ space, featured = false }) => {
  return (
    <div className={`group flex flex-col bg-card border border-border/60 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-primary/50 ${featured ? 'md:grid md:grid-cols-12 md:gap-8' : ''}`}>
      <div className={`relative overflow-hidden aspect-[4/3] ${featured ? 'md:col-span-7 md:aspect-auto md:h-full' : ''}`}>
        <img 
          src={space.image} 
          alt={space.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        <span className="absolute top-4 left-4 bg-background/90 backdrop-blur-md text-primary font-serif text-sm px-4 py-1.5 rounded-full border border-primary/30 font-medium tracking-wider uppercase">
          {space.category}
        </span>
      </div>

      <div className={`p-6 md:p-8 flex flex-col justify-between ${featured ? 'md:col-span-5 md:py-10' : ''}`}>
        <div>
          <h3 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-3 group-hover:text-primary transition-colors">
            {space.title}
          </h3>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4 pb-4 border-b border-border/50">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span className="font-sans font-medium">{space.capacity}</span>
            </div>
            <div className="flex items-center gap-2">
              <Maximize2 className="w-4 h-4 text-primary" />
              <span className="font-sans font-medium">{space.area}</span>
            </div>
          </div>

          <p className="text-muted-foreground text-base leading-relaxed mb-6">
            {space.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
            {space.features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-foreground/90">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-4 flex items-center justify-between">
          <Link 
            to="/contact" 
            state={{ selectedSpace: space.title }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium transition-all duration-300 hover:bg-primary/90 hover:gap-3 shadow-md shadow-primary/20"
          >
            <span>Inquire Availability</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpaceCard;