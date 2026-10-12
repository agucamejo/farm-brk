import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "./styles/components.css";
import "./styles/animations.css";
import Analytics from "./components/Analytics";
import ScrollReveal from "./components/ScrollReveal";
import GlowCursor from "./components/reactbits/GlowCursor";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "FARM — El portal de Brinkmann",
  description:
    "Tu negocio, a la vista de toda la ciudad. Primero en Brinkmann, Córdoba. Sin comisiones por venta.",
  keywords: ["FARM", "Brinkmann", "portal", "comercios", "Córdoba", "waitlist"],
  openGraph: {
    title: "FARM — El portal de Brinkmann",
    description: "Tu negocio, a la vista de toda la ciudad.",
    type: "website",
    locale: "es_AR",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR" className={jakarta.variable}>
      <body className={jakarta.className}>
        <GlowCursor />
        <Analytics>
          {children}
        </Analytics>
        <ScrollReveal />
      </body>
    </html>
  );
}
