'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/lib/navigation';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export function Header() {
  const t = useTranslations('header');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { labelKey: 'nav.services' as const, href: '#servicos' },
    { labelKey: 'nav.about' as const, href: '#sobre-nos' },
    { labelKey: 'nav.methodology' as const, href: '#metodologia' },
    { labelKey: 'nav.cases' as const, href: '#casos-de-sucesso' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080028]/80 backdrop-blur-2xl border-b border-[#FFCC99]/15 shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
          : 'bg-[#080028]/20 backdrop-blur-md border-b border-[#FFCC99]/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/logo-horizontal.png"
            alt="Domus Soluções Digitais"
            width={220}
            height={44}
            className="h-[44px] w-auto object-contain group-hover:opacity-80 transition-opacity duration-300"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.labelKey}
              href={item.href}
              className="text-sm font-medium text-gray-300 hover:text-[#FFCC99] transition-colors relative group/link"
            >
              {t(item.labelKey)}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#FFCC99] group-hover/link:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA + Switcher */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <Link
            href="#contato"
            className="bg-[#FFCC99] text-[#080028] px-6 py-2.5 rounded-full text-sm font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(255,204,153,0.3)] transition-all duration-300 inline-block"
          >
            {t('cta')}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-[#FFCC99] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#080028]/95 backdrop-blur-xl border-t border-[#FFCC99]/10">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.labelKey}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-[#FFCC99] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t(item.labelKey)}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <LanguageSwitcher />
            </div>
            <Link
              href="#contato"
              className="bg-[#FFCC99] text-[#080028] px-6 py-3 rounded-full text-sm font-semibold text-center mt-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('cta')}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
