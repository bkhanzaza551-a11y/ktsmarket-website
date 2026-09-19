import { Mail, MessageCircle } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #1E1E1E', padding: '40px 16px 24px',
      maxWidth: 1200, margin: '0 auto',
    }}>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: 28, marginBottom: 32,
      }} className="footer-grid">
        {/* Brand */}
        <div>
          <div style={{ marginBottom: 12 }}>
            <Logo size={28} />
          </div>
          <p style={{ fontSize: 12, color: '#666', lineHeight: 1.6, maxWidth: 260 }}>
            AI-powered trading platform for Gold markets.
            Learn, trade, and grow with institutional-grade tools.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontSize: 12, fontWeight: 700, color: '#FFF', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '1px' }}>
            Platform
          </h4>
          {['AI Trading Bot', 'Live Signals', 'Market Analysis', 'Risk Management'].map(l => (
            <a key={l} href="#features" style={{
              display: 'block', fontSize: 12, color: '#666',
              textDecoration: 'none', marginBottom: 8,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = '#D4A843'}
            onMouseLeave={e => e.target.style.color = '#666'}
            >{l}</a>
          ))}
        </div>

        {/* Education */}
        <div>
          <h4 style={{ fontSize: 12, fontWeight: 700, color: '#FFF', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '1px' }}>
            Education
          </h4>
          {['Free Courses', 'Smart Money Concepts', 'Price Action', 'Technical Analysis'].map(l => (
            <a key={l} href="#courses" style={{
              display: 'block', fontSize: 12, color: '#666',
              textDecoration: 'none', marginBottom: 8,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = '#D4A843'}
            onMouseLeave={e => e.target.style.color = '#666'}
            >{l}</a>
          ))}
        </div>

        {/* Support */}
        <div>
          <h4 style={{ fontSize: 12, fontWeight: 700, color: '#FFF', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '1px' }}>
            Support
          </h4>
          {[
            { label: 'WhatsApp', href: 'https://wa.me/923371244640' },
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Terms of Service', href: '/terms' },
          ].map(l => (
            <a key={l.label} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" style={{
              display: 'block', fontSize: 12, color: '#666',
              textDecoration: 'none', marginBottom: 8,
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
        borderTop: '1px solid #1E1E1E', paddingTop: 16,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 10,
      }}>
        <span style={{ fontSize: 11, color: '#444' }}>
          &copy; 2026 KTS Markets. All rights reserved.
        </span>
        <div style={{ display: 'flex', gap: 14 }}>
          <a href="https://wa.me/923371244640" target="_blank" rel="noreferrer" style={{ color: '#444', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#D4A843'}
            onMouseLeave={e => e.currentTarget.style.color = '#444'}
          >
            <MessageCircle size={16} />
          </a>
          <a href="mailto:info@ktsmarkets.com" style={{ color: '#444', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#D4A843'}
            onMouseLeave={e => e.currentTarget.style.color = '#444'}
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
