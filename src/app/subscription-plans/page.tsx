import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { SubscriptionPlansHero } from "@/components/sections/subscription-plans-hero";
import { MultiConnectionPlansSection } from "@/components/sections/multi-connection-plans-section";
import { SubscriptionComparisonSection } from "@/components/sections/subscription-comparison-section";
import { SubscriptionChoiceGuidance } from "@/components/sections/subscription-choice-guidance";
import { SubscriptionFreeTrialPromo } from "@/components/sections/subscription-free-trial-promo";
import { SubscriptionHowToBuySection } from "@/components/sections/subscription-how-to-buy-section";
import { SubscriptionIncludedSection } from "@/components/sections/subscription-included-section";
import { SubscriptionWhyChoose } from "@/components/sections/subscription-why-choose";
import { SubscriptionFaqSection } from "@/components/sections/subscription-faq-section";
import { SubscriptionCtaSection } from "@/components/sections/subscription-cta-section";
import { pageDescriptions, pageTitles, createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: pageTitles.subscriptionPlans,
  description: pageDescriptions.subscriptionPlans,
  path: "/subscription-plans/",
});

export default function SubscriptionPlansPage() {
  return (
    <main className="relative flex flex-col">
      <Header />
      <SubscriptionPlansHero />
      <MultiConnectionPlansSection />
      <SubscriptionComparisonSection />
      <SubscriptionChoiceGuidance />
      <SubscriptionFreeTrialPromo />
      <SubscriptionHowToBuySection />
      <SubscriptionIncludedSection />
      <SubscriptionWhyChoose />
      <SubscriptionFaqSection />
      <SubscriptionCtaSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
