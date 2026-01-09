"use client";

import Image from "next/image";
import { useEffect, useState } from "react";


const roles = [
  "Analista de TI",
  "Desenvolvedor Full Stack",
  "Especialista em Automação",
  "Foco em Dados & BI",
];

export default function Home() {

  
  
  /* ===== LOAD PROGRESSIVO ===== */
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const revealStyle = (delay: number) => ({
    transition: "all 0.8s ease-out",
    transitionDelay: `${delay}ms`,
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(24px)",
  });

  const cardStyle = (index: number, baseDelay = 0) => ({
  transition: "all 0.6s ease-out",
  transitionDelay: `${baseDelay + index * 120}ms`,
  opacity: loaded ? 1 : 0,
  transform: loaded ? "translateY(0)" : "translateY(20px)",
});


  /* ===== TEXTO DINÂMICO ===== */
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
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
        }, 2000);
      }
    }, 80);

    return () => clearInterval(typing);
  }, [roleIndex]);

  /* ===== CONTADOR ===== */
  const [years, setYears] = useState(0);
  useEffect(() => {
    setYears(new Date().getFullYear() - 2022);
  }, []);

  return (
    <main className="bg-white text-gray-800 overflow-x-hidden">
      {/* HERO */}
      <section
        style={revealStyle(0)}
        className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-24"
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <Image
          src="/setup.jpg"
          alt="Meu setup de trabalho"
          width={380}
          height={380}
          className="shadow-xl object-cover rounded-full"
          style={{ borderRadius: "50%" }}
        />

          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Higor Machado
            </h1>

            <p className="text-xl md:text-2xl h-8 font-medium mb-4">
              {text}
              <span className="animate-pulse">|</span>
            </p>

            <p className="text-blue-100 max-w-xl">
              Transformo processos complexos em soluções tecnológicas
              escaláveis, seguras e orientadas a dados.
            </p>
          </div>
        </div>
      </section>

      {/* IMPACTO */}
      <section style={revealStyle(150)} className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-10 text-blue-600">
          Impacto Profissional
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Automação de Processos",
              desc: "Redução de tarefas manuais e erros operacionais.",
            },
            {
              title: "Soluções Full Stack",
              desc: "Sistemas web e integrações orientadas ao negócio.",
            },
            {
              title: "Dados & Decisão",
              desc: "Dashboards estratégicos e análise de dados.",
            },
          ].map((item, index) => (
           <div
              key={item.title}
              style={cardStyle(index, 300)}
              className="
                border border-gray-200 rounded-2xl p-8
                hover:shadow-xl hover:-translate-y-1
                transition
              "
            >

              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section style={revealStyle(300)} className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-6 text-blue-600">
          Sobre mim
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl leading-relaxed">
          Graduado em Análise e Desenvolvimento de Sistemas pela FATEC e
          Pós-Graduando em Ciência de Dados. Atuo como Analista de TI com foco em
          banco de dados, automação e soluções orientadas a resultados.
        </p>
      </section>

      {/* MÉTRICAS */}
      <section
        style={revealStyle(450)}
        className="bg-gray-50 py-20"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-blue-600">{years}+</p>
            <p className="text-gray-600">Anos de Experiência</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-600">20+</p>
            <p className="text-gray-600">Automações Entregues</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-600">-30%</p>
            <p className="text-gray-600">Tempo Operacional</p>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section
        style={revealStyle(600)}
        className="bg-blue-600 py-20 text-white"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Pronto para gerar impacto
          </h2>

          <p className="text-blue-100 max-w-2xl mx-auto mb-10">
            Aberto a oportunidades, projetos e conexões profissionais.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a
              href="mailto:higor.05@hotmail.com"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-medium shadow-md hover:bg-blue-50 transition"
            >
              Entrar em contato
            </a>

            <a
              href="https://github.com/HigorFatec"
              target="_blank"
              className="border border-white px-8 py-4 rounded-xl font-medium hover:bg-white hover:text-blue-600 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/higor-dos-santos-machado-9a269a139/"
              target="_blank"
              className="border border-white px-8 py-4 rounded-xl font-medium hover:bg-white hover:text-blue-600 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-100 py-10 text-center text-gray-600">
        © {new Date().getFullYear()} Higor Machado
      </footer>
    </main>
  );
}
