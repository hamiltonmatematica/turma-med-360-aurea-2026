import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface ContactProps {
  initial: string;
  name: string;
  role: string;
  actionText: string;
  link: string;
}

const contacts: ContactProps[] = [
  {
    initial: "A",
    name: "Alysson Freitas",
    role: "Sócio Diretor",
    actionText: "Falar com Alysson",
    link: "https://wa.me/5538999573075?text=Olá%20Alysson"
  },
  {
    initial: "H",
    name: "Hamilton Vinícius",
    role: "Sócio Diretor",
    actionText: "Falar com Hamilton",
    link: "https://wa.me/5538991538392?text=Olá%20Hamilton"
  },
  {
    initial: "E",
    name: "Emanuelle",
    role: "Coordenação Pedagógica",
    actionText: "Falar com Emanuelle",
    link: "https://wa.me/5538998317477?text=Olá%20Emanuelle"
  },
  {
    initial: "A",
    name: "Atendimento Áurea",
    role: "Secretaria",
    actionText: "Atendimento geral",
    link: "https://wa.me/553832133244?text=Olá%20quero%20tirar%20uma%20dúvida"
  }
];

export const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-aurea-dark uppercase mb-4">
            Fale Conosco
          </h2>
          <div className="w-16 h-1 bg-aurea-blue mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:translate-y-[-5px] transition-transform duration-300"
            >
              <div className="w-20 h-20 bg-aurea-blue rounded-full flex items-center justify-center mb-6 text-white text-3xl font-display">
                {contact.initial}
              </div>
              <h3 className="text-xl font-brand font-bold text-aurea-dark mb-1">{contact.name}</h3>
              <p className="text-sm text-gray-500 mb-6 uppercase tracking-wide font-medium">{contact.role}</p>
              
              <a 
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-green-600 transition-colors w-full justify-center"
              >
                <MessageCircle size={18} />
                {contact.actionText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};