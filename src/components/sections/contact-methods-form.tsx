"use client";

import { FormEvent, useState } from "react";
import { MessageCircle, Mail } from "lucide-react";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { siteConfig } from "@/lib/site";

const WHATSAPP_LINK = "https://wa.me/447401921250";

const DEVICES = [
  "Firestick / Fire TV",
  "Android TV / Android Phone",
  "iPhone / iPad",
  "Samsung Smart TV",
  "LG Smart TV",
  "Windows PC",
  "Mac",
  "MAG Box",
  "Other",
];

const inputClass =
  "w-full rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--hero-accent)]";
const inputStyle = {
  borderColor: "var(--feature-card-border)",
  color: "var(--hero-heading)",
} as const;

export function ContactMethodsForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const whatsapp = String(data.get("whatsapp") || "").trim();
    const device = String(data.get("device") || "").trim();
    const message = String(data.get("message") || "").trim();

    const text = [
      "Strong 8K Contact Form",
      `Name: ${name}`,
      `Email: ${email}`,
      `WhatsApp: ${whatsapp}`,
      `Device: ${device}`,
      `Message: ${message}`,
    ].join("\n");

    window.open(
      `${WHATSAPP_LINK}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSubmitted(true);
    form.reset();
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden py-12 md:py-16"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <FadeIn delay={0.05}>
          <span
            className="text-[11px] font-bold uppercase tracking-[0.22em]"
            style={{ color: "var(--hero-accent)" }}
          >
            Get in Touch
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="mt-3 max-w-3xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-[36px]"
            style={{ color: "var(--hero-heading)" }}
          >
            Contact Strong 8K –{" "}
            <span style={{ color: "var(--hero-accent)" }}>We Reply Fast</span>
          </h2>
        </FadeIn>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <ScrollReveal direction="up" delay={0.05} once>
            <a
              href={WHATSAPP_LINK}
              className="flex h-full flex-col rounded-2xl border p-5 transition-colors hover:border-[var(--hero-accent)] sm:p-6"
              style={{
                borderColor: "var(--feature-card-border)",
                backgroundColor: "transparent",
              }}
            >
              <MessageCircle
                className="h-5 w-5"
                style={{ color: "var(--hero-accent)" }}
                strokeWidth={1.75}
              />
              <p className="mt-4 text-base font-bold" style={{ color: "var(--hero-heading)" }}>
                WhatsApp (fastest)
              </p>
              <p className="mt-2 text-sm leading-[1.7]" style={{ color: "var(--feature-body)" }}>
                Our team is online 24/7, and most messages get a reply within 5 minutes. Trials,
                orders, renewals and technical help all happen here.
              </p>
            </a>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1} once>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex h-full flex-col rounded-2xl border p-5 transition-colors hover:border-[var(--hero-accent)] sm:p-6"
              style={{
                borderColor: "var(--feature-card-border)",
                backgroundColor: "transparent",
              }}
            >
              <Mail
                className="h-5 w-5"
                style={{ color: "var(--hero-accent)" }}
                strokeWidth={1.75}
              />
              <p className="mt-4 text-base font-bold" style={{ color: "var(--hero-heading)" }}>
                Email
              </p>
              <p className="mt-2 text-sm leading-[1.7]" style={{ color: "var(--feature-body)" }}>
                <span style={{ color: "var(--hero-accent)" }}>{siteConfig.email}</span> — best for
                detailed queries or anything with screenshots attached. We respond within a few
                hours.
              </p>
            </a>
          </ScrollReveal>
        </div>

        <FadeIn delay={0.15}>
          <p
            className="mt-8 text-sm leading-[1.75] sm:text-[15px]"
            style={{ color: "var(--hero-muted)" }}
          >
            <span className="font-semibold" style={{ color: "var(--hero-heading)" }}>
              Contact form:
            </span>{" "}
            Fill in the form below and we&apos;ll get back to you by email or WhatsApp — whichever
            you prefer.
          </p>
        </FadeIn>

        <ScrollReveal direction="up" delay={0.1} once>
          <form
            onSubmit={handleSubmit}
            className="mt-6 rounded-2xl border p-5 sm:p-7 md:p-8"
            style={{
              borderColor: "var(--feature-card-border)",
              backgroundColor: "transparent",
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--hero-muted)" }}>
                  Name
                </span>
                <input
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className={inputClass}
                  style={inputStyle}
                />
              </label>

              <label className="block space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--hero-muted)" }}>
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={inputClass}
                  style={inputStyle}
                />
              </label>

              <label className="block space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--hero-muted)" }}>
                  WhatsApp Number
                </span>
                <input
                  name="whatsapp"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="+44 7xxx xxx xxx"
                  className={inputClass}
                  style={inputStyle}
                />
              </label>

              <label className="block space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--hero-muted)" }}>
                  Device
                </span>
                <select
                  name="device"
                  required
                  defaultValue=""
                  className={inputClass}
                  style={inputStyle}
                >
                  <option value="" disabled>
                    Select your device
                  </option>
                  {DEVICES.map((device) => (
                    <option key={device} value={device} style={{ color: "#000" }}>
                      {device}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="mt-4 block space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--hero-muted)" }}>
                Message
              </span>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell us what you need — free trial, setup help, plan advice..."
                className={`${inputClass} resize-y`}
                style={inputStyle}
              />
            </label>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center rounded-xl px-7 py-3.5 text-sm font-bold transition-all duration-200 hover:brightness-110 sm:text-[15px]"
                style={{
                  background: "var(--hero-cta-primary-bg)",
                  boxShadow: "var(--hero-cta-primary-shadow)",
                  color: "var(--hero-cta-primary-fg)",
                }}
              >
                Send Message →
              </button>
              {submitted ? (
                <p className="text-sm" style={{ color: "var(--hero-accent)" }}>
                  Opening WhatsApp with your message…
                </p>
              ) : null}
            </div>
          </form>
        </ScrollReveal>
      </Container>
    </section>
  );
}
