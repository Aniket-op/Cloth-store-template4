const items = [
  "New Collection",
  "Premium Fabrics",
  "Handcrafted Quality",
  "Enquire Now",
  "Free Shipping",
  "New Collection",
  "Premium Fabrics",
  "Handcrafted Quality",
  "Enquire Now",
  "Free Shipping",
];

const MarqueeStrip = () => (
  <div className="w-full bg-champagne overflow-hidden py-4 border-y border-ink/10">
    <div className="animate-marquee whitespace-nowrap flex gap-0">
      {items.map((item, i) => (
        <span
          key={i}
          className="font-body font-semibold text-[14px] uppercase tracking-[0.1em] text-ink mx-12"
        >
          {item}
          <span className="mx-12 text-ink/30">·</span>
        </span>
      ))}
    </div>
  </div>
);

export default MarqueeStrip;
