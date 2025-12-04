import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col bg-aurea-blue overflow-hidden">
      {/* Header / Brand Presence */}
      <header className="absolute top-0 left-0 w-full p-8 z-50 flex justify-between items-center">
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2"
        >
             {/* Brand Logo Text */}
             <span className="font-brand font-bold text-5xl md:text-6xl text-white tracking-tight lowercase">
                áurea
             </span>
        </motion.div>
        
        {/* Optional: Quick Access Button */}
        <motion.div
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="hidden md:block"
        >
            <a href="#reservas" className="text-white font-brand font-bold uppercase text-sm tracking-widest hover:text-aurea-orange transition-colors">
                Reserva de Vagas
            </a>
        </motion.div>
      </header>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-aurea-orange rounded-full blur-[150px] opacity-30 translate-x-1/3 -translate-y-1/3 mix-blend-screen animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-white rounded-full blur-[150px] opacity-10 -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto max-w-7xl flex-1 flex flex-col justify-center px-6 relative z-10 pt-32 pb-20">
        
        {/* Centered Content Layout */}
        <div className="flex flex-col items-center justify-center text-center">
            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center max-w-5xl mx-auto"
            >
                <div className="inline-block mb-8">
                    <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full font-brand font-bold uppercase tracking-widest text-sm">
                        Turma Exclusiva 2026
                    </span>
                </div>

                <h1 className="text-8xl md:text-[10rem] lg:text-[13rem] leading-[0.8] font-display uppercase text-white mb-8 tracking-tighter">
                    MED <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">360</span>
                </h1>

                <h2 className="text-2xl md:text-3xl font-brand font-medium text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                    A turma exclusiva para quem quer <span className="font-bold text-aurea-orange bg-white/10 px-2 rounded-lg">Medicina</span>. 
                    Preparação simultânea para Enem e Unimontes.
                </h2>

                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                    <Button 
                        href="https://delicategiantpanda-n8n.cloudfy.live/form/71f89cb2-cc61-41b7-a0a8-2459cc14e4ca" 
                        variant="white"
                        className="text-lg px-12 py-6 shadow-2xl hover:shadow-white/20 text-xl"
                    >
                        Quero entrar na MED 360
                    </Button>
                </div>
            </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
      >
        <span className="uppercase text-[10px] tracking-[0.3em]">Role para ver</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </section>
  );
};