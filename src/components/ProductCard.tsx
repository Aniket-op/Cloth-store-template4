import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const isNew = product.tags?.some((t) => t.toLowerCase().includes("new"));
  const isSale = product.tags?.some(
    (t) => t.toLowerCase().includes("sale") || t.toLowerCase().includes("off")
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.07,
        ease: [0.87, 0, 0.13, 1],
      }}
    >
      <Link to={`/product/${product.id}`} className="group block">

        {/* Image Container */}
        <div className="product-image-wrap mb-4">

          {/* Primary Image */}
          <img
            src={product.image}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover
                        transition-all duration-500
                        ${product.secondImage ? "group-hover:opacity-0" : ""}`}
            loading="lazy"
          />

          {/* Secondary image on hover */}
          {product.secondImage && (
            <img
              src={product.secondImage}
              alt={`${product.name} — alternate view`}
              className="absolute inset-0 w-full h-full object-cover
                         opacity-0 group-hover:opacity-100
                         transition-opacity duration-500"
              loading="lazy"
            />
          )}

          {/* Badge */}
          {(isNew || isSale) && (
            <div className="absolute top-3 left-3 z-10">
              <span
                className={`inline-block px-3 py-1 text-[10px] font-body font-semibold uppercase tracking-[0.08em] rounded-sm ${
                  isSale
                    ? "bg-brand-danger text-white"
                    : "bg-champagne text-ink"
                }`}
              >
                {isSale ? "Sale" : "New"}
              </span>
            </div>
          )}

          {/* Quick Enquire — fades in on hover */}
          <div className="absolute bottom-3 right-3 z-10
                          opacity-0 group-hover:opacity-100
                          translate-y-2 group-hover:translate-y-0
                          transition-all duration-300 ease-out">
            <a
              href={`https://wa.me/918307473499?text=Hi, I'm interested in ${encodeURIComponent(product.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 bg-ink/85 backdrop-blur-sm
                         text-cream text-[10px] font-body font-semibold uppercase tracking-[0.07em]
                         px-3 py-2 rounded-sm hover:bg-champagne hover:text-ink transition-colors duration-200"
            >
              <MessageCircle size={12} strokeWidth={1.5} />
              Enquire
            </a>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-1.5">
          {/* Category label */}
          {product.category && (
            <p className="section-label text-[9px]">{product.category}</p>
          )}

          {/* Name */}
          <h3 className="font-display font-normal text-[16px] text-ink
                         group-hover:text-champagne transition-colors duration-300
                         leading-[1.3] line-clamp-2">
            {product.name}
          </h3>

          {/* Price */}
          <div className="flex items-baseline gap-3 pt-0.5">
            <span className="font-display font-semibold text-[17px] text-ink">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            {product.originalPrice && (
              <span className="font-body text-[13px] text-brand-muted line-through">
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
