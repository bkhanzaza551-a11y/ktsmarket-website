import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmed K.',
    role: 'Gold Trader',
    text: 'KTS Bot changed my trading completely. I used to lose money manually — now the AI handles everything. Win rate is insane!',
    rating: 5,
    avatar: 'AK',
  },
  {
    name: 'Sarah M.',
    role: 'Forex Student',
    text: 'The free education courses are better than paid ones I\'ve tried. Smart Money Concepts section is gold. Highly recommend!',
    rating: 5,
    avatar: 'SM',
  },
  {
    name: 'Bilal T.',
    role: 'Signal Follower',
    text: 'Live signals are accurate and fast. The AI chatbot gives me analysis anytime I ask. Best trading app out there.',
    rating: 5,
    avatar: 'BT',
  },
];

export default function Testimonials() {
  return (
    <section style={{
      padding: '80px 24px', maxWidth: 1200, margin: '0 auto',
    }}>
      <div style={{ textAlign: 'center', marginBottom: 50 }}>
        <span style={{
          fontSize: 12, color: '#FFB74D', fontWeight: 700,
          letterSpacing: '2px', textTransform: 'uppercase',
        }}>Testimonials</span>
        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(28px, 4vw, 42px)',
          fontWeight: 800, marginTop: 12,
        }}>
          Trusted by{' '}
          <span style={{
            background: 'linear-gradient(135deg, #FFB74D, #FFE0B2)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>Traders</span>
        </h2>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 20,
      }}>
        {testimonials.map((t, i) => (
          <div key={i} style={{
            background: '#141414', border: '1px solid #1E1E1E',
            borderRadius: 16, padding: 28, position: 'relative',
            transition: 'all 0.3s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = '#FFB74D40';
            e.currentTarget.style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = '#1E1E1E';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          >
            <Quote size={32} color="#D4A84320" style={{ position: 'absolute', top: 20, right: 20 }} />

            <div style={{ display: 'flex', gap: 2, marginBottom: 16 }}>
              {[...Array(t.rating)].map((_, j) => (
                <Star key={j} size={14} fill="#FFB74D" color="#FFB74D" />
              ))}
            </div>

            <p style={{
              fontSize: 14, color: '#999', lineHeight: 1.7,
              marginBottom: 20, fontStyle: 'italic',
            }}>"{t.text}"</p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: 'linear-gradient(135deg, #D4A843, #B8922E)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 14, fontWeight: 700, color: '#0A0A0A',
              }}>{t.avatar}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#FFF' }}>{t.name}</div>
                <div style={{ fontSize: 12, color: '#666' }}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
