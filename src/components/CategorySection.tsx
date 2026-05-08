import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUpVariant, containerVariant, viewportOnce } from "@/lib/animations";

const categories = [
  {
    title: "Men's Collection",
    subtitle: "Kurta Pajama · Pant Shirts · Turban",
    slug: "men",
    image: "/images/kp1_primary.png",
  },
  {
    title: "Women's Collection",
    subtitle: "Ladies Suits · Salwar Kameez · Lehenga",
    slug: "women",
    image: "/images/ls1_primary.png",
  },
];

const CategorySection = () => (
  <section className="w-full bg-ink py-20 md:py-28">
    <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">

      {/* Header */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mb-12 md:mb-16"
      >
        <motion.span variants={fadeUpVariant} className="section-label block mb-3">
          Explore
        </motion.span>
        <motion.h2
          variants={fadeUpVariant}
          className="heading-1 text-cream max-w-md"
        >
          Shop by Category
        </motion.h2>
      </motion.div>

      {/* 2-col Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.87, 0, 0.13, 1] }}
          >
            <Link
              to={`/category/${cat.slug}`}
              className="group relative block aspect-[3/4] md:aspect-[2/3] overflow-hidden"
            >
              {/* Image */}
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover
                           transition-transform duration-700 ease-in-out
                           group-hover:scale-[1.05]"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="overlay-dark transition-opacity duration-500 group-hover:opacity-90" />

              {/* Bottom text */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <p className="section-label text-champagne mb-3">{cat.subtitle}</p>
                <h3 className="heading-2 text-cream mb-5">{cat.title}</h3>
                <span className="btn-text-gold text-champagne">
                  Explore Collection
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>

              {/* Gold border reveal on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-champagne
                              scale-x-0 group-hover:scale-x-100
                              transition-transform duration-500 ease-in-out origin-left" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CategorySection;
