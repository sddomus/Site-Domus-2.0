'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, MapPin, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        // Esconder a mensagem de sucesso após 5 segundos
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="px-6 max-w-7xl mx-auto w-full relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Vamos transformar sua ideia em <span className="text-[#FFCC99]">software?</span>
            </h2>
            <p className="text-lg text-gray-400 font-light leading-relaxed max-w-lg">
              Seja para um app disruptivo ou um agente de IA personalizado, o primeiro passo é uma conversa estratégica. Preencha o formulário e entraremos em contato.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-[#FFCC99]/10 flex items-center justify-center group-hover:bg-[#FFCC99]/20 transition-colors">
                <Mail className="w-5 h-5 text-[#FFCC99]" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">E-mail</p>
                <a href="mailto:sddomus@gmail.com" className="text-white hover:text-[#FFCC99] transition-colors">
                  sddomus@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-[#FFCC99]/10 flex items-center justify-center group-hover:bg-[#FFCC99]/20 transition-colors">
                <MessageSquare className="w-5 h-5 text-[#FFCC99]" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">WhatsApp</p>
                <a href="https://wa.me/5553991662468" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFCC99] transition-colors">
                  +55 (53) 99166-2468
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-[#FFCC99]/10 flex items-center justify-center group-hover:bg-[#FFCC99]/20 transition-colors">
                <MapPin className="w-5 h-5 text-[#FFCC99]" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">Localização</p>
                <span className="text-white">
                  Atendimento Global / Remoto
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#FFCC99] blur-[120px] opacity-10 rounded-full pointer-events-none" />
          
          <div className="glass-effect p-8 rounded-3xl relative z-10 border border-[#FFCC99]/20 shadow-2xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm text-gray-400 font-medium">Nome Completo</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#080028]/50 border border-[#FFCC99]/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#FFCC99] transition-colors"
                  placeholder="Como podemos te chamar?"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm text-gray-400 font-medium">E-mail Profissional</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#080028]/50 border border-[#FFCC99]/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#FFCC99] transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm text-gray-400 font-medium">Telefone</label>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#080028]/50 border border-[#FFCC99]/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#FFCC99] transition-colors"
                  placeholder="(XX) 9XXXX-XXXX"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm text-gray-400 font-medium">Assunto / Serviço</label>
                <select 
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-[#080028]/50 border border-[#FFCC99]/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFCC99] transition-colors appearance-none"
                >
                  <option value="" disabled className="text-gray-600">Selecione o serviço desejado...</option>
                  <option value="Sistemas Internos (ERPs/CRMs)">Sistemas Internos (ERPs/CRMs)</option>
                  <option value="Apps Personalizados">Apps Personalizados</option>
                  <option value="Sites de Alta Conversão">Sites de Alta Conversão</option>
                  <option value="Agentes de IA">Agentes de IA</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm text-gray-400 font-medium">Mensagem</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#080028]/50 border border-[#FFCC99]/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#FFCC99] transition-colors resize-none"
                  placeholder="Conte-nos um pouco sobre o seu projeto..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="relative overflow-hidden w-full bg-[#FFCC99] text-[#080028] font-bold py-4 rounded-xl mt-2 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,204,153,0.3)] transition-all duration-300 disabled:opacity-70 disabled:hover:scale-100 group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </span>
                {!isSubmitting && (
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
                )}
              </button>

              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-400 bg-green-400/10 p-3 rounded-xl border border-green-400/20 mt-2"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-sm font-medium">Mensagem enviada com sucesso!</span>
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
