import React from 'react';
import { motion } from 'framer-motion';
import { Clock, BookOpen, FileText, Monitor, Activity, RefreshCw, Users } from 'lucide-react';

const blocks = [
  {
    icon: <Clock className="w-8 h-8 text-aurea-orange" />,
    title: "Carga horária",
    content: ["32 aulas semanais combinando Enem (manhã ou tarde), Unimontes (Noturno às segundas, quartas e sextas) e Ufvjm (Correção de questões)"]
  },
  {
    icon: <Activity className="w-8 h-8 text-aurea-orange" />,
    title: "Duração",
    content: ["Preparação extensiva até novembro"]
  },
  {
    icon: <BookOpen className="w-8 h-8 text-aurea-orange" />,
    title: "Materiais",
    content: [
      "Coleção ENEM 2026 com 5 volumes",
      "Coleção Unimontes 2026 com 3 volumes",
      "Tudo gratuito e sem taxa de material"
    ]
  },
  {
    icon: <FileText className="w-8 h-8 text-aurea-orange" />,
    title: "Simulados",
    content: [
      "Simulados completos e compactos dos três processos",
      "Calendário exclusivo para MED 360",
      "Feedback e relatórios reais de desempenho"
    ]
  },
  {
    icon: <Monitor className="w-8 h-8 text-aurea-orange" />,
    title: "Sistemas e Plataformas",
    content: [
      "Sistema Geekie One para Enem com relatórios avançados",
      "Plataforma Áurea Prime para teoria, prática e revisões",
      "Youtube Áurea integrado à Prime",
      "WhatsApp Iara para planejamento e organização automática"
    ]
  },
  {
    icon: <Activity className="w-8 h-8 text-aurea-orange" />,
    title: "Diagnósticos",
    content: [
      "Diagnóstico Áurea ENEM em janeiro",
      "Diagnóstico Áurea Unimontes em fevereiro"
    ]
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-aurea-orange" />,
    title: "Revisões",
    content: [
      "Revisa Ufvjm gratuito",
      "Revisa Enem gratuito",
      "Revisa Unimontes gratuito"
    ]
  },
  {
    icon: <Users className="w-8 h-8 text-aurea-orange" />,
    title: "Turmas de segundo semestre",
    content: [
      "Inclusas sem custos adicionais, escolha do aluno"
    ]
  }
];

export const Methodology: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-display text-aurea-dark uppercase mb-4">
            Como funciona a preparação?
          </h2>
          <div className="w-24 h-2 bg-aurea-orange mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 ${
                  index === 4 ? "md:col-span-2" : ""
              }`}
            >
              <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {block.icon}
              </div>
              <h3 className="text-xl font-brand font-bold text-aurea-dark mb-4">{block.title}</h3>
              <ul className="space-y-3">
                {block.content.map((item, idx) => (
                  <li key={idx} className="text-gray-600 leading-relaxed text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};