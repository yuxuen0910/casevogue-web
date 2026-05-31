import type { Metadata } from "next";
import { createAnvoguePage, getPageMetadata } from "@/lib/pages";

export const metadata: Metadata = getPageMetadata("register");

export default function RegisterPage() {
  return createAnvoguePage("register").component;
}
