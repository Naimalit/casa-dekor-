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
      src="/logo.jpg"
      alt="CASA DECOR"
      width={160}
      height={48}
      className={`h-10 w-auto object-contain ${className}`}
      priority={priority}
    />
  );
}
