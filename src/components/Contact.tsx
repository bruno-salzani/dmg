import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageSquare, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CONTACT_PHONE, CONTACT_PHONE_RAW, WHATSAPP_URL } from '@/src/constants';
import { WhatsAppIcon } from './Icons';

const contactSchema = z.object({
  name: z.string().min(2, 'Nome muito curto'),
  phone: z.string().min(10, 'Telefone inválido'),
  message: z.string().min(5, 'Mensagem muito curta'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const text = `Olá! Solicitação de Atendimento pelo Site:
*Nome:* ${data.name}
*Telefone:* ${data.phone}
*Caso:* ${data.message}`;
      
      const whatsappUrl = `https://wa.me/${CONTACT_PHONE_RAW}?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, '_blank');
      reset();
    } catch (error) {
      console.error('Erro ao enviar para WhatsApp:', error);
      alert('Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente ou ligue diretamente.');
    }
  };

  return (
    <section id="contato" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden shadow-slate-200">
          <div className="grid lg:grid-cols-5">
            {/* Info Side */}
            <div className="lg:col-span-2 bg-brand-dark p-12 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-8">Informações de <span className="text-brand-blue">Atendimento</span></h2>
                <p className="text-slate-400 mb-12">
                  Não espere o pior acontecer. Fale com nossa equipe técnica agora mesmo para orientação profissional.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-brand-blue border border-white/10">
                      <Phone size={22} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 uppercase tracking-widest font-bold mb-1">Telefone 24h</p>
                      <p className="text-xl font-bold">{CONTACT_PHONE}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green border border-brand-green/20">
                      <WhatsAppIcon size={22} />
                    </div>
                    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="block hover:translate-x-1 transition-transform">
                      <p className="text-sm text-slate-400 uppercase tracking-widest font-bold mb-1">WhatsApp Emergencial</p>
                      <p className="text-xl font-bold text-brand-green underline decoration-green-500/30 underline-offset-4">{CONTACT_PHONE}</p>
                    </a>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-brand-blue border border-white/10">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 uppercase tracking-widest font-bold mb-1">Cobertura</p>
                      <p className="text-xl font-bold">Todo o Brasil</p>
                    </div>
                  </div>
                </div>

                <div className="mt-16 p-6 bg-brand-blue/10 border border-brand-blue/20 rounded-2xl">
                  <p className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-blue rounded-full animate-ping" />
                    Status do Sistema
                  </p>
                  <p className="text-sm text-white">Unidades prontas de Norte a Sul do país.</p>
                </div>
              </div>

              {/* Background Shapes */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 blur-[100px] rounded-full" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/10 blur-[100px] rounded-full" />
            </div>

            {/* Form Side */}
            <div className="lg:col-span-3 p-12 lg:p-16">
              <h3 className="text-2xl font-bold text-brand-dark mb-8">Envie uma mensagem</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700">Nome Completo</label>
                    <input 
                      {...register('name')}
                      placeholder="Ex: João Silva"
                      className="bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                    />
                    {errors.name && <span className="text-xs text-red-500 font-medium">{errors.name.message}</span>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700">Telefone / WhatsApp</label>
                    <input 
                      {...register('phone')}
                      placeholder="Ex: (11) 99999-9999"
                      className="bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                    />
                    {errors.phone && <span className="text-xs text-red-500 font-medium">{errors.phone.message}</span>}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">Sua Mensagem / Caso</label>
                  <textarea 
                    {...register('message')}
                    rows={4}
                    placeholder="Descreva brevemente a situação..."
                    className="bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all resize-none"
                  />
                  {errors.message && <span className="text-xs text-red-500 font-medium">{errors.message.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-blue hover:bg-blue-700 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-200 disabled:opacity-70 group"
                >
                  {isSubmitting ? 'Enviando...' : (
                    <>
                      Enviar Solicitação
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
                
                <p className="text-center text-xs text-slate-500 italic">
                  * Priorizamos o sigilo absoluto das suas informações de contato.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
