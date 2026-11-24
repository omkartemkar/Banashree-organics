import { MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const FloatingButtons = () => {
  const { t } = useLanguage();

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/919008968424?text=${encodeURIComponent(t("floating_whatsapp_text"))}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <button
        onClick={openWhatsApp}
        className="bg-accent text-accent-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle size={28} />
      </button>
      <a
        href="tel:+919008968424"
        className="bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform md:hidden"
        aria-label="Call"
      >
        <Phone size={28} />
      </a>
    </div>
  );
};

export default FloatingButtons;
