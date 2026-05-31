import type { Metadata } from "next";
import { createAnvoguePage, getPageMetadata } from "@/lib/pages";

export const metadata: Metadata = getPageMetadata("contact");

export default function ContactPage() {
  return createAnvoguePage("contact").component;
}
