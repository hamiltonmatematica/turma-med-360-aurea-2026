import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const benefits = [
  "Acesso a plataforma Áurea Prime",
  "Turma presencial ou online",
  "Planejamento total Enem + Unimontes + Ufvjm",
  "Bolsa de 100% nos cursos de redação e matemática",
  "Organização semanal de demandas",
  "Simulados completos (Enem, Unimontes e Ufvjm)",
  "30% de desconto até 31/12 (alunos novos)",
  "I.A. Trio Perfeito",
  "Mentorias exclusivas",
  "Sem taxa de material",
  "Alta performance",
  "Início: 02 de Fevereiro"
];

export const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-aurea-blue text-white relative overflow-hidden" id="beneficios">
      {/* Bold Geometric Backgrounds */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-aurea-dark/20 skew-x-12"></div>
      
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left Title Column */}
            <motion.div 
                className="lg:w-1/3 lg:sticky lg:top-24"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <div className="bg-aurea-orange text-white text-xs font-bold uppercase tracking-widest py-2 px-4 rounded-full inline-block mb-4">
                    Vantagens
                </div>
                <h2 className="text-6xl md:text-8xl font-display uppercase leading-[0.9] mb-6">
                    Tudo <br/> Incluso
                </h2>
                <p className="text-lg font-brand opacity-80 leading-relaxed">
                    Uma estrutura completa pensada em cada detalhe para sua aprovação. Sem custos extras, sem surpresas.
                </p>
            </motion.div>

            {/* Right Checklist Column */}
            <div className="lg:w-2/3 w-full">
                <div className="grid gap-4">
                    {benefits.map((benefit, index) => (
                        <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="group flex items-start gap-5 bg-white/5 hover:bg-white/10 border border-white/10 p-5 rounded-2xl transition-all duration-300"
                        >
                        <div className="bg-white text-aurea-blue p-1 rounded-full shrink-0 mt-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Check size={18} strokeWidth={4} />
                        </div>
                        <p className="font-brand font-bold text-lg md:text-xl leading-tight pt-0.5 group-hover:text-white transition-colors text-white/90">
                            {benefit}
                        </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
