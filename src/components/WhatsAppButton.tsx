import React from 'react';
import { motion } from 'motion/react';
import { WHATSAPP_URL } from '@/src/constants';
import { WhatsAppIcon } from './Icons';

export default function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] bg-brand-green text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all shadow-green-500/40 hover:shadow-green-500/60 group"
    >
      <WhatsAppIcon size={32} className="group-hover:scale-110 transition-transform" />
      <div className="absolute -top-1 -left-1 bg-red-500 text-white text-[10px] w-6 h-6 rounded-full flex items-center justify-center font-bold animate-ping opacity-75" />
      <div className="absolute -top-1 -left-1 bg-red-500 text-white text-[10px] w-6 h-6 rounded-full flex items-center justify-center font-bold border-2 border-white">
        1
      </div>
    </motion.a>
  );
}
