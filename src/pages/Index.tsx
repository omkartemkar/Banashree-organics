import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import BenefitsSection from "@/components/BenefitsSection";
import GallerySection from "@/components/GallerySection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <BenefitsSection />
      <GallerySection />
      <WhyChooseUs />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </main>
    <Footer />
    <FloatingButtons />
  </>
);

export default Index;
