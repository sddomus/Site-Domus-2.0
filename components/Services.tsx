'use client';

import { motion } from 'motion/react';
import { Database, Smartphone, Bot, Globe, ArrowRight } from 'lucide-react';

export function Services() {
  return (
    <section id="servicos" className="px-6 max-w-7xl mx-auto w-full">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Nossas <span className="text-[#FFCC99]">Especialidades</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl font-light">
          Desenvolvemos soluções robustas com design focado em conversão, utilizando as melhores tecnologias do mercado.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Sistemas Internos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 bg-[var(--color-surface)] border border-[#FFCC99]/10 rounded-3xl p-8 md:p-10 transition-all duration-300 hover:border-[#FFCC99]/30 hover:-translate-y-1 group flex flex-col justify-between min-h-[320px] relative overflow-hidden"
        >
          <div className="max-w-md relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-[#FFCC99]/10 flex items-center justify-center mb-8">
              <Database className="w-7 h-7 text-[#FFCC99]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Sistemas Internos</h3>
            <p className="text-gray-400 leading-relaxed font-light">
              Automatize processos e centralize a gestão da sua empresa com ERPs e CRMs personalizados, desenvolvidos para escalar junto com o seu negócio.
            </p>
          </div>
          
          {/* Abstract Visual: Database/Dashboard */}
          <div className="absolute right-10 top-1/2 -translate-y-1/2 w-56 h-48 hidden md:flex flex-col gap-3 opacity-30 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none">
            <div className="w-full h-12 glass-effect border border-white/10 rounded-lg flex items-center px-4 gap-3 transform translate-x-4">
              <div className="w-6 h-6 rounded-md bg-[#FFCC99]/20" />
              <div className="flex-1 h-2 bg-white/10 rounded-sm" />
            </div>
            <div className="w-5/6 h-12 glass-effect border border-white/10 rounded-lg flex items-center px-4 gap-3 ml-auto">
              <div className="w-6 h-6 rounded-md bg-[#FFCC99]/20" />
              <div className="flex-1 h-2 bg-white/10 rounded-sm" />
            </div>
            <div className="w-full h-12 glass-effect border border-white/10 rounded-lg flex items-center px-4 gap-3 transform translate-x-2">
              <div className="w-6 h-6 rounded-md bg-[#FFCC99]/20" />
              <div className="flex-1 h-2 bg-white/10 rounded-sm" />
            </div>
          </div>

          <div className="mt-8 flex items-center text-[#FFCC99] font-medium text-sm gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300 relative z-10">
            Saiba mais <ArrowRight className="w-4 h-4" />
          </div>
        </motion.div>

        {/* Card 2: Apps Personalizados */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[var(--color-surface)] border border-[#FFCC99]/10 rounded-3xl p-8 md:p-10 transition-all duration-300 hover:border-[#FFCC99]/30 hover:-translate-y-1 group flex flex-col justify-between min-h-[320px] relative overflow-hidden"
        >
          {/* Abstract Visual: Mobile App Wireframe */}
          <div className="absolute top-6 right-6 w-20 h-36 glass-effect border border-white/10 rounded-2xl opacity-30 group-hover:opacity-80 transition-opacity duration-300 flex flex-col items-center py-2 px-2 pointer-events-none">
            <div className="w-6 h-1 bg-white/20 rounded-full mb-3" />
            <div className="w-full h-10 bg-white/5 rounded-md mb-2" />
            <div className="w-full h-4 bg-[#FFCC99]/20 rounded-sm mb-1" />
            <div className="w-3/4 h-4 bg-white/5 rounded-sm mr-auto" />
          </div>

          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-[#FFCC99]/10 flex items-center justify-center mb-8">
              <Smartphone className="w-7 h-7 text-[#FFCC99]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Apps Personalizados</h3>
            <p className="text-gray-400 leading-relaxed font-light">
              Aplicativos móveis e web responsivos, com interfaces intuitivas e alta performance para engajar seus usuários.
            </p>
          </div>
          <div className="mt-8 flex items-center text-[#FFCC99] font-medium text-sm gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300 relative z-10">
            Saiba mais <ArrowRight className="w-4 h-4" />
          </div>
        </motion.div>

        {/* Card 3: Sites & Landing Pages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[var(--color-surface)] border border-[#FFCC99]/10 rounded-3xl p-8 md:p-10 transition-all duration-300 hover:border-[#FFCC99]/30 hover:-translate-y-1 group flex flex-col justify-between min-h-[320px] relative overflow-hidden"
        >
          {/* Abstract Visual: Wireframe Browser */}
          <div className="absolute top-6 right-6 w-32 h-24 glass-effect border border-white/10 rounded-xl opacity-30 group-hover:opacity-80 transition-opacity duration-300 flex flex-col overflow-hidden pointer-events-none">
            <div className="h-4 border-b border-white/10 flex items-center px-2 gap-1 bg-white/5">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
            </div>
            <div className="flex-1 p-3 flex flex-col gap-2">
              <div className="w-full h-2 bg-white/10 rounded-sm" />
              <div className="w-2/3 h-2 bg-white/10 rounded-sm" />
              <div className="w-1/2 h-2 bg-[#FFCC99]/20 rounded-sm mt-auto" />
            </div>
          </div>

          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-[#FFCC99]/10 flex items-center justify-center mb-8">
              <Globe className="w-7 h-7 text-[#FFCC99]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Sites de Alta Conversão</h3>
            <p className="text-gray-400 leading-relaxed font-light">
              Landing pages e sites institucionais ultrarrápidos, otimizados para SEO e focados em transformar visitantes em clientes.
            </p>
          </div>
          <div className="mt-8 flex items-center text-[#FFCC99] font-medium text-sm gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300 relative z-10">
            Saiba mais <ArrowRight className="w-4 h-4" />
          </div>
        </motion.div>

        {/* Card 4: Agentes Autônomos de IA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:col-span-2 bg-[var(--color-surface)] border border-[#FFCC99]/10 rounded-3xl p-8 md:p-10 transition-all duration-300 hover:border-[#FFCC99]/30 hover:-translate-y-1 group flex flex-col justify-between min-h-[320px] relative overflow-hidden"
        >
          <div className="max-w-md relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-[#FFCC99]/10 flex items-center justify-center mb-8">
              <Bot className="w-7 h-7 text-[#FFCC99]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Agentes Autônomos de IA</h3>
            <p className="text-gray-400 leading-relaxed font-light">
              Desenvolvemos agentes de inteligência artificial capazes de raciocinar, tomar decisões e executar fluxos de trabalho complexos de forma autônoma e ininterrupta.
            </p>
          </div>
          
          {/* Abstract Network Visual */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 hidden md:block opacity-40 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="absolute inset-0">
              {/* Connections */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="rgba(255,204,153,0.1)" strokeWidth="1" />
                <line x1="80%" y1="30%" x2="50%" y2="50%" stroke="rgba(255,204,153,0.1)" strokeWidth="1" />
                <line x1="30%" y1="80%" x2="50%" y2="50%" stroke="rgba(255,204,153,0.1)" strokeWidth="1" />
                <line x1="70%" y1="70%" x2="50%" y2="50%" stroke="rgba(255,204,153,0.1)" strokeWidth="1" />
                <line x1="20%" y1="20%" x2="80%" y2="30%" stroke="rgba(255,204,153,0.05)" strokeWidth="1" />
                <line x1="30%" y1="80%" x2="70%" y2="70%" stroke="rgba(255,204,153,0.05)" strokeWidth="1" />
              </svg>
              
              {/* Nodes */}
              <div className="absolute top-[20%] left-[20%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full glass-effect bg-[#FFCC99]/20 animate-pulse" style={{ animationDuration: '2s' }} />
              <div className="absolute top-[30%] left-[80%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full glass-effect bg-[#FFCC99]/20 animate-pulse" style={{ animationDuration: '3s' }} />
              <div className="absolute top-[80%] left-[30%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full glass-effect bg-[#FFCC99]/20 animate-pulse" style={{ animationDuration: '1.5s' }} />
              <div className="absolute top-[70%] left-[70%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full glass-effect bg-[#FFCC99]/20 animate-pulse" style={{ animationDuration: '2.5s' }} />
              
              {/* Center Node */}
              <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full glass-effect bg-[#FFCC99]/30 flex items-center justify-center shadow-[0_0_20px_rgba(255,204,153,0.3)]">
                <div className="w-3 h-3 rounded-full bg-[#FFCC99] animate-ping" style={{ animationDuration: '2s' }} />
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center text-[#FFCC99] font-medium text-sm gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300 relative z-10">
            Saiba mais <ArrowRight className="w-4 h-4" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
