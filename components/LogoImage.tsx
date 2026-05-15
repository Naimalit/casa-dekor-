import Image from "next/image";

type Props = {
  className?: string;
  priority?: boolean;
  /** Knocks out flat white in many PNGs so the scene behind reads through (hero/footer). */
  knockOutWhite?: boolean;
};

/** Served from /public/logo.png. `unoptimized` serves bytes as stored (reliable on all hosts). */
export function LogoImage({
  className = "",
  priority = false,
  knockOutWhite = false,
}: Props) {
  return (
    <Image
      src="/logo.png"
      alt=""
      width={548}
      height={455}
      unoptimized
      priority={priority}
      className={`h-9 w-auto max-w-[200px] object-contain object-left sm:h-10 sm:max-w-[220px] ${knockOutWhite ? "mix-blend-multiply" : ""} ${className}`}
    />
  );
}
