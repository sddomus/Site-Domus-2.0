import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Domus Soluções Digitais',
  description: 'Política de Privacidade da Domus Soluções Digitais conforme a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).',
};

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg-main)] text-gray-100 px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-[#FFCC99] hover:underline text-sm mb-8 inline-block">
          ← Voltar ao início
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Política de <span className="text-[#FFCC99]">Privacidade</span>
        </h1>
        <p className="text-gray-500 text-sm mb-12">Última atualização: abril de 2026</p>

        <div className="prose prose-invert prose-lg max-w-none space-y-10 text-gray-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Identificação do Controlador</h2>
            <p>
              <strong className="text-white">Domus Soluções Digitais</strong>, pessoa jurídica de direito privado, com sede em Pelotas/RS — Brasil, é a controladora dos dados pessoais coletados neste site, nos termos da <strong className="text-white">Lei nº 13.709/2018 (Lei Geral de Proteção de Dados — LGPD)</strong>.
            </p>
            <p className="mt-3">
              Contato do responsável pelo tratamento de dados (DPO): <a href="mailto:sddomus@gmail.com" className="text-[#FFCC99] hover:underline">sddomus@gmail.com</a>
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
              Para exercer seus direitos, entre em contato pelo e-mail: <a href="mailto:sddomus@gmail.com" className="text-[#FFCC99] hover:underline">sddomus@gmail.com</a>. Responderemos no prazo de <strong className="text-white">15 (quinze) dias corridos</strong>.
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
              Em caso de dúvidas sobre esta Política ou sobre o tratamento de seus dados, entre em contato conosco pelo e-mail <a href="mailto:sddomus@gmail.com" className="text-[#FFCC99] hover:underline">sddomus@gmail.com</a>.
            </p>
            <p className="mt-3">
              Caso não obtenha resposta satisfatória, você pode acionar a <strong className="text-white">Autoridade Nacional de Proteção de Dados (ANPD)</strong> pelo portal <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="text-[#FFCC99] hover:underline">www.gov.br/anpd</a>.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
