'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/lib/navigation';
import { useTransition } from 'react';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (next: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <div className="flex items-center gap-1 bg-white/5 rounded-full p-0.5 border border-[#FFCC99]/10">
      {(['pt-BR', 'en'] as const).map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          disabled={isPending}
          className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
            locale === loc
              ? 'bg-[#FFCC99] text-[#080028]'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          {loc === 'pt-BR' ? '🇧🇷' : '🇺🇸'}
        </button>
      ))}
    </div>
  );
}
