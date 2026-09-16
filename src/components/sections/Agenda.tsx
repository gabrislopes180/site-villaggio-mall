import React from "react";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

export function Agenda() {
  return (
    <section id="agenda" className="section-padding bg-[var(--color-surface)]">
      <div className="container-content">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-[var(--color-secondary-soft)] text-[var(--color-secondary)] rounded-full flex items-center justify-center mb-6">
            <CalendarDays size={32} strokeWidth={1.5} aria-hidden />
          </div>
          
          <h2 className="text-[var(--color-secondary)] mb-4">Agenda e Eventos</h2>
          
          <p className="text-[var(--color-muted-foreground)] mb-8 text-lg leading-relaxed">
            O Villaggio Mall Center está sempre preparando momentos especiais para 
            você e sua família. Fique de olho na nossa programação de música ao vivo, 
            feiras e eventos sazonais.
          </p>

          <div className="p-8 rounded-[var(--radius-card)] bg-[var(--color-background)] border border-[var(--color-surface-muted)] w-full mb-8">
            <p className="font-semibold text-[var(--color-foreground)] mb-1">
              Novidades em breve!
            </p>
            <p className="text-sm text-[var(--color-muted-foreground)]">
              Acompanhe nossas redes sociais para não perder nenhuma atualização.
            </p>
          </div>

          <Button variant="secondary" asChild>
            <a href="https://www.instagram.com/villaggiomallcenter" target="_blank" rel="noopener noreferrer">
              Seguir no Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
