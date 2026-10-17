import { evidence as e } from '@/content/evidence';
import { Chapter, Footer } from './Parts';
export default function Income() {
  return (
    <div className="slide-content pay-slide">
      <Chapter number="08">PAY / COMPARE THE ROLE, LOCATION AND TERMS</Chapter>
      <h1>
        What can web developers
        <br />
        <em>actually earn?</em>
      </h1>
      <div className="pay-cards">
        <section>
          <span className="stat-kicker">PAKISTAN · JUNIOR FRONTEND</span>
          <strong>PKR {Math.round(e.localSalary.mean / 1000)}k</strong>
          <h2>per month · mean base</h2>
          <p>
            Indeed platform estimate.
            <br />
            {e.localSalary.reports} salaries · updated {e.localSalary.updated}.
          </p>
          <small>
            Small sample. Past 36 months of postings; not a national pay scale.
          </small>
        </section>
        <section>
          <span className="stat-kicker">FOREIGN REMOTE · FROM PAKISTAN</span>
          <strong>PKR 80–180k</strong>
          <h2>per month · one advert</h2>
          <p>
            Canadian fintech · Laravel.
            <br />
            Listed experience: two years.
          </p>
          <small>
            August 2026 employer advert. Vancouver overlap; not a fresher or
            market-average rate.
          </small>
        </section>
        <section>
          <span className="stat-kicker">US WEB DEVELOPERS · ALL LEVELS</span>
          <strong>
            ${e.blsOutlook.medianSalaryUsd.toLocaleString('en-US')}
          </strong>
          <h2>per year · median wage</h2>
          <p>
            BLS benchmark · May 2025.
            <br />
            Includes different work arrangements.
          </p>
          <small>
            Not an on-site-only rate or a Pakistan remote salary. Benefits and
            costs differ.
          </small>
        </section>
      </div>
      <div className="pay-policy">
        <strong>Remote ≠ one pay scale.</strong> GitLab uses local-market data;
        Automattic publishes global bands. Compare the actual offer.
      </div>
      <Footer
        refs={['localPay', 'remotePay', 'outlook', 'payPolicy', 'globalPay']}
        note="Different populations and measures, not a matched salary comparison. No invented junior/mid/senior bands, universal remote discount or future salary forecast. The source panel gives the exact figures behind rounded stage labels."
      />
    </div>
  );
}
