'use client';

import { motion } from 'motion/react';
import { Target, Zap, Handshake } from 'lucide-react';
import { useTranslations } from 'next-intl';

const VALUE_ICONS = [Zap, Target, Handshake];
const VALUE_KEYS = ['speed', 'precision', 'partnership'] as const;

export function About() {
  const t = useTranslations('about');

  return (
    <section id="sobre-nos" className="scroll-mt-24 px-6 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="glass-effect px-4 py-2 rounded-full flex items-center gap-2 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#FFCC99]" />
            <span className="text-sm font-medium text-gray-300">{t('badge')}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            <span className="animate-gradient-text">{t('headline')}</span>
          </h2>

          <p className="text-lg text-gray-400 font-light leading-relaxed">{t('p1')}</p>
          <p className="text-gray-400 font-light leading-relaxed">{t('p2')}</p>
        </motion.div>

        <div className="flex flex-col gap-5">
          {VALUE_KEYS.map((key, index) => {
            const Icon = VALUE_ICONS[index];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[var(--color-surface)] border border-[#FFCC99]/10 rounded-2xl p-6 flex items-start gap-5 hover:border-[#FFCC99]/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFCC99]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFCC99]/20 transition-colors">
                  <Icon className="w-6 h-6 text-[#FFCC99]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{t(`values.${key}.title`)}</h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">{t(`values.${key}.description`)}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
