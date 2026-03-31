export default function NotFound() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mate+SC&family=Mate:ital@0;1&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: rgb(232,213,181); font-family: 'Mate', serif; }
        .wrap {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 48px 24px;
        }
        h1 {
          font-family: 'Mate SC', serif;
          font-size: 96px;
          color: rgb(139,26,26);
          opacity: 0.15;
          line-height: 1;
          margin-bottom: 16px;
        }
        h2 {
          font-family: 'Mate SC', serif;
          font-size: 24px;
          color: rgb(139,26,26);
          margin-bottom: 12px;
        }
        p { opacity: 0.6; margin-bottom: 32px; }
        a {
          background: rgb(139,26,26);
          color: rgb(232,213,181);
          font-family: 'Mate SC', serif;
          font-size: 13px;
          letter-spacing: 0.08em;
          padding: 12px 28px;
          text-decoration: none;
          border-radius: 2px;
        }
      `}</style>
      <div className="wrap">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>This page doesn't exist or has moved.</p>
        <a href="/">Back to MyTinni</a>
      </div>
    </>
  )
}
