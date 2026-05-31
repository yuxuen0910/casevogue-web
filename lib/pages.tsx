import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import AnvoguePage from "@/components/AnvoguePage";

type PageManifestEntry = {
  title: string;
  scripts: string[];
  source: string;
};

type PageManifest = Record<string, PageManifestEntry>;

const manifestPath = path.join(process.cwd(), "content", "manifest.json");

function readManifest(): PageManifest {
  return JSON.parse(fs.readFileSync(manifestPath, "utf8")) as PageManifest;
}

function readPageHtml(pageKey: string): string {
  return fs.readFileSync(path.join(process.cwd(), "content", `${pageKey}.html`), "utf8");
}

export function createAnvoguePage(pageKey: string) {
  const manifest = readManifest();
  const config = manifest[pageKey];

  if (!config) {
    throw new Error(`Unknown page key: ${pageKey}`);
  }

  const html = readPageHtml(pageKey);

  return {
    title: config.title,
    component: <AnvoguePage html={html} scripts={config.scripts} />,
  };
}

export function getPageMetadata(pageKey: string): Metadata {
  const manifest = readManifest();
  const config = manifest[pageKey];

  if (!config) {
    return { title: "CaseVogue" };
  }

  return {
    title: config.title,
    description:
      "Premium phone cases and mobile accessories. Shop iPhone, Samsung, and Google Pixel cases with fast shipping.",
  };
}
