import { FaqAccordionSection, type FaqItem } from "@/components/sections/faq-section";

const RESELLER_FAQS: FaqItem[] = [
  {
    id: "retail-price",
    q: "Can I set my own retail price?",
    a: "Yes. You choose the price you charge customers. Your margin depends on credit costs, payment fees and the cost of supporting those customers.",
  },
  {
    id: "expire",
    q: "Do the credits expire?",
    a: "No. Unused credits remain available until you use them.",
  },
  {
    id: "white-label",
    q: "Can I use a white label?",
    a: "Yes. Branding options are available. Contact support to discuss the setup and any applicable charges.",
  },
  {
    id: "sub-resellers",
    q: "Can I create sub-resellers?",
    a: "Sub-reseller tools are available. Ask support to explain the access requirements and how credits are allocated.",
  },
  {
    id: "twelve-month",
    q: "What does a 12-month line cost?",
    a: "Twelve credits at the displayed usage rule; the cash cost depends on the current price per credit.",
  },
  {
    id: "minimum",
    q: "Is there a minimum purchase?",
    a: "The Starter package contains 120 credits. You can request a demonstration before choosing a package.",
  },
  {
    id: "support",
    q: "Who supports my customers?",
    a: "You manage the customer relationship, with Strong 8K support available for service and panel issues. Every package includes the same infrastructure, with Anti-Freeze technology and 99.9% server uptime.",
  },
];

export function ResellerFaqSection() {
  return (
    <FaqAccordionSection
      faqs={RESELLER_FAQS}
      defaultOpenId="retail-price"
      eyebrow="FAQ"
      description="Clear answers about credits, branding, sub-resellers, and support."
      title={
        <>
          Strong 8K reseller panel{" "}
          <span style={{ color: "var(--hero-accent)" }}>FAQs</span>
        </>
      }
    />
  );
}
