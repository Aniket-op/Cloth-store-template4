# Elite Affaires — Implementation Plan
## From Nike-Monochrome → Ink & Champagne Luxury Editorial

---

## Overview

This document defines every file change required to transform the current Nike-inspired monochromatic template into the new **Elite Affaires** premium editorial design system. The new design uses:

- **Fonts**: Cormorant Garamond (serif display) + DM Sans (body/UI)
- **Colors**: Ink (`#0E0E0F`), Champagne Gold (`#C9A96E`), Cream (`#FAF7F2`)
- **Style**: Luxury editorial — slow animations, portrait photography, generous whitespace, rectangular buttons

---

## Phase 1 — Design System Foundation

### `index.html`
- Add Google Fonts import for Cormorant Garamond + DM Sans
- Update `<title>` to "Elite Affaires — Premium Clothing"
- Add meta description

```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
```

---

### `tailwind.config.ts` — MODIFY

Replace the existing Nike color tokens and font families with the new Elite Affaires system:

**Remove:**
- `nike-black`, `nike-white`, `nike-snow`, `nike-light-gray`, `nike-hover-gray`, `nike-secondary-text`, `nike-border-secondary`, `nike-dark-surface`, `rounded-pill`, etc.

**Add:**
```ts
colors: {
  ink: {
    DEFAULT: '#0E0E0F',
    soft: '#1A1A1C',
    muted: '#2B2B2E',
  },
  champagne: {
    DEFAULT: '#C9A96E',
    light: '#E2C99A',
    dim: '#9A7A4A',
  },
  cream: {
    DEFAULT: '#FAF7F2',
    warm: '#F3EDE3',
    deep: '#E8DDD0',
  },
  brand: {
    text: '#0E0E0F',
    secondary: '#6B6460',
    muted: '#A89F97',
    border: '#E0D8CF',
  },
  success: '#3D7A5A',
  danger: '#B03A2E',
},
fontFamily: {
  display: ['Cormorant Garamond', 'Georgia', 'serif'],
  body: ['DM Sans', 'system-ui', 'sans-serif'],
},
borderRadius: {
  none: '0px',
  sm: '2px',
  DEFAULT: '4px',
  pill: '999px',
},
```

---

### `src/index.css` — REWRITE

**Remove all Nike-specific CSS variables and classes.**

**Add:**

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --ink: #0E0E0F;
    --ink-soft: #1A1A1C;
    --ink-muted: #2B2B2E;
    --champagne: #C9A96E;
    --champagne-light: #E2C99A;
    --champagne-dim: #9A7A4A;
    --cream: #FAF7F2;
    --cream-warm: #F3EDE3;
    --cream-deep: #E8DDD0;
    --text-primary: #0E0E0F;
    --text-secondary: #6B6460;
    --text-muted: #A89F97;
    --text-inverse: #FAF7F2;
    --border-light: #E0D8CF;
    --success: #3D7A5A;
    --error: #B03A2E;

    /* Shadcn compatibility */
    --background: 40 33% 97%;
    --foreground: 240 4% 6%;
    --primary: 38 47% 61%;
    --primary-foreground: 240 4% 6%;
    --secondary: 35 22% 93%;
    --secondary-foreground: 240 4% 6%;
    --muted: 35 22% 93%;
    --muted-foreground: 20 7% 40%;
    --border: 30 18% 84%;
    --radius: 0.125rem;
  }

  * { @apply border-border; }
  body { @apply bg-cream text-brand-text font-body antialiased; }
  h1, h2, h3 { @apply font-display; }
}

@layer components {
  /* Buttons */
  .btn-primary {
    @apply inline-flex items-center justify-center bg-champagne text-ink px-10 py-3.5
           text-[13px] font-body font-semibold uppercase tracking-[0.08em] rounded-sm
           transition-all duration-300 ease-in-out hover:bg-champagne-light active:scale-[0.98]
           cursor-pointer;
  }

  .btn-ghost-gold {
    @apply inline-flex items-center justify-center border border-champagne text-champagne px-10 py-3.5
           text-[13px] font-body font-semibold uppercase tracking-[0.08em] rounded-sm bg-transparent
           transition-all duration-300 ease-in-out hover:bg-champagne/10 cursor-pointer;
  }

  .btn-ghost-ink {
    @apply inline-flex items-center justify-center border border-ink text-ink px-10 py-3.5
           text-[13px] font-body font-semibold uppercase tracking-[0.08em] rounded-sm bg-transparent
           transition-all duration-300 ease-in-out hover:bg-ink hover:text-cream cursor-pointer;
  }

  .btn-text-gold {
    @apply inline-flex items-center gap-2 text-champagne text-[13px] font-semibold uppercase
           tracking-[0.08em] relative after:absolute after:bottom-0 after:left-0 after:h-px
           after:w-0 after:bg-champagne after:transition-all after:duration-300
           hover:after:w-full cursor-pointer;
  }

  /* Display Typography */
  .display-xl {
    @apply font-display font-light text-[56px] md:text-[72px] lg:text-[96px]
           leading-[0.95] tracking-[-0.02em];
  }

  .display {
    @apply font-display font-light text-[44px] md:text-[56px] lg:text-[72px]
           leading-[1.0] tracking-[-0.02em];
  }

  .heading-1 {
    @apply font-display font-normal text-[32px] md:text-[40px] lg:text-[48px]
           leading-[1.1] tracking-[-0.01em];
  }

  .heading-2 {
    @apply font-display font-normal text-[24px] md:text-[28px] lg:text-[32px]
           leading-[1.2];
  }

  .section-label {
    @apply font-body font-semibold text-[11px] uppercase tracking-[0.1em] text-champagne;
  }

  .section-title {
    @apply font-display font-normal text-[28px] md:text-[36px] leading-[1.2];
  }

  /* Cards */
  .product-card-image {
    @apply relative overflow-hidden aspect-[3/4] w-full;
  }

  .product-card-image img {
    @apply w-full h-full object-cover transition-transform duration-[400ms] ease-in-out;
  }

  .product-card-image:hover img {
    @apply scale-[1.04];
  }

  /* Image shimmer placeholder */
  .img-placeholder {
    @apply bg-cream-deep animate-pulse;
  }

  /* Gold divider */
  .gold-divider {
    @apply w-12 h-px bg-champagne my-4;
  }

  /* Overlay gradient */
  .overlay-dark {
    @apply absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent;
  }

  /* Focus styles */
  a:focus-visible, button:focus-visible {
    outline: 2px solid var(--champagne);
    outline-offset: 2px;
  }
}
```

---

## Phase 2 — Component Rewrites

### `src/components/AnnouncementBar.tsx` — MODIFY

- **Old**: Dark ink background with white text
- **New**: Champagne gold background (`bg-champagne`), ink text (`text-ink`), animated marquee

```tsx
// New design: gold bar with scrolling luxury copy
const AnnouncementBar = () => (
  <div className="w-full bg-champagne text-ink text-[12px] font-body font-medium py-2 overflow-hidden">
    <div className="animate-marquee whitespace-nowrap">
      New Collection Available &nbsp;·&nbsp; Premium Handcrafted Fabrics &nbsp;·&nbsp;
      Free Shipping on Orders Over ₹2000 &nbsp;·&nbsp; Enquire via WhatsApp &nbsp;·&nbsp;
      New Collection Available &nbsp;·&nbsp; Premium Handcrafted Fabrics &nbsp;·&nbsp;
    </div>
  </div>
);
```

Add to `tailwind.config.ts` keyframes:
```ts
keyframes: {
  marquee: { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-50%)' } }
},
animation: { marquee: 'marquee 28s linear infinite' }
```

---

### `src/components/Navbar.tsx` — REWRITE

**Current**: White sticky nav with Nike category links.

**New design**:
- `position: fixed`, starts transparent, transitions to `bg-ink` on scroll
- Logo: `"Elite Affaires"` in `font-display italic` 22px in `text-champagne`
- Links: DM Sans 500 14px uppercase 0.06em spacing, `text-cream` default, `text-champagne` hover
- Right side: WhatsApp icon + "Enquire" ghost gold button
- Mobile: Hamburger → full-screen ink overlay with large serif links

**Key state logic:**
```tsx
const [scrolled, setScrolled] = useState(false);
useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 60);
  window.addEventListener('scroll', onScroll);
  return () => window.removeEventListener('scroll', onScroll);
}, []);

const navClass = scrolled
  ? 'bg-ink shadow-[0_2px_20px_rgba(0,0,0,0.3)]'
  : 'bg-transparent';
```

---

### `src/components/HeroSection.tsx` — REWRITE

**Current**: Full-screen slideshow with dark overlay, centered text.

**New design — Split Hero (no slideshow)**:
- **Left half (60%)**: Cream background, editorial layout
  - Section label: `"New Collection · SS26"` in gold uppercase DM Sans
  - Display headline: Cormorant Garamond 96px light, 0.95 line-height, ink
  - Italic tagline: Cormorant Garamond italic 24px, secondary text color
  - Two buttons: `btn-primary` + `btn-ghost-ink`
  - Animated scroll indicator (chevron bouncing)
- **Right half (40%)**: Full-height portrait photography (3:4), no border radius, edge-to-edge
- Entry animation: left text fades up (stagger words), right image clips in from right
- Keep the category slug routing for the CTA buttons

```tsx
// Framer Motion entrance
const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } }
};
const itemVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.87, 0, 0.13, 1] } }
};
const imageVariant = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: { clipPath: 'inset(0 0% 0 0)', transition: { duration: 0.9, ease: [0.87, 0, 0.13, 1] } }
};
```

---

### `src/components/CategorySection.tsx` — REWRITE

**Current**: 3-column light-background category cards.

**New design**:
- Full-width section with `bg-ink` background
- Section label: `"Shop By Category"` in gold uppercase
- Two large portrait cards side by side (50/50 or responsive stack)
  - "Men's Collection" + "Women's Collection"
  - Full-bleed 3:4 portrait images
  - Dark overlay gradient from bottom
  - Serif heading in cream over the image
  - Gold `btn-text-gold` "Explore →" link
- Hover: image scale 1.04, overlay darkens slightly

---

### `src/components/FeaturedCollections.tsx` — REWRITE

**Current**: Simple grid of collection cards.

**New design — Zig-Zag Editorial Rows**:
- Section label: `"Featured Collections"` in gold
- Alternating rows: image left + text right, then text left + image right
- Each row: 60/40 or 50/50 split, full-bleed image (3:4 on image side)
- Text side:
  - Category label in gold uppercase
  - Serif heading (Cormorant 40px)
  - Body copy in DM Sans
  - `btn-ghost-ink` CTA
- Background: alternates between `cream` and `cream-warm`
- Scroll-triggered reveal animation per row

---

### `src/components/ProductCard.tsx` — REWRITE

**Current**: Standard e-commerce card, Nike style.

**New design**:
- Wrapper: `bg-transparent`, no shadows
- Image container: `product-card-image` class (aspect-[3/4], overflow-hidden)
- On hover: image scales to 1.04, a thin gold line slides in at bottom
- Badge: absolute top-left — "New" or "Sale" in styled badge
- Below image:
  - Category label: `section-label` class in champagne gold (11px uppercase)
  - Product name: `font-display font-normal text-[16px]` in ink
  - Price: `font-display font-semibold text-[18px]` in ink
  - Quick-Enquire icon: fades in on card hover, bottom right corner

---

### `src/components/Testimonials.tsx` — REWRITE

**Current**: Light background testimonial cards.

**New design**:
- Section background: `bg-ink`
- Section label: gold uppercase "What Our Customers Say"
- Large italic serif quote: Cormorant Garamond italic 32px, cream color
- Opening/closing quotation marks in champagne gold, very large (80px display)
- Customer name: DM Sans 500, champagne gold
- Divider: thin 1px champagne line
- Layout: single centered quote with prev/next navigation (arrow buttons)
- Slide animation between quotes

---

### `src/components/Footer.tsx` — MODIFY

**Keep structure, update styling**:
- Background: `bg-ink`
- Logo: `"Elite Affaires"` italic serif in champagne gold
- Tagline: italic Cormorant small text in `text-cream/60`
- Link columns: DM Sans 400 14px, `text-cream/70`, hover `text-champagne`
- Social icons: champagne color
- Border top: `border-t border-champagne/20`
- Bottom bar: `text-cream/40` 12px DM Sans, copyright

---

### `src/components/Marquee.tsx` — MODIFY

**Update content and styling**:
```tsx
// Text: cream on ink background (or ink on champagne bg - for homepage use)
const items = [
  'New Collection',
  'Premium Fabrics',
  'Handcrafted Quality',
  'Enquire Now',
  'Free Shipping'
];
// Separator: gold dot · between items
// Use the marquee CSS animation from tailwind
```

---

## Phase 3 — Page Rewrites

### `src/pages/Index.tsx` — MODIFY

Update section ordering and add a new `MarqueeStrip` between sections:

```tsx
<div className="min-h-screen bg-cream">
  <AnnouncementBar />
  <Navbar />
  <HeroSection />          {/* cream + split layout */}
  <CategorySection />      {/* ink background */}
  <NewArrivalsSection />   {/* cream background, 3-col grid */}
  <MarqueeStrip />         {/* champagne bg, ink text marquee */}
  <FeaturedCollections />  {/* zig-zag, cream-warm */}
  <Testimonials />         {/* ink background */}
  <Footer />               {/* ink background */}
</div>
```

Add a new inline `NewArrivalsSection` with stagger animation:
- Section label + heading
- 3-col `ProductCard` grid
- "View All" `btn-ghost-ink` centered below

---

### `src/pages/CategoryPage.tsx` — MODIFY

- Hero banner: full-bleed image with `overlay-dark` + category name in `display` Cormorant, cream
- Filter strip: pill filters in DM Sans, active state = champagne gold fill
- Product grid: 3-col → 2-col → 1-col, same updated `ProductCard`
- Scroll-triggered stagger on grid entries

---

### `src/pages/ProductDetail.tsx` — MODIFY

- Layout: 60/40 split — left image gallery, right product info
- Image gallery: primary 3:4 portrait, thumbnail strip below
- Right panel:
  - Category label: `section-label` gold
  - Product name: `heading-1` serif ink
  - Price: Cormorant 24px semibold in champagne
  - Material tag: `border border-brand-border rounded-sm px-3 py-1 text-xs`
  - Description: DM Sans 400 16px, `text-brand-secondary`
  - WhatsApp Enquire: `btn-primary` full width
  - Accordion: Material & Care, Size Guide — minimal, serif headers

---

### `src/pages/AboutPage.tsx` — MODIFY

- Hero: ink background, large serif italic display headline ("Our Story"), split with brand image
- Values section: cream-warm bg, 3 value cards with gold top border
- Timeline or brand story: zig-zag editorial layout

---

### `src/pages/ContactPage.tsx` — MODIFY

- Ink background hero: "Get In Touch" in large serif
- Form: cream card, gold focus borders, `btn-primary` submit
- WhatsApp CTA card: champagne background, ink text, prominent button

---

### `src/pages/FAQPage.tsx` — MODIFY

- Clean cream background
- FAQ accordion: serif question text, DM Sans answer, gold expand icon (+/−)
- Active state: champagne gold left border on open accordion item

---

## Phase 4 — New Components

### `src/components/MarqueeStrip.tsx` — NEW

A horizontal marquee section between content sections:
- Background: `bg-champagne`
- Text: `#0E0E0F` (ink), DM Sans 600 uppercase, 0.1em spacing
- Items: `New Collection · Premium Quality · Handcrafted Fabrics · Enquire Now · SS26 ·`
- Infinite CSS animation

---

### `src/components/BrandStory.tsx` — NEW

Full-bleed editorial section:
- Background: `bg-ink`
- Left: 40% — tall portrait brand/craft image
- Right: 60% — section label, display serif headline, body copy, `btn-ghost-gold`
- Scroll reveal animation

---

## Phase 5 — Asset Updates

### Product Images

All product images should ideally have:
- **Portrait 3:4 aspect ratio** (not square)
- Clean studio or lifestyle background
- High contrast garments

Update image references in `src/data/products.ts` to ensure paths remain correct.

---

### Public Images

Hero images should be portrait or have safe portrait crop zones. Update `/images/` references in `HeroSection.tsx`.

---

## Phase 6 — Animation System

Add to `tailwind.config.ts`:
```ts
keyframes: {
  marquee: {
    '0%': { transform: 'translateX(0%)' },
    '100%': { transform: 'translateX(-50%)' }
  },
  fadeUp: {
    '0%': { opacity: '0', transform: 'translateY(24px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' }
  },
  shimmer: {
    '0%': { backgroundPosition: '-200% 0' },
    '100%': { backgroundPosition: '200% 0' }
  }
},
animation: {
  marquee: 'marquee 28s linear infinite',
  'fade-up': 'fadeUp 0.7s cubic-bezier(0.87, 0, 0.13, 1) forwards',
  shimmer: 'shimmer 1.5s ease-in-out infinite'
}
```

Framer Motion variants to define in `src/lib/animations.ts` — NEW FILE:
```ts
export const fadeUpVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.87, 0, 0.13, 1] } }
};

export const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

export const imageRevealVariant = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: { clipPath: 'inset(0 0% 0 0)', transition: { duration: 0.9, ease: [0.87, 0, 0.13, 1] } }
};
```

Use `whileInView` + `viewport={{ once: true, margin: "-80px" }}` on all scroll-animated elements.

---

## File Change Summary

| File | Action | Priority |
|------|--------|----------|
| `index.html` | Modify — add fonts, update title/meta | P0 |
| `tailwind.config.ts` | Modify — replace color/font/radius tokens | P0 |
| `src/index.css` | Rewrite — new design system CSS | P0 |
| `src/lib/animations.ts` | New — shared Framer Motion variants | P0 |
| `src/components/Navbar.tsx` | Rewrite — transparent→ink, serif logo | P1 |
| `src/components/HeroSection.tsx` | Rewrite — split layout, no slideshow | P1 |
| `src/components/AnnouncementBar.tsx` | Modify — gold bg, marquee | P1 |
| `src/components/CategorySection.tsx` | Rewrite — ink bg, 2-col portraits | P1 |
| `src/components/ProductCard.tsx` | Rewrite — 3:4 ratio, serif, no shadow | P1 |
| `src/components/FeaturedCollections.tsx` | Rewrite — zig-zag editorial | P2 |
| `src/components/Testimonials.tsx` | Rewrite — ink bg, large italic quote | P2 |
| `src/components/Footer.tsx` | Modify — ink bg, gold logo | P2 |
| `src/components/Marquee.tsx` | Modify — update styling/content | P2 |
| `src/components/MarqueeStrip.tsx` | New — champagne bg strip | P2 |
| `src/components/BrandStory.tsx` | New — editorial ink section | P3 |
| `src/pages/Index.tsx` | Modify — update section order | P1 |
| `src/pages/CategoryPage.tsx` | Modify — new hero + filters | P2 |
| `src/pages/ProductDetail.tsx` | Modify — split layout, serif | P2 |
| `src/pages/AboutPage.tsx` | Modify — editorial redesign | P3 |
| `src/pages/ContactPage.tsx` | Modify — ink hero + gold form | P3 |
| `src/pages/FAQPage.tsx` | Modify — serif accordion | P3 |

---

## Implementation Order

```
P0 — Foundation first (fonts, tokens, CSS)
  └─ index.html → tailwind.config.ts → index.css → animations.ts

P1 — Core visible components
  └─ Navbar → HeroSection → AnnouncementBar → CategorySection → ProductCard → Index.tsx

P2 — Secondary sections
  └─ FeaturedCollections → Testimonials → Footer → Marquee → MarqueeStrip → CategoryPage → ProductDetail

P3 — Remaining pages
  └─ BrandStory → AboutPage → ContactPage → FAQPage
```

> Start with P0 and P1 to immediately see the design transformation on the homepage. Each phase can be implemented and reviewed independently.
