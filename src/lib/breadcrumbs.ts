import { canonicalUrl, siteConfig } from "@/lib/site";

export type BreadcrumbItem = {
  name: string;
  /** Canonical path with trailing slash, or "/" for home */
  path: string;
};

/** Indexable page breadcrumb trails (Home › Page). Homepage has no trail — Google requires ≥2 ListItems. */
export const pageBreadcrumbs = {
  home: [{ name: "Home", path: "/" }] satisfies BreadcrumbItem[],
  subscriptionPlans: [
    { name: "Home", path: "/" },
    { name: "Subscription Plans", path: "/subscription-plans/" },
  ] satisfies BreadcrumbItem[],
  installationGuide: [
    { name: "Home", path: "/" },
    { name: "Installation Guide", path: "/installation-guide/" },
  ] satisfies BreadcrumbItem[],
  resellerPanel: [
    { name: "Home", path: "/" },
    { name: "Reseller Panel", path: "/reseller-panel/" },
  ] satisfies BreadcrumbItem[],
  contactUs: [
    { name: "Home", path: "/" },
    { name: "Contact Us", path: "/contact-us/" },
  ] satisfies BreadcrumbItem[],
} as const;

/** schema.org/BreadcrumbList JSON-LD. Only emit when there are ≥2 items (Google requirement). */
export function breadcrumbJsonLd(items: readonly BreadcrumbItem[]) {
  if (items.length < 2) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

export function siteJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      alternateName: [
        siteConfig.shortName,
        "Strong 8K IPTV UK",
        "Strong 8K IPTV USA",
      ],
      url: canonicalUrl("/"),
      description: siteConfig.description,
      inLanguage: "en-GB",
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.name,
      url: canonicalUrl("/"),
      logo: `${siteConfig.siteUrl.replace(/\/$/, "")}/strong-8k.PNG`,
      contactPoint: {
        "@type": "ContactPoint",
        email: siteConfig.email,
        contactType: "customer support",
        availableLanguage: ["English"],
      },
    },
  ];
}
