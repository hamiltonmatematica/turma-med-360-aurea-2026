import React from 'react';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Benefits } from './components/sections/Benefits';
import { Methodology } from './components/sections/Methodology';
import { Pricing } from './components/sections/Pricing';
import { Reservation } from './components/sections/Reservation';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-aurea-dark selection:bg-aurea-orange selection:text-white">
      <main>
        <Hero />
        <About />
        <Benefits />
        <Methodology />
        <Pricing />
        <Reservation />
        <Contact />
      </main>

      <footer className="bg-aurea-dark text-white py-16">
        <div className="container mx-auto max-w-6xl px-6 flex flex-col items-center justify-center text-center">
            {/* Simple logo text representation based on PDF style */}
            <div className="mb-6">
                <span className="font-brand font-bold text-4xl tracking-tight">áurea</span>
            </div>
            
            <p className="text-2xl font-display uppercase tracking-wider mb-2">
                2026
            </p>
            <p className="text-gray-400 font-brand font-light">
                Tudo novo de um jeito único
            </p>
            
            <div className="w-full h-px bg-white/10 my-12"></div>
            
            <p className="text-xs text-gray-600">
                &copy; 2026 Curso Áurea. Todos os direitos reservados.
            </p>
        </div>
      </footer>
    </div>
  );
}

export default App;