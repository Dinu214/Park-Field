import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook, ArrowRight } from "lucide-react";
import { useState } from "react";

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "Buy a Property", href: "/properties?type=buy" },
      { label: "Rent a Property", href: "/properties?type=rent" },
      { label: "Sell Your Property", href: "/contact" },
      { label: "Off-Plan Projects", href: "/off-plan" },
      { label: "Property Valuation", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Park Field", href: "/about" },
      { label: "Meet the Team", href: "/about#team" },
      { label: "Careers", href: "/contact" },
      { label: "Press & Media", href: "/contact" },
    ],
  },
  {
    title: "Neighbourhoods",
    links: [
      { label: "Dubai Marina", href: "/properties?area=marina" },
      { label: "Palm Jumeirah", href: "/properties?area=palm" },
      { label: "Downtown Dubai", href: "/properties?area=downtown" },
      { label: "Business Bay", href: "/properties?area=business-bay" },
      { label: "Jumeirah Village", href: "/properties?area=jvc" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "RERA Compliance", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

const social = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="bg-[hsl(var(--navy))] text-white">
      {/* Main footer */}
      <div className="container-wide py-16 border-b border-white/8">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="block mb-6">
              <span className="font-display text-2xl font-bold tracking-widest text-white">Park Field</span>
              <p className="text-[9px] font-body tracking-[0.45em] uppercase text-primary/70 mt-1">Real Estate · Dubai</p>
            </Link>
            <p className="font-body text-[13px] text-white/45 leading-relaxed mb-8 max-w-xs">
              Dubai's trusted real estate partner — delivering clarity, expertise and exceptional outcomes for buyers, sellers, and investors across the UAE.
            </p>

            {/* Newsletter */}
            <div>
              <p className="font-body text-[11px] uppercase tracking-widest text-white/40 mb-3">Market Insights Newsletter</p>
              {subscribed ? (
                <p className="font-body text-xs text-primary">✓ You're subscribed. Thank you.</p>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }} className="flex gap-0">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-l-sm text-xs font-body text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50"
                  />
                  <button type="submit" className="px-4 py-2.5 bg-primary hover:bg-accent text-white text-xs rounded-r-sm transition-colors">
                    <ArrowRight size={14} />
                  </button>
                </form>
              )}
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-8">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-250"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerLinks.map((col) => (
              <div key={col.title}>
                <h4 className="font-body text-[10px] font-semibold uppercase tracking-widest text-white/35 mb-5">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="font-body text-[13px] text-white/50 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact strip */}
      <div className="container-wide py-6 border-b border-white/8">
        <div className="flex flex-wrap gap-8">
          {[
            { icon: Phone, text: "+971 55 555 5555" },
            { icon: Mail, text: "info@parkfield.ae" },
            { icon: MapPin, text: "Gate Avenue, Tower 2, DIFC, Dubai" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2.5 text-white/40 hover:text-white/70 transition-colors">
              <item.icon size={13} className="text-primary/60" />
              <span className="font-body text-[12px]">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-wide py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[11px] text-white/30">
            © {new Date().getFullYear()} Park Field Real Estate LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-4 font-body text-[10px] uppercase tracking-widest text-white/25">
            {["RERA Registered", "DED Licensed", "RICS Member"].map((badge, i) => (
              <span key={badge} className="flex items-center gap-4">
                {i > 0 && <span className="opacity-30">·</span>}
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
