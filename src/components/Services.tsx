import React from 'react';
import { motion } from 'motion/react';
import { Truck, UserCheck, UserX, UserPlus, Users2, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_URL } from '@/src/constants';

const services = [
  {
    icon: <Truck size={32} />,
    title: 'Remoção 24 Horas',
    desc: 'Frota equipada e equipes prontas para atuar a qualquer hora do dia ou da noite em todo o Brasil.',
    color: 'bg-blue-500'
  },
  {
    icon: <UserPlus size={32} />,
    title: 'Internação Voluntária',
    desc: 'Encaminhamento humanizado para pacientes que reconhecem a necessidade de ajuda especializada.',
    color: 'bg-green-500'
  },
  {
    icon: <UserX size={32} />,
    title: 'Internação Involuntária',
    desc: 'Procedimentos legais e seguros para casos críticos onde o paciente não possui condições de decidir.',
    color: 'bg-red-500'
  },
  {
    icon: <Users2 size={32} />,
    title: 'Clínicas Masculinas',
    desc: 'Parcerias com as melhores unidades especializadas no tratamento e recuperação do público masculino.',
    color: 'bg-brand-blue'
  },
  {
    icon: <UserCheck size={32} />,
    title: 'Clínicas Femininas',
    desc: 'Unidades com suporte específico e especializado para as necessidades e realidades do público feminino.',
    color: 'bg-pink-500'
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-blue font-bold tracking-widest text-sm uppercase mb-4 block">Nossa Especialidade</span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6">Soluções Completas em <span className="text-brand-blue">Tratamento</span></h2>
          <p className="text-lg text-slate-600">
            Oferecemos uma rede completa de suporte, desde o primeiro contato até o encaminhamento seguro para a unidade de tratamento mais adequada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden"
            >
              <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4 group-hover:text-brand-blue transition-colors">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.desc}
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-brand-blue font-black text-sm uppercase tracking-wider group/link">
                Falar no WhatsApp <ArrowUpRight size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </a>
              
              {/* Background Glow */}
              <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-brand-blue/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
          
          {/* Support Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-blue p-8 rounded-3xl text-white flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Precisa de orientação imediata?</h3>
              <p className="opacity-80 mb-8 leading-relaxed">
                Nossos consultores estão disponíveis agora para avaliar o caso e indicar as melhores opções de clínicas em sua região.
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="bg-white text-brand-blue px-6 py-4 rounded-xl flex items-center justify-center gap-3 font-bold hover:bg-slate-100 transition-colors"
            >
              Falar com Especialista
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
