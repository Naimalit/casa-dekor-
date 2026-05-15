import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-start gap-6 px-4 py-24 sm:px-6">
      <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold">
        404
      </p>
      <h1 className="font-serif text-3xl text-ink sm:text-4xl">
        That page is not in our catalog
      </h1>
      <p className="font-sans text-sm leading-relaxed text-ink/75">
        The link may be outdated, or the product slug may have changed. Start
        from collections or return home.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          href="/collections"
          prefetch={false}
          className="rounded-full bg-ink px-6 py-2.5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-cream"
        >
          Collections
        </Link>
        <Link
          href="/"
          prefetch={false}
          className="rounded-full border border-ink/20 px-6 py-2.5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-ink"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
