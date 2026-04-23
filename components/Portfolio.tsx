'use client';

import { useState } from 'react';
import { motion } from 'motion/react';

const filters = ['Todos', 'Web Apps', 'Aplicativos Mobile', 'Educação', 'Gestão'];

/* ── Visuals ─────────────────────────────────────────────── */

function VisualConectFrota() {
  return (
    <div className="w-full h-full bg-slate-900 p-5 flex flex-col gap-3 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
      {/* Header bar */}
      <div className="flex items-center justify-between mb-1">
        <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Conect Frota</div>
        <div className="flex items-center gap-1 text-[10px] text-emerald-400"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" /> Online</div>
      </div>
      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2">
        {[{ label: 'Veículos', val: '142' }, { label: 'TACs Ativos', val: '38' }, { label: 'Multas', val: '7' }].map((s, i) => (
          <div key={i} className="bg-[#080028]/60 border border-[#2a2250] rounded-lg p-2 text-center">
            <div className="text-base font-bold text-white">{s.val}</div>
            <div className="text-[9px] text-slate-400">{s.label}</div>
          </div>
        ))}
      </div>
      {/* Vehicle list */}
      <div className="flex flex-col gap-1.5 transform group-hover:scale-[1.02] transition-transform duration-500">
        {[
          { placa: 'ABC-1234', status: 'Em rota', color: 'bg-emerald-500' },
          { placa: 'XYZ-5678', status: 'Manutenção', color: 'bg-yellow-500' },
          { placa: 'DEF-9012', status: 'Disponível', color: 'bg-blue-500' },
        ].map((v, i) => (
          <div key={i} className="flex items-center justify-between bg-[#080028]/40 border border-[#2a2250] rounded-md px-3 py-1.5">
            <div className="flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full ${v.color}`} />
              <span className="text-[10px] text-white font-mono">{v.placa}</span>
            </div>
            <span className="text-[9px] text-slate-400">{v.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function VisualMonicaSoltau() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-green-950 to-slate-900 p-5 flex flex-col gap-3 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-500/10 rounded-full blur-2xl" />
      <div className="text-[10px] text-green-400 font-semibold uppercase tracking-wider mb-1">Portal Mônica Soltau</div>
      {/* Filter chips */}
      <div className="flex flex-wrap gap-1.5">
        {['BNCC', 'Habilidades', 'Componentes', 'Palavras-chave'].map((tag, i) => (
          <span key={i} className={`px-2 py-0.5 rounded-full text-[9px] font-medium border ${i === 0 ? 'bg-green-500/20 text-green-300 border-green-500/30' : 'bg-white/5 text-slate-400 border-white/10'}`}>{tag}</span>
        ))}
      </div>
      {/* Content cards */}
      <div className="flex flex-col gap-2 transform group-hover:scale-[1.02] transition-transform duration-500">
        {['Questão — Campo de Experiência: Natureza', 'Habilidade EF01MA01 — Números Naturais', 'Atividade — Componente: Matemática'].map((item, i) => (
          <div key={i} className="bg-[#080028]/50 border border-green-500/10 rounded-lg px-3 py-2 flex items-center justify-between">
            <span className="text-[10px] text-slate-300 truncate pr-2">{item}</span>
            <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
              <div className="w-2 h-2 rounded-sm bg-green-400/60" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-auto flex items-center gap-2">
        <div className="h-1 flex-1 bg-[#2a2250] rounded-full overflow-hidden">
          <div className="h-full w-3/4 bg-green-500/50 rounded-full" />
        </div>
        <span className="text-[9px] text-slate-400">3 municípios · 18 escolas</span>
      </div>
    </div>
  );
}

function VisualSabbado() {
  return (
    <div className="w-full h-full p-5 flex items-center justify-center relative bg-indigo-950">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-purple-900/20" />
      {/* Browser mockup */}
      <div className="w-full max-w-xs bg-white rounded-xl shadow-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-500 relative z-10">
        <div className="h-7 bg-gray-100 border-b border-gray-200 flex items-center px-3 gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <div className="flex-1 h-3 bg-gray-200 rounded-full mx-2" />
        </div>
        {/* Three-column nav representing 3 fronts of Grupo Sabbado */}
        <div className="flex border-b border-gray-100">
          {['Assessoria', 'Consultoria', 'Capacitação'].map((tab, i) => (
            <div key={i} className={`flex-1 py-1.5 text-center text-[8px] font-semibold ${i === 0 ? 'text-indigo-600 border-b-2 border-indigo-500' : 'text-gray-400'}`}>{tab}</div>
          ))}
        </div>
        <div className="p-3 flex flex-col gap-2">
          <div className="w-2/3 h-3 bg-gray-200 rounded" />
          <div className="w-full h-2 bg-gray-100 rounded" />
          <div className="w-5/6 h-2 bg-gray-100 rounded" />
          <div className="w-1/3 h-6 bg-indigo-500/80 rounded mt-1" />
        </div>
      </div>
    </div>
  );
}

function VisualHKMidia() {
  return (
    <div className="w-full h-full flex items-center justify-center relative bg-teal-950">
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/40 to-blue-900/20" />
      <div className="flex gap-3 relative z-10 items-start transform group-hover:scale-105 transition-transform duration-500">
        {/* Mobile */}
        <div className="w-28 h-52 bg-black border-4 border-gray-800 rounded-[1.5rem] overflow-hidden shadow-2xl">
          <div className="bg-[#0f1a2e] w-full h-full pt-5 px-2 flex flex-col gap-2">
            <div className="text-[8px] text-teal-400 font-bold">Minha Turma</div>
            {[{ name: 'João S.', role: 'Aluno' }, { name: 'Profa. Ana', role: 'Professora' }, { name: 'Dra. Lima', role: 'Saúde' }].map((p, i) => (
              <div key={i} className="flex items-center gap-1.5 bg-white/5 rounded-md px-2 py-1">
                <div className="w-4 h-4 rounded-full bg-teal-500/30 flex-shrink-0" />
                <div>
                  <div className="text-[8px] text-white font-medium">{p.name}</div>
                  <div className="text-[7px] text-slate-400">{p.role}</div>
                </div>
              </div>
            ))}
            <div className="mt-auto bg-teal-500/20 rounded-md p-1.5 text-[7px] text-teal-300 text-center">Nova mensagem ✓</div>
          </div>
        </div>
        {/* Stat card */}
        <div className="flex flex-col gap-2 mt-6">
          {[{ label: 'Famílias', val: '240' }, { label: 'Escolas', val: '12' }].map((s, i) => (
            <div key={i} className="bg-[#080028]/70 border border-teal-500/20 rounded-xl p-3 w-24 text-center">
              <div className="text-lg font-bold text-white">{s.val}</div>
              <div className="text-[9px] text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VisualMotriz() {
  return (
    <div className="w-full h-full bg-orange-950/60 p-5 flex flex-col gap-3 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="flex items-center justify-between">
        <div className="text-[10px] text-orange-400 font-semibold uppercase tracking-wider">Minha Escola tem Voz</div>
        <div className="flex gap-1">
          {['PT', 'EN', 'ES'].map((lang, i) => (
            <span key={i} className={`text-[8px] px-1.5 py-0.5 rounded border ${i === 0 ? 'bg-orange-500/20 border-orange-500/40 text-orange-300' : 'border-white/10 text-slate-500'}`}>{lang}</span>
          ))}
        </div>
      </div>
      {/* Dashboard metrics */}
      <div className="grid grid-cols-2 gap-2 transform group-hover:scale-[1.02] transition-transform duration-500">
        <div className="bg-[#080028]/50 border border-orange-500/10 rounded-lg p-2">
          <div className="text-[9px] text-slate-400 mb-1">Formulários</div>
          <div className="text-xl font-bold text-white">1.840</div>
          <div className="w-full h-1 bg-gray-700 mt-1 rounded-full overflow-hidden">
            <div className="w-4/5 h-full bg-orange-500/60 rounded-full" />
          </div>
        </div>
        <div className="bg-[#080028]/50 border border-orange-500/10 rounded-lg p-2">
          <div className="text-[9px] text-slate-400 mb-1">Escolas</div>
          <div className="text-xl font-bold text-white">96</div>
          <div className="flex gap-0.5 mt-1">
            {[1,2,3,4].map(i => <span key={i} className="w-2 h-2 rounded-full bg-orange-400" />)}
          </div>
        </div>
      </div>
      {/* Bar chart */}
      <div className="flex-1 flex items-end gap-1 bg-[#080028]/30 rounded-lg p-2">
        {[60, 75, 50, 90, 65, 80, 95].map((h, i) => (
          <motion.div
            key={i}
            className={`w-full rounded-t ${i === 6 ? 'bg-orange-400' : 'bg-orange-500/30'}`}
            style={{ height: `${h}%` }}
            animate={{ height: [`${h}%`, `${Math.max(20, h - 15)}%`, `${h}%`] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Data ────────────────────────────────────────────────── */

const projects = [
  {
    category: 'Gestão',
    sector: 'Transporte',
    client: 'Contratta Technology Ltda',
    sectorColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    title: 'Sistema Conect Frota',
    description: 'Plataforma web e mobile para gestão de motoristas autônomos (TAC), controle de multas, IPVA, DPVAT e licenciamento obrigatório da frota de veículos.',
    techs: [
      { name: 'Web Desktop', color: 'bg-blue-500' },
      { name: 'Mobile', color: 'bg-indigo-500' },
      { name: 'Gestão de Frota', color: 'bg-slate-400' },
    ],
    Visual: VisualConectFrota,
  },
  {
    category: 'Educação',
    sector: 'Ed-Tech',
    client: 'MS Jogos Educativos Ltda',
    sectorColor: 'bg-green-500/10 text-green-400 border-green-500/20',
    title: 'Portal Mônica Soltau',
    description: 'Software customizado e aplicativo para consulta e impressão de conteúdos educacionais alinhados à BNCC, com gestão de usuários por município, escola e perfil de acesso.',
    techs: [
      { name: 'Web App', color: 'bg-green-500' },
      { name: 'Mobile', color: 'bg-teal-500' },
      { name: 'BNCC', color: 'bg-emerald-400' },
    ],
    Visual: VisualMonicaSoltau,
  },
  {
    category: 'Web Apps',
    sector: 'Licitações',
    client: 'Grupo Sabbado',
    sectorColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    title: 'Portal Integrado Sabbado',
    description: 'Portal institucional integrado com navegação segmentada nas três frentes do Grupo Sabbado — Assessoria, Consultoria e Capacitação em Licitações — em um único endereço web.',
    techs: [
      { name: 'Portal Institucional', color: 'bg-purple-500' },
      { name: 'Multi-seção', color: 'bg-indigo-400' },
      { name: 'SEO', color: 'bg-pink-400' },
    ],
    Visual: VisualSabbado,
  },
  {
    category: 'Aplicativos Mobile',
    sector: 'Educação & Saúde',
    client: 'HK Mídia e Acessibilidade Ltda',
    sectorColor: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
    title: 'Plataforma HK Mídia',
    description: 'Aplicação web e mobile para gestão de programa de educação: monitoramento de famílias, alunos e escolas, e comunicação integrada entre alunos, familiares, professores e profissionais de saúde.',
    techs: [
      { name: 'Web App', color: 'bg-teal-500' },
      { name: 'Mobile', color: 'bg-cyan-400' },
      { name: 'Multi-perfil', color: 'bg-blue-400' },
    ],
    Visual: VisualHKMidia,
  },
  {
    category: 'Educação',
    sector: 'GovTech',
    client: 'Motriz',
    sectorColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    title: 'Minha Escola tem Voz',
    description: 'Aplicação web com suporte a múltiplos idiomas, formulários configuráveis, envio de lembretes, perfil de acesso para Secretaria de Educação, métricas de uso e dashboard analítico.',
    techs: [
      { name: 'Web App', color: 'bg-orange-500' },
      { name: 'Multi-idioma', color: 'bg-yellow-400' },
      { name: 'Dashboard', color: 'bg-red-400' },
    ],
    Visual: VisualMotriz,
  },
];

/* ── Component ───────────────────────────────────────────── */

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filtered = activeFilter === 'Todos'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="casos-de-sucesso" className="scroll-mt-24 px-6 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f0535] border border-[#FFCC99]/10 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#FFCC99]" />
          <span className="text-xs font-medium text-gray-300">Nossos Cases</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Casos de <span className="text-[#FFCC99] italic">Sucesso</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
          Projetos reais entregues para empresas que confiaram na Domus para transformar seus desafios em soluções digitais.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              activeFilter === filter
                ? 'bg-[#FFCC99] text-[#080028] shadow-[0_0_20px_rgba(255,204,153,0.2)]'
                : 'border border-[#2a2250] bg-[#0f0535]/50 hover:bg-[#0f0535] text-gray-300 hover:text-white'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid uniforme */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="group bg-[var(--color-surface)] border border-[#2a2250] rounded-2xl overflow-hidden hover:border-[#FFCC99]/50 transition-all duration-300 shadow-xl shadow-black/20 flex flex-col"
          >
            {/* Visual Preview */}
            <div className="relative overflow-hidden h-56 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0535] to-transparent z-10 opacity-50 pointer-events-none" />
              <project.Visual />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className={`px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full border ${project.sectorColor}`}>
                  {project.sector}
                </span>
                <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/30">
                  {project.category}
                </span>
              </div>

              <p className="text-[11px] text-[#FFCC99]/70 mb-1 font-medium">{project.client}</p>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FFCC99] transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techs.map(tech => (
                  <div key={tech.name} className="flex items-center gap-1.5 text-xs text-gray-500 bg-[#080028] px-2.5 py-1 rounded border border-[#2a2250]">
                    <span className={`w-1.5 h-1.5 rounded-full ${tech.color}`} />
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
