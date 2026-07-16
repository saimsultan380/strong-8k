import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { IptvSubscriptionExplainer } from "@/components/sections/iptv-subscription-explainer";
import { PricingSection } from "@/components/sections/pricing-section";
import { WhyBestIptvSection } from "@/components/sections/why-best-iptv";
import { EverythingIncludedSection } from "@/components/sections/everything-included";
import { FirestickCompatibilitySection } from "@/components/sections/firestick-compatibility";
import { GetStartedSection } from "@/components/sections/get-started-section";
import { HomepageFreeTrialSection } from "@/components/sections/homepage-free-trial-section";
import { HomepageKeyFeaturesSection } from "@/components/sections/homepage-key-features-section";
import { HomepageTestimonialsSection } from "@/components/sections/subscription-reviews-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HomepageCtaSection } from "@/components/sections/homepage-cta-section";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { pageDescriptions, pageTitles } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: pageTitles.home,
  },
  description: pageDescriptions.home,
  openGraph: {
    title: pageTitles.home,
    description: pageDescriptions.home,
  },
  twitter: {
    title: pageTitles.home,
    description: pageDescriptions.home,
  },
};

export default function Home() {
  return (
    <main className="relative flex flex-col">
      <Header />
      <HeroSection />
      <IptvSubscriptionExplainer />
      <PricingSection />
      <WhyBestIptvSection />
      <EverythingIncludedSection />
      <FirestickCompatibilitySection />
      <GetStartedSection />
      <HomepageFreeTrialSection />
      <HomepageKeyFeaturesSection />
      <HomepageTestimonialsSection />
      <FaqSection />
      <HomepageCtaSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
