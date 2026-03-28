import { useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, ChevronDown, X, MapPin } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import areaMarina from "@/assets/area-marina.jpg";
import areaPalm from "@/assets/area-palm.jpg";
import areaDowntown from "@/assets/area-downtown.jpg";

const allProperties = [
  { image: property1, title: "Skyline Penthouse", location: "Downtown Dubai", price: "AED 18,500,000", beds: 4, baths: 5, sqft: "6,200", tag: "For Sale", tagVariant: "gold" as const, slug: "skyline-penthouse", type: "buy" },
  { image: property2, title: "Marina Waterfront Villa", location: "Dubai Marina", price: "AED 32,000,000", beds: 6, baths: 7, sqft: "12,400", tag: "For Sale", tagVariant: "gold" as const, slug: "marina-waterfront-villa", type: "buy" },
  { image: property3, title: "Boulevard Residence", location: "Downtown Dubai", price: "AED 8,900,000", beds: 3, baths: 4, sqft: "3,800", tag: "For Sale", tagVariant: "gold" as const, slug: "boulevard-residence", type: "buy" },
  { image: property4, title: "Palm Beach Estate", location: "Palm Jumeirah", price: "AED 55,000,000", beds: 7, baths: 9, sqft: "18,000", tag: "For Sale", tagVariant: "gold" as const, slug: "palm-beach-estate", type: "buy" },
  { image: areaMarina, title: "Harbour View Apartment", location: "Dubai Marina", price: "AED 18,500 / mo", beds: 2, baths: 2, sqft: "1,450", tag: "For Rent", tagVariant: "navy" as const, slug: "harbour-view-apt", type: "rent" },
  { image: areaPalm, title: "Palm Frond Villa", location: "Palm Jumeirah", price: "AED 95,000 / mo", beds: 5, baths: 6, sqft: "8,200", tag: "For Rent", tagVariant: "navy" as const, slug: "palm-frond-villa", type: "rent" },
  { image: areaDowntown, title: "Opera District Studio", location: "Downtown Dubai", price: "AED 7,500 / mo", beds: 1, baths: 1, sqft: "620", tag: "For Rent", tagVariant: "navy" as const, slug: "opera-district-studio", type: "rent" },
  { image: property1, title: "Business Bay Loft", location: "Business Bay", price: "AED 22,000 / mo", beds: 2, baths: 2, sqft: "1,800", tag: "For Rent", tagVariant: "navy" as const, slug: "business-bay-loft", type: "rent" },
];

const areas = ["All Areas", "Downtown Dubai", "Dubai Marina", "Palm Jumeirah", "Business Bay", "JVC", "DIFC"];
const bedOptions = ["Any", "1", "2", "3", "4", "5+"];
const priceRanges = ["Any Budget", "Under AED 1M", "AED 1M – 3M", "AED 3M – 10M", "AED 10M+"];

const Properties = () => {
  const [params] = useSearchParams();
  const [activeType, setActiveType] = useState<"buy" | "rent">(
    (params.get("type") || "buy") as "buy" | "rent"
  );
  const [query, setQuery] = useState(params.get("q") || "");
  const [selectedArea, setSelectedArea] = useState("All Areas");
  const [selectedBeds, setSelectedBeds] = useState("Any");
  const [selectedPrice, setSelectedPrice] = useState("Any Budget");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = allProperties.filter((p) => {
    if (p.type !== activeType) return false;
    if (selectedArea !== "All Areas" && !p.location.includes(selectedArea)) return false;
    if (selectedBeds !== "Any") {
      const beds = parseInt(selectedBeds);
      if (selectedBeds === "5+" && p.beds < 5) return false;
      if (selectedBeds !== "5+" && p.beds !== beds) return false;
    }
    if (query && !p.title.toLowerCase().includes(query.toLowerCase()) && !p.location.toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page header */}
      <div className="bg-[hsl(var(--navy))] pt-36 pb-16">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="font-body text-xs tracking-[0.35em] uppercase text-primary/80 mb-3">Discover</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
              Properties {activeType === "buy" ? "for Sale" : "for Rent"}
            </h1>
            <p className="font-body text-white/50 text-sm max-w-lg leading-relaxed">
              Browse our curated selection of Dubai's finest residential properties, each one representing exceptional value and quality.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filter Strip */}
      <div className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container-wide py-4">
          <div className="flex flex-wrap items-center gap-3">
            {/* Buy / Rent Toggle */}
            <div className="flex rounded-sm border border-border overflow-hidden">
              {(["buy", "rent"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveType(t)}
                  className={`px-5 py-2.5 font-body text-xs font-semibold tracking-widest uppercase transition-all ${
                    activeType === t ? "bg-primary text-white" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t === "buy" ? "For Sale" : "For Rent"}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="flex-1 min-w-[200px] relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by community or building…"
                className="w-full pl-9 pr-4 py-2.5 rounded-sm border border-border font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary/50"
              />
              {query && (
                <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  <X size={13} />
                </button>
              )}
            </div>

            {/* Area filter */}
            <div className="relative">
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2.5 rounded-sm border border-border font-body text-sm text-foreground/70 focus:outline-none focus:ring-1 focus:ring-primary/30 cursor-pointer bg-white"
              >
                {areas.map((a) => <option key={a}>{a}</option>)}
              </select>
              <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            </div>

            {/* Beds filter */}
            <div className="relative">
              <select
                value={selectedBeds}
                onChange={(e) => setSelectedBeds(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2.5 rounded-sm border border-border font-body text-sm text-foreground/70 focus:outline-none focus:ring-1 focus:ring-primary/30 cursor-pointer bg-white"
              >
                {bedOptions.map((b) => <option key={b}>{b === "Any" ? "Any Beds" : `${b} Beds`}</option>)}
              </select>
              <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            </div>

            {/* Price filter */}
            <div className="relative">
              <select
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2.5 rounded-sm border border-border font-body text-sm text-foreground/70 focus:outline-none focus:ring-1 focus:ring-primary/30 cursor-pointer bg-white"
              >
                {priceRanges.map((p) => <option key={p}>{p}</option>)}
              </select>
              <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="section">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-8">
            <p className="font-body text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{filtered.length}</span> properties found
            </p>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((prop, i) => (
                <motion.div
                  key={prop.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                >
                  <PropertyCard {...prop} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-5">
                <Search size={24} className="text-muted-foreground" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-2">No properties found</h3>
              <p className="font-body text-muted-foreground text-sm mb-6">Try adjusting your filters or search a different area.</p>
              <button onClick={() => { setQuery(""); setSelectedArea("All Areas"); setSelectedBeds("Any"); setSelectedPrice("Any Budget"); }} className="btn-outline">
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Properties;
