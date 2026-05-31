import type { Metadata } from "next";
import { createAnvoguePage, getPageMetadata } from "@/lib/pages";

export const metadata: Metadata = getPageMetadata("wishlist");

export default function WishlistPage() {
  return createAnvoguePage("wishlist").component;
}
