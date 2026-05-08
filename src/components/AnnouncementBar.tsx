const items = [
  "New Collection · SS26",
  "Premium Handcrafted Fabrics",
  "Free Shipping on Orders Above ₹2000",
  "Enquire via WhatsApp",
  "New Arrivals Every Week",
  "New Collection · SS26",
  "Premium Handcrafted Fabrics",
  "Free Shipping on Orders Above ₹2000",
  "Enquire via WhatsApp",
  "New Arrivals Every Week",
];

const AnnouncementBar = () => (
  <div className="w-full bg-champagne overflow-hidden py-2">
    <div className="animate-marquee whitespace-nowrap flex gap-0">
      {items.map((item, i) => (
        <span
          key={i}
          className="font-body font-medium text-[11px] uppercase tracking-[0.12em] text-ink mx-8"
        >
          {item}
          <span className="mx-6 text-ink/40">·</span>
        </span>
      ))}
    </div>
  </div>
);

export default AnnouncementBar;
