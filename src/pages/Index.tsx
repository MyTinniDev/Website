import { useEffect, useRef } from "react";

export default function Index() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    sectionsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) sectionsRef.current.push(el);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mate+SC&family=Mate:ital@0;1&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --red: rgb(139, 26, 26);
          --accent: rgb(238, 139, 96);
          --cream: rgb(232, 213, 181);
          --cream-dark: rgb(210, 188, 152);
          --cream-light: rgb(245, 235, 215);
          --text: rgb(60, 20, 20);
        }

        html { scroll-behavior: smooth; }

        body {
          background-color: var(--cream);
          color: var(--text);
          font-family: 'Mate', serif;
          overflow-x: hidden;
        }

        /* TEXTURE OVERLAY */
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: 0.4;
        }

        /* WATERMARK */
        .watermark {
          position: fixed;
          bottom: -60px;
          right: -40px;
          font-family: 'Mate SC', serif;
          font-size: 220px;
          color: rgba(139, 26, 26, 0.04);
          pointer-events: none;
          z-index: 0;
          user-select: none;
          line-height: 1;
        }

        /* NAV */
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 48px;
          background: rgba(232, 213, 181, 0.92);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(139, 26, 26, 0.15);
        }

        .nav-logo {
          font-family: 'Mate SC', serif;
          font-size: 22px;
          color: var(--red);
          text-decoration: none;
          letter-spacing: 0.04em;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .nav-logo svg { width: 28px; height: 28px; }

        .nav-links {
          display: flex;
          gap: 32px;
          list-style: none;
        }

        .nav-links a {
          font-family: 'Mate', serif;
          font-size: 14px;
          color: var(--red);
          text-decoration: none;
          letter-spacing: 0.06em;
          opacity: 0.75;
          transition: opacity 0.2s;
        }

        .nav-links a:hover { opacity: 1; }

        .beta-badge {
          background: var(--accent);
          color: var(--red);
          font-family: 'Mate SC', serif;
          font-size: 10px;
          letter-spacing: 0.1em;
          padding: 3px 10px;
          border-radius: 999px;
        }

        /* HERO */
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 120px 24px 80px;
          position: relative;
          z-index: 1;
        }

        .hero-ornament {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 32px;
          opacity: 0.5;
        }

        .ornament-line {
          width: 60px;
          height: 1px;
          background: var(--red);
        }

        .hero h1 {
          font-family: 'Mate SC', serif;
          font-size: clamp(52px, 10vw, 96px);
          color: var(--red);
          line-height: 1.05;
          letter-spacing: 0.02em;
          margin-bottom: 8px;
        }

        .hero-sub {
          font-family: 'Mate', serif;
          font-style: italic;
          font-size: clamp(18px, 3vw, 26px);
          color: var(--accent);
          margin-bottom: 28px;
          letter-spacing: 0.04em;
        }

        .hero-desc {
          max-width: 540px;
          font-size: 16px;
          line-height: 1.75;
          color: var(--text);
          opacity: 0.8;
          margin-bottom: 48px;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .btn-primary {
          background: var(--red);
          color: var(--cream);
          font-family: 'Mate SC', serif;
          font-size: 14px;
          letter-spacing: 0.08em;
          padding: 14px 32px;
          border: none;
          border-radius: 2px;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          display: inline-block;
        }

        .btn-primary:hover {
          background: rgb(110, 20, 20);
          transform: translateY(-1px);
        }

        .btn-secondary {
          background: transparent;
          color: var(--red);
          font-family: 'Mate SC', serif;
          font-size: 14px;
          letter-spacing: 0.08em;
          padding: 13px 32px;
          border: 1px solid var(--red);
          border-radius: 2px;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          display: inline-block;
        }

        .btn-secondary:hover {
          background: rgba(139, 26, 26, 0.06);
          transform: translateY(-1px);
        }

        /* DIVIDER */
        .section-divider {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 0 48px;
          margin: 20px 0;
          position: relative;
          z-index: 1;
        }

        .divider-line { flex: 1; height: 1px; background: rgba(139, 26, 26, 0.2); }
        .divider-diamond {
          width: 8px; height: 8px;
          background: var(--accent);
          transform: rotate(45deg);
          flex-shrink: 0;
        }

        /* SECTIONS */
        .section {
          padding: 80px 48px;
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
        }

        .fade-in {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-label {
          font-family: 'Mate SC', serif;
          font-size: 11px;
          letter-spacing: 0.2em;
          color: var(--accent);
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .section-title {
          font-family: 'Mate SC', serif;
          font-size: clamp(28px, 4vw, 42px);
          color: var(--red);
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .section-body {
          font-size: 16px;
          line-height: 1.8;
          opacity: 0.8;
          max-width: 600px;
        }

        /* AXIS CARDS */
        .axis-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 16px;
          margin-top: 40px;
        }

        .axis-card {
          background: rgba(139, 26, 26, 0.04);
          border: 1px solid rgba(139, 26, 26, 0.15);
          border-radius: 2px;
          padding: 24px 20px;
          text-align: center;
          transition: border-color 0.2s, background 0.2s;
        }

        .axis-card:hover {
          border-color: rgba(139, 26, 26, 0.35);
          background: rgba(139, 26, 26, 0.07);
        }

        .axis-icon {
          font-size: 28px;
          margin-bottom: 10px;
          display: block;
        }

        .axis-name {
          font-family: 'Mate SC', serif;
          font-size: 13px;
          color: var(--red);
          letter-spacing: 0.1em;
          margin-bottom: 6px;
        }

        .axis-desc {
          font-size: 12px;
          opacity: 0.6;
          line-height: 1.5;
        }

        /* PENTAGON VISUAL */
        .pentagon-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        @media (max-width: 768px) {
          .pentagon-section { grid-template-columns: 1fr; }
          nav { padding: 16px 24px; }
          .nav-links { display: none; }
          .section { padding: 60px 24px; }
          .section-divider { padding: 0 24px; }
        }

        .pentagon-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* RADAR SVG */
        .radar-svg { width: 280px; height: 280px; }

        /* FEATURE LIST */
        .feature-list {
          list-style: none;
          margin-top: 28px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .feature-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 15px;
          line-height: 1.6;
          opacity: 0.85;
        }

        .feature-bullet {
          width: 6px;
          height: 6px;
          background: var(--accent);
          border-radius: 999px;
          flex-shrink: 0;
          margin-top: 8px;
        }

        /* QUOTE BLOCK */
        .quote-block {
          border-left: 3px solid var(--accent);
          padding: 20px 28px;
          background: rgba(139, 26, 26, 0.04);
          border-radius: 0 2px 2px 0;
          margin: 40px 0;
        }

        .quote-text {
          font-family: 'Mate', serif;
          font-style: italic;
          font-size: 20px;
          line-height: 1.6;
          color: var(--red);
          margin-bottom: 12px;
        }

        .quote-attr {
          font-size: 13px;
          opacity: 0.6;
          letter-spacing: 0.05em;
        }

        /* CTA SECTION */
        .cta-section {
          background: var(--red);
          padding: 80px 48px;
          text-align: center;
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        .cta-section::before {
          content: 'MyTinni';
          position: absolute;
          font-family: 'Mate SC', serif;
          font-size: 200px;
          color: rgba(232, 213, 181, 0.05);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          white-space: nowrap;
        }

        .cta-section h2 {
          font-family: 'Mate SC', serif;
          font-size: clamp(28px, 4vw, 42px);
          color: var(--cream);
          margin-bottom: 16px;
          position: relative;
        }

        .cta-section p {
          color: rgba(232, 213, 181, 0.75);
          font-size: 16px;
          margin-bottom: 36px;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          line-height: 1.7;
        }

        .btn-cream {
          background: var(--cream);
          color: var(--red);
          font-family: 'Mate SC', serif;
          font-size: 14px;
          letter-spacing: 0.08em;
          padding: 14px 36px;
          border: none;
          border-radius: 2px;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          display: inline-block;
          position: relative;
        }

        .btn-cream:hover {
          background: var(--cream-light);
          transform: translateY(-1px);
        }

        /* FOOTER */
        footer {
          background: rgb(50, 15, 15);
          padding: 40px 48px;
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: gap;
          gap: 20px;
        }

        .footer-logo {
          font-family: 'Mate SC', serif;
          font-size: 18px;
          color: var(--cream);
          opacity: 0.8;
        }

        .footer-links {
          display: flex;
          gap: 24px;
          list-style: none;
          flex-wrap: wrap;
        }

        .footer-links a {
          font-size: 13px;
          color: rgba(232, 213, 181, 0.5);
          text-decoration: none;
          transition: color 0.2s;
          letter-spacing: 0.04em;
        }

        .footer-links a:hover { color: rgba(232, 213, 181, 0.9); }

        .footer-copy {
          font-size: 12px;
          color: rgba(232, 213, 181, 0.3);
          width: 100%;
          text-align: center;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid rgba(232, 213, 181, 0.08);
        }

        @media (max-width: 600px) {
          footer { flex-direction: column; align-items: flex-start; }
          .cta-section { padding: 60px 24px; }
        }
      `}</style>

      {/* WATERMARK */}
      <div className="watermark">MT</div>

      {/* NAV */}
      <nav>
        <a href="/" className="nav-logo">
          <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="14,2 26,9 26,23 14,28 2,23 2,9" fill="none" stroke="rgb(139,26,26)" strokeWidth="1.5"/>
            <line x1="14" y1="2" x2="14" y2="28" stroke="rgb(139,26,26)" strokeWidth="0.75" opacity="0.4"/>
            <line x1="2" y1="9" x2="26" y2="23" stroke="rgb(139,26,26)" strokeWidth="0.75" opacity="0.4"/>
            <line x1="26" y1="9" x2="2" y2="23" stroke="rgb(139,26,26)" strokeWidth="0.75" opacity="0.4"/>
            <circle cx="14" cy="14" r="2.5" fill="rgb(238,139,96)"/>
          </svg>
          MyTinni
        </a>
        <ul className="nav-links">
          <li><a href="#what-it-is">What It Is</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#get-it">Get It</a></li>
        </ul>
        <span className="beta-badge">BETA</span>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-ornament">
          <div className="ornament-line"/>
          <svg width="16" height="16" viewBox="0 0 16 16"><polygon points="8,0 16,8 8,16 0,8" fill="rgb(238,139,96)"/></svg>
          <div className="ornament-line"/>
        </div>
        <h1>MyTinni</h1>
        <p className="hero-sub">Flavour Engine</p>
        <p className="hero-desc">
          Every ingredient is a vector. Every cocktail, a composition. A private tasting ledger built for professionals who think in taste.
        </p>
        <div className="hero-buttons">
          <a href="#get-it" className="btn-primary">Get Early Access</a>
          <a href="#how-it-works" className="btn-secondary">See How It Works</a>
        </div>
      </section>

      <div className="section-divider">
        <div className="divider-line"/>
        <div className="divider-diamond"/>
        <div className="divider-line"/>
      </div>

      {/* WHAT IT IS */}
      <section className="section" id="what-it-is">
        <div className="fade-in" ref={addRef}>
          <p className="section-label">The Idea</p>
          <h2 className="section-title">Taste has a grammar.<br/>We built it.</h2>
          <p className="section-body">
            MyTinni maps every ingredient across five primary taste axes — the same axes your palate uses, whether you know it or not. The result is a sensory engine that speaks the language of the bar, not the spreadsheet.
          </p>
          <div className="quote-block">
            <p className="quote-text">"Better to learn how to think than to follow a guide."</p>
            <p className="quote-attr">— The MyTinni philosophy</p>
          </div>
        </div>

        <div className="fade-in axis-grid" ref={addRef}>
          {[
            { icon: "🍯", name: "Sweet", desc: "Sugars, syrups, liqueurs" },
            { icon: "🍋", name: "Sour", desc: "Citrus, acid, ferment" },
            { icon: "🌿", name: "Bitter", desc: "Botanicals, tannins, peel" },
            { icon: "🧂", name: "Umami", desc: "Depth, salinity, savour" },
            { icon: "🌶", name: "Spice", desc: "Heat, pepper, warmth" },
          ].map((axis) => (
            <div className="axis-card" key={axis.name}>
              <span className="axis-icon">{axis.icon}</span>
              <p className="axis-name">{axis.name}</p>
              <p className="axis-desc">{axis.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider">
        <div className="divider-line"/>
        <div className="divider-diamond"/>
        <div className="divider-line"/>
      </div>

      {/* HOW IT WORKS */}
      <section className="section" id="how-it-works">
        <div className="pentagon-section">
          <div className="fade-in" ref={addRef}>
            <p className="section-label">The Engine</p>
            <h2 className="section-title">Vectors, not adjectives.</h2>
            <p className="section-body">
              Each ingredient carries a precise numerical profile across all five axes. When you build a cocktail, the engine calculates the resulting composition — not from adjectives, but from primary receptor biology.
            </p>
            <ul className="feature-list">
              <li><span className="feature-bullet"/><span>Inventory your bar — every bottle becomes a data point</span></li>
              <li><span className="feature-bullet"/><span>See what you can make with what you have</span></li>
              <li><span className="feature-bullet"/><span>Find substitutions ranked by sensory proximity</span></li>
              <li><span className="feature-bullet"/><span>Build custom recipes and watch the vector shift in real time</span></li>
            </ul>
          </div>

          <div className="fade-in pentagon-wrap" ref={addRef}>
            <svg className="radar-svg" viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
              {/* Grid pentagons */}
              {[0.25, 0.5, 0.75, 1].map((scale, i) => {
                const pts = [
                  [140, 140 - 110 * scale],
                  [140 + 104.6 * scale, 140 - 34.1 * scale],
                  [140 + 64.7 * scale, 140 + 89.1 * scale],
                  [140 - 64.7 * scale, 140 + 89.1 * scale],
                  [140 - 104.6 * scale, 140 - 34.1 * scale],
                ].map(p => p.join(",")).join(" ");
                return <polygon key={i} points={pts} fill="none" stroke="rgba(139,26,26,0.12)" strokeWidth="1"/>;
              })}
              {/* Axis lines */}
              {[
                [140, 30], [244.6, 105.9], [204.7, 229.1], [75.3, 229.1], [35.4, 105.9]
              ].map(([x, y], i) => (
                <line key={i} x1="140" y1="140" x2={x} y2={y} stroke="rgba(139,26,26,0.15)" strokeWidth="1"/>
              ))}
              {/* Data polygon - example Negroni profile */}
              <polygon
                points="140,68 213,112 188,208 92,208 67,112"
                fill="rgba(139,26,26,0.12)"
                stroke="rgb(139,26,26)"
                strokeWidth="1.5"
              />
              {/* Data points */}
              {[
                [140, 68], [213, 112], [188, 208], [92, 208], [67, 112]
              ].map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="4" fill="rgb(238,139,96)" stroke="rgb(139,26,26)" strokeWidth="1.5"/>
              ))}
              {/* Labels */}
              <text x="140" y="22" textAnchor="middle" fontFamily="Mate SC, serif" fontSize="11" fill="rgb(139,26,26)" opacity="0.7">Sweet</text>
              <text x="252" y="108" textAnchor="start" fontFamily="Mate SC, serif" fontSize="11" fill="rgb(139,26,26)" opacity="0.7">Sour</text>
              <text x="210" y="245" textAnchor="middle" fontFamily="Mate SC, serif" fontSize="11" fill="rgb(139,26,26)" opacity="0.7">Bitter</text>
              <text x="70" y="245" textAnchor="middle" fontFamily="Mate SC, serif" fontSize="11" fill="rgb(139,26,26)" opacity="0.7">Umami</text>
              <text x="28" y="108" textAnchor="end" fontFamily="Mate SC, serif" fontSize="11" fill="rgb(139,26,26)" opacity="0.7">Spice</text>
              <text x="140" y="158" textAnchor="middle" fontFamily="Mate, serif" fontSize="10" fill="rgb(139,26,26)" opacity="0.45" fontStyle="italic">Negroni</text>
            </svg>
          </div>
        </div>
      </section>

      <div className="section-divider">
        <div className="divider-line"/>
        <div className="divider-diamond"/>
        <div className="divider-line"/>
      </div>

      {/* GET IT */}
      <section className="section" id="get-it">
        <div className="fade-in" ref={addRef}>
          <p className="section-label">Distribution</p>
          <h2 className="section-title">Currently in Beta.</h2>
          <p className="section-body">
            MyTinni is live on Android. We're working with a closed group of industry professionals before wider release. iOS coming soon.
          </p>
          <ul className="feature-list" style={{ marginTop: 28 }}>
            <li><span className="feature-bullet"/><span>Android APK available now via Google Play (closed beta)</span></li>
            <li><span className="feature-bullet"/><span>iOS — coming after Apple Developer approval</span></li>
            <li><span className="feature-bullet"/><span>Interest list open — contact us to be considered</span></li>
          </ul>
          <div style={{ marginTop: 36, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="mailto:team@mytinni.com" className="btn-primary">Request Access</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-section">
        <h2>Built by bartenders. Engineered for precision.</h2>
        <p>Twenty years of professional taste experience encoded into an algorithm. MyTinni is not a guide — it's a thinking tool.</p>
        <a href="mailto:team@mytinni.com" className="btn-cream">Get in Touch</a>
      </div>

      {/* FOOTER */}
      <footer>
        <span className="footer-logo">MyTinni</span>
        <ul className="footer-links">
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/delete-account">Delete Account</a></li>
          <li><a href="mailto:team@mytinni.com">Contact</a></li>
        </ul>
        <p className="footer-copy">© {new Date().getFullYear()} MyTinni. All rights reserved. Nascent AGI Solutions.</p>
      </footer>
    </>
  );
}
