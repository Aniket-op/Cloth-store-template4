import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { fadeUpVariant, containerVariant, viewportOnce } from "@/lib/animations";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <AnnouncementBar />
      <Navbar />

      {/* ── Hero Section ── */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 text-center flex flex-col items-center">
          <motion.div
            variants={containerVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={fadeUpVariant} className="section-label text-champagne block mb-4">
              Get In Touch
            </motion.span>
            <motion.h1 variants={fadeUpVariant} className="display text-cream mb-6">
              Contact Us
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="font-body text-[16px] text-cream/70 max-w-lg mx-auto">
              We're here to help you find your perfect outfit. Reach out to us for styling advice, custom orders, or boutique appointments.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16 py-20 md:py-28 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: [0.87, 0, 0.13, 1] }}
          >
            <h2 className="heading-1 text-ink mb-12">
              Boutique Details
            </h2>

            <div className="space-y-10">
              <div className="flex gap-5 items-start">
                <div className="mt-1 bg-cream-warm p-4 border border-brand-border text-champagne shrink-0">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-[11px] tracking-[0.15em] uppercase text-ink mb-2">
                    Flagship Store
                  </h3>
                  <p className="font-body text-[15px] text-brand-secondary leading-[1.6]">
                    14 Heritage Avenue, Golden Mile<br />
                    New Delhi, DL 110001
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="mt-1 bg-cream-warm p-4 border border-brand-border text-champagne shrink-0">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-[11px] tracking-[0.15em] uppercase text-ink mb-2">
                    Phone & WhatsApp
                  </h3>
                  <p className="font-body text-[15px] text-brand-secondary leading-[1.6]">
                    +91 83074 73499<br />
                    Mon - Sat: 10:00 AM - 8:00 PM (IST)
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="mt-1 bg-cream-warm p-4 border border-brand-border text-champagne shrink-0">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-[11px] tracking-[0.15em] uppercase text-ink mb-2">
                    Email
                  </h3>
                  <p className="font-body text-[15px] text-brand-secondary leading-[1.6]">
                    support@eliteaffaires.com<br />
                    bridal@eliteaffaires.com
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="mt-1 bg-cream-warm p-4 border border-brand-border text-champagne shrink-0">
                  <Clock size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-[11px] tracking-[0.15em] uppercase text-ink mb-2">
                    Store Hours
                  </h3>
                  <p className="font-body text-[15px] text-brand-secondary leading-[1.6]">
                    Monday - Saturday: 10:30 AM - 9:00 PM<br />
                    Sunday: 11:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.87, 0, 0.13, 1] }}
          >
            <EnquiryForm />
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
