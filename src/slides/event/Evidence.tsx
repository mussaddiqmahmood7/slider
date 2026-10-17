import { evidence as e } from '@/content/evidence';
import { Chapter, Footer } from './Parts';
export default function Evidence() {
  return (
    <div className="slide-content adoption-slide">
      <Chapter number="05">
        AI / ADOPTION, TRUST AND CHECKING ARE DIFFERENT
      </Chapter>
      <h1>
        Most surveyed developers use AI.
        <br />
        <em>Trust still has conditions.</em>
      </h1>
      <div className="three-stats-grid">
        <section className="adoption-card">
          <span className="stat-kicker">USE AT WORK</span>
          <strong>
            {e.usage.usePercent}
            <small>%</small>
          </strong>
          <p>use at least one AI tool</p>
          <small>n = 17,464 · rounded</small>
        </section>
        <section className="adoption-card">
          <span className="stat-kicker">NON-USE</span>
          <strong>
            {e.usage.nonUsePercent}
            <small>%</small>
          </strong>
          <p>do not use AI tools at work</p>
          <small>Same question · rounded</small>
        </section>
        <section className="adoption-card trust-card">
          <span className="stat-kicker">BROAD TRUST</span>
          <strong>
            {e.trust.broadPercent}
            <small>%</small>
          </strong>
          <p>report trust across tasks, including important work decisions</p>
          <small>Different question · n = 14,304</small>
        </section>
      </div>
      <div className="checking-strip">
        <strong>What do they check?</strong>
        <span>
          <b>{e.review.runLocally}%</b> run locally · <b>{e.review.asIs}%</b>{' '}
          use answers as-is.
        </span>
        <small>
          Separate multi-select question · n = 13,162 · self-report, not
          observed blind acceptance.
        </small>
      </div>
      <Footer
        refs={['usage', 'trust', 'checks']}
        note="Community self-reports with different question bases. Adoption is current use, not daily use. Conditional trust and checking behavior must not be treated as the same measure."
      />
    </div>
  );
}
