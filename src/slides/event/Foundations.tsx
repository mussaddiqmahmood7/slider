import { Chapter, Footer } from './Parts';
export default function Foundations() {
  return (
    <div className="slide-content concepts-slide">
      <Chapter number="03">SKILLS / UNDERSTANDING OUTLASTS SYNTAX</Chapter>
      <h1>
        Learn the concepts.
        <br />
        <em>Look up the syntax.</em>
      </h1>
      <div className="concepts-grid">
        <div className="concept-ledger">
          <div>
            <strong>Interface</strong>
            <span>Meaning, accessibility, layout, state</span>
          </div>
          <div>
            <strong>System</strong>
            <span>HTTP, data models, permissions, failures</span>
          </div>
          <div>
            <strong>Delivery</strong>
            <span>Git, debugging, tests, deployment</span>
          </div>
          <div>
            <strong>AI collaboration</strong>
            <span>Clear specs, context, small changes, review</span>
          </div>
        </div>
        <aside className="concept-answer">
          <span className="stat-kicker">IS HTML STILL WORTH LEARNING?</span>
          <h2>
            Yes. Learn what
            <br />
            good output means.
          </h2>
          <p>
            A real button. A labeled input.
            <br />A page everyone can use.
          </p>
          <p>
            Use one stack to build depth.
            <br />
            Transfer the ideas to the next.
          </p>
        </aside>
      </div>
      <p className="revision-takeaway">
        AI can translate code. You still check behavior, libraries and runtime
        differences.
      </p>
      <Footer
        section="PRACTICAL GUIDANCE · UNDERSTAND, BUILD, EXPLAIN"
        refs={['foundations']}
      />
    </div>
  );
}
