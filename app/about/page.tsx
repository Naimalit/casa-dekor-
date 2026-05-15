import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About",
  description:
    "CASA DECOR supplies quality PVC wall panels and marble-effect décor across North Macedonia at fair prices.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <Reveal>
        <header>
          <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold">
            About
          </p>
          <h1 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">
            Materials that look expensive—pricing that stays grounded
          </h1>
        </header>
      </Reveal>

      <Reveal delay={0.06}>
        <div className="mt-10 space-y-6 font-sans text-base leading-relaxed text-ink/80">
          <p>
            CASA DECOR focuses on a tight range of interior finishes: PVC wall
            panels, marble-effect surfaces, and the trims that make an
            installation feel complete. We are not trying to be a noisy
            marketplace; we want visitors to understand what we sell in a single
            scroll.
          </p>
          <p>
            Based in the {siteConfig.serviceArea}, we serve residential and
            light commercial projects locally—without the distraction of
            showroom maps or “visit us” logistics on this site.
          </p>
          <p>
            Our bias is toward quality at the best price: materials chosen for
            how they perform on the wall, priced in a way that keeps refined
            interiors within reach.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <blockquote className="mt-12 border-l-2 border-gold pl-6 font-serif text-xl italic text-ink/90">
          “Premium panels. Honest prices.”
        </blockquote>
      </Reveal>
    </div>
  );
}
