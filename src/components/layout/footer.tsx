import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

const FOOTER_LINKS = {
  service: [
    { label: "Home", href: "/" },
    { label: "Subscription Plan", href: "/subscription-plans" },
    { label: "Installation Guide", href: "/installation-guide" },
    { label: "Reseller Panel", href: "/reseller-panel" },
    { label: "Contact Us", href: "/contact-us" },
  ],
  support: [
    { label: "Pricing Plans", href: "/subscription-plans#pricing" },
    { label: "Free Trial", href: "/contact-us" },
    { label: "Device Compatibility", href: "#device-compatibility" },
    { label: "FAQ", href: "#faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Refund Policy", href: "#" },
  ],
};

const TRUST_POINTS = [
  "20,000+ Live Channels",
  "7-Day Money-Back Guarantee",
  "24/7 UK Support",
  "No Contract",
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative isolate border-t"
      style={{
        backgroundColor: "var(--footer-bg)",
        borderColor: "var(--footer-border)",
      }}
    >


      <Container className="py-14 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr] lg:gap-16">
          {/* Brand column */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5 no-underline">
              <Image
                src="/strong-8k.PNG"
                alt="Strong 8K IPTV"
                width={56}
                height={56}
                unoptimized
                className="h-12 w-12 object-contain sm:h-14 sm:w-14"
              />
            </Link>

            <p
              className="mt-4 max-w-sm text-sm leading-relaxed"
              style={{ color: "var(--footer-muted)" }}
            >
              Premium IPTV streaming for UK & USA — 40,000+ live channels,
              120,000+ on-demand titles, up to 8K UHD, and instant activation.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {TRUST_POINTS.map((point) => (
                <span
                  key={point}
                  className="rounded-full border px-3 py-1 text-[11px] font-medium"
                  style={{
                    borderColor: "var(--hero-pill-border)",
                    backgroundColor: "var(--hero-pill-bg)",
                    color: "var(--hero-pill-text)",
                  }}
                >
                  {point}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--hero-accent)]"
                style={{ color: "var(--footer-link)" }}
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                WhatsApp Support
              </a>
              <span
                className="hidden h-4 w-px sm:block"
                style={{ backgroundColor: "var(--footer-border)" }}
                aria-hidden
              />
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--hero-accent)]"
                style={{ color: "var(--footer-link)" }}
              >
                <Mail className="h-4 w-4" aria-hidden />
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid gap-10 sm:grid-cols-3">
            {Object.entries(FOOTER_LINKS).map(([group, links]) => (
              <div key={group}>
                <h3
                  className="text-xs font-bold uppercase tracking-[0.18em]"
                  style={{ color: "var(--hero-accent)" }}
                >
                  {group === "service"
                    ? "Service"
                    : group === "support"
                      ? "Support"
                      : "Legal"}
                </h3>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm transition-colors duration-150 hover:text-[var(--hero-accent)]"
                        style={{ color: "var(--footer-link)" }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 flex flex-col gap-4 border-t pt-8 md:flex-row md:items-center md:justify-between"
          style={{ borderColor: "var(--footer-border)" }}
        >
          <p className="text-xs" style={{ color: "var(--footer-muted)" }}>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p
            className="max-w-xl text-xs leading-relaxed md:text-right"
            style={{ color: "var(--footer-muted)" }}
          >
            {siteConfig.name} is an independent streaming service provider. Channel
            availability may vary. Use responsibly and in accordance with local
            regulations.
          </p>
        </div>
      </Container>
    </footer>
  );
}
