import { motion } from "framer-motion";
import heroSkyline from "@/assets/hero-skyline.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroSkyline}
          alt="Dubai skyline at twilight"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Glass lens sphere */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 rounded-full opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 35% 35%, hsla(0,0%,100%,0.2), hsla(0,0%,100%,0.02) 60%, transparent)",
          border: "1px solid hsla(0,0%,100%,0.1)",
          boxShadow: "0 0 80px hsla(38,60%,55%,0.1), inset 0 0 60px hsla(0,0%,100%,0.05)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-6"
        >
          A New Realm of Dubai Luxury
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8 text-foreground"
        >
          Unearth Your
          <br />
          <span className="gold-gradient-text">Sanctuary.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-body text-sm md:text-base text-muted-foreground max-w-md mx-auto mb-10"
        >
          Discover exclusive properties curated for those who seek the extraordinary in Dubai's most prestigious addresses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#listings"
            className="inline-flex items-center justify-center px-8 py-3.5 font-body text-sm tracking-widest uppercase rounded-sm transition-all duration-300"
            style={{
              background: "var(--gradient-gold)",
              color: "hsl(var(--primary-foreground))",
              boxShadow: "var(--shadow-gold)",
            }}
          >
            Explore Properties
          </a>
          <a
            href="#connect"
            className="inline-flex items-center justify-center px-8 py-3.5 font-body text-sm tracking-widest uppercase rounded-sm gold-border text-primary hover:bg-primary/10 transition-all duration-300"
          >
            Speak to a Specialist
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-body tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-primary/60 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
