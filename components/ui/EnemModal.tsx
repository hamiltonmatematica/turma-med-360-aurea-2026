import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const EnemModal: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        // Auto-close after 15 seconds
        const timer = setTimeout(() => {
            setIsOpen(false);
        }, 15000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    onClick={handleClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header gradient */}
                        <div className="bg-gradient-to-r from-aurea-orange to-aurea-blue p-1">
                            <div className="bg-aurea-dark py-4 px-6">
                                <h2 className="text-white font-display text-xl md:text-2xl text-center uppercase tracking-wider">
                                    Seletiva por Desempenho
                                </h2>
                            </div>
                        </div>

                        {/* Close button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-white hover:text-aurea-orange transition-colors z-10"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Content */}
                        <div className="p-8 md:p-10 text-center">
                            <div className="mb-6">
                                <span className="inline-block bg-aurea-orange/10 text-aurea-orange font-display text-sm uppercase tracking-wider px-4 py-2 rounded-full">
                                    Notas Enem
                                </span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-display text-aurea-dark mb-6 leading-tight">
                                A sua nota no Enem pode te ajudar a garantir uma bolsa de até{' '}
                                <span className="text-aurea-orange">80%</span> nas nossas turmas do Áurea em 2026!
                            </h3>

                            <p className="text-gray-500 mb-8 font-light">
                                Faça sua simulação agora e descubra quanto você pode economizar.
                            </p>

                            <a
                                href="https://delicategiantpanda-n8n.cloudfy.live/form/3d4c98de-ad6c-49ec-ac52-1a984cd83bfe"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full bg-gradient-to-r from-aurea-orange to-[#ff8a4c] text-white font-display text-lg uppercase tracking-wider py-5 px-8 rounded-2xl shadow-lg shadow-aurea-orange/30 hover:shadow-xl hover:shadow-aurea-orange/40 hover:-translate-y-1 transition-all duration-300"
                            >
                                Faça já sua simulação
                            </a>

                            <p className="text-xs text-gray-400 mt-6">
                                Este popup fechará automaticamente em 15 segundos
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
