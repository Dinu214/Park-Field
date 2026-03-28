import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center section">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md mx-auto"
        >
          <h1 className="font-display text-8xl font-bold text-foreground mb-4">404</h1>
          <p className="font-body text-xs tracking-[0.35em] uppercase text-primary mb-6">Page Not Found</p>
          <div className="w-12 h-px bg-primary mx-auto mb-8" />
          <p className="font-body text-sm text-muted-foreground mb-10 leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/" className="btn-primary">
            Return to Home
          </Link>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
