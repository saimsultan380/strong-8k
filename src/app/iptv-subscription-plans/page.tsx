import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { SubscriptionPlansHero } from "@/components/sections/subscription-plans-hero";
import { MultiConnectionPlansSection } from "@/components/sections/multi-connection-plans-section";
import { SubscriptionBeforeOrder } from "@/components/sections/subscription-before-order";
import { RefundPolicySection } from "@/components/sections/refund-policy-section";
import { SubscriptionCtaSection } from "@/components/sections/subscription-cta-section";
import { pageDescriptions, pageTitles, createPageMetadata } from "@/lib/site";
import { routes } from "@/lib/routes";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { pageBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = createPageMetadata({
  title: pageTitles.subscriptionPlans,
  description: pageDescriptions.subscriptionPlans,
  path: routes.subscriptionPlans,
});

export default function SubscriptionPlansPage() {
  return (
    <main className="relative flex flex-col">
      <Header />
      <Breadcrumbs items={pageBreadcrumbs.subscriptionPlans} />
      <SubscriptionPlansHero />
      <MultiConnectionPlansSection />
      <SubscriptionBeforeOrder />
      <RefundPolicySection />
      <SubscriptionCtaSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
