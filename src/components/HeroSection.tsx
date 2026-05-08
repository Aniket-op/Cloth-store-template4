import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  fadeUpVariant,
  containerVariant,
  imageRevealVariant,
  viewportOnce,
} from "@/lib/animations";

const heroSlides = [
  {
    src: "/images/kurta_pajama_hero.png",
    category: "New Arrival",
    label: "Premium Kurta Pajama",
  },
  {
    src: "/images/wedding_collection.png",
    category: "Heritage Collection",
    label: "Bridal Lehenga",
  },
  {
    src: "/images/ls3_primary.png",
    category: "Festive Drop",
    label: "Embroidered Suit",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-cream overflow-hidden flex flex-col lg:flex-row">
      
      {/* ── Background decoration ──────────────────────── */}
      <div className="absolute inset-y-0 right-0 w-[42%] bg-cream-warm z-0 hidden lg:block" />

      {/* ── Left: Editorial Text (60%) ──────────────────── */}
      <div className="relative z-10 flex flex-col justify-center
                      w-full lg:w-[58%]
                      px-6 md:px-12 lg:px-20 xl:px-28
                      pt-32 lg:pt-0 pb-16 lg:pb-0
                      min-h-[60vh] lg:min-h-screen">

        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          className="flex flex-col max-w-[600px] mt-auto mb-auto"
        >
          {/* Section Label */}
          <motion.span
            variants={fadeUpVariant}
            className="section-label mb-6 lg:mb-8"
          >
            New Collection · SS26
          </motion.span>

          {/* Display Headline */}
          <motion.h1
            variants={fadeUpVariant}
            className="display-xl text-ink mb-6"
          >
            Crafted
            <br />
            <span className="italic font-light text-champagne">for the</span>
            <br />
            Modern Soul
          </motion.h1>

          {/* Gold Divider */}
          <motion.div variants={fadeUpVariant} className="gold-divider w-16 mb-8" />

          {/* Tagline */}
          <motion.p
            variants={fadeUpVariant}
            className="font-body text-[16px] md:text-[18px]
                       text-brand-secondary leading-[1.8] mb-10 max-w-[480px]"
          >
            Premium ethnic & western wear, handcrafted with generations of artisanal expertise. Discover pieces that embody true luxury and timeless elegance.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-5">
            <Link to="/category/men" className="btn-primary">
              Shop Men
            </Link>
            <Link to="/category/women" className="btn-ghost-ink">
              Shop Women
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="hidden lg:flex items-center gap-4 absolute bottom-8 left-6 md:left-12 lg:left-20 xl:left-28 text-brand-muted">
          <div className="w-px h-12 bg-champagne-dim relative overflow-hidden">
             <motion.div 
               className="absolute top-0 left-0 w-full h-full bg-champagne"
               animate={{ y: ["-100%", "100%"] }}
               transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
             />
          </div>
          <span className="font-body text-[10px] uppercase tracking-[0.2em] text-brand-muted">
            Scroll to explore
          </span>
        </div>
      </div>

      {/* ── Right: Full-height Photography Slideshow (40%) ─────────── */}
      <motion.div
        variants={imageRevealVariant}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full lg:w-[42%] min-h-[50vh] lg:min-h-screen overflow-hidden bg-ink"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={heroSlides[currentSlide].src}
            alt={heroSlides[currentSlide].label}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>

        {/* Floating label that updates with the slide */}
        <div className="absolute bottom-10 left-8 bg-ink/90 backdrop-blur-md px-6 py-4 border border-champagne/20 overflow-hidden">
           <AnimatePresence mode="wait">
             <motion.div
               key={currentSlide}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               transition={{ duration: 0.5 }}
             >
                <p className="font-body font-semibold text-[10px] uppercase tracking-[0.15em] text-champagne mb-1">
                  {heroSlides[currentSlide].category}
                </p>
                <p className="font-display font-medium text-[18px] text-cream tracking-wide">
                  {heroSlides[currentSlide].label}
                </p>
             </motion.div>
           </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
