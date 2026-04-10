import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Domus Soluções Digitais';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#080028',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,204,153,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,204,153,0.04) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Glow center */}
        <div
          style={{
            position: 'absolute',
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,204,153,0.08) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Top label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            backgroundColor: 'rgba(255,204,153,0.08)',
            border: '1px solid rgba(255,204,153,0.2)',
            borderRadius: 999,
            padding: '8px 20px',
            marginBottom: 40,
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#FFCC99' }} />
          <span style={{ color: '#FFCC99', fontSize: 16, letterSpacing: 2 }}>
            AGÊNCIA LOW-CODE &amp; IA
          </span>
        </div>

        {/* Logo */}
        <img
          src="https://domussd.com/logo-horizontal.png"
          width={360}
          height={80}
          style={{ objectFit: 'contain', marginBottom: 32 }}
        />

        {/* Tagline */}
        <div
          style={{
            color: '#9ca3af',
            fontSize: 22,
            fontWeight: 300,
            textAlign: 'center',
            maxWidth: 680,
            lineHeight: 1.6,
            marginBottom: 48,
          }}
        >
          Transformamos ideias em software que gera resultados.{'\n'}
          Entregamos em semanas o que outros levam meses.
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: 48 }}>
          {[
            { value: '21 dias', label: 'Entrega média' },
            { value: '100%', label: 'Projetos entregues' },
            { value: '10+', label: 'Clientes ativos' },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
              }}
            >
              <span style={{ color: '#FFCC99', fontSize: 28, fontWeight: 700 }}>{s.value}</span>
              <span style={{ color: '#6b7280', fontSize: 14 }}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: 'absolute',
            bottom: 32,
            color: 'rgba(255,204,153,0.35)',
            fontSize: 15,
            letterSpacing: 3,
          }}
        >
          domussd.com
        </div>
      </div>
    ),
    { ...size }
  );
}
