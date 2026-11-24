import AnimatedSection from "./AnimatedSection";
import vermiImg from "@/assets/vermicompost-hands.jpeg";
import neemImg from "@/assets/neem-product.jpg";
import { Leaf, ShieldCheck, Sprout } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const products = [
  {
    nameKey: "products.p1_name",
    img: vermiImg,
    icon: <Sprout className="text-accent" size={28} />,
    featureKeys: ["products.p1_f1", "products.p1_f2", "products.p1_f3"],
    wa: "https://wa.me/919008968424?text=Hello%20Banashree%20Organics,%20I%20am%20interested%20in%20your%20Vermicompost",
  },
  {
    nameKey: "products.p2_name",
    img: neemImg,
    icon: <ShieldCheck className="text-accent" size={28} />,
    featureKeys: ["products.p2_f1", "products.p2_f2", "products.p2_f3"],
    wa: "https://wa.me/919008968424?text=Hello%20Banashree%20Organics,%20I%20am%20interested%20in%20your%20Neem%20Enriched%20Vermicompost",
  },
];

const ProductsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="products" className="section-padding bg-card">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">{t("products.title")}</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            {t("products.subtitle")}
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((p) => (
            <AnimatedSection key={p.nameKey}>
              <div className="bg-background rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img src={p.img} alt={t(p.nameKey)} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {p.icon}
                    <h3 className="text-xl font-bold text-primary">{t(p.nameKey)}</h3>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {p.featureKeys.map((fKey, i) => (
                      <li key={i} className="flex items-start gap-2 text-foreground/70">
                        <Leaf size={16} className="text-accent mt-1 shrink-0" /> {t(fKey)}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={p.wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-secondary transition"
                  >
                    {t("products.btn_enquire")}
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
