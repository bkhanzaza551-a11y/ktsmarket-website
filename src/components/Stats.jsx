import { Users, TrendingUp, Award, Clock } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

function AnimatedCounter({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const stats = [
  { icon: <Users size={22} />, value: 5000, suffix: '+', label: 'Active Traders', color: '#D4A843' },
  { icon: <TrendingUp size={22} />, value: 15000, suffix: '+', label: 'Signals Generated', color: '#00C853' },
  { icon: <Award size={22} />, value: 50, suffix: '+', label: 'Free Courses', color: '#CE93D8' },
  { icon: <Clock size={22} />, value: 24, suffix: '/7', label: 'Market Coverage', color: '#4FC3F7' },
];

export default function Stats() {
  return (
    <section style={{
      padding: '40px 16px', maxWidth: 1200, margin: '0 auto',
    }}>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: 12,
      }} className="stats-grid">
        {stats.map((s, i) => (
          <div key={i} style={{
            background: '#141414', border: '1px solid #1E1E1E',
            borderRadius: 14, padding: '20px 16px', textAlign: 'center',
            transition: 'all 0.3s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = s.color + '40';
            e.currentTarget.style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = '#1E1E1E';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          >
            <div style={{
              width: 40, height: 40, borderRadius: 10,
              background: s.color + '15', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              color: s.color, margin: '0 auto 10px',
            }}>{s.icon}</div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 26,
              fontWeight: 800, color: '#FFF', marginBottom: 4,
            }}>
              <AnimatedCounter end={s.value} suffix={s.suffix} />
            </div>
            <div style={{ fontSize: 12, color: '#666', fontWeight: 500 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
