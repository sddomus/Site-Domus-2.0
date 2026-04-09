import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="relative bg-[var(--color-bg-main)] border-t border-[#FFCC99]/10 pt-20 pb-10 px-6 overflow-hidden">

      {/* Ovelha decorativa de fundo */}
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

          {/* Coluna 1: Logo e Missão */}
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
              Transformando visão em realidade digital. Somos especialistas em criar soluções de software de alta performance e design focado em conversão.
            </p>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-white font-semibold mb-6">Empresa</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Sobre Nós', href: '#sobre-nos' },
                { label: 'Metodologia', href: '#metodologia' },
                { label: 'Casos de Sucesso', href: '#casos-de-sucesso' },
                { label: 'Contato', href: '#contato' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-400 hover:text-[#FFCC99] text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-white font-semibold mb-6">Serviços</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Sistemas Internos', href: '#servicos' },
                { label: 'Apps Personalizados', href: '#servicos' },
                { label: 'Sites de Alta Conversão', href: '#servicos' },
                { label: 'Agentes de IA', href: '#servicos' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-400 hover:text-[#FFCC99] text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Rodapé Inferior */}
        <div className="border-t border-[#FFCC99]/5 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm font-light">
            &copy; {new Date().getFullYear()} Domus Soluções Digitais. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacidade" className="text-gray-500 hover:text-[#FFCC99] text-sm transition-colors">
              Privacidade
            </Link>
            <Link href="/termos" className="text-gray-500 hover:text-[#FFCC99] text-sm transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
