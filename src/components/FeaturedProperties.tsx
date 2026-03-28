import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PropertyCard from "./PropertyCard";
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
    tagVariant: "gold" as const,
    slug: "skyline-penthouse",
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
    tagVariant: "navy" as const,
    slug: "marina-waterfront-villa",
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
    tagVariant: "green" as const,
    slug: "boulevard-residence",
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
    tagVariant: "gold" as const,
    slug: "palm-beach-estate",
  },
];

const FeaturedProperties = () => {
  return (
    <section id="listings" className="section bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <p className="section-label mb-3">Featured Listings</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Premium Properties
            </h2>
            <div className="divider mt-4" />
          </div>
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 font-body text-sm text-primary hover:text-accent transition-colors group"
          >
            View All Properties
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {properties.map((prop, i) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <PropertyCard {...prop} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/properties" className="btn-outline">
            Browse All Listings
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
