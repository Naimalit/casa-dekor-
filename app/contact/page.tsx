import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact us in ${siteConfig.serviceArea}.`,
};

function InfoRow({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-ink/45">
        {label}
      </p>
      <div className="mt-2 font-sans text-base text-ink">{children}</div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <Reveal>
        <header>
          <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold">
            Contact
          </p>
          <h1 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">
            Reach our team
          </h1>
          <p className="mt-5 font-sans text-base leading-relaxed text-ink/75">
            We keep contact simple for v1—no forms or analytics yet. Use email,
            phone, WhatsApp, or social messages; we respond during business hours
            across {siteConfig.serviceArea}.
          </p>
        </header>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-12 space-y-10 rounded-2xl border border-cream-deep bg-cream-muted/40 p-8 sm:p-10">
          <InfoRow label="Email">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-gold underline-offset-4 hover:underline"
            >
              {siteConfig.contact.email}
            </a>
          </InfoRow>
          <InfoRow label="Phone">
            <a
              href={siteConfig.contact.phoneHref}
              className="text-gold underline-offset-4 hover:underline"
            >
              {siteConfig.contact.phoneDisplay}
            </a>
          </InfoRow>
          <InfoRow label="WhatsApp">
            <a
              href={siteConfig.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline-offset-4 hover:underline"
            >
              Message on WhatsApp
            </a>
          </InfoRow>
          <InfoRow label="Social">
            <div className="flex flex-wrap gap-4">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline-offset-4 hover:underline"
              >
                Facebook
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline-offset-4 hover:underline"
              >
                Instagram
              </a>
            </div>
          </InfoRow>
        </div>
      </Reveal>

      <Reveal delay={0.14}>
        <p className="mt-10 font-sans text-sm text-ink/60">
          Prefer a quick orientation first?{" "}
          <Link href="/collections" prefetch={false} className="text-gold hover:underline">
            Browse collections
          </Link>{" "}
          or read the{" "}
          <Link href="/materials" prefetch={false} className="text-gold hover:underline">
            materials overview
          </Link>
          .
        </p>
      </Reveal>
    </div>
  );
}
