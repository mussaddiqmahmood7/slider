import { evidence as e } from '@/content/evidence';
import { Chapter, Footer } from './Parts';
export default function Income() {
  return (
    <div className="slide-content income-slide">
      <Chapter number="08">
        INCOME / CAPABILITY + CONTEXT + RESPONSIBILITY
      </Chapter>
      <h1>
        Compare the role.
        <br />
        <em>Then compare the number.</em>
      </h1>
      <div className="income-grid">
        <div className="salary-context">
          <span className="stat-kicker">US WEB DEVELOPERS</span>
          <strong>${e.salary.median.toLocaleString('en-US')}</strong>
          <p>
            USD / year · median
            <br />
            May {e.salary.year} · all experience levels
          </p>
          <div className="local-limit">
            Pakistan: current role-level salary bands were not verified.
          </div>
        </div>
        <ol className="responsibility-path">
          <li>
            <span>01</span>
            <div>
              <h2>Junior</h2>
              <p>Deliver a defined task.</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h2>Independent contributor</h2>
              <p>Ship and maintain a feature.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h2>Senior responsibility</h2>
              <p>Own tradeoffs. Help others.</p>
            </div>
          </li>
        </ol>
      </div>
      <Footer
        section="PROGRESSION IS QUALITATIVE · NO FIXED TIMELINE"
        refs={['outlook']}
      />
    </div>
  );
}
