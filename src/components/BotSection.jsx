import { useState, useEffect } from 'react';
import { Bot, Play, Pause, TrendingUp, Award } from 'lucide-react';
import { api } from '../api/backend';

export default function BotSection() {
  const [bot, setBot] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([api.getBotStatus(), api.getCourses()])
      .then(([b, c]) => { setBot(b); setCourses(Array.isArray(c) ? c : []); })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {/* Bot Section */}
      <section id="bot" style={{
        padding: '100px 24px', maxWidth: 1200, margin: '0 auto',
      }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40,
          alignItems: 'center',
        }} className="bot-grid">
          <div>
            <span style={{
              fontSize: 12, color: '#D4A843', fontWeight: 700,
              letterSpacing: '2px', textTransform: 'uppercase',
            }}>Automated Trading</span>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 800, marginTop: 12, lineHeight: 1.2,
            }}>
              Let AI Trade{' '}
              <span style={{
                background: 'linear-gradient(135deg, #D4A843, #F0D78C)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>For You</span>
            </h2>
            <p style={{ fontSize: 15, color: '#888', lineHeight: 1.7, marginTop: 16, maxWidth: 440 }}>
              Our AI bot analyzes Gold (XAUUSD) markets 24/7 using Smart Money Concepts,
              executes trades automatically, and manages your risk with precision.
            </p>

            <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
              <a href="https://play.google.com/store/apps/details?id=com.ktsmarkets" target="_blank" rel="noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: 'linear-gradient(135deg, #D4A843, #B8922E)',
                color: '#0A0A0A', padding: '12px 24px', borderRadius: 10,
                fontSize: 14, fontWeight: 700, textDecoration: 'none',
              }}>
                <Bot size={18} /> Start Trading
              </a>
            </div>
          </div>

          {/* Bot Stats Card */}
          <div style={{
            background: '#141414', borderRadius: 20, border: '1px solid #1E1E1E',
            padding: 30,
          }}>
            {loading ? (
              <div style={{ textAlign: 'center', padding: 40, color: '#666' }}>Loading...</div>
            ) : bot ? (
              <>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: 12,
                      background: 'linear-gradient(135deg, #D4A843, #B8922E)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Bot size={24} color="#0A0A0A" />
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700 }}>
                        {bot.name || 'KTS Bot'}
                      </h3>
                      <span style={{
                        fontSize: 11, fontWeight: 700,
                        color: bot.status === 'active' ? '#00C853' : '#FF4444',
                        textTransform: 'uppercase',
                      }}>
                        {bot.status || 'INACTIVE'}
                      </span>
                    </div>
                  </div>
                  {bot.auto_trade ? <Play size={20} color="#00C853" /> : <Pause size={20} color="#666" />}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {[
                    { label: 'Total Trades', value: bot.total_trades || 0 },
                    { label: 'Win Rate', value: `${((bot.winning_trades || 0) / Math.max(bot.total_trades || 1, 1) * 100).toFixed(1)}%` },
                    { label: 'Max Daily', value: bot.max_daily_trades || '—' },
                    { label: 'TP / SL', value: `${bot.take_profit_pips || 10}/${bot.stop_loss_pips || 5}` },
                  ].map(s => (
                    <div key={s.label} style={{
                      background: '#1A1A1A', borderRadius: 10, padding: 14,
                    }}>
                      <div style={{ fontSize: 11, color: '#666', marginBottom: 4 }}>{s.label}</div>
                      <div style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 18, fontWeight: 700, color: '#FFF',
                      }}>{s.value}</div>
                    </div>
                  ))}
                </div>

                {bot.error_message && (
                  <div style={{
                    marginTop: 12, background: 'rgba(255,68,68,0.1)',
                    borderRadius: 8, padding: 10, fontSize: 12, color: '#FF4444',
                  }}>{bot.error_message}</div>
                )}
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: 40, color: '#666' }}>
                Bot not configured yet
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" style={{
        padding: '80px 24px 100px', maxWidth: 1200, margin: '0 auto',
      }}>
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <span style={{
            fontSize: 12, color: '#CE93D8', fontWeight: 700,
            letterSpacing: '2px', textTransform: 'uppercase',
          }}>Free Education</span>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800, marginTop: 12,
          }}>
            Learn Trading{' '}
            <span style={{
              background: 'linear-gradient(135deg, #CE93D8, #E1BEE7)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>For Free</span>
          </h2>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 20,
        }}>
          {loading ? (
            [1,2,3].map(i => (
              <div key={i} style={{
                background: '#141414', borderRadius: 16, padding: 24,
                border: '1px solid #1E1E1E', minHeight: 160,
              }}>
                <div style={{ width: 80, height: 12, background: '#1E1E1E', borderRadius: 4, marginBottom: 12 }} />
                <div style={{ width: '60%', height: 18, background: '#1E1E1E', borderRadius: 4, marginBottom: 8 }} />
                <div style={{ width: '80%', height: 12, background: '#1E1E1E', borderRadius: 4 }} />
              </div>
            ))
          ) : courses.length > 0 ? courses.map((c, i) => (
            <div key={i} style={{
              background: '#141414', borderRadius: 16, border: '1px solid #1E1E1E',
              padding: 24, transition: 'all 0.3s', cursor: 'pointer',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#CE93D840'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#1E1E1E'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <Award size={16} color="#CE93D8" />
                <span style={{ fontSize: 11, color: '#CE93D8', fontWeight: 600, textTransform: 'uppercase' }}>
                  {c.category?.name || 'Course'}
                </span>
              </div>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif", fontSize: 17,
                fontWeight: 700, marginBottom: 8,
              }}>{c.title}</h3>
              <p style={{ fontSize: 13, color: '#888', lineHeight: 1.5 }}>
                {c.description ? c.description.substring(0, 100) + '...' : 'Learn trading concepts and strategies.'}
              </p>
              <div style={{
                marginTop: 14, display: 'flex', alignItems: 'center', gap: 6,
                fontSize: 12, color: '#00C853', fontWeight: 600,
              }}>
                <Play size={12} /> Free Access
              </div>
            </div>
          )) : (
            <div style={{
              gridColumn: '1 / -1', textAlign: 'center', padding: 40, color: '#666',
            }}>Courses coming soon</div>
          )}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .bot-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
