import React from 'react';
import { motion } from 'motion/react';
import { PhoneCall, ClipboardCheck, Ambulance, Hospital } from 'lucide-react';

const steps = [
  {
    icon: <PhoneCall />,
    title: 'Contato Imediato',
    desc: 'Você entra em contato conosco via WhatsApp ou telefone 24h para relatar a situação.'
  },
  {
    icon: <ClipboardCheck />,
    title: 'Avaliação do Caso',
    desc: 'Nossa equipe técnica analisa a necessidade do paciente e escolhe a melhor estratégia.'
  },
  {
    icon: <Ambulance />,
    title: 'Remoção Segura',
    desc: 'Enviamos uma unidade equipada com profissionais treinados para realizar o resgate com sigilo.'
  },
  {
    icon: <Hospital />,
    title: 'Encaminhamento',
    desc: 'O paciente é encaminhado para a clínica masculina ou feminina mais adequada ao seu perfil.'
  }
];

export default function Process() {
  return (
    <section id="como-funciona" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-blue font-bold tracking-widest text-sm uppercase mb-4 block">Fluxo de Atendimento</span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6">Como Funciona o <span className="text-brand-blue">Resgate</span></h2>
          <p className="text-lg text-slate-600">
            Processo ágil e profissional, planejado para garantir a segurança de todos os envolvidos em momentos críticos.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center text-brand-blue shadow-xl mb-8 relative">
                  <div className="w-16 h-16 rounded-full bg-brand-blue/5 flex items-center justify-center animate-pulse absolute inset-0 m-auto" />
                  <div className="relative z-10 scale-125">{step.icon}</div>
                  
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 bg-brand-blue text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-4">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
