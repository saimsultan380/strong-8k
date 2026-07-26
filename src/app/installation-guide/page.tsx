import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { InstallationGuideHero } from "@/components/sections/installation-guide-hero";
import { InstallationBeforeStart } from "@/components/sections/installation-before-start";
import { InstallationAppsCodes } from "@/components/sections/installation-apps-codes";
import { InstallationDeviceSelector } from "@/components/sections/installation-device-selector";
import { InstallationTroubleshooting } from "@/components/sections/installation-troubleshooting";
import { InstallationFaqSection } from "@/components/sections/installation-faq-section";
import { InstallationCtaSection } from "@/components/sections/installation-cta-section";
import { pageDescriptions, pageTitles, createPageMetadata } from "@/lib/site";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { pageBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = createPageMetadata({
  title: pageTitles.installationGuide,
  description: pageDescriptions.installationGuide,
  path: "/installation-guide/",
});

export default function InstallationGuidePage() {
  return (
    <main className="relative flex flex-col">
      <Header />
      <Breadcrumbs items={pageBreadcrumbs.installationGuide} />
      <InstallationGuideHero />
      <InstallationBeforeStart />
      <InstallationAppsCodes />
      <InstallationDeviceSelector />
      <InstallationTroubleshooting />
      <InstallationFaqSection />
      <InstallationCtaSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
