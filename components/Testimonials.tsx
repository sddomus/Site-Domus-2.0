'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "A Domus entregou nosso MVP em tempo recorde. A qualidade do código e a atenção aos detalhes na UI/UX foram fundamentais para nossa rodada de captação.",
    name: "Carlos Silva",
    role: "CEO, TechCorp",
    avatar: "https://picsum.photos/seed/carlos/100/100"
  },
  {
    text: "Trabalhar com a Domus é ter a certeza de que o projeto será entregue no prazo. A comunicação é transparente e a velocidade de execução é impressionante.",
    name: "Mariana Costa",
    role: "Diretora de Produto, Innova",
    avatar: "https://picsum.photos/seed/mariana/100/100"
  },
  {
    text: "Os agentes autônomos de IA que eles desenvolveram revolucionaram nosso atendimento. Reduzimos custos e aumentamos a satisfação dos clientes em 40%.",
    name: "Roberto Almeida",
    role: "CTO, FutureBank",
    avatar: "https://picsum.photos/seed/roberto/100/100"
  }
];

export function Testimonials() {
  return (
    <section id="casos-de-sucesso" className="px-6 max-w-7xl mx-auto w-full">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          O que dizem <span className="text-[#FFCC99]">nossos clientes</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
          Histórias reais de empresas que aceleraram sua transformação digital com a Domus.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-effect rounded-3xl p-8 flex flex-col justify-between min-h-[300px] transition-all duration-300 hover:border-[#FFCC99]/30 hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-[#FFCC99] fill-[#FFCC99]" />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed font-light italic mb-8">
                "{item.text}"
              </p>
            </div>
            
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-12 h-12 rounded-full overflow-hidden relative border border-[#FFCC99]/20">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">{item.name}</h4>
                <p className="text-gray-400 text-xs">{item.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
