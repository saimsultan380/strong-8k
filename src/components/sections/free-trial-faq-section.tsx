import { FaqAccordionSection, type FaqItem } from "@/components/sections/faq-section";

const CONTACT_FAQS: FaqItem[] = [
  {
    id: "how-contact",
    q: "What is the fastest way to contact Strong 8K?",
    a: "WhatsApp — message us any time and a real person replies, usually within minutes. It's the same line we use for free trials, subscriptions, setup help, and reseller enquiries.",
  },
  {
    id: "trial",
    q: "How do I request a free 24-hour trial?",
    a: 'Message us on WhatsApp with "Free Trial" and we\'ll send your Strong 8K login details within minutes. No credit card and no commitment required.',
  },
  {
    id: "setup-help",
    q: "Can you help me set up Strong 8K on my device?",
    a: "Yes — we guide customers through setup live on WhatsApp for Firestick, Android TV, Smart TVs, iPhone, Android, Windows and Mac. You can also follow our Installation Guide step by step.",
  },
  {
    id: "response-time",
    q: "How quickly will I get a reply?",
    a: "WhatsApp messages are answered within minutes, 24 hours a day — including evenings and weekends. Email replies typically arrive within 24 hours.",
  },
  {
    id: "reseller",
    q: "I want to become a reseller — who do I contact?",
    a: "Message us on WhatsApp about the Strong 8K reseller panel. We can walk you through credit packages from £59.99, send a panel demo, and explain white label branding.",
  },
  {
    id: "login-issue",
    q: "My login isn't working — what should I send you?",
    a: "Message WhatsApp with your Strong 8K username and a brief description of the issue. We'll check your line, refresh it if needed, and get you back streaming fast.",
  },
  {
    id: "after-trial",
    q: "What happens after my free trial ends?",
    a: "Nothing automatic — no charges, no follow-up spam. If you enjoyed Strong 8K, choose a plan on our Subscription Plans page and your full subscription activates instantly.",
  },
];

export function FreeTrialFaqSection() {
  return (
    <FaqAccordionSection
      faqs={CONTACT_FAQS}
      defaultOpenId="how-contact"
      title={
        <>
          Contact &amp; Support{" "}
          <span style={{ color: "var(--hero-accent)" }}>FAQs</span>
        </>
      }
    />
  );
}
