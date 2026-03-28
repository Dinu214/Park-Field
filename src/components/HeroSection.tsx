import { motion } from "framer-motion";
import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroSkyline from "@/assets/hero-skyline.jpg";

const tabs = ["Buy", "Rent", "Off Plan"];

const stats = [
  { value: "1,200+", label: "Properties Sold" },
  { value: "AED 4.8B", label: "Transaction Value" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Years in Dubai" },
];

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("Buy");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === "Off Plan") {
      navigate("/off-plan");
    } else {
      navigate(`/properties?type=${activeTab.toLowerCase()}&q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroSkyline}
          alt="Dubai skyline at twilight"
          className="w-full h-full object-cover object-center"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/25" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide pb-24 md:pb-32 pt-40">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="section-label text-white/60 mb-5"
        >
          Dubai's Trusted Real Estate Partner
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-hero text-5xl md:text-7xl lg:text-[88px] font-bold leading-[1.0] mb-6 text-white"
        >
          Find Your Perfect
          <br />
          <em className="font-normal italic text-white/85">Home in Dubai</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-body text-base md:text-lg text-white/65 max-w-xl mb-10 leading-relaxed"
        >
          From beachfront villas to sky-high penthouses — Park Field delivers unmatched expertise, 
          discretion, and exceptional outcomes in Dubai's most coveted addresses.
        </motion.p>

        {/* Search Bar */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          onSubmit={handleSearch}
          className="max-w-2xl"
        >
          <div className="bg-white rounded-sm overflow-hidden shadow-2xl flex flex-col sm:flex-row">
            {/* Tabs */}
            <div className="flex border-b sm:border-b-0 sm:border-r border-border">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-4 font-body text-xs font-semibold tracking-widest uppercase transition-all duration-200 whitespace-nowrap ${
                    activeTab === tab
                      ? "text-primary bg-primary/8 border-b-2 sm:border-b-0 sm:border-r-2 border-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            {/* Input */}
            <div className="flex-1 flex items-center px-4 gap-2">
              <Search size={16} className="text-muted-foreground flex-shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search community or building…"
                className="w-full py-4 font-body text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none bg-transparent"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-4 bg-primary hover:bg-accent text-white transition-colors duration-250 flex items-center justify-center gap-2 font-body text-xs font-semibold tracking-widest uppercase"
            >
              Search
            </button>
          </div>
          <div className="flex items-center gap-5 mt-3">
            {["Dubai Marina", "Palm Jumeirah", "Downtown Dubai", "Business Bay"].map((area) => (
              <button
                key={area}
                type="button"
                onClick={() => { setQuery(area); }}
                className="font-body text-[11px] tracking-wider uppercase text-white/45 hover:text-white/75 transition-colors"
              >
                {area}
              </button>
            ))}
          </div>
        </motion.form>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="relative z-10 glass-dark"
      >
        <div className="container-wide py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="px-6 py-2 first:pl-0">
                <p className="font-body text-2xl font-bold text-white">{stat.value}</p>
                <p className="font-body text-[11px] tracking-wider uppercase text-white/45 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-28 right-8 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-body tracking-[0.4em] uppercase text-white/35 rotate-90 origin-center translate-y-6">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/35 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
