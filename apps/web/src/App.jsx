
import React from 'react';
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom';
import { Toaster } from 'sonner';
import ScrollToTop from './components/ScrollToTop.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import FloatingContactButton from './components/FloatingContactButton.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import SpacesPage from './pages/SpacesPage.jsx';
import AmenitiesPage from './pages/AmenitiesPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import { Sparkles, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => (
  <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-background text-foreground pt-24">
    <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-6">
      <Sparkles className="w-8 h-8" />
    </div>
    <h1 className="font-serif text-5xl font-bold mb-4">404 - Page Not Found</h1>
    <p className="text-muted-foreground max-w-md mb-8">
      The royal corridor or celebration page you are looking for has moved or does not exist.
    </p>
    <Link 
      to="/" 
      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg"
    >
      <ArrowLeft className="w-4 h-4" />
      <span>Return to Homepage</span>
    </Link>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground relative">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/spaces" element={<SpacesPage />} />
            <Route path="/amenities" element={<AmenitiesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingContactButton />
      </div>
      <Toaster position="top-right" richColors theme="dark" />
    </Router>
  );
}

export default App;
