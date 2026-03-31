export default function DeleteAccount() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mate+SC&family=Mate:ital@0;1&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --red: rgb(139, 26, 26);
          --accent: rgb(238, 139, 96);
          --cream: rgb(232, 213, 181);
          --text: rgb(60, 20, 20);
        }
        body {
          background-color: var(--cream);
          color: var(--text);
          font-family: 'Mate', serif;
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
        }
        .nav-back {
          font-size: 13px;
          color: var(--red);
          text-decoration: none;
          opacity: 0.6;
          letter-spacing: 0.05em;
          transition: opacity 0.2s;
        }
        .nav-back:hover { opacity: 1; }
        .page-wrap {
          max-width: 780px;
          margin: 0 auto;
          padding: 64px 48px 100px;
          position: relative;
          z-index: 1;
        }
        .page-label {
          font-family: 'Mate SC', serif;
          font-size: 11px;
          letter-spacing: 0.2em;
          color: var(--accent);
          margin-bottom: 12px;
        }
        h1 {
          font-family: 'Mate SC', serif;
          font-size: 42px;
          color: var(--red);
          margin-bottom: 8px;
          line-height: 1.1;
        }
        .subtitle {
          font-size: 16px;
          opacity: 0.65;
          margin-bottom: 40px;
          font-style: italic;
          line-height: 1.6;
        }
        .ornament {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 40px;
        }
        .ornament-line { flex: 1; height: 1px; background: rgba(139,26,26,0.2); }
        .ornament-diamond {
          width: 7px; height: 7px;
          background: var(--accent);
          transform: rotate(45deg);
          flex-shrink: 0;
        }
        h2 {
          font-family: 'Mate SC', serif;
          font-size: 20px;
          color: var(--red);
          margin: 40px 0 12px;
        }
        p {
          font-size: 15px;
          line-height: 1.85;
          opacity: 0.82;
          margin-bottom: 14px;
        }
        a {
          color: var(--red);
          text-decoration: underline;
          text-underline-offset: 3px;
          opacity: 0.8;
        }
        a:hover { opacity: 1; }
        .steps {
          margin: 24px 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .step {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          padding: 20px 24px;
          border: 1px solid rgba(139,26,26,0.15);
          background: rgba(139,26,26,0.03);
          border-radius: 2px;
        }
        .step-number {
          font-family: 'Mate SC', serif;
          font-size: 22px;
          color: var(--accent);
          line-height: 1;
          flex-shrink: 0;
          width: 32px;
          padding-top: 2px;
        }
        .step-content h3 {
          font-family: 'Mate SC', serif;
          font-size: 15px;
          color: var(--red);
          margin-bottom: 6px;
          letter-spacing: 0.04em;
        }
        .step-content p {
          font-size: 14px;
          margin-bottom: 0;
          line-height: 1.7;
        }
        .warning-box {
          border: 1px solid rgba(139,26,26,0.3);
          background: rgba(139,26,26,0.06);
          padding: 20px 24px;
          border-radius: 2px;
          margin: 32px 0;
        }
        .warning-box p {
          margin-bottom: 0;
          font-size: 14px;
        }
        .warning-label {
          font-family: 'Mate SC', serif;
          font-size: 11px;
          letter-spacing: 0.15em;
          color: var(--red);
          margin-bottom: 8px;
          display: block;
        }
        .email-block {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 24px;
          border: 1px solid rgba(139,26,26,0.25);
          background: rgba(139,26,26,0.04);
          border-radius: 2px;
          margin: 16px 0;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s;
        }
        .email-block:hover {
          background: rgba(139,26,26,0.08);
          border-color: rgba(139,26,26,0.4);
        }
        .email-block span {
          font-family: 'Mate SC', serif;
          font-size: 14px;
          color: var(--red);
          letter-spacing: 0.05em;
          text-decoration: none;
        }
        ul {
          margin: 12px 0 14px 0;
          padding-left: 0;
          list-style: none;
        }
        ul li {
          font-size: 15px;
          line-height: 1.8;
          opacity: 0.82;
          padding-left: 20px;
          position: relative;
          margin-bottom: 6px;
        }
        ul li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 11px;
          width: 6px;
          height: 6px;
          background: var(--accent);
          border-radius: 999px;
        }
        @media (max-width: 600px) {
          nav { padding: 16px 24px; }
          .page-wrap { padding: 48px 24px 80px; }
          h1 { font-size: 32px; }
        }
      `}</style>

      <nav>
        <a href="/" className="nav-logo">MyTinni</a>
        <a href="/" className="nav-back">← Back</a>
      </nav>

      <div className="page-wrap">
        <p className="page-label">Account</p>
        <h1>Delete Your Account</h1>
        <p className="subtitle">
          You have the right to delete your MyTinni account and all associated data at any time.<br/>
          This action is permanent and cannot be undone.
        </p>

        <div className="ornament">
          <div className="ornament-line"/>
          <div className="ornament-diamond"/>
          <div className="ornament-line"/>
        </div>

        <h2>What Gets Deleted</h2>
        <p>When you request account deletion, the following data will be permanently removed within 30 days:</p>
        <ul>
          <li>Your account credentials and email address</li>
          <li>Your taste profile and flavour questionnaire responses</li>
          <li>Your personal bar inventory</li>
          <li>Any custom cocktails or recipes you have created</li>
          <li>Your usage history and session data</li>
          <li>Your Terms & Conditions acceptance record</li>
        </ul>

        <div className="warning-box">
          <span className="warning-label">⚠ Important</span>
          <p>Deletion is permanent. There is no way to recover your account, inventory, or custom recipes after this process is complete. If you are unsure, consider simply signing out instead.</p>
        </div>

        <h2>How to Request Deletion</h2>
        <p>To delete your account, send an email to our team from the email address associated with your MyTinni account:</p>

        <a href="mailto:team@mytinni.com?subject=Account%20Deletion%20Request&body=Please%20delete%20my%20MyTinni%20account%20and%20all%20associated%20data.%0A%0ARegistered%20email%3A%20%5Byour%20email%20here%5D" className="email-block">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="3" width="16" height="12" rx="1" stroke="rgb(139,26,26)" strokeWidth="1.2" fill="none"/>
            <path d="M1 4.5L9 10.5L17 4.5" stroke="rgb(139,26,26)" strokeWidth="1.2" fill="none"/>
          </svg>
          <span>team@mytinni.com</span>
        </a>

        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Send the Request</h3>
              <p>Email <a href="mailto:team@mytinni.com">team@mytinni.com</a> with the subject line <strong>"Account Deletion Request"</strong>. Include the email address registered to your account.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Confirmation</h3>
              <p>We will confirm receipt of your request within 5 business days and verify your identity to protect your account.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Deletion</h3>
              <p>All data associated with your account will be permanently deleted within 30 days of your confirmed request.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Final Confirmation</h3>
              <p>You will receive a final email confirming that your account and data have been deleted.</p>
            </div>
          </div>
        </div>

        <h2>Questions</h2>
        <p>If you have any questions about account deletion or your data, read our <a href="/privacy">Privacy Policy</a> or contact us at <a href="mailto:team@mytinni.com">team@mytinni.com</a>.</p>
      </div>
    </>
  );
}
