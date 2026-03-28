import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProperties from "@/components/FeaturedProperties";
import JourneySection from "@/components/JourneySection";
import AreaGuides from "@/components/AreaGuides";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturedProperties />
      <JourneySection />
      <AreaGuides />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
