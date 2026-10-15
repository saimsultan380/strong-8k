"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { siteConfig, whatsappUrl, whatsappUrlWithText } from "@/lib/site";

const OPEN_AFTER_MS = 2000;
const VISIBLE_MS = 5500;
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
    const openTimer = window.setTimeout(() => setOpen(true), OPEN_AFTER_MS);
    const closeTimer = window.setTimeout(
      () => setOpen(false),
      OPEN_AFTER_MS + VISIBLE_MS,
    );
    return () => {
      window.clearTimeout(openTimer);
      window.clearTimeout(closeTimer);
    };
  }, []);

  const spring = reduceMotion
    ? { duration: 0.01 }
    : { type: "spring" as const, stiffness: 380, damping: 28, mass: 0.8 };

  return (
    <>
      <AnimatePresence>
        {open ? (
          <motion.div
            key="whatsapp-offer"
            role="dialog"
            aria-label="Subscribe on WhatsApp"
            initial={reduceMotion ? { opacity: 0 } : { x: "110%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { x: "110%", opacity: 0 }}
            transition={spring}
            className="fixed right-4 bottom-24 z-[100] origin-right sm:right-6 sm:bottom-28"
          >
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#111] py-2 pr-3 pl-2 text-white shadow-[0_12px_32px_rgba(0,0,0,0.45)]">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close subscribe offer"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>
              <a
                href={subscribeWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-bold whitespace-nowrap text-white shadow-[0_4px_14px_rgba(37,211,102,0.35)] transition-transform duration-200 hover:scale-[1.03]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Subscribe Now
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${siteConfig.shortName} on WhatsApp`}
        className="fixed right-4 bottom-4 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_14px_rgba(37,211,102,0.45)] transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:right-6 sm:bottom-6"
      >
        <WhatsAppIcon className="h-8 w-8" />
      </a>
    </>
  );
}
