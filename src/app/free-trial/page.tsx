import type { Metadata } from "next";
import { LegacyRedirect } from "@/components/seo/legacy-redirect";
import { createPageMetadata, pageDescriptions, pageTitles } from "@/lib/site";
import { routes } from "@/lib/routes";

/**
 * Legacy /free-trial/ path.
 * Production 301 → /iptv-contact-us/ is handled in vercel.json.
 */
export const metadata: Metadata = createPageMetadata({
  title: pageTitles.contactUs,
  description: pageDescriptions.contactUs,
  path: routes.contactUs,
  index: false,
  follow: true,
});

export default function FreeTrialRedirectPage() {
  return (
    <LegacyRedirect
      href={routes.contactUs}
      message="Redirecting to the free trial / contact page…"
      linkLabel="Continue to Contact Us"
    />
  );
}
