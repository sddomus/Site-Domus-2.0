'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080028]/80 backdrop-blur-2xl border-b border-[#FFCC99]/15 shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
          : 'bg-transparent backdrop-blur-md border-b border-transparent'
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
          {[
            { label: 'Serviços', href: '#servicos' },
            { label: 'Sobre Nós', href: '#sobre-nos' },
            { label: 'Metodologia', href: '#metodologia' },
            { label: 'Casos de Sucesso', href: '#casos-de-sucesso' },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-300 hover:text-[#FFCC99] transition-colors relative group/link"
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#FFCC99] group-hover/link:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="#contato"
            className="bg-[#FFCC99] text-[#080028] px-6 py-2.5 rounded-full text-sm font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(255,204,153,0.3)] transition-all duration-300 inline-block"
          >
            Fale com um Especialista
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
            {[
              { label: 'Serviços', href: '#servicos' },
              { label: 'Sobre Nós', href: '#sobre-nos' },
              { label: 'Metodologia', href: '#metodologia' },
              { label: 'Casos de Sucesso', href: '#casos-de-sucesso' },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-[#FFCC99] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contato"
              className="bg-[#FFCC99] text-[#080028] px-6 py-3 rounded-full text-sm font-semibold text-center mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Fale com um Especialista
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
