import { useState, useEffect, useRef } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { api } from '../api/backend';

function TickerItem({ symbol, price, change, sparkData }) {
  const isUp = change >= 0;
  const color = isUp ? '#00C853' : '#FF5252';

  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      padding: '8px 20px', flexShrink: 0,
      borderRight: '1px solid rgba(30,30,30,0.6)',
    }}>
      <span style={{
        fontSize: 13, fontWeight: 700, color: '#FFF',
        fontFamily: "'Space Grotesk', sans-serif",
      }}>{symbol}</span>
      <span style={{
        fontSize: 13, fontWeight: 600, color: '#CCC',
        fontFamily: "'Space Grotesk', monospace",
      }}>{price}</span>
      <span style={{
        fontSize: 11, fontWeight: 700, color,
        fontFamily: "'Space Grotesk', monospace",
        display: 'flex', alignItems: 'center', gap: 3,
      }}>
        {isUp ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
        {isUp ? '+' : ''}{change}%
      </span>
    </div>
  );
}

export default function MarketTicker() {
  const [coins, setCoins] = useState([]);
  const scrollRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);

  const fixedCoins = [
    { symbol: 'EURUSD', name: 'Euro' },
    { symbol: 'GBPUSD', name: 'Pound' },
    { symbol: 'USDJPY', name: 'Yen' },
    { symbol: 'BTCUSD', name: 'Bitcoin' },
    { symbol: 'ETHUSD', name: 'Ethereum' },
    { symbol: 'SOLUSD', name: 'Solana' },
    { symbol: 'AUDUSD', name: 'AUD/USD' },
    { symbol: 'USDCAD', name: 'USD/CAD' },
  ];

  const loadData = async () => {
    const ticker = await api.getMarketTicker();
    const basePrice = ticker?.price || 3245;
    const baseChange = ticker?.change_pct_24h || 0;

    setCoins(fixedCoins.map(c => ({
      symbol: c.symbol,
      name: c.name,
      price: c.symbol.includes('BTC')
        ? `$${(60000 + Math.random() * 5000).toFixed(0)}`
        : c.symbol.includes('ETH')
        ? `$${(2400 + Math.random() * 300).toFixed(0)}`
        : c.symbol.includes('SOL')
        ? `$${(140 + Math.random() * 30).toFixed(0)}`
        : c.symbol.includes('JPY')
        ? (140 + Math.random() * 10).toFixed(2)
        : (1 + Math.random() * 0.1).toFixed(4),
      change: parseFloat(((Math.random() - 0.45) * 2).toFixed(2)),
    })));
  };

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 8000);
    return () => clearInterval(interval);
  }, []);

  // Smooth auto-scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let speed = 0.6;
    let paused = false;

    const onMouseEnter = () => { paused = true; };
    const onMouseLeave = () => { paused = false; };

    el.addEventListener('mouseenter', onMouseEnter);
    el.addEventListener('mouseleave', onMouseLeave);

    const animate = () => {
      if (!paused && el) {
        posRef.current += speed;
        if (posRef.current >= el.scrollWidth / 2) {
          posRef.current = 0;
        }
        el.scrollLeft = posRef.current;
      }
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      el.removeEventListener('mouseenter', onMouseEnter);
      el.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [coins]);

  if (coins.length === 0) return null;

  const doubled = [...coins, ...coins];

  return (
    <div style={{
      width: '100%', overflow: 'hidden',
      background: 'linear-gradient(90deg, rgba(10,10,10,0.95), rgba(15,15,15,0.95), rgba(10,10,10,0.95))',
      borderTop: '1px solid rgba(212,168,67,0.1)',
      borderBottom: '1px solid rgba(212,168,67,0.1)',
      position: 'relative',
    }}>
      {/* Fade edges */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: 60,
        background: 'linear-gradient(90deg, #0A0A0A, transparent)',
        zIndex: 2, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: 60,
        background: 'linear-gradient(270deg, #0A0A0A, transparent)',
        zIndex: 2, pointerEvents: 'none',
      }} />

      <div
        ref={scrollRef}
        style={{
          display: 'flex', overflow: 'hidden',
          whiteSpace: 'nowrap', padding: '10px 0',
          cursor: 'grab',
        }}
      >
        {doubled.map((c, i) => (
          <TickerItem key={`${c.symbol}-${i}`} {...c} />
        ))}
      </div>
    </div>
  );
}
