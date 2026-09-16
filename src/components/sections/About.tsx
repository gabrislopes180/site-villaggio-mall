import React from "react";
import Image from "next/image";
import { SITE_INFO } from "@/constants/siteInfo";

export function About() {
  return (
    <section
      id="o-mall"
      className="section-padding bg-[var(--color-background)]"
    >
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ── Imagem Institucional ───────────────────────────── */}
          <div className="relative aspect-[4/3] w-full rounded-[var(--radius-card)] overflow-hidden bg-[var(--color-surface-muted)] shadow-[var(--shadow-float)]">
            {/* Espaço para foto da fachada */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--color-muted-foreground)]">
              <svg
                width="40"
                height="40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
                aria-hidden
                className="mb-2"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              <p className="text-sm">Placeholder: Foto da Fachada</p>
            </div>
            <Image
              src="/description/description-image.png"
              alt="Fachada do Villaggio Mall Center"
              fill
              className="object-cover"
            />
          </div>

          {/* ── Texto Institucional ────────────────────────────── */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-[var(--color-primary)] mb-2">
                {SITE_INFO.about.heading}
              </h2>
              <div
                className="w-16 h-1 bg-[var(--color-brand-brick)] rounded-full"
                aria-hidden
              />
            </div>

            <div className="flex flex-col gap-4 text-[var(--color-muted-foreground)] text-lg leading-relaxed">
              {SITE_INFO.about.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6 mt-4 pt-6 border-t border-[var(--color-surface-muted)]">
              <div>
                <p className="font-bold text-[var(--color-foreground)] text-2xl mb-1">
                  20+
                </p>
                <p className="text-sm text-[var(--color-muted-foreground)]">
                  Lojas exclusivas
                </p>
              </div>
              <div>
                <p className="font-bold text-[var(--color-foreground)] text-2xl mb-1">
                  Open Mall
                </p>
                <p className="text-sm text-[var(--color-muted-foreground)]">
                  Ambiente aberto e arejado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
