import { HeroSection } from "@/components/sections/hero-section";
import { IptvSubscriptionExplainer } from "@/components/sections/iptv-subscription-explainer";
import { PricingSection } from "@/components/sections/pricing-section";
import { EverythingIncludedSection } from "@/components/sections/everything-included";
import { FirestickCompatibilitySection } from "@/components/sections/firestick-compatibility";
import { HomepageKeyFeaturesSection } from "@/components/sections/homepage-key-features-section";
import { GetStartedSection } from "@/components/sections/get-started-section";
import { HomepageFreeTrialSection } from "@/components/sections/homepage-free-trial-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HomepageCtaSection } from "@/components/sections/homepage-cta-section";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

export function HomePage() {
  return (
    <main className="relative flex flex-col">
      <Header />
      <HeroSection />
      <IptvSubscriptionExplainer />
      <PricingSection />
      <EverythingIncludedSection />
      <FirestickCompatibilitySection />
      <HomepageKeyFeaturesSection />
      <GetStartedSection />
      <HomepageFreeTrialSection />
      <FaqSection />
      <HomepageCtaSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
