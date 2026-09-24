import { FaqAccordionSection, type FaqItem } from "@/components/sections/faq-section";

const INSTALLATION_FAQS: FaqItem[] = [
  {
    id: "how-long",
    q: "How long does Strong 8K IPTV setup take?",
    a: "App availability, download time and the login method vary. A simple player login may be quick; allow extra time for a television app that uses a device ID.",
  },
  {
    id: "which-app",
    q: "Which IPTV app should I use?",
    a: "Choose one for your exact device that accepts the format in your welcome message. Verify its publisher and any app licence fee.",
  },
  {
    id: "multi-device",
    q: "Can I install Strong 8K IPTV on two devices?",
    a: "You can install a compatible player on more than one device, but a standard connection plays on one screen at a time. A Firestick and phone need separate active streams if used simultaneously.",
  },
  {
    id: "vpn",
    q: "Do I need a VPN?",
    a: "A VPN is not required for setup. If you choose to use one for privacy, check its compatibility with your player and account terms.",
  },
  {
    id: "playlist",
    q: "What is a playlist link?",
    a: "An M3U link is a playlist address. Xtream Codes is a server URL with a username and password. These configure a Strong 8K IPTV player; they do not add extra channels.",
  },
  {
    id: "other-device",
    q: "What if my device is not shown here?",
    a: "Send its make, model and operating system to support for a current compatibility check. A 24-hour trial can help you test the player once it is set up.",
  },
];

export function InstallationFaqSection() {
  return (
    <FaqAccordionSection
      faqs={INSTALLATION_FAQS}
      defaultOpenId="how-long"
      title={
        <>
          Installation{" "}
          <span style={{ color: "var(--hero-accent)" }}>FAQs</span>
        </>
      }
    />
  );
}
