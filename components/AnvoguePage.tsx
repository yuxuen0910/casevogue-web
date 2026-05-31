"use client";

import { useEffect } from "react";

type AnvoguePageProps = {
  html: string;
  scripts: string[];
};

const loadedScripts = new Set<string>();

function loadScript(src: string): Promise<void> {
  if (loadedScripts.has(src)) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.onload = () => {
      loadedScripts.add(src);
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

export default function AnvoguePage({ html, scripts }: AnvoguePageProps) {
  useEffect(() => {
    let cancelled = false;

    async function initScripts() {
      for (const file of scripts) {
        if (cancelled) return;
        await loadScript(`/assets/js/${file}`);
      }
    }

    initScripts().catch(console.error);

    return () => {
      cancelled = true;
    };
  }, [scripts]);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
