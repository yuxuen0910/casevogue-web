import type { Metadata } from "next";
import { createAnvoguePage, getPageMetadata } from "@/lib/pages";

export const metadata: Metadata = getPageMetadata("index");

export default function HomePage() {
  return createAnvoguePage("index").component;
}
