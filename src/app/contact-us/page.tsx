import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { ContactHero } from "@/components/sections/contact-hero";
import { ContactHowToClaim } from "@/components/sections/contact-how-to-claim";
import { ContactWhatsIncluded } from "@/components/sections/contact-whats-included";
import { ContactMethodsForm } from "@/components/sections/contact-methods-form";
import { ContactHelpTopics } from "@/components/sections/contact-help-topics";
import { ContactFaqSection } from "@/components/sections/contact-faq-section";
import { ContactCtaSection } from "@/components/sections/contact-cta-section";
import { pageDescriptions, pageTitles, createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: pageTitles.contactUs,
  description: pageDescriptions.contactUs,
  path: "/contact-us/",
});

export default function ContactUsPage() {
  return (
    <main className="relative flex flex-col">
      <Header />
      <ContactHero />
      <ContactHowToClaim />
      <ContactWhatsIncluded />
      <ContactMethodsForm />
      <ContactHelpTopics />
      <ContactFaqSection />
      <ContactCtaSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
