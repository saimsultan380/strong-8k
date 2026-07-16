"use client";

import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

const COMPARISON_ROWS = [
  {
    feature: "Picture quality",
    hd: "HD / Full HD (1080p)",
    fourk: "Up to Ultra HD (2160p) on supported channels",
  },
  {
    feature: "Works on",
    hd: "Every Fire TV device",
    fourk: "Best on Fire TV Stick 4K / 4K Max / Cube",
  },
  {
    feature: "Recommended internet",
    hd: "25 Mbps+",
    fourk: "50 Mbps+",
  },
  {
    feature: "Channels & VOD",
    hd: "Full library",
    fourk: "Full library",
  },
  {
    feature: "Sports coverage",
    hd: "All sports channels",
    fourk: "All sports channels in the highest quality",
  },
  {
    feature: "Best for",
    hd: "Everyday viewing, older devices, smaller TVs",
    fourk: "Big screens, sport in max detail, movie nights",
  },
];

export function SubscriptionHdVs4k() {
  return (
    <section
      id="hd-vs-4k"
      className="relative isolate overflow-hidden py-20 md:py-28 border-t"
      style={{
        backgroundColor: "var(--hero-base)",
        borderColor: "var(--feature-card-border)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 40% 60% at 50% 50%, color-mix(in srgb, var(--hero-accent) 4%, transparent) 0%, transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn delay={0.05}>
            <span
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--hero-accent)" }}
            >
              Which Plan To Choose
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2
              className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
              style={{ color: "var(--hero-heading)" }}
            >
              HD or 4K –{" "}
              <span style={{ color: "var(--hero-accent)" }}>
                Which Firestick Plan Should You Pick?
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p
              className="mx-auto mt-6 max-w-[720px] text-sm leading-[1.75] sm:text-[15px] md:text-base"
              style={{ color: "var(--hero-muted)" }}
            >
              The honest answer: most people are perfectly happy with HD. But if you pair a Firestick with IPTV on a large 4K television, the premium plans earn their price. Here's the side-by-side:
            </p>
          </FadeIn>
        </div>

        {/* Comparison Table */}
        <div className="mx-auto mt-12 max-w-4xl">
          <ScrollReveal direction="up" delay={0.1} once>
            <div
              className="overflow-x-auto rounded-2xl border"
              style={{
                borderColor: "var(--feature-card-border)",
                backgroundColor: "var(--feature-card-bg)",
                boxShadow: "var(--feature-card-shadow)",
              }}
            >
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr
                    className="border-b"
                    style={{
                      borderColor: "var(--feature-card-border)",
                      backgroundColor: "color-mix(in srgb, var(--hero-accent) 6%, var(--feature-card-bg))",
                    }}
                  >
                    <th
                      className="px-6 py-4 font-bold text-xs uppercase tracking-wider"
                      style={{ color: "var(--hero-heading)" }}
                    >
                      Feature
                    </th>
                    <th
                      className="px-6 py-4 font-bold text-xs uppercase tracking-wider"
                      style={{ color: "var(--hero-heading)" }}
                    >
                      Standard HD
                    </th>
                    <th
                      className="px-6 py-4 font-bold text-xs uppercase tracking-wider"
                      style={{ color: "var(--hero-accent)" }}
                    >
                      Premium 4K
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y" style={{ borderColor: "var(--feature-card-border)" }}>
                  {COMPARISON_ROWS.map((row) => (
                    <tr
                      key={row.feature}
                      className="transition-colors hover:bg-[color-mix(in_srgb,var(--hero-accent)_2%,transparent)]"
                      style={{ borderColor: "var(--feature-card-border)" }}
                    >
                      <td
                        className="px-6 py-4 font-semibold text-xs sm:text-sm"
                        style={{ color: "var(--hero-heading)" }}
                      >
                        {row.feature}
                      </td>
                      <td
                        className="px-6 py-4 text-xs sm:text-sm"
                        style={{ color: "var(--hero-muted)" }}
                      >
                        {row.hd}
                      </td>
                      <td
                        className="px-6 py-4 text-xs sm:text-sm font-medium"
                        style={{ color: "var(--hero-heading)" }}
                      >
                        {row.fourk}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* Rule of thumb callout */}
          <ScrollReveal direction="up" delay={0.15} once>
            <div
              className="mt-8 rounded-2xl border p-5 text-center text-xs leading-[1.7] sm:p-6 sm:text-sm"
              style={{
                borderColor: "var(--feature-card-border)",
                backgroundColor: "color-mix(in srgb, var(--hero-accent) 4%, var(--feature-card-bg))",
                color: "var(--hero-muted)",
              }}
            >
              <strong style={{ color: "var(--hero-heading)" }}>Rule of thumb:</strong> TV under 50 inches or internet under 50 Mbps? Choose HD and save the difference. Big 4K TV with fast internet? The 4K plan is worth it.
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
