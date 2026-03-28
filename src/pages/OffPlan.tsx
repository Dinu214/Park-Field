import { motion } from "framer-motion";
import { ArrowRight, Building, Calendar, TrendingUp, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import areaMarina from "@/assets/area-marina.jpg";
import areaPalm from "@/assets/area-palm.jpg";
import areaDowntown from "@/assets/area-downtown.jpg";

const projects = [
  {
    image: property1,
    title: "Elysian Towers",
    developer: "Emaar Properties",
    location: "Dubai Creek Harbour",
    price: "AED 1,800,000",
    beds: 1,
    baths: 2,
    sqft: "850",
    tag: "New Launch",
    tagVariant: "green" as const,
    slug: "elysian-towers",
    completion: "Q4 2027",
    isOffPlan: true,
    paymentPlan: "50/50",
    roi: "9–12%",
  },
  {
    image: property2,
    title: "Marina Crest Residences",
    developer: "Meraas",
    location: "Dubai Harbour",
    price: "AED 3,200,000",
    beds: 2,
    baths: 3,
    sqft: "1,650",
    tag: "Selling Fast",
    tagVariant: "gold" as const,
    slug: "marina-crest",
    completion: "Q2 2026",
    isOffPlan: true,
    paymentPlan: "60/40",
    roi: "10–14%",
  },
  {
    image: property3,
    title: "The Boulevard Sanctum",
    developer: "Sobha Realty",
    location: "Business Bay",
    price: "AED 2,100,000",
    beds: 2,
    baths: 2,
    sqft: "1,200",
    tag: "Under Construction",
    tagVariant: "navy" as const,
    slug: "boulevard-sanctum",
    completion: "Q1 2028",
    isOffPlan: true,
    paymentPlan: "70/30",
    roi: "8–11%",
  },
  {
    image: areaMarina,
    title: "Harbour Gate Suites",
    developer: "Damac Properties",
    location: "Dubai Creek Harbour",
    price: "AED 950,000",
    beds: 1,
    baths: 1,
    sqft: "680",
    tag: "New Launch",
    tagVariant: "green" as const,
    slug: "harbour-gate",
    completion: "Q3 2027",
    isOffPlan: true,
    paymentPlan: "40/60",
    roi: "7–10%",
  },
  {
    image: areaPalm,
    title: "Palm Frond Mansions",
    developer: "Nakheel",
    location: "Palm Jumeirah",
    price: "AED 12,500,000",
    beds: 5,
    baths: 7,
    sqft: "9,500",
    tag: "Pre-Launch",
    tagVariant: "navy" as const,
    slug: "palm-frond-mansions",
    completion: "Q2 2029",
    isOffPlan: true,
    paymentPlan: "30/70",
    roi: "11–15%",
  },
  {
    image: areaDowntown,
    title: "Vista Downtown",
    developer: "Binghatti",
    location: "Downtown Dubai",
    price: "AED 1,450,000",
    beds: 1,
    baths: 1,
    sqft: "720",
    tag: "Selling Fast",
    tagVariant: "gold" as const,
    slug: "vista-downtown",
    completion: "Q4 2026",
    isOffPlan: true,
    paymentPlan: "50/50",
    roi: "9–13%",
  },
];

const whyOffPlan = [
  { title: "Lower Entry Price", desc: "Buy at developer prices below market value before completion drives up the price." },
  { title: "Flexible Payment Plans", desc: "Spread payments across construction milestones — often just 10–20% down." },
  { title: "Rental Yield Potential", desc: "Dubai's off-plan market consistently delivers 8–15% ROI for savvy investors." },
  { title: "New Generation Amenities", desc: "Ultra-modern facilities, smart home integration, and premium finishing as standard." },
];

const OffPlan = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <div className="bg-[hsl(var(--navy))] pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle at 70% 50%, hsl(38 68% 42%), transparent 60%)" }} />
        <div className="container-wide relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="font-body text-xs tracking-[0.35em] uppercase text-primary/80 mb-3">Investment Opportunity</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
              Off-Plan Projects
            </h1>
            <p className="font-body text-white/50 text-sm max-w-lg leading-relaxed mb-8">
              Invest in Dubai's future. Discover the most sought-after off-plan developments from the UAE's leading developers — handpicked for quality and return potential.
            </p>
            <div className="flex flex-wrap gap-6">
              {[{ val: "85+", lbl: "Active Projects" }, { val: "AED 950K", lbl: "Starting From" }, { val: "15%", lbl: "Avg. ROI Potential" }].map((s) => (
                <div key={s.lbl}>
                  <p className="font-body text-2xl font-bold text-white">{s.val}</p>
                  <p className="font-body text-[11px] uppercase tracking-widest text-white/40">{s.lbl}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Why Off-Plan section */}
      <div className="bg-secondary/50 py-16">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="section-label mb-2">Why Invest Off-Plan</p>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">The Advantages</h2>
            <div className="divider mt-3" />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyOffPlan.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-sm border border-border p-6"
              >
                <CheckCircle2 size={20} className="text-primary mb-4" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="font-body text-[13px] text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="section">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          >
            <div>
              <p className="section-label mb-3">Current Projects</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Handpicked Developments</h2>
              <div className="divider mt-4" />
            </div>
            <p className="font-body text-sm text-muted-foreground">{projects.length} active listings</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex flex-col"
              >
                <PropertyCard {...project} />
                {/* Payment plan + ROI strip */}
                <div className="bg-secondary/70 border border-border border-t-0 rounded-b-sm px-5 py-3 flex items-center justify-between -mt-1">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-primary/60" />
                    <span className="font-body text-[11px] text-muted-foreground">Payment: <span className="text-foreground font-medium">{project.paymentPlan}</span></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <TrendingUp size={12} className="text-primary/60" />
                    <span className="font-body text-[11px] text-muted-foreground">ROI: <span className="text-primary font-semibold">{project.roi}</span></span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 p-10 bg-[hsl(var(--navy))] rounded-sm text-center"
          >
            <p className="font-body text-xs tracking-[0.35em] uppercase text-primary/80 mb-3">Off-Plan Advisory</p>
            <h3 className="font-display text-3xl font-bold text-white mb-4">Not Sure Where to Start?</h3>
            <p className="font-body text-white/50 text-sm max-w-md mx-auto mb-8 leading-relaxed">
              Our dedicated off-plan investment specialists will guide you through the best opportunities tailored to your budget and goals.
            </p>
            <Link to="/contact" className="btn-primary">
              Book a Free Consultation
              <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OffPlan;
