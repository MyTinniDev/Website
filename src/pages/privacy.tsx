export default function Privacy() {
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
        .last-updated {
          font-size: 13px;
          opacity: 0.5;
          margin-bottom: 40px;
          font-style: italic;
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
          letter-spacing: 0.03em;
        }
        p {
          font-size: 15px;
          line-height: 1.85;
          opacity: 0.82;
          margin-bottom: 14px;
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
        a {
          color: var(--red);
          text-decoration: underline;
          text-underline-offset: 3px;
          opacity: 0.8;
        }
        a:hover { opacity: 1; }
        .highlight-box {
          border: 1px solid rgba(139,26,26,0.2);
          background: rgba(139,26,26,0.04);
          padding: 20px 24px;
          border-radius: 2px;
          margin: 24px 0;
        }
        .highlight-box p { margin-bottom: 0; }
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
        <p className="page-label">Legal</p>
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last updated: March 2026</p>

        <div className="ornament">
          <div className="ornament-line"/>
          <div className="ornament-diamond"/>
          <div className="ornament-line"/>
        </div>

        <div className="highlight-box">
          <p>This Privacy Policy explains how MyTinni, operated by Nascent AGI Solutions, collects, uses, and protects your personal data when you use the MyTinni application and website.</p>
        </div>

        <h2>1. Who We Are</h2>
        <p>MyTinni is a cocktail intelligence application developed and operated by Nascent AGI Solutions. If you have any questions about this policy, contact us at <a href="mailto:team@mytinni.com">team@mytinni.com</a>.</p>

        <h2>2. What Data We Collect</h2>
        <p>We collect only what is necessary to provide the service:</p>
        <ul>
          <li><strong>Email address</strong> — used to create and manage your account</li>
          <li><strong>Display name</strong> — optional, used to personalise your experience</li>
          <li><strong>Taste profile data</strong> — your responses to the flavour questionnaire and slider inputs (sweet, sour, bitter, umami, spice ratings)</li>
          <li><strong>Inventory data</strong> — the ingredients you add to your personal bar inventory</li>
          <li><strong>Custom cocktails and recipes</strong> — cocktails you create or save within the app</li>
          <li><strong>Usage events</strong> — anonymised interaction data to help us improve the product (e.g. which features are used)</li>
          <li><strong>Terms acceptance records</strong> — a timestamped record that you accepted our Terms & Conditions</li>
        </ul>
        <p>We do not collect payment information, precise location data, contacts, or any data unrelated to the cocktail and taste functionality of the app.</p>

        <h2>3. How We Use Your Data</h2>
        <ul>
          <li>To provide the MyTinni service — including cocktail recommendations, substitution matching, and inventory management</li>
          <li>To personalise your experience based on your taste profile</li>
          <li>To maintain your account and authenticate you securely</li>
          <li>To improve the application using aggregated, anonymised usage analytics</li>
          <li>To communicate with you about your account when necessary</li>
        </ul>
        <p>We do not sell your personal data. We do not use your data for advertising.</p>

        <h2>4. Where Your Data is Stored</h2>
        <p>Your data is stored securely on Supabase infrastructure hosted in the European Union (eu-west-3 region). All data is encrypted in transit using HTTPS. Authentication tokens are stored securely on your device using platform-level encrypted storage.</p>

        <h2>5. Data Retention</h2>
        <p>Your data is retained for as long as your account is active. If you delete your account, your personal data — including your taste profile, inventory, and custom cocktails — will be permanently deleted within 30 days of your request.</p>

        <h2>6. Your Rights</h2>
        <p>Under applicable data protection law, you have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your account and all associated data</li>
          <li>Object to certain uses of your data</li>
          <li>Request a copy of your data in a portable format</li>
        </ul>
        <p>To exercise any of these rights, contact us at <a href="mailto:team@mytinni.com">team@mytinni.com</a>. We will respond within 30 days.</p>

        <h2>7. Account Deletion</h2>
        <p>You can request deletion of your account and all associated data at any time. See our <a href="/delete-account">account deletion page</a> for full instructions.</p>

        <h2>8. Third-Party Services</h2>
        <p>MyTinni uses the following third-party services to operate:</p>
        <ul>
          <li><strong>Supabase</strong> — database and authentication infrastructure (EU-based)</li>
          <li><strong>Expo / React Native</strong> — mobile application framework</li>
        </ul>
        <p>Each of these providers operates under their own privacy policies and data processing agreements.</p>

        <h2>9. Children</h2>
        <p>MyTinni is an application relating to alcoholic beverages and is intended for users aged 18 and over. We do not knowingly collect data from anyone under the age of 18. If you believe a minor has created an account, contact us immediately at <a href="mailto:team@mytinni.com">team@mytinni.com</a>.</p>

        <h2>10. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of significant changes via the app or by email. The date at the top of this page reflects when the policy was last updated.</p>

        <h2>11. Contact</h2>
        <p>For any privacy-related questions or requests, contact us at: <a href="mailto:team@mytinni.com">team@mytinni.com</a></p>
      </div>
    </>
  );
}
