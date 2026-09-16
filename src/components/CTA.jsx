import { ArrowRight, TrendingUp } from 'lucide-react';

export default function CTA() {
  return (
    <section style={{ padding: '80px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{
        background: 'linear-gradient(135deg, #141414, #1A1A1A)',
        border: '1px solid rgba(212,168,67,0.2)',
        borderRadius: 24, padding: '60px 40px', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Glow */}
        <div style={{
          position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)',
          width: 600, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,168,67,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            width: 64, height: 64, borderRadius: 16,
            background: 'linear-gradient(135deg, #D4A843, #B8922E)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 24px',
          }}>
            <TrendingUp size={30} color="#0A0A0A" />
          </div>

          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(26px, 4vw, 40px)',
            fontWeight: 800, marginBottom: 16,
          }}>
            Ready to Start{' '}
            <span style={{
              background: 'linear-gradient(135deg, #D4A843, #F0D78C)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>Trading?</span>
          </h2>
          <p style={{
            color: '#888', fontSize: 16, maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.6,
          }}>
            Join thousands of traders using KTS Markets. Download the app, connect your account,
            and let AI do the heavy lifting.
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://play.google.com/store/apps/details?id=com.ktsmarkets" target="_blank" rel="noreferrer" style={{
              display: 'flex', alignItems: 'center', gap: 10,
              background: 'linear-gradient(135deg, #D4A843, #B8922E)',
              color: '#0A0A0A', padding: '16px 32px', borderRadius: 12,
              fontSize: 16, fontWeight: 700, textDecoration: 'none',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(212,168,67,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
              </svg>
              Get on Google Play
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
