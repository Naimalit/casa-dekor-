export type Product = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  /** Placeholder retail in MKD for v1 */
  priceMkd: number;
  imageSrc: string;
  imageAlt: string;
};

export type Collection = {
  slug: string;
  name: string;
  blurb: string;
  description: string;
  coverSrc: string;
  coverAlt: string;
  products: Product[];
};

/** All imagery is local (`public/decor-tile-*.png`) — CASA DECOR wall & tile décor. */
export const collections: Collection[] = [
  {
    slug: "pvc-wall-panels",
    name: "PVC wall panels",
    blurb: "Architectural profiles that add depth, warmth, and clean rhythm.",
    description:
      "Our PVC wall panel systems are built for durable interiors—easy to maintain, quick to install, and refined enough for living spaces that should feel considered, not temporary.",
    coverSrc: "/decor-tile-panels.png",
    coverAlt:
      "Modern vertical linear wood-look wall panels in a warm contemporary interior",
    products: [
      {
        slug: "linear-ash",
        name: "Linear Ash",
        summary: "Muted linear grain in a soft graphite-ash palette.",
        description:
          "A calm, contemporary liner that reads like bespoke millwork. Pairs beautifully with cream plaster and brass accents.",
        priceMkd: 12490,
        imageSrc: "/decor-tile-geometric.png",
        imageAlt:
          "Decorative wall with sculptural geometric tile pattern in soft neutral tones",
      },
      {
        slug: "soft-walnut",
        name: "Soft Walnut",
        summary: "Warm wood tone with satin sheen and forgiving maintenance.",
        description:
          "Ideal for bedrooms and hospitality zones where you want wood warmth without the upkeep. PVC core keeps moisture worries low.",
        priceMkd: 11890,
        imageSrc: "/decor-tile-panels.png",
        imageAlt: "Contemporary wall clad in warm vertical wood-look decorative panels",
      },
      {
        slug: "wide-rib",
        name: "Wide Rib",
        summary: "Bold vertical ribs for statement walls and headboards.",
        description:
          "Sculptural rhythm without overpowering the room. Scale it for feature walls, niches, or media backdrops.",
        priceMkd: 13290,
        imageSrc: "/decor-tile-entry.png",
        imageAlt:
          "Bold modern entryway wall with decorative patterned designer tiles",
      },
    ],
  },
  {
    slug: "marble-effect",
    name: "PVC marble décor",
    blurb: "High-gloss marble veining with the practicality of rigid PVC.",
    description:
      "Marble-effect PVC lets you chase dramatic stone visuals in kitchens, baths, and focal walls—without the weight, sealing, or fragility of slab stone.",
    coverSrc: "/decor-tile-marble.png",
    coverAlt:
      "Luxury wall in polished marble-look large tiles with soft grey veining",
    products: [
      {
        slug: "calacatta-soft",
        name: "Calacatta Soft",
        summary: "Feathery grey veining on a luminous white field.",
        description:
          "A bright, airy interpretation of classic Calacatta. Excellent for splash zones, islands, and full-height feature planes.",
        priceMkd: 14990,
        imageSrc: "/decor-tile-marble.png",
        imageAlt:
          "Close view of calacatta-style marble-look wall tiles with elegant veining",
      },
      {
        slug: "nero-thumbprint",
        name: "Nero Thumbprint",
        summary: "Graphite base with soft lightning veins.",
        description:
          "For contrast lovers: deep tone with restrained movement. Stunning behind shelving or as a single bold elevation.",
        priceMkd: 15490,
        imageSrc: "/decor-tile-spa.png",
        imageAlt:
          "Moody spa-style wall in oversized dark slate-look porcelain tiles",
      },
    ],
  },
  {
    slug: "finishes-accents",
    name: "Finishes & accents",
    blurb: "Coordinating trims, junctions, and tonal transitions.",
    description:
      "The quiet kit-of-parts that makes an install look intentional—corner trims, transitions, and accent bands that match our core panel families.",
    coverSrc: "/decor-tile-trim.png",
    coverAlt:
      "Architectural close-up of wall tile meeting ceiling with metal trim profile",
    products: [
      {
        slug: "gold-line-trim",
        name: "Gold-line trim",
        summary: "Warm metallic reveal for edges and transitions.",
        description:
          "A narrow metallic profile to break large planes and echo lighting fixtures. Designed to pair with both marble-effect and wood-tone panels.",
        priceMkd: 2890,
        imageSrc: "/decor-tile-trim.png",
        imageAlt:
          "Premium brass-tone trim profile at tile junction with shadow line detail",
      },
      {
        slug: "shadow-gap-kit",
        name: "Shadow-gap kit",
        summary: "Architectural shadow lines for a crisp suspended look.",
        description:
          "Creates visual levitation at ceilings and floors. Especially strong in corridors and open-plan zones.",
        priceMkd: 3490,
        imageSrc: "/decor-tile-kitchen.png",
        imageAlt:
          "Minimal modern kitchen with large-format matte wall tiles and clean joins",
      },
    ],
  },
];

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function getProduct(
  collectionSlug: string,
  productSlug: string,
): { collection: Collection; product: Product } | undefined {
  const collection = getCollection(collectionSlug);
  if (!collection) return undefined;
  const product = collection.products.find((p) => p.slug === productSlug);
  if (!product) return undefined;
  return { collection, product };
}

export function getAllProductPaths(): { slug: string; productSlug: string }[] {
  return collections.flatMap((c) =>
    c.products.map((p) => ({ slug: c.slug, productSlug: p.slug })),
  );
}
