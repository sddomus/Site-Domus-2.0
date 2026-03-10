import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Domus Soluções Digitais | Inovação em Alta Velocidade',
  description: 'Site institucional da agência Domus Soluções Digitais',
  openGraph: {
    title: 'Domus Soluções Digitais | Inovação em Alta Velocidade',
    description: 'Site institucional da agência Domus Soluções Digitais',
    siteName: 'Domus Soluções Digitais',
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
        {children}
      </body>
    </html>
  );
}
