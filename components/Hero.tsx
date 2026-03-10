'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Code2, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-6">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFCC99] rounded-full blur-[120px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Side: Copy */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start gap-8"
        >
          <div className="glass-effect px-4 py-2 rounded-full flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#FFCC99]" />
            <span className="text-sm font-medium text-gray-300">Agência Especializada Low-Code e IA</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1]">
            Inovação Digital em <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFCC99] to-white">
              Alta Velocidade
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-xl font-light leading-relaxed">
            Aceleramos a transformação do seu negócio com soluções sob medida, design focado em conversão e tecnologia de ponta.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="#contato"
              className="relative overflow-hidden w-full sm:w-auto bg-[#FFCC99] text-[#080028] px-8 py-4 rounded-full text-base font-semibold hover:scale-105 hover:shadow-[0_0_30px_rgba(255,204,153,0.3)] transition-all duration-300 text-center flex items-center justify-center gap-2 group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Fale com um Especialista
                <ArrowRight className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
            </Link>
            <Link
              href="#casos-de-sucesso"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-white border border-[#FFCC99]/30 hover:bg-[#FFCC99]/10 transition-all duration-300 text-center"
            >
              Ver Casos de Sucesso
            </Link>
          </div>
        </motion.div>

        {/* Right Side: Abstract Visual */}
        <div className="relative h-[500px] hidden lg:block">
          {/* Main Card */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 w-[340px] glass-effect rounded-2xl p-6 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="space-y-4">
              <div className="h-2 w-3/4 bg-gray-700/50 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="h-full w-full bg-[#FFCC99]/50 rounded-full"
                />
              </div>
              <div className="h-2 w-1/2 bg-gray-700/50 rounded-full" />
              <div className="h-2 w-5/6 bg-gray-700/50 rounded-full" />
              <div className="h-2 w-2/3 bg-gray-700/50 rounded-full" />
            </div>
            <div className="mt-8 pt-6 border-t border-white/5">
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>Status: Compilando...</span>
                <span className="text-[#FFCC99]">98%</span>
              </div>
              <div className="mt-2 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-[#FFCC99]"
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Floating Card 2 */}
          <motion.div
            animate={{ y: [15, -15, 15] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 left-0 w-[240px] glass-effect rounded-2xl p-5 shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 rounded-lg bg-[#FFCC99]/10">
                <Code2 className="w-5 h-5 text-[#FFCC99]" />
              </div>
              <div>
                <div className="text-sm font-medium text-white">API Gateway</div>
                <div className="text-xs text-emerald-400">Online</div>
              </div>
            </div>
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFCC99]" />
                  <div className="h-1.5 flex-1 bg-gray-700/50 rounded-full" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Floating Card 3 */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-40 -left-10 w-[180px] glass-effect rounded-2xl p-4 shadow-2xl"
          >
            <div className="text-xs text-gray-400 mb-2">Performance</div>
            <div className="text-2xl font-bold text-white mb-1">99.9%</div>
            <div className="h-8 w-full flex items-end gap-1">
              {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                <motion.div
                  key={i}
                  className="w-full bg-[#FFCC99]/40 rounded-t-sm"
                  animate={{ height: [`${h}%`, `${Math.max(20, h - 30)}%`, `${h}%`] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
