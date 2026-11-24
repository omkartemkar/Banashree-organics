import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Banashree Organics, I am ${form.name}. Phone: ${form.phone}. ${form.message}`;
    window.open(`https://wa.me/919008968424?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">{t("contact.title")}</h2>
        </AnimatedSection>
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <AnimatedSection>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                  <Phone className="text-primary" size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{t("contact.phone")}</h4>
                  <a href="tel:+919008968424" className="text-muted-foreground hover:text-primary transition">90089 68424</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                  <Mail className="text-primary" size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{t("contact.email")}</h4>
                  <a href="mailto:banashreeorganics@gmail.com" className="text-muted-foreground hover:text-primary transition">banashreeorganics@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                  <MapPin className="text-primary" size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{t("contact.location")}</h4>
                  <p className="text-muted-foreground">{t("contact.loc_text")}</p>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <a href="https://www.instagram.com/banashree_organics?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground w-11 h-11 rounded-full flex items-center justify-center hover:bg-secondary transition" aria-label="Instagram">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                </a>
                <a href="https://www.facebook.com/share/1G2fhS61HG/" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground w-11 h-11 rounded-full flex items-center justify-center hover:bg-secondary transition" aria-label="Facebook">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </a>
                <a href="mailto:banashreeorganics@gmail.com" className="bg-primary text-primary-foreground w-11 h-11 rounded-full flex items-center justify-center hover:bg-secondary transition" aria-label="Email">
                  <Mail size={18} />
                </a>
                <a href="https://wa.me/919008968424" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground w-11 h-11 rounded-full flex items-center justify-center hover:bg-secondary transition" aria-label="WhatsApp">
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Enquiry Form */}
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 shadow-md border border-border space-y-4">
              <h3 className="font-bold text-lg text-primary mb-2">{t("contact.form_title")}</h3>
              <input
                type="text"
                placeholder={t("contact.name")}
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              <input
                type="tel"
                placeholder={t("contact.phone_ph")}
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              <textarea
                placeholder={t("contact.message")}
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-secondary transition"
              >
                <Send size={18} /> {t("contact.btn_send")}
              </button>
            </form>
          </AnimatedSection>

          {/* Map */}
          <AnimatedSection>
            <div className="rounded-xl overflow-hidden shadow-lg h-80 lg:h-full min-h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5760396562397!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709001234567!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Banashree Organics Location"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/11KWCNtjK39NFkzg8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition"
            >
              <MapPin size={18} /> {t("contact.get_directions")}
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
