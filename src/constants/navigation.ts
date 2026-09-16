/* ============================================================
   NAVIGATION — Links de navegação do site
   ============================================================ */

export interface NavLink {
  label: string;
  href: string;
  /** Se true, abre em nova aba */
  external?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { label: "O Mall", href: "#o-mall" },
  { label: "Lojas", href: "#lojas" },
  { label: "Agenda", href: "#agenda" },
  { label: "Mídias Sociais", href: "#midias-sociais" },
  { label: "Contato", href: "#contato" },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "O Mall", href: "#o-mall" },
  { label: "Lojas", href: "#lojas" },
  { label: "Contato", href: "#contato" },
  {
    label: "Facebook",
    href: "https://www.facebook.com/villaggiomallcenter",
    external: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/villaggiomallcenter",
    external: true,
  },
];
