import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUpVariant, containerVariant, viewportOnce } from "@/lib/animations";

import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import ProductCard from "@/components/ProductCard";
import MarqueeStrip from "@/components/MarqueeStrip";
import FeaturedCollections from "@/components/FeaturedCollections";
import BrandStory from "@/components/BrandStory";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

import { getProductsByCategory } from "@/data/products";

const Index = () => {
  const newArrivals = getProductsByCategory("new-arrivals").slice(0, 3);

  return (
    <div className="min-h-screen bg-cream">
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      
      <CategorySection />

      {/* New Arrivals Section */}
      <section className="w-full bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6"
          >
            <div>
              <motion.span variants={fadeUpVariant} className="section-label block mb-3">
                Latest Additions
              </motion.span>
              <motion.h2 variants={fadeUpVariant} className="heading-1 text-ink">
                New Arrivals
              </motion.h2>
            </div>
            <motion.div variants={fadeUpVariant}>
              <Link to="/category/new-arrivals" className="btn-text-gold text-ink after:bg-ink">
                View All
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {newArrivals.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <BrandStory />
      <MarqueeStrip />
      <FeaturedCollections />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
