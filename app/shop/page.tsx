import type { Metadata } from "next";
import { createAnvoguePage, getPageMetadata } from "@/lib/pages";

export const metadata: Metadata = getPageMetadata("shop");

export default function ShopPage() {
  return createAnvoguePage("shop").component;
}
