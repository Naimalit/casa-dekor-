export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  aspect: "tall" | "wide" | "square";
};

/** Local CASA DECOR tile & wall imagery (`public/decor-tile-*.png`). */
export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    src: "/decor-tile-hero.png",
    alt: "Living space with full-height feature wall in large modern veined tiles",
    aspect: "wide",
  },
  {
    id: "2",
    src: "/decor-tile-panels.png",
    alt: "Vertical wood-look linear wall panels in a contemporary interior",
    aspect: "tall",
  },
  {
    id: "3",
    src: "/decor-tile-marble.png",
    alt: "Polished marble-look porcelain wall with soft grey veining",
    aspect: "square",
  },
  {
    id: "4",
    src: "/decor-tile-geometric.png",
    alt: "Geometric 3D ceramic wall tiles in cream and champagne tones",
    aspect: "tall",
  },
  {
    id: "5",
    src: "/decor-tile-kitchen.png",
    alt: "Modern kitchen with large-format matte stacked wall tiles",
    aspect: "wide",
  },
  {
    id: "6",
    src: "/decor-tile-spa.png",
    alt: "Spa bathroom feature wall in dark slate-look oversized tiles",
    aspect: "square",
  },
  {
    id: "7",
    src: "/decor-tile-trim.png",
    alt: "Detail of precision metal trim at tile and ceiling junction",
    aspect: "wide",
  },
  {
    id: "8",
    src: "/decor-tile-entry.png",
    alt: "Statement foyer wall with decorative patterned designer tiles",
    aspect: "tall",
  },
];
