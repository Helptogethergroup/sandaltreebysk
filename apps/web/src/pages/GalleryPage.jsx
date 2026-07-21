import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { venueData } from '@/data/venueData.js';
import GalleryImage from '@/components/GalleryImage.jsx';
import GalleryModal from '@/components/GalleryModal.jsx';
import { Sparkles } from 'lucide-react';

const categories = ["All", "Wedding", "Receptions", "Birthday Party", "Get Together"];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredGallery = activeCategory === "All" 
    ? venueData.gallery 
    : venueData.gallery.filter(g => g.category === activeCategory);

  const handleOpenModal = (item) => {
    const idx = filteredGallery.findIndex(g => g.id === item.id);
    setCurrentIndex(idx >= 0 ? idx : 0);
    setModalOpen(true);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? filteredGallery.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === filteredGallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-24">
      <Helmet>
        <title>{`Visual Gallery & Ambiance | Sandal Tree By SK`}</title>
        <meta name="description" content="View our gallery showcasing regal mandaps, evening gala receptions, crystal chandeliers, and artisanal floral table decor at Sandal Tree By SK Ghaziabad." />
      </Helmet>

      {/* HERO */}
      <section className="py-16 px-4 text-center max-w-4xl mx-auto mb-10">
        <span className="text-primary text-xs font-semibold tracking-widest uppercase block mb-3">
          Glimpse The Enchantment
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-foreground mb-6">
          Venue Ambiance Gallery
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed text-balance">
          Immerse yourself in the visual poetry of past celebrations, grand architecture, and bespoke floral artistry captured within our halls.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground shadow-md shadow-primary/25 scale-105'
                  : 'bg-card text-muted-foreground hover:bg-muted hover:text-foreground border border-border/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY MASONRY / GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredGallery.length === 0 ? (
          <div className="py-20 text-center text-muted-foreground">
            No images found in this category.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 animate-in fade-in duration-500">
            {filteredGallery.map((item) => (
              <GalleryImage key={item.id} item={item} onOpen={handleOpenModal} />
            ))}
          </div>
        )}
      </section>

      {/* LIGHTBOX MODAL */}
      <GalleryModal
        isOpen={modalOpen}
        currentItem={filteredGallery[currentIndex]}
        onClose={() => setModalOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};

export default GalleryPage;