import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { collections, getCollection } from "@/lib/collections";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) return { title: "Collection" };
  return {
    title: collection.name,
    description: collection.description,
  };
}

export default async function CollectionDetailPage({ params }: Props) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();

  return (
    <article>
      <header className="border-b border-cream-deep bg-cream-muted/30">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold">
                Collection
              </p>
              <h1 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">
                {collection.name}
              </h1>
              <p className="mt-5 font-sans text-base leading-relaxed text-ink/80">
                {collection.description}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-cream-deep shadow-lg">
              <Image
                src={collection.coverSrc}
                alt={collection.coverAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </Reveal>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <h2 className="font-serif text-2xl text-ink sm:text-3xl">
            In this collection
          </h2>
          <p className="mt-3 max-w-2xl font-sans text-sm text-ink/70">
            Placeholder photography and sample pricing in MKD—swap assets when your catalog is ready.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {collection.products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <ProductCard collectionSlug={collection.slug} product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </article>
  );
}
