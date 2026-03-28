import { motion } from "framer-motion";
import { MapPin, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import areaMarina from "@/assets/area-marina.jpg";
import areaPalm from "@/assets/area-palm.jpg";
import areaDowntown from "@/assets/area-downtown.jpg";

const areas = [
  {
    image: areaMarina,
    name: "Dubai Marina",
    description: "A vibrant waterfront community offering stunning marina views, world-class dining, and luxury high-rise living steps from the beach.",
    properties: 240,
    trend: "+12%",
    avgPrice: "AED 2.4M",
  },
  {
    image: areaPalm,
    name: "Palm Jumeirah",
    description: "The iconic palm-shaped island — ultra-exclusive beachfront villas and premium resort-style residences with private beach access.",
    properties: 180,
    trend: "+18%",
    avgPrice: "AED 8.2M",
  },
  {
    image: areaDowntown,
    name: "Downtown Dubai",
    description: "The city's beating heart, home to Burj Khalifa, Dubai Mall, and Dubai's most prestigious and sought-after addresses.",
    properties: 320,
    trend: "+15%",
    avgPrice: "AED 3.1M",
  },
];

const AreaGuides = () => {
  return (
    <section id="areas" className="section bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <p className="section-label mb-3">Explore Dubai</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Neighbourhood Guides
            </h2>
            <div className="divider mt-4" />
          </div>
          <a
            href="#areas"
            className="inline-flex items-center gap-2 font-body text-sm text-primary hover:text-accent transition-colors group"
          >
            All Neighbourhoods
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
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
              className="group rounded-sm overflow-hidden border border-border card-lift bg-card cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={area.image}
                  alt={area.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />

                {/* Overlay info */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <h3 className="font-display text-2xl font-bold text-white leading-tight">{area.name}</h3>
                  <div className="flex items-center gap-1 text-white text-xs font-body font-semibold bg-primary/90 px-2.5 py-1 rounded-sm">
                    <TrendingUp size={11} />
                    <span>{area.trend}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <p className="font-body text-[13px] text-muted-foreground leading-relaxed mb-5">
                  {area.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-primary/50" />
                      <span className="text-[11px] text-muted-foreground font-body">{area.properties}+ Properties</span>
                    </div>
                    <div>
                      <span className="text-[11px] text-muted-foreground font-body">Avg: <span className="text-foreground font-medium">{area.avgPrice}</span></span>
                    </div>
                  </div>
                  <span className="font-body text-xs text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                    Explore <ArrowRight size={11} />
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
