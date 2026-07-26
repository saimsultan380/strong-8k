import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { ResellerPanelHero } from "@/components/sections/reseller-panel-hero";
import { ResellerExplainerSection } from "@/components/sections/reseller-explainer-section";
import { ResellerProfitabilitySection } from "@/components/sections/reseller-profitability-section";
import { ResellerPlansSection } from "@/components/sections/reseller-plans-section";
import { ResellerInfrastructureSection } from "@/components/sections/reseller-infrastructure-section";
import { ResellerFeaturesSection } from "@/components/sections/reseller-features-section";
import { ResellerWhiteLabelSection } from "@/components/sections/reseller-white-label-section";
import { ResellerCustomersSection } from "@/components/sections/reseller-customers-section";
import { ResellerHowToSection } from "@/components/sections/reseller-how-to-section";
import { ResellerFaqSection } from "@/components/sections/reseller-faq-section";
import { ResellerCtaSection } from "@/components/sections/reseller-cta-section";
import { pageDescriptions, pageTitles, createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: pageTitles.resellerPanel,
  description: pageDescriptions.resellerPanel,
  path: "/reseller-panel/",
});

export default function ResellerPanelPage() {
  return (
    <main className="relative flex flex-col">
      <Header />
      <ResellerPanelHero />
      <ResellerExplainerSection />
      <ResellerProfitabilitySection />
      <ResellerPlansSection />
      <ResellerInfrastructureSection />
      <ResellerFeaturesSection />
      <ResellerWhiteLabelSection />
      <ResellerCustomersSection />
      <ResellerHowToSection />
      <ResellerFaqSection />
      <ResellerCtaSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
