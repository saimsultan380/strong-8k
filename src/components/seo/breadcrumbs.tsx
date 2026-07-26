import { JsonLd } from "@/components/seo/json-ld";
import {
  breadcrumbJsonLd,
  type BreadcrumbItem,
} from "@/lib/breadcrumbs";

type BreadcrumbsProps = {
  items: readonly BreadcrumbItem[];
};

/**
 * BreadcrumbList JSON-LD only (for Google SERP breadcrumbs).
 * No visible UI on the page.
 */
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return <JsonLd data={breadcrumbJsonLd(items)} />;
}
