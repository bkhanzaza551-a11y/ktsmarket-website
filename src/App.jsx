import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import LiveMarket from './components/LiveMarket';
import BotSection from './components/BotSection';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#0A0A0A' }}>
      <Navbar />
      <Hero />
      <Features />
      <LiveMarket />
      <BotSection />
      <CTA />
      <Footer />
    </div>
  );
}
