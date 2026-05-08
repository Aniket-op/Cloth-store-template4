import { motion } from "framer-motion";
import { fadeUpVariant, containerVariant, imageRevealVariant, viewportOnce } from "@/lib/animations";
import { Link } from "react-router-dom";

const BrandStory = () => (
  <section className="w-full bg-ink py-20 md:py-32 overflow-hidden">
    <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left: Image (40%) */}
        <motion.div
          variants={imageRevealVariant}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="w-full lg:w-[40%] aspect-[3/4] overflow-hidden shrink-0"
        >
          <img
            src="/images/t1_primary.png"
            alt="Brand Story"
            className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105"
            loading="lazy"
          />
        </motion.div>

        {/* Right: Text (60%) */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="w-full lg:w-[60%] flex flex-col"
        >
          <motion.span variants={fadeUpVariant} className="section-label mb-5">
            Our Heritage
          </motion.span>
          
          <motion.div variants={fadeUpVariant} className="gold-divider" />
          
          <motion.h2 variants={fadeUpVariant} className="display text-cream mb-6 leading-[1.1]">
            A Legacy of <br />
            <span className="italic text-champagne">Fine Craftsmanship</span>
          </motion.h2>
          
          <motion.p variants={fadeUpVariant} className="font-body text-[16px] text-cream/70 leading-[1.8] max-w-xl mb-6">
            At Elite Affaires, we believe that true luxury lies in the details. Every garment we create is a testament to generations of artisanal expertise, blending traditional Indian techniques with modern sensibilities.
          </motion.p>
          
          <motion.p variants={fadeUpVariant} className="font-body text-[16px] text-cream/70 leading-[1.8] max-w-xl mb-10">
            From the finest silks to meticulously tailored fits, our collections are designed not just to be worn, but to be experienced.
          </motion.p>
          
          <motion.div variants={fadeUpVariant}>
            <Link to="/about" className="btn-ghost-gold">
              Discover Our Story
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default BrandStory;
