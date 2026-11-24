import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

const featureKeys = [
  "about.f1",
  "about.f2",
  "about.f3",
  "about.f4",
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding"
      style={{ backgroundColor: "#F5F5DC" }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-primary text-center mb-14"
        >
          {t("about.title")}
        </motion.h2>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div
              className="overflow-hidden rounded-2xl shadow-lg"
              style={{
                border: "1.5px solid rgba(100, 160, 80, 0.25)",
              }}
            >
              <img
                src="/farm-beds.png"
                alt="Banashree Organics vermicompost farm beds"
                className="w-full object-cover"
                style={{
                  display: "block",
                  filter: "brightness(1.06) contrast(1.05)",
                  transition: "transform 0.5s ease",
                  transformOrigin: "center center",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform = "scale(1.03)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
                }}
              />
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5 text-foreground/80 text-lg leading-relaxed"
          >
            <p>
              <strong className="text-primary">{t("about.p1_strong")}</strong>{t("about.p1_rest")}
            </p>
            <p>
              {t("about.p2")}
            </p>

            <ul className="space-y-3 mt-2">
              {featureKeys.map((key, i) => (
                <motion.li
                  key={key}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <span
                    className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: "hsl(123, 38%, 42%)" }}
                  >
                    ✓
                  </span>
                  <span>{t(key)}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
