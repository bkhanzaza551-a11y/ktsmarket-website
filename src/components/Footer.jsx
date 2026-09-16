import { TrendingUp, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #1E1E1E', padding: '60px 24px 30px',
      maxWidth: 1200, margin: '0 auto',
    }}>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 40, marginBottom: 40,
      }}>
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: 'linear-gradient(135deg, #D4A843, #B8922E)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <TrendingUp size={18} color="#0A0A0A" strokeWidth={2.5} />
            </div>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 18,
              fontWeight: 700,
            }}>
              KTS <span style={{ color: '#D4A843' }}>Markets</span>
            </span>
          </div>
          <p style={{ fontSize: 13, color: '#666', lineHeight: 1.6, maxWidth: 280 }}>
            AI-powered trading platform for Gold markets.
            Learn, trade, and grow with institutional-grade tools.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontSize: 13, fontWeight: 700, color: '#FFF', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '1px' }}>
            Platform
          </h4>
          {['AI Trading Bot', 'Live Signals', 'Market Analysis', 'Risk Management'].map(l => (
            <a key={l} href="#features" style={{
              display: 'block', fontSize: 13, color: '#666',
              textDecoration: 'none', marginBottom: 10,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = '#D4A843'}
            onMouseLeave={e => e.target.style.color = '#666'}
            >{l}</a>
          ))}
        </div>

        {/* Education */}
        <div>
          <h4 style={{ fontSize: 13, fontWeight: 700, color: '#FFF', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '1px' }}>
            Education
          </h4>
          {['Free Courses', 'Smart Money Concepts', 'Price Action', 'Technical Analysis'].map(l => (
            <a key={l} href="#courses" style={{
              display: 'block', fontSize: 13, color: '#666',
              textDecoration: 'none', marginBottom: 10,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = '#D4A843'}
            onMouseLeave={e => e.target.style.color = '#666'}
            >{l}</a>
          ))}
        </div>

        {/* Support */}
        <div>
          <h4 style={{ fontSize: 13, fontWeight: 700, color: '#FFF', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '1px' }}>
            Support
          </h4>
          {[
            { label: 'WhatsApp', href: 'https://wa.me/923371244640' },
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Terms of Service', href: '/terms' },
          ].map(l => (
            <a key={l.label} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" style={{
              display: 'block', fontSize: 13, color: '#666',
              textDecoration: 'none', marginBottom: 10,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = '#D4A843'}
            onMouseLeave={e => e.target.style.color = '#666'}
            >{l.label}</a>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div style={{
        borderTop: '1px solid #1E1E1E', paddingTop: 20,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 12,
      }}>
        <span style={{ fontSize: 12, color: '#444' }}>
          © 2026 KTS Markets. All rights reserved.
        </span>
        <div style={{ display: 'flex', gap: 16 }}>
          <a href="https://wa.me/923371244640" target="_blank" rel="noreferrer" style={{ color: '#444', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#D4A843'}
            onMouseLeave={e => e.currentTarget.style.color = '#444'}
          >
            <MessageCircle size={18} />
          </a>
          <a href="mailto:info@ktsmarkets.com" style={{ color: '#444', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#D4A843'}
            onMouseLeave={e => e.currentTarget.style.color = '#444'}
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
