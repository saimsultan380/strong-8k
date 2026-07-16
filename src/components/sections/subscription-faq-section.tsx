import { FaqAccordionSection, type FaqItem } from "@/components/sections/faq-section";

const SUBSCRIPTION_FAQS: FaqItem[] = [
  {
    id: "cost",
    q: "How much does a Strong 8K IPTV subscription cost in the UK?",
    a: "Plans start at £9.99 for 1 month and go up to £42.99 for 12 months. Every plan includes the full service — 40,000+ channels, 120,000+ VOD titles, and up to 8K UHD quality. The longer the plan, the lower your monthly cost, dropping to £3.58 per month on the annual plan.",
  },
  {
    id: "best-value",
    q: "Which Strong 8K plan offers the best value?",
    a: "The 12-month plan, by a clear margin — it works out 64% cheaper per month than paying monthly. If you're not ready for a year, the 6-month plan at £4.33 per month is the best middle ground.",
  },
  {
    id: "free-trial",
    q: "Is there a free trial before I pay?",
    a: "Yes. Every new customer can claim a free 24-hour trial with full access to all channels, VOD, and picture quality options. No card details are needed — just message us on WhatsApp and we'll activate it.",
  },
  {
    id: "renewal-price",
    q: "Do prices increase when I renew?",
    a: "No. You renew at the same discounted prices listed on this page. We don't use introductory pricing that jumps at renewal.",
  },
  {
    id: "upgrade",
    q: "Can I upgrade from 1 month to a longer plan later?",
    a: "Yes, at any time. Many customers start with 1 month, then move to 6 or 12 months once they've settled in. Message our support team and they'll set up the upgrade instantly.",
  },
  {
    id: "hidden-fees",
    q: "Are there any hidden fees or extra charges?",
    a: "None. The price you see is the full price — VAT, activation, updates, and support are all included. The only optional extra is multi-screen access for watching on several devices simultaneously.",
  },
  {
    id: "payment-methods",
    q: "What payment methods do you accept?",
    a: "We accept all major payment methods. Message us on WhatsApp when ordering and our team will confirm the options available and walk you through checkout — it takes under two minutes.",
  },
  {
    id: "refunds",
    q: "Can I get a refund if I'm not satisfied?",
    a: "Yes. If the service doesn't work on your setup and our team can't resolve it, we offer a money-back guarantee within the first 7 days of your subscription.",
  },
  {
    id: "multiple-devices",
    q: "Does one subscription cover multiple devices?",
    a: "You can install Strong 8K on as many devices as you like and switch between them freely. A standard plan streams to one screen at a time; affordable multi-screen plans are available if your household wants to watch different channels simultaneously.",
  },
  {
    id: "sports-vod",
    q: "Do all plans include sports and VOD, or do they cost extra?",
    a: "Everything is included in every plan. Full international sports packages, all 120,000+ movies and series, catch-up TV, and the EPG guide come as standard — there are no add-on packs to buy.",
  },
];

export function SubscriptionFaqSection() {
  return (
    <FaqAccordionSection
      faqs={SUBSCRIPTION_FAQS}
      defaultOpenId="cost"
      title={
        <>
          Strong 8K IPTV Pricing –{" "}
          <span style={{ color: "var(--hero-accent)" }}>Frequently Asked Questions</span>
        </>
      }
    />
  );
}
