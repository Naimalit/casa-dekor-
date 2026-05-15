"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

type LangCode = "en" | "sq" | "mk";

const LANGUAGES: { code: LangCode; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "sq", label: "Shqip", short: "SQ" },
  { code: "mk", label: "Македонски", short: "MK" },
];

function parseLangFromCookie(): LangCode {
  if (typeof document === "undefined") return "en";
  const m = document.cookie.match(/googtrans=\/(?:auto|en)\/(\w+)/);
  const c = m?.[1];
  if (c === "sq" || c === "mk") return c;
  return "en";
}

function clearGoogTransCookies() {
  const host = window.location.hostname;
  const expire = "Thu, 01 Jan 1970 00:00:01 GMT";
  const variants = ["", `domain=${host}`, `domain=.${host}`];
  for (const d of variants) {
    const dom = d ? `; ${d}` : "";
    document.cookie = `googtrans=;path=/${dom};expires=${expire}`;
  }
}

function applyLanguage(code: LangCode) {
  clearGoogTransCookies();
  if (code !== "en") {
    document.cookie = `googtrans=/en/${code};path=/`;
  }
  window.location.reload();
}

export function LanguageSwitcher() {
  const [active, setActive] = useState<LangCode>("en");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setActive(parseLangFromCookie());
  }, []);

  const current = LANGUAGES.find((l) => l.code === active) ?? LANGUAGES[0];

  return (
    <>
      <div
        id="google_translate_element"
        className="notranslate pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0"
        aria-hidden
      />
      <Script
        id="google-translate-register"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.googleTranslateElementInit = function () {
              var el = document.getElementById('google_translate_element');
              if (!window.google || !google.translate || !el || el.getAttribute('data-initialized') === '1') return;
              el.setAttribute('data-initialized', '1');
              new google.translate.TranslateElement(
                {
                  pageLanguage: 'en',
                  includedLanguages: 'en,sq,mk',
                  layout: google.translate.TranslateElement.InlineLayout.SIMPLE
                },
                'google_translate_element'
              );
            };
          `,
        }}
      />
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />

      <div className="relative shrink-0">
        <button
          type="button"
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-label={`Translate page — ${current.label} (${current.short})`}
          title={`Language: ${current.label}`}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink/75 transition hover:border-gold/40 hover:text-gold"
        >
          <GlobeIcon className="h-[17px] w-[17px] shrink-0" aria-hidden />
        </button>

        {open && (
          <>
            <button
              type="button"
              aria-label="Close language menu"
              className="fixed inset-0 z-40 cursor-default bg-transparent"
              onClick={() => setOpen(false)}
            />
            <ul
              role="listbox"
              className="notranslate absolute right-0 z-50 mt-2 w-44 rounded-lg border border-cream-deep bg-cream py-1 shadow-lg"
            >
              {LANGUAGES.map((lang) => (
                <li key={lang.code} role="option" aria-selected={lang.code === active}>
                  <button
                    type="button"
                    className={`flex w-full items-center justify-between px-3 py-2.5 text-left font-sans text-sm transition hover:bg-cream-muted ${
                      lang.code === active ? "text-gold" : "text-ink/85"
                    }`}
                    onClick={() => {
                      setOpen(false);
                      applyLanguage(lang.code);
                    }}
                  >
                    <span>{lang.label}</span>
                    <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-ink/40">
                      {lang.short}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
