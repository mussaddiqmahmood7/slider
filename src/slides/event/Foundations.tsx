import { Chapter, Footer } from './Parts';

export default function Foundations() {
  return (
    <div className="slide-content concepts-slide">
      <Chapter number="03">FOUNDATIONS / WHAT SURVIVES THE HYPE</Chapter>
      <h1>
        Learn the concepts.
        <br />
        <em>Syntax will change.</em>
      </h1>
      <div className="concepts-grid">
        <div className="concept-ledger">
          <div>
            <strong>Interfaces</strong>
            <span>Meaning, accessibility, layout, state flow</span>
          </div>
          <div>
            <strong>Systems</strong>
            <span>HTTP contracts, data models, permissions, failures</span>
          </div>
          <div>
            <strong>Delivery</strong>
            <span>Git hygiene, root-cause debugging, tests, deployment</span>
          </div>
          <div>
            <strong>Directing AI</strong>
            <span>Clear specs, context constraints, small diffs, review</span>
          </div>
        </div>
        <aside className="concept-answer">
          <span className="stat-kicker">IS HTML STILL WORTH LEARNING?</span>
          <h2>
            HTML is the vocabulary
            <br />
            you review AI in.
          </h2>
          <p>
            A real accessible button. A labeled input.
            <br />A page everyone can use.
          </p>
          <p>
            You cannot review what you cannot read.
            <br />
            Understand the output you approve.
          </p>
        </aside>
      </div>
      <div className="starter-stack" aria-label="Example starting technologies">
        <div>
          <strong>Frontend</strong>
          <span>
            HTML · CSS · JavaScript/TypeScript
            <br />
            React or Next.js
          </span>
        </div>
        <div>
          <strong>Backend</strong>
          <span>
            Node.js, Python
            <br />
            or PHP
          </span>
        </div>
        <div>
          <strong>Data</strong>
          <span>
            PostgreSQL
            <br />
            or MySQL
          </span>
        </div>
        <div>
          <strong>Delivery</strong>
          <span>Git · deployment</span>
        </div>
      </div>
      <p className="stack-caption">One example stack. Others exist.</p>
      <p className="revision-takeaway">
        Concepts transfer. Verify unfamiliar APIs and runtime behavior.
      </p>
      <Footer refs={['foundations']} />
    </div>
  );
}
