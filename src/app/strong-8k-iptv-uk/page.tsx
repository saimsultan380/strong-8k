import type { Metadata } from "next";
import { HomePage } from "@/components/pages/home-page";
import {
  createPageMetadata,
  pageDescriptions,
  pageTitles,
} from "@/lib/site";
import { routes } from "@/lib/routes";

export const metadata: Metadata = createPageMetadata({
  title: pageTitles.home,
  description: pageDescriptions.home,
  path: routes.home,
});

export default function Strong8kIptvUkPage() {
  return <HomePage />;
}
