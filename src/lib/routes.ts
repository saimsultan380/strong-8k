/**
 * Canonical page paths (trailing slash). Old slugs 301 to these.
 */
export const routes = {
  home: "/strong-8k-iptv-uk/",
  subscriptionPlans: "/iptv-subscription-plans/",
  installationGuide: "/iptv-installation-guide/",
  resellerPanel: "/iptv-reseller-panel/",
  contactUs: "/iptv-contact-us/",
} as const;

export const legacyRoutes = {
  home: "/",
  subscriptionPlans: "/subscription-plans/",
  installationGuide: "/installation-guide/",
  resellerPanel: "/reseller-panel/",
  contactUs: "/contact-us/",
  freeTrial: "/free-trial/",
  contact: "/contact/",
} as const;
