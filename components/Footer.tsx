import Link from "next/link";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { LogoImage } from "@/components/LogoImage";

function SocialIcon({
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
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/35 text-ink transition hover:border-gold hover:text-gold"
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-cream-deep bg-charcoal text-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "url(/decor-tile-marble.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(48px) brightness(0.35)",
          transform: "scale(1.1)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md space-y-4">
            <div className="flex items-center">
              <LogoImage className="!h-8 max-w-[180px] sm:!h-9 sm:max-w-[200px]" />
            </div>
            <p className="font-serif text-xl text-cream">
              Interior décor in PVC—panels, marble-look finishes, and the quiet details that make walls feel finished.
            </p>
            <p className="font-sans text-sm text-cream/75">
              Serving homes and projects across {siteConfig.serviceArea}.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold-muted">
              Follow
            </span>
            <div className="flex gap-3">
              <SocialIcon href={siteConfig.social.facebook} label="Facebook">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M13.5 10.5V9c0-.8.1-1.5 1.5-1.5H16V5h-2c-2.4 0-4 1.5-4 4v1.5H8V12h2v10h3.5V12h2.9l.3-3.5H13.5z" />
                </svg>
              </SocialIcon>
              <SocialIcon href={siteConfig.social.instagram} label="Instagram">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.8A4.2 4.2 0 1 1 7.8 12 4.2 4.2 0 0 1 12 7.8zM12 10a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm5.5-3.3a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-8 font-sans text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} · {siteConfig.serviceArea}.
          </p>
          <Link
            href="/contact"
            prefetch={false}
            className="text-gold-muted transition hover:text-cream"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
