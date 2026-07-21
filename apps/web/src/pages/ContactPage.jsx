import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { Phone, MapPin, Mail, Clock, Train, Sparkles } from 'lucide-react';
import { venueData } from '@/data/venueData.js';
import ContactForm from '@/components/ContactForm.jsx';

const ContactPage = () => {
  const location = useLocation();
  const selectedSpace = location.state?.selectedSpace || "";

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-24">
      <Helmet>
        <title>{`Contact & Consultation | Sandal Tree By SK Ghaziabad`}</title>
        <meta name="description" content="Get in touch with Sandal Tree By SK. Call +91 98735 03165 or book a site tour at Plot Alpha, Sahibabad Industrial Area Site 4, Ghaziabad near Anand Vihar Metro." />
      </Helmet>

      {/* HERO */}
      <section className="py-16 px-4 text-center max-w-4xl mx-auto mb-12">
        <span className="text-primary text-xs uppercase tracking-[0.25em] font-semibold block mb-3">
          Connect With Our Specialists
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-foreground mb-6">
          Schedule Your Venue Tour
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed text-balance">
          We invite you to experience the grandeur of Sandal Tree By SK firsthand. Share your event details below to receive tailored date availability and quotation brochures.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details & Map Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-card border border-border/80 rounded-2xl p-8 shadow-lg space-y-6">
              <h3 className="font-serif text-2xl font-bold text-foreground border-b border-border/50 pb-4">
                Venue Concierge Office
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground block mb-1">Address</span>
                    <p className="text-muted-foreground leading-relaxed">{venueData.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground block mb-1">Direct Phone</span>
                    <a href={`tel:${venueData.phone.replace(/[^0-9+]/g, '')}`} className="text-primary font-medium hover:underline text-base">
                      {venueData.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground block mb-1">Email Concierge</span>
                    <a href={`mailto:${venueData.email}`} className="text-muted-foreground hover:text-white transition-colors">
                      {venueData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Train className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground block mb-1">Transit Landmark</span>
                    <p className="text-muted-foreground">5 mins drive from Anand Vihar Metro Station & Railway Terminal.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border/50 flex items-center gap-2 text-xs text-primary font-medium">
                <Clock className="w-4 h-4" />
                <span>Site inspection tours available daily 10:00 AM – 8:00 PM</span>
              </div>
            </div>

            {/* OpenStreetMap Embed */}
            <div className="bg-card border border-border rounded-2xl p-3 shadow-lg overflow-hidden">
              <div className="aspect-[16/10] w-full rounded-xl overflow-hidden relative">
                <iframe
                  title="Sandal Tree By SK Location Map"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  loading="lazy"
                  allowFullScreen
                  src="https://www.openstreetmap.org/export/embed.html?bbox=77.3300%2C28.6500%2C77.3600%2C28.6800&layer=mapnik&marker=28.6650%2C77.3450"
                ></iframe>
              </div>
              <div className="p-3 text-center">
                <a 
                  href="https://www.openstreetmap.org/?mlat=28.6650&mlon=77.3450#map=15/28.6650/77.3450" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-xs text-primary hover:underline font-medium"
                >
                  View Larger Map & Directions
                </a>
              </div>
            </div>
          </div>

          {/* Form Col */}
          <div className="lg:col-span-7">
            <ContactForm initialSpace={selectedSpace} />
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactPage;