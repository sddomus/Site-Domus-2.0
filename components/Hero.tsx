'use client';

import { motion } from 'motion/react';
import { Link } from '@/lib/navigation';
import { ArrowRight, Zap } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { useTranslations } from 'next-intl';

function TypewriterText({ phrases }: { phrases: string[] }) {
  const [displayed, setDisplayed] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const speed = isDeleting ? 50 : 80;

    if (!isDeleting && displayed === current) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 1800);
      return;
    }
    if (isDeleting && displayed === '') {
      setIsDeleting(false);
      setPhraseIndex(i => (i + 1) % phrases.length);
      return;
    }

    timeoutRef.current = setTimeout(() => {
      setDisplayed(isDeleting
        ? current.slice(0, displayed.length - 1)
        : current.slice(0, displayed.length + 1)
      );
    }, speed);

    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, isDeleting, phraseIndex, phrases]);

  return (
    <span className="animate-gradient-text">
      {displayed}
      <span className="inline-block w-[3px] h-[0.85em] bg-[#FFCC99] ml-1 align-middle animate-pulse" />
    </span>
  );
}

function TerminalCard() {
  const t = useTranslations('hero.terminal');
  const steps = t.raw('steps') as { text: string; color: string }[];

  const [visibleLines, setVisibleLines] = useState(1);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (visibleLines < steps.length) {
      const delay = visibleLines === 0 ? 500 : visibleLines === steps.length - 1 ? 600 : 380;
      const timer = setTimeout(() => setVisibleLines(v => v + 1), delay);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setDone(false);
        setVisibleLines(1);
      }, 4000);
      setDone(true);
      return () => clearTimeout(timer);
    }
  }, [visibleLines, steps.length]);

  return (
    <motion.div
      animate={{ y: [-6, 6, -6] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="h-full glass-effect glow-border rounded-2xl p-5 shadow-2xl font-mono flex flex-col"
    >
      <div className="flex items-center gap-1.5 mb-4">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
        <span className="ml-2 text-xs text-gray-500 tracking-wide">deploy.sh</span>
        {done && <span className="ml-auto text-xs text-emerald-400 animate-pulse">● live</span>}
      </div>

      <div className="flex flex-col gap-1.5">
        {steps.slice(0, visibleLines).map((step, i) => (
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
        {visibleLines < steps.length && (
          <span className="text-xs text-gray-500 animate-pulse">▋</span>
        )}
      </div>

      {done && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 pt-4 border-t border-[#FFCC99]/10 flex flex-col gap-3 flex-1"
        >
          <p className="text-[10px] text-gray-500 uppercase tracking-widest">{t('metricsLabel')}</p>
          {[
            { labelKey: 'responseTime', value: '142ms', bar: 85, color: 'bg-emerald-400' },
            { labelKey: 'performance', value: '98/100', bar: 98, color: 'bg-[#FFCC99]' },
            { labelKey: 'uptime', value: '99.9%', bar: 99, color: 'bg-emerald-400' },
            { labelKey: 'requestsPerMin', value: '1.2k', bar: 60, color: 'bg-blue-400' },
          ].map((m, i) => (
            <motion.div
              key={m.labelKey}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.12 }}
              className="flex flex-col gap-1"
            >
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-gray-500">{t(`metrics.${m.labelKey}`)}</span>
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

function AIStreamCard() {
  const t = useTranslations('hero.aiCard');
  const aiPrompt = t('prompt');
  const aiResponse = t('response');

  const [phase, setPhase] = useState<'prompt' | 'thinking' | 'response'>('prompt');
  const [responseText, setResponseText] = useState('');
  const charRef = useRef(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (phase === 'prompt') {
      timer = setTimeout(() => setPhase('thinking'), 2200);
    } else if (phase === 'thinking') {
      timer = setTimeout(() => { setPhase('response'); charRef.current = 0; setResponseText(''); }, 1200);
    } else {
      if (charRef.current < aiResponse.length) {
        timer = setTimeout(() => {
          charRef.current += 1;
          setResponseText(aiResponse.slice(0, charRef.current));
        }, 28);
      } else {
        timer = setTimeout(() => { setPhase('prompt'); setResponseText(''); }, 3500);
      }
    }
    return () => clearTimeout(timer);
  }, [phase, responseText, aiResponse]);

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
        <span className="text-xs text-gray-400 font-medium">{t('agentName')}</span>
        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
      </div>

      <div className="bg-white/5 rounded-xl rounded-bl-sm px-3 py-2 mb-2">
        <p className="text-[10px] text-gray-400 leading-relaxed">{aiPrompt}</p>
      </div>

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
            {phase === 'response' && charRef.current < aiResponse.length && (
              <span className="inline-block w-[2px] h-[0.8em] bg-[#FFCC99] ml-0.5 align-middle animate-pulse" />
            )}
          </p>
        )}
      </div>
    </motion.div>
  );
}

function VelocityCard() {
  const t = useTranslations('hero.velocityCard');
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
      <p className="text-[10px] text-gray-400 mb-3 uppercase tracking-wider">{t('label')}</p>
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
          <p className="text-white font-bold text-sm leading-none mb-1">{t('days')}</p>
          <p className="text-[10px] text-gray-500 leading-tight whitespace-pre-line">{t('subtitle')}</p>
        </div>
      </div>
    </motion.div>
  );
}

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${5 + (i * 17 + 11) % 90}%`,
  top: `${10 + (i * 23 + 7) % 80}%`,
  size: 2 + (i % 3),
  duration: `${5 + (i % 6)}s`,
  delay: `${(i * 0.4) % 4}s`,
  opacity: 0.2 + (i % 4) * 0.1,
}));

export function Hero() {
  const t = useTranslations('hero');
  const phrases = t.raw('typewriterPhrases') as string[];

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-6">
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start gap-8"
        >
          <div className="glass-effect glow-border px-4 py-2 rounded-full flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#FFCC99]" />
            <span className="text-sm font-medium text-gray-300">{t('badge')}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1]">
            {t('headline')} <br />
            <span className="block min-h-[2.5em] md:min-h-[1.2em]"><TypewriterText phrases={phrases} /></span>
          </h1>

          <p className="text-lg text-gray-400 max-w-xl font-light leading-relaxed">
            {t('description')}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="#contato"
              className="relative overflow-hidden w-full sm:w-auto bg-[#FFCC99] text-[#080028] px-8 py-4 rounded-full text-base font-semibold hover:scale-105 hover:shadow-[0_0_30px_rgba(255,204,153,0.3)] transition-all duration-300 text-center flex items-center justify-center gap-2 group"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t('ctaPrimary')}
                <ArrowRight className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
            </Link>
            <Link
              href="#casos-de-sucesso"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-white border border-[#FFCC99]/30 hover:bg-[#FFCC99]/10 transition-all duration-300 text-center"
            >
              {t('ctaSecondary')}
            </Link>
          </div>
        </motion.div>

        <div className="hidden lg:grid grid-cols-[160px_1fr] gap-3 h-[460px]">
          <div className="flex flex-col gap-3">
            <VelocityCard />
            <AIStreamCard />
          </div>
          <TerminalCard />
        </div>
      </div>
    </section>
  );
}
