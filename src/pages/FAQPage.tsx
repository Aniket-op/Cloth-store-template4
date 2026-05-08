import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fadeUpVariant, containerVariant, viewportOnce } from "@/lib/animations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "Orders & Shipping",
    questions: [
      {
        q: "How long will my order take to arrive?",
        a: "Domestic orders within India typically take 3-7 business days. International shipping can take 10-15 business days depending on customs and the destination country.",
      },
      {
        q: "Do you offer international shipping?",
        a: "Yes, we ship globally! Shipping charges are calculated at checkout based on your delivery address.",
      },
      {
        q: "Can I track my order?",
        a: "Absolutely. Once your order is dispatched, you will receive an email and WhatsApp message with your tracking details.",
      },
    ],
  },
  {
    category: "Returns & Exchanges",
    questions: [
      {
        q: "What is your return policy?",
        a: "We accept returns on unworn, unwashed items with tags attached within 7 days of delivery. Custom-stitched or altered items, and bridal wear are non-returnable.",
      },
      {
        q: "How do I initiate a return?",
        a: "Please email us at support@eliteaffaires.com or contact us on WhatsApp with your Order ID and reason for return. We will arrange a pickup.",
      },
      {
        q: "When will I get my refund?",
        a: "Refunds are processed within 5-7 business days after we receive and inspect the returned item.",
      },
    ],
  },
  {
    category: "Product & Sizing",
    questions: [
      {
        q: "How do I choose the right size?",
        a: "Each product page features a detailed size guide. If you need bespoke sizing or have specific measurements, you can select 'Custom' and message us on WhatsApp.",
      },
      {
        q: "Do the products look exactly like the pictures?",
        a: "We aim for 100% accuracy, but due to studio lighting and different screen calibrations, there might be a slight 5-10% variation in color.",
      },
      {
        q: "Do you provide custom tailoring?",
        a: "Yes! Many of our bridal and grooms wear pieces can be custom-tailored to your exact measurements for an additional fee. Reach out via WhatsApp to inquire.",
      },
    ],
  },
];

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <AnnouncementBar />
      <Navbar />

      {/* ── Header ── */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 text-center flex flex-col items-center">
          <motion.div
            variants={containerVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={fadeUpVariant} className="section-label text-champagne block mb-4">
              Support
            </motion.span>
            <motion.h1 variants={fadeUpVariant} className="display text-cream mb-6">
              Frequently Asked Questions
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="font-body text-[16px] text-cream/70 max-w-lg mx-auto">
              Find answers to common questions about our collections, shipping, returns, and bespoke services.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ Content ── */}
      <section className="mx-auto max-w-[800px] px-5 md:px-10 py-20 flex-grow w-full">
        {faqs.map((group, idx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.87, 0, 0.13, 1] }}
            className="mb-16 last:mb-0"
          >
            <h2 className="heading-2 text-ink mb-6 pb-4 border-b border-brand-border">
              {group.category}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {group.questions.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${idx}-${i}`}
                  className="border-b border-brand-border"
                >
                  <AccordionTrigger className="font-display font-medium text-[20px] text-ink hover:text-champagne transition-colors text-left py-6 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-[15px] text-brand-secondary leading-[1.8] pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        ))}

        {/* Support Box */}
        <div className="mt-20 text-center p-12 bg-cream-warm border border-brand-border">
          <h3 className="heading-2 text-ink mb-4">Still have questions?</h3>
          <p className="font-body text-[15px] text-brand-secondary mb-8">
            We're here to help. Contact our styling and support team directly.
          </p>
          <Link to="/contact" className="btn-ghost-ink">
            Get In Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;
