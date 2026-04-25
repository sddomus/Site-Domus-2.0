'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export function IntroOverlay() {
  const [mounted, setMounted] = useState(false);
  const [vh, setVh] = useState(700);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();

  const maxScale = isMobile ? 10 : 16;
  const END = vh * 0.5;

  const scale        = useTransform(scrollY, [0, END],              [1, maxScale]);
  // ovelha e hint somem primeiro
  const sheepOpacity = useTransform(scrollY, [0, END * 0.45],       [1, 0]);
  const hintOpacity  = useTransform(scrollY, [0, END * 0.18],       [1, 0]);
  // fundo permanece sólido até quase o fim, depois desaparece rápido — sem vazar o hero
  const bgOpacity    = useTransform(scrollY, [END * 0.75, END],     [1, 0]);

  useEffect(() => {
    setMounted(true);
    setVh(window.innerHeight);
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[200] select-none pointer-events-none overflow-hidden w-screen h-[100dvh]">
      {/* Fundo sólido — some por último, de forma rápida, sem deixar o hero vazar */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 bg-[#080028] bg-grid-pattern"
      />

      {/* Ovelha */}
      <motion.div
        style={{ scale, opacity: sheepOpacity }}
        className="absolute inset-0 flex items-center justify-center origin-center"
      >
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Image
            src="/ovelha.png"
            alt=""
            width={160}
            height={160}
            className={`object-contain ${isMobile ? 'w-[100px] h-[100px]' : 'w-[160px] h-[160px]'}`}
            priority
          />
        </motion.div>
      </motion.div>

      {/* Hint "Role para explorar" */}
      <motion.div
        style={{ opacity: hintOpacity }}
        className="absolute bottom-12 left-0 right-0 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 tracking-widest uppercase">
          Role para explorar
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-[#FFCC99]/40 to-transparent"
        />
      </motion.div>
    </div>
  );
}
