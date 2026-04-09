import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-[var(--color-bg-main)] border-t border-[#FFCC99]/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">

          {/* Coluna 1: Logo e Missão */}
          <div className="flex flex-col gap-6 shrink-0">
            <Link href="/" className="group w-fit">
              <Image
                src="/logo-nome.png"
                alt="Domus Soluções Digitais"
                width={160}
                height={36}
                className="h-[36px] w-auto object-contain group-hover:opacity-80 transition-opacity duration-300"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed font-light max-w-[260px]">
              Transformando visão em realidade digital. Somos especialistas em criar soluções de software de alta performance e design focado em conversão.
            </p>
          </div>

          {/* Coluna central: Ovelha */}
          <div className="hidden md:flex items-center justify-center shrink-0">
            <Image
              src="/ovelha.png"
              alt="Mascote Domus"
              width={200}
              height={200}
              className="w-[140px] h-auto object-contain opacity-50 hover:opacity-80 transition-opacity duration-500"
            />
          </div>

          {/* Colunas 2 e 3: Empresa + Serviços */}
          <div className="grid grid-cols-2 gap-12 shrink-0">

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
