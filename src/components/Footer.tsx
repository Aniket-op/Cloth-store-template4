import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-ink text-cream pt-20 pb-10 border-t border-champagne/10">
    <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-16">
      
      {/* Top Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 mb-16">
        
        {/* Brand Column (takes up 2 cols on md) */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <Link to="/" className="font-display italic font-normal text-[28px] text-champagne tracking-wide leading-none">
            Elite Affaires
          </Link>
          <p className="font-display italic font-light text-[18px] text-cream/60 max-w-sm leading-[1.6]">
            Premium handcrafted ethnic and western wear for the modern wardrobe. Where tradition meets timeless elegance.
          </p>
        </div>
        
        {/* Collections */}
        <div className="flex flex-col gap-5">
          <h4 className="font-body font-semibold text-[11px] uppercase tracking-[0.15em] text-champagne mb-2">
            Collections
          </h4>
          <Link to="/category/men" className="font-body text-[14px] text-cream/70 hover:text-champagne transition-colors">Men's Wear</Link>
          <Link to="/category/women" className="font-body text-[14px] text-cream/70 hover:text-champagne transition-colors">Women's Wear</Link>
          <Link to="/category/kurta-pajama" className="font-body text-[14px] text-cream/70 hover:text-champagne transition-colors">Kurta Pajama</Link>
          <Link to="/category/ladies-suits" className="font-body text-[14px] text-cream/70 hover:text-champagne transition-colors">Ladies Suits</Link>
          <Link to="/category/turban" className="font-body text-[14px] text-cream/70 hover:text-champagne transition-colors">Turban</Link>
        </div>

        {/* Support */}
        <div className="flex flex-col gap-5">
          <h4 className="font-body font-semibold text-[11px] uppercase tracking-[0.15em] text-champagne mb-2">
            Support
          </h4>
          <Link to="/contact" className="font-body text-[14px] text-cream/70 hover:text-champagne transition-colors">Contact Us</Link>
          <Link to="/faq" className="font-body text-[14px] text-cream/70 hover:text-champagne transition-colors">FAQ</Link>
          <Link to="/privacy-policy" className="font-body text-[14px] text-cream/70 hover:text-champagne transition-colors">Privacy Policy</Link>
          <Link to="/terms-condition" className="font-body text-[14px] text-cream/70 hover:text-champagne transition-colors">Terms & Condition</Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-cream/10">
        <span className="font-body text-[12px] text-brand-muted">
          © {new Date().getFullYear()} Elite Affaires. All Rights Reserved.
        </span>
        <div className="flex gap-6">
          <a href="#" className="font-body text-[12px] text-brand-muted hover:text-champagne transition-colors">Instagram</a>
          <a href="#" className="font-body text-[12px] text-brand-muted hover:text-champagne transition-colors">Facebook</a>
          <a href="#" className="font-body text-[12px] text-brand-muted hover:text-champagne transition-colors">Pinterest</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
