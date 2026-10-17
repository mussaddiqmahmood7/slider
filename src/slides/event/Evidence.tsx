import { evidence as e } from '@/content/evidence';
import { Chapter, Footer } from './Parts';
export default function Evidence() {
  return (
    <div className="slide-content evidence-slide">
      <Chapter number="05">AI / ASK WHAT THE NUMBER MEASURES</Chapter>
      <h1>
        Use is widespread.
        <br />
        <em>Trust is conditional.</em>
      </h1>
      <div className="evidence-grid">
        <div className="usage-chart">
          <p className="chart-scope">
            Current use at work · survey respondents
            <br />
            <span>
              Multi-select · n = {e.usage.respondents.toLocaleString('en-US')}
            </span>
          </p>
          {[
            {
              label: 'Coding assistants / agents',
              value: e.usage.coding.percent,
            },
            { label: 'Do not use AI tools', value: e.usage.nonUse.percent },
          ].map((row) => (
            <div className="bar-row" key={row.label}>
              <div>
                <span>{row.label}</span>
                <strong>{row.value}%</strong>
              </div>
              <div className="bar-track">
                <div style={{ width: `${row.value}%` }} />
              </div>
            </div>
          ))}
          <p className="chart-note">
            Separate selections. These bars do not add to 100%.
          </p>
        </div>
        <aside className="trust-stat">
          <span className="stat-kicker">A DIFFERENT QUESTION: TRUST</span>
          <strong>
            {e.trust.conditional.percent.toFixed(0)}
            <span>%</span>
          </strong>
          <p>
            trust when output
            <br />
            is easy to verify
          </p>
          <small>
            Single-select · n = {e.trust.respondents.toLocaleString('en-US')}
            <br />
            Self-report ≠ observed review
          </small>
        </aside>
      </div>
      <Footer
        section="STACK EXCHANGE INC. · 2026 · ODbL 1.0"
        refs={['usage', 'trust']}
      />
    </div>
  );
}
