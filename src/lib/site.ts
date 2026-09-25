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
    "Strong 8K IPTV offers a premium IPTV subscription for UK viewers. Explore live TV, movies and series, and request a free 24-hour trial.",
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
  home: "Strong 8K IPTV – Premium IPTV Subscription with 4K & 8K",
  subscriptionPlans: "IPTV Subscription Prices & Plans | Strong 8K",
  installationGuide: "Strong 8K Installation Guide | Supported Device Setup",
  resellerPanel: "Strong 8K Reseller Panel | Wholesale Credits & Accounts",
  contactUs: "Contact Strong 8K | Support & Trial Requests",
  notFound: "Page Not Found | Strong 8K IPTV",
} as const;

export const pageDescriptions = {
  home: siteConfig.description,
  subscriptionPlans:
    "Compare Strong 8K subscription prices by duration and account quantity. Review device options, included features, activation and refund terms.",
  installationGuide:
    "Set up Strong 8K IPTV on supported TVs, Firestick, Android, iPhone and computers. Find login instructions, the app code and troubleshooting help.",
  resellerPanel:
    "Explore the Strong 8K reseller panel, credit packages and account management. Request wholesale pricing, a dashboard demo and reseller support.",
  contactUs:
    "Contact Strong 8K for account help, installation support, renewals, reseller enquiries or a free 24-hour trial. Reach the team by WhatsApp or email.",
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
