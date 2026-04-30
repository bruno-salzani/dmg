import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5500000000000"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] bg-brand-green text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all shadow-green-500/40 hover:shadow-green-500/60"
    >
      <MessageCircle size={32} />
      <div className="absolute -top-2 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold animate-bounce hidden md:flex border-2 border-white">
        1
      </div>
    </motion.a>
  );
}
