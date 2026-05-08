import { useState, useEffect } from "react";
import { toast } from "sonner";
import { categories, WHATSAPP_NUMBER, Product } from "@/data/products";
import { MessageCircle, Send } from "lucide-react";

interface EnquiryFormProps {
    prefilledProduct?: Product;
}

const EnquiryForm = ({ prefilledProduct }: EnquiryFormProps) => {
    const [formData, setFormData] = useState({
        fullName: "",
        companyName: "",
        category: prefilledProduct ? (prefilledProduct.category === "sale" || prefilledProduct.category === "new-arrivals" ? "other" : prefilledProduct.category) : "",
        contactNumber: "",
        emailAddress: "",
        details: prefilledProduct ? `I am interested in the following piece:\n\nName: ${prefilledProduct.name}\nPrice: ₹${prefilledProduct.price.toLocaleString("en-IN")}\n\nAdditional Details:\n` : ""
    });

    useEffect(() => {
        if (prefilledProduct) {
            setFormData(prev => ({
                ...prev,
                category: prefilledProduct.category === "sale" || prefilledProduct.category === "new-arrivals" ? "other" : prefilledProduct.category,
                details: `I am interested in the following piece:\n\nName: ${prefilledProduct.name}\nPrice: ₹${prefilledProduct.price.toLocaleString("en-IN")}\n\nAdditional Details:`
            }));
        }
    }, [prefilledProduct]);

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: "" });
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.fullName) newErrors.fullName = "Required";
        if (!formData.emailAddress) newErrors.emailAddress = "Required";
        else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) newErrors.emailAddress = "Invalid email";
        if (!formData.contactNumber) newErrors.contactNumber = "Required";
        if (!formData.details) newErrors.details = "Required";
        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            toast.error("Please fill in all required fields.");
            return;
        }

        console.log("Enquiry Form Submitted:", formData);
        toast.success("Enquiry submitted successfully! We will contact you soon.");
        setFormData({
            fullName: "",
            companyName: "",
            category: "",
            contactNumber: "",
            emailAddress: "",
            details: ""
        });
    };

    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            toast.error("Please fill in all required fields.");
            return;
        }

        const message = `*Elite Affaires Enquiry*\n\n*Name:* ${formData.fullName}\n*Company:* ${formData.companyName || "N/A"}\n*Category:* ${formData.category}\n*Phone:* ${formData.contactNumber}\n*Email:* ${formData.emailAddress}\n\n*Details:*\n${formData.details}`;
        
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <div className="bg-cream-warm p-8 md:p-12 w-full border border-brand-border">
            <h3 className="heading-2 text-ink mb-2">Send an Enquiry</h3>
            <p className="font-body text-[14px] text-brand-secondary mb-8">
                Our style advisors will get back to you within 24 hours.
            </p>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className={`w-full bg-transparent border-b ${errors.fullName ? "border-brand-danger" : "border-brand-border"} px-0 py-3 font-body text-[15px] text-ink focus:outline-none focus:border-champagne transition-colors placeholder:text-brand-muted`}
                            placeholder="Full Name *"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-brand-border px-0 py-3 font-body text-[15px] text-ink focus:outline-none focus:border-champagne transition-colors placeholder:text-brand-muted"
                            placeholder="Company (Optional)"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <input
                            type="email"
                            name="emailAddress"
                            value={formData.emailAddress}
                            onChange={handleChange}
                            className={`w-full bg-transparent border-b ${errors.emailAddress ? "border-brand-danger" : "border-brand-border"} px-0 py-3 font-body text-[15px] text-ink focus:outline-none focus:border-champagne transition-colors placeholder:text-brand-muted`}
                            placeholder="Email Address *"
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            name="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            className={`w-full bg-transparent border-b ${errors.contactNumber ? "border-brand-danger" : "border-brand-border"} px-0 py-3 font-body text-[15px] text-ink focus:outline-none focus:border-champagne transition-colors placeholder:text-brand-muted`}
                            placeholder="Phone Number *"
                        />
                    </div>
                </div>

                <div>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full appearance-none bg-transparent border-b border-brand-border px-0 py-3 font-body text-[15px] text-ink focus:outline-none focus:border-champagne transition-colors"
                    >
                        <option value="" disabled>Select a collection</option>
                        {categories.map((cat) => (
                            <option key={cat.slug} value={cat.slug}>{cat.name}</option>
                        ))}
                        <option value="other">Other / Custom Order</option>
                    </select>
                </div>

                <div>
                    <textarea
                        rows={4}
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        className={`w-full bg-transparent border-b ${errors.details ? "border-brand-danger" : "border-brand-border"} px-0 py-3 font-body text-[15px] text-ink focus:outline-none focus:border-champagne transition-colors resize-none placeholder:text-brand-muted`}
                        placeholder="Enquiry Details *"
                    />
                </div>

                <div className="pt-6 flex flex-col md:flex-row gap-4">
                    <button 
                        type="submit" 
                        onClick={handleSubmit}
                        className="btn-ghost-ink flex-1"
                    >
                        Submit Enquiry
                    </button>
                    
                    <button 
                        type="button" 
                        onClick={handleWhatsAppSubmit}
                        className="btn-primary flex-1 flex items-center justify-center gap-2"
                    >
                        <MessageCircle size={16} strokeWidth={2} />
                        WhatsApp
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EnquiryForm;
