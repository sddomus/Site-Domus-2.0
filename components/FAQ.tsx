'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Qual o prazo médio de entrega?",
    answer: "Nosso foco é a velocidade sem perder a qualidade. Projetos de landing pages e sites institucionais levam em média 2 a 4 semanas. Sistemas internos e apps complexos variam de 6 a 12 semanas, dependendo do escopo."
  },
  {
    question: "Vocês oferecem suporte pós-lançamento?",
    answer: "Sim! Acreditamos em parcerias de longo prazo. Oferecemos pacotes de manutenção e suporte contínuo para garantir que seu software continue escalando e performando com excelência."
  },
  {
    question: "Como funciona o desenvolvimento low-code?",
    answer: "Utilizamos plataformas modernas que aceleram a criação de interfaces e lógicas de negócios, combinadas com código customizado (Next.js, Node.js) onde a performance e a exclusividade são críticas. É o melhor dos dois mundos."
  },
  {
    question: "Os agentes de IA são seguros para os dados da minha empresa?",
    answer: "Absolutamente. Implementamos arquiteturas de IA com isolamento de dados, garantindo que as informações da sua empresa não sejam usadas para treinar modelos públicos. A segurança e privacidade são nossas prioridades."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 max-w-3xl mx-auto w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
          Dúvidas <span className="text-[#FFCC99]">Frequentes</span>
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => {
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
                onClick={() => toggleFAQ(index)}
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
