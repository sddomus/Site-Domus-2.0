import { Link } from '@/lib/navigation';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (locale === 'en') {
    return {
      title: 'Terms of Use | Domus Digital Solutions',
      description: 'Terms of Use for the Domus Digital Solutions website, governed by Brazilian law.',
    };
  }
  return {
    title: 'Termos de Uso | Domus Soluções Digitais',
    description: 'Termos de Uso do site da Domus Soluções Digitais, regidos pela legislação brasileira.',
  };
}

export default async function TermosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEN = locale === 'en';

  return (
    <main className="min-h-screen bg-[var(--color-bg-main)] text-gray-100 px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-[#FFCC99] hover:underline text-sm mb-8 inline-block">
          {isEN ? '← Back to home' : '← Voltar ao início'}
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          {isEN ? (
            <>Terms of <span className="text-[#FFCC99]">Use</span></>
          ) : (
            <>Termos de <span className="text-[#FFCC99]">Uso</span></>
          )}
        </h1>
        <p className="text-gray-500 text-sm mb-12">
          {isEN ? 'Last updated: April 2026' : 'Última atualização: abril de 2026'}
        </p>

        <div className="prose prose-invert prose-lg max-w-none space-y-10 text-gray-300 leading-relaxed">
          {isEN ? <TermsEN /> : <TermsPT />}
        </div>
      </div>
    </main>
  );
}

function TermsPT() {
  return (
    <>
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
        <p>A Domus Soluções Digitais não se responsabiliza por:</p>
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
    </>
  );
}

function TermsEN() {
  return (
    <>
      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
        <p>
          By accessing and using the <strong className="text-white">Domus Soluções Digitais</strong> website, you confirm that you have read, understood and agree to these Terms of Use and our{' '}
          <Link href="/privacidade" className="text-[#FFCC99] hover:underline">Privacy Policy</Link>. If you do not agree, please refrain from using this website.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">2. About Domus Soluções Digitais</h2>
        <p>
          Domus Soluções Digitais is an agency specialized in low-code software development, apps, internal systems (ERPs/CRMs) and artificial intelligence agents, headquartered in Pelotas/RS — Brazil. We provide services exclusively in digital/remote format to clients across Brazil and internationally.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">3. Website Use</h2>
        <p>This website is intended exclusively for informational and commercial purposes. By using it, you agree to:</p>
        <ul className="list-disc list-inside mt-3 space-y-1 text-gray-400">
          <li>Not use the website for illegal purposes or to violate third-party rights</li>
          <li>Not attempt to access restricted areas or internal systems without authorization</li>
          <li>Not submit false, misleading or abusive content through the contact form</li>
          <li>Not reproduce or redistribute website content without prior written authorization</li>
          <li>Not perform reverse engineering, scraping or aggressive automation on this website</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">4. Intellectual Property</h2>
        <p>
          All content on this website — including text, design, logo, images, source code and structure — is the exclusive property of Domus Soluções Digitais and is protected by <strong className="text-white">Brazilian Law No. 9.610/1998 (Copyright Act)</strong> and other applicable intellectual property laws in Brazil.
        </p>
        <p className="mt-3">
          Any reproduction, in whole or in part, without prior written authorization from Domus is prohibited.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">5. Contact Form</h2>
        <p>
          Completing the contact form constitutes a request for a quote or information and <strong className="text-white">does not imply the conclusion of any contract or commercial relationship</strong>. A service agreement between the parties is only established upon signing a formal proposal and/or specific contract instrument.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">6. Limitation of Liability</h2>
        <p>Domus Soluções Digitais is not liable for:</p>
        <ul className="list-disc list-inside mt-3 space-y-1 text-gray-400">
          <li>Temporary interruptions to website access due to maintenance or external factors</li>
          <li>Damage caused by viruses or malicious code originating from third-party websites</li>
          <li>Decisions made based on information contained on this website without formally engaging our services</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">7. External Links</h2>
        <p>
          This website may contain links to third-party websites (such as WhatsApp, LinkedIn or partner platforms). Domus is not responsible for the content, privacy policies or practices of external websites, and the inclusion of a link does not imply endorsement or partnership.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">8. Modifications</h2>
        <p>
          We reserve the right to amend these Terms at any time. Changes take effect immediately upon publication on the website. Continued use of the website after any modification constitutes acceptance of the new terms.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">9. Governing Law and Jurisdiction</h2>
        <p>
          These Terms of Use are governed and interpreted exclusively in accordance with the laws of the <strong className="text-white">Federative Republic of Brazil</strong>. The courts of <strong className="text-white">Pelotas/RS, Brazil</strong> shall have exclusive jurisdiction to settle any disputes arising from these Terms.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">10. Contact</h2>
        <p>
          For questions, suggestions or requests related to these Terms, contact us at:{' '}
          <a href="mailto:sddomus@gmail.com" className="text-[#FFCC99] hover:underline">sddomus@gmail.com</a>.
        </p>
      </section>
    </>
  );
}
