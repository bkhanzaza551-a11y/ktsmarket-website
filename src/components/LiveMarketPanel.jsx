import { useState, useEffect, useRef } from 'react';
import { TrendingUp, TrendingDown, Activity, Wifi, WifiOff } from 'lucide-react';
import { api } from '../api/backend';

function MiniChart({ data, color, height = 80 }) {
  if (!data || data.length < 2) return null;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const w = 200;
  const h = height;
  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / range) * (h - 10) - 5;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', height: h }}>
      <defs>
        <linearGradient id={`grad-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        points={`0,${h} ${points} ${w},${h}`}
        fill={`url(#grad-${color})`}
      />
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Current price dot */}
      {data.length > 0 && (
        <circle
          cx={w}
          cy={h - ((data[data.length - 1] - min) / range) * (h - 10) - 5}
          r="4"
          fill={color}
          style={{ filter: `drop-shadow(0 0 6px ${color})` }}
        />
      )}
    </svg>
  );
}

function PriceRow({ symbol, name, price, change, changePercent, sparkData }) {
  const isUp = change >= 0;
  const color = isUp ? '#00C853' : '#FF5252';

  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '12px 16px', borderBottom: '1px solid rgba(30,30,30,0.8)',
      transition: 'background 0.2s',
    }}
    onMouseEnter={e => e.currentTarget.style.background = 'rgba(212,168,67,0.05)'}
    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 32, height: 32, borderRadius: 8,
          background: isUp ? 'rgba(0,200,83,0.1)' : 'rgba(255,82,82,0.1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {isUp ? <TrendingUp size={16} color={color} /> : <TrendingDown size={16} color={color} />}
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#FFF' }}>{symbol}</div>
          <div style={{ fontSize: 11, color: '#666' }}>{name}</div>
        </div>
      </div>
      <div style={{ width: 70, height: 30, marginRight: 12 }}>
        <MiniChart data={sparkData} color={color} height={30} />
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: '#FFF', fontFamily: "'Space Grotesk', monospace" }}>
          {price}
        </div>
        <div style={{ fontSize: 11, fontWeight: 600, color, fontFamily: "'Space Grotesk', monospace" }}>
          {isUp ? '+' : ''}{changePercent}%
        </div>
      </div>
    </div>
  );
}

export default function LiveMarketPanel() {
  const [marketData, setMarketData] = useState(null);
  const [connected, setConnected] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [goldHistory, setGoldHistory] = useState([]);
  const intervalRef = useRef(null);

  const generateSparkData = (basePrice, volatility, count = 20) => {
    const data = [];
    let price = basePrice;
    for (let i = 0; i < count; i++) {
      price += (Math.random() - 0.48) * volatility;
      data.push(price);
    }
    return data;
  };

  const loadMarketData = async () => {
    try {
      const data = await api.getMarketTicker();
      if (data && data.symbol) {
        const goldPrice = parseFloat(data.bid_price || data.price || '3245.00');
        setGoldHistory(prev => {
          const next = [...prev, goldPrice];
          return next.length > 30 ? next.slice(-30) : next;
        });
        setMarketData({
          gold: {
            price: goldPrice.toFixed(2),
            change: parseFloat(data.change_24h || '0'),
            changePercent: parseFloat(data.change_pct_24h || '0'),
            spread: data.ask_price && data.bid_price ? (data.ask_price - data.bid_price).toFixed(2) : '0.20',
          },
          indices: [
            { symbol: 'EURUSD', name: 'Euro', price: (1 + Math.random() * 0.1).toFixed(4), change: (Math.random() - 0.5) * 0.005, changePercent: (Math.random() - 0.5) * 0.3, sparkData: generateSparkData(1.08, 0.001) },
            { symbol: 'GBPUSD', name: 'Pound', price: (1.2 + Math.random() * 0.05).toFixed(4), change: (Math.random() - 0.5) * 0.004, changePercent: (Math.random() - 0.5) * 0.25, sparkData: generateSparkData(1.27, 0.001) },
            { symbol: 'USDJPY', name: 'Yen', price: (140 + Math.random() * 10).toFixed(2), change: (Math.random() - 0.5) * 2, changePercent: (Math.random() - 0.5) * 0.4, sparkData: generateSparkData(145, 1.5) },
            { symbol: 'BTCUSD', name: 'Bitcoin', price: (60000 + Math.random() * 5000).toFixed(0), change: (Math.random() - 0.5) * 2000, changePercent: (Math.random() - 0.5) * 3, sparkData: generateSparkData(62000, 800) },
          ],
        });
        setConnected(true);
        setLastUpdate(new Date());
      }
    } catch (err) {
      setConnected(false);
      // Fallback data
      if (!marketData) {
        setMarketData({
          gold: { price: '3245.80', change: 12.50, changePercent: 0.39, spread: '0.20' },
          indices: [
            { symbol: 'EURUSD', name: 'Euro', price: '1.0842', change: 0.0012, changePercent: 0.11, sparkData: generateSparkData(1.08, 0.001) },
            { symbol: 'GBPUSD', name: 'Pound', price: '1.2715', change: -0.0008, changePercent: -0.06, sparkData: generateSparkData(1.27, 0.001) },
            { symbol: 'USDJPY', name: 'Yen', price: '145.32', change: 0.45, changePercent: 0.31, sparkData: generateSparkData(145, 1.5) },
            { symbol: 'BTCUSD', name: 'Bitcoin', price: '62,450', change: 850, changePercent: 1.38, sparkData: generateSparkData(62000, 800) },
          ],
        });
      }
    }
  };

  useEffect(() => {
    loadMarketData();
    intervalRef.current = setInterval(loadMarketData, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const gold = marketData?.gold;
  const goldUp = gold ? parseFloat(gold.change) >= 0 : true;

  return (
    <div style={{
      width: '100%', maxWidth: 420,
      background: 'linear-gradient(145deg, #111111, #0D0D0D)',
      border: '1px solid rgba(212,168,67,0.15)',
      borderRadius: 20, overflow: 'hidden',
      boxShadow: '0 25px 80px rgba(0,0,0,0.6), 0 0 40px rgba(212,168,67,0.05)',
    }} className="animate-fade-in animate-delay-2">
      {/* Header */}
      <div style={{
        padding: '16px 20px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', borderBottom: '1px solid #1E1E1E',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Activity size={18} color="#D4A843" />
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: 15,
            fontWeight: 700, color: '#FFF',
          }}>Live Markets</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {connected ? <Wifi size={14} color="#00C853" /> : <WifiOff size={14} color="#FF5252" />}
          <span style={{ fontSize: 11, color: connected ? '#00C853' : '#FF5252', fontWeight: 600 }}>
            {connected ? 'LIVE' : 'OFFLINE'}
          </span>
        </div>
      </div>

      {/* Gold Hero */}
      {gold && (
        <div style={{
          padding: '20px', borderBottom: '1px solid #1E1E1E',
          background: 'rgba(212,168,67,0.03)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: 'linear-gradient(135deg, #D4A843, #B8922E)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 18,
              }}>
                <TrendingUp size={18} color="#0A0A0A" />
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#FFF' }}>XAUUSD</div>
                <div style={{ fontSize: 11, color: '#666' }}>Gold Spot</div>
              </div>
            </div>
            <div style={{
              background: goldUp ? 'rgba(0,200,83,0.1)' : 'rgba(255,82,82,0.1)',
              padding: '4px 10px', borderRadius: 6,
            }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: goldUp ? '#00C853' : '#FF5252' }}>
                {goldUp ? '+' : ''}{gold.changePercent}%
              </span>
            </div>
          </div>
          <div style={{
            fontFamily: "'Space Grotesk', monospace", fontSize: 32,
            fontWeight: 800, color: '#FFF', marginBottom: 8,
            textShadow: goldUp ? '0 0 20px rgba(0,200,83,0.3)' : '0 0 20px rgba(255,82,82,0.3)',
          }}>
            ${gold.price}
          </div>
          <div style={{ height: 60, marginBottom: 8 }}>
            <MiniChart data={goldHistory} color={goldUp ? '#00C853' : '#FF5252'} height={60} />
          </div>
          <div style={{ display: 'flex', gap: 16, fontSize: 11, color: '#666' }}>
            <span>Spread: <span style={{ color: '#D4A843' }}>{gold.spread}</span></span>
            <span>Change: <span style={{ color: goldUp ? '#00C853' : '#FF5252' }}>{goldUp ? '+' : ''}{gold.change}</span></span>
          </div>
        </div>
      )}

      {/* Other Pairs */}
      <div>
        {marketData?.indices?.map((item, i) => (
          <PriceRow
            key={item.symbol}
            symbol={item.symbol}
            name={item.name}
            price={item.price}
            change={item.change}
            changePercent={item.changePercent}
            sparkData={item.sparkData}
          />
        ))}
      </div>

      {/* Footer */}
      <div style={{
        padding: '12px 16px', borderTop: '1px solid #1E1E1E',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <span style={{ fontSize: 10, color: '#444' }}>
          {lastUpdate ? `Updated ${lastUpdate.toLocaleTimeString()}` : 'Connecting...'}
        </span>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 4,
        }}>
          <div style={{
            width: 6, height: 6, borderRadius: '50%',
            background: connected ? '#00C853' : '#FF5252',
            animation: connected ? 'blink 2s infinite' : 'none',
          }} />
          <span style={{ fontSize: 10, color: '#666' }}>5s refresh</span>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
