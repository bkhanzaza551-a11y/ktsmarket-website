import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, RefreshCw, Activity } from 'lucide-react';
import { api } from '../api/backend';

export default function LiveMarket() {
  const [market, setMarket] = useState(null);
  const [signals, setSignals] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const [ticker, sigs] = await Promise.all([
      api.getMarketTicker(),
      api.getSignals(),
    ]);
    setMarket(ticker);
    setSignals(Array.isArray(sigs) ? sigs.slice(0, 5) : []);
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  const formatPrice = (p) => p ? Number(p).toFixed(2) : '—';
  const formatChange = (c) => {
    if (!c) return { text: '0.00%', up: false };
    const val = Number(c);
    return { text: `${val >= 0 ? '+' : ''}${val.toFixed(2)}%`, up: val >= 0 };
  };

  return (
    <section id="market" style={{
      padding: '60px 16px', maxWidth: 1200, margin: '0 auto',
    }}>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <span style={{
          fontSize: 12, color: '#00C853', fontWeight: 700,
          letterSpacing: '2px', textTransform: 'uppercase',
        }}>Live Data</span>
        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(24px, 5vw, 42px)',
          fontWeight: 800, marginTop: 12,
        }}>
          Real-Time{' '}
          <span style={{
            background: 'linear-gradient(135deg, #00C853, #69F0AE)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>Market Data</span>
        </h2>
        <p style={{ color: '#666', fontSize: 14, maxWidth: 500, margin: '12px auto 0' }}>
          Live prices powered by institutional data feeds.
        </p>
      </div>

      {/* Market Ticker */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: 12, marginBottom: 32,
      }} className="market-grid">
        {loading ? (
          [1,2,3,4].map(i => (
            <div key={i} style={{
              background: '#141414', borderRadius: 14, padding: 16,
              border: '1px solid #1E1E1E', minHeight: 90,
            }}>
              <div style={{ width: 50, height: 10, background: '#1E1E1E', borderRadius: 4, marginBottom: 8 }} />
              <div style={{ width: 80, height: 20, background: '#1E1E1E', borderRadius: 4, marginBottom: 6 }} />
              <div style={{ width: 60, height: 10, background: '#1E1E1E', borderRadius: 4 }} />
            </div>
          ))
        ) : market ? (
          Object.entries(market).slice(0, 6).map(([key, val]) => {
            const chg = formatChange(val?.percent_change || val?.change);
            return (
              <div key={key} style={{
                background: '#141414', borderRadius: 14, padding: 16,
                border: '1px solid #1E1E1E', transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#D4A84340'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#1E1E1E'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: 11, color: '#888', fontWeight: 600, textTransform: 'uppercase' }}>
                    {key}
                  </span>
                  <Activity size={12} color="#666" />
                </div>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif", fontSize: 18,
                  fontWeight: 800, color: '#FFF', marginBottom: 4,
                }}>
                  {formatPrice(val?.price || val)}
                </div>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 3,
                  color: chg.up ? '#00C853' : '#FF4444', fontSize: 12, fontWeight: 600,
                }}>
                  {chg.up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  {chg.text}
                </div>
              </div>
            );
          })
        ) : (
          <div style={{
            gridColumn: '1 / -1', textAlign: 'center', padding: 30,
            color: '#666', fontSize: 13,
          }}>
            Market data unavailable. Backend may be restarting.
          </div>
        )}
      </div>

      {/* Recent Signals */}
      {signals.length > 0 && (
        <div style={{
          background: '#141414', borderRadius: 16, border: '1px solid #1E1E1E',
          overflow: 'hidden',
        }}>
          <div style={{
            padding: '14px 16px', borderBottom: '1px solid #1E1E1E',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 700 }}>
                Recent Signals
              </h3>
              <p style={{ fontSize: 11, color: '#666', marginTop: 2 }}>Latest trading signals</p>
            </div>
            <button onClick={fetchData} style={{
              background: 'rgba(212,168,67,0.1)', border: 'none',
              color: '#D4A843', borderRadius: 8, padding: 6, cursor: 'pointer',
            }}>
              <RefreshCw size={14} />
            </button>
          </div>
          {signals.slice(0, 5).map((s, i) => (
            <div key={i} style={{
              padding: '10px 16px', borderBottom: i < 4 ? '1px solid #1E1E1E' : 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: s.direction === 'buy' ? '#00C853' : '#FF4444',
                }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 13, fontWeight: 600 }}>{s.symbol || 'XAUUSD'}</span>
                  <span style={{
                    fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
                    color: s.direction === 'buy' ? '#00C853' : '#FF4444',
                    background: (s.direction === 'buy' ? 'rgba(0,200,83,0.1)' : 'rgba(255,68,68,0.1)'),
                    padding: '2px 6px', borderRadius: 4,
                  }}>{s.direction || 'BUY'}</span>
                </div>
              </div>
              <span style={{ fontSize: 11, color: '#666' }}>
                {s.created_at ? new Date(s.created_at).toLocaleTimeString() : '—'}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
