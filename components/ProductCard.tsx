import Link from "next/link";
import Image from "next/image";
import { formatMkd } from "@/lib/formatPrice";
import type { Product } from "@/lib/collections";

export function ProductCard({
  collectionSlug,
  product,
}: {
  collectionSlug: string;
  product: Product;
}) {
  return (
    <Link
      href={`/collections/${collectionSlug}/${product.slug}`}
      prefetch={false}
      className="group flex flex-col overflow-hidden rounded-2xl border border-cream-deep bg-cream transition hover:border-gold/40 hover:shadow-md"
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 280px"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-serif text-xl text-ink group-hover:text-gold">
          {product.name}
        </h3>
        <p className="font-sans text-sm text-ink/70">{product.summary}</p>
        <p className="mt-auto pt-2 font-sans text-xs font-medium tracking-wide text-ink/55">
          From {formatMkd(product.priceMkd)}
        </p>
      </div>
    </Link>
  );
}
