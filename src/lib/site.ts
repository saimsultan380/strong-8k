/**
 * Site-wide brand & SEO defaults for Strong 8K IPTV.
 *
 * Canonical rule: always HTTPS + non-www + trailing slash
 * e.g. https://strong-8k.co.uk/iptv-subscription-plans/
 */
import type { Metadata } from "next";
import { routes } from "@/lib/routes";

export const siteConfig = {
  name: "Strong 8K IPTV",
  shortName: "Strong 8K",
  tagline: "Premium Live TV with 40,000+ Channels and 8K UHD",
  description:
    "Explore Strong 8K IPTV for UK and USA viewers: channel catalogue, compatible devices, 1–12 month plans and a 24-hour trial. Compare the service before you subscribe.",
  /** Canonical origin — HTTPS, non-www, no trailing slash on the origin itself */
  siteUrl: "https://strong-8k.co.uk",
  email: "support@strong8k.com",
  /** Display format for the public support number */
  phone: "+44 7401 921250",
  /** Digits only for wa.me / tel: links (no + or spaces) */
  phoneE164: "447401921250",
  locale: "en_GB",
  twitterHandle: "@strong8k",
} as const;

/** WhatsApp chat URL for all CTAs and support buttons */
export const whatsappUrl = `https://wa.me/${siteConfig.phoneE164}` as const;

/**
 * Prefill text sources so support can tell which CTA the client came from.
 * First word capital; remaining words lowercase.
 */
export const whatsappMessages = {
  /** Prefill when user clicks homepage free-trial CTAs (source tracking) */
  startFreeTrial: "Start-free-trial",
} as const;

/** WhatsApp URL with prefilled message (source tracking). */
export function whatsappUrlWithText(text: string): string {
  return `${whatsappUrl}?text=${encodeURIComponent(text)}`;
}

/** Exact SERP titles (shown in Google + browser tab) */
export const pageTitles = {
  home: "Strong 8K IPTV UK – Premium 8K Streaming & 40,000+ Channels",
  subscriptionPlans: "Strong 8K IPTV Subscription Plans UK – Prices from £9.99",
  installationGuide:
    "Strong 8K IPTV Installation Guide – Setup for Supported Devices",
  resellerPanel: "Strong 8K IPTV Reseller Panel UK – Wholesale Credit Packages",
  contactUs: "IPTV Free Trial UK – Test Strong 8K Channels for 24 Hours",
  notFound: "Page Not Found | Strong 8K IPTV",
} as const;

export const pageDescriptions = {
  home: siteConfig.description,
  subscriptionPlans:
    "Compare Strong 8K IPTV subscription plans from £9.99. Review 1, 3, 6 and 12-month prices, the same channel catalogue in every plan, and trial and renewal details.",
  installationGuide:
    "Set up Strong 8K IPTV on Fire TV, Android, iPhone, Windows, Mac or Smart TV. Find supported login formats, Downloader code 4330396 and fixes for common issues.",
  resellerPanel:
    "Explore the Strong 8K IPTV reseller panel: 120, 240 and 360-credit packages, account tools, branding options and current pricing by request. See how the panel works.",
  contactUs:
    "Request a 24-hour Strong 8K IPTV trial in the UK. Check device compatibility, test the channel catalogue and contact the team for setup, plans or reseller questions.",
  notFound:
    "The page you are looking for could not be found. Browse Strong 8K IPTV plans, installation guides, or contact support.",
} as const;

/** Indexable routes used by sitemap (canonical paths with trailing slash). */
export const sitemapRoutes = [
  { path: routes.home, changeFrequency: "weekly" as const, priority: 1 },
  {
    path: routes.subscriptionPlans,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  },
  {
    path: routes.installationGuide,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: routes.resellerPanel,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: routes.contactUs,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
] as const;

/** Absolute canonical URL — always non-www HTTPS with trailing slash. */
export function canonicalUrl(path: string = "/"): string {
  const origin = siteConfig.siteUrl.replace(/\/$/, "");
  if (!path || path === "/") return `${origin}/`;

  let normalized = path.startsWith("/") ? path : `/${path}`;
  // Strip query/hash — canonicals never include them
  normalized = normalized.split("?")[0].split("#")[0];
  if (!normalized.endsWith("/")) normalized = `${normalized}/`;
  return `${origin}${normalized}`;
}

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  index?: boolean;
  follow?: boolean;
};

/** Shared page metadata with a single canonical + matching Open Graph URL. */
export function createPageMetadata({
  title,
  description,
  path,
  index = true,
  follow = true,
}: PageMetaInput): Metadata {
  const url = canonicalUrl(path);

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index,
      follow,
      googleBot: {
        index,
        follow,
      },
    },
  };
}

export const siteMetadataBase: Metadata = {
  title: pageTitles.home,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  metadataBase: new URL(canonicalUrl(routes.home)),
  keywords: [
    "Strong 8K IPTV",
    "8K IPTV",
    "IPTV UK",
    "IPTV USA",
    "IPTV subscription",
    "Firestick IPTV",
    "4K IPTV",
    "IPTV reseller",
  ],
  // Canonical is set per-page via createPageMetadata — never inherit homepage here.
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: pageTitles.home,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitles.home,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};
