"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  Badge,
  FilterChip,
} from "@/components/ui";
import { STORES, STORE_CATEGORIES, StoreCategory } from "@/constants/stores";

export function StoreDirectory() {
  const [activeCategory, setActiveCategory] = useState<StoreCategory | "Todas">(
    "Todas",
  );

  // Filtra as lojas pela categoria selecionada
  const filteredStores = STORES.filter((store) => {
    if (activeCategory === "Todas") return true;
    return store.category === activeCategory;
  });

  return (
    <section
      id="lojas"
      className="section-padding bg-[var(--color-surface-muted)]"
    >
      <div className="container-content">
        {/* ── Cabeçalho da Seção ────────────────────────────── */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-[var(--color-foreground)] mb-4">
            Lojas Villaggio Mall
          </h2>
          <p className="text-[var(--color-muted-foreground)] max-w-2xl">
            Conheça nossas lojas e entre em contato.
          </p>
        </div>

        {/* ── Filtros (Chips) ───────────────────────────────── */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
          role="group"
          aria-label="Filtrar lojas por categoria"
        >
          <FilterChip
            label="Todas"
            selected={activeCategory === "Todas"}
            onClick={() => setActiveCategory("Todas")}
          />
          {STORE_CATEGORIES.map((category) => (
            <FilterChip
              key={category}
              label={category}
              selected={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </div>

        {/* ── Grid de Lojas ─────────────────────────────────── */}
        {filteredStores.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredStores.map((store) => (
              <Card key={store.id} className="flex flex-col h-full">
                {/* Imagem Placeholder */}
                <div className="relative aspect-[16/10] bg-[var(--color-background)] rounded-t-[calc(var(--radius-card)-1px)] overflow-hidden flex items-center justify-center shrink-0 border-b border-[var(--color-surface-muted)]">
                  {store.imageSrc ? (
                    <Image
                      src={store.imageSrc}
                      alt={store.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-1 text-[var(--color-muted-foreground)]/50">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        aria-hidden
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                        />
                      </svg>
                      <span className="text-[10px] uppercase font-bold tracking-wider">
                        Sem Foto
                      </span>
                    </div>
                  )}
                </div>

                <CardHeader className="flex-1">
                  <div className="mb-2">
                    <Badge
                      variant={
                        store.category === "Gastronomia"
                          ? "secondary"
                          : "primary"
                      }
                    >
                      {store.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{store.name}</CardTitle>
                  <CardDescription className="line-clamp-3 mt-1">
                    {store.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center bg-[var(--color-surface)] rounded-[var(--radius-card)]">
            <p className="text-[var(--color-foreground)] font-semibold mb-2">
              Nenhuma loja encontrada.
            </p>
            <p className="text-[var(--color-muted-foreground)] text-sm">
              Tente selecionar outra categoria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
