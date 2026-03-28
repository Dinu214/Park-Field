import { motion } from "framer-motion";
import { Search, Building2, KeyRound, Handshake, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery",
    desc: "Share your vision. We listen deeply to understand your lifestyle, preferences, and investment ambitions.",
  },
  {
    icon: Building2,
    number: "02",
    title: "Curated Selection",
    desc: "Receive a handpicked portfolio of properties matching your exact criteria — no noise, only relevance.",
  },
  {
    icon: KeyRound,
    number: "03",
    title: "Private Viewings",
    desc: "Experience properties with exclusive in-person viewings and virtual 3D tours, at your convenience.",
  },
  {
    icon: Handshake,
    number: "04",
    title: "Seamless Closing",
    desc: "From offer negotiation to final handover, our specialists handle every detail for a completely frictionless transaction.",
  },
];

const JourneySection = () => {
  return (
    <section id="journey" className="section bg-secondary/50">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <p className="section-label mb-3">How It Works</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Your Journey With Us
          </h2>
          <div className="divider mt-4" />
          <p className="font-body text-muted-foreground mt-5 leading-relaxed">
            We have built our reputation on a process that respects your time and maximises your outcome.
            Here's what to expect when you work with Park Field.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="relative group"
            >
              {/* Step number + icon */}
              <div className="mb-6 flex items-center gap-4">
                <div className="relative z-10 w-14 h-14 rounded-sm bg-white border border-border/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex items-center justify-center group-hover:border-primary/40 group-hover:shadow-[var(--shadow-gold)] transition-all duration-400">
                  <step.icon size={22} className="text-primary/70 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                </div>
              </div>

              <p className="font-body text-[10px] font-bold tracking-[0.2em] uppercase text-primary/70 mb-2">
                Step {step.number}
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="font-body text-[13px] text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-14 flex flex-col sm:flex-row gap-4"
        >
          <Link to="/contact" className="btn-primary">
            Start Your Journey
            <ArrowRight size={15} />
          </Link>
          <Link to="/about" className="btn-outline">
            Learn About Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;
