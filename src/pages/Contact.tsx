import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageSquare, Building, Users } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const offices = [
  {
    name: "Dubai HQ — DIFC",
    address: "Gate Avenue, Tower 2, Level 14\nDIFC, Dubai, UAE",
    phone: "+971 4 XXX XXXX",
    email: "difc@parkfield.ae",
    hours: "Mon–Sat 9:00am – 7:00pm",
    mapEmbed: "https://maps.googleapis.com/maps/api/staticmap?center=DIFC,Dubai&zoom=14&size=600x300&key=YOUR_KEY",
  },
  {
    name: "Dubai Marina Office",
    address: "Marina Plaza, Level 3\nDubai Marina, Dubai, UAE",
    phone: "+971 4 XXX XXXX",
    email: "marina@parkfield.ae",
    hours: "Mon–Sat 9:00am – 7:00pm",
  },
];

const inquiryTypes = [
  "Buying a Property",
  "Selling a Property",
  "Renting a Property",
  "Off-Plan Investment",
  "Property Valuation",
  "Market Report",
  "General Inquiry",
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    type: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <div className="bg-[hsl(var(--navy))] pt-36 pb-20">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="font-body text-xs tracking-[0.35em] uppercase text-primary/80 mb-3">Get In Touch</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
              Let's Start a Conversation
            </h1>
            <p className="font-body text-white/50 text-sm max-w-lg leading-relaxed">
              Whether you're ready to buy, rent, sell, or simply want to understand the market, 
              our specialists are here to help. No pressure, no obligation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Quick contact cards */}
      <div className="container-wide -mt-8 relative z-10 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: Phone, title: "Call Us", info: "+971 55 555 5555", sub: "Available Mon–Sat, 9am–7pm" },
            { icon: Mail, title: "Email Us", info: "info@parkfield.ae", sub: "Reply within 2 business hours" },
            { icon: Clock, title: "WhatsApp", info: "+971 55 555 5555", sub: "Instant response during office hours" },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.3 }}
              className="bg-white rounded-sm border border-border shadow-sm p-6 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-sm bg-primary/8 border border-primary/15 flex items-center justify-center flex-shrink-0">
                <card.icon size={16} className="text-primary" />
              </div>
              <div>
                <p className="font-body text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">{card.title}</p>
                <p className="font-display text-sm font-semibold text-foreground">{card.info}</p>
                <p className="font-body text-[11px] text-muted-foreground mt-0.5">{card.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Form + Office Info */}
      <div className="section pt-0">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              <p className="section-label mb-3">Send Us a Message</p>
              <h2 className="font-display text-3xl font-bold text-foreground mb-2">Enquiry Form</h2>
              <div className="divider mb-8" />

              {submitted ? (
                <div className="bg-card border border-border rounded-sm p-14 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                    <span className="text-primary text-2xl font-body">✓</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">Thank You!</h3>
                  <p className="font-body text-muted-foreground text-sm max-w-xs mx-auto leading-relaxed">
                    Your message has been received. A Park Field specialist will contact you within 2 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card border border-border rounded-sm p-8 space-y-5">
                  {/* Name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">First Name *</label>
                      <input
                        required
                        type="text"
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        className="input-field"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">Last Name *</label>
                      <input
                        required
                        type="text"
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                        className="input-field"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">Email *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="input-field"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">Phone (with country code)</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="input-field"
                        placeholder="+971 55 555 5555"
                      />
                    </div>
                  </div>

                  {/* Inquiry type */}
                  <div>
                    <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">I'm Interested In *</label>
                    <select
                      required
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                      className="input-field appearance-none cursor-pointer"
                    >
                      <option value="">Select inquiry type…</option>
                      {inquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">Budget Range</label>
                    <select
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className="input-field appearance-none cursor-pointer"
                    >
                      <option value="">Select budget range…</option>
                      <option>Under AED 1M</option>
                      <option>AED 1M – AED 3M</option>
                      <option>AED 3M – AED 10M</option>
                      <option>AED 10M – AED 30M</option>
                      <option>AED 30M+</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">Your Message</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="input-field resize-none"
                      placeholder="Tell us about your requirements, preferred locations, timeline, etc."
                    />
                  </div>

                  <button type="submit" className="w-full btn-primary justify-center py-4 text-sm tracking-widest">
                    Send Message
                  </button>

                  <p className="font-body text-[11px] text-muted-foreground text-center">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Office info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <p className="section-label mb-3">Our Offices</p>
                <h2 className="font-display text-3xl font-bold text-foreground mb-2">Visit Us</h2>
                <div className="divider mb-8" />
              </div>

              {offices.map((office) => (
                <div key={office.name} className="bg-card border border-border rounded-sm p-6 space-y-4">
                  <h3 className="font-display text-lg font-semibold text-foreground">{office.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin size={14} className="text-primary/60 mt-0.5 flex-shrink-0" />
                      <p className="font-body text-sm text-muted-foreground whitespace-pre-line">{office.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={14} className="text-primary/60 flex-shrink-0" />
                      <p className="font-body text-sm text-muted-foreground">{office.phone}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail size={14} className="text-primary/60 flex-shrink-0" />
                      <p className="font-body text-sm text-muted-foreground">{office.email}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock size={14} className="text-primary/60 flex-shrink-0" />
                      <p className="font-body text-sm text-muted-foreground">{office.hours}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div className="bg-secondary rounded-sm border border-border overflow-hidden aspect-video flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={28} className="text-primary/40 mx-auto mb-2" />
                  <p className="font-body text-xs text-muted-foreground">Interactive Map</p>
                  <p className="font-body text-[10px] text-muted-foreground/60">DIFC, Dubai, UAE</p>
                </div>
              </div>

              {/* Credentials */}
              <div className="p-5 bg-secondary/50 border border-border rounded-sm">
                <p className="font-body text-[10px] uppercase tracking-widest text-muted-foreground mb-3">Licences & Accreditations</p>
                <div className="grid grid-cols-3 gap-2">
                  {["RERA\nRegistered", "DED\nLicensed", "RICS\nMember"].map((badge) => (
                    <div key={badge} className="text-center border border-border rounded-sm py-3 px-2 bg-white">
                      <p className="font-body text-[10px] font-semibold uppercase tracking-wide text-foreground/60 whitespace-pre-line leading-tight">{badge}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
