import { evidence as e } from '@/content/evidence';
import { Chapter, Footer } from './Parts';

export default function Income() {
  return (
    <div className="slide-content pay-slide">
      <Chapter number="08">COMPENSATION / THREE MARKETS, REAL POLICIES</Chapter>
      <h1>
        What can web developers
        <br />
        <em>actually earn?</em>
      </h1>
      <div className="salary-matrix-container">
        <table
          className="salary-matrix-table"
          aria-label="Developer compensation across markets"
        >
          <thead>
            <tr>
              <th>Experience Level</th>
              <th>Pakistan Local (PKR/month)</th>
              <th>Foreign Remote from Pakistan</th>
              <th>US Employment Benchmark</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Junior (0–2 years)</td>
              <td className="pending-cell">Sampling verified postings…</td>
              <td className="pending-cell">Sampling verified postings…</td>
              <td className="pending-cell">—</td>
            </tr>
            <tr>
              <td>Mid-Level (2–5 years)</td>
              <td className="pending-cell">Sampling verified postings…</td>
              <td className="pending-cell">Sampling verified postings…</td>
              <td>
                ${e.blsOutlook.medianSalaryUsd.toLocaleString('en-US')} / year
                (BLS median wage)
              </td>
            </tr>
            <tr>
              <td>Senior (5+ years)</td>
              <td className="pending-cell">Sampling verified postings…</td>
              <td className="pending-cell">Sampling verified postings…</td>
              <td className="pending-cell">—</td>
            </tr>
          </tbody>
        </table>
        <p className="table-caption-note">
          US benchmark: sourced Bureau of Labor Statistics median ($92,650/yr).
          Local & remote cells stay empty until live ad sampling (15–20 ads per
          level) is completed.
        </p>
      </div>
      <div className="macro-demand-ribbon">
        <strong>NATIONAL DEMAND CONTEXT:</strong> Pakistan freelance tech
        exports reached {e.exports.freelanceUsd}, up +
        {e.exports.freelanceGrowthPercent}% in {e.exports.period} (SBP via
        Economic Survey). Remote pay follows each employer’s policy (local rates
        or global bands); it is not automatically lower.
      </div>
      <Footer
        section="COMPENSATION CONTEXT · SOURCED BENCHMARKS ONLY"
        refs={['payPolicy', 'pakExports', 'outlook']}
      />
    </div>
  );
}
