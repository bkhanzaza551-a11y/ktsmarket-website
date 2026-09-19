import { Shield, ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from '../components/Logo';

const sections = [
  {
    id: 'information-collected',
    title: '1. Information We Collect',
    content: `When you use KTS Markets, we may collect the following types of information:

**Personal Information:**
• Name and email address (when you create an account)
• Phone number (optional, for account verification)
• Profile picture (optional, from Google Sign-In)
• Security code (for account recovery)

**Trading & Account Information:**
• MT5 account number and broker details (for bot configuration)
• Trading history and performance data
• Bot configuration and preferences
• Demo account details (if submitted)

**Automatically Collected Information:**
• Device type, model, and operating system
• App version and usage statistics
• IP address and approximate location
• Login timestamps and session data
• Push notification tokens (for delivering alerts)

**AI Chatbot Data:**
• Chat messages sent to our AI assistant
• Conversation history (stored to improve response quality)
• Usage patterns and interaction data

**We do NOT collect:**
• Financial account passwords
• Bank or payment card details
• Biometric data
• Precise GPS location`,
  },
  {
    id: 'how-we-use',
    title: '2. How We Use Your Information',
    content: `We use the collected information for the following purposes:

**Service Delivery:**
• To provide AI-powered trading signals and market analysis
• To operate the automated trading bot on your behalf
• To deliver educational courses and trading content
• To send real-time notifications about signals, trades, and alerts

**Account Management:**
• To create and manage your user account
• To verify your identity and prevent fraud
• To provide customer support

**Improvement & Analytics:**
• To analyze app usage and improve features
• To personalize your experience and recommendations
• To conduct research and analytics (aggregated, anonymized data)

**Communication:**
• To send important account and service updates
• To respond to your support requests
• To send marketing communications (only with your consent)

**Legal Compliance:**
• To comply with applicable laws and regulations
• To enforce our terms of service
• To protect the rights and safety of our users`,
  },
  {
    id: 'data-sharing',
    title: '3. Data Sharing & Third Parties',
    content: `We may share your information with the following third parties:

**Service Providers:**
• Google (Firebase) — for push notifications and analytics
• Groq AI — for powering the AI chatbot (chat messages only)
• Exness/MT5 brokers — for trading bot execution (account details only)
• Railway (hosting) — for secure backend infrastructure

**We do NOT sell your personal data to any third parties.**

**Legal Requirements:**
We may disclose your information if required by law, court order, or governmental regulation, or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others.

**Business Transfers:**
In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change.`,
  },
  {
    id: 'data-security',
    title: '4. Data Security',
    content: `We take the security of your data seriously and implement industry-standard measures:

• **Encryption:** All data is transmitted using TLS/SSL encryption (HTTPS)
• **Authentication:** Secure token-based authentication (Sanctum)
• **Password Hashing:** Passwords are bcrypt-hashed and never stored in plain text
• **API Keys:** Encrypted at rest using AES-256 encryption
• **Access Control:** Role-based access control (RBAC) with principle of least privilege
• **Database:** PostgreSQL with encrypted storage on Railway
• **Regular Backups:** Automated database backups
• **Monitoring:** Activity logging and anomaly detection

While we strive to protect your information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.`,
  },
  {
    id: 'data-retention',
    title: '5. Data Retention',
    content: `We retain your information for as long as your account is active or as needed to provide services:

• **Account Data:** Retained until you delete your account
• **Trading History:** Retained for 2 years for analysis and compliance
• **Chat Logs:** AI chatbot conversations retained for 90 days to improve quality
• **Support Tickets:** Retained until resolved, then archived for 1 year
• **Analytics Data:** Anonymized and retained indefinitely
• **Push Notification Tokens:** Removed when you uninstall the app

When you delete your account, we permanently remove your personal data within 30 days, except where required by law.`,
  },
  {
    id: 'your-rights',
    title: '6. Your Rights',
    content: `You have the following rights regarding your personal data:

• **Access:** Request a copy of all personal data we hold about you
• **Correction:** Request correction of inaccurate or incomplete data
• **Deletion:** Request permanent deletion of your account and data
• **Portability:** Request your data in a machine-readable format
• **Opt-Out:** Unsubscribe from marketing communications at any time
• **Restriction:** Request restriction of processing in certain circumstances
• **Objection:** Object to processing based on legitimate interests

To exercise any of these rights, contact us at: **privacy@ktsmarkets.com**

We will respond to your request within 30 days.`,
  },
  {
    id: 'children-privacy',
    title: '7. Children\'s Privacy',
    content: `KTS Markets is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.

If you are a parent or guardian and believe your child has provided us with personal information, please contact us at **privacy@ktsmarkets.com**.

Users under 18 should use the app only with the involvement and consent of a parent or legal guardian.`,
  },
  {
    id: 'trading-disclaimer',
    title: '8. Trading Risk Disclaimer',
    content: `**Important:** Trading Forex, CFDs, cryptocurrencies, and other financial instruments carries significant risk and may not be suitable for all investors.

• Past performance is not indicative of future results
• Trading involves substantial risk of loss
• You should never trade with money you cannot afford to lose
• KTS Markets provides AI-generated analysis for informational purposes only
• Our AI signals and bot trades are NOT financial advice
• Automated trading carries additional risks including system failures
• You are solely responsible for your trading decisions

KTS Markets, its employees, and affiliates are NOT responsible for any losses incurred through use of the app, AI signals, or trading bot.

**Regulatory Note:** KTS Markets is an educational and analysis platform. We do not manage client funds or provide managed account services.`,
  },
  {
    id: 'educational-content',
    title: '9. Educational Content',
    content: `KTS Markets provides free educational content including:

• **Trading Courses:** Complete courses covering beginner to advanced topics
• **Smart Money Concepts (SMC):** Institutional trading strategies
• **Price Action:** Candlestick patterns and chart analysis
• **Risk Management:** Position sizing and capital preservation
• **Technical Analysis:** Indicators, support/resistance, and trend analysis
• **Market Psychology:** Emotional discipline and mindset training

**All educational content is provided FREE of charge.** There are no paid courses or premium educational tiers. Content is regularly updated to reflect current market conditions and best practices.

Educational content is for informational purposes only and does not constitute financial advice. Always do your own research before making trading decisions.`,
  },
  {
    id: 'ai-chatbot',
    title: '10. AI Chatbot',
    content: `KTS Markets includes an AI-powered chatbot assistant ("KTS Bot") powered by Groq AI:

• The AI provides market analysis, trading insights, and educational information
• Chat messages are processed by Groq AI's API for generating responses
• Conversation history is stored to maintain context across sessions
• The AI may use tool functions to check your account status, send emails, or create support tickets
• AI-generated content is for informational purposes only and should not be considered financial advice

**Abuse Prevention:**
• We monitor for abusive or inappropriate messages
• Repeated abuse may result in temporary suspension of chatbot access
• All conversations are logged for quality and safety purposes`,
  },
  {
    id: 'push-notifications',
    title: '11. Push Notifications',
    content: `KTS Markets uses push notifications to deliver:

• New trading signals and market alerts
• Trading bot status updates (open/closed positions)
• Support ticket responses
• Important account and security notifications
• Educational content updates

You can manage notification preferences in the app settings. Disabling notifications may cause you to miss important trading signals and alerts.

Push notification tokens are stored securely and are only used for delivering notifications. You can revoke notification access by disabling them in your device settings.`,
  },
  {
    id: 'changes',
    title: '12. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by:

• Posting the new Privacy Policy on this page
• Updating the "Last Updated" date at the top
• Sending an in-app notification for significant changes

We encourage you to review this Privacy Policy periodically. Continued use of the app after changes constitutes acceptance of the updated policy.`,
  },
  {
    id: 'contact',
    title: '13. Contact Us',
    content: `If you have any questions about this Privacy Policy or our data practices, please contact us:

**Email:** privacy@ktsmarkets.com
**WhatsApp:** +92 337 1244640
**Website:** https://ktsmarkets.com

**Data Protection Officer:**
KTS Markets Privacy Team
Email: dpo@ktsmarkets.com

We aim to respond to all inquiries within 30 business days.`,
  },
];

function AccordionSection({ section, isOpen, onToggle }) {
  return (
    <div style={{
      borderBottom: '1px solid #1E1E1E',
    }}>
      <button onClick={onToggle} style={{
        width: '100%', background: 'none', border: 'none',
        padding: '20px 0', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', cursor: 'pointer',
        color: isOpen ? '#D4A843' : '#CCC',
        transition: 'color 0.2s',
      }}>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: 16,
          fontWeight: 600, textAlign: 'left',
        }}>{section.title}</span>
        {isOpen ? <ChevronUp size={18} color="#D4A843" /> : <ChevronDown size={18} color="#666" />}
      </button>
      {isOpen && (
        <div style={{
          paddingBottom: 20, fontSize: 14, color: '#999',
          lineHeight: 1.8, whiteSpace: 'pre-line',
        }}>
          {section.content}
        </div>
      )}
    </div>
  );
}

export default function PrivacyPolicy() {
  const [openSections, setOpenSections] = useState(['information-collected']);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSection = (id) => {
    setOpenSections(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenSections(sections.map(s => s.id));
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0A0A0A' }}>
      {/* Navbar */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(10,10,10,0.95)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid #1E1E1E', padding: '0 16px',
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto', display: 'flex',
          alignItems: 'center', justifyContent: 'space-between', height: 64,
        }}>
          <a href="/" style={{ textDecoration: 'none' }}>
            <Logo size={32} />
          </a>

          {/* Desktop Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }} className="privacy-nav-links">
            <a href="/" style={{
              color: '#999', textDecoration: 'none', fontSize: 14,
              fontWeight: 500, transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = '#D4A843'}
            onMouseLeave={e => e.target.style.color = '#999'}
            >Home</a>
            <a href="/#features" style={{
              color: '#999', textDecoration: 'none', fontSize: 14,
              fontWeight: 500, transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = '#D4A843'}
            onMouseLeave={e => e.target.style.color = '#999'}
            >Features</a>
            <a href="https://play.google.com/store/apps/details?id=com.ktsmarkets" target="_blank" rel="noreferrer" style={{
              background: 'linear-gradient(135deg, #D4A843, #B8922E)',
              color: '#0A0A0A', padding: '8px 20px', borderRadius: 8,
              fontSize: 13, fontWeight: 700, textDecoration: 'none',
            }}>Download App</a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{
            display: 'none', background: 'none', border: 'none',
            color: '#D4A843', cursor: 'pointer', padding: 4,
          }} className="privacy-mobile-btn">
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={{
            position: 'absolute', top: 64, left: 0, right: 0,
            background: 'rgba(10,10,10,0.98)', borderBottom: '1px solid #1E1E1E',
            padding: '16px', display: 'flex', flexDirection: 'column', gap: 14,
          }}>
            <a href="/" onClick={() => setMobileMenuOpen(false)} style={{
              color: '#CCC', textDecoration: 'none', fontSize: 15, fontWeight: 500,
            }}>Home</a>
            <a href="/#features" onClick={() => setMobileMenuOpen(false)} style={{
              color: '#CCC', textDecoration: 'none', fontSize: 15, fontWeight: 500,
            }}>Features</a>
            <a href="https://play.google.com/store/apps/details?id=com.ktsmarkets" target="_blank" rel="noreferrer" style={{
              background: 'linear-gradient(135deg, #D4A843, #B8922E)',
              color: '#0A0A0A', padding: '10px 20px', borderRadius: 8,
              fontSize: 13, fontWeight: 700, textDecoration: 'none', textAlign: 'center',
            }}>Download App</a>
          </div>
        )}
      </nav>

      {/* Content */}
      <div style={{
        maxWidth: 800, margin: '0 auto', padding: '90px 16px 50px',
      }}>
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div style={{
            width: 64, height: 64, borderRadius: 16,
            background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 20px',
          }}>
            <Shield size={28} color="#D4A843" />
          </div>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(28px, 5vw, 42px)',
            fontWeight: 800, marginBottom: 12,
          }}>
            Privacy{' '}
            <span style={{
              background: 'linear-gradient(135deg, #D4A843, #F0D78C)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>Policy</span>
          </h1>
          <p style={{ color: '#666', fontSize: 14, marginBottom: 8 }}>
            KTS Markets Mobile Application
          </p>
          <p style={{ color: '#444', fontSize: 12 }}>
            Last Updated: September 16, 2026
          </p>
        </div>

        {/* Summary Card */}
        <div style={{
          background: '#141414', border: '1px solid #1E1E1E',
          borderRadius: 16, padding: 24, marginBottom: 32,
        }}>
          <h3 style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: 15,
            fontWeight: 700, color: '#D4A843', marginBottom: 12,
          }}>Quick Summary</h3>
          <div style={{ fontSize: 13, color: '#888', lineHeight: 1.7 }}>
            <p style={{ marginBottom: 8 }}>
              <strong style={{ color: '#CCC' }}>What we collect:</strong> Name, email, device info, trading data, and chat messages.
            </p>
            <p style={{ marginBottom: 8 }}>
              <strong style={{ color: '#CCC' }}>How we use it:</strong> To provide trading signals, operate the AI bot, deliver education, and improve our services.
            </p>
            <p style={{ marginBottom: 8 }}>
              <strong style={{ color: '#CCC' }}>We do NOT sell your data</strong> to third parties.
            </p>
            <p>
              <strong style={{ color: '#CCC' }}>All courses are FREE.</strong> There are no paid educational tiers.
            </p>
          </div>
        </div>

        {/* Expand All */}
        <button onClick={expandAll} style={{
          background: 'none', border: '1px solid #1E1E1E',
          color: '#888', padding: '8px 16px', borderRadius: 8,
          fontSize: 12, cursor: 'pointer', marginBottom: 16,
          transition: 'all 0.2s',
        }}
        onMouseEnter={e => { e.target.style.borderColor = '#D4A84340'; e.target.style.color = '#D4A843'; }}
        onMouseLeave={e => { e.target.style.borderColor = '#1E1E1E'; e.target.style.color = '#888'; }}
        >
          Expand All Sections
        </button>

        {/* Sections */}
        <div style={{
          background: '#141414', border: '1px solid #1E1E1E',
          borderRadius: 16, padding: '6px 16px',
        }}>
          {sections.map(section => (
            <AccordionSection
              key={section.id}
              section={section}
              isOpen={openSections.includes(section.id)}
              onToggle={() => toggleSection(section.id)}
            />
          ))}
        </div>

        {/* Footer */}
        <div style={{
          textAlign: 'center', marginTop: 40, padding: 24,
          borderTop: '1px solid #1E1E1E',
        }}>
          <p style={{ fontSize: 12, color: '#444', lineHeight: 1.6 }}>
            This Privacy Policy is effective as of September 16, 2026.
            <br />
            © 2026 KTS Markets. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: '#666', marginTop: 12 }}>
            Questions? Contact us at{' '}
            <a href="mailto:privacy@ktsmarkets.com" style={{ color: '#D4A843', textDecoration: 'none' }}>
              privacy@ktsmarkets.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
