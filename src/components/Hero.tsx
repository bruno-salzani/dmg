import React from 'react';
import { motion } from 'motion/react';
import { Shield, ArrowRight, Clock } from 'lucide-react';
import { WHATSAPP_URL } from '@/src/constants';
import { WhatsAppIcon } from './Icons';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-brand-dark">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-dark to-transparent" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-blue/10 border border-brand-blue/20 text-brand-blue px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <Clock size={14} className="animate-pulse" />
              Atendimento 24 horas em todo o Brasil
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Remoção <span className="text-brand-blue">Especializada</span> com Segurança e Sigilo.
            </h1>
            
            <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
              Atendimento rápido, humano e seguro. Somos especialistas no encaminhamento para as melhores clínicas masculinas e femininas do Brasil. Internações voluntárias e involuntárias.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="bg-brand-green hover:bg-green-600 text-white px-10 py-5 rounded-2xl flex items-center justify-center gap-3 text-xl font-black transition-all shadow-[0_20px_50px_rgba(40,167,69,0.3)] group animate-bounce-slow ring-4 ring-green-500/10 hover:ring-green-500/30"
              >
                <WhatsAppIcon size={26} />
                Fale agora no WhatsApp
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
              <a
                href="#servicos"
                className="bg-white/5 hover:bg-white/10 text-white border-2 border-white/10 px-8 py-5 rounded-2xl flex items-center justify-center gap-3 text-lg font-bold transition-all backdrop-blur-sm"
              >
                Nossos Serviços
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-slate-400">
              <div className="flex items-center gap-2">
                <Shield size={18} className="text-brand-blue" />
                <span className="text-sm font-medium italic">100% Sigiloso</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield size={18} className="text-brand-blue" />
                <span className="text-sm font-medium italic">Equipe Treinada</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" 
                alt="Equipe de saúde profissional"
                width="800"
                height="600"
                referrerPolicy="no-referrer"
                className="w-full h-auto grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                    +
                  </div>
                  <div>
                    <h3 className="text-white font-bold leading-tight">Suporte Urgente</h3>
                    <p className="text-white/70 text-sm">Resgate disponível agora</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-blue/30 blur-2xl rounded-full" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-green/20 blur-2xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
