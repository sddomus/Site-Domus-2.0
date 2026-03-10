'use client';

import { Star } from 'lucide-react';

const technologies = [
  'Next.js',
  'React',
  'HTML',
  'Tailwind CSS',
  'Node.js',
  'Supabase',
  'IA',
  'TypeScript',
  'FlutterFlow',
  'AWS',
];

export function TechMarquee() {
  // Duplicamos o array para criar o efeito de loop infinito perfeito
  const duplicatedTech = [...technologies, ...technologies];

  return (
    <div 
      className="w-full py-12 overflow-hidden" 
      style={{ 
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
      }}
    >
      <div className="flex w-max animate-marquee items-center gap-8">
        {duplicatedTech.map((tech, index) => (
          <div key={index} className="flex items-center gap-8">
            <span className="text-xl md:text-2xl font-bold text-gray-400/80 tracking-tight whitespace-nowrap">
              {tech}
            </span>
            <Star className="w-4 h-4 text-[#FFCC99]/50 fill-[#FFCC99]/50" />
          </div>
        ))}
      </div>
    </div>
  );
}
