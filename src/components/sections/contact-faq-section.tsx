import { FaqAccordionSection, type FaqItem } from "@/components/sections/faq-section";
import Link from "next/link";
import { routes } from "@/lib/routes";

const CONTACT_FAQS: FaqItem[] = [
  {
    id: "what-to-send",
    q: "What information should I send?",
    a: "For a technical issue, include your device model, app name, when the problem started and any error message. Keep passwords and playlist links out of public screenshots.",
  },
  {
    id: "trial",
    q: "How do I request a trial?",
    a: "Use Request My Free Trial on this page, or message us on WhatsApp with your device model. The trial lasts 24 hours, needs no card details and expires without a charge.",
  },
  {
    id: "renew",
    q: "How do I renew?",
    a: (
      <>
        Message support with your account details before the subscription ends, or choose a new
        duration on the{" "}
        <Link
          href={routes.subscriptionPlans}
          className="font-semibold underline"
          style={{ color: "var(--hero-heading)" }}
        >
          Pricing
        </Link>{" "}
        page. Renewal is optional.
      </>
    ),
  },
  {
    id: "playback",
    q: "Where do I report a playback problem?",
    a: "Send it by WhatsApp or the enquiry form. Include the device, the app and what you see on screen. Support continues throughout your active subscription.",
  },
  {
    id: "after-seven",
    q: "Is support available after seven days?",
    a: "Yes. Technical support continues after the first seven days. The 7-day money-back guarantee applies only to refund requests made within those seven days.",
  },
];

export function ContactFaqSection() {
  return (
    <FaqAccordionSection
      faqs={CONTACT_FAQS}
      defaultOpenId="what-to-send"
      eyebrow="FAQ"
      description="What to send, trials, renewals and support after seven days."
      title={
        <>
          Contact and Support{" "}
          <span style={{ color: "var(--hero-accent)" }}>Questions</span>
        </>
      }
    />
  );
}
