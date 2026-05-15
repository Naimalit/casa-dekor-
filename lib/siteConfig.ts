export const siteConfig = {
  name: "CASA DECOR",
  slogan: "Premium panels. Honest prices.",
  sloganAlt: "Marble looks. Walls that last.",

  social: {
    facebook:
      process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "https://www.facebook.com/",
    instagram:
      process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://www.instagram.com/",
  },

  contact: {
    email: "hello@casadecor.mk",
    phoneDisplay: "+389 XX XXX XXX",
    phoneHref: "tel:+389XXXXXXXX",
    whatsappHref: "https://wa.me/389XXXXXXXXX",
  },

  serviceArea: "Republic of North Macedonia",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Collections" },
  { href: "/materials", label: "Materials" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
