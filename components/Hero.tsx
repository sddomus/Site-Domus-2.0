'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

/* ── Typewriter ── */
const TYPEWRITER_PHRASES = ['Alta Velocidade', 'Resultados Reais', 'Tempo Recorde', 'Máxima Precisão'];

function TypewriterText() {
  const [displayed, setDisplayed] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = TYPEWRITER_PHRASES[phraseIndex];
    const speed = isDeleting ? 50 : 80;

    if (!isDeleting && displayed === current) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 1800);
      return;
    }
    if (isDeleting && displayed === '') {
      setIsDeleting(false);
      setPhraseIndex(i => (i + 1) % TYPEWRITER_PHRASES.length);
      return;
    }

    timeoutRef.current = setTimeout(() => {
      setDisplayed(isDeleting
        ? current.slice(0, displayed.length - 1)
        : current.slice(0, displayed.length + 1)
      );
    }, speed);

    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, isDeleting, phraseIndex]);

  return (
    <span className="animate-gradient-text">
      {displayed}
      <span className="inline-block w-[3px] h-[0.85em] bg-[#FFCC99] ml-1 align-middle animate-pulse" />
    </span>
  );
}

/* ── Terminal de Deploy ── */
// layout: fills full height of right column
const BUILD_STEPS = [
  { text: '$ npm run build', color: 'text-gray-400' },
  { text: '✓ Dependências resolvidas', color: 'text-emerald-400' },
  { text: '✓ Componentes compilados', color: 'text-emerald-400' },
  { text: '✓ Assets otimizados', color: 'text-emerald-400' },
  { text: '✓ Testes: 24/24 passed', color: 'text-emerald-400' },
  { text: '✓ Build concluído em 4.2s', color: 'text-emerald-400' },
  { text: '🚀 Deploy em produção!', color: 'text-[#FFCC99] font-semibold' },
];

function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState(1);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (visibleLines < BUILD_STEPS.length) {
      const delay = visibleLines === 0 ? 500 : visibleLines === BUILD_STEPS.length - 1 ? 600 : 380;
      const t = setTimeout(() => setVisibleLines(v => v + 1), delay);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setDone(false);
        setVisibleLines(1);
      }, 4000);
      setDone(true);
      return () => clearTimeout(t);
    }
  }, [visibleLines]);

  return (
    <motion.div
      animate={{ y: [-6, 6, -6] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="h-full glass-effect glow-border rounded-2xl p-5 shadow-2xl font-mono flex flex-col"
    >
      {/* Terminal header */}
      <div className="flex items-center gap-1.5 mb-4">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
        <span className="ml-2 text-xs text-gray-500 tracking-wide">deploy.sh</span>
        {done && <span className="ml-auto text-xs text-emerald-400 animate-pulse">● live</span>}
      </div>

      {/* Lines */}
      <div className="flex flex-col gap-1.5">
        {BUILD_STEPS.slice(0, visibleLines).map((step, i) => (
          <motion.div
            key={`${step.text}-${visibleLines}`}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className={`text-xs leading-relaxed ${step.color}`}
          >
            {step.text}
          </motion.div>
        ))}
        {visibleLines < BUILD_STEPS.length && (
          <span className="text-xs text-gray-500 animate-pulse">▋</span>
        )}
      </div>

      {/* Post-deploy metrics */}
      {done && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 pt-4 border-t border-[#FFCC99]/10 flex flex-col gap-3 flex-1"
        >
          <p className="text-[10px] text-gray-500 uppercase tracking-widest">Métricas ao vivo</p>
          {[
            { label: 'Tempo de resposta', value: '142ms', bar: 85, color: 'bg-emerald-400' },
            { label: 'Performance', value: '98/100', bar: 98, color: 'bg-[#FFCC99]' },
            { label: 'Uptime', value: '99.9%', bar: 99, color: 'bg-emerald-400' },
            { label: 'Requests/min', value: '1.2k', bar: 60, color: 'bg-blue-400' },
          ].map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.12 }}
              className="flex flex-col gap-1"
            >
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-gray-500">{m.label}</span>
                <span className="text-[10px] text-white font-medium">{m.value}</span>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${m.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${m.bar}%` }}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.12, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}

/* ── AI Streaming ── */
const AI_PROMPT = 'Crie um agente de atendimento para e-commerce';
const AI_RESPONSE = 'Claro! Vou configurar um agente com memória de contexto, integração ao seu CRM e respostas em tempo real...';

function AIStreamCard() {
  const [phase, setPhase] = useState<'prompt' | 'thinking' | 'response'>('prompt');
  const [responseText, setResponseText] = useState('');
  const charRef = useRef(0);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;

    if (phase === 'prompt') {
      t = setTimeout(() => setPhase('thinking'), 2200);
    } else if (phase === 'thinking') {
      t = setTimeout(() => { setPhase('response'); charRef.current = 0; setResponseText(''); }, 1200);
    } else {
      if (charRef.current < AI_RESPONSE.length) {
        t = setTimeout(() => {
          charRef.current += 1;
          setResponseText(AI_RESPONSE.slice(0, charRef.current));
        }, 28);
      } else {
        t = setTimeout(() => { setPhase('prompt'); setResponseText(''); }, 3500);
      }
    }
    return () => clearTimeout(t);
  }, [phase, responseText]);

  return (
    <motion.div
      animate={{ y: [8, -8, 8] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      className="flex-1 glass-effect glow-border rounded-2xl p-4 shadow-2xl flex flex-col"
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 rounded-full bg-[#FFCC99]/20 flex items-center justify-center">
          <span className="text-[10px] text-[#FFCC99]">AI</span>
        </div>
        <span className="text-xs text-gray-400 font-medium">Agente Domus</span>
        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
      </div>

      {/* Prompt bubble */}
      <div className="bg-white/5 rounded-xl rounded-bl-sm px-3 py-2 mb-2">
        <p className="text-[10px] text-gray-400 leading-relaxed">{AI_PROMPT}</p>
      </div>

      {/* Response bubble */}
      <div className="bg-[#FFCC99]/10 rounded-xl rounded-tl-sm px-3 py-2 min-h-[44px]">
        {phase === 'thinking' ? (
          <div className="flex items-center gap-1 h-full py-1">
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-[#FFCC99]/60"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
              />
            ))}
          </div>
        ) : (
          <p className="text-[10px] text-[#FFCC99] leading-relaxed">
            {responseText}
            {phase === 'response' && charRef.current < AI_RESPONSE.length && (
              <span className="inline-block w-[2px] h-[0.8em] bg-[#FFCC99] ml-0.5 align-middle animate-pulse" />
            )}
          </p>
        )}
      </div>
    </motion.div>
  );
}

/* ── Velocity Ring ── */
function VelocityCard() {
  const [progress, setProgress] = useState(0);
  const [cycle, setCycle] = useState(0);
  const circumference = 2 * Math.PI * 28;

  useEffect(() => {
    let p = 0;
    let interval: ReturnType<typeof setInterval>;
    let pauseTimeout: ReturnType<typeof setTimeout>;

    const start = setTimeout(() => {
      interval = setInterval(() => {
        p += 1;
        setProgress(p);
        if (p >= 100) {
          clearInterval(interval);
          pauseTimeout = setTimeout(() => {
            setProgress(0);
            setCycle(c => c + 1);
          }, 1800);
        }
      }, 25);
    }, 400);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
      clearTimeout(pauseTimeout);
    };
  }, [cycle]);

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      animate={{ y: [-5, 5, -5] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
      className="glass-effect glow-border rounded-2xl p-4 shadow-2xl"
    >
      <p className="text-[10px] text-gray-400 mb-3 uppercase tracking-wider">Velocidade</p>
      <div className="flex items-center gap-3">
        <div className="relative w-16 h-16 flex-shrink-0">
          <svg className="w-16 h-16 -rotate-90" viewBox="0 0 72 72">
            <circle cx="36" cy="36" r="28" fill="none" stroke="rgba(255,204,153,0.1)" strokeWidth="6" />
            <circle
              cx="36" cy="36" r="28"
              fill="none"
              stroke="#FFCC99"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              style={{ transition: 'stroke-dashoffset 0.05s linear' }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-sm font-bold text-white leading-none">{progress}<span className="text-[9px] text-gray-400">%</span></span>
          </div>
        </div>
        <div>
          <p className="text-white font-bold text-sm leading-none mb-1">21 dias</p>
          <p className="text-[10px] text-gray-500 leading-tight">entrega<br />média</p>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Floating Particles ── */
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${5 + (i * 17 + 11) % 90}%`,
  top: `${10 + (i * 23 + 7) % 80}%`,
  size: 2 + (i % 3),
  duration: `${5 + (i % 6)}s`,
  delay: `${(i * 0.4) % 4}s`,
  opacity: 0.2 + (i % 4) * 0.1,
}));

/* ── Hero ── */
export function Hero() {
  const [vh, setVh] = useState(700);
  const { scrollY } = useScroll();
  const END = vh * 0.5;
  // Hero pronto bem antes do overlay sumir → revelação imediata e clara
  const heroOpacity = useTransform(scrollY, [END * 0.2, END * 0.75], [0, 1]);

  useEffect(() => {
    setVh(window.innerHeight);
  }, []);

  return (
    <motion.section style={{ opacity: heroOpacity }} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-6">

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map(p => (
          <div
            key={p.id}
            className="absolute rounded-full bg-[#FFCC99]"
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              animation: `particle-drift ${p.duration} ${p.delay} ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start gap-8"
        >
          <div className="glass-effect glow-border px-4 py-2 rounded-full flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#FFCC99]" />
            <span className="text-sm font-medium text-gray-300">Agência Especializada Low-Code e IA</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1]">
            Inovação Digital em <br />
            <span className="block min-h-[2.5em] md:min-h-[1.2em]"><TypewriterText /></span>
          </h1>

          <p className="text-lg text-gray-400 max-w-xl font-light leading-relaxed">
            Aceleramos a transformação do seu negócio com soluções sob medida, design focado em conversão e tecnologia de ponta.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="#contato"
              className="relative overflow-hidden w-full sm:w-auto bg-[#FFCC99] text-[#080028] px-8 py-4 rounded-full text-base font-semibold hover:scale-105 hover:shadow-[0_0_30px_rgba(255,204,153,0.3)] transition-all duration-300 text-center flex items-center justify-center gap-2 group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Fale com um Especialista
                <ArrowRight className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
            </Link>
            <Link
              href="#casos-de-sucesso"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-white border border-[#FFCC99]/30 hover:bg-[#FFCC99]/10 transition-all duration-300 text-center"
            >
              Ver Casos de Sucesso
            </Link>
          </div>
        </motion.div>

        {/* Right Side: Cards */}
        <div className="hidden lg:grid grid-cols-[160px_1fr] gap-3 h-[460px]">
          <div className="flex flex-col gap-3">
            <VelocityCard />
            <AIStreamCard />
          </div>
          <TerminalCard />
        </div>
      </div>
    </motion.section>
  );
}
