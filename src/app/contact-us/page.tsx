import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { FreeTrialHero } from "@/components/sections/free-trial-hero";
import { FreeTrialHowItWorksSection } from "@/components/sections/free-trial-how-it-works-section";
import { FreeTrialFormSection } from "@/components/sections/free-trial-form-section";
import { FreeTrialDevicesSection } from "@/components/sections/free-trial-devices-section";
import { FreeTrialSupportSection } from "@/components/sections/free-trial-support-section";
import { FreeTrialFaqSection } from "@/components/sections/free-trial-faq-section";
import { FreeTrialPageCtaSection } from "@/components/sections/free-trial-page-cta-section";
import { pageDescriptions, pageTitles } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: pageTitles.contactUs,
  },
  description: pageDescriptions.contactUs,
  openGraph: {
    title: pageTitles.contactUs,
    description: pageDescriptions.contactUs,
  },
  twitter: {
    title: pageTitles.contactUs,
    description: pageDescriptions.contactUs,
  },
};

export default function ContactUsPage() {
  return (
    <main className="relative flex flex-col">
      <Header />
      <FreeTrialHero />
      <FreeTrialHowItWorksSection />
      <FreeTrialFormSection />
      <FreeTrialDevicesSection />
      <FreeTrialSupportSection />
      <FreeTrialFaqSection />
      <FreeTrialPageCtaSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
