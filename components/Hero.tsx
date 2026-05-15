"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { LogoImage } from "@/components/LogoImage";
import { siteConfig } from "@/lib/siteConfig";

/** Brand imagery — modern large-format wall tiles (see `public/decor-tile-hero.png`). */
const HERO_PANEL = "/decor-tile-hero.png";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [narrow, setNarrow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const onChange = () => setNarrow(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const parallax = !reduceMotion && !narrow;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const yBack = useTransform(
    scrollYProgress,
    [0, 1],
    parallax ? [0, 140] : [0, 0],
  );
  const yMid = useTransform(
    scrollYProgress,
    [0, 1],
    parallax ? [0, 70] : [0, 0],
  );
  const scalePanel = useTransform(
    scrollYProgress,
    [0, 1],
    parallax ? [1, 1.05] : [1, 1],
  );

  return (
    <section
      ref={sectionRef}
      className="relative -mt-px min-h-[calc(100vh-4rem)] overflow-hidden bg-ink"
    >
      {/* Soft backdrop only — lighter blur so the scene is not “all mush” */}
      <motion.div style={{ y: yBack }} className="absolute inset-0">
        <Image
          src={HERO_PANEL}
          alt=""
          fill
          priority
          quality={60}
          className="object-cover opacity-45 blur-md scale-105"
          sizes="100vw"
          aria-hidden
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cream/30 via-cream/15 to-cream/90" />

      <motion.div
        style={{ y: yMid }}
        className="pointer-events-none absolute -right-24 top-24 h-[520px] w-[520px] rounded-[3rem] opacity-25 blur-3xl"
        aria-hidden
      >
        <div className="h-full w-full rounded-[3rem] bg-gradient-to-br from-gold via-gold-muted to-transparent" />
      </motion.div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-20 pt-12 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:pt-16">
        <div className="max-w-xl lg:flex-1">
          <div className="mb-6 w-fit">
            <LogoImage
              priority
              knockOutWhite
              className="!h-10 max-w-[min(100%,240px)] sm:!h-11"
            />
          </div>
          <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-gold">
            North Macedonia · Interior décor
          </p>
          <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl">
            {siteConfig.slogan}
          </h1>
          <p className="mt-4 font-serif text-xl italic text-ink/75">
            {siteConfig.sloganAlt}
          </p>
          <p className="mt-6 max-w-prose font-sans text-base leading-relaxed text-ink/80">
            We supply PVC wall panels and marble-effect finishes for interiors
            that should feel considered—quality materials, honest pricing, and
            categories you can understand at a glance.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/collections"
              prefetch={false}
              className="inline-flex items-center justify-center rounded-full bg-ink px-8 py-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-cream transition hover:bg-charcoal"
            >
              Browse collections
            </Link>
            <Link
              href="/materials"
              prefetch={false}
              className="inline-flex items-center justify-center rounded-full border border-ink/20 bg-cream/40 px-8 py-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ink transition hover:border-gold hover:text-gold"
            >
              Material guide
            </Link>
          </div>
        </div>

        <div className="relative flex flex-1 justify-center lg:justify-end">
          <motion.div
            style={{ scale: scalePanel }}
            className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-white/50 bg-cream shadow-2xl shadow-ink/30 ring-1 ring-gold/25"
          >
            <Image
              src={HERO_PANEL}
              alt="Modern large-format wall tiles with soft veining"
              fill
              priority
              quality={92}
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover object-center"
            />
            {/* Subtle edge read — no full-frame blend that softens the whole photo */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent"
              aria-hidden
            />
            {!reduceMotion && (
              <motion.div
                className="pointer-events-none absolute -right-1/4 top-0 h-1/2 w-1/2 rounded-full bg-white/15 blur-3xl"
                animate={{ opacity: [0.2, 0.35, 0.2] }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                aria-hidden
              />
            )}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/60 via-ink/20 to-transparent p-6">
              <p className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-cream/90">
                One panel story
              </p>
              <p className="mt-2 font-serif text-lg text-cream">
                Marble looks—walls that last.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
