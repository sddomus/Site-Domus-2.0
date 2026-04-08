'use client';

import { useEffect, useState } from 'react';

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const handleLeave = () => setVisible(false);
    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseleave', handleLeave);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[1] hidden md:block"
      style={{
        width: '500px',
        height: '500px',
        left: pos.x - 250,
        top: pos.y - 250,
        background: 'radial-gradient(circle, rgba(255,204,153,0.07) 0%, transparent 65%)',
        transition: 'opacity 0.3s ease',
        opacity: visible ? 1 : 0,
        borderRadius: '50%',
      }}
    />
  );
}
