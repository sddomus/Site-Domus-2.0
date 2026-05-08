import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ScrollProgress } from '@/components/ScrollProgress';
import { CursorGlow } from '@/components/CursorGlow';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import '../globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    metadataBase: new URL('https://domussd.com'),
    title: t('title'),
    description: t('description'),
    keywords: ['low-code', 'software development', 'AI agents', 'FlutterFlow', 'apps', 'internal systems', 'digital agency'],
    icons: { icon: '/logo-simbolo.png' },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      siteName: t('ogSiteName'),
      locale: locale === 'pt-BR' ? 'pt_BR' : 'en_US',
      type: 'website',
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'pt-BR' | 'en')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale === 'pt-BR' ? 'pt-BR' : 'en-US'} className={inter.variable}>
      <body
        className="bg-[var(--color-bg-main)] bg-grid-pattern text-gray-100 min-h-screen font-sans antialiased selection:bg-[#FFCC99]/30 selection:text-[#FFCC99]"
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          <ScrollProgress />
          <CursorGlow />
          <WhatsAppButton />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
