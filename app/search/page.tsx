import type { Metadata } from "next";
import { createAnvoguePage, getPageMetadata } from "@/lib/pages";

export const metadata: Metadata = getPageMetadata("search");

export default function SearchPage() {
  return createAnvoguePage("search").component;
}
