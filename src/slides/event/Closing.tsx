import { useState } from 'react';
import Image from 'next/image';
import { Chapter, Footer } from './Parts';

export default function Closing() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="slide-content future-closing">
      <Chapter number="11">THE CLOSING / YOUR NEXT MOVE</Chapter>
      <div className="closing-interview">
        <div className="interview-copy">
          <span className="stat-kicker">“AI COULD BUILD THIS.”</span>
          <h1>
            Why should
            <br />
            we hire <em>you?</em>
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
                  “AI generated the code.
                  <br />I decide what to build, and I prove it works.”
                </strong>
                <p>
                  Understand the user. Shape the spec.
                  <br />
                  Audit the security. Own the outcome.
                </p>
              </>
            ) : (
              <>
                <strong>The demo starts the conversation.</strong>
                <p>
                  Your decisions, debugging, and evidence
                  <br />
                  show what you contribute.
                </p>
              </>
            )}
          </div>
          <div className="challenge-strip">
            <span className="stat-kicker">7-DAY CHALLENGE:</span>
            <p>
              Pick a real problem → one-page spec → direct AI → document 3 bugs
              it made → deploy.
            </p>
          </div>
        </div>
        <div className="closing-sidebar">
          <div className="career-reflection" aria-label="Career reflection">
            <span className="stat-kicker">
              IS WEB DEVELOPMENT RIGHT FOR YOU?
            </span>
            {[
              'Enjoy solving problems with no obvious answer?',
              'Curious how apps actually work?',
              'Patient with debugging and learning?',
            ].map((prompt, i) => (
              <fieldset key={prompt}>
                <legend>{prompt}</legend>
                <div className="reflection-answers">
                  <label>
                    <input type="radio" name={`reflection-${i}`} value="yes" />{' '}
                    Yes
                  </label>
                  <label>
                    <input type="radio" name={`reflection-${i}`} value="no" />{' '}
                    No
                  </label>
                </div>
              </fieldset>
            ))}
            <p>Try one small project before deciding.</p>
          </div>
          <a
            className="closing-resource"
            href="https://github.com/mussaddiqmahmood7/slider/blob/presentation/comsats-sahiwal/docs/student-resources.md"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/resources-qr.svg"
              alt="QR code linking directly to the student resource handout"
              width={180}
              height={180}
            />
            <span>YOUR FIELD GUIDE ↗</span>
            <strong>Handout · specs · starter repo</strong>
            <small>
              github.com/mussaddiqmahmood7/slider
              <br />
              docs/student-resources.md
            </small>
          </a>
        </div>
      </div>

      <Footer refs={['specs', 'reviewPractice']} />
    </div>
  );
}
