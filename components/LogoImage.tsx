import Image from "next/image";

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
      className={`h-10 w-auto object-contain sm:h-11 ${className}`}
      priority={priority}
    />
  );
}
