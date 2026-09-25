import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { ContactHero } from "@/components/sections/contact-hero";
import { ContactMethodsForm } from "@/components/sections/contact-methods-form";
import { ContactCtaSection } from "@/components/sections/contact-cta-section";
import { ContactHelpTopics } from "@/components/sections/contact-help-topics";
import { ContactFaqSection } from "@/components/sections/contact-faq-section";
import { pageDescriptions, pageTitles, createPageMetadata } from "@/lib/site";
import { routes } from "@/lib/routes";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { pageBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = createPageMetadata({
  title: pageTitles.contactUs,
  description: pageDescriptions.contactUs,
  path: routes.contactUs,
});

export default function ContactUsPage() {
  return (
    <main className="relative flex flex-col">
      <Header />
      <Breadcrumbs items={pageBreadcrumbs.contactUs} />
      <ContactHero />
      <ContactMethodsForm />
      <ContactCtaSection />
      <ContactHelpTopics />
      <ContactFaqSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
