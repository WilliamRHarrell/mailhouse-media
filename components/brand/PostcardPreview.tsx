'use client';

interface PostcardPreviewProps {
  headline: string;
  offer: string;
  business: string;
  phone: string;
  accent?: string;
  width?: number;
}

export function PostcardPreview({
  headline,
  offer,
  business,
  phone,
  accent = 'var(--signal-500)',
  width = 300,
}: PostcardPreviewProps) {
  const height = width * 1.25;

  return (
    <div
      style={{
        width,
        height,
        background: '#fff',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-card)',
        overflow: 'hidden',
        position: 'relative',
        transform: 'rotate(-2deg)',
      }}
    >
      {/* Stamp */}
      <div
        style={{
          position: 'absolute',
          top: 16,
          right: 16,
          width: 40,
          height: 48,
          background: accent,
          borderRadius: 'var(--radius-xs)',
        }}
      />
      {/* Address lines */}
      <div style={{ position: 'absolute', top: 20, left: 20, right: 70 }}>
        <div style={{ height: 6, background: '#e5e5e5', borderRadius: 3, marginBottom: 8 }} />
        <div style={{ height: 6, background: '#e5e5e5', borderRadius: 3, marginBottom: 8, width: '80%' }} />
        <div style={{ height: 6, background: '#e5e5e5', borderRadius: 3, width: '60%' }} />
      </div>
      {/* Main content band */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: accent,
          padding: width * 0.06,
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: width * 0.08,
            lineHeight: 1,
            color: '#fff',
            marginBottom: width * 0.02,
          }}
        >
          {headline}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: width * 0.05,
            color: 'rgba(255,255,255,0.9)',
            marginBottom: width * 0.03,
          }}
        >
          {offer}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: width * 0.055,
              color: '#fff',
            }}
          >
            {business}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: width * 0.045,
              color: 'rgba(255,255,255,0.9)',
            }}
          >
            {phone}
          </div>
        </div>
      </div>
    </div>
  );
}
