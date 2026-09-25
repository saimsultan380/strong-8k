"use client";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";

const APPS = [
  {
    app: "Strong 8K app from its verified publisher",
    bestFor: "Firestick, Fire TV, supported Android TV and Android devices",
    code: "4330396",
  },
  {
    app: "Compatible player from the device’s official app store",
    bestFor: "Samsung/LG TV, iPhone/iPad, Windows and Mac",
    code: "Search the relevant store; no Downloader code required",
  },
];

const RECOMMENDED_BY_DEVICE = [
  {
    device: "Supported Smart TVs",
    apps: "CR7 Player, IBO Player, HOT IPTV and SmartOne IPTV",
  },
  {
    device: "iPhone and iPad",
    apps: "iPlayTV AIO",
  },
  {
    device: "Windows",
    apps: "IBO Player or IPTV Smarters Expert",
  },
  {
    device: "Compatible Apple devices",
    apps: "IBO Player Pro",
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
            Strong 8K App and{" "}
            <span style={{ color: "var(--hero-accent)" }}>Downloader Code</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p
            className="mt-5 max-w-3xl text-[15px] leading-[1.75]"
            style={{ color: "var(--hero-muted)" }}
          >
            Download the Strong 8K app using Downloader code 4330396 on a Firestick or supported
            Android device. Before permitting installation outside the device’s store, confirm that
            4330396 points to the app and publisher you intended to install.
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
                    {["App/source", "Common devices", "Code or source"].map((header) => (
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
            Player options include CR7 Player, IBO Player, HOT IPTV and SmartOne IPTV for supported
            Smart TVs; iPlayTV AIO for iPhone and iPad; IBO Player or IPTV Smarters Expert for
            Windows; and IBO Player Pro for compatible Apple devices. Availability, app charges and
            login options vary by model and region. Check the listing for your exact device.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <h3
            className="mt-12 text-xl font-bold sm:text-2xl"
            style={{ color: "var(--hero-heading)" }}
          >
            Player options by device
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
