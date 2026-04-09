import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ScrollProgress } from '@/components/ScrollProgress';
import { CursorGlow } from '@/components/CursorGlow';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://domussd.com'),
  title: 'Domus Soluções Digitais | Desenvolvimento Low-Code e IA',
  description: 'Agência especializada em desenvolvimento low-code, apps, sistemas internos e agentes de IA. Entregamos em semanas o que outros levam meses.',
  keywords: ['low-code', 'desenvolvimento de software', 'agentes de IA', 'FlutterFlow', 'apps', 'sistemas internos', 'agência digital'],
  icons: {
    icon: '/logo-simbolo.png',
  },
  openGraph: {
    title: 'Domus Soluções Digitais | Desenvolvimento Low-Code e IA',
    description: 'Agência especializada em desenvolvimento low-code, apps, sistemas internos e agentes de IA. Entregamos em semanas o que outros levam meses.',
    siteName: 'Domus Soluções Digitais',
    images: [
      {
        url: '/logo-horizontal.png',
        width: 1200,
        height: 630,
        alt: 'Domus Soluções Digitais',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="bg-[var(--color-bg-main)] bg-grid-pattern text-gray-100 min-h-screen font-sans antialiased selection:bg-[#FFCC99]/30 selection:text-[#FFCC99]" suppressHydrationWarning>
        <ScrollProgress />
        <CursorGlow />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}

