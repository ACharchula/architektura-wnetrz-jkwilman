import { ImageResponse } from 'next/og';

// Image metadata
export const alt = 'Jolanta Kwilman – Pracownia Architektury Wnętrz';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Image generation
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#2C2C2C',
          backgroundImage: 'linear-gradient(135deg, #2C2C2C 0%, #1a1a1a 100%)',
        }}
      >
        {/* Icon/Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <svg width="200" height="200" viewBox="0 0 512 512" fill="none">
            {/* J */}
            <path d="M 180 160 L 180 320 Q 180 360 140 360" stroke="#E8E8E8" strokeWidth="32" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            
            {/* K */}
            <line x1="300" y1="160" x2="300" y2="360" stroke="#E8E8E8" strokeWidth="32" strokeLinecap="round"/>
            <path d="M 300 260 L 380 160" stroke="#E8E8E8" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M 300 260 L 380 360" stroke="#E8E8E8" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            fontSize: 60,
            fontWeight: 'bold',
            letterSpacing: '-0.025em',
            color: '#E8E8E8',
            marginBottom: 20,
            fontFamily: 'sans-serif',
          }}
        >
          Jolanta Kwilman
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: 'flex',
            fontSize: 36,
            color: '#D4AF37',
            fontFamily: 'sans-serif',
            fontWeight: '600',
          }}
        >
          Pracownia Architektury Wnętrz
        </div>

        {/* Tagline */}
        <div
          style={{
            display: 'flex',
            fontSize: 24,
            color: '#B8B8B8',
            marginTop: 30,
            fontFamily: 'sans-serif',
          }}
        >
          Projektowanie i aranżacja wnętrz
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
