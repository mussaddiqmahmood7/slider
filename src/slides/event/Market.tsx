import { evidence as e } from '@/content/evidence';
import { Chapter, Footer } from './Parts';
export default function Market() {
  return (
    <div className="slide-content demand-slide">
      <Chapter number="07">JOBS / SIX YEARS, WITH THE RIGHT LABEL</Chapter>
      <h1>
        The market has jobs.
        <br />
        <em>Entry takes proof.</em>
      </h1>
      <div className="demand-grid">
        <figure className="employment-chart">
          <figcaption>
            US web developers + interface designers
            <br />
            <span>Estimated wage/salary jobs held each May</span>
          </figcaption>
          <div className="employment-bars">
            {e.employment.map(({ year, jobs }) => (
              <div className="employment-column" key={year}>
                <strong>{jobs.toLocaleString('en-US')}</strong>
                <div className="employment-track">
                  <span style={{ height: `${(jobs / 200000) * 100}%` }} />
                </div>
                <span>
                  {year}
                  {year === 2020 ? '*' : ''}
                </span>
              </div>
            ))}
          </div>
          <p>
            *2020 category/method break. Annual snapshots, not newly created
            jobs; do not subtract to infer hiring.
          </p>
        </figure>
        <aside className="openings-stat">
          <span className="stat-kicker">SEPARATE US FORECAST</span>
          <strong>13,600</strong>
          <h2>openings / year</h2>
          <p>
            Average projected for 2025–35.
            <br />
            Includes replacement hiring.
          </p>
          <small>
            No verified six-year worldwide or Pakistan web-job creation series
            was established.
          </small>
        </aside>
      </div>
      <Footer
        section="US EVIDENCE · NO AI-CAUSATION CLAIM OR JOB GUARANTEE"
        refs={['annualJobs', 'outlook']}
      />
    </div>
  );
}
