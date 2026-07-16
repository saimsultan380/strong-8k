"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Wifi,
  Tv2,
  User,
  CreditCard,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

// ─── What You'll Need ────────────────────────────────────────────────────────
const REQUIREMENTS = [
  {
    Icon: Tv2,
    text: "Any Amazon Fire TV device — Fire TV Stick Lite, HD, 4K, 4K Max, or Fire TV Cube",
  },
  {
    Icon: CheckCircle2,
    text: "A TV with an HDMI port (the HDMI extender in the box helps if your port is in a tight spot)",
  },
  {
    Icon: Wifi,
    text: "A WiFi connection — 25 Mbps+ for HD and 50 Mbps+ for 4K streaming",
  },
  {
    Icon: User,
    text: "An Amazon account — a free account works fine",
  },
  {
    Icon: CreditCard,
    text: "An active IPTV for Firestick subscription — you'll receive your login details (username, password, and server URL) from your provider",
  },
];

// ─── Parts ───────────────────────────────────────────────────────────────────
const PARTS = [
  {
    id: "part-1",
    part: "Part 1",
    title: "Setting Up Your Fire TV Stick for the First Time",
    note: "Already using your Firestick? Skip straight to Part 2.",
    steps: [
      "Plug the Firestick into your TV's HDMI port, then connect the USB power cable to the power adapter and a wall socket. Always use the wall adapter — TV USB ports often don't supply enough power.",
      "Switch your TV to the correct HDMI input using your TV remote.",
      "Pair the Firestick remote. It usually pairs automatically. If not, hold the Home button for 10 seconds.",
      "Connect to WiFi. Select your network and enter your password.",
      "Sign in with your Amazon account (or create a free one on screen).",
      "Skip the offers. Amazon will suggest subscriptions and app bundles during setup — you can decline them all.",
    ],
    footer: "That's the hardware done. Now we prepare the Firestick for IPTV apps.",
    imgAlt: "Amazon Fire TV Stick installation setup first time",
  },
  {
    id: "part-2",
    part: "Part 2",
    title: "Enable Apps from Unknown Sources",
    note: "This is the step most guides skip — and without it, nothing else works. It takes 30 seconds.",
    steps: [
      "From the home screen, go to Settings (the gear icon).",
      "Select My Fire TV.",
      "Select Developer Options.",
      "Turn ON Apps from Unknown Sources (on newer models this appears as Install Unknown Apps — select it, then turn it on for Downloader after you install it in Part 3).",
    ],
    tip: "Can't see Developer Options? Go to Settings → My Fire TV → About, then click on your Fire TV Stick name 7 times. You'll see a message saying you're now a developer, and the Developer Options menu will appear.",
    imgAlt: "Enable apps from unknown sources on Firestick developer options",
  },
  {
    id: "part-3",
    part: "Part 3",
    title: "Install the Downloader App",
    note: "The Downloader app (by AFTVnews) is a free tool from the official Amazon Appstore that lets you download IPTV apps directly onto your Firestick using a simple code.",
    steps: [
      "From the home screen, select the Find option, then Search.",
      "Type \"Downloader\" — say it into the remote's microphone or type it out.",
      "Select the orange Downloader icon (by AFTVnews) from the results.",
      "Click Get / Download and wait for it to install.",
      "Open Downloader and click Allow when it asks for file access.",
      "If you set \"Install Unknown Apps\" in Part 2, make sure Downloader is toggled ON in that list now (Settings → My Fire TV → Developer Options → Install Unknown Apps → Downloader → ON).",
    ],
    imgAlt: "Downloader app for Firestick by AFTVnews",
  },
  {
    id: "part-4",
    part: "Part 4",
    title: "Install IPTV Smarters Pro with a Downloader Code",
    note: "Now the main event — installing IPTV Smarters Pro on Firestick. This is the app where all your channels, movies, and the TV guide will live.",
    steps: [
      "Open the Downloader app.",
      "Click on the URL / search bar on the home screen.",
      "Enter the Downloader code for Firestick provided by your subscription provider.",
      "Click Go. The IPTV Smarters Pro file will begin downloading — this takes under a minute.",
      "When the download finishes, click Install.",
      "Once installed, click Done (not Open — one more housekeeping step first).",
      "Downloader will offer to delete the installation file — click Delete, then Delete again. This frees up storage space on your Firestick.",
    ],
    footer: "That's it — IPTV Smarters Pro is now on your Firestick. You'll find it under Your Apps & Channels on the home screen.",
    imgAlt: "IPTV Smarters downloader code for Firestick installation",
  },
  {
    id: "part-5",
    part: "Part 5",
    title: "Log In and Start Watching IPTV on Firestick",
    note: "Time to bring your subscription to life. Have your username, password, and server URL ready — your provider sent these when you subscribed.",
    steps: [
      "Open IPTV Smarters Pro from your apps list.",
      "Accept the terms of use.",
      "Select Add New User, then choose Login with Xtream Codes API (the easiest method).",
      "Enter any name for the profile, then your username, password, and server URL exactly as your provider sent them. One wrong character is the most common reason logins fail, so double-check.",
      "Click Add User.",
      "The app will now load your channel list, EPG (TV guide), and Video on Demand library. This takes between 30 seconds and 2 minutes on the first load.",
    ],
    footer: "You're all set. Live TV, sports, movies and series — all running on your Fire TV Stick. With Strong 8K IPTV, activation is instant, so your login details work the moment they arrive.",
    imgAlt: "IPTV on Firestick login with Xtream Codes API",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────
function RequirementItem({
  Icon,
  text,
  delay,
}: {
  Icon: React.ElementType;
  text: string;
  delay: number;
}) {
  return (
    <ScrollReveal direction="up" delay={delay} once>
      <div className="flex items-start gap-4">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border"
          style={{ borderColor: "var(--feature-icon-border)" }}
        >
          <Icon
            className="h-4 w-4"
            style={{ color: "var(--hero-accent)" }}
            strokeWidth={1.75}
          />
        </div>
        <p
          className="pt-1.5 text-sm leading-[1.75] sm:text-[15px]"
          style={{ color: "var(--hero-muted)" }}
        >
          {text}
        </p>
      </div>
    </ScrollReveal>
  );
}

function PartSection({
  part,
  title,
  note,
  steps,
  footer,
  tip,
  delay,
}: {
  part: string;
  title: string;
  note?: string;
  steps: string[];
  footer?: string;
  tip?: string;
  delay: number;
}) {
  return (
    <ScrollReveal direction="up" delay={delay} once>
      <div
        className="rounded-2xl border p-6 sm:p-8 md:p-10"
        style={{
          backgroundColor: "var(--feature-card-bg)",
          borderColor: "var(--feature-card-border)",
          boxShadow: "var(--feature-card-shadow)",
        }}
      >
        {/* Part badge */}
        <span
          className="mb-3 inline-block text-[11px] font-bold uppercase tracking-[0.22em]"
          style={{ color: "var(--hero-accent)" }}
        >
          {part}
        </span>

        <h3
          className="text-xl font-bold leading-tight tracking-tight sm:text-2xl"
          style={{ color: "var(--hero-heading)" }}
        >
          {title}
        </h3>

        {note && (
          <p
            className="mt-3 text-sm leading-[1.75] sm:text-[15px]"
            style={{ color: "var(--hero-muted)" }}
          >
            {note}
          </p>
        )}

        {/* Steps */}
        <ol className="mt-6 space-y-4">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-4">
              <div
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
                style={{ background: "var(--hero-cta-primary-bg)" }}
              >
                {i + 1}
              </div>
              <p
                className="pt-0.5 text-sm leading-[1.75] sm:text-[15px]"
                style={{ color: "var(--hero-muted)" }}
              >
                {step}
              </p>
            </li>
          ))}
        </ol>

        {/* Tip box */}
        {tip && (
          <div
            className="mt-6 rounded-xl border-l-4 px-5 py-4 text-sm leading-[1.75] sm:text-[15px]"
            style={{
              borderLeftColor: "var(--hero-accent)",
              backgroundColor:
                "color-mix(in srgb, var(--hero-accent) 6%, var(--feature-card-bg))",
              color: "var(--hero-muted)",
            }}
          >
            <span
              className="mb-1 block text-[11px] font-bold uppercase tracking-[0.18em]"
              style={{ color: "var(--hero-accent)" }}
            >
              Tip
            </span>
            {tip}
          </div>
        )}

        {/* Footer note */}
        {footer && (
          <p
            className="mt-5 text-sm font-medium leading-[1.75] sm:text-[15px]"
            style={{ color: "var(--hero-heading)" }}
          >
            {footer}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export function InstallationBeginnersSection() {
  return (
    <section
      id="firestick-guide"
      className="relative isolate overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 70% at 0% 50%, color-mix(in srgb, var(--hero-accent) 6%, transparent) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 100% 50%, var(--hero-blush-right) 0%, transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        {/* ── Section Heading ── */}
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn delay={0.05}>
            <span
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--hero-accent)" }}
            >
              Step-by-Step Guide
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2
              className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
              style={{ color: "var(--hero-heading)" }}
            >
              How to Install IPTV on Firestick{" "}
              <span style={{ color: "var(--hero-accent)" }}>
                — Complete Walkthrough
              </span>
            </h2>
          </FadeIn>
        </div>

        {/* ── What You'll Need ── */}
        <div className="mt-16 md:mt-20">
          <FadeIn delay={0.1}>
            <div className="mb-8 flex items-center gap-4">
              <h3
                className="shrink-0 text-lg font-bold sm:text-xl"
                style={{ color: "var(--hero-heading)" }}
              >
                What You'll Need Before You Start
              </h3>
              <div
                className="h-px flex-1"
                style={{ backgroundColor: "var(--feature-card-border)" }}
              />
            </div>
          </FadeIn>

          <div className="grid gap-4 sm:grid-cols-2">
            {REQUIREMENTS.map((req, i) => (
              <RequirementItem
                key={i}
                Icon={req.Icon}
                text={req.text}
                delay={0.05 * i}
              />
            ))}
          </div>

          {/* Subscription note */}
          <ScrollReveal direction="up" delay={0.3} once>
            <div
              className="mt-6 flex flex-wrap items-center gap-3 rounded-xl border px-5 py-4 text-sm sm:text-[15px]"
              style={{
                borderColor: "var(--feature-card-border)",
                backgroundColor: "var(--feature-card-bg)",
                color: "var(--hero-muted)",
              }}
            >
              <span>Don't have a subscription yet?</span>
              <Link
                href="/subscription-plans"
                className="inline-flex items-center gap-1 font-semibold transition-colors hover:opacity-80"
                style={{ color: "var(--hero-accent)" }}
              >
                See our Subscription Plans <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Got everything */}
          <FadeIn delay={0.3}>
            <p
              className="mt-5 text-sm font-semibold sm:text-[15px]"
              style={{ color: "var(--hero-heading)" }}
            >
              Got everything? Let's begin.
            </p>
          </FadeIn>
        </div>

        {/* ── Parts ── */}
        <div className="mt-12 space-y-6 md:mt-16">
          {PARTS.map((p, i) => (
            <PartSection
              key={p.id}
              part={p.part}
              title={p.title}
              note={p.note}
              steps={p.steps}
              footer={p.footer}
              tip={"tip" in p ? (p as { tip?: string }).tip : undefined}
              delay={0.08 * i}
            />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <ScrollReveal direction="up" delay={0.1} once>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-16">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact-us"
                className="flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:brightness-110 sm:text-[15px]"
                style={{
                  background: "var(--hero-cta-primary-bg)",
                  boxShadow: "var(--hero-cta-primary-shadow)",
                }}
              >
                Get Strong 8K Free Trial
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/subscription-plans"
                className="flex items-center gap-2 rounded-xl border bg-transparent px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:border-[var(--hero-accent)] hover:text-[var(--hero-accent)] sm:text-[15px]"
                style={{
                  borderColor: "var(--hero-btn-border)",
                  color: "var(--hero-cta-secondary-text)",
                }}
              >
                View Subscription Plans
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
