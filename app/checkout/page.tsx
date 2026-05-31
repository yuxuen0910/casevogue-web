import type { Metadata } from "next";
import { createAnvoguePage, getPageMetadata } from "@/lib/pages";

export const metadata: Metadata = getPageMetadata("checkout");

export default function CheckoutPage() {
  return createAnvoguePage("checkout").component;
}
