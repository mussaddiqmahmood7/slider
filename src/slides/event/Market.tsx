import { evidence as e } from '@/content/evidence';
import { Chapter, Footer } from './Parts';
export default function Market() {
  return (
    <div className="slide-content demand-slide">
      <Chapter number="07">
        DEMAND / READ THE MARKET WITH THE RIGHT MEASURE
      </Chapter>
      <h1>
        Hiring recovered unevenly.
        <br />
        <em>Make your ability visible.</em>
      </h1>
      <div className="demand-grid">
        <figure className="employment-chart">
          <figcaption>
            US software-development job postings
            <br />
            <span>Selected dates · Feb 1, 2020 = 100 · Indeed via FRED</span>
          </figcaption>
          <div className="employment-bars">
            {e.postings.series.map(({ year, month, date, value }) => (
              <div className="employment-column" key={date}>
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
            Daily index snapshots, not annual averages or jobs created.
            Historical values may be revised.
          </p>
        </figure>
        <aside className="openings-stat">
          <span className="stat-kicker">MAY 2025 → MAY 2026</span>
          <strong>{e.postings.seniorRisePercent}%</strong>
          <h2>
            of the net rise
            <br />
            came from senior titles
          </h2>
          <p>
            Share of the increase in US software postings, not all vacancies.
          </p>
          <small>
            Separate BLS forecast: 13,600 openings/year for web developers +
            digital designers, 2025–35. Includes replacements.
          </small>
        </aside>
      </div>
      <Footer
        refs={['indeed', 'indeedSenior', 'outlook']}
        note="The chart and seniority analysis use distinct observation windows. Neither establishes AI causation, global hiring totals, Pakistan vacancies or an individual’s chance of getting hired."
      />
    </div>
  );
}
