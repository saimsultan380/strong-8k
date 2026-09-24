import { FaqAccordionSection, type FaqItem } from "@/components/sections/faq-section";
import Link from "next/link";
import { routes } from "@/lib/routes";

const CONTACT_FAQS: FaqItem[] = [
  {
    id: "really-free",
    q: "Is the IPTV free trial really free?",
    a: "Yes. It lasts 24 hours, requires no card details and ends without an automatic charge.",
  },
  {
    id: "no-card",
    q: "Do I need to give payment details?",
    a: "No. You can request and use the test without supplying payment details.",
  },
  {
    id: "how-soon",
    q: "How soon does access start?",
    a: "Strong 8K support sends your login and confirms when the 24-hour trial starts. Our 24/7 team can help with the first login if you need assistance.",
  },
  {
    id: "after-trial",
    q: "What happens when it ends?",
    a: "Access expires automatically. You do not need to cancel, and you will not be charged. Choose a paid plan only if you want to continue.",
  },
  {
    id: "any-device",
    q: "Can I test any device?",
    a: (
      <>
        A compatible player is required. Tell support your exact Smart TV, Firestick, phone or
        computer model and check the{" "}
        <Link
          href={routes.installationGuide}
          className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
          style={{ color: "var(--hero-heading)" }}
        >
          Installation Guide
        </Link>
        .
      </>
    ),
  },
];

export function ContactFaqSection() {
  return (
    <FaqAccordionSection
      faqs={CONTACT_FAQS}
      defaultOpenId="really-free"
      eyebrow="FAQ"
      description="Clear answers about the Strong 8K free trial, activation, devices, and what happens when your 24 hours end."
      title={
        <>
          IPTV free trial{" "}
          <span style={{ color: "var(--hero-accent)" }}>FAQs</span>
        </>
      }
    />
  );
}
