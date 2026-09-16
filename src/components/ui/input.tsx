import * as React from "react";
import { cn } from "@/lib/utils";

/* ============================================================
   INPUT — Design System Villaggio Mall
   Radius: 8px (--radius-input)
   Foco: ring 3px primary
   ============================================================ */

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Rótulo persistente — sempre visível acima do campo */
  label?: string;
  /** Mensagem de erro — vinculada via aria-describedby */
  error?: string;
  /** Texto auxiliar quando não há erro */
  hint?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, id, type = "text", ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;
    const errorId = error ? `${inputId}-error` : undefined;
    const hintId = hint && !error ? `${inputId}-hint` : undefined;
    const describedBy = errorId ?? hintId;

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-[0.875rem] font-semibold text-[var(--color-foreground)]"
          >
            {label}
          </label>
        )}

        <input
          ref={ref}
          id={inputId}
          type={type}
          aria-describedby={describedBy}
          aria-invalid={!!error}
          className={cn(
            "h-12 w-full rounded-[var(--radius-input)] border px-4",
            "bg-[var(--color-surface)] text-[var(--color-foreground)]",
            "text-base placeholder:text-[var(--color-muted-foreground)]",
            "transition-colors duration-150",
            // Borda padrão
            "border-[var(--color-input-border)]",
            // Foco
            "focus:outline-none focus:ring-3 focus:ring-[var(--color-primary)] focus:ring-offset-0 focus:border-[var(--color-primary)]",
            // Erro
            error &&
              "border-[var(--color-danger)] focus:ring-[var(--color-danger)]",
            // Disabled
            "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-surface-muted)]",
            className
          )}
          {...props}
        />

        {error && (
          <p
            id={errorId}
            role="alert"
            className="text-xs text-[var(--color-danger)] font-medium"
          >
            {error}
          </p>
        )}

        {hint && !error && (
          <p id={hintId} className="text-xs text-[var(--color-muted-foreground)]">
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

/* ── Textarea ────────────────────────────────────────────── */

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const generatedId = React.useId();
    const textareaId = id ?? generatedId;
    const errorId = error ? `${textareaId}-error` : undefined;
    const hintId = hint && !error ? `${textareaId}-hint` : undefined;
    const describedBy = errorId ?? hintId;

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-[0.875rem] font-semibold text-[var(--color-foreground)]"
          >
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          aria-describedby={describedBy}
          aria-invalid={!!error}
          className={cn(
            "min-h-[120px] w-full rounded-[var(--radius-input)] border px-4 py-3",
            "bg-[var(--color-surface)] text-[var(--color-foreground)]",
            "text-base placeholder:text-[var(--color-muted-foreground)]",
            "resize-y transition-colors duration-150",
            "border-[var(--color-input-border)]",
            "focus:outline-none focus:ring-3 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]",
            error &&
              "border-[var(--color-danger)] focus:ring-[var(--color-danger)]",
            "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-surface-muted)]",
            className
          )}
          {...props}
        />

        {error && (
          <p
            id={errorId}
            role="alert"
            className="text-xs text-[var(--color-danger)] font-medium"
          >
            {error}
          </p>
        )}

        {hint && !error && (
          <p
            id={hintId}
            className="text-xs text-[var(--color-muted-foreground)]"
          >
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Input, Textarea };
