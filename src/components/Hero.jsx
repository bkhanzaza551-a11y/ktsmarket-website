import { ArrowRight, Shield, Zap, Brain } from 'lucide-react';
import LiveMarketPanel from './LiveMarketPanel';

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden', padding: '120px 24px 80px',
    }}>
      {/* Background Effects */}
      <div style={{
        position: 'absolute', top: '-50%', right: '-20%',
        width: 800, height: 800, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,168,67,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-30%', left: '-10%',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,168,67,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Grid Pattern */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.03,
        backgroundImage: `linear-gradient(rgba(212,168,67,0.3) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(212,168,67,0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60,
          alignItems: 'center',
        }} className="hero-grid">
          {/* Left Content */}
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.2)',
              borderRadius: 20, padding: '6px 16px', marginBottom: 24,
            }} className="animate-fade-in animate-delay-1">
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#00C853' }} />
              <span style={{ fontSize: 12, color: '#D4A843', fontWeight: 600, letterSpacing: '0.5px' }}>
                LIVE TRADING ACTIVE
              </span>
            </div>

            <h1 style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 800, lineHeight: 1.1, marginBottom: 20,
              letterSpacing: '-1px',
            }} className="animate-fade-in animate-delay-2">
              Trade Smarter<br />
              with <span style={{
                background: 'linear-gradient(135deg, #D4A843, #F0D78C)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>AI-Powered</span><br />
              Intelligence
            </h1>

            <p style={{
              fontSize: 17, color: '#999', lineHeight: 1.7,
              maxWidth: 480, marginBottom: 32,
            }} className="animate-fade-in animate-delay-3">
              KTS Markets combines institutional-grade analysis with AI technology.
              Automate your Gold trading with our proven bot and learn from expert courses.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }} className="animate-fade-in animate-delay-4">
              <a href="https://play.google.com/store/apps/details?id=com.ktsmarkets" target="_blank" rel="noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: 10,
                background: 'linear-gradient(135deg, #D4A843, #B8922E)',
                color: '#0A0A0A', padding: '14px 28px', borderRadius: 10,
                fontSize: 15, fontWeight: 700, textDecoration: 'none',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(212,168,67,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                Get Started <ArrowRight size={18} />
              </a>
              <a href="#features" style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: 'transparent', color: '#D4A843',
                border: '1px solid rgba(212,168,67,0.3)', padding: '14px 28px',
                borderRadius: 10, fontSize: 15, fontWeight: 600, textDecoration: 'none',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(212,168,67,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
              >
                Learn More
              </a>
            </div>

            {/* Trust Badges */}
            <div style={{
              display: 'flex', gap: 24, marginTop: 40, flexWrap: 'wrap',
            }} className="animate-fade-in animate-delay-4">
              {[
                { icon: <Shield size={16} />, text: 'Secure Trading' },
                { icon: <Zap size={16} />, text: 'Instant Signals' },
                { icon: <Brain size={16} />, text: 'AI Analysis' },
              ].map(b => (
                <div key={b.text} style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#666', fontSize: 13 }}>
                  <span style={{ color: '#D4A843' }}>{b.icon}</span> {b.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Live Market Panel */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }} className="hero-visual">
            <LiveMarketPanel />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-visual { display: none !important; }
        }
      `}</style>
    </section>
  );
}
