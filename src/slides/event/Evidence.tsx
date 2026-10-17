import { evidence as e } from '@/content/evidence';
import { Chapter, Footer } from './Parts';
export default function Evidence() {
  return (
    <div className="slide-content adoption-slide">
      <Chapter number="05">AI / USE IT, THEN CHECK IT</Chapter>
      <h1>
        AI is common.
        <br />
        <em>Review is still your job.</em>
      </h1>
      <div className="adoption-grid">
        <section className="adoption-numbers">
          <span className="stat-kicker">USE AT WORK · n = 17,464</span>
          <div>
            <strong>
              {e.usage.anyRounded}
              <small>%</small>
            </strong>
            <p>use at least one AI tool</p>
          </div>
          <div className="non-use">
            <strong>
              {e.usage.nonUseRounded}
              <small>%</small>
            </strong>
            <p>do not use AI tools</p>
          </div>
          <small>Rounded publisher summary · survey respondents</small>
        </section>
        <section className="review-chart">
          <span className="stat-kicker">
            BEFORE USING AN AI ANSWER · n = 13,162
          </span>
          {e.review.actions.map(({ label, percent }) => (
            <div className="review-bar" key={label}>
              <div>
                <span>{label}</span>
                <strong>{percent}%</strong>
              </div>
              <div className="review-track">
                <span style={{ width: `${percent}%` }} />
              </div>
            </div>
          ))}
          <p className="review-scope">
            Multiple choices allowed. “Use as-is” is self-report, not a measured
            rate of blind acceptance.
          </p>
        </section>
      </div>
      <Footer
        section="STACK EXCHANGE INC. · 2026 · COMMUNITY SURVEY · ODbL 1.0"
        refs={['usage', 'review']}
      />
    </div>
  );
}
