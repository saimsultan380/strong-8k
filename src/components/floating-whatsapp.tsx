"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { siteConfig, whatsappUrlWithText } from "@/lib/site";

const OPEN_AFTER_MS = 8000;
const subscribeWhatsapp = whatsappUrlWithText("Subscribe now");

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.405-.883-.733-1.48-1.639-1.653-1.939-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), OPEN_AFTER_MS);
    return () => window.clearTimeout(timer);
  }, []);

  const spring = reduceMotion
    ? { duration: 0.01 }
    : { type: "spring" as const, stiffness: 380, damping: 28, mass: 0.8 };

  return (
    <div className="fixed right-4 bottom-4 z-[100] sm:right-6 sm:bottom-6">
      <AnimatePresence>
        {open ? (
          <motion.div
            key="whatsapp-offer"
            role="dialog"
            aria-label="Subscribe on WhatsApp"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14, scale: 0.94 }}
            transition={spring}
            className="absolute right-0 bottom-[4.35rem] w-[min(18.5rem,calc(100vw-2rem))] origin-bottom-right"
          >
            <div className="relative rounded-2xl border border-white/10 bg-[#111] p-4 text-white shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
              <motion.span
                aria-hidden
                className="absolute -bottom-1.5 right-5 h-3 w-3 rotate-45 border-r border-b border-white/10 bg-[#111]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: reduceMotion ? 0 : 0.08 }}
              />

              <motion.button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close WhatsApp offer"
                initial={{ opacity: 0, rotate: reduceMotion ? 0 : -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: reduceMotion ? 0 : 0.12, duration: 0.28 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                className="absolute top-2.5 right-2.5 flex h-7 w-7 items-center justify-center rounded-full border border-white/15 text-white/80 hover:border-white/40 hover:bg-white/10 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </motion.button>

              <motion.p
                className="pr-8 text-sm leading-snug text-white/80"
                initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduceMotion ? 0 : 0.08, duration: 0.3 }}
              >
                Chat with {siteConfig.shortName} and start your subscription.
              </motion.p>

              <motion.a
                href={subscribeWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduceMotion ? 0 : 0.16, duration: 0.32 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-[0_4px_14px_rgba(37,211,102,0.35)]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Subscribe Now
              </motion.a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-label={
          open
            ? "Close WhatsApp offer"
            : `Chat with ${siteConfig.shortName} on WhatsApp`
        }
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={reduceMotion ? { duration: 0.01 } : { type: "spring", stiffness: 420, damping: 18, delay: 0.4 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_14px_rgba(37,211,102,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        {!reduceMotion ? (
          <motion.span
            aria-hidden
            className="absolute inset-0 rounded-full bg-[#25D366]"
            animate={open ? { scale: 1, opacity: 0 } : { scale: [1, 1.45], opacity: [0.45, 0] }}
            transition={
              open
                ? { duration: 0.2 }
                : { duration: 1.8, repeat: Infinity, ease: "easeOut" }
            }
          />
        ) : null}
        <motion.span
          className="relative flex"
          animate={open && !reduceMotion ? { rotate: [0, -8, 8, 0] } : { rotate: 0 }}
          transition={{ duration: 0.45 }}
        >
          <WhatsAppIcon className="h-8 w-8" />
        </motion.span>
      </motion.button>
    </div>
  );
}
