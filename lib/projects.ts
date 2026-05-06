export type Tech = {
  name: string;
  color: string;
};

export type Project = {
  slug: string;
  category: string;
  sector: string;
  client: string;
  sectorColor: string;
  title: string;
  description: string;
  techs: Tech[];
  /** Caminhos relativos à pasta /public — ex: '/portfolio/conect-frota/01.png' */
  images: string[];
};

export const projects: Project[] = [
  {
    slug: 'conect-frota',
    category: 'Gestão',
    sector: 'Transporte',
    client: 'Contratta Technology Ltda',
    sectorColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    title: 'Sistema Conect Frota',
    description:
      'Plataforma web e mobile para gestão de motoristas autônomos (TAC), controle de multas, IPVA, DPVAT e licenciamento obrigatório da frota de veículos.',
    techs: [
      { name: 'Web Desktop', color: 'bg-blue-500' },
      { name: 'Mobile', color: 'bg-indigo-500' },
      { name: 'Gestão de Frota', color: 'bg-slate-400' },
    ],
    images: [
      '/portfolio/conect-frota/01.png',
      '/portfolio/conect-frota/02.png',
      '/portfolio/conect-frota/03.png',
      '/portfolio/conect-frota/04.png',
      '/portfolio/conect-frota/05.png',
      '/portfolio/conect-frota/06.png',
      '/portfolio/conect-frota/07.png',
      '/portfolio/conect-frota/08.png',
    ],
  },
  {
    slug: 'monica-soltau',
    category: 'Educação',
    sector: 'Ed-Tech',
    client: 'MS Jogos Educativos Ltda',
    sectorColor: 'bg-green-500/10 text-green-400 border-green-500/20',
    title: 'Portal Mônica Soltau',
    description:
      'Software customizado e aplicativo para consulta e impressão de conteúdos educacionais alinhados à BNCC, com gestão de usuários por município, escola e perfil de acesso.',
    techs: [
      { name: 'Web App', color: 'bg-green-500' },
      { name: 'Mobile', color: 'bg-teal-500' },
      { name: 'BNCC', color: 'bg-emerald-400' },
    ],
    images: [
      '/portfolio/monica-soltau/01.png',
      '/portfolio/monica-soltau/02.png',
      '/portfolio/monica-soltau/03.png',
      '/portfolio/monica-soltau/04.png',
      '/portfolio/monica-soltau/05.png',
      '/portfolio/monica-soltau/06.png',
      '/portfolio/monica-soltau/07.png',
      '/portfolio/monica-soltau/08.png',
      '/portfolio/monica-soltau/09.png',
      '/portfolio/monica-soltau/10.png',
      '/portfolio/monica-soltau/11.png',
    ],
  },
  {
    slug: 'sabbado',
    category: 'Web Apps',
    sector: 'Licitações',
    client: 'Grupo Sabbado',
    sectorColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    title: 'Portal Integrado Sabbado',
    description:
      'Portal institucional integrado com navegação segmentada nas três frentes do Grupo Sabbado — Assessoria, Consultoria e Capacitação em Licitações — em um único endereço web.',
    techs: [
      { name: 'Portal Institucional', color: 'bg-purple-500' },
      { name: 'Multi-seção', color: 'bg-indigo-400' },
      { name: 'SEO', color: 'bg-pink-400' },
    ],
    images: [
      '/portfolio/sabbado/01.png',
      '/portfolio/sabbado/02.png',
      '/portfolio/sabbado/03.png',
      '/portfolio/sabbado/04.png',
      '/portfolio/sabbado/05.png',
      '/portfolio/sabbado/06.png',
      '/portfolio/sabbado/07.png',
      '/portfolio/sabbado/08.png',
      '/portfolio/sabbado/09.png',
    ],
  },
  {
    slug: 'hk-midia',
    category: 'Aplicativos Mobile',
    sector: 'Educação & Saúde',
    client: 'HK Mídia e Acessibilidade Ltda',
    sectorColor: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
    title: 'Plataforma HK Mídia',
    description:
      'Aplicação web e mobile para gestão de programa de educação: monitoramento de famílias, alunos e escolas, e comunicação integrada entre alunos, familiares, professores e profissionais de saúde.',
    techs: [
      { name: 'Web App', color: 'bg-teal-500' },
      { name: 'Mobile', color: 'bg-cyan-400' },
      { name: 'Multi-perfil', color: 'bg-blue-400' },
    ],
    images: [
      '/portfolio/hk-midia/01.png',
      '/portfolio/hk-midia/02.png',
      '/portfolio/hk-midia/03.png',
      '/portfolio/hk-midia/04.png',
      '/portfolio/hk-midia/05.png',
      '/portfolio/hk-midia/06.png',
      '/portfolio/hk-midia/07.png',
      '/portfolio/hk-midia/08.png',
      '/portfolio/hk-midia/09.png',
      '/portfolio/hk-midia/10.png',
    ],
  },
  {
    slug: 'escola-tem-voz',
    category: 'Educação',
    sector: 'GovTech',
    client: 'Motriz',
    sectorColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    title: 'Minha Escola tem Voz',
    description:
      'Aplicação web com suporte a múltiplos idiomas, formulários configuráveis, envio de lembretes, perfil de acesso para Secretaria de Educação, métricas de uso e dashboard analítico.',
    techs: [
      { name: 'Web App', color: 'bg-orange-500' },
      { name: 'Multi-idioma', color: 'bg-yellow-400' },
      { name: 'Dashboard', color: 'bg-red-400' },
    ],
    images: [
      '/portfolio/escola-tem-voz/01.png',
      '/portfolio/escola-tem-voz/02.png',
      '/portfolio/escola-tem-voz/03.png',
      '/portfolio/escola-tem-voz/04.png',
      '/portfolio/escola-tem-voz/05.png',
      '/portfolio/escola-tem-voz/06.png',
      '/portfolio/escola-tem-voz/07.png',
      '/portfolio/escola-tem-voz/08.png',
      '/portfolio/escola-tem-voz/09.png',
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
