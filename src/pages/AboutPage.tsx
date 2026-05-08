import { motion } from "framer-motion";
import { fadeUpVariant, containerVariant, viewportOnce } from "@/lib/animations";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-grow">
        {/* ── Hero Section ── */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden bg-ink flex items-center justify-center">
          <div className="absolute inset-0 bg-ink-soft/40 mix-blend-multiply z-10" />
          <img
            src="/images/wedding_collection.png"
            alt="Elite Affaires Heritage"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <motion.div
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            className="relative z-20 text-center px-6"
          >
            <motion.span variants={fadeUpVariant} className="section-label text-champagne block mb-5">
              The Heritage
            </motion.span>
            <motion.h1 variants={fadeUpVariant} className="display-xl text-cream mb-6">
              Our Story
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="font-display italic text-[20px] md:text-[24px] text-cream/80 max-w-xl mx-auto">
              Weaving dreams into reality, one stitch at a time.
            </motion.p>
          </motion.div>
        </section>

        {/* ── Editorial Text Section ── */}
        <section className="w-full bg-cream py-24 md:py-32">
          <div className="mx-auto max-w-[800px] px-6 text-center">
            <motion.div
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex flex-col items-center"
            >
              <motion.div variants={fadeUpVariant} className="gold-divider mb-10" />
              <motion.h2 variants={fadeUpVariant} className="heading-1 text-ink mb-10">
                Redefining Luxury
              </motion.h2>
              <motion.p variants={fadeUpVariant} className="font-body text-[16px] text-brand-secondary leading-[1.8] mb-8">
                Founded with a vision to celebrate internal beauty through external elegance, Elite Affaires has become a beacon of premium fashion. We believe that what you wear is an extension of who you are. Our journey began in a small boutique over a decade ago, fueled by a passion for rich textiles, intricate embroideries, and impeccable tailoring.
              </motion.p>
              <motion.p variants={fadeUpVariant} className="font-body text-[16px] text-brand-secondary leading-[1.8]">
                Today, Elite Affaires serves a global clientele, offering a curated selection of bridal lehengas, regal sherwanis, classic western suits, and contemporary festive wear. Each piece in our collection tells a story of heritage, passion, and unparalleled artistry. We don't just create clothes; we create heirlooms meant to be cherished for generations.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── Split Values Section ── */}
        <section className="w-full bg-ink py-24 md:py-32">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
            <motion.div
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mb-16 md:mb-24 text-center flex flex-col items-center"
            >
              <motion.span variants={fadeUpVariant} className="section-label mb-4 text-champagne">
                The Philosophy
              </motion.span>
              <motion.h2 variants={fadeUpVariant} className="heading-1 text-cream">
                Core Values
              </motion.h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12 lg:gap-x-24 px-4 md:px-8">
              {[
                {
                  title: "Master Craftsmanship",
                  desc: "Every garment is meticulously crafted by master artisans who have perfected their skills over generations. Hand-embroidered details and precision tailoring define our work.",
                },
                {
                  title: "Uncompromising Quality",
                  desc: "We source only the finest fabrics and materials — from pure silks to Egyptian cottons — ensuring that every piece from Elite Affaires stands the test of time.",
                },
                {
                  title: "Heritage Meets Modernity",
                  desc: "Our designs beautifully blend centuries-old Indian traditions with contemporary aesthetics and modern silhouettes for the global citizen.",
                },
                {
                  title: "Sustainable Practices",
                  desc: "We are committed to ethical fashion, supporting local weaver communities, ensuring fair trade, and consciously minimizing our environmental footprint.",
                },
              ].map((val, i) => (
                <motion.div
                  key={val.title}
                  variants={fadeUpVariant}
                  className="flex flex-col border-t border-champagne/20 pt-8"
                >
                  <span className="font-display italic text-[32px] text-champagne-dim mb-4 leading-none">
                    0{i + 1}.
                  </span>
                  <h3 className="heading-2 text-cream mb-4">{val.title}</h3>
                  <p className="font-body text-[15px] text-cream/70 leading-[1.8] max-w-md">
                    {val.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
