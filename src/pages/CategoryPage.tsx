import { motion } from "framer-motion";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { fadeUpVariant, containerVariant } from "@/lib/animations";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory, categories } from "@/data/products";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [searchParams] = useSearchParams();
  const subcategory = searchParams.get("sub");

  const category = categories.find((c) => c.slug === slug);
  let categoryProducts = slug ? getProductsByCategory(slug) : [];

  if (subcategory) {
    categoryProducts = categoryProducts.filter((p) => {
      const searchTerms = [
        p.name.toLowerCase(),
        ...(p.tags?.map((t) => t.toLowerCase()) || []),
      ];
      return searchTerms.some((term) => term.includes(subcategory.toLowerCase()));
    });
  }

  if (!category) {
    return (
      <div className="min-h-screen bg-cream flex flex-col">
        <AnnouncementBar />
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center py-40 px-6 text-center">
          <h1 className="display text-ink mb-4">Category Not Found</h1>
          <p className="font-body text-[16px] text-brand-secondary mb-8">
            The collection you're looking for doesn't exist.
          </p>
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-grow">
        {/* Category Hero */}
        <section className="relative w-full h-[40vh] md:h-[50vh] bg-ink flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-ink-soft/40 mix-blend-multiply z-10" />
          <img
            src={`/images/${slug === "men" ? "kp1" : slug === "women" ? "ls1" : "t1"}_primary.png`}
            alt={category.name}
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            onError={(e) => {
               (e.target as HTMLImageElement).src = '/images/office_essentials.png';
            }}
          />
          <motion.div
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            className="relative z-20 text-center px-6"
          >
            <motion.span variants={fadeUpVariant} className="section-label text-champagne block mb-4">
              {subcategory ? `Filter: ${subcategory}` : "Collection"}
            </motion.span>
            <motion.h1 variants={fadeUpVariant} className="display text-cream capitalize">
              {category.name}
            </motion.h1>
          </motion.div>
        </section>

        {/* Filter Strip */}
        <div className="w-full bg-cream-warm border-b border-brand-border py-4">
            <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16 flex flex-wrap gap-3">
                <Link to={`/category/${slug}`} className={`px-4 py-1.5 rounded-sm font-body text-[11px] uppercase tracking-[0.1em] border ${!subcategory ? 'bg-champagne border-champagne text-ink font-semibold' : 'border-brand-border text-brand-secondary hover:border-champagne hover:text-champagne transition-colors'}`}>
                    All
                </Link>
                {slug === 'men' && (
                    <>
                       <Link to={`/category/${slug}?sub=kurta`} className={`px-4 py-1.5 rounded-sm font-body text-[11px] uppercase tracking-[0.1em] border ${subcategory === 'kurta' ? 'bg-champagne border-champagne text-ink font-semibold' : 'border-brand-border text-brand-secondary hover:border-champagne hover:text-champagne transition-colors'}`}>Kurta Pajama</Link>
                       <Link to={`/category/${slug}?sub=pant`} className={`px-4 py-1.5 rounded-sm font-body text-[11px] uppercase tracking-[0.1em] border ${subcategory === 'pant' ? 'bg-champagne border-champagne text-ink font-semibold' : 'border-brand-border text-brand-secondary hover:border-champagne hover:text-champagne transition-colors'}`}>Pant Shirts</Link>
                       <Link to={`/category/${slug}?sub=turban`} className={`px-4 py-1.5 rounded-sm font-body text-[11px] uppercase tracking-[0.1em] border ${subcategory === 'turban' ? 'bg-champagne border-champagne text-ink font-semibold' : 'border-brand-border text-brand-secondary hover:border-champagne hover:text-champagne transition-colors'}`}>Turbans</Link>
                    </>
                )}
                 {slug === 'women' && (
                    <>
                       <Link to={`/category/${slug}?sub=suit`} className={`px-4 py-1.5 rounded-sm font-body text-[11px] uppercase tracking-[0.1em] border ${subcategory === 'suit' ? 'bg-champagne border-champagne text-ink font-semibold' : 'border-brand-border text-brand-secondary hover:border-champagne hover:text-champagne transition-colors'}`}>Ladies Suits</Link>
                       <Link to={`/category/${slug}?sub=lehenga`} className={`px-4 py-1.5 rounded-sm font-body text-[11px] uppercase tracking-[0.1em] border ${subcategory === 'lehenga' ? 'bg-champagne border-champagne text-ink font-semibold' : 'border-brand-border text-brand-secondary hover:border-champagne hover:text-champagne transition-colors'}`}>Lehengas</Link>
                    </>
                )}
            </div>
        </div>

        {/* Info & Grid */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16 py-12 md:py-16">
          <div className="flex justify-between items-end mb-10">
            <p className="font-body text-[15px] text-brand-secondary max-w-2xl leading-[1.6]">
              {category.description}
            </p>
            <p className="font-body font-semibold text-[11px] uppercase tracking-[0.1em] text-brand-muted shrink-0 ml-6">
              {categoryProducts.length} {categoryProducts.length === 1 ? "Item" : "Items"}
            </p>
          </div>

          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {categoryProducts.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-32 border border-brand-border bg-cream-warm">
              <h3 className="heading-2 text-ink mb-3">No Pieces Found</h3>
              <p className="font-body text-[15px] text-brand-secondary">
                We couldn't find any items matching your criteria.
              </p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;
