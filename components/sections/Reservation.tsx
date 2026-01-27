import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const Reservation: React.FC = () => {
  return (
    <section className="py-12 bg-white px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-aurea-dark rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Abstract shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-aurea-blue rounded-full blur-[80px] opacity-40 translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-aurea-orange rounded-full blur-[80px] opacity-40 -translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display text-white mb-6 uppercase">
              Garanta sua vaga na MED 360
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
              Reserve sua vaga agora e comece sua jornada rumo à aprovação em Medicina.
            </p>
            <Button
              href="https://delicategiantpanda-n8n.cloudfy.live/form/71f89cb2-cc61-41b7-a0a8-2459cc14e4ca"
              variant="white"
              className="min-w-[280px]"
            >
              Reservar minha vaga
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};