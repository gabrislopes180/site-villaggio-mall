import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* ============================================================
   BADGE / FILTER CHIP — Design System Villaggio Mall
   Shape: pill (rounded-full)
   ============================================================ */

const badgeVariants = cva(
  [
    "inline-flex items-center gap-1",
    "rounded-full px-3 py-1",
    "text-xs font-semibold leading-[1.4]",
    "border border-transparent",
    "transition-colors duration-150",
    "select-none",
  ],
  {
    variants: {
      variant: {
        /** Primário suave */
        primary: [
          "bg-[var(--color-primary-soft)] text-[var(--color-primary)]",
          "border-[var(--color-primary-soft)]",
        ],
        /** Secundário suave (vinho) */
        secondary: [
          "bg-[var(--color-secondary-soft)] text-[var(--color-secondary)]",
          "border-[var(--color-secondary-soft)]",
        ],
        /** Neutro */
        muted: [
          "bg-[var(--color-surface-muted)] text-[var(--color-muted-foreground)]",
        ],
        /** Sucesso */
        success: ["bg-emerald-50 text-[var(--color-success)]"],
        /** Destrutivo */
        destructive: ["bg-red-50 text-[var(--color-danger)]"],
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

/* ── Filter Chip (selecionável) ──────────────────────────── */

export interface FilterChipProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  label: string;
}

function FilterChip({
  selected = false,
  label,
  className,
  ...props
}: FilterChipProps) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={selected}
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-4 py-2",
        "text-[0.8125rem] font-semibold leading-[1.4]",
        "border transition-colors duration-150 cursor-pointer",
        "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2",
        selected
          ? [
              "bg-[var(--color-primary)] text-white border-[var(--color-primary)]",
              "hover:bg-[var(--color-primary-hover)]",
            ]
          : [
              "bg-[var(--color-surface)] text-[var(--color-foreground)] border-[var(--color-surface-muted)]",
              "hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]",
            ],
        className
      )}
      {...props}
    >
      {label}
    </button>
  );
}

export { Badge, badgeVariants, FilterChip };
