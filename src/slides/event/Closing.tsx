import { useState } from 'react';
import Image from 'next/image';
import { Chapter, Footer } from './Parts';
export default function Closing() {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="slide-content future-closing">
      <Chapter number="11">YOUR NEXT INTERVIEW / QUESTIONS WELCOME</Chapter>
      <div className="closing-interview">
        <div className="interview-copy">
          <span className="stat-kicker">“AI COULD BUILD THIS.”</span>
          <h1>
            Why hire
            <br />
            <em>you?</em>
          </h1>
          <button
            className="action"
            aria-expanded={revealed}
            aria-controls="interview-answer"
            onClick={() => setRevealed(!revealed)}
          >
            {revealed ? 'Ask the question again' : 'Show what you bring'}{' '}
            <span aria-hidden="true">↗</span>
          </button>
          <div
            id="interview-answer"
            className="interview-answer"
            aria-live="polite"
          >
            {revealed ? (
              <>
                <strong>
                  “I can decide what to build.
                  <br />
                  And prove it works.”
                </strong>
                <p>
                  Understand the user. Shape the spec.
                  <br />
                  Review the change. Own the outcome.
                </p>
              </>
            ) : (
              <>
                <strong>The demo starts the conversation.</strong>
                <p>
                  Your decisions, debugging and evidence
                  <br />
                  show what you can contribute.
                </p>
              </>
            )}
          </div>
        </div>
        <a
          className="closing-resource"
          href="https://github.com/mussaddiqmahmood7/slider/tree/presentation/comsats-sahiwal/docs/student-resources.md"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/images/resources-qr.svg"
            alt="QR code linking directly to the student resource handout"
            width={200}
            height={200}
          />
          <span>YOUR FIELD GUIDE ↗</span>
          <strong>Resources · specs · first-job steps</strong>
          <small>
            github.com/mussaddiqmahmood7/slider
            <br />
            Presentation branch → docs → student-resources.md
          </small>
        </a>
      </div>
      <Footer section="BUILD WITH AI. BECOME SOMEONE PEOPLE CAN TRUST TO SHIP." />
    </div>
  );
}
