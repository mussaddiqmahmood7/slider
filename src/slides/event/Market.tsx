import { evidence as e } from '@/content/evidence';
import { Chapter, Footer } from './Parts';

export default function Market() {
  return (
    <div className="slide-content demand-slide">
      <Chapter number="07">JOBS / HIRING TREND & BAR SHIFT</Chapter>
      <h1>
        Entry is harder.
        <br />
        <em>Demand for proof is higher.</em>
      </h1>
      <div className="demand-grid">
        <figure className="employment-chart">
          <figcaption>
            US software postings, not jobs created
            <br />
            <span>
              Indeed Hiring Lab via FRED (IHLIDXUSTPSOFTDEVE) · Feb 2020 = 100
            </span>
          </figcaption>
          <div className="employment-bars">
            {e.postings.series.map(({ year, month, value }) => (
              <div className="employment-column" key={`${year}-${month}`}>
                <strong>{value.toFixed(1)}</strong>
                <div className="employment-track">
                  <span style={{ height: `${(value / 240) * 100}%` }} />
                </div>
                <span>
                  {year}
                  <small>{month}</small>
                </span>
              </div>
            ))}
          </div>
          <p>
            Up about 15% since Feb 2025 (Indeed, Jul 2026); about 24% below Feb
            2020 (Sep 2026). Postings indicate hiring demand, not net jobs
            created.
          </p>
        </figure>
        <aside className="openings-stat">
          <span className="stat-kicker">WHERE DEMAND CONCENTRATED</span>
          <strong>{e.postings.seniorRisePercent}%</strong>
          <h2>of net rise was senior roles</h2>
          <p>
            May 2025 to May 2026 net increase in US software postings (Indeed
            Hiring Lab).
          </p>
          <small>
            BLS projects ~{e.blsOutlook.annualOpenings.toLocaleString('en-US')}{' '}
            annual openings (2025–35). The bar rose: junior entry requires proof
            of delivery.
          </small>
        </aside>
      </div>
      <Footer
        section="US SOFTWARE POSTINGS INDEX · NOT JOBS CREATED"
        refs={['indeed', 'indeedSenior', 'outlook']}
      />
    </div>
  );
}
