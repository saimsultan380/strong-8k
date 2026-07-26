import type { Metadata } from "next";
import { createPageMetadata, pageDescriptions, pageTitles } from "@/lib/site";

/**
 * Legacy /free-trial/ path.
 * Production 301 → /contact-us/ is handled in vercel.json.
 * This static page is a fallback (noindex) with an immediate meta refresh
 * so `output: "export"` builds succeed without runtime redirects.
 */
export const metadata: Metadata = createPageMetadata({
  title: pageTitles.contactUs,
  description: pageDescriptions.contactUs,
  path: "/contact-us/",
  index: false,
  follow: true,
});

export default function FreeTrialRedirectPage() {
  return (
    <main className="relative flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-sm" style={{ color: "var(--hero-muted)" }}>
        Redirecting to the free trial / contact page…
      </p>
      <a
        href="/contact-us/"
        className="mt-4 text-sm font-semibold underline"
        style={{ color: "var(--hero-accent)" }}
      >
        Continue to Contact Us
      </a>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace("/contact-us/");`,
        }}
      />
    </main>
  );
}
