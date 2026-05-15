import Link from "next/link";
import type { ReactNode } from "react";
import { navLinks, siteConfig } from "@/lib/siteConfig";
import { LogoImage } from "@/components/LogoImage";

function HeaderSocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink/75 transition hover:border-gold/40 hover:text-gold"
    >
      {children}
    </a>
  );
}

function SocialButtons() {
  return (
    <div className="flex items-center gap-2">
      <HeaderSocialIcon href={siteConfig.social.facebook} label="Facebook">
        <svg
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M13.5 10.5V9c0-.8.1-1.5 1.5-1.5H16V5h-2c-2.4 0-4 1.5-4 4v1.5H8V12h2v10h3.5V12h2.9l.3-3.5H13.5z" />
        </svg>
      </HeaderSocialIcon>
      <HeaderSocialIcon href={siteConfig.social.instagram} label="Instagram">
        <svg
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.8A4.2 4.2 0 1 1 7.8 12 4.2 4.2 0 0 1 12 7.8zM12 10a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm5.5-3.3a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
        </svg>
      </HeaderSocialIcon>
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-cream-deep/60 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex min-w-0 shrink-0 items-center gap-3"
          prefetch={false}
        >
          <LogoImage priority />
        </Link>

        <div className="flex items-center gap-4 md:gap-6">
          <SocialButtons />

          <nav
            aria-label="Primary"
            className="hidden items-center gap-5 md:flex lg:gap-8"
          >
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                className="font-sans text-[0.7rem] font-medium uppercase tracking-[0.22em] text-ink/80 transition hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <details className="group relative md:hidden">
            <summary className="cursor-pointer list-none font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ink [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <div className="absolute right-0 z-50 mt-3 w-56 rounded-lg border border-cream-deep bg-cream p-3 shadow-lg">
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      prefetch={false}
                      className="block rounded-md px-2 py-2 font-sans text-sm text-ink/85 hover:bg-cream-muted"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
