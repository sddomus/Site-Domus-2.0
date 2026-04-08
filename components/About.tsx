'use client';

import { motion } from 'motion/react';
import { Target, Zap, Handshake } from 'lucide-react';

const values = [
  {
    icon: Zap,
    title: 'Velocidade',
    description: 'Entregamos em semanas o que o mercado leva meses. Sem burocracia, sem enrolação.',
  },
  {
    icon: Target,
    title: 'Precisão',
    description: 'Cada linha de código e cada decisão de design existem para servir um objetivo: o resultado do seu negócio.',
  },
  {
    icon: Handshake,
    title: 'Parceria',
    description: 'Não somos fornecedores — somos o time de tecnologia que a sua empresa precisa para crescer.',
  },
];

export function About() {
  return (
    <section id="sobre-nos" className="px-6 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left: Copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="glass-effect px-4 py-2 rounded-full flex items-center gap-2 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#FFCC99]" />
            <span className="text-sm font-medium text-gray-300">Nossa História</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            Nascemos para transformar ideias em{' '}
            <span className="animate-gradient-text">software que gera resultados.</span>
          </h2>

          <p className="text-lg text-gray-400 font-light leading-relaxed">
            A Domus nasceu da frustração com projetos que demoram demais, custam caro e entregam pouco.
            Reunimos especialistas em low-code, IA e design para criar uma agência diferente: focada em
            velocidade real, qualidade genuína e parcerias de longo prazo.
          </p>

          <p className="text-gray-400 font-light leading-relaxed">
            Hoje atendemos empresas de todos os portes, de startups em fase inicial a corporações que
            precisam modernizar processos internos — sempre com o mesmo compromisso: entregar valor
            rápido e construir bases sólidas para escalar.
          </p>
        </motion.div>

        {/* Right: Values */}
        <div className="flex flex-col gap-5">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[var(--color-surface)] border border-[#FFCC99]/10 rounded-2xl p-6 flex items-start gap-5 hover:border-[#FFCC99]/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FFCC99]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFCC99]/20 transition-colors">
                <value.icon className="w-6 h-6 text-[#FFCC99]" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">{value.title}</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
