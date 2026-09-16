"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";
import { SITE_INFO } from "@/constants/siteInfo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Fecha menu ao redimensionar para desktop */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* Trava scroll do body quando menu mobile está aberto */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "transition-all duration-250 ease-in-out",
          scrolled
            ? "bg-[var(--color-surface)]/95 backdrop-blur-md shadow-[var(--shadow-float)]"
            : "bg-transparent",
        )}
        role="banner"
      >
        <div className="container-content">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* ── Logo ─────────────────────────────────────── */}
            <Link
              href="/"
              className="flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[var(--color-primary)] rounded-lg"
              aria-label={`${SITE_INFO.name} — página inicial`}
            >
              {/* MOCK DA LOGO OFICIAL - Substitua a <div> abaixo pela tag <Image /> quando tiver o arquivo */}
              <Image
                src={"/logo/logo-mall.png"}
                alt="logo"
                width={120}
                height={120}
                className="mt-5"
              />
            </Link>

            {/* ── Navegação desktop ─────────────────────────── */}
            <nav
              aria-label="Navegação principal"
              className="hidden lg:flex items-center gap-8"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "group relative py-2",
                    "text-[0.875rem] font-semibold",
                    "transition-colors duration-150",
                    "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 rounded",
                    scrolled
                      ? "text-[var(--color-foreground)] hover:text-[var(--color-primary)]"
                      : "text-white/90 hover:text-white",
                  )}
                >
                  {link.label}
                  {/* Linha animada no hover */}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100",
                      scrolled ? "bg-[var(--color-primary)]" : "bg-white",
                    )}
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </nav>

            {/* ── Hambúrguer mobile ─────────────────────────── */}
            <Button
              variant="ghost"
              size="icon-compact"
              className={cn(
                "lg:hidden",
                scrolled
                  ? "text-[var(--color-foreground)]"
                  : "text-white hover:bg-white/15",
              )}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? (
                <X size={22} strokeWidth={2} aria-hidden />
              ) : (
                <Menu size={22} strokeWidth={2} aria-hidden />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* ── Menu Mobile ──────────────────────────────────────── */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

/* ── Mobile Menu ─────────────────────────────────────────── */

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <nav
        id="mobile-menu"
        role="dialog"
        aria-label="Menu de navegação"
        aria-modal={open}
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-72 lg:hidden",
          "bg-[var(--color-surface)] shadow-[var(--shadow-float)]",
          "flex flex-col",
          "transition-transform duration-250 ease-in-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Header do drawer */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--color-surface-muted)]">
          <span className="font-extrabold text-[var(--color-primary)] text-lg tracking-tight">
            VILLAGGIO
          </span>
          <Button
            variant="ghost"
            size="icon-compact"
            onClick={onClose}
            aria-label="Fechar menu"
          >
            <X size={20} strokeWidth={2} aria-hidden />
          </Button>
        </div>

        {/* Links */}
        <ul className="flex flex-col p-4 gap-1 flex-1 overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                className={cn(
                  "flex items-center w-full px-4 py-3 rounded-xl",
                  "text-[1rem] font-semibold text-[var(--color-foreground)]",
                  "hover:bg-[var(--color-primary-soft)] hover:text-[var(--color-primary)]",
                  "transition-colors duration-150",
                  "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-0",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Footer do drawer */}
        <div className="px-6 py-5 border-t border-[var(--color-surface-muted)]">
          <p className="text-xs text-[var(--color-muted-foreground)] text-center">
            {SITE_INFO.address.city}, {SITE_INFO.address.state}
          </p>
        </div>
      </nav>
    </>
  );
}
