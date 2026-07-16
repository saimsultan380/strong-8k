import { FaqAccordionSection, type FaqItem } from "@/components/sections/faq-section";

const INSTALLATION_FAQS: FaqItem[] = [
  {
    id: "how-long",
    q: "How long does Strong 8K IPTV setup take?",
    a: "For most devices, under 5 minutes. Firestick and Android devices are the quickest. Samsung/LG TVs using MAC-based apps take slightly longer — up to 15 minutes — because of the one-time activation step.",
  },
  {
    id: "which-app",
    q: "Which IPTV app should I use with Strong 8K?",
    a: "You can't really go wrong: IPTV Smarters Pro works on every device. For the best experience per device, we recommend VUI IPTV Player on Android phones, IPTV Stream Player on iPhone and Mac, and TiviMate on Firestick/Android TV.",
  },
  {
    id: "multi-device",
    q: "Can I install Strong 8K IPTV on more than one device?",
    a: "Yes — install it on as many devices as you like using the same login. A standard subscription streams to one screen at a time; multi-screen plans are available if you want simultaneous viewing.",
  },
  {
    id: "vpn",
    q: "Do I need a VPN to use Strong 8K IPTV?",
    a: "The service works without a VPN. Some customers choose to use one for privacy, and that's fine too — Strong 8K runs normally alongside all major VPN apps.",
  },
  {
    id: "m3u-xtream",
    q: "What is an M3U link or Xtream Codes login?",
    a: "They're simply two formats of the same login. Xtream Codes is a username + password + server URL (easiest for most apps). M3U is a single playlist link. Your welcome message includes both — use whichever your app asks for.",
  },
  {
    id: "other-device",
    q: "My device isn't listed here — can I still use Strong 8K?",
    a: "Almost certainly. Strong 8K supports M3U, Xtream Codes, MAG and Enigma2 formats, which covers nearly every streaming device made in the last decade. Message our team with your device name and we'll send tailored steps.",
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
