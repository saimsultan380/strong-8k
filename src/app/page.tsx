import type { Metadata } from "next";
import { LegacyRedirect } from "@/components/seo/legacy-redirect";
import { createPageMetadata, pageDescriptions, pageTitles } from "@/lib/site";
import { routes } from "@/lib/routes";

/**
 * Root `/` is not the homepage URL.
 * Production 301 → /strong-8k-iptv-uk/ is handled in vercel.json.
 */
export const metadata: Metadata = createPageMetadata({
  title: pageTitles.home,
  description: pageDescriptions.home,
  path: routes.home,
  index: false,
  follow: true,
});

export default function RootRedirectPage() {
  return (
    <LegacyRedirect
      href={routes.home}
      message="Redirecting to Strong 8K IPTV UK…"
      linkLabel="Continue to Home"
    />
  );
}
