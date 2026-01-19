import { ImageResponse } from 'next/og';

// Route segment config
export const dynamic = 'force-static';

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#2C2C2C',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="140" height="140" viewBox="0 0 512 512" fill="none">
          {/* J */}
          <path d="M 180 160 L 180 320 Q 180 360 140 360" stroke="#E8E8E8" strokeWidth="32" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          
          {/* K */}
          <line x1="300" y1="160" x2="300" y2="360" stroke="#E8E8E8" strokeWidth="32" strokeLinecap="round"/>
          <path d="M 300 260 L 380 160" stroke="#E8E8E8" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M 300 260 L 380 360" stroke="#E8E8E8" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
