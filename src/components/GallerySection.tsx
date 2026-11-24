import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import img1 from "@/assets/vermicompost-hands.jpeg";
import img2 from "@/assets/worms-box.png";
import img3 from "@/assets/farm-beds.png";
import img4 from "@/assets/compost-pile.png";
import img5 from "@/assets/compost-rows.png";
import img6 from "@/assets/facility.png";

const images = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
  { src: img6 },
];

/* ─── Image filter for visual enhancement ─── */
const IMG_FILTER =
  "contrast(1.07) brightness(1.04) saturate(1.12) sharpen(0)";

/* ─── Individual card ─── */
function GalleryCard({
  src,
  alt,
  index,
  onClick,
}: {
  src: string;
  alt: string;
  index: number;
  onClick: () => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.55, delay: index * 0.09, ease: "easeOut" }}
    >
      <button
        onClick={onClick}
        className="group relative w-full overflow-hidden rounded-2xl shadow-xl border border-green-200/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        style={{
          transition: "box-shadow 0.3s ease, transform 0.3s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            "0 8px 40px rgba(34,197,94,0.22), 0 2px 16px rgba(0,0,0,0.18)";
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.025)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            "0 4px 24px rgba(0,0,0,0.13)";
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
        }}
      >
        {/* Image */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="w-full h-64 object-cover"
          style={{
            filter: IMG_FILTER,
            imageRendering: "auto",
            transition: "filter 0.3s ease, transform 0.4s ease",
            willChange: "transform, filter",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLImageElement).style.filter =
              "contrast(1.10) brightness(1.07) saturate(1.16)";
            (e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLImageElement).style.filter = IMG_FILTER;
            (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
          }}
        />

        {/* Hover overlay gradient */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(27,94,32,0.38) 0%, rgba(0,0,0,0.10) 55%, transparent 100%)",
            transition: "opacity 0.3s ease",
          }}
        />

        {/* Zoom icon on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{ transition: "opacity 0.3s ease" }}
        >
          <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 shadow-lg">
            <ZoomIn size={22} className="text-white drop-shadow" />
          </div>
        </div>
      </button>
    </motion.div>
  );
}

/* ─── Lightbox ─── */
function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full p-2 text-white transition"
        aria-label="Close"
      >
        <X size={22} />
      </button>
      <motion.img
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="max-w-full max-h-[88vh] rounded-2xl shadow-2xl border border-white/10"
        style={{
          filter: "contrast(1.08) brightness(1.05) saturate(1.12)",
          imageRendering: "auto",
        }}
      />
    </motion.div>
  );
}

/* ─── Main Section ─── */
const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const { t } = useLanguage();
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            {t("gallery.title")}
          </h2>
          <div
            className="mx-auto mt-4 h-1 w-16 rounded-full"
            style={{ background: "linear-gradient(90deg, #4ade80, #16a34a)" }}
          />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <GalleryCard
              key={i}
              src={img.src}
              alt={t(`gallery.img${i + 1}`)}
              index={i}
              onClick={() => setSelected(i)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <Lightbox
          src={images[selected].src}
          alt={t(`gallery.img${selected + 1}`)}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
};

export default GallerySection;
