'use client';

import { motion } from 'motion/react';
import { Mail, MessageSquare, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';

const CALENDAR_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1mwc2qLcpXQM-33KbRiIrwdb8xE4QnhcMx8acGJJhKCRfmjUxZGiR2ewevT9JRX-8gW4qG2D21?gv=true';

export function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contato" className="scroll-mt-24 px-6 max-w-7xl mx-auto w-full relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left — info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              {t('headline')} <span className="text-[#FFCC99]">{t('headlineHighlight')}</span>
            </h2>
            <p className="text-lg text-gray-400 font-light leading-relaxed max-w-lg">{t('description')}</p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-[#FFCC99]/10 flex items-center justify-center group-hover:bg-[#FFCC99]/20 transition-colors">
                <Mail className="w-5 h-5 text-[#FFCC99]" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">{t('emailLabel')}</p>
                <a href="mailto:contato@grupo-domus.com" className="text-white hover:text-[#FFCC99] transition-colors">
                  contato@grupo-domus.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-[#FFCC99]/10 flex items-center justify-center group-hover:bg-[#FFCC99]/20 transition-colors">
                <MessageSquare className="w-5 h-5 text-[#FFCC99]" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">{t('whatsappLabel')}</p>
                <a href="https://wa.me/5553991662468?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Domus!" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFCC99] transition-colors">
                  +55 (53) 99166-2468
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-[#FFCC99]/10 flex items-center justify-center group-hover:bg-[#FFCC99]/20 transition-colors">
                <MapPin className="w-5 h-5 text-[#FFCC99]" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">{t('locationLabel')}</p>
                <span className="text-white">{t('locationValue')}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right — Google Calendar */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden border border-[#FFCC99]/20 shadow-2xl bg-white">
            <iframe
              src={CALENDAR_URL}
              style={{ border: 0 }}
              width="100%"
              height="600"
              frameBorder="0"
              title={t('calendarTitle')}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
