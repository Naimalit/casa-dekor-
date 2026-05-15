import Link from "next/link";
import Image from "next/image";
import type { Collection } from "@/lib/collections";

export function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <Link
      href={`/collections/${collection.slug}`}
      prefetch={false}
      className="group block overflow-hidden rounded-2xl border border-cream-deep bg-cream shadow-sm transition hover:-translate-y-0.5 hover:border-gold/35 hover:shadow-lg"
    >
      <div className="relative aspect-[16/10]">
        <Image
          src={collection.coverSrc}
          alt={collection.coverAlt}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-70" />
      </div>
      <div className="space-y-3 p-6">
        <h2 className="font-serif text-2xl text-ink transition group-hover:text-gold">
          {collection.name}
        </h2>
        <p className="font-sans text-sm leading-relaxed text-ink/70">
          {collection.blurb}
        </p>
        <span className="inline-flex font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-gold">
          View collection
        </span>
      </div>
    </Link>
  );
}
