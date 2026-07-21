import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryModal = ({ isOpen, currentItem, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !currentItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-300">
      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all"
        aria-label="Close modal"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      <button 
        onClick={onPrev}
        className="absolute left-4 md:left-8 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-105"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button 
        onClick={onNext}
        className="absolute right-4 md:right-8 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-105"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image Content */}
      <div className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center">
        <div className="relative overflow-hidden rounded-2xl border border-primary/30 max-h-[75vh] w-auto">
          <img 
            src={currentItem.image} 
            alt={currentItem.title}
            className="max-h-[75vh] max-w-full object-contain mx-auto"
          />
        </div>
        
        {/* Caption */}
        <div className="mt-6 text-center text-white max-w-2xl px-4">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold block mb-1">
            {currentItem.category}
          </span>
          <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">
            {currentItem.title}
          </h3>
          <p className="text-white/70 text-sm md:text-base">
            {currentItem.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;