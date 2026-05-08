import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUpVariant, containerVariant } from "@/lib/animations";
import { ArrowLeft, MessageCircle, Ruler, Truck, ShieldCheck, ChevronDown, ChevronUp } from "lucide-react";

import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getProductById, getProductsByCategory } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : null;
  const [activeImage, setActiveImage] = useState<string>("");
  const [expandedSection, setExpandedSection] = useState<string | null>("details");

  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
      window.scrollTo(0, 0);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-cream flex flex-col">
        <AnnouncementBar />
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center py-40 px-6 text-center">
          <h1 className="display text-ink mb-4">Item Not Found</h1>
          <p className="font-body text-[16px] text-brand-secondary mb-8">
            The piece you're looking for is no longer available.
          </p>
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = getProductsByCategory(product.category).filter(
    (p) => p.id !== product.id
  ).slice(0, 4);

  const images = [product.image];
  if (product.secondImage) images.push(product.secondImage);

  const isSale = product.tags?.some(t => t.toLowerCase().includes("sale") || t.toLowerCase().includes("off"));

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-grow pt-24 md:pt-32 pb-16">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
          
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link
              to={`/category/${product.category}`}
              className="inline-flex items-center gap-2 font-body font-semibold text-[11px] uppercase tracking-[0.1em] text-brand-secondary hover:text-champagne transition-colors"
            >
              <ArrowLeft size={14} />
              Back to Collection
            </Link>
          </nav>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* ── Left: Image Gallery (60%) ── */}
            <div className="w-full lg:w-[55%] flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full aspect-[3/4] bg-cream-deep overflow-hidden relative"
              >
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                 {isSale && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-block px-4 py-1.5 text-[10px] font-body font-semibold uppercase tracking-[0.1em] rounded-sm bg-brand-danger text-white">
                        Sale
                      </span>
                    </div>
                  )}
              </motion.div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex gap-4">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`w-20 md:w-24 aspect-[3/4] overflow-hidden transition-all duration-300 ${
                        activeImage === img ? "border-2 border-champagne" : "border border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* ── Right: Product Info (40%) ── */}
            <motion.div
              variants={containerVariant}
              initial="hidden"
              animate="visible"
              className="w-full lg:w-[45%] flex flex-col"
            >
              <motion.span variants={fadeUpVariant} className="section-label mb-4">
                {product.category}
              </motion.span>
              
              <motion.h1 variants={fadeUpVariant} className="heading-1 text-ink mb-6">
                {product.name}
              </motion.h1>

              <motion.div variants={fadeUpVariant} className="flex items-end gap-4 mb-8 pb-8 border-b border-brand-border">
                <span className="font-display font-semibold text-[28px] text-champagne">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                {product.originalPrice && (
                  <span className="font-body text-[16px] text-brand-muted line-through mb-1.5">
                    ₹{product.originalPrice.toLocaleString("en-IN")}
                  </span>
                )}
              </motion.div>

              <motion.p variants={fadeUpVariant} className="font-body text-[15px] text-brand-secondary leading-[1.8] mb-10">
                {product.description || "Experience the epitome of luxury with this handcrafted piece. Designed for the modern aesthetic while honoring traditional craftsmanship."}
              </motion.p>

              {/* Enquire CTA */}
              <motion.div variants={fadeUpVariant} className="mb-12">
                <a
                  href={`https://wa.me/918307473499?text=Hi, I'm interested in purchasing the ${encodeURIComponent(product.name)} (ID: ${product.id}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full flex items-center justify-center gap-3 py-4 text-[13px]"
                >
                  <MessageCircle size={18} strokeWidth={1.5} />
                  Enquire to Purchase
                </a>
                <p className="text-center font-body text-[11px] text-brand-muted mt-3">
                  Our style advisors typically reply within 15 minutes.
                </p>
              </motion.div>

              {/* Value Props */}
              <motion.div variants={fadeUpVariant} className="grid grid-cols-2 gap-y-4 gap-x-2 mb-10">
                 <div className="flex items-center gap-2 text-brand-secondary font-body text-[12px]">
                    <Truck size={16} className="text-champagne shrink-0" strokeWidth={1.5} /> Free pan-India delivery
                 </div>
                 <div className="flex items-center gap-2 text-brand-secondary font-body text-[12px]">
                    <ShieldCheck size={16} className="text-champagne shrink-0" strokeWidth={1.5} /> Quality guaranteed
                 </div>
                 <div className="flex items-center gap-2 text-brand-secondary font-body text-[12px]">
                    <Ruler size={16} className="text-champagne shrink-0" strokeWidth={1.5} /> Custom tailoring available
                 </div>
              </motion.div>

              {/* Accordions */}
              <motion.div variants={fadeUpVariant} className="border-t border-brand-border">
                {[
                  { id: "details", title: "Product Details" },
                  { id: "shipping", title: "Shipping & Returns" }
                ].map((section) => (
                  <div key={section.id} className="border-b border-brand-border">
                    <button
                      onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                      className="w-full flex justify-between items-center py-5 hover:text-champagne transition-colors"
                    >
                      <span className="font-display font-medium text-[18px] tracking-wide text-ink">
                        {section.title}
                      </span>
                      {expandedSection === section.id ? (
                        <ChevronUp size={18} className="text-brand-muted" />
                      ) : (
                        <ChevronDown size={18} className="text-brand-muted" />
                      )}
                    </button>
                    {expandedSection === section.id && (
                      <div className="pb-5 font-body text-[14px] text-brand-secondary leading-[1.6]">
                        {section.id === "details" ? (
                          <ul className="list-disc pl-5 space-y-2">
                            <li>Premium handcrafted fabric</li>
                            <li>Dry clean only</li>
                            <li>Model is wearing size M</li>
                            <li>Made in India</li>
                          </ul>
                        ) : (
                          <p>We offer free standard shipping across India. Orders typically arrive within 5-7 business days. Due to the handcrafted nature of our products, custom orders may take 10-14 days. Returns are accepted within 7 days of delivery for unworn items.</p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>

            </motion.div>
          </div>
        </div>
      </main>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-cream-warm border-t border-brand-border py-20">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
            <h2 className="heading-2 text-ink mb-10 text-center">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetail;
