import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termos de Uso | Domus Soluções Digitais',
  description: 'Termos de Uso do site da Domus Soluções Digitais, regidos pela legislação brasileira.',
};

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg-main)] text-gray-100 px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-[#FFCC99] hover:underline text-sm mb-8 inline-block">
          ← Voltar ao início
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Termos de <span className="text-[#FFCC99]">Uso</span>
        </h1>
        <p className="text-gray-500 text-sm mb-12">Última atualização: abril de 2026</p>

        <div className="prose prose-invert prose-lg max-w-none space-y-10 text-gray-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar o site da <strong className="text-white">Domus Soluções Digitais</strong> (donosso domínio), você declara que leu, compreendeu e concorda com estes Termos de Uso, bem como com nossa{' '}
              <Link href="/privacidade" className="text-[#FFCC99] hover:underline">Política de Privacidade</Link>. Caso não concorde, solicitamos que não utilize este site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Sobre a Domus Soluções Digitais</h2>
            <p>
              A Domus Soluções Digitais é uma agência especializada em desenvolvimento de software low-code, aplicativos, sistemas internos (ERPs/CRMs) e agentes de inteligência artificial, com sede em Pelotas/RS — Brasil. Prestamos serviços exclusivamente de forma digital/remota para clientes em todo o território nacional.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Uso do Site</h2>
            <p>Este site tem finalidade exclusivamente informacional e comercial. Ao utilizá-lo, você concorda em:</p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-gray-400">
              <li>Não utilizar o site para fins ilegais ou que violem direitos de terceiros</li>
              <li>Não tentar acessar áreas restritas ou sistemas internos sem autorização</li>
              <li>Não enviar conteúdo falso, enganoso ou abusivo pelo formulário de contato</li>
              <li>Não reproduzir ou redistribuir o conteúdo do site sem autorização expressa por escrito</li>
              <li>Não realizar engenharia reversa, scrapers ou automações agressivas neste site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo deste site — incluindo textos, design, logotipo, imagens, código-fonte e estrutura — é de propriedade exclusiva da Domus Soluções Digitais e está protegido pela <strong className="text-white">Lei nº 9.610/1998 (Lei de Direitos Autorais)</strong> e demais normas de propriedade intelectual aplicáveis no Brasil.
            </p>
            <p className="mt-3">
              É vedada qualquer reprodução, total ou parcial, sem autorização prévia e por escrito da Domus.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Formulário de Contato</h2>
            <p>
              O preenchimento do formulário de contato constitui uma solicitação de orçamento ou informação e <strong className="text-white">não implica a celebração de qualquer contrato ou vínculo comercial</strong>. O contrato de prestação de serviços entre as partes somente se aperfeiçoa com a assinatura de proposta formal e/ou instrumento contratual específico.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Limitação de Responsabilidade</h2>
            <p>
              A Domus Soluções Digitais não se responsabiliza por:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-gray-400">
              <li>Interrupções temporárias de acesso ao site por manutenção ou fatores externos</li>
              <li>Danos causados por vírus ou código malicioso originados em sites de terceiros</li>
              <li>Decisões tomadas com base nas informações contidas neste site sem contratação formal dos serviços</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Links Externos</h2>
            <p>
              Este site pode conter links para websites de terceiros (como WhatsApp, LinkedIn ou plataformas de parceiros). A Domus não se responsabiliza pelo conteúdo, políticas de privacidade ou práticas de sites externos, e a inclusão de um link não implica endosso ou parceria.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Modificações</h2>
            <p>
              Reservamo-nos o direito de alterar estes Termos a qualquer momento. As alterações entram em vigor imediatamente após a publicação no site. O uso continuado do site após qualquer modificação constitui aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Lei Aplicável e Foro</h2>
            <p>
              Estes Termos de Uso são regidos e interpretados exclusivamente de acordo com as leis da <strong className="text-white">República Federativa do Brasil</strong>. Fica eleito o foro da Comarca de <strong className="text-white">Pelotas/RS</strong> para dirimir quaisquer controvérsias decorrentes destes Termos, com renúncia a qualquer outro, por mais privilegiado que seja.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Contato</h2>
            <p>
              Para dúvidas, sugestões ou solicitações relacionadas a estes Termos, entre em contato pelo e-mail:{' '}
              <a href="mailto:sddomus@gmail.com" className="text-[#FFCC99] hover:underline">sddomus@gmail.com</a>.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
