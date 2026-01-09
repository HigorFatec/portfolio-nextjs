"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { 
  BarChart3, 
  Code2, 
  Cpu, 
  Database, 
  ExternalLink, 
  LayoutDashboard, 
  Zap,
  CheckCircle2,
  Smartphone
} from "lucide-react";

const roles = [
  "Analista de TI @ Grupo CargoPolo",
  "Especialista em Automação RPA",
  "Desenvolvedor Full Stack",
  "Estrategista de Dados & BI",
];

const projects = [
  {
    title: "App: Tempos Operacionais",
    category: "Mobile APK & Web / Integração ERP",
    description: "Solução completa para registro automático de jornadas, tempos e pausas. Integrado diretamente ao Rodopar para eliminar processos manuais e centralizar dados.",
    impact: ["-80% no tempo de registro", "Monitoramento em tempo real", "Dados 100% centralizados"],
    image: "/app-tempos.png", // Print do Slide 3
    color: "from-blue-600 to-indigo-500",
    icon: <Smartphone size={20} />
  },
  {
    title: "Central de Formulários Robustos",
    category: "Full Stack / Laravel",
    description: "Digitalização de processos de Sinistros, Fiscal (NF) e Financeiro. Inclui fluxos de aprovação por gestores e notificações automáticas.",
    impact: ["-70% no tempo de execução", "Prevenção de erros operacionais"],
    image: "/formulario.png", // Print do Slide 4
    color: "from-cyan-500 to-blue-500",
    icon: <LayoutDashboard size={20} />
  },
  {
    title: "Automação RPA: Contas a Receber",
    category: "RPA / Python / API Rodopar",
    description: "Desenvolvimento de robôs para conciliação e faturamento. O que levava 1 hora para ser concluído manualmente agora é feito em apenas 1 minuto.",
    impact: ["Ganho de 98% de Eficiência", "Processamento 60x mais rápido"],
    image: "/rpa-process.png", // Print do Slide 5
    color: "from-orange-500 to-red-500",
    icon: <Cpu size={20} />
  },
  {
    title: "Business Intelligence Corporativo",
    category: "Data Science / Power BI",
    description: "Ecossistema de dashboards para frotas, manutenção preventiva e telemetria. Transformação de dados brutos em decisões gerenciais.",
    impact: ["Disponibilidade 24/7", "Eliminação de relatórios manuais"],
    image: "/bi-dashboard_3.png", // Print do Slide 6
    color: "from-purple-600 to-pink-500",
    icon: <BarChart3 size={20} />
  }
];

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    setLoaded(true);
    let char = 0;
    const current = roles[roleIndex];
    const typing = setInterval(() => {
      setText(current.slice(0, char + 1));
      char++;
      if (char === current.length) {
        clearInterval(typing);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setText("");
        }, 2500);
      }
    }, 50);
    return () => clearInterval(typing);
  }, [roleIndex]);

  const reveal = (delay: number) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(30px)",
    transition: `all 0.8s cubic-bezier(0.2, 1, 0.3, 1) ${delay}ms`,
  });

  return (
    <main className="bg-[#0f172a] text-slate-200 min-h-screen font-sans selection:bg-blue-500/30">
      
      {/* HERO SECTION COM FOTO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          
          {/* FOTO DE PERFIL COM GLOW */}
          <div style={reveal(0)} className="relative mb-10 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full border-4 border-slate-800 overflow-hidden bg-slate-900 shadow-2xl">
              <Image
                src="/higor.JPG" // SALVE SUA FOTO COMO perfil.png NA PASTA PUBLIC
                alt="Higor Machado"
                fill
                className="object-cover object-top scale-155"
                priority
              />
            </div>
            <div className="absolute bottom-4 right-4 bg-emerald-500 w-6 h-6 rounded-full border-4 border-[#0f172a] shadow-lg animate-pulse"></div>
          </div>

          <div style={reveal(100)} className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-blue-400 text-sm font-medium mb-8">
            <Zap size={16} /> Higor Machado • Portfólio de Resultados 2025
          </div>

          <h1 style={reveal(200)} className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-white">
            Higor Machado
          </h1>

          <div style={reveal(300)} className="text-2xl md:text-4xl font-light text-slate-400 mb-10 h-12">
            {text}<span className="animate-pulse text-blue-500">_</span>
          </div>

          <p style={reveal(400)} className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed mb-12">
            Desenvolvedor e Analista focado em converter complexidade em lucro. 
            Digitalizando processos críticos e economizando mais de <span className="text-white font-bold">200 horas mensais</span>.
          </p>
        </div>
      </section>

      {/* METRICAS DE IMPACTO */}
      <section style={reveal(500)} className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-800/40 border border-slate-700 p-8 rounded-3xl backdrop-blur-sm text-center">
            <p className="text-5xl font-black text-white mb-2">+200h</p>
            <p className="text-slate-400 font-medium uppercase tracking-wider text-sm">Economia Mensal</p>
          </div>
          <div className="bg-blue-600 p-8 rounded-3xl shadow-xl shadow-blue-600/20 text-center scale-105 z-10">
            <p className="text-5xl font-black text-white mb-2">98%</p>
            <p className="text-blue-100 font-medium uppercase tracking-wider text-sm">Eficiência em Automação</p>
          </div>
          <div className="bg-slate-800/40 border border-slate-700 p-8 rounded-3xl backdrop-blur-sm text-center">
            <p className="text-5xl font-black text-white mb-2">R$ 3k</p>
            <p className="text-slate-400 font-medium uppercase tracking-wider text-sm">Economia Direta/Mês</p>
          </div>
        </div>
      </section>

      {/* PROJETOS SHOWCASE */}
      <section id="projetos" className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold text-white mb-20 text-center tracking-tight">Projetos de Alto Impacto</h2>
        
        <div className="grid grid-cols-1 gap-32">
          {projects.map((project, index) => (
            <div 
              key={index} 
              style={reveal(600 + index * 100)}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}
            >
              {/* IMAGEM DO PROJETO */}
              <div className="w-full md:w-3/5 group cursor-pointer">
                <div className={`relative p-1 rounded-[2.5rem] bg-gradient-to-br ${project.color} shadow-2xl`}>
                  <div className="bg-slate-900 rounded-[2.3rem] overflow-hidden aspect-[16/9] relative border border-white/10">
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors"></div>
                  </div>
                </div>
              </div>

              {/* DESCRIÇÃO DO PROJETO */}
              <div className="w-full md:w-2/5">
                <div className="flex items-center gap-3 text-blue-400 mb-6 font-mono text-sm tracking-widest uppercase">
                  {project.icon}
                  {project.category}
                </div>
                <h3 className="text-4xl font-bold text-white mb-6 tracking-tight leading-tight">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-xl leading-relaxed mb-8 font-light">
                  {project.description}
                </p>
                <div className="space-y-4">
                  {project.impact.map((imp, i) => (
                    <div key={i} className="flex items-center gap-4 text-slate-100 bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
                      <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                      <span className="font-semibold text-base">{imp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-40 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 tracking-tighter">
            VAMOS TRANSFORMAR SEUS <span className="text-blue-500 italic text-shadow-glow">PROCESSOS?</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:higor.05@hotmail.com" className="bg-blue-600 hover:bg-blue-500 text-white px-12 py-5 rounded-full font-bold text-lg shadow-xl shadow-blue-600/25 transition-all hover:-translate-y-1">
              Falar com Higor
            </a>
            <a href="https://www.linkedin.com/in/higor-dos-santos-machado-9a269a139/" target="_blank" className="bg-slate-800 hover:bg-slate-700 text-white px-12 py-5 rounded-full font-bold text-lg transition-all flex items-center gap-2 border border-slate-700">
              LinkedIn <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-600 border-t border-slate-800/50">
        <p>© {new Date().getFullYear()} Higor Machado • Desenvolvido com foco em Resultados.</p>
      </footer>
    </main>
  );
}