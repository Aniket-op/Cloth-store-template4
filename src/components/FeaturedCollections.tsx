import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUpVariant, containerVariant, viewportOnce } from "@/lib/animations";

const collections = [
  {
    title: "Wedding Collection",
    subtitle: "Regal Sherwanis & Kurtas",
    body: "Embody tradition and grandeur on your most cherished day. Every thread is chosen for its richness, every stitch placed with intention.",
    slug: "kurta-pajama",
    image: "/images/wedding_collection.png",
    label: "Bridal & Groom",
  },
  {
    title: "Festive Drop",
    subtitle: "Vibrant New Arrivals",
    body: "Welcome every celebration in colour and grace. Our festive line blends bold hues with timeless silhouettes for moments that demand to be remembered.",
    slug: "ladies-suits",
    image: "/images/festive_drop.png",
    label: "Festive Season",
  },
  {
    title: "Office Essentials",
    subtitle: "Sharp Tailored Fits",
    body: "Understated confidence for every boardroom and meeting room. Precision tailoring in premium fabrics that keep up with your ambition.",
    slug: "pant-shirts",
    image: "/images/office_essentials.png",
    label: "Everyday Luxury",
  },
];

const FeaturedCollections = () => (
  <section className="w-full bg-cream-warm py-20 md:py-28">
    <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">

      {/* Section Header */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mb-16 md:mb-20"
      >
        <motion.span variants={fadeUpVariant} className="section-label block mb-3">
          Featured
        </motion.span>
        <motion.h2 variants={fadeUpVariant} className="section-title text-ink max-w-sm">
          Our Collections
        </motion.h2>
      </motion.div>

      {/* Zig-Zag Rows */}
      <div className="flex flex-col gap-24 md:gap-32">
        {collections.map((col, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={col.slug}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.75, ease: [0.87, 0, 0.13, 1] }}
              className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-10 md:gap-14 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 aspect-[3/4] overflow-hidden shrink-0">
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover
                             transition-transform duration-700 ease-in-out
                             hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <div className={`w-full md:w-1/2 flex flex-col ${isEven ? "md:pl-6 lg:pl-12" : "md:pr-6 lg:pr-12"}`}>
                <span className="section-label mb-4">{col.label}</span>
                <div className="gold-divider" />
                <h3 className="heading-1 text-ink mt-2 mb-4">{col.title}</h3>
                <p className="font-display italic font-light text-[20px] md:text-[24px]
                               text-brand-secondary leading-[1.4] mb-4">
                  {col.subtitle}
                </p>
                <p className="font-body text-[15px] text-brand-secondary leading-[1.8] mb-8 max-w-md">
                  {col.body}
                </p>
                <Link to={`/category/${col.slug}`} className="btn-ghost-ink self-start">
                  Shop Collection
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default FeaturedCollections;
