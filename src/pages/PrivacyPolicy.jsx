import { useState, useMemo } from 'react';
import { 
  Shield, 
  Lock, 
  Trash2, 
  GraduationCap, 
  Search, 
  ExternalLink, 
  Mail, 
  Phone, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  Server, 
  UserCheck, 
  Globe, 
  ArrowRight,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';
import Logo from '../components/Logo';

const sections = [
  {
    id: 'information-collected',
    icon: FileText,
    badge: 'Data Collection',
    title: '1. Information We Collect',
    content: `When you use the KTS Markets mobile application ("App") and website (collectively, the "Services"), we collect information necessary to deliver our educational and trading analytics features.

**A. Personal Information You Provide:**
• **Account Registration:** Full name, email address, encrypted authentication credentials, and optional profile avatar.
• **Contact Details:** WhatsApp or phone number (optional, for customer support and security verification).
• **Security Credentials:** Secure recovery codes for two-factor and password resets.

**B. Trading & Analytics Configuration:**
• **Terminal Integration:** MT5 account identifier, broker server name, and trader read-only configurations (used solely for bot telemetry, analytics, and performance dashboard display).
• **Demo Requests:** Demo account preferences and trading experience level.

**C. Automatically Collected Technical & Device Data:**
• **Device Telemetry:** Device model, manufacturer, Android OS version, and app release version.
• **Push Notification Tokens:** Firebase Cloud Messaging (FCM) device tokens to deliver real-time educational market signals and system alerts.
• **Network Data:** IP address, internet provider, and approximate geographic location (country/city level).
• **Crash Reports:** Anonymous error logs and performance statistics.

**D. AI Assistant & Communication Data:**
• **AI Chatbot Inquiries:** User prompts and messages sent to our KTS Bot assistant (processed securely via Groq AI to generate real-time educational responses).
• **Customer Support:** Inquiries, support ticket messages, and feedback submitted to our helpdesk.

**E. What We Explicitly DO NOT Collect:**
• Financial account passwords or banking login credentials.
• Credit/debit card numbers or payment card CVVs.
• Biometric data (fingerprints, facial recognition data).
• Precise real-time GPS location tracking.`,
  },
  {
    id: 'how-we-use',
    icon: Server,
    badge: 'Processing',
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
    icon: Globe,
    badge: 'Third Parties',
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
    icon: Lock,
    badge: 'Security',
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
    icon: Trash2,
    badge: 'Google Play Mandate',
    title: '5. Account and Data Deletion Policy',
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
• **Email Request:** Send an email from your registered email address to **ktsfxtraining@gmail.com** with the subject line *"Account Deletion Request"*.

**C. Data Purge Details & Retention Timeline:**
• **What is permanently deleted:** Your profile name, email address, phone number, avatar, authentication credentials, MT5 configuration IDs, push notification tokens, support messages, and chat history.
• **Timeline:** Personal data is purged immediately upon in-app request, and any residual system backups are completely expunged within 30 days.
• **Exceptions:** We retain only anonymized aggregate statistical records or records legally mandated for financial audit and compliance.`,
  },
  {
    id: 'data-retention',
    icon: Server,
    badge: 'Retention',
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
    icon: UserCheck,
    badge: 'User Rights',
    title: '7. Your Privacy Rights (GDPR, CCPA & Global)',
    content: `Regardless of your location, KTS Markets guarantees comprehensive user privacy rights:

• **Right to Access:** Request a copy of all personal data we hold concerning your account.
• **Right to Rectification:** Update or correct inaccurate or incomplete account details directly via the app profile.
• **Right to Erasure ("Right to be Forgotten"):** Request the complete and irreversible erasure of your personal data.
• **Right to Restrict Processing:** Request limitation of data processing under certain regulatory circumstances.
• **Right to Data Portability:** Obtain your personal data in a structured, commonly used, machine-readable format.
• **Right to Withdraw Consent:** Revoke permissions (e.g., push notifications or camera access) at any time via your device settings.

To exercise any of these privacy rights, please contact our Data Protection team at **ktsfxtraining@gmail.com**. We respond to verified requests within 30 days without charge.`,
  },
  {
    id: 'children-privacy',
    icon: AlertTriangle,
    badge: '18+ Restriction',
    title: '8. Age Limitations & Children\'s Privacy (18+ Policy)',
    content: `**Strict 18+ Policy:**
KTS Markets is exclusively intended and designed for individuals who are at least **18 years of age (or the legal age of majority in your jurisdiction)**. 

• We do not knowingly market to, solicit, or collect personal information from individuals under the age of 18.
• If we discover or are notified that an individual under the age of 18 has registered an account or submitted personal information, we will immediately deactivate the account and permanently delete all associated data from our servers.
• If you are a parent or guardian and believe your child under 18 has accessed the app, please notify us immediately at **ktsfxtraining@gmail.com**.`,
  },
  {
    id: 'trading-disclaimer',
    icon: Shield,
    badge: 'Financial Notice',
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
    icon: GraduationCap,
    badge: 'Academy',
    title: '10. Free Educational Content & Academy',
    content: `KTS Markets provides accessible, high-quality trading education:

• **Comprehensive Trading Curriculum:** Beginner to advanced video lessons covering market mechanics, risk management, Smart Money Concepts (SMC), and candlestick price action.
• **100% Free Access:** Core educational courses, lessons, and learning materials within the KTS Academy are provided free of charge to promote financial literacy.
• **Self-Paced Learning:** Users can track module completion and revise educational concepts independently.`,
  },
  {
    id: 'push-notifications',
    icon: Globe,
    badge: 'Notifications',
    title: '11. Push Notifications & Preferences',
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
    icon: FileText,
    badge: 'Policy Updates',
    title: '12. Updates to This Privacy Policy',
    content: `We may revise this Privacy Policy periodically to reflect updates to our services, technological advancements, or regulatory requirements.

When updates occur:
• The **"Last Updated"** date at the top of this policy will be revised.
• Significant changes will be highlighted via in-app banner notifications or email alerts prior to taking effect.
• Your continued use of the KTS Markets application or website following the posting of updated terms signifies your agreement to the revised policy.`,
  },
  {
    id: 'contact',
    icon: Mail,
    badge: 'Contact & DPO',
    title: '13. Contact Information & Data Protection Officer',
    content: `If you have questions, inquiries, or requests regarding this Privacy Policy or our data handling practices, please contact our dedicated Privacy & Compliance Team:

• **Email:** ktsfxtraining@gmail.com
• **Official Website:** https://ktsmarkets.com
• **Direct Account Deletion URL:** https://kts-backend-production.up.railway.app/delete-account
• **WhatsApp Support:** +92 337 1244640

**Data Protection Officer (DPO):**
KTS Markets Privacy & Regulatory Compliance Team
Inquiries are addressed within 30 business days.`,
  },
];

function FormattedContent({ text }) {
  const lines = text.split('\n');

  return (
    <div style={{ color: '#A0AEC0', fontSize: '14px', lineHeight: '1.8' }}>
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={idx} style={{ height: '10px' }} />;
        }

        // Section Headings like **A. Personal Information You Provide:**
        if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
          const heading = trimmed.replace(/\*\*/g, '');
          return (
            <h4 key={idx} style={{ 
              color: '#F0D78C', 
              fontSize: '15px', 
              fontWeight: 700, 
              marginTop: '16px', 
              marginBottom: '8px',
              fontFamily: "'Space Grotesk', sans-serif"
            }}>
              {heading}
            </h4>
          );
        }

        // Bullet Points
        if (trimmed.startsWith('•')) {
          const bulletContent = trimmed.substring(1).trim();
          // Check if bullet has bold prefix
          const boldMatch = bulletContent.match(/^\*\*(.*?)\*\*(.*)/);

          return (
            <div key={idx} style={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              gap: '10px', 
              marginBottom: '6px',
              paddingLeft: '4px'
            }}>
              <span style={{ color: '#D4A843', fontSize: '14px', marginTop: '2px' }}>•</span>
              <div>
                {boldMatch ? (
                  <>
                    <strong style={{ color: '#FFFFFF', fontWeight: 600 }}>{boldMatch[1]}</strong>
                    <span>{boldMatch[2]}</span>
                  </>
                ) : (
                  <span>{bulletContent}</span>
                )}
              </div>
            </div>
          );
        }

        // Standard Paragraph / Numbers
        return (
          <p key={idx} style={{ marginBottom: '8px' }}>
            {line}
          </p>
        );
      })}
    </div>
  );
}

export default function PrivacyPolicy() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('information-collected');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return sections;
    const q = searchQuery.toLowerCase();
    return sections.filter(
      s => s.title.toLowerCase().includes(q) || s.content.toLowerCase().includes(q) || s.badge.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#07090C', color: '#E2E8F0', fontFamily: "Inter, -apple-system, sans-serif" }}>
      {/* Top Ambient Glow */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '1000px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(212,168,67,0.07) 0%, rgba(7,9,12,0) 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Navigation Header */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(7,9,12,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '0 20px',
      }}>
        <div style={{
          maxWidth: 1300,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 70,
        }}>
          <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Logo size={34} />
          </a>

          {/* Desktop Navigation Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }} className="privacy-nav-links">
            <a href="/" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: 14, fontWeight: 500, transition: 'color 0.2s' }}>
              Home
            </a>
            <a href="/#features" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: 14, fontWeight: 500, transition: 'color 0.2s' }}>
              Features
            </a>
            <a href="https://kts-backend-production.up.railway.app/delete-account" target="_blank" rel="noreferrer" style={{ 
              color: '#EF4444', 
              textDecoration: 'none', 
              fontSize: 13, 
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              background: 'rgba(239,68,68,0.1)',
              padding: '6px 14px',
              borderRadius: '8px',
              border: '1px solid rgba(239,68,68,0.2)'
            }}>
              <Trash2 size={14} /> Delete Account Request
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.ktsmarkets" target="_blank" rel="noreferrer" style={{
              background: 'linear-gradient(135deg, #D4A843, #B8922E)',
              color: '#07090C',
              padding: '9px 20px',
              borderRadius: 10,
              fontSize: 13,
              fontWeight: 700,
              textDecoration: 'none',
              boxShadow: '0 4px 15px rgba(212,168,67,0.25)',
              transition: 'transform 0.2s',
            }}>
              Download App
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            style={{ display: 'none', background: 'none', border: 'none', color: '#D4A843', cursor: 'pointer', padding: 6 }} 
            className="privacy-mobile-btn"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div style={{
            position: 'absolute', top: 70, left: 0, right: 0,
            background: 'rgba(7,9,12,0.98)', borderBottom: '1px solid rgba(255,255,255,0.08)',
            padding: '20px', display: 'flex', flexDirection: 'column', gap: 16,
          }}>
            <a href="/" onClick={() => setMobileMenuOpen(false)} style={{ color: '#E2E8F0', textDecoration: 'none', fontSize: 16 }}>Home</a>
            <a href="/#features" onClick={() => setMobileMenuOpen(false)} style={{ color: '#E2E8F0', textDecoration: 'none', fontSize: 16 }}>Features</a>
            <a href="https://kts-backend-production.up.railway.app/delete-account" target="_blank" rel="noreferrer" style={{ color: '#EF4444', textDecoration: 'none', fontSize: 15, fontWeight: 600 }}>Delete Account Request</a>
            <a href="https://play.google.com/store/apps/details?id=com.ktsmarkets" target="_blank" rel="noreferrer" style={{
              background: 'linear-gradient(135deg, #D4A843, #B8922E)',
              color: '#07090C', padding: '12px 20px', borderRadius: 10,
              fontSize: 14, fontWeight: 700, textDecoration: 'none', textAlign: 'center',
            }}>Download App</a>
          </div>
        )}
      </nav>

      {/* Hero Header */}
      <header style={{
        position: 'relative',
        zIndex: 1,
        paddingTop: '130px',
        paddingBottom: '40px',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        background: 'linear-gradient(180deg, rgba(212,168,67,0.04) 0%, rgba(7,9,12,0) 100%)',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(212,168,67,0.1)',
            border: '1px solid rgba(212,168,67,0.25)',
            padding: '6px 16px',
            borderRadius: '100px',
            marginBottom: '20px',
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
            <span style={{ color: '#F0D78C', fontSize: '12px', fontWeight: 600, letterSpacing: '0.5px' }}>
              OFFICIAL GOOGLE PLAY STORE COMPLIANT DOCUMENTATION
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(32px, 5vw, 50px)',
            fontWeight: 800,
            letterSpacing: '-1px',
            marginBottom: '14px',
            color: '#FFFFFF',
          }}>
            Privacy & Data Safety{' '}
            <span style={{
              background: 'linear-gradient(135deg, #D4A843, #FDE68A)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Policy</span>
          </h1>

          <p style={{ maxWidth: 700, margin: '0 auto 24px', color: '#94A3B8', fontSize: '15px', lineHeight: 1.6 }}>
            Comprehensive disclosure regarding data collection, user rights, strict encryption standards, and instant account deletion mechanisms for the <strong>KTS Markets</strong> mobile application (<code style={{ color: '#D4A843', background: 'rgba(212,168,67,0.1)', padding: '2px 6px', borderRadius: '4px' }}>com.ktsmarkets</code>).
          </p>

          {/* Quick Metrics Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '12px',
            maxWidth: 950,
            margin: '0 auto 10px',
          }}>
            <div style={{ background: '#0D1117', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '14px 18px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: 'rgba(16,185,129,0.1)', padding: '8px', borderRadius: '10px' }}><Lock size={18} color="#10B981" /></div>
              <div>
                <div style={{ color: '#FFFFFF', fontSize: '13px', fontWeight: 700 }}>TLS 1.3 & AES-256</div>
                <div style={{ color: '#64748B', fontSize: '11px' }}>End-to-End Encryption</div>
              </div>
            </div>

            <div style={{ background: '#0D1117', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '14px 18px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: 'rgba(239,68,68,0.1)', padding: '8px', borderRadius: '10px' }}><Shield size={18} color="#EF4444" /></div>
              <div>
                <div style={{ color: '#FFFFFF', fontSize: '13px', fontWeight: 700 }}>Zero Data Selling</div>
                <div style={{ color: '#64748B', fontSize: '11px' }}>No Third-Party Brokers</div>
              </div>
            </div>

            <div style={{ background: '#0D1117', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '14px 18px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: 'rgba(59,130,246,0.1)', padding: '8px', borderRadius: '10px' }}><Trash2 size={18} color="#3B82F6" /></div>
              <div>
                <div style={{ color: '#FFFFFF', fontSize: '13px', fontWeight: 700 }}>Instant Deletion</div>
                <div style={{ color: '#64748B', fontSize: '11px' }}>In-App & Web URL</div>
              </div>
            </div>

            <div style={{ background: '#0D1117', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '14px 18px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: 'rgba(212,168,67,0.1)', padding: '8px', borderRadius: '10px' }}><GraduationCap size={18} color="#D4A843" /></div>
              <div>
                <div style={{ color: '#FFFFFF', fontSize: '13px', fontWeight: 700 }}>100% Free Academy</div>
                <div style={{ color: '#64748B', fontSize: '11px' }}>Educational Analytics</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area: Two-Column Layout */}
      <main style={{ maxWidth: 1250, margin: '0 auto', padding: '40px 20px 80px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '40px', alignItems: 'start' }} className="privacy-grid">
          
          {/* Left Column: Sticky Table of Contents & Quick Actions */}
          <aside style={{
            position: 'sticky',
            top: '90px',
            background: '#0D1117',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '16px',
            padding: '20px',
            maxHeight: 'calc(100vh - 120px)',
            overflowY: 'auto',
          }} className="privacy-sidebar">
            {/* Search Box */}
            <div style={{ position: 'relative', marginBottom: '18px' }}>
              <Search size={16} color="#64748B" style={{ position: 'absolute', left: '12px', top: '12px' }} />
              <input
                type="text"
                placeholder="Search privacy topics..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  background: '#07090C',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '10px',
                  padding: '10px 12px 10px 36px',
                  color: '#FFFFFF',
                  fontSize: '13px',
                  outline: 'none',
                }}
              />
            </div>

            <div style={{ fontSize: '11px', fontWeight: 700, color: '#D4A843', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>
              Table of Contents
            </div>

            {/* Navigation List */}
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {filteredSections.map(s => {
                const IconComponent = s.icon;
                const isActive = activeSection === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => scrollToSection(s.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      background: isActive ? 'rgba(212,168,67,0.12)' : 'transparent',
                      color: isActive ? '#F0D78C' : '#94A3B8',
                      border: 'none',
                      textAlign: 'left',
                      fontSize: '13px',
                      fontWeight: isActive ? 600 : 400,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = '#FFFFFF'; }}
                    onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = '#94A3B8'; }}
                  >
                    <IconComponent size={15} color={isActive ? '#D4A843' : '#64748B'} />
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {s.title}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Direct Deletion Card */}
            <div style={{
              marginTop: '24px',
              padding: '16px',
              background: 'linear-gradient(180deg, rgba(239,68,68,0.08) 0%, rgba(239,68,68,0.02) 100%)',
              border: '1px solid rgba(239,68,68,0.2)',
              borderRadius: '12px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#EF4444', fontSize: '12px', fontWeight: 700, marginBottom: '6px' }}>
                <Trash2 size={14} /> Account Deletion
              </div>
              <p style={{ color: '#94A3B8', fontSize: '11px', lineHeight: 1.5, marginBottom: '10px' }}>
                Request complete erasure of your profile and data online without the app.
              </p>
              <a
                href="https://kts-backend-production.up.railway.app/delete-account"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  background: '#EF4444',
                  color: '#FFFFFF',
                  padding: '7px 12px',
                  borderRadius: '6px',
                  fontSize: '11px',
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
              >
                Delete Portal <ExternalLink size={12} />
              </a>
            </div>
          </aside>

          {/* Right Column: Full Readable Document Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Account Deletion Callout Banner (Top Notice) */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(212,168,67,0.08) 0%, rgba(239,68,68,0.05) 100%)',
              border: '1px solid rgba(212,168,67,0.25)',
              borderRadius: '16px',
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ background: '#D4A843', color: '#07090C', padding: '10px', borderRadius: '12px' }}>
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <h3 style={{ color: '#FFFFFF', fontSize: '15px', fontWeight: 700, marginBottom: '4px' }}>
                    Google Play Policy Verified
                  </h3>
                  <p style={{ color: '#94A3B8', fontSize: '13px', margin: 0 }}>
                    Our data safety policies, 18+ age restrictions, and deletion workflows strictly adhere to global regulatory standards.
                  </p>
                </div>
              </div>
              <a
                href="https://kts-backend-production.up.railway.app/delete-account"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: '#FFFFFF',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                Web Deletion Form <ArrowRight size={14} />
              </a>
            </div>

            {/* Render Every Section */}
            {filteredSections.map(s => {
              const IconComp = s.icon;
              return (
                <article
                  key={s.id}
                  id={s.id}
                  style={{
                    background: '#0D1117',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '16px',
                    padding: '28px',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(212,168,67,0.3)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px', borderBottom: '1px solid rgba(255,255,255,0.05)', pb: '14px', paddingBottom: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        background: 'rgba(212,168,67,0.1)',
                        border: '1px solid rgba(212,168,67,0.2)',
                        padding: '8px',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        <IconComp size={20} color="#D4A843" />
                      </div>
                      <h2 style={{
                        color: '#FFFFFF',
                        fontSize: '20px',
                        fontWeight: 700,
                        margin: 0,
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}>
                        {s.title}
                      </h2>
                    </div>
                    <span style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#94A3B8',
                      fontSize: '11px',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: '6px',
                    }}>
                      {s.badge}
                    </span>
                  </div>

                  <FormattedContent text={s.content} />
                </article>
              );
            })}

            {/* Footer Sign-off */}
            <footer style={{
              textAlign: 'center',
              padding: '30px 20px',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              marginTop: '20px',
            }}>
              <p style={{ color: '#64748B', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
                Effective Date: September 16, 2026 • Application: <strong>KTS Markets</strong> (<code style={{ color: '#D4A843' }}>com.ktsmarkets</code>)<br />
                © 2026 KTS Markets. All intellectual property, software rights, and educational curricula reserved.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '14px' }}>
                <a href="mailto:ktsfxtraining@gmail.com" style={{ color: '#D4A843', fontSize: '12px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Mail size={14} /> ktsfxtraining@gmail.com
                </a>
                <a href="https://wa.me/923371244640" target="_blank" rel="noreferrer" style={{ color: '#94A3B8', fontSize: '12px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Phone size={14} /> +92 337 1244640
                </a>
              </div>
            </footer>
          </div>
        </div>
      </main>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 900px) {
          .privacy-grid {
            grid-template-columns: 1fr !important;
          }
          .privacy-sidebar {
            display: none !important;
          }
          .privacy-nav-links {
            display: none !important;
          }
          .privacy-mobile-btn {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}
