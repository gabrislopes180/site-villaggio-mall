import React from "react";
import { MapPin, Clock, Phone } from "lucide-react";
import { SITE_INFO } from "@/constants/siteInfo";
import { Button } from "@/components/ui/button";

export function ContactMap() {
  return (
    <section
      id="contato"
      className="section-padding bg-[var(--color-primary-soft)] relative overflow-hidden"
    >
      {/* Detalhe decorativo no fundo */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-[var(--color-primary)]/5 rounded-l-full transform translate-x-1/4"
        aria-hidden
      />

      <div className="container-content relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-center">
          {/* ── Informações ─────────────────────────────────────── */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <h2 className="text-[var(--color-primary)] mb-4">Como Chegar</h2>
              <p className="text-[var(--color-foreground)] text-lg">
                Estamos no coração de Bauru, prontos para receber você.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {/* Endereço */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin
                    size={20}
                    className="text-[var(--color-primary)]"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--color-foreground)] uppercase tracking-widest mb-1">
                    Endereço
                  </h3>
                  <p className="text-[var(--color-muted-foreground)]">
                    {SITE_INFO.address.street} <br />
                    {SITE_INFO.address.neighborhood} — {SITE_INFO.address.city},{" "}
                    {SITE_INFO.address.state} <br />
                    CEP: {SITE_INFO.address.zip}
                  </p>
                </div>
              </div>

              {/* Horários */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <Clock
                    size={20}
                    className="text-[var(--color-primary)]"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </div>
                <div className="w-full">
                  <h3 className="text-sm font-bold text-[var(--color-foreground)] uppercase tracking-widest mb-2">
                    Horários
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {SITE_INFO.hours.rows.map((row) => (
                      <li
                        key={row.days}
                        className="flex justify-between items-center text-sm border-b border-white/40 pb-2 last:border-0 last:pb-0"
                      >
                        <span className="text-[var(--color-muted-foreground)]">
                          {row.days}
                        </span>
                        <span className="font-semibold text-[var(--color-foreground)]">
                          {row.hours}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contato Direto */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <Phone
                    size={20}
                    className="text-[var(--color-primary)]"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--color-foreground)] uppercase tracking-widest mb-1">
                    Fale Conosco
                  </h3>
                  <div className="flex flex-col gap-1">
                    <a
                      href={`tel:${SITE_INFO.contact.phone}`}
                      className="text-[var(--color-primary)] hover:underline font-medium"
                    >
                      {SITE_INFO.contact.phone}
                    </a>
                    <a
                      href={`mailto:${SITE_INFO.contact.email}`}
                      className="text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] text-sm transition-colors"
                    >
                      {SITE_INFO.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Button variant="primary" asChild className="w-fit">
              <a
                href={SITE_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Traçar Rota no Mapa
              </a>
            </Button>
          </div>

          {/* ── Mapa Interativo (Placeholder) ────────────────────── */}
          <div className="lg:col-span-3 h-[400px] lg:h-full min-h-[400px] bg-white p-2 rounded-[var(--radius-card)] shadow-[var(--shadow-float)] relative">
            <div className="w-full h-full bg-[var(--color-surface-muted)] rounded-lg flex flex-col items-center justify-center text-center p-6">
              <MapPin
                size={48}
                className="text-[var(--color-muted-foreground)]/40 mb-4"
                strokeWidth={1}
                aria-hidden
              />
              <p className="font-semibold text-[var(--color-foreground)] mb-2">
                Mapa Interativo
              </p>
              <p className="text-sm text-[var(--color-muted-foreground)] max-w-xs">
                Esse bloco será substituído por dados reais do Google Maps ou
                componente de mapa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
