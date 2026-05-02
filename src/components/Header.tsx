import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { WhatsAppIcon } from './Icons';

import { CONTACT_PHONE, WHATSAPP_URL } from '@/src/constants';

const navItems = [
  { name: 'Início', href: '#' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Como Funciona', href: '#como-funciona' },
  { name: 'Contato', href: '#contato' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm border-slate-200' 
          : 'bg-transparent py-5 border-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">
            D
          </div>
          <span className={cn(
            "text-2xl font-bold tracking-tighter transition-colors",
            isScrolled ? "text-brand-dark" : "text-white"
          )}>
            DMG
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-blue",
                isScrolled ? "text-slate-600" : "text-white/90 hover:text-white"
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="flex flex-col items-end mr-2">
            <span className={cn(
              "text-[10px] uppercase tracking-widest font-black transition-colors",
              isScrolled ? "text-brand-blue" : "text-brand-blue/80"
            )}>Plantão 24h</span>
            <a 
              href={`tel:${CONTACT_PHONE.replace(/\D/g, '')}`} 
              className={cn(
                "text-xl font-black flex items-center gap-1 transition-colors group",
                isScrolled ? "text-brand-dark hover:text-brand-blue" : "text-white hover:text-white/80"
              )}
            >
              <Phone size={18} className={cn(
                "transition-transform group-hover:scale-110",
                isScrolled ? "fill-brand-blue/20 text-brand-blue" : "fill-white/10 text-white"
              )} />
              {CONTACT_PHONE}
            </a>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="bg-brand-green hover:bg-green-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 text-sm font-black transition-all shadow-lg hover:shadow-green-200 uppercase tracking-tight"
          >
            <WhatsAppIcon size={18} />
            Atendimento WhatsApp
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={cn(
            "lg:hidden p-2 transition-colors",
            isScrolled || mobileMenuOpen ? "text-slate-700" : "text-white"
          )} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-700 hover:text-brand-blue"
                >
                  {item.name}
                </a>
              ))}
              <hr className="border-slate-100" />
              <div className="flex flex-col gap-4">
                <a href={`tel:${CONTACT_PHONE.replace(/\D/g, '')}`} className="flex items-center gap-3 text-brand-dark font-bold bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-blue shadow-sm">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase text-slate-500 font-normal">Emergência 24h</p>
                    <p className="text-lg">{CONTACT_PHONE}</p>
                  </div>
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-brand-green text-white p-5 rounded-xl flex items-center justify-center gap-2 font-black shadow-xl shadow-green-100"
                >
                  <WhatsAppIcon size={20} />
                  Falar no WhatsApp Agora
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
