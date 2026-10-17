import { useState } from 'react';
import { evidence as e } from '@/content/evidence';
import { Chapter, Footer } from './Parts';

export default function Security() {
  const [reviewed, setReviewed] = useState(false);
  return (
    <div className="slide-content security-slide">
      <Chapter number="06">AI WORKFLOW / SPECIFY, IMPLEMENT, VERIFY</Chapter>
      <h1>
        AI can write code.
        <br />
        <em>Who decides what’s correct?</em>
      </h1>
      <div className="security-stat-banner">
        <span>[ ! ] BENCHMARK EVIDENCE:</span> {e.security.riskyFlawPercent}% of
        benchmark tasks produced a risky flaw; {e.security.xssFailurePercent}%
        failed XSS (CWE-80) (Veracode 2026, vendor benchmark).
      </div>
      <div className="security-grid">
        <div className="code-comparison">
          <div className="code-heading">
            <span>ILLUSTRATIVE PSEUDOCODE</span>
            <span>
              {reviewed
                ? 'OWNERSHIP GUARD ENFORCED'
                : 'REVIEW THE MISSING DECISION'}
            </span>
          </div>
          <pre
            aria-label={
              reviewed
                ? 'Illustrative code with ownership guard'
                : 'Illustrative code missing ownership guard'
            }
          >
            <code>
              <span>record = db.load(request.params.id)</span>
              <mark className={reviewed ? 'guard-present' : 'guard-missing'}>
                {reviewed
                  ? 'if record.ownerId != user.id:\n    raise UnauthorizedError("Access Denied")'
                  : '# Who is allowed to read this?\n# Ownership check is missing.'}
              </mark>
              <span>return record</span>
            </code>
          </pre>
          <button
            className="action"
            aria-pressed={reviewed}
            onClick={() => setReviewed(!reviewed)}
          >
            {reviewed
              ? 'Show the missing check'
              : 'Review the ownership boundary'}{' '}
            <span aria-hidden="true">↗</span>
          </button>
          <p className="code-lesson">
            Authentication identifies you.
            <br />
            Authorization decides what you may access.
          </p>
        </div>
        <aside className="spec-card">
          <span className="stat-kicker">THE SPEC YOU MUST REVIEW</span>
          <h2>
            Only the owner can
            <br />
            read this record.
          </h2>
          <dl>
            <div>
              <dt>Expected</dt>
              <dd>Owner gets their record.</dd>
            </div>
            <div>
              <dt>Forbidden</dt>
              <dd>Another user gets denied.</dd>
            </div>
            <div>
              <dt>Evidence</dt>
              <dd>Test both cases. Inspect the diff.</dd>
            </div>
          </dl>
        </aside>
      </div>
      <p className="review-loop">
        Specify <span>→</span> Plan <span>→</span> Small diff <span>→</span>{' '}
        Review + test
      </p>
      <Footer
        section="SPEC-DRIVEN ENGINEERING · VIBE CODING VS. SPEC VERIFICATION"
        refs={['security', 'specs']}
      />
    </div>
  );
}
