import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Beaker, Leaf, Sprout, Droplets, Sun, HeartPulse, TreePine,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

/* ─── Data ─────────────────────────────────────────────── */
const nutrients = [
  {
    icon: <Beaker size={22} />,
    emoji: "🌱",
    keyPrefix: "benefits.n1",
    numeric: 2.0,
    suffix: "%",
  },
  {
    icon: <Leaf size={22} />,
    emoji: "🍃",
    keyPrefix: "benefits.n2",
    numeric: 18,
    suffix: "%",
  },
  {
    icon: <Droplets size={22} />,
    emoji: "💧",
    keyPrefix: "benefits.n3",
    numeric: null,
    suffix: "",
  },
  {
    icon: <span className="text-base">🪨</span>,
    emoji: "🪨",
    keyPrefix: "benefits.n4",
    numeric: null,
    suffix: "",
  },
  {
    icon: <Sun size={22} />,
    emoji: "☀️",
    keyPrefix: "benefits.n5",
    numeric: null,
    suffix: "",
  },
  {
    icon: <HeartPulse size={22} />,
    emoji: "💚",
    keyPrefix: "benefits.n6",
    numeric: null,
    suffix: "",
  },
];

const benefitKeys = [
  { icon: <TreePine size={20} />, key: "benefits.b1" },
  { icon: <Sprout size={20} />, key: "benefits.b2" },
  { icon: <Beaker size={20} />, key: "benefits.b3" },
  { icon: <Droplets size={20} />, key: "benefits.b4" },
  { icon: <Leaf size={20} />, key: "benefits.b5" },
];

/* ─── Animated counter ──────────────────────────────────── */
function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 40;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(parseFloat(start.toFixed(1)));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ─── Card ──────────────────────────────────────────────── */
function NutrientCard({ n, i }: { n: (typeof nutrients)[0]; i: number }) {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: i * 0.08 }}
      whileHover={{ y: -6, scale: 1.03 }}
      className="group relative flex flex-col items-center text-center p-7 rounded-2xl transition-all duration-300 cursor-default"
      style={{
        background: "rgba(255,255,255,0.07)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(134,239,172,0.18)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 8px 40px rgba(74,222,128,0.22), 0 0 0 1px rgba(134,239,172,0.3)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 4px 24px rgba(0,0,0,0.18)";
      }}
    >
      {/* Emoji badge circle */}
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-4 shadow-md"
        style={{
          background: "rgba(255,255,255,0.12)",
          border: "1.5px solid rgba(134,239,172,0.25)",
        }}
      >
        {n.emoji}
      </div>

      <h4 className="font-bold text-white text-base mb-1 leading-snug">{t(`${n.keyPrefix}_label`)}</h4>

      <p
        className="text-xl font-extrabold mb-2"
        style={{ color: "#86efac" }}
      >
        {n.numeric !== null ? (
          <Counter target={n.numeric} suffix={n.suffix} />
        ) : (
          t(`${n.keyPrefix}_val`)
        )}
      </p>

      <p className="text-xs text-white/55 leading-relaxed">{t(`${n.keyPrefix}_desc`)}</p>
    </motion.div>
  );
}

/* ─── Main Section ──────────────────────────────────────── */
const BenefitsSection = () => {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });
  const { t } = useLanguage();

  return (
    <section
      id="benefits"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #1B5E20 0%, #2E7D32 55%, #1a5c1e 100%)",
        padding: "90px 0",
      }}
    >
      {/* Decorative floating circles */}
      <div
        className="absolute -top-20 -left-20 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Subtle leaf texture dots */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">

        {/* ── Heading ── */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            {t("benefits.title")}
          </h2>
          <p className="text-green-300 text-lg font-light">
            {t("benefits.subtitle")}
          </p>
          <div
            className="mx-auto mt-5 h-1 w-20 rounded-full"
            style={{ background: "linear-gradient(90deg, #4ade80, #16a34a)" }}
          />
        </motion.div>

        {/* ── Nutrient Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-14">
          {nutrients.map((n, i) => (
            <NutrientCard key={i} n={n} i={i} />
          ))}
        </div>

        {/* ── Divider ── */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12"
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(134,239,172,0.35), transparent)",
            maxWidth: "600px",
          }}
        />

        {/* ── Key Benefits heading ── */}
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-center text-white mb-8"
        >
          {t("benefits.key_benefits")}
        </motion.h3>

        {/* ── Benefit Badges ── */}
        <div className="flex flex-wrap justify-center gap-4">
          {benefitKeys.map((b, i) => (
            <motion.div
              key={b.key}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ scale: 1.06, y: -3 }}
              className="flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-sm text-white cursor-default transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.09)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(134,239,172,0.22)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 4px 24px rgba(74,222,128,0.25), 0 0 0 1px rgba(134,239,172,0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 2px 12px rgba(0,0,0,0.15)";
              }}
            >
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(74,222,128,0.18)", color: "#86efac" }}
              >
                {b.icon}
              </span>
              {t(b.key)}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
