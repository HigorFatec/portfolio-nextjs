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
  // Define a URL base para todos os metadados
  metadataBase: new URL("https://www.higormachado.com.br"),
  
  title: "Higor dos Santos Machado | Analista de TI & Dev Full Stack", 
  description: "Especialista em automação RPA, BI e desenvolvimento Full Stack. Mais de 200h economizadas mensais através de soluções digitais de alto impacto.",
  
  // Cor da barra do navegador no mobile (combina com seu bg-[#0f172a])
  themeColor: "#0f172a",

  keywords: ["Higor Machado", "Desenvolvedor Full Stack", "Analista de TI", "Automação RPA", "Power BI", "Laravel", "Grupo CargoPolo", "Higor dos Santos Machado", "Ribeirão Preto", "Serrana", "Portfólio de TI", "São Paulo", "Cravinhos", "Desenvolvimento Web", "Eficiência Operacional", "Soluções Digitais", "Tecnologia da Informação", "TI", "Programação", "Desenvolvimento de Software", "Automação de Processos", "Inovação Tecnológica", "Transformação Digital", "Consultoria de TI", "Projetos de TI", "Sistemas de Informação"],
  
  openGraph: {
    title: "Higor dos Santos Machado | Portfolio 2025",
    description: "Transformando complexidade operacional em eficiência digital.",
    url: "https://www.higormachado.com.br",
    // Nome que aparece acima da URL na busca do Google
    siteName: "Higor dos Santos Machado", 
    locale: "pt_BR",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Higor dos Santos Machado | Analista de TI",
    description: "Desenvolvedor focado em resultados e automação de processos.",
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png", // Caso você crie um ícone para iPhone futuramente
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Script JSON-LD para o Google identificar formalmente o nome do site
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
        {/* Dados estruturados para o Nome do Site na busca */}
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