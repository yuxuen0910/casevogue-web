import type { Metadata } from "next";
import { createAnvoguePage, getPageMetadata } from "@/lib/pages";

export const metadata: Metadata = getPageMetadata("login");

export default function LoginPage() {
  return createAnvoguePage("login").component;
}
