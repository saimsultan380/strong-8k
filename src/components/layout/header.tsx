"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Subscription Plan", href: "/subscription-plans" },
  { label: "Installation Guide", href: "/installation-guide" },
  { label: "Reseller Panel", href: "/reseller-panel" },
  { label: "Contact Us", href: "/contact-us" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className="pointer-events-none fixed left-0 right-0 top-0 z-[80] px-4 pt-5 sm:px-6 lg:px-8">
        <nav
          aria-label="Main navigation"
          className="pointer-events-auto relative mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-2xl border px-4 py-2.5 backdrop-blur-xl sm:px-5 sm:py-3 lg:max-w-6xl"
          style={{
            borderColor: "var(--hero-nav-border)",
            backgroundColor: "var(--hero-nav-bg)",
            boxShadow: "var(--hero-nav-shadow)",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            id="hero-logo"
            className="flex shrink-0 items-center gap-2.5 no-underline"
            onClick={closeMenu}
          >
            <Image
              src="/strong-8k.PNG?v=2"
              alt="Strong 8K IPTV"
              width={64}
              height={64}
              loading="eager"
              unoptimized
              className="h-12 w-12 object-contain sm:h-[3.25rem] sm:w-[3.25rem]"
            />
          </Link>

          {/* Nav links + actions */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-5">
            <div className="hidden items-center gap-6 md:flex">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium transition-colors duration-150 hover:text-[var(--hero-accent)]"
                  style={{ color: "var(--hero-nav-link)" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-black/5 dark:hover:bg-white/5 md:hidden"
              style={{ color: "var(--hero-nav-text)" }}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>

            {/* Desktop CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:inline-flex"
            >
              <Link
                href="/contact-us"
                id="hero-get-started"
                className="shrink-0 rounded-xl bg-gradient-brand px-4 py-2 text-sm font-semibold text-black shadow-sm transition-all duration-200 hover:brightness-110 sm:px-5"
                style={{
                  boxShadow: "var(--hero-cta-primary-shadow)",
                }}
              >
                Subscribe Now
              </Link>
            </motion.div>
          </div>
        </nav>
      </header>

      {/* Mobile navigation overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
            />

            <motion.nav
              aria-label="Mobile navigation"
              className="fixed left-0 right-0 top-0 z-[75] border-b px-4 pb-8 pt-[5.5rem] shadow-2xl sm:px-6 md:hidden"
              style={{
                borderColor: "var(--hero-nav-border)",
                backgroundColor: "var(--hero-nav-bg)",
              }}
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
            >
              <div className="mx-auto flex max-w-5xl flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      className="block rounded-xl px-4 py-3.5 text-base font-medium transition-colors hover:bg-black/5 hover:text-[var(--hero-accent)] dark:hover:bg-white/5"
                      style={{ color: "var(--hero-nav-text)" }}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.22 }}
                  className="mt-4 px-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/contact-us"
                      className="flex w-full items-center justify-center rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-black shadow-sm transition-all duration-200 hover:brightness-110"
                      style={{
                        boxShadow: "var(--hero-cta-primary-shadow)",
                      }}
                      onClick={closeMenu}
                    >
                      Subscribe Now
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
