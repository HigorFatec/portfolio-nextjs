import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Título que aparece na aba do navegador
  title: "Higor dos Santos Machado | Analista de TI & Dev Full Stack", // Título completo
  
  // Descrição que o Google mostra nos resultados de busca
  description: "Especialista em automação RPA, BI e desenvolvimento Full Stack. Mais de 200h economizadas mensais através de soluções digitais de alto impacto.",
  
  // Palavras-chave para ajudar no SEO (opcional, mas bom ter em mente)
  keywords: ["Higor Machado", "Desenvolvedor Full Stack", "Analista de TI", "Automação RPA", "Power BI", "Laravel", "Grupo CargoPolo", "Higor dos Santos Machado"],
  
  // Configuração para redes sociais (Open Graph)
  openGraph: {
    title: "Higor Machado | Portfolio 2025",
    description: "Transformando complexidade operacional em eficiência digital.",
    url: "https://www.higormachado.com.br",
    siteName: "Higor Machado Portfolio",
    locale: "pt_BR",
    type: "website",
  },
  
  // Para o Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "Higor Machado | Analista de TI",
    description: "Desenvolvedor focado em resultados e automação de processos.",
  },

  // Ícones (Certifique-se de ter um favicon.ico na pasta public)
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Alterado para pt-BR para que os navegadores não ofereçam tradução desnecessária
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0f172a]`}
      >
        {children}
      </body>
    </html>
  );
}