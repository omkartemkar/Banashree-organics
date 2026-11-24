import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLanguage } from "../context/LanguageContext";

const navLinks = [
  { id: "home", key: "nav.home" },
  { id: "about", key: "nav.about" },
  { id: "products", key: "nav.products" },
  { id: "benefits", key: "nav.benefits" },
  { id: "gallery", key: "nav.gallery" },
  { id: "contact", key: "nav.contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2">
          <img src={logo} alt="Banashree Organics" className="h-12 w-12 rounded-full object-cover" />
          <span className="text-primary-foreground font-bold text-lg hidden sm:inline">Banashree Organics</span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-primary-foreground/80 hover:text-primary-foreground font-medium transition-colors text-sm"
            >
              {t(link.key)}
            </button>
          ))}

          {/* Desktop Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 ml-2 pl-4 border-l border-primary-foreground/20 text-primary-foreground hover:text-accent font-semibold transition-colors"
            title="Switch Language"
          >
            <Globe size={16} />
            <span className={language === "en" ? "opacity-100" : "opacity-60"}>EN</span>
            <span className="opacity-50 mx-0.5">|</span>
            <span className={language === "kn" ? "opacity-100" : "opacity-60"}>ಕನ್ನಡ</span>
          </button>
        </div>

        {/* Mobile Menu & Lang Toggle Container */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-primary-foreground hover:text-accent font-semibold text-sm transition-colors"
            title="Switch Language"
            aria-label="Switch Language"
          >
            <Globe size={14} />
            <span className={language === "en" ? "opacity-100 font-bold" : "opacity-50"}>EN</span>
            <span className="opacity-40 mx-0.5">|</span>
            <span className={language === "kn" ? "opacity-100 font-bold" : "opacity-50"}>ಕನ್ನಡ</span>
          </button>
          <button onClick={() => setOpen(!open)} className="text-primary-foreground">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden bg-primary pb-4 px-4 border-t border-primary-foreground/10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="block w-full text-left text-primary-foreground/90 hover:text-accent py-3 font-medium border-b border-primary-foreground/10 last:border-0"
            >
              {t(link.key)}
            </button>
          ))}
          {/* Language Switcher inside mobile menu */}
          <div className="flex items-center gap-3 pt-4 pb-1">
            <Globe size={15} className="text-primary-foreground/60" />
            <button
              onClick={() => { setLanguage("en"); setOpen(false); }}
              className={`text-sm font-semibold px-3 py-1 rounded-full transition-colors ${language === "en" ? "bg-accent text-accent-foreground" : "text-primary-foreground/60 hover:text-primary-foreground"}`}
            >
              EN
            </button>
            <button
              onClick={() => { setLanguage("kn"); setOpen(false); }}
              className={`text-sm font-semibold px-3 py-1 rounded-full transition-colors ${language === "kn" ? "bg-accent text-accent-foreground" : "text-primary-foreground/60 hover:text-primary-foreground"}`}
            >
              ಕನ್ನಡ
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
