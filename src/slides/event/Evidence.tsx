import { evidence as e } from '@/content/evidence';
import { Chapter, Footer } from './Parts';

export default function Evidence() {
  return (
    <div className="slide-content adoption-slide">
      <Chapter number="05">AI / ADOPTION VS. CRITICAL TRUST</Chapter>
      <h1>
        Everyone uses AI.
        <br />
        <em>Few trust it with big decisions.</em>
      </h1>
      <div className="adoption-grid three-stats-grid">
        <section className="adoption-card">
          <span className="stat-kicker">WORK ADOPTION</span>
          <strong>
            {e.usage.usePercent}
            <small>%</small>
          </strong>
          <p>use at least one AI tool at work</p>
        </section>
        <section className="adoption-card">
          <span className="stat-kicker">NON-USE</span>
          <strong>
            {e.usage.nonUsePercent}
            <small>%</small>
          </strong>
          <p>do not use AI tools in their work</p>
        </section>
        <section className="adoption-card trust-card">
          <span className="stat-kicker">CRITICAL DECISIONS</span>
          <strong>
            {e.usage.trustImportantPercent}
            <small>%</small>
          </strong>
          <p>would trust AI for an important decision</p>
        </section>
      </div>
      <p className="adoption-takeaway">
        The gap between daily use and critical trust is where engineering lives.
        Survey respondents; use at least one AI tool at work (Stack Overflow
        2026).
      </p>
      <Footer
        section="STACK OVERFLOW 2026 DEVELOPER SURVEY · ADOPTION VS. TRUST"
        refs={['usage', 'trust']}
      />
    </div>
  );
}
