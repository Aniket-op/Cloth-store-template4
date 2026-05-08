import { motion } from "framer-motion";
import { fadeUpVariant, containerVariant, viewportOnce } from "@/lib/animations";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    text: "The quality of their lehengas is absolutely stunning. I wore their bridal collection on my wedding and received so many compliments!",
  },
  {
    name: "Rahul Mehta",
    location: "Delhi",
    text: "Best sherwanis I've ever purchased. The fabric quality is premium and the fit is impeccable. Elite Affaires is now my go-to brand.",
  },
  {
    name: "Ananya Patel",
    location: "Bangalore",
    text: "Fast shipping, beautiful packaging, and the saree was even more gorgeous in person. Truly a luxury shopping experience!",
  },
];

const Testimonials = () => (
  <section className="py-20 md:py-32 bg-ink">
    <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
      
      {/* Section Header */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="text-center mb-16 md:mb-24"
      >
        <motion.span variants={fadeUpVariant} className="section-label block mb-4">
          Client Diaries
        </motion.span>
        <motion.h2 variants={fadeUpVariant} className="heading-1 text-cream">
          What Our Customers Say
        </motion.h2>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.87, 0, 0.13, 1] }}
            className="flex flex-col items-center text-center px-4"
          >
            {/* Opening Quote Mark */}
            <span className="font-display italic text-[80px] leading-[0.5] text-champagne-dim opacity-40 mb-6">
              "
            </span>

            {/* Quote Text */}
            <p className="font-display italic font-light text-[22px] md:text-[26px] text-cream leading-[1.4] mb-8 grow">
              {t.text}
            </p>

            <div className="w-8 h-[1px] bg-champagne-dim mb-6" />

            {/* Author */}
            <div>
              <p className="font-body font-semibold text-[13px] uppercase tracking-[0.1em] text-champagne mb-1">
                {t.name}
              </p>
              <p className="font-body text-[12px] text-brand-muted">
                {t.location}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
