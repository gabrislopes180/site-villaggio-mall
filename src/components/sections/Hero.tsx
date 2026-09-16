import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SITE_INFO } from "@/constants/siteInfo";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-[85vh] bg-[var(--color-foreground)] overflow-hidden pt-20"
      aria-label="Introdução"
    >
      {/* ── Background Placeholder ────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-foreground)]/90 via-[var(--color-foreground)]/65 to-transparent z-10" />

        {/* Espaço para a imagem aérea do shopping */}
        <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-brand-blue)]/20">
          <div className="text-center text-white/30 flex flex-col items-center gap-3">
            <svg
              width="48"
              height="48"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
              aria-hidden
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <p className="text-sm">Placeholder: Fotografia Aérea (Hero)</p>
          </div>
          <Image
            src="/aerial-view/mall-visao-aerea.jpg"
            alt="Vista aérea do Villaggio Mall Center"
            fill
            className="object-cover "
            priority
          />
        </div>
      </div>

      {/* ── Conteúdo ──────────────────────────────────────────── */}
      <div className="relative z-10 container-content flex flex-col items-center text-center mt-12 mb-20">
        <span className="text-[var(--color-brand-gray)] font-semibold text-sm uppercase tracking-[0.2em] mb-4">
          Bauru — SP
        </span>

        <h1 className="text-white mb-6  tracking-tight drop-shadow-lg max-w-4xl">
          {SITE_INFO.tagline}
        </h1>

        <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl text-balance drop-shadow">
          Um espaço aberto e acolhedor que reúne moda, gastronomia e serviços em
          um ambiente pensado para a família.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button variant="primary" size="lg" asChild>
            <a href="#lojas">Conhecer as lojas</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 hover:border-white/80"
            asChild
          >
            <a href="#contato">Como chegar</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
