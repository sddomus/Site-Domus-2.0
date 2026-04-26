'use client';

import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export function IntroOverlay() {
  const [mounted, setMounted] = useState(false);
  const [vh, setVh] = useState(700);
  const [isMobile, setIsMobile] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const maxScale = isMobile ? 10 : 16;
  const END = vh * 0.5;

  const scale        = useTransform(scrollY, [0, END],                [1, maxScale]);
  // Ovelha some antes do fundo para não deixar traços sobre o hero
  const sheepOpacity = useTransform(scrollY, [END * 0.6, END * 0.78], [1, 0]);
  // Fundo some rápido no final — hero já está visível e claro por baixo
  const opacity      = useTransform(scrollY, [END * 0.8, END],        [1, 0]);
  const hintOpacity  = useTransform(scrollY, [0, END * 0.18],         [1, 0]);

  // Esconde via DOM após animação — sem re-render, sem artefatos
  useMotionValueEvent(opacity, 'change', (v) => {
    if (divRef.current) {
      divRef.current.style.visibility = v < 0.01 ? 'hidden' : 'visible';
    }
  });

  useEffect(() => {
    setMounted(true);
    setVh(window.innerHeight);
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      ref={divRef}
      style={{ opacity }}
      className="fixed inset-0 z-[200] bg-[#080028] bg-grid-pattern flex flex-col items-center justify-center select-none pointer-events-none overflow-hidden w-screen h-[100dvh]"
    >
      {/* sheep: scale + fade próprio; blink no filho para não conflitar */}
      <motion.div style={{ scale, opacity: sheepOpacity }} className="origin-center">
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

      <motion.div
        style={{ opacity: hintOpacity }}
        className="absolute bottom-12 flex flex-col items-center gap-2"
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
    </motion.div>
  );
}
