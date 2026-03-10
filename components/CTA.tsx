'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

export function CTA() {
  return (
    <section className="relative overflow-hidden py-32 px-6">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FFCC99] blur-[150px] opacity-10 pointer-events-none rounded-full" />

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
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-12 h-12 rounded-full border-2 border-[#080028] overflow-hidden relative">
                <Image 
                  src={`https://picsum.photos/seed/avatar${i}/100/100`}
                  alt={`Avatar ${i}`}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
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
