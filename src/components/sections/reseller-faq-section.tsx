import { FaqAccordionSection, type FaqItem } from "@/components/sections/faq-section";

const RESELLER_FAQS: FaqItem[] = [
  {
    id: "profitable",
    q: "How profitable is reselling Strong 8K IPTV in the UK?",
    a: "Very — because your margin is built in from day one. As your IPTV supplier, we keep wholesale rates low: at the Pro rate, a 12-month line costs you £18 in credits and typically sells for £40–£45 in the UK market. Renewals repeat that margin every year without any new customer acquisition.",
  },
  {
    id: "expire",
    q: "Do my credits expire?",
    a: "Never. Your balance stays in your account until you use it — no deadlines, no monthly minimums, no forced renewals.",
  },
  {
    id: "white-label",
    q: "Can I brand the panel as my own business?",
    a: "Yes. White label branding is available to all resellers, so your customers see your business name throughout. Setup is handled by our team, usually within 1–2 days.",
  },
  {
    id: "sub-resellers",
    q: "Can I create sub-resellers under my account?",
    a: "Yes. Established resellers can create sub-reseller accounts, supply them with credits at a marked-up rate, and earn on every credit they spend. Ask our team about the unlock requirements when you order.",
  },
  {
    id: "migrate",
    q: "I already resell another IPTV service — can I migrate my customers?",
    a: "Yes, and it's easier than you'd expect. Our team will help you plan the switch so your existing customers move across with minimal disruption — most migrations complete within a few days.",
  },
  {
    id: "payment",
    q: "What payment methods do you accept for credits?",
    a: "All major methods — our team confirms the options available for your location when you order, and every purchase comes with an invoice as proof of payment.",
  },
  {
    id: "minimum",
    q: "Is there a minimum purchase to become a reseller?",
    a: "The Starter Pack (120 credits) is the entry point — contact support for price. No contracts and no obligation to top up on any schedule.",
  },
  {
    id: "support",
    q: "Do you support my customers directly, or only me?",
    a: "The reseller model keeps you as the face of your business: your customers contact you, and our 24/7 reseller support backs you up with fast answers to pass on. For technical escalations, we work with you directly until the issue is solved.",
  },
];

export function ResellerFaqSection() {
  return (
    <FaqAccordionSection
      faqs={RESELLER_FAQS}
      defaultOpenId="profitable"
      eyebrow="FAQ"
      description="Clear answers about credits, branding, sub-resellers, payments, and support."
      title={
        <>
          Strong 8K Reseller Panel –{" "}
          <span style={{ color: "var(--hero-accent)" }}>Frequently Asked Questions</span>
        </>
      }
    />
  );
}
