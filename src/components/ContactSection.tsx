import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="connect" className="section bg-[hsl(var(--navy))]">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-body text-xs tracking-[0.35em] uppercase text-primary/80 mb-3">Get In Touch</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
            Speak With Our Experts
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mt-4" />
          <p className="font-body text-white/50 text-sm mt-5 max-w-md mx-auto leading-relaxed">
            Whether you're buying, selling, renting, or investing — our specialists are ready to deliver clarity and exceptional outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="space-y-5">
              {[
                { icon: Phone, label: "+971 55 555 5555", sub: "Available 7 days a week, 9am – 7pm" },
                { icon: Mail, label: "info@parkfield.ae", sub: "Response within 2 business hours" },
                { icon: MapPin, label: "DIFC, Dubai, UAE", sub: "Gate Avenue, Tower 2, Level 14" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-white/90 font-medium">{item.label}</p>
                    <p className="font-body text-xs text-white/40 mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10">
              <p className="font-body text-[11px] uppercase tracking-widest text-white/30 mb-4">Credentials</p>
              <div className="flex gap-4">
                {["RERA Registered", "DED Licensed", "RICS Member"].map((c) => (
                  <span key={c} className="font-body text-[10px] uppercase tracking-wider border border-white/15 text-white/40 px-3 py-1.5 rounded-sm">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <Link to="/contact" className="inline-flex items-center gap-2 btn-primary text-sm">
              Visit Our Full Contact Page
            </Link>
          </motion.div>

          {/* Quick contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <div className="bg-white/5 border border-white/10 rounded-sm p-10 text-center h-full flex flex-col items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-5">
                  <span className="text-primary text-2xl">✓</span>
                </div>
                <p className="font-display text-2xl text-white mb-2">Thank You</p>
                <p className="font-body text-sm text-white/50 max-w-xs">
                  A specialist will be in touch with you shortly. We typically respond within 2 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="bg-white/5 border border-white/10 rounded-sm p-8 space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["First Name", "Last Name"].map((ph) => (
                    <input
                      key={ph}
                      required
                      type="text"
                      placeholder={ph}
                      className="w-full px-4 py-3.5 rounded-sm font-body text-sm text-white placeholder:text-white/30 bg-white/5 border border-white/10 focus:outline-none focus:ring-1 focus:ring-primary/40 focus:border-primary/50 transition-all"
                    />
                  ))}
                </div>
                <input required type="email" placeholder="Email Address"
                  className="w-full px-4 py-3.5 rounded-sm font-body text-sm text-white placeholder:text-white/30 bg-white/5 border border-white/10 focus:outline-none focus:ring-1 focus:ring-primary/40 focus:border-primary/50 transition-all" />
                <input type="tel" placeholder="Phone Number (with country code)"
                  className="w-full px-4 py-3.5 rounded-sm font-body text-sm text-white placeholder:text-white/30 bg-white/5 border border-white/10 focus:outline-none focus:ring-1 focus:ring-primary/40 focus:border-primary/50 transition-all" />
                <select className="w-full px-4 py-3.5 rounded-sm font-body text-sm text-white/50 bg-white/5 border border-white/10 focus:outline-none focus:ring-1 focus:ring-primary/40 transition-all">
                  <option value="">I'm interested in…</option>
                  <option className="text-foreground">Buying a Property</option>
                  <option className="text-foreground">Selling a Property</option>
                  <option className="text-foreground">Renting a Property</option>
                  <option className="text-foreground">Off-Plan Investment</option>
                  <option className="text-foreground">Market Valuation</option>
                </select>
                <textarea rows={3} placeholder="Tell us about your requirements…"
                  className="w-full px-4 py-3.5 rounded-sm font-body text-sm text-white placeholder:text-white/30 bg-white/5 border border-white/10 focus:outline-none focus:ring-1 focus:ring-primary/40 transition-all resize-none" />
                <button type="submit" className="w-full btn-primary justify-center text-sm">
                  Submit Enquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
