'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function FAQ() {
  const t = useTranslations('faq');
  const items = t.raw('items') as { question: string; answer: string }[];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-6 max-w-3xl mx-auto w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
          {t('title')} <span className="text-[#FFCC99]">{t('titleHighlight')}</span>
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {items.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`bg-[var(--color-surface)] rounded-2xl overflow-hidden transition-all duration-300 ${
                isOpen
                  ? 'border border-[#FFCC99]/40 shadow-[0_0_20px_rgba(255,204,153,0.08)]'
                  : 'border border-[#FFCC99]/10 hover:border-[#FFCC99]/25'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
              >
                <span className={`font-medium pr-4 transition-colors duration-200 ${isOpen ? 'text-[#FFCC99]' : 'text-white group-hover:text-[#FFCC99]/80'}`}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-[#FFCC99]" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5 text-gray-400 font-light leading-relaxed border-t border-[#FFCC99]/10 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
