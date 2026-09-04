/**
 * Site-wide brand & SEO defaults for Strong 8K IPTV.
 *
 * Canonical rule: always HTTPS + non-www + trailing slash
 * e.g. https://strong-8k.co.uk/subscription-plans/
 */
import type { Metadata } from "next";

export const siteConfig = {
  name: "Strong 8K IPTV",
  shortName: "Strong 8K",
  tagline: "Premium 8K IPTV Subscription for UK & USA",
  description:
    "Strong 8K IPTV – premium IPTV subscription for UK & USA. 40,000+ live channels, 120,000+ movies & series, HD/4K/8K streaming, instant activation and 24/7 support. Free 24-hour trial available.",
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
  home: "Strong 8K IPTV – Premium 8K IPTV Subscription for UK & USA",
  subscriptionPlans: "Strong 8K IPTV Subscription Plans & Prices UK",
  installationGuide:
    "Strong 8K IPTV Installation Guide – Set Up Any Device in Minutes",
  resellerPanel:
    "Strong 8K IPTV Reseller Panel UK – Start Your Own IPTV Business",
  contactUs: "IPTV Free Trial UK – Test Strong 8K Free for 24 Hours",
  notFound: "Page Not Found | Strong 8K IPTV",
} as const;

export const pageDescriptions = {
  home: siteConfig.description,
  subscriptionPlans:
    "Compare Strong 8K IPTV subscription plans UK. From £9.99/mo — 40,000+ channels, 120,000+ VOD, up to 8K UHD, instant activation. No contracts. Free 24-hour trial available.",
  installationGuide:
    "Step-by-step Strong 8K IPTV installation guide for Firestick, Android TV, Smart TVs, iPhone, Android, Windows and Mac. Average setup under 5 minutes. 24/7 WhatsApp support.",
  resellerPanel:
    "Become an IPTV reseller in the UK with Strong 8K. Contact support for credit package pricing, non-expiring balance, white label branding, sub-reseller network, instant activation and 24/7 support.",
  contactUs:
    "Claim a free IPTV trial UK with Strong 8K — 24 hours of full access to 40,000+ channels and 120,000+ VOD. No card, no commitment. Contact us 24/7 on WhatsApp for trials, setup and support.",
  notFound:
    "The page you are looking for could not be found. Browse Strong 8K IPTV plans, installation guides, or contact support.",
} as const;

/** Indexable routes used by sitemap (canonical paths with trailing slash). */
export const sitemapRoutes = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  {
    path: "/subscription-plans/",
    changeFrequency: "weekly" as const,
    priority: 0.9,
  },
  {
    path: "/installation-guide/",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/reseller-panel/",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/contact-us/",
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
  metadataBase: new URL(canonicalUrl("/")),
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
