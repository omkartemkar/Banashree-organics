import { motion } from "framer-motion";
import { MessageCircle, Leaf, ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const WHATSAPP_URL =
  "https://wa.me/919008968424?text=Hello%20Banashree%20Organics,%20I%20am%20interested%20in%20your%20vermicompost";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with slow zoom-in */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1.04 }}
        transition={{ duration: 9, ease: "easeOut" }}
        style={{
          backgroundImage: `url('/hero-bg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(1.07) contrast(1.06) saturate(1.1)",
        }}
      />

      {/* Soft gradient overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.20) 45%, rgba(0,0,0,0.50) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white px-5 py-2 rounded-full mb-6 text-sm font-medium backdrop-blur-sm"
        >
          <Leaf size={16} /> {t("hero.badge")}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          style={{ color: "#ffffff", textShadow: "0 2px 20px rgba(0,0,0,0.45)" }}
        >
          {t("hero.title_part1")}
          <br />
          <span
            className="text-accent"
            style={{ textShadow: "0 2px 16px rgba(0,0,0,0.4)" }}
          >
            {t("hero.title_part2")}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25 }}
          className="text-xl md:text-2xl mb-10 font-light max-w-2xl mx-auto"
          style={{ color: "#f3f4f6", textShadow: "0 1px 10px rgba(0,0,0,0.5)" }}
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() =>
              document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:brightness-110 transition shadow-lg"
          >
            <Leaf size={20} /> {t("hero.btn_products")}
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-white/80 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition backdrop-blur-sm"
          >
            <MessageCircle size={20} /> {t("hero.btn_whatsapp")}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/70 hover:text-white transition animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};

export default HeroSection;
