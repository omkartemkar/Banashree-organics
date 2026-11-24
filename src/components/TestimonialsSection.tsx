import AnimatedSection from "./AnimatedSection";
import { Quote } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const testimonialKeys = [
  "testimonials.r1",
  "testimonials.r2",
  "testimonials.r3",
];

const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonialKeys.map((keyPrefix) => (
            <AnimatedSection key={keyPrefix}>
              <div className="bg-background rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-border relative">
                <Quote size={32} className="text-accent/30 absolute top-4 right-4" />
                <p className="text-foreground/70 leading-relaxed mb-6 italic">"{t(`${keyPrefix}_text`)}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-primary">{t(`${keyPrefix}_name`)}</p>
                  <p className="text-sm text-muted-foreground">{t(`${keyPrefix}_role`)}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
