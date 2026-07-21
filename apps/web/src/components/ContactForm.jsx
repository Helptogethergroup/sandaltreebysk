import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

const ContactForm = ({ initialSpace = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: initialSpace ? "Wedding" : "Wedding",
    date: "",
    message: initialSpace ? `I would like to inquire about ${initialSpace}.` : ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email address is required";
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      newErrors.phone = "Valid phone number (at least 10 digits) is required";
    }
    if (!formData.date) newErrors.date = "Event date is required";
    if (!formData.message.trim()) newErrors.message = "Please share a few details about your event";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please resolve the errors in the form.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      // Store in localStorage
      const inquiries = JSON.parse(localStorage.getItem('sandal_tree_inquiries') || '[]');
      inquiries.push({ ...formData, id: Date.now(), timestamp: new Date().toISOString() });
      localStorage.setItem('sandal_tree_inquiries', JSON.stringify(inquiries));

      setIsSubmitting(false);
      setSubmitted(true);
      toast.success("Your consultation request has been received!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "Wedding",
        date: "",
        message: ""
      });
    }, 1000);
  };

  return (
    <div className="bg-card border border-border/80 rounded-2xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-full pointer-events-none" />

      <h3 className="font-serif text-3xl font-bold text-foreground mb-2">
        Request a Private Consultation
      </h3>
      <p className="text-muted-foreground mb-8 text-sm">
        Connect with our venue specialists to discuss dates, bespoke décor, and culinary tastings.
      </p>

      {submitted && (
        <div className="mb-8 p-4 bg-primary/10 border border-primary/30 rounded-xl flex items-start gap-3.5 text-foreground animate-in fade-in">
          <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-base mb-1">Thank you for getting in touch!</h4>
            <p className="text-sm text-muted-foreground">
              Our dedicated concierge team has safely logged your request and will contact you within 24 hours.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Ananya Sharma"
              className={`w-full px-4 py-3 rounded-xl bg-background border ${errors.name ? 'border-destructive' : 'border-border'} text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all`}
            />
            {errors.name && (
              <p className="mt-1.5 text-xs text-destructive flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ananya@example.com"
              className={`w-full px-4 py-3 rounded-xl bg-background border ${errors.email ? 'border-destructive' : 'border-border'} text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all`}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-destructive flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className={`w-full px-4 py-3 rounded-xl bg-background border ${errors.phone ? 'border-destructive' : 'border-border'} text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all`}
            />
            {errors.phone && (
              <p className="mt-1.5 text-xs text-destructive flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
              </p>
            )}
          </div>

          {/* Event Type */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Event Category
            </label>
            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            >
              <option value="Wedding">Wedding Ceremony</option>
              <option value="Reception">Reception & Gala</option>
              <option value="Party">Cocktail Party / Sangeet</option>
              <option value="Corporate">Corporate Event</option>
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Estimated Date *
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl bg-background border ${errors.date ? 'border-destructive' : 'border-border'} text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all`}
            />
            {errors.date && (
              <p className="mt-1.5 text-xs text-destructive flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.date}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Event Vision & Guest Count *
          </label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your estimated guest count, preferred spaces, catering preferences, or custom décor themes..."
            className={`w-full px-4 py-3 rounded-xl bg-background border ${errors.message ? 'border-destructive' : 'border-border'} text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none`}
          ></textarea>
          {errors.message && (
            <p className="mt-1.5 text-xs text-destructive flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold tracking-wide transition-all duration-300 hover:bg-primary/90 active:scale-[0.98] shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <span>Sending Request...</span>
          ) : (
            <>
              <span>Submit Inquiry</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;