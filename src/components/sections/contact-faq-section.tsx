import { FaqAccordionSection, type FaqItem } from "@/components/sections/faq-section";

const CONTACT_FAQS: FaqItem[] = [
  {
    id: "really-free",
    q: "Is the IPTV free trial really free?",
    a: "Completely. No payment, no card details, and nothing to cancel afterwards. The trial runs for 24 hours and simply expires on its own — you only pay if you decide to subscribe.",
  },
  {
    id: "no-card",
    q: "Do I need to give card or payment details for the trial?",
    a: 'No. Unlike many "free trials" online, we never ask for payment information upfront. Send us a WhatsApp message, get your login, start watching — that\'s it.',
  },
  {
    id: "how-long",
    q: "How long does it take to get my free trial?",
    a: "Usually just a few minutes. Message us on WhatsApp, and your trial credentials arrive as soon as an agent picks it up — our team is online around the clock.",
  },
  {
    id: "after-trial",
    q: "What happens when my 24-hour trial ends?",
    a: "Access simply stops. There's no automatic charge and no obligation. If you enjoyed the service, reply to the same WhatsApp chat and choose a plan — activation on a paid subscription is instant, with plans from £9.99.",
  },
  {
    id: "any-device",
    q: "Can I get a free trial on any device?",
    a: "Yes. The trial works on everything the full service supports — Firestick, Smart TVs, Android, iPhone, iPad, Windows PC, Mac and MAG boxes. Tell us your device when you message and we'll send the right setup steps with your login.",
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
          IPTV Free Trial –{" "}
          <span style={{ color: "var(--hero-accent)" }}>Frequently Asked Questions</span>
        </>
      }
    />
  );
}
