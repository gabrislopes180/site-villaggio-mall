import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* ============================================================
   BUTTON — Design System Villaggio Mall
   Altura: 48px (padrão) | 44px (compact)
   Shape: pill (rounded-full)
   Transição: 150ms
   ============================================================ */

const buttonVariants = cva(
  // Base comum a todos os botões
  [
    "inline-flex items-center justify-center gap-2",
    "font-semibold text-[0.875rem] leading-[1.4] whitespace-nowrap",
    "rounded-full border border-transparent",
    "transition-all duration-150 ease-in-out",
    "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-4",
    "disabled:pointer-events-none disabled:opacity-50",
    "select-none cursor-pointer",
  ],
  {
    variants: {
      variant: {
        /** Ação principal — azul */
        primary: [
          "bg-[var(--color-primary)] text-white",
          "hover:bg-[var(--color-primary-hover)]",
          "active:scale-[0.98]",
        ],
        /** Ação secundária — vinho */
        secondary: [
          "bg-[var(--color-secondary)] text-white",
          "hover:bg-[var(--color-secondary-hover)]",
          "active:scale-[0.98]",
        ],
        /** Suave primário — fundo azul claro, texto azul */
        soft: [
          "bg-[var(--color-primary-soft)] text-[var(--color-primary)]",
          "hover:bg-[var(--color-primary)] hover:text-white",
          "active:scale-[0.98]",
        ],
        /** Discreto — sem fundo, borda */
        outline: [
          "border-[var(--color-input-border)] text-[var(--color-foreground)] bg-transparent",
          "hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]",
          "active:scale-[0.98]",
        ],
        /** Fantasma — texto puro, sem borda nem fundo */
        ghost: [
          "text-[var(--color-foreground)] bg-transparent",
          "hover:bg-[var(--color-surface-muted)]",
          "active:scale-[0.98]",
        ],
        /** Destrutivo — vermelho, para ações irreversíveis */
        destructive: [
          "bg-[var(--color-danger)] text-white",
          "hover:opacity-90",
          "active:scale-[0.98]",
        ],
      },
      size: {
        /** Padrão: 48px de altura */
        default: "h-12 px-6 py-0",
        /** Compacto: 44px de altura */
        compact: "h-11 px-5 py-0",
        /** Grande: para CTAs de destaque */
        lg: "h-14 px-8 py-0 text-base",
        /** Só ícone */
        icon: "h-12 w-12 p-0",
        "icon-compact": "h-11 w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Quando true, renderiza o filho como elemento raiz (Radix Slot) */
  asChild?: boolean;
  /** Quando true, exibe indicador de loading e bloqueia cliques repetidos */
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, loading = false, children, disabled, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin h-4 w-4 shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            <span>Carregando…</span>
          </>
        ) : (
          children
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
