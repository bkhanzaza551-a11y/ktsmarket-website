import { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import LiveMarket from './components/LiveMarket';
import BotSection from './components/BotSection';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';

function HomePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0A0A0A' }}>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <LiveMarket />
      <BotSection />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default function App() {
  const isLegalRoute = typeof window !== 'undefined' && 
    (window.location.pathname.startsWith('/privacy') || 
     window.location.pathname.startsWith('/terms') || 
     window.location.pathname.startsWith('/delete-account'));
  
  const [loading, setLoading] = useState(!isLegalRoute);
  const handleComplete = useCallback(() => setLoading(false), []);

  return (
    <>
      {loading && <Preloader onComplete={handleComplete} />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<PrivacyPolicy />} />
          <Route path="/delete-account" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
