import type { Metadata } from "next";
import { createAnvoguePage, getPageMetadata } from "@/lib/pages";

export const metadata: Metadata = getPageMetadata("about");

export default function AboutPage() {
  return createAnvoguePage("about").component;
}
