import React from "react";
import Link from "next/link";
import { Facebook, Instagram, MapPin, Clock, Phone, Mail } from "lucide-react";
import { SITE_INFO } from "@/constants/siteInfo";
import { FOOTER_LINKS } from "@/constants/navigation";

/* ============================================================
   FOOTER — Villaggio Mall Center
   - 3 colunas: marca, links, horário
   - Informações de contato e localização
   - Links de redes sociais
   ============================================================ */

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[var(--color-foreground)] text-white"
      role="contentinfo"
    >
      {/* ── Bloco principal ────────────────────────────────── */}
      <div className="container-content py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* ── Coluna 1: Marca e redes sociais ──────────── */}
          <div className="flex flex-col gap-5">
            <div>
              <p className="font-extrabold text-2xl tracking-tight text-white leading-none">
                VILLAGGIO
              </p>
              <p className="text-[var(--color-brand-gray)] text-sm font-medium mt-0.5">
                Mall Center · Bauru, SP
              </p>
            </div>

            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              {SITE_INFO.tagline}. Um open mall que reúne moda, gastronomia e
              serviços em um ambiente aberto e acolhedor.
            </p>

            {/* Redes sociais */}
            <div className="flex items-center gap-3">
              <a
                href={SITE_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Villaggio Mall no Facebook — abre em nova aba"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-[var(--color-primary)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-foreground)]"
              >
                <Facebook size={18} strokeWidth={1.75} aria-hidden />
              </a>
              <a
                href={SITE_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Villaggio Mall no Instagram — abre em nova aba"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-[var(--color-secondary)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-foreground)]"
              >
                <Instagram size={18} strokeWidth={1.75} aria-hidden />
              </a>
            </div>
          </div>

          {/* ── Coluna 2: Links e contato ─────────────────── */}
          <div className="flex flex-col gap-5">
            <h3 className="text-sm font-700 uppercase tracking-widest text-[var(--color-brand-gray)]">
              Navegação
            </h3>
            <nav aria-label="Links do rodapé">
              <ul className="flex flex-col gap-2">
                {FOOTER_LINKS.filter((l) => !l.external).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contato */}
            <div className="flex flex-col gap-2 pt-2">
              <a
                href={`tel:${SITE_INFO.contact.phone}`}
                className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors duration-150"
              >
                <Phone size={14} strokeWidth={1.75} aria-hidden className="shrink-0 text-[var(--color-brand-blue)]" />
                {SITE_INFO.contact.phone}
              </a>
              <a
                href={`mailto:${SITE_INFO.contact.email}`}
                className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors duration-150"
              >
                <Mail size={14} strokeWidth={1.75} aria-hidden className="shrink-0 text-[var(--color-brand-blue)]" />
                {SITE_INFO.contact.email}
              </a>
            </div>
          </div>

          {/* ── Coluna 3: Localização e horários ──────────── */}
          <div className="flex flex-col gap-5">
            <h3 className="text-sm font-700 uppercase tracking-widest text-[var(--color-brand-gray)]">
              Localização
            </h3>

            <a
              href={SITE_INFO.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver localização no Google Maps — abre em nova aba"
              className="flex items-start gap-2 text-sm text-white/80 hover:text-white transition-colors duration-150"
            >
              <MapPin
                size={16}
                strokeWidth={1.75}
                aria-hidden
                className="shrink-0 mt-0.5 text-[var(--color-brand-blue)]"
              />
              <span>{SITE_INFO.address.full}</span>
            </a>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-[var(--color-brand-gray)]">
                <Clock
                  size={14}
                  strokeWidth={1.75}
                  aria-hidden
                  className="shrink-0 text-[var(--color-brand-blue)]"
                />
                <span className="font-semibold">Horários</span>
              </div>
              <ul className="flex flex-col gap-1 text-sm">
                {SITE_INFO.hours.rows.map((row) => (
                  <li
                    key={row.days}
                    className="flex justify-between gap-4 text-white/70"
                  >
                    <span>{row.days}</span>
                    <span className="font-medium text-white/90 shrink-0">
                      {row.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Barra inferior ─────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="container-content py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
            <p>
              &copy; {currentYear} Villaggio Mall Center. Todos os direitos
              reservados.
            </p>
            <p>Bauru, SP · Brasil</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
