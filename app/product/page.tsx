import type { Metadata } from "next";
import { createAnvoguePage, getPageMetadata } from "@/lib/pages";

export const metadata: Metadata = getPageMetadata("product");

export default function ProductPage() {
  return createAnvoguePage("product").component;
}
