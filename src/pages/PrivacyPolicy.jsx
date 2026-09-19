import { Shield, ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from '../components/Logo';

const sections = [
  {
    id: 'information-collected',
    title: '1. Information We Collect',
    content: `When you use the KTS Markets mobile application ("App") and website (collectively, the "Services"), we collect information necessary to deliver our educational and trading analytics features.

**A. Personal Information You Provide:**
• **Account Registration:** Name, email address, password (bcrypt-hashed), and profile avatar.
• **Contact Details:** Phone number or WhatsApp number (optional, for customer support and account verification).
• **Security Credentials:** Account recovery security codes.

**B. Trading & Analytics Information:**
• **Broker & Terminal Integration:** MT5 account identifier, broker server name, and trader read-only configurations (used solely for bot tracking, analytics, and performance dashboard display).
• **Demo Requests:** Demo account preferences and trading experience level.

**C. Automatically Collected Device & Technical Data:**
• **Device Information:** Device model, manufacturer, operating system version, and unique device identifiers.
• **App Performance & Telemetry:** App version, crash diagnostics, feature usage statistics, and interaction telemetry.
• **Network Data:** IP address, internet service provider, and approximate geographic location (country/city level).
• **Push Notification Tokens:** Firebase Cloud Messaging (FCM) tokens to deliver real-time educational market signals and system alerts.

**D. AI Assistant & Communication Data:**
• **AI Chatbot Inquiries:** User prompts and messages sent to our KTS Bot assistant (processed securely to generate real-time educational responses).
• **Customer Support:** Inquiries, support ticket messages, and feedback submitted to our helpdesk.

**E. Information We Explicitly DO NOT Collect:**
• Financial account passwords or banking login credentials.
• Credit/debit card numbers or payment card CVVs.
• Biometric data (fingerprints, facial scans).
• Precise real-time GPS location tracking.`,
  },
  {
    id: 'how-we-use',
    title: '2. How We Use Your Information',
    content: `We process your data transparently and solely for legitimate service purposes:

• **Educational & Signal Services:** Delivering daily educational trading signals, technical market breakdowns, and live chart insights.
• **Trading Bot Analytics:** Monitoring MT5 automated bot configurations, equity curves, and performance statistics.
• **Trading Academy Access:** Providing structured video lessons, SMC modules, price action courses, and progress tracking.
• **Account Administration:** Authenticating logins, managing profile preferences, preventing duplicate accounts, and securing user accounts.
• **Real-time Notifications:** Broadcasting critical signal updates, market news, lesson additions, and support ticket replies.
• **AI Assistant Processing:** Enabling interactive AI chat interactions and contextual educational assistance.
• **Security & Abuse Prevention:** Detecting fraudulent activities, unauthorized access, API abuse, and terms of service violations.
• **Legal & Regulatory Compliance:** Adhering to applicable digital privacy and consumer protection laws.`,
  },
  {
    id: 'data-sharing',
    title: '3. Data Sharing & Third-Party Service Providers',
    content: `We prioritize user privacy and adhere to strict data-sharing standards:

**A. Third-Party Service Providers:**
We engage reputable third-party infrastructure providers to support our operations under strict confidentiality and security agreements:
• **Google Firebase:** For push notification delivery (FCM), crash reporting, and Google OAuth sign-in authentication.
• **Groq AI:** For high-speed API processing of AI chatbot prompts and educational inquiries (transferred securely, not used for external AI training).
• **Railway & Cloud Infrastructure:** For enterprise-grade encrypted backend hosting, database management, and API servers.

**B. Strict No-Sale Policy:**
**We NEVER sell, rent, monetize, or trade your personal data to third-party advertisers, data brokers, or marketing networks.**

**C. Legal & Safety Disclosures:**
We may disclose information only if required by a valid subpoena, court order, or applicable legal process, or when necessary to protect the vital security and property rights of KTS Markets and its users.`,
  },
  {
    id: 'data-security',
    title: '4. Data Security & Storage',
    content: `We implement robust technical and organizational safeguards to protect your personal data:

• **Transmission Encryption:** All data transmitted between the mobile app, website, and backend servers is encrypted using industry-standard Transport Layer Security (TLS 1.3 / HTTPS).
• **Data at Rest Encryption:** Sensitive records, database backups, and server disks are protected with AES-256 encryption.
• **Authentication Security:** Secure token-based authentication (Laravel Sanctum) with cryptographic signature validation.
• **Password Hashing:** Passwords are irreversibly hashed using standard Bcrypt algorithms; plain-text passwords are never stored or accessible.
• **Role-Based Access Control (RBAC):** Strict internal administrative controls ensuring only authorized staff can access user data on a need-to-know basis.
• **Continuous Monitoring:** Server activity logging, automated anomaly detection, and regular vulnerability scanning.`,
  },
  {
    id: 'account-deletion',
    title: '5. Account and Data Deletion Policy (Google Play Compliant)',
    content: `In full compliance with Google Play's User Data and Account Deletion policies, KTS Markets provides seamless, transparent mechanisms for users to permanently delete their account and associated data:

**A. In-App Deletion (Instant):**
You can permanently delete your account directly inside the KTS Markets mobile app at any time:
1. Open the **KTS Markets App**.
2. Navigate to **Profile** (bottom navigation bar).
3. Tap on **Edit Profile** or **Settings**.
4. Tap **"Delete Account"** and confirm your password or security verification.
5. Your account, authentication tokens, and profile data are immediately terminated.

**B. Web-Based Deletion Request (Without Reinstalling the App):**
Users who have uninstalled the app or prefer to request deletion via the web can submit an account deletion request online:
• **Direct Deletion URL:** https://kts-backend-production.up.railway.app/delete-account
• **Email Request:** Send an email from your registered email address to **privacy@ktsmarkets.com** or **support@ktsmarkets.com** with the subject line *"Account Deletion Request"*.

**C. Data Purge Details & Retention Timeline:**
• **What is permanently deleted:** Your profile name, email address, phone number, avatar, authentication credentials, MT5 configuration IDs, push notification tokens, support messages, and chat history.
• **Timeline:** Personal data is purged immediately upon in-app request, and any residual system backups are completely expunged within 30 days.
• **Exceptions:** We retain only anonymized aggregate statistical records or records legally mandated for financial audit and compliance.`,
  },
  {
    id: 'data-retention',
    title: '6. Data Retention Schedule',
    content: `We retain personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy:

• **Active Account Information:** Retained for the lifetime of your active account until you request deletion.
• **Trading & Signal Logs:** Historical signal performance data is retained in anonymized format for analytical accuracy.
• **AI Conversation Logs:** Retained for up to 90 days for service quality improvement and spam prevention, after which they are automatically purged.
• **Support Ticket Archives:** Archived for 12 months following resolution for quality assurance, then permanently deleted.
• **Push Notification Tokens:** Automatically invalidated and removed upon app uninstallation or token rotation.`,
  },
  {
    id: 'your-rights',
    title: '7. Your Privacy Rights (GDPR, CCPA & Global)',
    content: `Regardless of your location, KTS Markets guarantees comprehensive user privacy rights:

• **Right to Access:** Request a copy of all personal data we hold concerning your account.
• **Right to Rectification:** Update or correct inaccurate or incomplete account details directly via the app profile.
• **Right to Erasure ("Right to be Forgotten"):** Request the complete and irreversible erasure of your personal data.
• **Right to Restrict Processing:** Request limitation of data processing under certain regulatory circumstances.
• **Right to Data Portability:** Obtain your personal data in a structured, commonly used, machine-readable format.
• **Right to Withdraw Consent:** Revoke permissions (e.g., push notifications or camera access) at any time via your device settings.

To exercise any of these privacy rights, please contact our Data Protection team at **privacy@ktsmarkets.com**. We respond to verified requests within 30 days without charge.`,
  },
  {
    id: 'children-privacy',
    title: '8. Age Limitations & Children\'s Privacy (18+ Policy)',
    content: `**Strict 18+ Policy:**
KTS Markets is exclusively intended and designed for individuals who are at least **18 years of age (or the legal age of majority in your jurisdiction)**. 

• We do not knowingly market to, solicit, or collect personal information from individuals under the age of 18.
• If we discover or are notified that an individual under the age of 18 has registered an account or submitted personal information, we will immediately deactivate the account and permanently delete all associated data from our servers.
• If you are a parent or guardian and believe your child under 18 has accessed the app, please notify us immediately at **privacy@ktsmarkets.com**.`,
  },
  {
    id: 'trading-disclaimer',
    title: '9. Financial Services & Trading Risk Disclaimer',
    content: `**Important Regulatory & Risk Notice:**

• **Educational & Informational Purpose Only:** KTS Markets is an educational technology and market analytics platform. All materials, trading signals, course videos, charting patterns, bot analytics, and AI assistant insights are provided strictly for educational, informational, and research purposes.
• **No Financial Advice:** None of the content provided in the App or on the Website constitutes financial, investment, trading, tax, or legal advice. We do not provide personalized investment recommendations.
• **Substantial Risk Warning:** Trading foreign exchange (Forex), contracts for difference (CFDs), commodities, and cryptocurrencies involves significant financial risk. Market prices are volatile, and you may lose some or all of your invested capital. Never trade with capital you cannot afford to lose.
• **No Guarantees:** Past signal performance, win rates, or historical bot metrics do not guarantee future results. Automated trading configurations and risk parameters are user-configured tools, not guarantees of profit.
• **Non-Broker Entity:** KTS Markets is NOT a registered financial broker-dealer, investment advisor, or asset manager. We do not accept cash deposits, hold investor funds, or execute financial transactions directly.`,
  },
  {
    id: 'educational-content',
    title: '10. Free Educational Content & Academy',
    content: `KTS Markets provides accessible, high-quality trading education:

• **Comprehensive Trading Curriculum:** Beginner to advanced video lessons covering market mechanics, risk management, Smart Money Concepts (SMC), and candlestick price action.
• **100% Free Access:** Core educational courses, lessons, and learning materials within the KTS Academy are provided free of charge to promote financial literacy.
• **Self-Paced Learning:** Users can track module completion and revise educational concepts independently.`,
  },
  {
    id: 'push-notifications',
    title: '11. Push Notifications & Communication Preferences',
    content: `KTS Markets uses push notifications delivered via Google Firebase Cloud Messaging (FCM) to provide timely updates:

• Real-time educational market signals and technical trade alerts.
• Educational course releases and academy updates.
• Customer support chat and ticket replies.
• Account security notices and system announcements.

**Managing Notification Preferences:**
You can modify or disable push notification channels at any time inside the app settings (**Profile > Notification Settings**) or via your Android/iOS operating system device settings.`,
  },
  {
    id: 'changes',
    title: '12. Updates to This Privacy Policy',
    content: `We may revise this Privacy Policy periodically to reflect updates to our services, technological advancements, or regulatory requirements.

When updates occur:
• The **"Last Updated"** date at the top of this policy will be revised.
• Significant changes will be highlighted via in-app banner notifications or email alerts prior to taking effect.
• Your continued use of the KTS Markets application or website following the posting of updated terms signifies your agreement to the revised policy.`,
  },
  {
    id: 'contact',
    title: '13. Contact Information & Data Protection Officer',
    content: `If you have questions, inquiries, or requests regarding this Privacy Policy or our data handling practices, please contact our dedicated Privacy & Compliance Team:

• **Email:** privacy@ktsmarkets.com
• **Customer Support:** support@ktsmarkets.com
• **Official Website:** https://ktsmarkets.com
• **Direct Account Deletion URL:** https://kts-backend-production.up.railway.app/delete-account
• **WhatsApp Support:** +92 337 1244640

**Data Protection Officer (DPO):**
KTS Markets Privacy & Regulatory Compliance Team
Inquiries are addressed within 30 business days.`,
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
  const [openSections, setOpenSections] = useState(sections.map(s => s.id));
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
