import Image from "next/image";

type Props = {
  className?: string;
  priority?: boolean;
};

/** Transparent PNG at /public/logo.png. `unoptimized` serves bytes as stored. */
export function LogoImage({ className = "", priority = false }: Props) {
  return (
    <Image
      src="/logo.png"
      alt=""
      width={548}
      height={455}
      unoptimized
      priority={priority}
      className={`h-9 w-auto max-w-[200px] object-contain object-left sm:h-10 sm:max-w-[220px] ${className}`}
    />
  );
}
