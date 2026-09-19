import { Bot, BookOpen, MessageCircle, TrendingUp, Shield, Zap, Brain, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: <Bot size={24} />, title: 'AI Trading Bot',
    desc: 'Automated Gold (XAUUSD) trading with institutional-grade strategies. Set your budget, bot handles the rest.',
    color: '#D4A843',
  },
  {
    icon: <Brain size={24} />, title: 'AI Market Analyst',
    desc: 'Chat with our AI-powered market analyst for real-time insights, technical analysis, and trading recommendations.',
    color: '#00C853',
  },
  {
    icon: <TrendingUp size={24} />, title: 'Live Signals',
    desc: 'Multi-source signal tracking from TradingView, MetaTrader, and custom algorithms. Never miss a setup.',
    color: '#4FC3F7',
  },
  {
    icon: <BookOpen size={24} />, title: 'Free Education',
    desc: 'Complete trading courses from beginner to advanced. Learn Smart Money Concepts, Price Action, and more.',
    color: '#CE93D8',
  },
  {
    icon: <MessageCircle size={24} />, title: 'Community Chat',
    desc: 'Connect with traders worldwide in real-time chat rooms. Share ideas, discuss setups, grow together.',
    color: '#FFB74D',
  },
  {
    icon: <Shield size={24} />, title: 'Risk Management',
    desc: 'Built-in stop loss, take profit, and daily loss limits. Your capital is protected at all times.',
    color: '#EF5350',
  },
];

export default function Features() {
  return (
    <section id="features" style={{
      padding: '80px 16px', maxWidth: 1200, margin: '0 auto',
    }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <span style={{
          fontSize: 12, color: '#D4A843', fontWeight: 700,
          letterSpacing: '2px', textTransform: 'uppercase',
        }}>Why KTS Markets</span>
        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(24px, 5vw, 42px)',
          fontWeight: 800, marginTop: 12, letterSpacing: '-0.5px',
          padding: '0 8px',
        }}>
          Everything You Need to{' '}
          <span style={{
            background: 'linear-gradient(135deg, #D4A843, #F0D78C)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>Trade Better</span>
        </h2>
        <p style={{ color: '#666', fontSize: 14, maxWidth: 500, margin: '12px auto 0', lineHeight: 1.6, padding: '0 8px' }}>
          From AI-powered automation to expert education — all in one app.
        </p>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 16,
      }} className="feature-grid">
        {features.map((f, i) => (
          <div key={i} style={{
            background: '#141414', border: '1px solid #1E1E1E',
            borderRadius: 16, padding: 24, transition: 'all 0.3s',
            cursor: 'default',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = f.color + '40';
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = `0 12px 40px ${f.color}15`;
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = '#1E1E1E';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: f.color + '15', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              color: f.color, marginBottom: 14,
            }}>{f.icon}</div>
            <h3 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 16, fontWeight: 700, marginBottom: 8,
            }}>{f.title}</h3>
            <p style={{ fontSize: 13, color: '#888', lineHeight: 1.6 }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
