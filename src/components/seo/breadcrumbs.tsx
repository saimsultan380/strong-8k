import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { JsonLd } from "@/components/seo/json-ld";
import {
  breadcrumbJsonLd,
  type BreadcrumbItem,
} from "@/lib/breadcrumbs";

type BreadcrumbsProps = {
  items: readonly BreadcrumbItem[];
};

/**
 * Visible breadcrumb trail (sits in the fixed-header clearance) plus matching
 * BreadcrumbList JSON-LD. JSON-LD emits only when ≥2 items (Google requirement).
 */
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const jsonLd = breadcrumbJsonLd(items);
  if (!jsonLd) return null;

  return (
    <>
      <JsonLd data={jsonLd} />
      <nav
        aria-label="Breadcrumb"
        className="pointer-events-none absolute left-0 right-0 top-[4.75rem] z-20 sm:top-[5.25rem]"
      >
        <Container className="pointer-events-auto py-2">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <li key={item.path} className="flex items-center gap-1.5">
                  {index > 0 ? (
                    <ChevronRight
                      className="h-3.5 w-3.5 shrink-0 opacity-40"
                      aria-hidden
                    />
                  ) : null}
                  {isLast ? (
                    <span
                      aria-current="page"
                      className="font-medium"
                      style={{ color: "var(--hero-nav-text)" }}
                    >
                      {item.name}
                    </span>
                  ) : (
                    <Link
                      href={item.path}
                      className="transition-colors hover:text-[var(--hero-accent)]"
                      style={{ color: "var(--hero-muted)" }}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </Container>
      </nav>
    </>
  );
}
