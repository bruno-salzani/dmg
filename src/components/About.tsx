import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, Star, CheckCircle2, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './Icons';
import { WHATSAPP_URL } from '@/src/constants';

const values = [
  {
    icon: <Heart className="text-red-500" />,
    title: 'Atendimento Humanizado',
    desc: 'Tratamos cada paciente e família com a empatia e o respeito que o momento exige.'
  },
  {
    icon: <Users className="text-brand-blue" />,
    title: 'Apoio à Família',
    desc: 'Entendemos a dor da família e oferecemos suporte psicológico e técnico em todas as etapas.'
  },
  {
    icon: <Star className="text-yellow-500" />,
    title: 'Excelência Técnica',
    desc: 'Nossa equipe é altamente treinada para lidar com situações complexas de remoção.'
  }
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000" 
                alt="Atendimento médico humanizado DMG"
                loading="lazy"
                referrerPolicy="no-referrer"
                width="1000"
                height="700"
                className="w-full h-auto object-cover min-h-[400px]"
              />
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-8 -right-8 bg-brand-blue p-8 rounded-3xl shadow-xl text-white z-20 hidden md:block">
              <div className="text-4xl font-bold mb-1">+10 ANOS</div>
              <div className="text-sm opacity-80 font-medium uppercase tracking-wider">Ajudando Famílias</div>
            </div>
            
            {/* Background Shape */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-slate-100 rounded-full -z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-blue font-bold tracking-widest text-sm uppercase mb-4 block">Nossa História & Missão</span>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6 leading-tight">
              Especialistas em dar o primeiro passo para a <span className="text-brand-blue">recuperação</span>.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              A DMG nasceu com o propósito de ser a ponte segura entre a crise e a cura. Especializada em remoções psiquiátricas e de dependência química, nossa empresa atua em todo o território nacional, garantindo que a distância nunca seja um obstáculo para salvar uma vida.
            </p>

            <div className="grid gap-6 mb-10">
              {['Atendimento 24h em todos os estados do Brasil', 'Equipes especializadas e multidisciplinares', 'Total sigilo e proteção dos dados do paciente'].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-brand-blue/10 p-1 rounded-full">
                    <CheckCircle2 className="text-brand-blue" size={20} />
                  </div>
                  <span className="text-slate-700 font-medium">{text}</span>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100 mb-10">
              {values.map((v, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="mb-1">{v.icon}</div>
                  <h4 className="font-bold text-brand-dark text-sm">{v.title}</h4>
                  <p className="text-xs text-slate-500">{v.desc}</p>
                </div>
              ))}
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-brand-green text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-green-100 hover:bg-green-600 transition-all group"
            >
              <WhatsAppIcon size={20} />
              Solicitar Ajuda Agora
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
