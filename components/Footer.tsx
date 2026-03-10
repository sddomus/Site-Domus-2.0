import Link from 'next/link';
import { Hexagon, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[var(--color-bg-main)] border-t border-[#FFCC99]/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Coluna 1: Logo e Missão */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <Hexagon className="w-8 h-8 text-[#FFCC99] group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-xl tracking-tight">
                <strong className="font-bold text-white">Domus</strong>
                <span className="font-light text-[#FFCC99]"> Soluções Digitais</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Transformando visão em realidade digital. Somos especialistas em criar soluções de software de alta performance e design focado em conversão.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="text-white font-semibold mb-6">Empresa</h4>
            <ul className="flex flex-col gap-4">
              {['Sobre Nós', 'Metodologia', 'Casos de Sucesso', 'Carreiras'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-[#FFCC99] text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Serviços */}
          <div>
            <h4 className="text-white font-semibold mb-6">Serviços</h4>
            <ul className="flex flex-col gap-4">
              {['Sistemas Internos', 'Apps Personalizados', 'Sites de Alta Conversão', 'Agentes de IA'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-[#FFCC99] text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4 font-light">
              Receba insights sobre tecnologia e design para escalar seu negócio.
            </p>
            <form className="flex items-center gap-2">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="glass-effect w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FFCC99]/50 transition-colors"
              />
              <button 
                type="button"
                className="bg-[#FFCC99] text-[#080028] p-3 rounded-xl hover:scale-105 transition-transform"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="border-t border-[#FFCC99]/5 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm font-light">
            &copy; {new Date().getFullYear()} Domus Soluções Digitais. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-gray-500 hover:text-[#FFCC99] text-sm transition-colors">
              Privacidade
            </Link>
            <Link href="#" className="text-gray-500 hover:text-[#FFCC99] text-sm transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
