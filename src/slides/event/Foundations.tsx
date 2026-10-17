import { Chapter, Footer } from './Parts';
export default function Foundations() {
  return (
    <div className="slide-content foundations-slide">
      <Chapter number="03">TECHNOLOGIES / CONCEPTS BEFORE TOOLS</Chapter>
      <h1>
        Learn the foundations.
        <br />
        <em>Then choose a stack.</em>
      </h1>
      <div className="foundation-map">
        <dl className="foundation-list">
          <div>
            <dt>HTML + accessibility</dt>
            <dd>Meaning, labels, native controls</dd>
          </div>
          <div>
            <dt>CSS</dt>
            <dd>Layout, sizing, responsiveness</dd>
          </div>
          <div>
            <dt>JavaScript</dt>
            <dd>State, events, async, errors</dd>
          </div>
          <div>
            <dt>HTTP + data</dt>
            <dd>Requests and boundaries</dd>
          </div>
          <div>
            <dt>Git + DevTools</dt>
            <dd>Inspect, explain, correct</dd>
          </div>
        </dl>
        <div className="stack-column">
          <span className="stack-bracket" aria-hidden="true">
            ↗
          </span>
          <small>ONE REPRESENTATIVE PATH</small>
          <h2>
            React
            <br />
            <span>+ TypeScript</span>
          </h2>
          <div className="stack-rule" />
          <h2>Next.js</h2>
          <p>
            Understand why
            <br />
            the tools work.
          </p>
        </div>
      </div>
      <Footer
        section="UNDERSTAND CONCEPTS · LOOK UP API DETAILS"
        refs={['foundations']}
      />
    </div>
  );
}
