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
  // Isso ajuda o Google a entender qual é a URL oficial
  metadataBase: new URL("https://www.higormachado.com.br"),
  
  title: "Higor dos Santos Machado | Analista de TI & Dev Full Stack", 
  description: "Especialista em automação RPA, BI e desenvolvimento Full Stack. Mais de 200h economizadas mensais através de soluções digitais de alto impacto.",
  
  keywords: ["Higor Machado", "Desenvolvedor Full Stack", "Analista de TI", "Automação RPA", "Power BI", "Laravel", "Grupo CargoPolo", "Higor dos Santos Machado", "Ribeirão Preto", "Serrana", "Portfólio de TI", "São Paulo", "Cravinhos", "Desenvolvimento Web", "Eficiência Operacional", "Soluções Digitais", "Tecnologia da Informação", "TI", "Programação", "Desenvolvimento de Software", "Automação de Processos", "Inovação Tecnológica", "Transformação Digital", "Consultoria de TI", "Projetos de TI", "Sistemas de Informação"],
  
  openGraph: {
    title: "Higor Machado | Portfolio 2025",
    description: "Transformando complexidade operacional em eficiência digital.",
    url: "https://www.higormachado.com.br",
    // IMPORTANTE: Este nome deve ser o que você quer que apareça na busca
    siteName: "Higor dos Santos Machado", 
    locale: "pt_BR",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Higor Machado | Analista de TI",
    description: "Desenvolvedor focado em resultados e automação de processos.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Script JSON-LD para o Google identificar o nome do site
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Higor dos Santos Machado",
    "alternateName": ["Higor Machado", "Higor Machado Dev"],
    "url": "https://www.higormachado.com.br",
  };

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Inserindo os dados estruturados diretamente no Head */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0f172a]`}
      >
        {children}
      </body>
    </html>
  );
}