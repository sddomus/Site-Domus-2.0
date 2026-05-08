'use client';

import Image from 'next/image';
import { Link } from '@/lib/navigation';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="relative bg-[var(--color-bg-main)] border-t border-[#FFCC99]/10 pt-20 pb-10 px-6 overflow-hidden">

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none -translate-y-6">
        <Image
          src="/ovelha.png"
          alt=""
          width={320}
          height={320}
          className="w-[280px] h-auto object-contain opacity-[0.06]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 md:gap-8">

          <div className="flex flex-col gap-6">
            <Link href="/" className="group w-fit">
              <Image
                src="/logo-nome.png"
                alt="Domus Soluções Digitais"
                width={160}
                height={36}
                className="h-[36px] w-auto object-contain group-hover:opacity-80 transition-opacity duration-300"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed font-light max-w-[280px]">
              {t('mission')}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">{t('companyColumn')}</h4>
            <ul className="flex flex-col gap-3">
              {(['about', 'methodology', 'cases', 'contact'] as const).map((key) => (
                <li key={key}>
                  <Link
                    href={`#${key === 'about' ? 'sobre-nos' : key === 'methodology' ? 'metodologia' : key === 'cases' ? 'casos-de-sucesso' : 'contato'}`}
                    className="text-gray-400 hover:text-[#FFCC99] text-sm transition-colors"
                  >
                    {t(`nav.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">{t('servicesColumn')}</h4>
            <ul className="flex flex-col gap-3">
              {(['internalSystems', 'customApps', 'websites', 'aiAgents'] as const).map((key) => (
                <li key={key}>
                  <Link href="#servicos" className="text-gray-400 hover:text-[#FFCC99] text-sm transition-colors">
                    {t(`services.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-[#FFCC99]/5 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm font-light">
            &copy; {new Date().getFullYear()} Domus Soluções Digitais. {t('copyright')}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacidade" className="text-gray-500 hover:text-[#FFCC99] text-sm transition-colors">
              {t('privacy')}
            </Link>
            <Link href="/termos" className="text-gray-500 hover:text-[#FFCC99] text-sm transition-colors">
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
