import type { Metadata } from "next";
import { createAnvoguePage, getPageMetadata } from "@/lib/pages";

export const metadata: Metadata = getPageMetadata("faqs");

export default function FaqsPage() {
  return createAnvoguePage("faqs").component;
}
