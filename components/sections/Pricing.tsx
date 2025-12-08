import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const Pricing: React.FC = () => {
  const ctaLink = "https://delicategiantpanda-n8n.cloudfy.live/form/71f89cb2-cc61-41b7-a0a8-2459cc14e4ca";

  return (
    <section className="py-24 bg-aurea-orange relative overflow-hidden">
      {/* Background blobs/shapes inspired by PDF */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-aurea-dark/10 rounded-full translate-x-1/3 -translate-y-1/3 mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-aurea-blue/20 rounded-full -translate-x-1/3 translate-y-1/3 mix-blend-multiply blur-xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Módulo 1 - MED 360 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] shadow-[0_40px_100px_-15px_rgba(0,0,0,0.3)] overflow-hidden"
          >
            <div className="bg-aurea-dark text-white text-center py-5 font-display tracking-[0.2em] uppercase text-lg">
              Matrículas Abertas
            </div>

            <div className="p-8 md:p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-display text-aurea-dark mb-4 uppercase leading-none">
                MED 360 PRESENCIAL
              </h2>
              <h3 className="text-xl md:text-2xl font-brand font-bold text-aurea-blue mb-8 uppercase">
                Enem + Unimontes + Ufvjm
              </h3>

              <p className="text-lg text-gray-500 mb-12 mx-auto font-light leading-relaxed">
                Preparação presencial completa, integrada e planejada para quem quer transformar 2026 no ano da aprovação.
              </p>

              <div className="flex flex-col justify-center items-center gap-6 mb-12 bg-gray-50 p-6 rounded-3xl border border-gray-100">
                <div className="text-center">
                  <span className="block text-gray-400 text-sm uppercase font-bold mb-2 tracking-wider">Preço à vista</span>
                  <span className="text-4xl md:text-5xl font-display text-aurea-blue">R$ 8.400</span>
                  <span className="text-xl font-brand font-bold text-aurea-blue">,00</span>
                </div>
                <div className="w-full h-px bg-gray-300"></div>
                <div className="text-center">
                  <span className="block text-gray-400 text-sm uppercase font-bold mb-2 tracking-wider">Preço parcelado</span>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-brand font-bold text-aurea-dark">10x</span>
                    <span className="text-4xl md:text-5xl font-display text-aurea-dark">R$ 950</span>
                    <span className="text-xl font-brand font-bold text-aurea-dark">,00</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 mb-10">
                <Button href="https://www.asaas.com/c/nxh0pvewff1x6g8j" variant="primary" className="w-full text-lg py-5 shadow-aurea-orange/30 shadow-xl">
                  Quero à vista com 30% de desconto
                </Button>
                <Button href="https://www.asaas.com/c/xjy06obl90dt47hy" variant="outline" className="w-full text-lg py-5">
                  Quero parcelado com 30% de desconto
                </Button>
              </div>

              <div className="bg-aurea-blue/5 rounded-2xl p-6 border border-aurea-blue/10">
                <p className="font-display text-aurea-orange text-base uppercase tracking-wide mb-3">
                  Condições Especiais até 31/12
                </p>
                <div className="space-y-2 text-gray-700 text-sm md:text-base">
                  <p>Novos alunos: <strong className="text-aurea-blue">30% de desconto</strong></p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Módulo 2 - MED 360 ONLINE (duplicado) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] shadow-[0_40px_100px_-15px_rgba(0,0,0,0.3)] overflow-hidden"
          >
            <div className="bg-aurea-dark text-white text-center py-5 font-display tracking-[0.2em] uppercase text-lg">
              Matrículas Abertas
            </div>

            <div className="p-8 md:p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-display text-aurea-dark mb-4 uppercase leading-none">
                MED 360 ONLINE
              </h2>
              <h3 className="text-xl md:text-2xl font-brand font-bold text-aurea-blue mb-8 uppercase">
                Enem + Unimontes + Ufvjm
              </h3>

              <p className="text-lg text-gray-500 mb-12 mx-auto font-light leading-relaxed">
                Preparação online completa, integrada e planejada para quem quer transformar 2026 no ano da aprovação.
              </p>

              <div className="flex flex-col justify-center items-center gap-6 mb-12 bg-gray-50 p-6 rounded-3xl border border-gray-100">
                <div className="text-center">
                  <span className="block text-gray-400 text-sm uppercase font-bold mb-2 tracking-wider">Preço à vista</span>
                  <span className="text-4xl md:text-5xl font-display text-aurea-blue">R$ 3.900</span>
                  <span className="text-xl font-brand font-bold text-aurea-blue">,00</span>
                </div>
                <div className="w-full h-px bg-gray-300"></div>
                <div className="text-center">
                  <span className="block text-gray-400 text-sm uppercase font-bold mb-2 tracking-wider">Preço parcelado</span>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-brand font-bold text-aurea-dark">10x</span>
                    <span className="text-4xl md:text-5xl font-display text-aurea-dark">R$ 440</span>
                    <span className="text-xl font-brand font-bold text-aurea-dark">,00</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 mb-10">
                <Button href="https://www.asaas.com/c/mt81gmd61jx16u06" variant="primary" className="w-full text-lg py-5 shadow-aurea-orange/30 shadow-xl">
                  Quero à vista com 30% de desconto
                </Button>
                <Button href="https://www.asaas.com/c/10si1qlmiqjn9ob4" variant="outline" className="w-full text-lg py-5">
                  Quero parcelado com 30% de desconto
                </Button>
              </div>

              <div className="bg-aurea-blue/5 rounded-2xl p-6 border border-aurea-blue/10">
                <p className="font-display text-aurea-orange text-base uppercase tracking-wide mb-3">
                  Condições Especiais até 31/12
                </p>
                <div className="space-y-2 text-gray-700 text-sm md:text-base">
                  <p>Novos alunos: <strong className="text-aurea-blue">30% de desconto</strong></p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};