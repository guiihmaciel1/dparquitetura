import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Debora Pieri Arquitetura | Arquitetura que Conecta Forma, Função e Identidade",
    template: "%s | Debora Pieri Arquitetura",
  },
  description:
    "Escritório de arquitetura em Mirassol e São José do Rio Preto. Projetos residenciais, comerciais, design de interiores e regularização de imóveis. Arquitetura contemporânea urbana com atendimento humanizado.",
  keywords: [
    "arquitetura Mirassol",
    "arquiteta São José do Rio Preto",
    "projetos arquitetônicos",
    "design de interiores",
    "Debora Pieri",
    "regularização de imóveis",
    "projeto de iluminação",
    "arquitetura contemporânea",
    "CAU A135139-7",
  ],
  authors: [{ name: "Debora Pieri" }],
  creator: "Debora Pieri Arquitetura",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Debora Pieri Arquitetura",
    title: "Debora Pieri Arquitetura | Arquitetura que Conecta Forma, Função e Identidade",
    description:
      "Escritório de arquitetura em Mirassol e região. Projetos residenciais, comerciais e design de interiores com atendimento humanizado.",
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
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${cormorant.variable} antialiased bg-background text-foreground`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
