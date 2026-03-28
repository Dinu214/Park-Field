import { motion } from "framer-motion";
import { Eye, Bed, Bath, Maximize } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";

const properties = [
  {
    image: property1,
    title: "Skyline Penthouse",
    location: "Downtown Dubai",
    price: "AED 18,500,000",
    beds: 4,
    baths: 5,
    sqft: "6,200",
    view: "Burj Khalifa",
  },
  {
    image: property2,
    title: "Marina Waterfront Villa",
    location: "Dubai Marina",
    price: "AED 32,000,000",
    beds: 6,
    baths: 7,
    sqft: "12,400",
    view: "Sea View",
  },
  {
    image: property3,
    title: "Boulevard Residence",
    location: "Downtown Dubai",
    price: "AED 8,900,000",
    beds: 3,
    baths: 4,
    sqft: "3,800",
    view: "City Skyline",
  },
  {
    image: property4,
    title: "Palm Beach Estate",
    location: "Palm Jumeirah",
    price: "AED 55,000,000",
    beds: 7,
    baths: 9,
    sqft: "18,000",
    view: "Private Beach",
  },
];

const FeaturedProperties = () => {
  return (
    <section id="listings" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
            Curated Collection
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Featured Properties
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {properties.map((prop, i) => (
            <motion.article
              key={prop.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-lg overflow-hidden bg-card hover-lift cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={prop.image}
                  alt={prop.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
                
                {/* View badge */}
                <div className="absolute top-4 right-4 glass-panel px-3 py-1.5 rounded-sm flex items-center gap-1.5">
                  <Eye size={12} className="text-primary" />
                  <span className="text-[10px] font-body tracking-wider uppercase text-foreground/80">
                    {prop.view}
                  </span>
                </div>
              </div>

              <div className="p-5 md:p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {prop.title}
                    </h3>
                    <p className="font-body text-xs tracking-wider text-muted-foreground mt-1">
                      {prop.location}
                    </p>
                  </div>
                  <p className="font-display text-lg font-semibold text-primary">
                    {prop.price}
                  </p>
                </div>

                <div className="flex items-center gap-5 pt-3 border-t border-border">
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Bed size={14} className="text-primary/60" /> {prop.beds} Beds
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Bath size={14} className="text-primary/60" /> {prop.baths} Baths
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Maximize size={14} className="text-primary/60" /> {prop.sqft} sqft
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
