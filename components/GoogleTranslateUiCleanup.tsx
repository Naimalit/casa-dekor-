"use client";

import { useEffect } from "react";

/**
 * Google Translate injects a top iframe + inline body offsets. We keep translation
 * (via googtrans + TranslateElement) but remove the Chrome-like bar so the site header stays clean.
 */
export function GoogleTranslateUiCleanup() {
  useEffect(() => {
    const strip = () => {
      document.querySelectorAll("iframe.goog-te-banner-frame").forEach((el) => {
        el.remove();
      });
      document.querySelectorAll("iframe").forEach((el) => {
        const src = el.getAttribute("src") || "";
        if (
          src.includes("translate.google.com") &&
          (src.includes("banner") || el.className.includes("goog-te-banner"))
        ) {
          el.remove();
        }
      });

      document.body.style.setProperty("top", "0", "important");
      document.body.style.setProperty("margin-top", "0", "important");
      document.body.style.setProperty("padding-top", "0", "important");
      document.body.style.setProperty("position", "relative", "important");

      document.documentElement.style.setProperty("margin-top", "0", "important");
      document.documentElement.style.setProperty("padding-top", "0", "important");
    };

    strip();

    const mo = new MutationObserver(strip);
    mo.observe(document.documentElement, { childList: true, subtree: true });

    let ticks = 0;
    const intervalId = window.setInterval(() => {
      strip();
      ticks += 1;
      if (ticks >= 50) window.clearInterval(intervalId);
    }, 150);

    return () => {
      mo.disconnect();
      window.clearInterval(intervalId);
    };
  }, []);

  return null;
}
