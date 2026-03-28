import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Buy", href: "/properties?type=buy" },
  { label: "Rent", href: "/properties?type=rent" },
  { label: "Off Plan", href: "/off-plan" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // When route changes, close mobile menu & scroll to top
  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const transparent = isHome && !scrolled;
  const textColor = transparent ? "text-white" : "text-foreground";
  const subColor = transparent ? "text-white/60" : "text-primary";

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          transparent
            ? "py-5"
            : "glass-panel shadow-sm border-b border-border/50 py-3"
        }`}
      >
        <div className="container-wide flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start group">
            <span className={`font-display text-[22px] font-bold tracking-widest transition-colors duration-300 ${textColor}`}>
              Park Field
            </span>
            <span className={`text-[9px] font-body tracking-[0.45em] uppercase transition-colors duration-300 ${subColor}`}>
              Real Estate · Dubai
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`font-body text-[12px] font-medium tracking-[0.18em] uppercase transition-colors duration-250 ${
                  transparent
                    ? "text-white/80 hover:text-white"
                    : "text-foreground/65 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-5">
            <a
              href="tel:+971555555555"
              className={`hidden md:flex items-center gap-2 font-body text-[13px] transition-colors ${
                transparent ? "text-white/80 hover:text-white" : "text-foreground/70 hover:text-primary"
              }`}
            >
              <Phone size={13} />
              <span>+971 55 555 5555</span>
            </a>
            <Link
              to="/contact"
              className={`hidden md:inline-flex btn-primary text-xs py-2.5 px-5 ${
                transparent ? "bg-white/10 border border-white/30 backdrop-blur-sm hover:bg-white hover:text-foreground hover:shadow-none" : ""
              }`}
            >
              Enquire
            </Link>
            <button
              className={`lg:hidden transition-colors ${transparent ? "text-white" : "text-foreground"}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              id="mobile-menu-toggle"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-background lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <Link to="/" className="flex flex-col items-start" onClick={() => setMobileOpen(false)}>
                <span className="font-display text-[22px] font-bold tracking-widest text-foreground">Park Field</span>
                <span className="text-[9px] font-body tracking-[0.45em] uppercase text-primary">Real Estate · Dubai</span>
              </Link>
              <button onClick={() => setMobileOpen(false)} className="text-foreground" aria-label="Close menu">
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col px-8 py-10 gap-2 flex-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block font-display text-3xl font-medium text-foreground/80 hover:text-primary transition-colors py-3 border-b border-border/40"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="px-8 py-8 border-t border-border space-y-4">
              <a href="tel:+971555555555" className="flex items-center gap-3 text-foreground/70">
                <Phone size={15} /><span className="font-body text-sm">+971 55 555 5555</span>
              </a>
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="btn-primary w-full text-center text-sm">
                Book a Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
