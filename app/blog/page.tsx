import type { Metadata } from "next";
import { createAnvoguePage, getPageMetadata } from "@/lib/pages";

export const metadata: Metadata = getPageMetadata("blog");

export default function BlogPage() {
  return createAnvoguePage("blog").component;
}
