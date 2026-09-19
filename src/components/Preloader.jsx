import { useState, useEffect } from 'react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setFadeOut(true);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + Math.random() * 12 + 3;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: '#0A0A0A',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      opacity: fadeOut ? 0 : 1,
      transform: fadeOut ? 'scale(1.02)' : 'scale(1)',
      transition: 'all 0.5s ease',
    }}>
      {/* App Icon */}
      <div style={{
        marginBottom: 40,
        animation: 'preloader-pulse 2s ease-in-out infinite',
      }}>
        <img
          src="/icon.svg"
          alt="KTS Markets"
          style={{
            width: 80, height: 80, borderRadius: 18,
            objectFit: 'cover',
            boxShadow: '0 0 60px rgba(212,168,67,0.3)',
          }}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        {/* Fallback */}
        <div style={{
          width: 80, height: 80, borderRadius: 18,
          background: 'linear-gradient(135deg, #D4A843, #B8922E)',
          display: 'none', alignItems: 'center', justifyContent: 'center',
          fontSize: 36, fontWeight: 900, color: '#0A0A0A',
          fontFamily: "'Space Grotesk', sans-serif",
          boxShadow: '0 0 60px rgba(212,168,67,0.3)',
        }}>K</div>
      </div>

      {/* Loading Bar */}
      <div style={{
        width: 160, height: 2, background: '#1E1E1E',
        borderRadius: 2, overflow: 'hidden',
      }}>
        <div style={{
          width: `${Math.min(progress, 100)}%`, height: '100%',
          background: 'linear-gradient(90deg, #D4A843, #F0D78C)',
          borderRadius: 2, transition: 'width 0.2s ease',
        }} />
      </div>

      <style>{`
        @keyframes preloader-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
