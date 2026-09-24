import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Mail, MessageCircle } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/lib/site";
import { routes } from "@/lib/routes";

const FOOTER_LINKS = {
  service: [
    { label: "Home", href: routes.home },
    { label: "Subscription Plan", href: routes.subscriptionPlans },
    { label: "Installation Guide", href: routes.installationGuide },
    { label: "Reseller Panel", href: routes.resellerPanel },
    { label: "Contact Us", href: routes.contactUs },
  ],
  support: [
    { label: "Pricing Plans", href: `${routes.subscriptionPlans}#pricing` },
    { label: "Free Trial", href: routes.contactUs },
    { label: "Device Compatibility", href: `${routes.home}#device-compatibility` },
    { label: "FAQ", href: `${routes.home}#faq` },
  ],
};

const TRUST_POINTS = [
  "40,000+ Live Channels",
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
            <Link href={routes.home} className="inline-flex items-center gap-2.5 no-underline">
              <Image
                src="/strong-8k.PNG?v=2"
                alt="Strong 8K IPTV"
                width={64}
                height={64}
                unoptimized
                className="h-12 w-12 object-contain sm:h-[3.25rem] sm:w-[3.25rem]"
              />
            </Link>

            <p
              className="mt-4 max-w-sm text-sm leading-relaxed"
              style={{ color: "var(--footer-muted)" }}
            >
              Live television and on-demand viewing for UK & USA customers —
              40,000+ live channels, 120,000+ on-demand titles and supported
              streams up to 8K UHD.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {TRUST_POINTS.map((point) => (
                <span
                  key={point}
                  className="rounded-full border px-3 py-1 text-[11px] font-medium"
                  style={{
                    borderColor: "rgba(255, 255, 255, 0.22)",
                    backgroundColor: "transparent",
                    color: "var(--hero-pill-text)",
                  }}
                >
                  {point}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--hero-accent)]"
                style={{ color: "var(--footer-link)" }}
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                {siteConfig.phone}
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
          <div className="grid gap-10 sm:grid-cols-2">
            {Object.entries(FOOTER_LINKS).map(([group, links]) => (
              <div key={group}>
                <h3
                  className="text-xs font-bold uppercase tracking-[0.18em]"
                  style={{ color: "var(--hero-accent)" }}
                >
                  {group === "service" ? "Service" : "Support"}
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
            {siteConfig.name} is an independent service provider. Channel
            availability and playback features may vary by programme, device,
            location and applicable rights.
          </p>
        </div>
      </Container>
    </footer>
  );
}
