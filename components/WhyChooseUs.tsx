'use client';

import { motion } from 'motion/react';
import { Zap, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react';

const differentials = [
  {
    title: 'Velocidade Extrema',
    description: 'Utilizamos frameworks modernos e metodologias ágeis para acelerar o time-to-market do seu produto sem abrir mão da qualidade.',
    icon: Zap,
  },
  {
    title: 'Segurança Enterprise',
    description: 'Arquiteturas robustas com as melhores práticas de segurança do mercado, garantindo a proteção dos dados da sua empresa e dos seus clientes.',
    icon: ShieldCheck,
  },
  {
    title: 'Escalabilidade',
    description: 'Sistemas preparados para crescer. Construímos bases sólidas que suportam o aumento de tráfego e volume de dados sem gargalos.',
    icon: TrendingUp,
  },
  {
    title: 'UI/UX Premium',
    description: 'Interfaces deslumbrantes e intuitivas focadas na jornada do usuário, maximizando a retenção e as taxas de conversão.',
    icon: Sparkles,
  },
];

export function WhyChooseUs() {
  return (
    <section id="metodologia" className="px-6 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">

        {/* Left Column: The Promise (Sticky) */}
        <div className="lg:sticky lg:top-32 h-fit flex flex-col items-start gap-6">
          <div className="glass-effect px-4 py-2 rounded-full flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#FFCC99]" />
            <span className="text-sm font-medium text-gray-300">O Método Domus</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Meses de desenvolvimento entregues em <span className="text-[#FFCC99]">semanas.</span>
          </h2>

          <p className="text-lg text-gray-400 font-light leading-relaxed max-w-lg">
            Não somos apenas codificadores. Combinamos a velocidade das plataformas modernas com arquiteturas de código limpo para entregar o software que o seu negócio precisa hoje, não no ano que vem.
          </p>
        </div>

        {/* Right Column: The Arguments (Scroll) */}
        <div className="flex flex-col gap-8">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-[var(--color-surface)] border border-[#FFCC99]/10 p-8 md:p-10 rounded-3xl transition-colors duration-300 hover:border-[#FFCC99]/30 group overflow-hidden"
            >
              {/* Animated left border line */}
              <motion.div
                className="absolute left-0 top-0 w-[3px] bg-gradient-to-b from-[#FFCC99] to-transparent rounded-l-3xl"
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
              />

              <div className="flex items-start gap-6">
                {/* Animated icon */}
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-[#FFCC99]/10 flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.15, backgroundColor: 'rgba(255,204,153,0.2)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                >
                  <motion.div
                    whileHover={{ rotate: [0, -12, 12, -6, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <item.icon className="w-7 h-7 text-[#FFCC99]" />
                  </motion.div>
                </motion.div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-light">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
