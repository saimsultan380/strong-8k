import type { Metadata } from "next";
import { LegacyRedirect } from "@/components/seo/legacy-redirect";
import { createPageMetadata, pageDescriptions, pageTitles } from "@/lib/site";
import { routes } from "@/lib/routes";

export const metadata: Metadata = createPageMetadata({
  title: pageTitles.resellerPanel,
  description: pageDescriptions.resellerPanel,
  path: routes.resellerPanel,
  index: false,
  follow: true,
});

export default function ResellerPanelRedirectPage() {
  return (
    <LegacyRedirect
      href={routes.resellerPanel}
      message="Redirecting to the reseller panel…"
      linkLabel="Continue to Reseller Panel"
    />
  );
}
