'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export function CTA() {
  return (
    <section className="relative overflow-hidden py-32 px-6">
      {/* Aurora background */}
      <motion.div
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[140px] opacity-[0.025] pointer-events-none bg-[#FFCC99]"
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[160px] opacity-[0.02] pointer-events-none bg-purple-400"
        animate={{ x: [0, -40, 30, 0], y: [0, 25, -40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center"
      >
        <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-white">
          Pronto para escalar sua operação?
        </h2>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-6 mb-12 font-light leading-relaxed">
          Junte-se às empresas que já aceleraram sua transformação digital com a Domus. Agende uma consultoria gratuita e descubra o potencial do seu negócio.
        </p>

        <Link
          href="#contato"
          className="relative overflow-hidden inline-block bg-[#FFCC99] text-[#080028] font-bold px-10 py-5 rounded-full text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(255,204,153,0.3)] transition-all duration-300 group"
        >
          <span className="relative z-10">Agendar Consultoria Gratuita</span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
        </Link>

        {/* Social Proof */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="flex -space-x-3">
            {['CS', 'MC', 'RA', 'FB'].map((initials, i) => (
              <motion.div
                key={i}
                className="w-11 h-11 rounded-full border-2 border-[#080028] bg-[#FFCC99]/10 flex items-center justify-center"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <span className="text-[#FFCC99] text-xs font-semibold">{initials}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-gray-400 font-medium">
            Faça parte do <span className="text-[#FFCC99]">ecossistema Domus</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
