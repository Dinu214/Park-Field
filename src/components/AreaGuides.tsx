import { motion } from "framer-motion";
import { MapPin, TrendingUp, Building } from "lucide-react";
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
    landmarks: ["Marina Walk", "JBR Beach", "Ain Dubai"],
  },
  {
    image: areaPalm,
    name: "Palm Jumeirah",
    description: "The iconic palm-shaped island offering ultra-exclusive beachfront villas and premium resort-style residences.",
    properties: 180,
    trend: "+18%",
    landmarks: ["Atlantis", "The Pointe", "Nakheel Mall"],
  },
  {
    image: areaDowntown,
    name: "Downtown Dubai",
    description: "The beating heart of the city, home to Burj Khalifa, Dubai Mall, and the most prestigious addresses.",
    properties: 320,
    trend: "+15%",
    landmarks: ["Burj Khalifa", "Dubai Mall", "Opera District"],
  },
];

const AreaGuides = () => {
  return (
    <section id="areas" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
            Explore Dubai
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Area Guides
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group rounded-lg overflow-hidden bg-card hover-lift cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={area.image}
                  alt={area.name}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <h3 className="font-display text-2xl font-bold text-foreground">{area.name}</h3>
                  <div className="flex items-center gap-1 text-primary text-sm font-body">
                    <TrendingUp size={14} />
                    <span>{area.trend}</span>
                  </div>
                </div>
              </div>

              <div className="p-5 md:p-6">
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  {area.description}
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <Building size={14} className="text-primary/60" />
                  <span className="text-xs text-muted-foreground font-body">
                    {area.properties}+ Properties Available
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {area.landmarks.map((lm) => (
                    <span
                      key={lm}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-sm text-[10px] font-body tracking-wider uppercase glass-panel text-foreground/70"
                    >
                      <MapPin size={10} className="text-primary/60" />
                      {lm}
                    </span>
                  ))}
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
