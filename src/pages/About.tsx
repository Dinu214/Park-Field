import { motion } from "framer-motion";
import { Award, Users, Globe, TrendingUp, ArrowRight, Linkedin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Award,
    title: "Excellence",
    desc: "We uphold the highest standards in every interaction — from the first consultation to the final handover.",
  },
  {
    icon: Users,
    title: "Client First",
    desc: "Your goals drive everything. We listen, understand, and deliver solutions that are truly aligned with your interests.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "With clients and partners spanning 40+ countries, we bring a global perspective to every Dubai transaction.",
  },
  {
    icon: TrendingUp,
    title: "Market Mastery",
    desc: "15+ years of deep Dubai market intelligence — from off-plan launches to ultra-prime secondary sales.",
  },
];

const team = [
  {
    name: "Karim Al-Hassan",
    role: "CEO & Co-Founder",
    bio: "15+ years in Dubai real estate. Former Director at Emaar Properties. Expert in ultra-prime residential and commercial investments.",
    phone: "+971 55 111 2222",
    email: "karim@parkfield.ae",
  },
  {
    name: "Sarah Mitchell",
    role: "Head of Sales",
    bio: "10 years specialising in Dubai Marina and Palm Jumeirah. Consistently ranked in Dubai's top 1% of brokers by transaction volume.",
    phone: "+971 55 333 4444",
    email: "sarah@parkfield.ae",
  },
  {
    name: "Omar Farouq",
    role: "Off-Plan Investment Director",
    bio: "Specialist in off-plan acquisitions and developer relations. Has facilitated AED 1.2B+ in off-plan transactions across the UAE.",
    phone: "+971 55 555 6666",
    email: "omar@parkfield.ae",
  },
  {
    name: "Priya Sharma",
    role: "Client Relations Manager",
    bio: "Multilingual advisor fluent in English, Hindi, and Arabic. Dedicated to ensuring a seamless, stress-free experience for every client.",
    phone: "+971 55 777 8888",
    email: "priya@parkfield.ae",
  },
  {
    name: "David Beaumont",
    role: "Senior Sales Associate",
    bio: "Specialises in luxury villas and waterfront properties for international HNW clients. Previously with Knight Frank Dubai.",
    phone: "+971 55 999 0000",
    email: "david@parkfield.ae",
  },
  {
    name: "Fatima Al-Razi",
    role: "Property Consultant",
    bio: "Rising star in Dubai's rental and short-term investment market. Known for her meticulous research and client-focused approach.",
    phone: "+971 55 111 3333",
    email: "fatima@parkfield.ae",
  },
];

const milestones = [
  { year: "2009", event: "Park Field founded in DIFC, Dubai" },
  { year: "2012", event: "First AED 100M transaction milestone" },
  { year: "2015", event: "Expanded to off-plan advisory services" },
  { year: "2018", event: "Opened international investor desk" },
  { year: "2021", event: "AED 1B+ annual transaction volume achieved" },
  { year: "2024", event: "Named Top Boutique Agency by Arabian Business" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <div className="bg-[hsl(var(--navy))] pt-36 pb-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle at 60% 40%, hsl(38 68% 42%), transparent 70%)" }} />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="font-body text-xs tracking-[0.35em] uppercase text-primary/80 mb-3">Our Story</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Dubai's Most Trusted<br />
              <em className="font-normal italic text-white/75">Real Estate Partner</em>
            </h1>
            <p className="font-body text-white/55 text-base leading-relaxed max-w-xl">
              Founded in 2009, Park Field has grown from a boutique DIFC agency into one of Dubai's 
              most respected real estate firms — built on a foundation of integrity, expertise, and an 
              unwavering commitment to our clients.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-secondary/50 border-b border-border">
        <div className="container-wide py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: "15+", lbl: "Years in Dubai" },
              { val: "AED 4.8B", lbl: "Total Transaction Value" },
              { val: "1,200+", lbl: "Happy Clients" },
              { val: "40+", lbl: "Countries Represented" },
            ].map((s) => (
              <motion.div
                key={s.lbl}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="font-body text-3xl md:text-4xl font-bold text-primary">{s.val}</p>
                <p className="font-body text-[11px] uppercase tracking-widest text-muted-foreground mt-1">{s.lbl}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="section">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="section-label mb-3">Our Mission</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5">
                We Don't Just Sell Properties
              </h2>
              <div className="divider mb-6" />
              <p className="font-body text-muted-foreground leading-relaxed mb-5">
                At Park Field, we believe that real estate is fundamentally about people. Every transaction 
                is a life decision — whether it's a family finding their forever home, an investor building 
                generational wealth, or an executive relocating for a new chapter.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Our mission is to be the most trusted and knowledgeable real estate partner in Dubai — 
                delivering clarity, expertise, and truly exceptional outcomes through every step of your journey.
              </p>
              <Link to="/contact" className="btn-primary">
                Work With Us
                <ArrowRight size={15} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-5 p-6 bg-card border border-border rounded-sm hover:border-primary/30 hover:shadow-sm transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-sm bg-primary/8 border border-primary/15 flex items-center justify-center flex-shrink-0">
                    <v.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">{v.title}</h3>
                    <p className="font-body text-[13px] text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="section bg-secondary/40">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="section-label mb-3">Our Journey</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              <span className="font-body">15</span> Years in the Making
            </h2>
            <div className="divider mt-4" />
          </motion.div>
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-8"
                >
                  <div className="w-32 flex-shrink-0 text-right hidden md:block">
                    <span className="font-body text-sm font-bold text-primary">{m.year}</span>
                  </div>
                  <div className="relative hidden md:flex items-center justify-center w-4 h-4 mt-0.5 flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-secondary" />
                  </div>
                  <div className="flex-1">
                    <span className="md:hidden font-body text-sm font-bold text-primary">{m.year} — </span>
                    <span className="font-body text-sm text-foreground">{m.event}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div id="team" className="section">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="section-label mb-3">The People Behind the Brand</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Meet the Team</h2>
            <div className="divider mx-auto mt-4" />
            <p className="font-body text-muted-foreground text-sm max-w-md mx-auto mt-5 leading-relaxed">
              Our team of dedicated specialists brings decades of combined experience across Dubai's most dynamic real estate markets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-card border border-border rounded-sm p-7 card-lift group"
              >
                {/* Avatar placeholder */}
                <div className="w-16 h-16 rounded-sm bg-primary/8 border border-primary/15 flex items-center justify-center mb-5">
                  <span className="font-display text-xl font-bold text-primary">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-0.5">{member.name}</h3>
                <p className="font-body text-xs uppercase tracking-widest text-primary mb-4">{member.role}</p>
                <p className="font-body text-[13px] text-muted-foreground leading-relaxed mb-6">{member.bio}</p>
                <div className="pt-4 border-t border-border space-y-2">
                  <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="flex items-center gap-2.5 font-body text-xs text-muted-foreground hover:text-primary transition-colors">
                    <Phone size={12} />{member.phone}
                  </a>
                  <a href={`mailto:${member.email}`} className="flex items-center gap-2.5 font-body text-xs text-muted-foreground hover:text-primary transition-colors">
                    <Mail size={12} />{member.email}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="section bg-[hsl(var(--navy))]">
        <div className="container-wide text-center">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-primary/80 mb-3">Join Our Team</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-5">We're Always Looking for Talent</h2>
          <p className="font-body text-white/50 text-sm max-w-md mx-auto mb-8 leading-relaxed">
            Are you a driven real estate professional who shares our passion for excellence? We'd love to hear from you.
          </p>
          <Link to="/contact" className="btn-primary">
            View Opportunities
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
