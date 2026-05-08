import { Variants } from "framer-motion";

/** Standard fade-up entrance — used on most scroll-revealed elements */
export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.87, 0, 0.13, 1] },
  },
};

/** Stagger container — wraps fadeUpVariant children */
export const containerVariant: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

/** Clip-path image reveal — wipes in from left to right */
export const imageRevealVariant: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    transition: { duration: 0.9, ease: [0.87, 0, 0.13, 1] },
  },
};

/** Fade in only — for overlays, labels, subtle elements */
export const fadeInVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/** Scale up from slightly smaller — for hero text */
export const scaleUpVariant: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.87, 0, 0.13, 1] },
  },
};

/** Shared viewport options for whileInView */
export const viewportOnce = { once: true, margin: "-80px" };
