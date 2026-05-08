# Elite Affaires — Premium Clothing Design System

## 1. Visual Theme & Atmosphere

Elite Affaires is a **luxury editorial fashion brand**. The design philosophy is rooted in the world of high-end fashion magazines — think Vogue Arabia, Dior's boutique site, and Net-a-Porter combined. It feels expensive, aspirational, and deeply tactile even on screen.

The aesthetic operates on three pillars:

1. **Ink & Champagne** — Deep, near-black ink backgrounds (`#0E0E0F`) contrast against warm champagne gold (`#C9A96E`) accents, creating a jewel-box effect that screams premium.
2. **Editorial Whitespace** — Generous, breathing whitespace is a luxury signal. Every section has room to be seen. Nothing feels crowded.
3. **Tactile Typography** — Serif display headlines (Cormorant Garamond) feel like they were set by a typesetter for a fashion house. Sans-serif body copy (DM Sans) provides crisp modern contrast.

The overall mood: **stepping into a high-end boutique at golden hour** — warm light, beautiful garments, calm atmosphere, effortless sophistication.

---

## 2. Color Palette & Roles

### Core Brand Colors

| Token | Hex | Role |
|-------|-----|------|
| `--ink` | `#0E0E0F` | Primary dark background, nav on scroll, footer |
| `--ink-soft` | `#1A1A1C` | Card backgrounds on dark sections, secondary surface |
| `--ink-muted` | `#2B2B2E` | Subtle dividers, hover states on dark |
| `--champagne` | `#C9A96E` | Primary brand accent — CTAs, highlights, icons, borders |
| `--champagne-light` | `#E2C99A` | Lighter gold for hover states, secondary accents |
| `--champagne-dim` | `#9A7A4A` | Muted gold for disabled or secondary gold elements |

### Surface & Background

| Token | Hex | Role |
|-------|-----|------|
| `--cream` | `#FAF7F2` | Primary light page background |
| `--cream-warm` | `#F3EDE3` | Secondary surface — alt section backgrounds |
| `--cream-deep` | `#E8DDD0` | Hover states on light backgrounds, image placeholders |
| `--white` | `#FFFFFF` | Cards on dark backgrounds, nav bar (transparent → white on scroll) |

### Text Colors

| Token | Hex | Role |
|-------|-----|------|
| `--text-primary` | `#0E0E0F` | Main headings and body on light backgrounds |
| `--text-secondary` | `#6B6460` | Subtext, captions, metadata |
| `--text-muted` | `#A89F97` | Disabled, placeholder text |
| `--text-inverse` | `#FAF7F2` | All text on dark/ink backgrounds |
| `--text-gold` | `#C9A96E` | Gold accent text, prices, labels |

### Semantic

| Token | Hex | Role |
|-------|-----|------|
| `--success` | `#3D7A5A` | Availability, confirmations |
| `--error` | `#B03A2E` | Errors, out of stock |
| `--border-light` | `#E0D8CF` | Subtle borders on cream backgrounds |
| `--border-gold` | `#C9A96E` | Active/focus borders in gold |

---

## 3. Typography System

### Font Stack

**Display (Serif):** `Cormorant Garamond` — Google Fonts
- Weights: 300 (Light), 400 (Regular), 600 (SemiBold)
- Used for all major headlines — fashion-house editorial feel
- Key trait: tall x-height, elegant thin strokes

**Body (Sans):** `DM Sans` — Google Fonts
- Weights: 300, 400, 500, 600
- Used for navigation, body copy, buttons, captions
- Key trait: geometric, clean, highly legible at small sizes

**Accent (Italic Serif):** `Cormorant Garamond Italic`
- Used for pull quotes, taglines, emphasis within headings

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
```

### Type Scale

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|------|------|------|--------|-------------|----------------|
| Display XL | Cormorant Garamond | 96px → 56px mobile | 300 | 0.95 | -0.02em |
| Display | Cormorant Garamond | 72px → 44px mobile | 300 | 1.0 | -0.02em |
| Heading 1 | Cormorant Garamond | 48px → 32px mobile | 400 | 1.1 | -0.01em |
| Heading 2 | Cormorant Garamond | 32px → 24px mobile | 400 | 1.2 | 0 |
| Heading 3 | DM Sans | 20px | 500 | 1.4 | 0.04em uppercase |
| Body | DM Sans | 16px | 400 | 1.75 | 0 |
| Body Medium | DM Sans | 16px | 500 | 1.75 | 0 |
| Caption | DM Sans | 13px | 400 | 1.6 | 0.02em |
| Label / Tag | DM Sans | 11px | 600 | 1.4 | 0.1em uppercase |
| Button | DM Sans | 14px | 600 | 1 | 0.08em uppercase |
| Nav Link | DM Sans | 14px | 500 | 1 | 0.06em |
| Price | Cormorant Garamond | 20px | 600 | 1 | 0 |

### Typography Principles

- Display headlines are **always** Cormorant Garamond — never sans-serif for h1/h2
- Body text uses DM Sans — never a serif for long-form reading
- **Letter-spacing on section labels**: 0.08–0.12em uppercase creates a luxury editorial feel
- Price tags use the serif for visual elegance
- All caps is **only** for Labels, Buttons, and Nav links — never for headlines

---

## 4. Component Styling Guide

### Buttons

**Primary (Gold)**
- Background: `#C9A96E` (champagne)
- Text: `#0E0E0F` (ink), 14px, DM Sans 600, uppercase, 0.08em spacing
- Border radius: `2px` (not pill — rectangular is more luxury/editorial)
- Padding: `14px 40px`
- Hover: background `#E2C99A`, slight brightness increase
- Active: scale(0.98)
- Transition: all 300ms ease

**Primary on Dark**
- Background: `#C9A96E`
- Text: `#0E0E0F`
- Same hover behavior

**Outline (Ghost)**
- Background: transparent
- Border: `1px solid #C9A96E`
- Text: `#C9A96E`, uppercase
- Hover: background fills to `rgba(201, 169, 110, 0.12)`

**Outline Light (on cream)**
- Border: `1px solid #0E0E0F`
- Text: `#0E0E0F`
- Hover: bg `#0E0E0F`, text `#FAF7F2`

**Minimal / Text Link**
- No background, no border
- Text: `#C9A96E` with animated underline on hover
- Underline: 1px solid, slides in from left (CSS animation)

### Cards

**Product Card**
- Background: `#FAF7F2` (cream) or transparent
- Image: 3:4 portrait aspect ratio — fashion proportions
- Image radius: `0px` — sharp, editorial
- No box-shadow
- On hover: image scales to 1.04 inside the container (overflow: hidden)
- Category label: 11px uppercase DM Sans 600, `#C9A96E`, spaced 0.1em
- Product name: 16px Cormorant Garamond 400
- Price: 18px Cormorant Garamond 600, `#0E0E0F`
- Quick-enquire icon fades in on hover (bottom of card)

**Category Editorial Card**
- Full-bleed portrait image (3:4)
- Dark gradient overlay from bottom 60%
- Overlay text: Display heading in Cormorant Garamond white
- Sub-label in DM Sans uppercase gold

**Feature / Story Card**
- Dark ink background
- Champagne accent border (left 3px or top 2px)
- Serif heading in cream
- Body text in muted cream

### Navigation

- **Default state**: Transparent, `position: fixed`, logo in champagne gold, links in `#FAF7F2`
- **Scrolled state**: Background transitions to `#0E0E0F` with a subtle shadow `0 2px 20px rgba(0,0,0,0.3)`, logo and links remain cream
- **Height**: 72px desktop, 60px mobile
- **Logo**: Typographic wordmark — "Elite Affaires" in Cormorant Garamond 400 italic, 22px
- **Nav links**: DM Sans 500, 14px, uppercase, 0.06em spacing, `#FAF7F2` default, `#C9A96E` hover
- **CTA in nav**: "Enquire" — outline ghost button in gold, 12px
- **Mobile**: Full-screen overlay with ink background, links in large Cormorant Garamond

### Announcement Bar

- Background: `#C9A96E`
- Text: `#0E0E0F`, DM Sans 500, 12px, center-aligned
- Height: 36px
- Smooth marquee for mobile

### Product Image Treatment

- Aspect ratio: **3:4** (portrait) — standard fashion photography
- No border radius on images
- Placeholder: animated shimmer in `#E8DDD0`
- Hover: subtle 1.04 scale with 400ms ease transition
- All product photography should have consistent clean/studio or lifestyle background

### Forms & Inputs

- Background: transparent
- Border: `1px solid #E0D8CF` (cream border)
- Border radius: `2px`
- Focus border: `1px solid #C9A96E` — gold focus
- Font: DM Sans 400, 16px, `#0E0E0F`
- Label: DM Sans 600 uppercase 11px, 0.08em spacing, `#6B6460`
- Error: border `#B03A2E`, message text 13px `#B03A2E`

### Badges / Tags

- Background: transparent, border `1px solid #C9A96E`
- Text: `#C9A96E`, 11px DM Sans 600, uppercase, 0.1em
- Border radius: `2px`
- Padding: `3px 10px`
- "New" badge: filled `#C9A96E` bg, ink text
- "Sale" badge: `#B03A2E` bg, white text

---

## 5. Layout Principles

### Spacing System (8px base)

| Token | Value | Use |
|-------|-------|-----|
| `space-1` | 4px | Micro gaps |
| `space-2` | 8px | Icon gaps, tight inline |
| `space-3` | 16px | Card padding, small margins |
| `space-4` | 24px | Standard component padding |
| `space-5` | 32px | Section internal padding |
| `space-6` | 48px | Component vertical rhythm |
| `space-7` | 64px | Section breaks |
| `space-8` | 96px | Major section top/bottom padding |
| `space-9` | 128px | Hero vertical padding |
| `space-10` | 160px | Full bleed section height clues |

### Grid

- Max container: `1440px`
- Horizontal padding: `80px` desktop → `40px` tablet → `20px` mobile
- Product grid: **3-col desktop**, 2-col tablet, 1-col mobile
- Category grid: **2-col** (large editorial cards)
- Gap between product cards: `24px` (breathing room — luxury feel)
- Feature sections: asymmetric 60/40 or 50/50 split layouts

### Section Rhythm

Every page follows this alternating pattern:
1. Cream section (`#FAF7F2`)
2. Ink section (`#0E0E0F`)
3. Cream-warm section (`#F3EDE3`)
4. Ink section

This creates a dramatic contrast flow that feels editorial.

---

## 6. Animation & Motion

### Principles

- **Slow and deliberate**: Transitions at 400–600ms feel luxurious. Fast snappy 150ms transitions feel cheap.
- **Ease in-out-expo**: `cubic-bezier(0.87, 0, 0.13, 1)` for entrances
- **Ease out-circ**: `cubic-bezier(0, 0.55, 0.45, 1)` for exits

### Scroll Animations (Framer Motion)

```ts
// Standard entrance — used on most elements
const fadeUpVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.87, 0, 0.13, 1] } }
};

// Stagger children (product grids, category cards)
const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

// Image reveal (clip-path wipe)
const imageRevealVariant = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: { clipPath: 'inset(0 0% 0 0)', transition: { duration: 0.8, ease: [0.87, 0, 0.13, 1] } }
};
```

### Micro-interactions

- **Product card hover**: image scale 1.04 (400ms ease), gold overlay accent line slides in from bottom
- **Button hover**: 300ms background transition, subtle scale(1.02)
- **Nav link hover**: gold underline slides in from left (CSS transform scaleX)
- **Page transitions**: Framer Motion `<AnimatePresence>` with fade (opacity 0→1, 500ms)
- **Hero text**: Words animate in with stagger (0.05s per word)

---

## 7. Page Structure & Sections

### Homepage Flow

```
AnnouncementBar          → gold bg, dark text marquee
Navbar                   → transparent → ink on scroll
Hero Section             → Full-screen split: left editorial text / right model photography
  - Display headline (Cormorant, 96px light)
  - Italic tagline
  - Two CTAs: Primary gold + Ghost outline
  - Scroll indicator (animated chevron)
Category Showcase        → Ink background, 2-col large portrait cards
  - "Men's Collection" / "Women's Collection"
  - Image + overlay text
  - Gold underline CTA
New Arrivals Grid        → Cream background, 3-col product grid, stagger animation
Story / Brand Strip      → Full-bleed dark with serif editorial copy + image (60/40 split)
Marquee Strip            → Gold bg, repeating text "New Collection · Premium Fabric · Crafted in India ·"
Featured Collections     → Alternating zig-zag: image left, text right (and vice versa)
Testimonials             → Ink bg, large italic serif quotes with customer name
Footer                   → Dark ink, 4-col links, gold logo wordmark
```

### Category Page

- Hero banner: full-bleed category image with overlay heading
- Filter bar: minimal pill filters (DM Sans uppercase, gold active state)
- Product grid: 3-col, lazy loading, stagger entrance
- Empty state: elegant serif message

### Product Detail Page

- Split layout: left image gallery (3:4), right product info
- Product name: Cormorant Garamond Heading 1
- Price: serif gold
- WhatsApp / Enquire CTA: full-width primary gold button
- Material & description: expandable accordion
- Related products: horizontal scroll strip

---

## 8. Tailwind Config Tokens

```ts
// tailwind.config.ts — extend colors
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
  }
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

## 9. Do's and Don'ts

### Do ✅

- Use Cormorant Garamond for **all display and heading text** — it's the brand voice
- Use portrait (3:4) aspect ratios for all product and model photography
- Keep generous whitespace — breathing room signals premium
- Use gold accents sparingly — it loses impact if overused
- Alternate ink and cream sections for editorial drama
- Use slow (400–700ms) transitions — speed = cheap, slow = luxury
- Keep buttons rectangular (2px radius) — pill buttons feel sporty, not couture
- Add subtle letter-spacing (0.06–0.12em) to uppercase labels and nav
- Use stagger animations on grids and lists

### Don't ❌

- Don't use pure black (`#000000`) — use ink (`#0E0E0F`)
- Don't pill-shape product buttons — it conflicts with the luxury positioning
- Don't use more than 2 accent colors per section
- Don't use bold/800 weight in serif headlines — use Light (300) or Regular (400)
- Don't add box-shadows to cards — flat is premium here
- Don't crop product images to square — always portrait 3:4
- Don't use Cormorant for body copy below 16px — legibility suffers
- Don't animate everything — selective motion is more impactful
- Don't use bright/saturated colors anywhere in UI — only earthy gold and neutrals

---

## 10. Agent Quick Reference

### Colors at a Glance

| Need | Value |
|------|-------|
| Dark background | `#0E0E0F` |
| Cream background | `#FAF7F2` |
| Gold accent | `#C9A96E` |
| Body text (light bg) | `#0E0E0F` |
| Body text (dark bg) | `#FAF7F2` |
| Secondary text | `#6B6460` |
| Border light | `#E0D8CF` |
| Success | `#3D7A5A` |
| Error | `#B03A2E` |

### Example Prompts

- "Create a full-screen hero section with a 60/40 split: left side has champagne gold label ('New Collection · SS26'), a large Cormorant Garamond 300 96px display headline in ink, an italic serif tagline, and two buttons (primary gold rectangular + ghost outline). Right side: full-bleed portrait 3:4 model photography with no border radius."
- "Build a 2-col category showcase on an ink (#0E0E0F) background with large 3:4 portrait images, a white Cormorant Garamond heading overlay, and a gold DM Sans uppercase 'Explore →' link."
- "Design a product card with a 3:4 portrait image (overflow hidden, hover scale 1.04), a gold 11px uppercase category label, 16px Cormorant Garamond product name, and 18px serif gold price. No border radius on images, no shadows."
- "Create a transparent navbar that transitions to ink (#0E0E0F) on scroll. Logo: 'Elite Affaires' in Cormorant Garamond italic 22px in champagne gold. Links: DM Sans 500 14px uppercase 0.06em spacing in cream (#FAF7F2)."
- "Build a testimonial section on ink background with a large italic Cormorant Garamond quote in cream, customer name in DM Sans 500 gold, and a thin 1px gold line separator."