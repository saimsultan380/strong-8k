import type { Metadata } from "next";
import { LegacyRedirect } from "@/components/seo/legacy-redirect";
import { createPageMetadata, pageDescriptions, pageTitles } from "@/lib/site";
import { routes } from "@/lib/routes";

export const metadata: Metadata = createPageMetadata({
  title: pageTitles.installationGuide,
  description: pageDescriptions.installationGuide,
  path: routes.installationGuide,
  index: false,
  follow: true,
});

export default function InstallationGuideRedirectPage() {
  return (
    <LegacyRedirect
      href={routes.installationGuide}
      message="Redirecting to the installation guide…"
      linkLabel="Continue to Installation Guide"
    />
  );
}
