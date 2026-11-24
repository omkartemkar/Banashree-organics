import AnimatedSection from "./AnimatedSection";
import { Leaf, Tractor, Recycle, Package } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const featureKeys = [
  { icon: <Leaf size={36} />, keyPrefix: "why_choose_us.f1" },
  { icon: <Tractor size={36} />, keyPrefix: "why_choose_us.f2" },
  { icon: <Recycle size={36} />, keyPrefix: "why_choose_us.f3" },
  { icon: <Package size={36} />, keyPrefix: "why_choose_us.f4" },
];

const WhyChooseUs = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">{t("why_choose_us.title")}</h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureKeys.map((f) => (
            <AnimatedSection key={f.keyPrefix}>
              <div className="bg-background rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow border border-border">
                <div className="flex justify-center mb-4 text-primary">{f.icon}</div>
                <h3 className="font-bold text-lg text-primary mb-2">{t(`${f.keyPrefix}_title`)}</h3>
                <p className="text-muted-foreground text-sm">{t(`${f.keyPrefix}_desc`)}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
