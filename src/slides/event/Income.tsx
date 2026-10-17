import { evidence as e } from '@/content/evidence';
import { Chapter, Footer } from './Parts';

export default function Income() {
  const localThousands = Math.round(e.localSalary.mean / 5000) * 5;
  const usThousands = Math.round(e.blsOutlook.medianSalaryUsd / 1000);
  const remoteLow = Math.round(e.remoteSalary.min / 5000) * 5;
  const remoteHigh = Math.round(e.remoteSalary.max / 5000) * 5;

  return (
    <div className="slide-content pay-slide">
      <Chapter number="08">PAY / COMPARE THE ROLE, LOCATION AND TERMS</Chapter>
      <h1>
        What can web developers
        <br />
        <em>actually earn?</em>
      </h1>
      <div className="pay-cards">
        <section className="pay-primary">
          <span className="stat-kicker">PAKISTAN · JUNIOR FRONTEND</span>
          <strong>
            <span className="pay-about">about</span>PKR {localThousands}k
          </strong>
          <h2>per month · mean base</h2>
          <p>
            Indeed platform estimate.
            <br />
            Small sample; not a national pay scale.
          </p>
          <small>Exact figure, date and sample in Sources.</small>
        </section>
        <section>
          <span className="stat-kicker">FOREIGN REMOTE · ONE EXAMPLE</span>
          <strong>
            <span className="pay-about">about</span>PKR {remoteLow}–{remoteHigh}
            k
          </strong>
          <h2>per month · one advert</h2>
          <p>
            Canadian fintech · Laravel.
            <br />
            Two years’ listed experience.
          </p>
          <small>
            From Pakistan · Vancouver overlap.
            <br />
            Not a fresher or market-average rate.
          </small>
        </section>
        <section>
          <span className="stat-kicker">US · ANOTHER COUNTRY’S CONTEXT</span>
          <strong>
            <span className="pay-about">about</span>${usThousands}k
          </strong>
          <h2>per year · median wage</h2>
          <p>
            US web developers.
            <br />
            All experience levels.
          </p>
          <small>
            Not a Pakistan remote salary.
            <br />
            Benefits and costs differ.
          </small>
        </section>
      </div>
      <div className="pay-policy">
        <strong>Remote ≠ one pay scale.</strong> GitLab uses local-market data;
        Automattic publishes global bands. Compare the actual offer.
      </div>
      <p className="pay-factors">
        What moves pay: experience, ownership, market, communication.
      </p>
      <Footer
        refs={['localPay', 'remotePay', 'outlook', 'payPolicy', 'globalPay']}
        note="Different populations and measures, not a matched salary comparison. Stage figures use ordinary nearest rounding: PKR to 5,000 and USD to 1,000, never ceiling rounding. Exact values, dates and available sample information follow. No invented salary ladder or future forecast."
      />
    </div>
  );
}
