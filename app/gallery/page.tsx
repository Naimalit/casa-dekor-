import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { galleryItems } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Placeholder project gallery for CASA DECOR—swap photography when your install portfolio is ready.",
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <Reveal>
        <header className="max-w-2xl">
          <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold">
            Gallery
          </p>
          <h1 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">
            Install mood &amp; references
          </h1>
          <p className="mt-5 font-sans text-base leading-relaxed text-ink/75">
            v1 uses stock imagery aligned with marble and panel interiors.
            Replace these assets with your own photography anytime—routes stay the same.
          </p>
        </header>
      </Reveal>

      <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {galleryItems.map((item, i) => (
          <Reveal key={item.id} delay={Math.min(i * 0.035, 0.35)} className="mb-4 break-inside-avoid">
            <figure className="overflow-hidden rounded-xl border border-cream-deep bg-cream-muted shadow-sm">
              <div
                className={
                  item.aspect === "tall"
                    ? "relative aspect-[3/4]"
                    : item.aspect === "wide"
                      ? "relative aspect-[16/10]"
                      : "relative aspect-square"
                }
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
