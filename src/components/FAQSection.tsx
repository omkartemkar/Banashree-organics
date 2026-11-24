import AnimatedSection from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "../context/LanguageContext";


const FAQSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            {t("faq.title")}
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            {t("faq.subtitle")}
          </p>
        </AnimatedSection>
        <AnimatedSection>
          <Accordion type="single" collapsible className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-xl border border-border px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline py-5">
                  {t(`faq.q${i}`)}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed pb-5">
                  {t(`faq.a${i}`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQSection;
