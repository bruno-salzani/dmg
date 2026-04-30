import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Globe } from 'lucide-react';

export default function Coverage() {
  return (
    <section className="py-24 bg-brand-dark text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-blue/20 text-brand-blue px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-brand-blue/30">
              <Globe size={14} />
              Atuação Nacional
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Presente em <span className="text-brand-blue">todos os estados</span> brasileiros.
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Nossa logística foi desenhada para atender capitais e cidades do interior com a mesma agilidade. Possuímos bases estratégicas em diversos pontos do país para garantir que o resgate ocorra no menor tempo possível.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {[
                { region: 'Sudeste', icon: <MapPin className="text-brand-blue" size={18} /> },
                { region: 'Sul', icon: <MapPin className="text-brand-blue" size={18} /> },
                { region: 'Nordeste', icon: <MapPin className="text-brand-blue" size={18} /> },
                { region: 'Norte', icon: <MapPin className="text-brand-blue" size={18} /> },
                { region: 'Centro-Oeste', icon: <MapPin className="text-brand-blue" size={18} /> },
                { region: 'Remoto', icon: <MapPin className="text-brand-blue" size={18} /> },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-3">
                  {item.icon}
                  <span className="font-semibold text-sm">{item.region}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            {/* Stylized Visual of Brazil Map Area */}
            <div className="relative w-full aspect-square max-w-lg bg-brand-blue/5 rounded-full flex items-center justify-center">
              <div className="absolute inset-0 border-[40px] border-white/5 rounded-full animate-pulse" />
              <div className="relative z-10 w-full p-8">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/4/43/Brazil_map_clean.svg" 
                  alt="Mapa do Brasil"
                  className="w-full h-auto brightness-0 invert opacity-40 hover:opacity-100 transition-opacity duration-700 cursor-help filter drop-shadow-[0_0_20px_rgba(10,88,202,0.5)]"
                />
              </div>
              
              {/* Animated Location Pins */}
              <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-brand-blue rounded-full shadow-[0_0_10px_#0A58CA] animate-bounce" />
              <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-brand-blue rounded-full shadow-[0_0_10px_#0A58CA] animate-ping" />
              <div className="absolute top-1/2 right-1/2 w-4 h-4 bg-brand-green rounded-full shadow-[0_0_10px_#28a745] animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
