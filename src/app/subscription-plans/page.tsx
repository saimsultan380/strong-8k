import type { Metadata } from "next";
import { LegacyRedirect } from "@/components/seo/legacy-redirect";
import { createPageMetadata, pageDescriptions, pageTitles } from "@/lib/site";
import { routes } from "@/lib/routes";

export const metadata: Metadata = createPageMetadata({
  title: pageTitles.subscriptionPlans,
  description: pageDescriptions.subscriptionPlans,
  path: routes.subscriptionPlans,
  index: false,
  follow: true,
});

export default function SubscriptionPlansRedirectPage() {
  return (
    <LegacyRedirect
      href={routes.subscriptionPlans}
      message="Redirecting to subscription plans…"
      linkLabel="Continue to Subscription Plans"
    />
  );
}
