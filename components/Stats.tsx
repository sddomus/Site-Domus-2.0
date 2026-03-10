'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';

function Counter({ from, to, duration = 2, suffix = '' }: { from: number, to: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export function Stats() {
  const stats = [
    { value: 10, suffix: '+', label: 'Projetos' },
    { value: 98, suffix: '%', label: 'Satisfação' },
    { value: 3, suffix: '+', label: 'Anos' },
    { value: 0, suffix: '', label: 'Atrasos', textValue: 'Zero' },
  ];

  return (
    <section className="w-full bg-[var(--color-bg-main)] border-y border-[#FFCC99]/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-[#FFCC99]/10">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <div className="text-4xl md:text-5xl font-bold text-[#FFCC99] mb-2 tracking-tighter">
                {stat.textValue ? stat.textValue : <Counter from={0} to={stat.value} suffix={stat.suffix} />}
              </div>
              <div className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
