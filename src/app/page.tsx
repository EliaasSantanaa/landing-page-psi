import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { QuoteSection } from "@/components/quote-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { SectionDivider } from "@/components/section-divider";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <ScrollReveal />
      <main>
        <HeroSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider flip />
        <ServicesSection />
        <SectionDivider />
        <QuoteSection />
        <SectionDivider flip />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
