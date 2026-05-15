import type { Metadata } from "next";
import { CollectionCard } from "@/components/CollectionCard";
import { Reveal } from "@/components/Reveal";
import { collections } from "@/lib/collections";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Browse CASA DECOR collections: PVC wall panels, marble-effect décor, and coordinating finishes.",
};

export default function CollectionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <Reveal>
        <header className="max-w-2xl">
          <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold">
            Collections
          </p>
          <h1 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">
            Categories you can navigate in seconds
          </h1>
          <p className="mt-4 font-sans text-base leading-relaxed text-ink/75">
            Each collection groups real-world use cases—from full-height marble
            statements to warm panel rhythms—so you can orient before you choose
            a specific SKU.
          </p>
        </header>
      </Reveal>
      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {collections.map((c, i) => (
          <Reveal key={c.slug} delay={i * 0.05}>
            <CollectionCard collection={c} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
