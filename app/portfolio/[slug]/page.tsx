import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

import { projects, getProjectBySlug } from '@/lib/projects';
import { Header } from '@/components/Header';
import { ImageGallery } from '@/components/ImageGallery';

/* ── Static params ─────────────────────────────────────────── */

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

/* ── Metadata ──────────────────────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Domus Soluções Digitais`,
    description: project.description,
  };
}

/* ── Page ──────────────────────────────────────────────────── */

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <Header />

      <main className="min-h-screen pt-28 pb-24 px-6 max-w-5xl mx-auto w-full">
        {/* Back */}
        <Link
          href="/#casos-de-sucesso"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#FFCC99] transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar para Cases
        </Link>

        {/* Hero do case */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full border ${project.sectorColor}`}>
              {project.sector}
            </span>
            <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/30">
              {project.category}
            </span>
          </div>

          <p className="text-sm text-[#FFCC99]/70 font-medium mb-2">{project.client}</p>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {project.title}
          </h1>

          <p className="text-lg text-gray-400 font-light leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-12">
          {project.techs.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-1.5 text-sm text-gray-400 bg-[#080028] px-3 py-1.5 rounded-lg border border-[#2a2250]"
            >
              <span className={`w-2 h-2 rounded-full ${tech.color}`} />
              {tech.name}
            </div>
          ))}
        </div>

        {/* Galeria de imagens reais */}
        {project.images.length > 0 ? (
          <section className="mb-16">
            <h2 className="text-xl font-semibold text-white mb-6">
              Galeria do Projeto
            </h2>
            <ImageGallery images={project.images} projectTitle={project.title} />
          </section>
        ) : (
          <div className="mb-16 rounded-2xl border border-dashed border-[#2a2250] bg-[#0f0535]/40 p-12 text-center">
            <p className="text-gray-500 text-sm">
              Imagens em breve — adicione screenshots em{' '}
              <code className="text-[#FFCC99]/60 text-xs bg-[#080028] px-2 py-0.5 rounded">
                /public/portfolio/{project.slug}/
              </code>
            </p>
          </div>
        )}

        {/* CTA de retorno */}
        <div className="border-t border-[#2a2250] pt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            Quer um projeto assim para o seu negócio?
          </p>
          <Link
            href="/#contato"
            className="bg-[#FFCC99] text-[#080028] px-7 py-3 rounded-full text-sm font-semibold hover:scale-105 hover:shadow-[0_0_24px_rgba(255,204,153,0.3)] transition-all duration-300 whitespace-nowrap"
          >
            Fale com um Especialista
          </Link>
        </div>
      </main>
    </>
  );
}
