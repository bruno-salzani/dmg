import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

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
            isScrolled ? "text-brand-dark" : "text-white md:text-brand-dark lg:text-brand-dark xl:text-brand-dark"
            /* Actually, if not scrolled, it might be over a dark hero, so let's check hero color later */
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
                isScrolled ? "text-slate-600" : "text-slate-200 lg:text-slate-700"
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="flex flex-col items-end mr-2">
            <span className="text-[10px] uppercase tracking-widest text-brand-blue font-bold">Atendimento 24h</span>
            <a href="tel:0800000000" className="text-sm font-bold text-brand-dark flex items-center gap-1">
              <Phone size={14} className="text-brand-blue" />
              0800 000 0000
            </a>
          </div>
          <a
            href="https://wa.me/5500000000000"
            className="bg-brand-green hover:bg-green-600 text-white px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-semibold transition-all shadow-lg hover:shadow-green-200"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-slate-700" 
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
                <a href="tel:0800000000" className="flex items-center gap-3 text-brand-dark font-bold">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-brand-blue">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase text-slate-500 font-normal">Emergência 24h</p>
                    <p>0800 000 0000</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/5500000000000"
                  className="bg-brand-green text-white p-4 rounded-xl flex items-center justify-center gap-2 font-bold"
                >
                  <MessageCircle size={20} />
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
