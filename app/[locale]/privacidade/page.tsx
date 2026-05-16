import { Link } from '@/lib/navigation';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (locale === 'en') {
    return {
      title: 'Privacy Policy | Domus Digital Solutions',
      description: 'Privacy Policy of Domus Digital Solutions in accordance with the Brazilian General Data Protection Law (LGPD — Law No. 13.709/2018).',
    };
  }
  return {
    title: 'Política de Privacidade | Domus Soluções Digitais',
    description: 'Política de Privacidade da Domus Soluções Digitais conforme a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).',
  };
}

export default async function PrivacidadePage({
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
            <>Privacy <span className="text-[#FFCC99]">Policy</span></>
          ) : (
            <>Política de <span className="text-[#FFCC99]">Privacidade</span></>
          )}
        </h1>
        <p className="text-gray-500 text-sm mb-12">
          {isEN ? 'Last updated: April 2026' : 'Última atualização: abril de 2026'}
        </p>

        <div className="prose prose-invert prose-lg max-w-none space-y-10 text-gray-300 leading-relaxed">
          {isEN ? <PrivacyEN /> : <PrivacyPT />}
        </div>
      </div>
    </main>
  );
}

function PrivacyPT() {
  return (
    <>
      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">1. Identificação do Controlador</h2>
        <p>
          <strong className="text-white">Domus Soluções Digitais</strong>, pessoa jurídica de direito privado, com sede em Pelotas/RS — Brasil, é a controladora dos dados pessoais coletados neste site, nos termos da <strong className="text-white">Lei nº 13.709/2018 (Lei Geral de Proteção de Dados — LGPD)</strong>.
        </p>
        <p className="mt-3">
          Contato do responsável pelo tratamento de dados (DPO): <a href="mailto:contato@grupo-domus.com" className="text-[#FFCC99] hover:underline">contato@grupo-domus.com</a>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">2. Dados Coletados</h2>
        <p>Coletamos exclusivamente os dados que você nos fornece voluntariamente por meio do formulário de contato:</p>
        <ul className="list-disc list-inside mt-3 space-y-1 text-gray-400">
          <li>Nome completo</li>
          <li>Endereço de e-mail</li>
          <li>Número de telefone</li>
          <li>Assunto / serviço de interesse</li>
          <li>Mensagem enviada</li>
        </ul>
        <p className="mt-3">
          Não coletamos dados de navegação, cookies de rastreamento, informações bancárias ou quaisquer dados sensíveis definidos no Art. 5º, II da LGPD.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">3. Finalidade e Base Legal do Tratamento</h2>
        <p>Os dados coletados são utilizados com as seguintes finalidades e bases legais (Art. 7º da LGPD):</p>
        <div className="mt-4 space-y-3">
          <div className="bg-[var(--color-surface)] border border-[#FFCC99]/10 rounded-xl p-4">
            <p className="font-medium text-white">Responder à sua solicitação de contato</p>
            <p className="text-sm text-gray-500 mt-1">Base legal: execução de contrato ou diligências pré-contratuais (Art. 7º, V)</p>
          </div>
          <div className="bg-[var(--color-surface)] border border-[#FFCC99]/10 rounded-xl p-4">
            <p className="font-medium text-white">Envio de proposta comercial</p>
            <p className="text-sm text-gray-500 mt-1">Base legal: legítimo interesse do controlador (Art. 7º, IX)</p>
          </div>
          <div className="bg-[var(--color-surface)] border border-[#FFCC99]/10 rounded-xl p-4">
            <p className="font-medium text-white">Comunicações de marketing (somente com consentimento)</p>
            <p className="text-sm text-gray-500 mt-1">Base legal: consentimento do titular (Art. 7º, I)</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">4. Compartilhamento de Dados</h2>
        <p>
          Seus dados são transmitidos ao serviço <strong className="text-white">Web3Forms</strong> (web3forms.com) para processamento e entrega das mensagens ao nosso e-mail. O Web3Forms atua como operador de dados e está sujeito às leis de proteção de dados aplicáveis.
        </p>
        <p className="mt-3">
          Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins comerciais ou publicitários.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">5. Retenção dos Dados</h2>
        <p>
          Conservamos os dados pelo tempo necessário para cumprir a finalidade para a qual foram coletados ou conforme obrigação legal (Art. 16 da LGPD). Dados de contato são mantidos por até <strong className="text-white">5 (cinco) anos</strong> para fins de relacionamento comercial e, após esse período, são excluídos ou anonimizados.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">6. Direitos do Titular</h2>
        <p>Nos termos do Art. 18 da LGPD, você tem direito a:</p>
        <ul className="list-disc list-inside mt-3 space-y-1 text-gray-400">
          <li>Confirmar a existência de tratamento de seus dados</li>
          <li>Acessar os dados que temos sobre você</li>
          <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
          <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários</li>
          <li>Solicitar a portabilidade dos dados</li>
          <li>Revogar o consentimento a qualquer momento</li>
          <li>Opor-se ao tratamento em caso de descumprimento da LGPD</li>
        </ul>
        <p className="mt-3">
          Para exercer seus direitos, entre em contato pelo e-mail: <a href="mailto:contato@grupo-domus.com" className="text-[#FFCC99] hover:underline">contato@grupo-domus.com</a>. Responderemos no prazo de <strong className="text-white">15 (quinze) dias corridos</strong>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">7. Segurança</h2>
        <p>
          Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda ou destruição, incluindo o uso de HTTPS/TLS para transmissão segura de informações.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">8. Alterações nesta Política</h2>
        <p>
          Reservamo-nos o direito de atualizar esta Política periodicamente. A data de revisão sempre estará indicada no topo desta página. O uso continuado do site após alterações constitui aceitação das novas condições.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">9. Contato e Autoridade Nacional</h2>
        <p>
          Em caso de dúvidas sobre esta Política ou sobre o tratamento de seus dados, entre em contato conosco pelo e-mail <a href="mailto:contato@grupo-domus.com" className="text-[#FFCC99] hover:underline">contato@grupo-domus.com</a>.
        </p>
        <p className="mt-3">
          Caso não obtenha resposta satisfatória, você pode acionar a <strong className="text-white">Autoridade Nacional de Proteção de Dados (ANPD)</strong> pelo portal <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="text-[#FFCC99] hover:underline">www.gov.br/anpd</a>.
        </p>
      </section>
    </>
  );
}

function PrivacyEN() {
  return (
    <>
      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">1. Data Controller Identification</h2>
        <p>
          <strong className="text-white">Domus Soluções Digitais</strong>, a privately held legal entity headquartered in Pelotas/RS — Brazil, is the controller of personal data collected on this website, pursuant to <strong className="text-white">Law No. 13.709/2018 (Lei Geral de Proteção de Dados — LGPD, Brazil&apos;s General Data Protection Law)</strong>.
        </p>
        <p className="mt-3">
          Data Protection Officer (DPO) contact: <a href="mailto:contato@grupo-domus.com" className="text-[#FFCC99] hover:underline">contato@grupo-domus.com</a>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">2. Data Collected</h2>
        <p>We collect exclusively the data you voluntarily provide through the contact form:</p>
        <ul className="list-disc list-inside mt-3 space-y-1 text-gray-400">
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Subject / service of interest</li>
          <li>Message content</li>
        </ul>
        <p className="mt-3">
          We do not collect browsing data, tracking cookies, banking information or any sensitive data as defined in Art. 5, II of the LGPD.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">3. Purpose and Legal Basis for Processing</h2>
        <p>Collected data is used for the following purposes and legal bases (Art. 7 of the LGPD):</p>
        <div className="mt-4 space-y-3">
          <div className="bg-[var(--color-surface)] border border-[#FFCC99]/10 rounded-xl p-4">
            <p className="font-medium text-white">Responding to your contact request</p>
            <p className="text-sm text-gray-500 mt-1">Legal basis: performance of a contract or pre-contractual steps (Art. 7, V)</p>
          </div>
          <div className="bg-[var(--color-surface)] border border-[#FFCC99]/10 rounded-xl p-4">
            <p className="font-medium text-white">Sending a commercial proposal</p>
            <p className="text-sm text-gray-500 mt-1">Legal basis: legitimate interest of the controller (Art. 7, IX)</p>
          </div>
          <div className="bg-[var(--color-surface)] border border-[#FFCC99]/10 rounded-xl p-4">
            <p className="font-medium text-white">Marketing communications (only with consent)</p>
            <p className="text-sm text-gray-500 mt-1">Legal basis: data subject&apos;s consent (Art. 7, I)</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">4. Data Sharing</h2>
        <p>
          Your data is transmitted to the <strong className="text-white">Web3Forms</strong> service (web3forms.com) for processing and delivery of messages to our email. Web3Forms acts as a data processor and is subject to applicable data protection laws.
        </p>
        <p className="mt-3">
          We do not sell, rent or share your data with third parties for commercial or advertising purposes.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">5. Data Retention</h2>
        <p>
          We retain data for as long as necessary to fulfil the purpose for which it was collected or as required by law (Art. 16 of the LGPD). Contact data is kept for up to <strong className="text-white">5 (five) years</strong> for commercial relationship purposes and, after that period, is deleted or anonymized.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">6. Data Subject Rights</h2>
        <p>Under Art. 18 of the LGPD, you have the right to:</p>
        <ul className="list-disc list-inside mt-3 space-y-1 text-gray-400">
          <li>Confirm the existence of processing of your data</li>
          <li>Access the data we hold about you</li>
          <li>Correct incomplete, inaccurate or outdated data</li>
          <li>Request anonymization, blocking or deletion of unnecessary data</li>
          <li>Request data portability</li>
          <li>Withdraw consent at any time</li>
          <li>Object to processing in cases of non-compliance with the LGPD</li>
        </ul>
        <p className="mt-3">
          To exercise your rights, contact us at: <a href="mailto:contato@grupo-domus.com" className="text-[#FFCC99] hover:underline">contato@grupo-domus.com</a>. We will respond within <strong className="text-white">15 (fifteen) calendar days</strong>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">7. Security</h2>
        <p>
          We adopt appropriate technical and organizational measures to protect your data against unauthorized access, loss or destruction, including the use of HTTPS/TLS for secure transmission of information.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">8. Changes to this Policy</h2>
        <p>
          We reserve the right to update this Policy periodically. The revision date will always be indicated at the top of this page. Continued use of the website after changes constitutes acceptance of the new terms.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">9. Contact and Supervisory Authority</h2>
        <p>
          For questions about this Policy or the processing of your data, contact us at <a href="mailto:contato@grupo-domus.com" className="text-[#FFCC99] hover:underline">contato@grupo-domus.com</a>.
        </p>
        <p className="mt-3">
          If you do not receive a satisfactory response, you may contact the <strong className="text-white">Brazilian National Data Protection Authority (ANPD)</strong> at <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="text-[#FFCC99] hover:underline">www.gov.br/anpd</a>.
        </p>
      </section>
    </>
  );
}
