import { motion } from "framer-motion";
import { Search, KeyRound, Building2, Handshake } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    desc: "Share your vision. We listen to understand your lifestyle, preferences, and investment goals.",
  },
  {
    icon: Building2,
    title: "Curated Selection",
    desc: "Receive a handpicked portfolio of properties matching your exact criteria — no noise, only relevance.",
  },
  {
    icon: KeyRound,
    title: "Private Viewings",
    desc: "Experience properties with exclusive 3D tours and private in-person viewings at your convenience.",
  },
  {
    icon: Handshake,
    title: "Seamless Closing",
    desc: "From negotiation to handover, our specialists handle every detail for a frictionless transaction.",
  },
];

const JourneySection = () => {
  return (
    <section id="journey" className="py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
            How It Works
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            The Journey
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full glass-panel gold-border flex items-center justify-center group-hover:gold-glow transition-all duration-500">
                <step.icon size={24} className="text-primary" />
              </div>
              <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-2 font-display text-6xl font-bold text-primary/5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
