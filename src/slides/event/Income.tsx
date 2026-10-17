import { evidence as e, sources } from '@/content/evidence';
import { Chapter, Footer } from './Parts';
export default function Income() {
  return (
    <div className="slide-content pay-slide">
      <Chapter number="08">PAY / REAL NUMBERS, DIFFERENT MARKETS</Chapter>
      <h1>
        Start with local reality.
        <br />
        <em>Understand the global offer.</em>
      </h1>
      <div className="pay-cards">
        <section>
          <span className="stat-kicker">PAKISTAN · JUNIOR FRONTEND</span>
          <strong>PKR {Math.round(e.localSalary.mean / 1000)}k</strong>
          <h2>per month · mean base</h2>
          <p>
            21 salaries in Indeed’s estimate.
            <br />
            Updated 8 July 2026.
          </p>
          <small>
            Small sample; past 36 months of postings. Not a national pay scale.
          </small>
          <a href={sources.localPay.url} target="_blank" rel="noreferrer">
            Indeed · original estimate ↗
          </a>
        </section>
        <section>
          <span className="stat-kicker">INTERNATIONAL REMOTE · FROM PK</span>
          <strong>PKR 80–180k</strong>
          <h2>per month · one advert</h2>
          <p>
            Canadian fintech · Laravel.
            <br />
            Listed experience: 2 years.
          </p>
          <small>
            August 2026 advert. Vancouver hours; actual terms agreed in writing.
          </small>
          <a href={sources.remotePay.url} target="_blank" rel="noreferrer">
            Employer’s advert · Mustakbil ↗
          </a>
        </section>
        <section>
          <span className="stat-kicker">US EMPLOYMENT · ALL LEVELS</span>
          <strong>${e.salary.median.toLocaleString('en-US')}</strong>
          <h2>per year · median wage</h2>
          <p>
            Web developers · May 2025.
            <br />
            Latest inspected BLS benchmark.
          </p>
          <small>
            US-based work, not Pakistan remote pay. Includes work arrangements.
          </small>
          <a href={sources.outlook.url} target="_blank" rel="noreferrer">
            BLS · original occupation report ↗
          </a>
        </section>
      </div>
      <p className="pay-policy">
        Remote pay follows employer policy: local market rates or global bands.
        There is no universal remote discount.
      </p>
      <Footer
        section="EXAMPLES ≠ MATCHED PAY COMPARISON · NO 2027 SALARY FORECAST"
        refs={['payPolicy']}
      />
    </div>
  );
}
