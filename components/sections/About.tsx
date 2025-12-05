import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Abstract Background Text */}
      <div className="absolute -top-20 -left-20 text-[20rem] font-display text-gray-50 opacity-50 select-none leading-none pointer-events-none">
        A
      </div>

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             {/* Large Bold Typography Block instead of Icon (since Icon is now in Hero) */}
             <div className="bg-aurea-dark text-white p-10 md:p-16 rounded-[3rem] relative overflow-hidden group hover:bg-aurea-blue transition-colors duration-500">
                <div className="relative z-10">
                    <span className="block text-aurea-orange font-brand font-bold uppercase tracking-widest text-sm mb-4">
                        O Conceito
                    </span>
                    <h3 className="text-5xl md:text-7xl font-display uppercase leading-none mb-6">
                        Trilpa <br/> Performance
                    </h3>
                    <div className="w-full h-px bg-white/20 mb-6"></div>
                    <p className="font-brand text-lg text-white/80 leading-relaxed">
                        A única metodologia capaz de sincronizar o ritmo do Enem com as especificidades da Unimontes e Ufvjm.
                    </p>
                </div>
                
                {/* Decorative circle */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
             </div>
          </motion.div>

          <motion.div 
            className="flex-1 text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-5xl md:text-7xl font-display text-aurea-dark mb-8 uppercase leading-[0.9] tracking-tight">
              MED 360 <br/>
              <span className="text-aurea-blue">Turma Exclusiva</span>
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                <p>
                    <strong className="text-aurea-dark font-bold">A turma definitiva para Medicina.</strong> Preparação integrada para Enem, Unimontes e Ufvjmdesde fevereiro, com rotina intensa, organização sistemática e acompanhamento total.
                </p>
                <p>
                    É a única turma que trabalha os 3 processos seletivos de forma <span className="text-aurea-orange font-bold underline decoration-2 underline-offset-4">planejada, inteligente e contínua</span>.
                </p>
            </div>
            
            <div className="mt-10">
                <a href="#beneficios" className="group inline-flex items-center gap-2 font-brand font-bold text-aurea-blue uppercase tracking-widest text-sm hover:text-aurea-orange transition-colors">
                    Ver todos os benefícios
                    <span className="block w-8 h-px bg-current transition-all group-hover:w-12"></span>
                </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
