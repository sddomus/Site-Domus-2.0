'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Hexagon, Menu, X } from 'lucide-react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <img 
            src="/logo-domus.png" 
            alt="Domus Soluções Digitais - Logo" 
            className="h-[56px] w-auto object-contain group-hover:scale-105 transition-transform duration-300 flex-shrink-0" 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Serviços', 'Metodologia', 'Casos de Sucesso'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-medium text-gray-300 hover:text-[#FFCC99] transition-colors"
            >
              {item}
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
        <div className="md:hidden glass-effect border-t border-[#FFCC99]/10">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {['Serviços', 'Metodologia', 'Casos de Sucesso'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-medium text-gray-300 hover:text-[#FFCC99] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
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
