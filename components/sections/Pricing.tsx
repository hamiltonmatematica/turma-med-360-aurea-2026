import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const Pricing: React.FC = () => {
  const whatsappNumber = '5538999573075';
  const whatsappMessage = encodeURIComponent('Olá! Eu estava na página do Áurea e gostaria de fazer uma negociação');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

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

              <div className="flex flex-col gap-4">
                <Button href="https://www.asaas.com/c/nxh0pvewff1x6g8j" variant="primary" className="w-full text-lg py-5 shadow-aurea-orange/30 shadow-xl">
                  QUERO À VISTA
                </Button>
                <Button href="https://www.asaas.com/c/xjy06obl90dt47hy" variant="outline" className="w-full text-lg py-5">
                  QUERO PARCELADO
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Módulo 2 - MED 360 ONLINE */}
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

              <div className="flex flex-col gap-4">
                <Button href="https://www.asaas.com/c/mt81gmd61jx16u06" variant="primary" className="w-full text-lg py-5 shadow-aurea-orange/30 shadow-xl">
                  QUERO À VISTA
                </Button>
                <Button href="https://www.asaas.com/c/10si1qlmiqjn9ob4" variant="outline" className="w-full text-lg py-5">
                  QUERO PARCELADO
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Botão de Negociações Especiais */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-aurea-dark font-display text-lg uppercase tracking-wider py-5 px-10 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 border-aurea-dark hover:bg-aurea-dark hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            NEGOCIAÇÕES ESPECIAIS CLIQUE AQUI
          </a>
        </motion.div>
      </div>
    </section>
  );
};