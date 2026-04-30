import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marta Oliveira',
    role: 'Mãe de paciente',
    text: 'A equipe da DMG foi impecável em um momento de desespero. Realizaram o resgate com muito cuidado e meu filho hoje está em tratamento em uma excelente clínica.',
    rating: 5
  },
  {
    name: 'Roberto Santos',
    role: 'Esposo de paciente',
    text: 'O encaminhamento foi rápido e o suporte que deram para nossa família logo no primeiro telefonema nos deu a segurança necessária para agir.',
    rating: 5
  },
  {
    name: 'Ana Paula G.',
    role: 'Familiar',
    text: 'Profissionais altamente qualificados. O atendimento 24h funciona de verdade, fomos atendidos de madrugada e pela manhã a remoção já estava sendo feita.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-blue font-bold tracking-widest text-sm uppercase mb-4 block">Relatos Reais</span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6">Depoimentos de <span className="text-brand-blue">Famílias</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="relative mb-6">
                  <Quote className="text-brand-blue/10 absolute -top-4 -left-4" size={48} />
                  <p className="text-slate-600 italic relative z-10">{item.text}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 border-t border-slate-200 pt-6 mt-6">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center font-bold text-brand-blue">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">{item.name}</h4>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
