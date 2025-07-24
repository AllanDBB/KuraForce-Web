import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kura Force - F1 in Schools Championship",
  description: "Ingeniería de precisión, velocidad extrema y tecnología de vanguardia. Nuestro equipo representa el futuro del automovilismo.",
  keywords: "F1 in Schools, Kura Force, Racing, Engineering, Innovation, Technology, Automotive",
  authors: [{ name: "Kura Force Team" }],
  openGraph: {
    title: "Kura Force - F1 in Schools Championship",
    description: "Donde la ingeniería de precisión se encuentra con la velocidad extrema",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
