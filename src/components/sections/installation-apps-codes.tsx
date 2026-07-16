"use client";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";

const APPS = [
  {
    app: "Official Strong 8K",
    bestFor: "Firestick, Fire TV, Android TV, Android Phones & Tablets",
    code: "2675245",
  },
];

const RECOMMENDED_BY_DEVICE = [
  {
    device: "Samsung & LG Smart TVs",
    apps: "CR7 Player, IBO Player, HOT IPTV, SmartOne IPTV, Official Strong 8K App (when available)",
  },
  {
    device: "Apple TV & Mac",
    apps: "IBO Player Pro",
  },
  {
    device: "iPhone & iPad",
    apps: "iPlayTV AIO",
  },
  {
    device: "Windows PC",
    apps: "IBO Player (Microsoft Store) or IPTV Smarters Expert",
  },
];

export function InstallationAppsCodes() {
  return (
    <section
      id="apps-codes"
      className="relative isolate overflow-hidden py-16 md:py-24"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <FadeIn delay={0.05}>
          <span
            className="text-[11px] font-bold uppercase tracking-[0.22em]"
            style={{ color: "var(--hero-accent)" }}
          >
            Apps & Codes
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
            style={{ color: "var(--hero-heading)" }}
          >
            Recommended Apps &{" "}
            <span style={{ color: "var(--hero-accent)" }}>Downloader Codes</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p
            className="mt-5 max-w-3xl text-[15px] leading-[1.75]"
            style={{ color: "var(--hero-muted)" }}
          >
            On Firestick and Android devices, the fastest way to install Strong 8K IPTV is with the
            free Downloader by AFTVnews. Simply open Downloader, enter the code below, and install
            the app within minutes.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div
            className="mt-10 overflow-hidden rounded-2xl border"
            style={{ borderColor: "var(--feature-card-border)" }}
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[520px] text-left text-sm sm:text-[15px]">
                <thead>
                  <tr
                    style={{
                      borderBottom: "1px solid var(--feature-card-border)",
                      backgroundColor: "transparent",
                    }}
                  >
                    {["App", "Best For", "Downloader Code"].map((header) => (
                      <th
                        key={header}
                        className="px-5 py-4 font-bold md:px-6"
                        style={{ color: "var(--hero-heading)" }}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {APPS.map((row) => (
                    <tr
                      key={row.app}
                      style={{ borderBottom: "1px solid var(--feature-card-border)" }}
                    >
                      <td
                        className="px-5 py-4 font-semibold md:px-6"
                        style={{ color: "var(--hero-heading)" }}
                      >
                        {row.app}
                      </td>
                      <td className="px-5 py-4 md:px-6" style={{ color: "var(--hero-muted)" }}>
                        {row.bestFor}
                      </td>
                      <td
                        className="px-5 py-4 font-mono md:px-6"
                        style={{ color: "var(--hero-accent)" }}
                      >
                        {row.code}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p
            className="mt-6 max-w-3xl text-sm leading-[1.75] sm:text-[15px]"
            style={{ color: "var(--hero-muted)" }}
          >
            Using a Samsung, LG, Apple TV, iPhone, iPad, or Mac? Those devices install apps directly
            from their own app stores, so no Downloader code is required.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <h3
            className="mt-12 text-xl font-bold sm:text-2xl"
            style={{ color: "var(--hero-heading)" }}
          >
            Recommended Apps by Device
          </h3>
        </FadeIn>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {RECOMMENDED_BY_DEVICE.map((row) => (
            <div
              key={row.device}
              className="rounded-2xl border p-5"
              style={{
                borderColor: "var(--feature-card-border)",
                backgroundColor: "transparent",
              }}
            >
              <p className="text-sm font-bold" style={{ color: "var(--hero-accent)" }}>
                {row.device}
              </p>
              <p
                className="mt-2 text-sm leading-[1.7]"
                style={{ color: "var(--feature-body)" }}
              >
                {row.apps}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
