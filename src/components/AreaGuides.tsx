import { motion } from "framer-motion";
import { MapPin, TrendingUp, ArrowRight } from "lucide-react";
import areaMarina from "@/assets/area-marina.jpg";
import areaPalm from "@/assets/area-palm.jpg";
import areaDowntown from "@/assets/area-downtown.jpg";

const areas = [
  {
    image: areaMarina,
    name: "Dubai Marina",
    description: "A vibrant waterfront community with stunning marina views, world-class dining, and luxury high-rise living.",
    properties: 240,
    trend: "+12%",
  },
  {
    image: areaPalm,
    name: "Palm Jumeirah",
    description: "The iconic palm-shaped island offering ultra-exclusive beachfront villas and premium resort-style residences.",
    properties: 180,
    trend: "+18%",
  },
  {
    image: areaDowntown,
    name: "Downtown Dubai",
    description: "The beating heart of the city, home to Burj Khalifa, Dubai Mall, and the most prestigious addresses.",
    properties: 320,
    trend: "+15%",
  },
];

const AreaGuides = () => {
  return (
    <section id="areas" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
              Explore Dubai
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Area Guides
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 font-body text-sm text-primary hover:text-accent transition-colors group"
          >
            All Areas
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="group rounded-lg overflow-hidden border border-border hover-lift cursor-pointer bg-card"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={area.image}
                  alt={area.name}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <h3 className="font-display text-2xl font-bold text-white">{area.name}</h3>
                  <div className="flex items-center gap-1 text-white/90 text-sm font-body bg-primary/80 px-2 py-0.5 rounded-sm">
                    <TrendingUp size={12} />
                    <span>{area.trend}</span>
                  </div>
                </div>
              </div>

              <div className="p-5 md:p-6">
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  {area.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-primary/60" />
                    <span className="text-xs text-muted-foreground font-body">
                      {area.properties}+ Properties
                    </span>
                  </div>
                  <span className="font-body text-xs text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreaGuides;
