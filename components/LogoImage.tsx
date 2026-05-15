import Image from "next/image";

/** Served from /public/logo.png. `unoptimized` keeps the original PNG bytes (avoids rare `next/image` + PNG issues on some hosts). */
export function LogoImage({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/logo.png"
      alt="CASA DECOR"
      width={548}
      height={455}
      unoptimized
      priority={priority}
      className={`h-12 w-auto max-w-[min(100%,280px)] object-contain object-left sm:h-14 ${className}`}
    />
  );
}
