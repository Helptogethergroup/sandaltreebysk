
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, X } from 'lucide-react';

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-4 bg-card border border-border p-2 rounded-2xl shadow-2xl flex flex-col min-w-[200px]"
          >
            <a
              href="https://wa.me/919910866683?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors group"
              onClick={() => setIsOpen(false)}
            >
              <div className="bg-[#25D366]/20 p-2.5 rounded-full text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                <MessageCircle size={20} className="fill-current" />
              </div>
              <span className="text-sm font-medium text-foreground">WhatsApp Us</span>
            </a>
            
            <div className="h-px bg-border/50 mx-4 my-1" />
            
            <a
              href="tel:+919873503165"
              className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors group"
              onClick={() => setIsOpen(false)}
            >
              <div className="bg-primary/20 p-2.5 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Phone size={20} className="fill-current" />
              </div>
              <span className="text-sm font-medium text-foreground">Call Us</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle contact menu"
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20 active:scale-95 transition-all duration-300"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default FloatingContactButton;
