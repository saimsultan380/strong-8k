/**
 * Site-wide brand & SEO defaults for Strong 8K IPTV.
 * Update `siteUrl` (and email) when the final domain is ready.
 *
 * `pageTitles` are the exact SERP / browser <title> strings — keep them in sync
 * with each page's metadata.title.absolute.
 */
export const siteConfig = {
  name: "Strong 8K IPTV",
  shortName: "Strong 8K",
  tagline: "Premium 8K IPTV Subscription for UK & USA",
  description:
    "Strong 8K IPTV – premium IPTV subscription for UK & USA. 40,000+ live channels, 120,000+ movies & series, HD/4K/8K streaming, instant activation and 24/7 support. Free 24-hour trial available.",
  /** Change this when your domain is ready */
  siteUrl: "https://strong8k.com",
  email: "support@strong8k.com",
  locale: "en_GB",
  twitterHandle: "@strong8k",
} as const;

/** Exact SERP titles (shown in Google + browser tab) */
export const pageTitles = {
  home: "Strong 8K IPTV – Premium 8K IPTV Subscription for UK & USA",
  subscriptionPlans: "Strong 8K IPTV Subscription Plans & Prices UK",
  installationGuide: "Strong 8K IPTV Installation Guide – Set Up Any Device in Minutes",
  resellerPanel: "Strong 8K IPTV Reseller Panel UK – Start Your Own IPTV Business",
  contactUs: "Contact Strong 8K IPTV – 24/7 Support, Free Trial & Subscriptions",
} as const;

export const pageDescriptions = {
  home: siteConfig.description,
  subscriptionPlans:
    "Compare Strong 8K IPTV subscription plans UK. From £9.99/mo — 40,000+ channels, 120,000+ VOD, up to 8K UHD, instant activation. No contracts. Free 24-hour trial available.",
  installationGuide:
    "Step-by-step Strong 8K IPTV installation guide for Firestick, Android TV, Smart TVs, iPhone, Android, Windows and Mac. Average setup under 5 minutes. 24/7 WhatsApp support.",
  resellerPanel:
    "Become an IPTV reseller in the UK with Strong 8K. Credits from £59.99, non-expiring balance, white label branding, sub-reseller network, instant activation and 24/7 support.",
  contactUs:
    "Contact Strong 8K IPTV for 24/7 WhatsApp support, free 24-hour trials, subscription help, device setup, and reseller panel enquiries. Real replies in minutes.",
} as const;

export const siteMetadataBase = {
  title: pageTitles.home,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
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
  openGraph: {
    type: "website" as const,
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: pageTitles.home,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
  },
  twitter: {
    card: "summary_large_image" as const,
    title: pageTitles.home,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};
