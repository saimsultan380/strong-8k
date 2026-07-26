import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { pageDescriptions, pageTitles } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: pageTitles.notFound },
  description: pageDescriptions.notFound,
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
      noimageindex: true,
    },
  },
};

const HELPFUL_LINKS = [
  { label: "Home", href: "/" },
  { label: "Subscription Plans", href: "/subscription-plans/" },
  { label: "Installation Guide", href: "/installation-guide/" },
  { label: "Reseller Panel", href: "/reseller-panel/" },
  { label: "Free Trial / Contact", href: "/contact-us/" },
];

export default function NotFound() {
  return (
    <main className="relative flex min-h-full flex-1 flex-col">
      <Header />
      <section className="relative flex flex-1 items-center py-20 md:py-28">
        <Container className="relative z-10 max-w-2xl text-center">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.28em]"
            style={{ color: "var(--hero-accent)" }}
          >
            Error 404
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p
            className="mx-auto mt-4 max-w-md text-sm leading-relaxed sm:text-base"
            style={{ color: "var(--hero-muted)" }}
          >
            This URL doesn&apos;t exist or may have moved. Use the links below
            to get back to Strong 8K IPTV.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-gradient-brand px-7 py-3 text-sm font-bold text-black transition-all duration-200 hover:brightness-110"
              style={{ boxShadow: "var(--hero-cta-primary-shadow)" }}
            >
              Back to Home
            </Link>
            <Link
              href="/contact-us/"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border px-7 py-3 text-sm font-semibold transition-colors hover:bg-white/5"
              style={{
                borderColor: "var(--hero-btn-border)",
                color: "var(--hero-cta-secondary-text)",
              }}
            >
              Contact Support
            </Link>
          </div>

          <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {HELPFUL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm transition-colors hover:text-[var(--hero-accent)]"
                  style={{ color: "var(--hero-muted)" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
