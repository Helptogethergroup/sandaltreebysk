import React from 'react';
import { Eye } from 'lucide-react';

const GalleryImage = ({ item, onOpen }) => {
  return (
    <div 
      onClick={() => onOpen(item)}
      className="group relative cursor-pointer overflow-hidden rounded-2xl bg-muted aspect-[4/3] border border-border/50 shadow-md"
    >
      <img 
        src={item.image} 
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-1 block">
            {item.category}
          </span>
          <h4 className="font-serif text-xl font-bold text-white mb-2">
            {item.title}
          </h4>
          <p className="text-white/80 text-sm line-clamp-2">
            {item.description}
          </p>
        </div>
        
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
          <Eye className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default GalleryImage;