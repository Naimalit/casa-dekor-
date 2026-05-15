import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { CollectionCard } from "@/components/CollectionCard";
import { collections } from "@/lib/collections";

const pillars = [
  {
    title: "PVC wall panels",
    body: "Architectural panels that add depth and warmth—wood tones, linear profiles, and easy-care surfaces for busy rooms.",
  },
  {
    title: "PVC marble décor",
    body: "High-impact marble veining with the practicality of rigid PVC. Ideal for splash zones, islands, and full-height statements.",
  },
  {
    title: "Interior transformation",
    body: "Cohesive trims, transitions, and accents so installations look intentional—not like an afterthought.",
  },
];

export default function HomePage() {
  const previewCollections = collections.slice(0, 3);

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-gold">
              What we offer
            </p>
            <h2 className="mt-4 font-serif text-3xl text-ink sm:text-4xl">
              Three clear reasons people choose us
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="h-full rounded-2xl border border-cream-deep bg-cream-muted/40 p-8 shadow-sm">
                <h3 className="font-serif text-xl text-ink">{p.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-ink/75">
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-cream-deep bg-charcoal py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold-muted">
                  Our difference
                </p>
                <h2 className="mt-3 max-w-xl font-serif text-3xl text-cream">
                  Quality at the best price
                </h2>
              </div>
              <p className="max-w-lg font-sans text-sm leading-relaxed text-cream/75">
                We stock materials chosen for how they look on the wall—not just
                in a sample book—and we keep pricing direct so good finishes
                stay within reach across North Macedonia.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <div>
              <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold">
                Collections
              </p>
              <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
                Start with a category, then go deeper
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <Link
              href="/collections"
              prefetch={false}
              className="inline-flex font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold hover:text-ink"
            >
              View all collections
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {previewCollections.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.06}>
              <CollectionCard collection={c} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-cream-deep bg-cream-muted/50 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-3">
          <Reveal>
            <article className="rounded-2xl border border-cream-deep bg-cream p-8">
              <h3 className="font-serif text-2xl text-ink">Materials</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-ink/75">
                Understand PVC benefits, marble-effect versus solid palettes,
                and where each finish shines.
              </p>
              <Link
                href="/materials"
                prefetch={false}
                className="mt-6 inline-flex font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-gold hover:text-ink"
              >
                Read overview
              </Link>
            </article>
          </Reveal>
          <Reveal delay={0.06}>
            <article className="rounded-2xl border border-cream-deep bg-cream p-8">
              <h3 className="font-serif text-2xl text-ink">Gallery</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-ink/75">
                Placeholder installs and mood references—swap in your photography
                when ready without changing URLs.
              </p>
              <Link
                href="/gallery"
                prefetch={false}
                className="mt-6 inline-flex font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-gold hover:text-ink"
              >
                Browse gallery
              </Link>
            </article>
          </Reveal>
          <Reveal delay={0.12}>
            <article className="rounded-2xl border border-cream-deep bg-cream p-8">
              <h3 className="font-serif text-2xl text-ink">About</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-ink/75">
                Who we are, how we work in Macedonia, and why fair pricing
                matters to us.
              </p>
              <Link
                href="/about"
                prefetch={false}
                className="mt-6 inline-flex font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-gold hover:text-ink"
              >
                Our story
              </Link>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
