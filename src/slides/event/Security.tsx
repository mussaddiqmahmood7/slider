import { useState } from 'react';
import { evidence as e } from '@/content/evidence';
import { Chapter, Footer } from './Parts';
export default function Security() {
  const [reviewed, setReviewed] = useState(false);
  return (
    <div className="slide-content security-slide">
      <Chapter number="06">SECURITY / OWN THE CHANGE</Chapter>
      <h1>
        Code that runs
        <br />
        <em>still needs review.</em>
      </h1>
      <div className="security-grid">
        <div className="code-comparison">
          <div className="code-heading">
            <span>ILLUSTRATIVE PSEUDOCODE</span>
            <span>
              {reviewed
                ? 'OWNERSHIP CHECK ADDED'
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
              <span>record = load(request.id)</span>
              <mark className={reviewed ? 'guard-present' : 'guard-missing'}>
                {reviewed
                  ? 'if record.ownerId != user.id:\n    denyAccess()'
                  : '// Who is allowed to read this?\n// Ownership check is missing.'}
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
        <aside className="benchmark-stat">
          <span>VENDOR BENCHMARK</span>
          <strong>
            {e.security.passPercentRounded}
            <small>%</small>
          </strong>
          <p>security pass rate</p>
          <small>
            {e.security.period}
            <br />
            {e.security.tasks} tasks · {e.security.languages} languages
            <br />
            {e.security.weaknessClasses} weakness classes
          </small>
        </aside>
      </div>
      <p className="review-loop">
        Generate <span>→</span> Inspect <span>→</span> Test <span>→</span>{' '}
        Verify
      </p>
      <Footer
        section="RAW-MODEL TASKS · NO SECURITY GUIDANCE · NOT A BREACH RATE"
        refs={['security', 'access']}
      />
    </div>
  );
}
