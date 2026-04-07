export default function Support() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mate+SC&family=Mate:ital@0;1&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --red: rgb(139, 26, 26);
          --accent: rgb(238, 139, 96);
          --cream: rgb(232, 213, 181);
          --cream-dark: rgb(210, 188, 155);
          --text: rgb(60, 20, 20);
        }
        body {
          background-color: var(--cream);
          color: var(--text);
          font-family: 'Mate', serif;
          min-height: 100vh;
        }
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: 0.4;
        }
        nav {
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 48px;
          background: rgba(232, 213, 181, 0.95);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(139, 26, 26, 0.15);
        }
        .nav-logo {
          font-family: 'Mate SC', serif;
          font-size: 20px;
          color: var(--red);
          text-decoration: none;
          letter-spacing: 0.04em;
        }
        .nav-back {
          font-family: 'Mate', serif;
          font-size: 14px;
          color: var(--red);
          text-decoration: none;
          opacity: 0.7;
          transition: opacity 0.2s;
        }
        .nav-back:hover { opacity: 1; }

        .page-wrap {
          position: relative;
          z-index: 1;
          max-width: 760px;
          margin: 0 auto;
          padding: 64px 32px 96px;
        }
        .page-header {
          margin-bottom: 48px;
          border-bottom: 1px solid rgba(139, 26, 26, 0.2);
          padding-bottom: 32px;
        }
        .page-header h1 {
          font-family: 'Mate SC', serif;
          font-size: clamp(28px, 5vw, 42px);
          color: var(--red);
          letter-spacing: 0.03em;
          margin-bottom: 10px;
        }
        .page-header p {
          font-size: 15px;
          opacity: 0.65;
          font-style: italic;
        }

        /* Contact card */
        .contact-card {
          background: rgba(232, 213, 181, 0.6);
          border: 1px solid rgba(139, 26, 26, 0.25);
          border-radius: 4px;
          padding: 32px;
          margin-bottom: 48px;
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }
        .contact-icon {
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          color: var(--red);
          opacity: 0.75;
        }
        .contact-card h2 {
          font-family: 'Mate SC', serif;
          font-size: 17px;
          color: var(--red);
          letter-spacing: 0.04em;
          margin-bottom: 8px;
        }
        .contact-card p {
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 16px;
          opacity: 0.85;
        }
        .contact-link {
          display: inline-block;
          font-family: 'Mate SC', serif;
          font-size: 13px;
          letter-spacing: 0.06em;
          color: var(--red);
          border: 1px solid var(--red);
          padding: 10px 22px;
          text-decoration: none;
          border-radius: 2px;
          transition: background 0.2s, color 0.2s;
        }
        .contact-link:hover {
          background: var(--red);
          color: var(--cream);
        }

        /* FAQ */
        .faq-section h2 {
          font-family: 'Mate SC', serif;
          font-size: 17px;
          color: var(--red);
          letter-spacing: 0.04em;
          margin-bottom: 24px;
        }
        .faq-item {
          border-top: 1px solid rgba(139, 26, 26, 0.15);
          padding: 22px 0;
        }
        .faq-item:last-child {
          border-bottom: 1px solid rgba(139, 26, 26, 0.15);
        }
        .faq-q {
          font-family: 'Mate SC', serif;
          font-size: 14px;
          color: var(--red);
          letter-spacing: 0.03em;
          margin-bottom: 10px;
        }
        .faq-a {
          font-size: 15px;
          line-height: 1.7;
          opacity: 0.82;
        }
        .faq-a a {
          color: var(--red);
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        /* Privacy link */
        .privacy-note {
          margin-top: 48px;
          padding-top: 24px;
          border-top: 1px solid rgba(139, 26, 26, 0.15);
          font-size: 14px;
          opacity: 0.65;
          font-style: italic;
        }
        .privacy-note a {
          color: var(--red);
          text-decoration: underline;
          text-underline-offset: 3px;
          font-style: normal;
        }

        /* Footer */
        footer {
          position: relative;
          z-index: 1;
          border-top: 1px solid rgba(139, 26, 26, 0.15);
          padding: 32px 48px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          text-align: center;
        }
        .footer-logo {
          font-family: 'Mate SC', serif;
          font-size: 16px;
          color: var(--red);
          letter-spacing: 0.06em;
        }
        .footer-links {
          list-style: none;
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .footer-links a {
          font-size: 13px;
          color: var(--red);
          text-decoration: none;
          opacity: 0.7;
          transition: opacity 0.2s;
        }
        .footer-links a:hover { opacity: 1; }
        .footer-copy {
          font-size: 12px;
          opacity: 0.45;
        }

        @media (max-width: 600px) {
          nav { padding: 16px 20px; }
          .page-wrap { padding: 40px 20px 72px; }
          footer { padding: 28px 20px; }
          .contact-card { flex-direction: column; gap: 14px; padding: 24px; }
        }
      `}</style>

      <nav>
        <a href="/" className="nav-logo">MyTinni</a>
        <a href="/" className="nav-back">← Back to home</a>
      </nav>

      <div className="page-wrap">
        <div className="page-header">
          <h1>Support</h1>
          <p>Last updated: April 2026</p>
        </div>

        {/* Contact card */}
        <div className="contact-card">
          <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
          </svg>
          <div>
            <h2>Get in Touch</h2>
            <p>
              For any questions, issues, or feedback about MyTinni — whether you're a beta tester or just getting started — reach out directly. We aim to respond within 48 hours.
            </p>
            <a href="mailto:team@mytinni.com" className="contact-link">team@mytinni.com</a>
          </div>
        </div>

        {/* FAQ */}
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-item">
            <p className="faq-q">How do I delete my account?</p>
            <p className="faq-a">
              You can request account deletion at any time via our{' '}
              <a href="/delete-account">account deletion page</a>. This will permanently remove your profile, taste preferences, and any custom content you have created.
            </p>
          </div>

          <div className="faq-item">
            <p className="faq-q">I've forgotten my password. How do I reset it?</p>
            <p className="faq-a">
              On the login screen, tap <em>Forgot password?</em> and enter your registered email address. You'll receive a reset link within a few minutes. Check your spam folder if it doesn't arrive.
            </p>
          </div>

          <div className="faq-item">
            <p className="faq-q">A cocktail's information looks incorrect. How do I flag it?</p>
            <p className="faq-a">
              During beta, please email us at <a href="mailto:team@mytinni.com">team@mytinni.com</a> with the cocktail name and what you believe is incorrect. Your expertise as a tester directly shapes the accuracy of the platform.
            </p>
          </div>

          <div className="faq-item">
            <p className="faq-q">The app isn't behaving as expected. What should I do?</p>
            <p className="faq-a">
              First, try closing and reopening the app. If the issue persists, email us with a brief description of what happened, what you expected, and the device you're using. Screenshots are always helpful.
            </p>
          </div>

          <div className="faq-item">
            <p className="faq-q">Where is my data stored?</p>
            <p className="faq-a">
              All data is stored securely on EU-based servers. We do not sell your data to third parties. For full details, see our <a href="/privacy">Privacy Policy</a>.
            </p>
          </div>

          <div className="faq-item">
            <p className="faq-q">Is MyTinni available on iOS?</p>
            <p className="faq-a">
              Currently MyTinni is available on Android. iOS is in progress and will be announced when available. Sign up on our homepage to be notified.
            </p>
          </div>
        </div>

        <p className="privacy-note">
          For information on how we handle your data, please read our{' '}
          <a href="/privacy">Privacy Policy</a>.
        </p>
      </div>

      <footer>
        <span className="footer-logo">MyTinni</span>
        <ul className="footer-links">
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/delete-account">Delete Account</a></li>
          <li><a href="/support">Support</a></li>
          <li><a href="mailto:team@mytinni.com">Contact</a></li>
        </ul>
        <p className="footer-copy">© {new Date().getFullYear()} MyTinni. All rights reserved. Nascent AGI Solutions.</p>
      </footer>
    </>
  );
}
