import { motion } from "framer-motion";
import { Search } from "lucide-react";
import heroSkyline from "@/assets/hero-skyline.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-24 md:pb-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroSkyline}
          alt="Dubai skyline at twilight"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-body text-xs tracking-[0.4em] uppercase text-white/70 mb-4"
        >
          Dubai's Trusted Real Estate Partner
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6 text-white"
        >
          Find Your Perfect
          <br />
          <span className="italic font-normal">Home in Dubai</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-body text-base md:text-lg text-white/70 max-w-lg mb-10"
        >
          Buying, selling, renting or investing — Park Field delivers clarity,
          expertise and exceptional outcomes in Dubai real estate.
        </motion.p>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="max-w-2xl"
        >
          <div className="flex flex-col sm:flex-row gap-0 bg-white rounded-md overflow-hidden shadow-lg">
            <div className="flex border-b sm:border-b-0 sm:border-r border-border">
              <button className="px-5 py-4 font-body text-sm font-medium text-primary bg-primary/5 tracking-wide uppercase">
                Buy
              </button>
              <button className="px-5 py-4 font-body text-sm text-muted-foreground hover:text-foreground tracking-wide uppercase transition-colors">
                Rent
              </button>
            </div>
            <div className="flex-1 flex items-center px-4">
              <input
                type="text"
                placeholder="Community or building"
                className="w-full py-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none bg-transparent"
              />
            </div>
            <button className="p-4 bg-primary hover:bg-accent text-primary-foreground transition-colors flex items-center justify-center">
              <Search size={20} />
            </button>
          </div>
          <div className="flex gap-4 mt-3">
            <span className="font-body text-[11px] tracking-wider uppercase text-white/50">Residential</span>
            <span className="font-body text-[11px] tracking-wider uppercase text-white/50">Commercial</span>
            <span className="font-body text-[11px] tracking-wider uppercase text-white/50">Off Plan</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 right-8 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-body tracking-[0.3em] uppercase text-white/40">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
