import { useState, useEffect } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'Live Market', href: '#market' },
    { label: 'AI Bot', href: '#bot' },
    { label: 'Courses', href: '#courses' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid #1E1E1E' : '1px solid transparent',
      transition: 'all 0.3s ease',
      padding: '0 24px',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', display: 'flex',
        alignItems: 'center', justifyContent: 'space-between', height: 72,
      }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10,
            background: 'linear-gradient(135deg, #D4A843, #B8922E)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <TrendingUp size={22} color="#0A0A0A" strokeWidth={2.5} />
          </div>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: 22,
            fontWeight: 700, color: '#FFF', letterSpacing: '-0.5px',
          }}>
            KTS <span style={{ color: '#D4A843' }}>Markets</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 32,
        }} className="desktop-nav">
          {links.map(l => (
            <a key={l.label} href={l.href} style={{
              color: '#999', textDecoration: 'none', fontSize: 14,
              fontWeight: 500, transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = '#D4A843'}
            onMouseLeave={e => e.target.style.color = '#999'}
            >{l.label}</a>
          ))}
          <a href="https://play.google.com/store/apps/details?id=com.ktsmarkets" target="_blank" rel="noreferrer" style={{
            background: 'linear-gradient(135deg, #D4A843, #B8922E)',
            color: '#0A0A0A', padding: '10px 24px', borderRadius: 8,
            fontSize: 14, fontWeight: 700, textDecoration: 'none',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => { e.target.style.transform = 'scale(1.05)'; e.target.style.boxShadow = '0 0 20px rgba(212,168,67,0.4)'; }}
          onMouseLeave={e => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = 'none'; }}
          >Download App</a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          display: 'none', background: 'none', border: 'none',
          color: '#D4A843', cursor: 'pointer',
        }} className="mobile-menu-btn">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: 72, left: 0, right: 0,
          background: 'rgba(10,10,10,0.98)', borderBottom: '1px solid #1E1E1E',
          padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16,
        }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} style={{
              color: '#CCC', textDecoration: 'none', fontSize: 16, fontWeight: 500,
            }}>{l.label}</a>
          ))}
          <a href="https://play.google.com/store/apps/details?id=com.ktsmarkets" target="_blank" rel="noreferrer" style={{
            background: 'linear-gradient(135deg, #D4A843, #B8922E)',
            color: '#0A0A0A', padding: '12px 24px', borderRadius: 8,
            fontSize: 14, fontWeight: 700, textDecoration: 'none', textAlign: 'center',
          }}>Download App</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
