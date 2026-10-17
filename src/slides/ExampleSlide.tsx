import { useState } from 'react';
export default function ExampleSlide() {
  const [active, setActive] = useState(false);
  return (
    <div className="slide-content">
      <p className="eyebrow">02 / A CUSTOM COMPONENT</p>
      <h1>
        Make the idea
        <br />
        <em>visible.</em>
      </h1>
      <div
        className={`flow ${active ? 'flow-active' : ''}`}
        aria-label="An illustrative idea-to-outcome workflow"
      >
        <div>
          <small>01 / INPUT</small>
          <h2>An idea</h2>
          <p>Start with a question.</p>
        </div>
        <span aria-hidden="true">→</span>
        <div>
          <small>02 / PROCESS</small>
          <h2>A component</h2>
          <p>Give it a clear form.</p>
        </div>
        <span aria-hidden="true">→</span>
        <div>
          <small>03 / OUTCOME</small>
          <h2>A connection</h2>
          <p>Help someone understand.</p>
        </div>
      </div>
      <button
        className="action"
        aria-pressed={active}
        onClick={() => setActive(!active)}
      >
        {active ? 'Reset the path' : 'Trace the path'}{' '}
        <span aria-hidden="true">↗</span>
      </button>
      <div className="slide-footer">
        <span>ILLUSTRATIVE DIAGRAM</span>
        <span>Your markup. Your interaction.</span>
      </div>
    </div>
  );
}
