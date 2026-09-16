import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

/* ── Montserrat — todos os pesos do design system ───────── */
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

/* ── Metadados ──────────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: "Villaggio Mall Center | Bauru, SP",
    template: "%s | Villaggio Mall Center",
  },
  description:
    "O Villaggio Mall Center é um open mall em Bauru, SP. Conheça nossas lojas, gastronomia, serviços e muito mais em um ambiente aberto e acolhedor.",
  keywords: [
    "villaggio mall",
    "villagio mall center",
    "shopping bauru",
    "open mall bauru",
    "lojas bauru",
    "gastronomia bauru",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://villaggiomall.com.br",
    siteName: "Villaggio Mall Center",
    title: "Villaggio Mall Center | Bauru, SP",
    description:
      "O Villaggio Mall Center é um open mall em Bauru, SP. Conheça nossas lojas, gastronomia e serviços.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Villaggio Mall Center | Bauru, SP",
    description:
      "O Villaggio Mall Center é um open mall em Bauru, SP. Conheça nossas lojas, gastronomia e serviços.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body className="bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
