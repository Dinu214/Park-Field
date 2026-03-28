import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="connect" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Speak to a View Specialist
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
                { icon: Mail, label: "inquiries@parkfield.ae", sub: "Response within 2 hours" },
                { icon: MapPin, label: "DIFC, Dubai, UAE", sub: "Gate Avenue, Tower 2" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full glass-panel gold-border flex items-center justify-center flex-shrink-0">
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
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
                RERA License: XXXXX
              </p>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                RERA License of Albayan REG: XXXXXXXX
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
              <div className="glass-panel rounded-lg p-10 text-center gold-border">
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
                className="glass-panel rounded-lg p-8 gold-border space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    required
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  <input
                    required
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
                <select
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-sm font-body text-sm text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                >
                  <option value="">I'm interested in...</option>
                  <option>Buying a Property</option>
                  <option>Selling a Property</option>
                  <option>Investment Advisory</option>
                  <option>Property Management</option>
                </select>
                <textarea
                  rows={3}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-3.5 font-body text-sm tracking-widest uppercase rounded-sm transition-all duration-300 hover:opacity-90"
                  style={{
                    background: "var(--gradient-gold)",
                    color: "hsl(var(--primary-foreground))",
                    boxShadow: "var(--shadow-gold)",
                  }}
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
