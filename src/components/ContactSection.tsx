import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="connect" className="py-20 md:py-28 bg-secondary/40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
            Get In Touch
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Speak With Our Experts
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="font-body text-muted-foreground leading-relaxed">
              Whether you're seeking a sea-facing penthouse or a private villa retreat, our specialists
              bring unmatched local expertise and discretion to every transaction.
            </p>

            <div className="space-y-5">
              {[
                { icon: Phone, label: "+971 4 XXX XXXX", sub: "Available 7 days a week" },
                { icon: Mail, label: "info@parkfield.ae", sub: "Response within 2 hours" },
                { icon: MapPin, label: "DIFC, Dubai, UAE", sub: "Gate Avenue, Tower 2" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <item.icon size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-foreground">{item.label}</p>
                    <p className="font-body text-xs text-muted-foreground">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <p className="font-body text-[11px] tracking-wider text-muted-foreground">
                RERA Registered | DED Licensed
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="bg-card rounded-lg p-10 text-center border border-border shadow-sm">
                <p className="font-display text-2xl text-foreground mb-2">Thank You</p>
                <p className="font-body text-sm text-muted-foreground">
                  A specialist will be in touch shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="bg-card rounded-lg p-8 border border-border shadow-sm space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    required
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-md font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                  />
                  <input
                    required
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-md font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                  />
                </div>
                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-md font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-md font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                />
                <select
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-md font-body text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                >
                  <option value="">I'm interested in...</option>
                  <option>Buying a Property</option>
                  <option>Selling a Property</option>
                  <option>Renting a Property</option>
                  <option>Off-Plan Investment</option>
                </select>
                <textarea
                  rows={3}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-md font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-3.5 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-md hover:bg-accent transition-colors duration-300"
                >
                  Submit Inquiry
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
