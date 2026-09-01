import { Link } from 'react-router-dom'

export default function AgeSuitability() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mate+SC&family=Mate:ital@0;1&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: rgb(232,213,181); font-family: 'Mate', serif; color: rgb(38,24,16); }
        .age-wrap { max-width: 720px; margin: 0 auto; padding: 56px 24px 80px; line-height: 1.65; }
        .age-wrap h1 { font-family: 'Mate SC', serif; font-size: 34px; color: rgb(139,26,26); margin-bottom: 8px; line-height: 1.15; }
        .age-wrap h2 { font-family: 'Mate SC', serif; font-size: 20px; color: rgb(139,26,26); margin: 36px 0 10px; }
        .age-wrap p { margin-bottom: 14px; font-size: 17px; }
        .age-wrap ul { margin: 0 0 14px 22px; }
        .age-wrap li { margin-bottom: 10px; font-size: 17px; }
        .age-wrap .lede { font-size: 19px; font-style: italic; margin-bottom: 24px; }
        .age-wrap a { color: rgb(139,26,26); }
        .age-wrap .back { display: inline-block; margin-top: 40px; font-family: 'Mate SC', serif; font-size: 15px; }
        @media (max-width: 480px) {
          .age-wrap { padding: 40px 18px 64px; }
          .age-wrap h1 { font-size: 28px; }
        }
      `}</style>

      <main className="age-wrap">
        <h1>Age suitability &amp; responsible use</h1>
        <p className="lede">
          MyTinni is a tool for exploring taste. It helps you understand your own palate, then find and
          build drinks that match it. This page explains what the app does, what it deliberately does
          not do, and how we handle age.
        </p>

        <h2>What MyTinni is</h2>
        <p>
          MyTinni maps taste on five dimensions: sweet, sour, bitter, umami and spice. A short quiz builds
          your profile; the app then shows how closely any recipe fits it, what you can make from the
          ingredients you already have, and how to adjust a drink for someone else's palate.
        </p>
        <p>
          The framework is drink-agnostic. It works identically for a cordial, a house-made syrup, an iced
          tea or a Negroni, because it measures taste, not alcohol. Non-alcoholic recipes and homemade
          ingredients are a core part of the catalogue, not an afterthought, and the same model is being
          extended to food.
        </p>
        <p>
          MyTinni was built for creatives: home cooks, bartenders, students of flavour, anyone who wants
          to understand why one combination works and another doesn't.
        </p>

        <h2>Who it is for</h2>
        <p>MyTinni is available to users aged 15 and over.</p>
        <ul>
          <li>
            All users get the full taste model, the non-alcoholic catalogue, homemade ingredients and
            hosting tools.
          </li>
          <li>
            Recipes containing alcohol are shown only to users who have confirmed they are of legal
            drinking age in their country (18 in France). Until then, they are not visible anywhere in
            the app.
          </li>
        </ul>
        <p>
          We ask for age at sign-up. We do not verify identity documents, and we will not collect more
          personal data than we need to run the app.
        </p>

        <h2>What MyTinni does not do</h2>
        <ul>
          <li>
            <strong>Does not sell alcohol.</strong> No shop, no basket, no delivery, no retailer links.
          </li>
          <li>
            <strong>Does not advertise alcohol.</strong> No sponsored products, brand placements,
            promotions or paid recommendations. Ingredients are named by type, never by brand.
          </li>
          <li>
            <strong>Does not encourage consumption.</strong> The app never suggests how much or how often
            to drink. No streaks, no volume rewards, no drinking games.
          </li>
          <li>
            <strong>Does not target minors with alcohol content.</strong> Nothing alcoholic is visible to
            an unconfirmed account.
          </li>
          <li>
            <strong>Does not include unrestricted web access or open social feeds.</strong> Sharing is
            limited to guests you invite to an event you host.
          </li>
        </ul>

        <h2>Responsible use</h2>
        <p>
          Understanding what you like usually means enjoying less, better. If you or someone close to you
          is concerned about alcohol, please contact a local support service. In France, Alcool Info
          Service is available on 0 980 980 930.
        </p>

        <h2>Your data</h2>
        <p>
          Your taste profile and inventory are private to your account. We do not sell personal data or
          use it for advertising. See our <Link to="/privacy">Privacy Policy</Link> for detail.
        </p>

        <h2>Questions</h2>
        <p>
          Parents, regulators, platform reviewers or the curious:{' '}
          <a href="mailto:hello@mytinni.com">hello@mytinni.com</a>.
        </p>

        <Link className="back" to="/">Back to MyTinni</Link>
      </main>
    </>
  )
}

