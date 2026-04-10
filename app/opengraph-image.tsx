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
          fontFamily: 'Georgia, serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid lines */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,204,153,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,204,153,0.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            display: 'flex',
          }}
        />

        {/* Radial glow */}
        <div
          style={{
            position: 'absolute',
            width: 700,
            height: 700,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,204,153,0.07) 0%, transparent 65%)',
            top: '50%',
            left: '50%',
            marginTop: -350,
            marginLeft: -350,
            display: 'flex',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            backgroundColor: 'rgba(255,204,153,0.1)',
            border: '1px solid rgba(255,204,153,0.25)',
            borderRadius: 999,
            padding: '8px 24px',
            marginBottom: 36,
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#FFCC99', display: 'flex' }} />
          <span style={{ color: '#FFCC99', fontSize: 15, letterSpacing: 3, display: 'flex' }}>
            AGÊNCIA LOW-CODE &amp; IA
          </span>
        </div>

        {/* Logo text */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            marginBottom: 28,
          }}
        >
          <span
            style={{
              fontSize: 80,
              fontWeight: 700,
              color: '#FFCC99',
              letterSpacing: 8,
              lineHeight: 1,
            }}
          >
            DOMUS
          </span>
        </div>

        {/* Divider */}
        <div
          style={{
            width: 60,
            height: 2,
            backgroundColor: 'rgba(255,204,153,0.3)',
            marginBottom: 28,
            display: 'flex',
          }}
        />

        {/* Tagline */}
        <div
          style={{
            color: '#9ca3af',
            fontSize: 22,
            fontWeight: 300,
            textAlign: 'center',
            maxWidth: 700,
            lineHeight: 1.6,
            marginBottom: 52,
            display: 'flex',
          }}
        >
          Soluções digitais que transformam ideias em resultados reais.
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: 64 }}>
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
                gap: 6,
              }}
            >
              <span style={{ color: '#FFCC99', fontSize: 30, fontWeight: 700, display: 'flex' }}>
                {s.value}
              </span>
              <span style={{ color: '#6b7280', fontSize: 15, display: 'flex' }}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: 'absolute',
            bottom: 36,
            color: 'rgba(255,204,153,0.3)',
            fontSize: 16,
            letterSpacing: 4,
            display: 'flex',
          }}
        >
          domussd.com
        </div>
      </div>
    ),
    { ...size }
  );
}
