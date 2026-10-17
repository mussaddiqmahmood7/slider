import { evidence as e } from '@/content/evidence';
import { Chapter, Footer } from './Parts';
export default function Market() {
  return (
    <div className="slide-content market-slide">
      <Chapter number="07">DEMAND / KEEP THE DENOMINATOR</Chapter>
      <h1>
        A trend needs
        <br />
        <em>comparable endpoints.</em>
      </h1>
      <table className="era-table">
        <caption>
          US employment evidence · separate sources, not one growth series
        </caption>
        <thead>
          <tr>
            <th>Requested era</th>
            <th>Verified endpoint</th>
            <th>What changes?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>2015–2020</th>
            <td>
              <strong>{e.historical.employment.toLocaleString('en-US')}</strong>
              <span>May 2020 · wage/salary jobs</span>
            </td>
            <td>
              Combined developers + interface designers.
              <br />
              <span>2015 endpoint unavailable in this audit.</span>
            </td>
          </tr>
          <tr>
            <th>2020–2025</th>
            <td>
              <strong>{e.current.employment.toLocaleString('en-US')}</strong>
              <span>2025 · total jobs</span>
            </td>
            <td>
              Includes self-employment.
              <br />
              <span>Coverage differs; no growth rate computed.</span>
            </td>
          </tr>
          <tr>
            <th>2025–latest</th>
            <td className="unavailable">2026: unavailable</td>
            <td>No measured 2026 endpoint established.</td>
          </tr>
        </tbody>
      </table>
      <div className="forecast-strip">
        <strong>+{e.forecast.percent}%</strong>
        <p>
          <b>
            Separate US projection · {e.forecast.start}–{e.forecast.end}
          </b>
          <br />
          Web developers + digital designers. A forecast, not a job guarantee.
        </p>
      </div>
      <Footer
        section="US OCCUPATIONAL EVIDENCE · NOT PAKISTAN VACANCIES"
        refs={['history', 'outlook']}
      />
    </div>
  );
}
