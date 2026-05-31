import type { Metadata } from "next";
import { createAnvoguePage, getPageMetadata } from "@/lib/pages";

export const metadata: Metadata = getPageMetadata("cart");

export default function CartPage() {
  return createAnvoguePage("cart").component;
}
