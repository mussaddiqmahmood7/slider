import { Chapter, Footer } from './Parts';
export default function Learning() {
  const steps = [
    ['Attempt', 'Predict the behavior.'],
    ['Ask', 'Request one hint.'],
    ['Build', 'Make a small change.'],
    ['Verify', 'Inspect. Run. Test.'],
    ['Explain', 'Modify it unaided.'],
  ];
  return (
    <div className="slide-content learning-slide">
      <Chapter number="11">
        LEARNING / BUILD DEPTH, THEN CONNECT THE SYSTEM
      </Chapter>
      <h1>
        Use AI to build.
        <br />
        <em>Make sure you learn.</em>
      </h1>
      <div className="practice-loop">
        <ol>
          {steps.map(([name, detail], i) => (
            <li key={name}>
              <span>0{i + 1}</span>
              <h2>{name}</h2>
              <p>{detail}</p>
            </li>
          ))}
        </ol>
        <div className="loop-return" aria-hidden="true">
          ← CHANGE THE REQUIREMENT. TRY AGAIN.
        </div>
      </div>
      <blockquote className="tutor-prompt">
        <span>ASK A TUTOR</span>“Give one hint. Ask me to predict. Let me
        explain.”
      </blockquote>
      <Footer
        section="SPEAKER’S LEARNING RECOMMENDATION · DEMO ≠ UNDERSTANDING"
        refs={['learning', 'foundations']}
      />
    </div>
  );
}
