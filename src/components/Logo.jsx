export default function Logo({ size = 40, showText = true, style = {} }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: showText ? 10 : 0,
      ...style,
    }}>
      <img
        src="/icon.svg"
        alt="KTS Markets"
        style={{
          width: size, height: size, borderRadius: size * 0.22,
          objectFit: 'contain',
        }}
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      {/* Fallback if image fails */}
      <div style={{
        width: size, height: size, borderRadius: size * 0.22,
        background: 'linear-gradient(135deg, #D4A843, #B8922E)',
        display: 'none', alignItems: 'center', justifyContent: 'center',
        fontSize: size * 0.45, fontWeight: 900, color: '#0A0A0A',
        fontFamily: "'Space Grotesk', sans-serif",
      }}>
        K
      </div>
      {showText && (
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: size * 0.55,
          fontWeight: 800, color: '#FFF', letterSpacing: '-0.5px',
        }}>
          KTS <span style={{ color: '#D4A843' }}>Markets</span>
        </span>
      )}
    </div>
  );
}
