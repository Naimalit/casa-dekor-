import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import {
  getAllProductPaths,
  getProduct,
} from "@/lib/collections";
import { formatMkd } from "@/lib/formatPrice";

type Props = {
  params: Promise<{ slug: string; productSlug: string }>;
};

export async function generateStaticParams() {
  return getAllProductPaths();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, productSlug } = await params;
  const item = getProduct(slug, productSlug);
  if (!item) return { title: "Product" };
  return {
    title: item.product.name,
    description: item.product.summary,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug, productSlug } = await params;
  const item = getProduct(slug, productSlug);
  if (!item) notFound();

  const { collection, product } = item;

  return (
    <article className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <Reveal>
        <nav aria-label="Breadcrumb" className="font-sans text-xs text-ink/55">
          <ol className="flex flex-wrap gap-2">
            <li>
              <Link
                href="/collections"
                prefetch={false}
                className="hover:text-gold"
              >
                Collections
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link
                href={`/collections/${collection.slug}`}
                prefetch={false}
                className="hover:text-gold"
              >
                {collection.name}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-ink/80">{product.name}</li>
          </ol>
        </nav>
      </Reveal>

      <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-cream-deep bg-cream-muted shadow-xl">
            <Image
              src={product.imageSrc}
              alt={product.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold">
              {collection.name}
            </p>
            <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-4 font-sans text-lg text-ink/80">{product.summary}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 font-sans text-base leading-relaxed text-ink/78">
              {product.description}
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-10 rounded-2xl border border-cream-deep bg-cream-muted/50 p-6">
              <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-ink/50">
                Indicative price (MKD)
              </p>
              <p className="mt-2 font-serif text-3xl text-ink">
                from {formatMkd(product.priceMkd)}
              </p>
              <p className="mt-2 font-sans text-xs text-ink/55">
                Placeholder retail for v1. Final quotes depend on project scope
                and stock.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <Link
              href="/contact"
              prefetch={false}
              className="mt-8 inline-flex rounded-full bg-ink px-8 py-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-cream transition hover:bg-charcoal"
            >
              Contact to order
            </Link>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
