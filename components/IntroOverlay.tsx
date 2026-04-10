'use client';

import { useScroll, useTransform, motion } from 'motion/react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export function IntroOverlay() {
  const { scrollY } = useScroll();
  const [mounted, setMounted] = useState(false);

  // Todos os hooks antes do early return
  const scale = useTransform(scrollY, [0, 420], [1, 16]);
  const overlayOpacity = useTransform(scrollY, [260, 420], [1, 0]);
  const hintOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      style={{ opacity: overlayOpacity }}
      className="fixed inset-0 z-[200] bg-[#080028] flex flex-col items-center justify-center pointer-events-none select-none"
    >
      {/* Ovelha com zoom */}
      <motion.div style={{ scale }} className="origin-center">
        <Image
          src="/ovelha.png"
          alt=""
          width={160}
          height={160}
          className="object-contain opacity-80"
        />
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        style={{ opacity: hintOpacity }}
        className="absolute bottom-12 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 tracking-widest uppercase">Role para explorar</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-[#FFCC99]/40 to-transparent"
        />
      </motion.div>
    </motion.div>
  );
}
