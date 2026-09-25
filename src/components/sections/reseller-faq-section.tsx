import { FaqAccordionSection, type FaqItem } from "@/components/sections/faq-section";

const RESELLER_FAQS: FaqItem[] = [
  {
    id: "start",
    q: "How many credits do I need to start?",
    a: "The Starter package contains 120 credits. Growth is 240 credits and Pro is 360 credits. Ask for a demonstration before you choose.",
  },
  {
    id: "deducted",
    q: "How are credits deducted?",
    a: "One credit covers one month of one standard customer account. A 3-month line uses 3 credits, a 6-month line uses 6, and a 12-month line uses 12. Confirm with support if the customer needs extra simultaneous accounts.",
  },
  {
    id: "expire",
    q: "Do unused credits expire?",
    a: "No. Unused credits remain on your balance until you use them.",
  },
  {
    id: "trials",
    q: "Can I create trials?",
    a: "Trial access is limited. Current allowances start at up to ten trial accounts per day and can change with your account level. Trials are not unlimited.",
  },
  {
    id: "branding",
    q: "Which branding options are available?",
    a: "White-label branding and sub-reseller access may need approval and can have an extra cost. Contact support before you offer either option.",
  },
  {
    id: "support",
    q: "Who supports my customers?",
    a: "You support the customers you sell to. Strong 8K supports service and panel issues. Escalate those problems to us with the account details.",
  },
  {
    id: "renew",
    q: "How do I renew customer accounts?",
    a: "Renew a line from the dashboard before it expires. The renewal uses credits for the new duration on the same one-account rule.",
  },
  {
    id: "refund",
    q: "What are the reseller purchase and refund terms?",
    a: "Wholesale credit purchases have their own terms. The consumer 7-day money-back guarantee on viewing subscriptions does not automatically apply to reseller credit packs. Ask support for the terms that apply to your package before you pay.",
  },
];

export function ResellerFaqSection() {
  return (
    <FaqAccordionSection
      faqs={RESELLER_FAQS}
      defaultOpenId="start"
      eyebrow="FAQ"
      description="Credits, trials, branding, renewals and wholesale terms."
      title={
        <>
          Reseller{" "}
          <span style={{ color: "var(--hero-accent)" }}>Questions</span>
        </>
      }
    />
  );
}
