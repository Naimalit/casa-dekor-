import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Materials",
  description:
    "PVC wall and ceiling materials—benefits, marble-effect finishes, suggested rooms, and honest maintenance notes.",
};

const blocks = [
  {
    title: "Why PVC for walls",
    body: "Rigid PVC panels are light, dimensionally stable, and forgiving in spaces where moisture or temperature swing. They wipe clean, resist common stains, and install faster than many traditional wall build-ups—without giving up a premium visual.",
  },
  {
    title: "Marble-effect versus solid palettes",
    body: "Marble-effect films capture movement and gloss in a way flat colors cannot—ideal for focal planes and horizontal zones you want to read as stone. Solid and wood-grain panels trade veining for rhythm and warmth; choose them when you want texture and line instead of dramatic pattern.",
  },
  {
    title: "Where it works best",
    body: "Living rooms, bedrooms, corridors, and hospitality-style zones love linear panels and warm grains. Marble-effect shines at islands, vanities, media walls, and anywhere you want a high-end surface without the maintenance burden of slab stone.",
  },
  {
    title: "Maintenance (honest)",
    body: "Day to day, mild cleaners and soft cloths are enough. Avoid abrasive pads on gloss faces. Panels won’t need sealing like natural stone; plan occasional inspection at seams and transitions—especially in wet zones—as you would with any finished wall assembly.",
  },
];

export default function MaterialsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <Reveal>
        <header className="max-w-3xl">
          <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold">
            Materials
          </p>
          <h1 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">
            A practical guide—not a chemistry textbook
          </h1>
          <p className="mt-5 font-sans text-base leading-relaxed text-ink/78">
            If you are deciding between panel types, start here. This overview is
            written to help homeowners and trades orient quickly; your installer
            still reviews site conditions before final specification.
          </p>
        </header>
      </Reveal>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {blocks.map((b, i) => (
          <Reveal key={b.title} delay={i * 0.06}>
            <section className="h-full rounded-2xl border border-cream-deep bg-cream p-8 shadow-sm">
              <h2 className="font-serif text-2xl text-ink">{b.title}</h2>
              <p className="mt-4 font-sans text-sm leading-relaxed text-ink/75">
                {b.body}
              </p>
            </section>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
