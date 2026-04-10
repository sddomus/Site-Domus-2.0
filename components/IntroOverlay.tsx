'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export function IntroOverlay() {
  const [mounted, setMounted] = useState(false);
  const [vh, setVh] = useState(700);
  const { scrollY } = useScroll();

  // END coincide com o spacer: calc(100vh - 144px) → hero inicia em vh + 80
  const END = vh + 80;
  // Overlay some completamente em 88% do percurso — hero só aparece em 100%
  const scale       = useTransform(scrollY, [0, END],              [1, 16]);
  const opacity     = useTransform(scrollY, [END * 0.48, END * 0.88], [1, 0]);
  const hintOpacity = useTransform(scrollY, [0, END * 0.18],       [1, 0]);

  useEffect(() => {
    setMounted(true);
    setVh(window.innerHeight);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      style={{ opacity }}
      className="fixed inset-0 z-[200] bg-[#080028] flex flex-col items-center justify-center select-none pointer-events-none"
    >
      <motion.div
        style={{ scale }}
        className="origin-center"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Image
          src="/ovelha.png"
          alt=""
          width={160}
          height={160}
          className="object-contain"
          priority
        />
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
