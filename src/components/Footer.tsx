import React from 'react';
import { Shield, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { CONTACT_PHONE, WHATSAPP_URL } from '@/src/constants';
import { WhatsAppIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">
                D
              </div>
              <span className="text-2xl font-bold tracking-tighter">DMG</span>
            </a>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Especialistas em remoção e encaminhamento para clínicas de reabilitação. Atendimento 24h em todo o Brasil.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Siga-nos no Instagram" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand-blue transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Curta nossa página no Facebook" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand-blue transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Conecte-se conosco no LinkedIn" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand-blue transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-lg">Serviços</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#servicos" className="hover:text-white transition-colors">Remoção 24 Horas</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Internação Involuntária</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Clínicas Masculinas</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Clínicas Femininas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-lg">Links Úteis</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Área de Contato</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-lg">Atendimento</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Phone className="text-brand-blue shrink-0" size={20} />
                <a href={`tel:${CONTACT_PHONE.replace(/\D/g, '')}`} className="hover:text-brand-blue transition-colors">
                  <p className="text-xs uppercase text-slate-500 font-bold mb-1 tracking-wider">Emergência 24h</p>
                  <p className="text-xl font-bold">{CONTACT_PHONE}</p>
                </a>
              </li>
              <li className="flex items-start gap-4">
                <WhatsAppIcon className="text-brand-green shrink-0" size={20} />
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-brand-green transition-colors">
                  <p className="text-xs uppercase text-slate-500 font-bold mb-1 tracking-wider">WhatsApp 24h</p>
                  <p className="text-lg font-bold">{CONTACT_PHONE}</p>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Shield size={16} />
            <span>© 2026 DMG Remoções. Todos os direitos reservados.</span>
          </div>
          <div className="flex gap-8 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Sistema Online
            </span>
            <span>Desenvolvido com Rigor Técnico</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
