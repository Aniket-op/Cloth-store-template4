import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Men", slug: "men" },
  { label: "Women", slug: "women" },
  { label: "Turban", slug: "turban" },
  { label: "Sale", slug: "sale" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-ink shadow-[0_2px_24px_rgba(0,0,0,0.35)] py-0"
            : "bg-ink py-2"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-16">

          {/* Logo */}
          <Link
            to="/"
            className="font-display italic font-normal text-[22px] text-champagne tracking-wide leading-none shrink-0"
          >
            Elite Affaires
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.slug}>
                <Link
                  to={`/category/${link.slug}`}
                  className="nav-link text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+918307473499"
              className="hidden md:flex items-center gap-2 text-cream/70 hover:text-champagne transition-colors duration-200"
              aria-label="Call us"
            >
              <Phone size={16} strokeWidth={1.5} />
            </a>

            <Link
              to="/contact"
              className="hidden md:inline-flex btn-ghost-gold py-2 px-6 text-[11px]"
            >
              Enquire
            </Link>

            {/* Hamburger */}
            <button
              className="lg:hidden text-cream p-1 hover:text-champagne transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.87, 0, 0.13, 1] }}
            className="fixed inset-0 z-40 bg-ink flex flex-col px-8 pt-28 pb-12"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.slug}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1, duration: 0.4 }}
                >
                  <Link
                    to={`/category/${link.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="font-display font-light text-[42px] text-cream hover:text-champagne transition-colors duration-200 leading-[1.1] block"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="mt-auto pt-10 border-t border-cream/10 flex flex-col gap-4">
              <a
                href="tel:+918307473499"
                className="flex items-center gap-3 text-cream/60 hover:text-champagne transition-colors font-body text-sm"
              >
                <Phone size={16} strokeWidth={1.5} />
                +91 83074 73499
              </a>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full justify-center"
              >
                Enquire Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
