import { motion } from "framer-motion";
import { Bed, Bath, Maximize, ArrowRight } from "lucide-react";
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
    tag: "Featured",
  },
  {
    image: property2,
    title: "Marina Waterfront Villa",
    location: "Dubai Marina",
    price: "AED 32,000,000",
    beds: 6,
    baths: 7,
    sqft: "12,400",
    tag: "Exclusive",
  },
  {
    image: property3,
    title: "Boulevard Residence",
    location: "Downtown Dubai",
    price: "AED 8,900,000",
    beds: 3,
    baths: 4,
    sqft: "3,800",
    tag: "New",
  },
  {
    image: property4,
    title: "Palm Beach Estate",
    location: "Palm Jumeirah",
    price: "AED 55,000,000",
    beds: 7,
    baths: 9,
    sqft: "18,000",
    tag: "Premium",
  },
];

const FeaturedProperties = () => {
  return (
    <section id="listings" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
              Featured Listings
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Premium Properties
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 font-body text-sm text-primary hover:text-accent transition-colors group"
          >
            View All
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {properties.map((prop, i) => (
            <motion.article
              key={prop.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group rounded-lg overflow-hidden bg-card border border-border hover-lift cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={prop.image}
                  alt={prop.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground font-body text-[10px] tracking-widest uppercase rounded-sm">
                    {prop.tag}
                  </span>
                </div>
              </div>

              <div className="p-5 md:p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {prop.title}
                    </h3>
                    <p className="font-body text-xs tracking-wider text-muted-foreground mt-1">
                      {prop.location}
                    </p>
                  </div>
                  <p className="font-body text-sm font-semibold text-primary">
                    {prop.price}
                  </p>
                </div>

                <div className="flex items-center gap-5 pt-4 mt-4 border-t border-border">
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-body">
                    <Bed size={14} className="text-primary/60" /> {prop.beds} Beds
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-body">
                    <Bath size={14} className="text-primary/60" /> {prop.baths} Baths
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-body">
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
