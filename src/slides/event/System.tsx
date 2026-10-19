import { useState } from 'react';
import { Chapter, Footer } from './Parts';

export default function System() {
  const [trace, setTrace] = useState(false);
  return (
    <div className="slide-content system-slide">
      <Chapter number="02">SCOPE / FOLLOW THE WHOLE FEATURE</Chapter>
      <h1>
        A website is more
        <br />
        than what you see.
        <br />
        <em>One engineer. Full-stack reach.</em>
      </h1>
      <div className={`system-map ${trace ? 'is-tracing' : ''}`}>
        <div className="system-node browser-node">
          <small>FRONTEND</small>
          <div className="node-visual" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <h2>Browser</h2>
          <p>
            Structure · layout
            <br />
            interaction · failure states
          </p>
        </div>
        <div className="request-bridge">
          <span>{trace ? 'POST /book-seat' : 'request'}</span>
          <b aria-hidden="true">⇄</b>
          <span>{trace ? 'HTTP 200 confirmed' : 'response'}</span>
        </div>
        <div className="system-node api-node">
          <small>APPLICATION</small>
          <div className="node-visual" aria-hidden="true">
            {'{ }'}
          </div>
          <h2>API & Rules</h2>
          <p>
            Auth · permissions
            <br />
            concurrency · validation
          </p>
        </div>
        <div className="request-bridge">
          <span>{trace ? 'concurrency lock' : 'query'}</span>
          <b aria-hidden="true">⇄</b>
          <span>{trace ? 'commit transaction' : 'result'}</span>
        </div>
        <div className="system-node data-node">
          <small>DATA</small>
          <div className="node-visual database-visual" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <h2>Database</h2>
          <p>
            Relationships
            <br />
            integrity · persistence
          </p>
        </div>
      </div>
      <div className="system-span">
        <span>FULL-STACK · spans frontend, application and data</span>
        <span>
          AI writes inside each box. You own the contracts between them.
        </span>
      </div>
      <button
        className="action"
        aria-pressed={trace}
        onClick={() => setTrace(!trace)}
      >
        {trace ? 'Reset booking trace' : 'Trace a seat reservation'}{' '}
        <span aria-hidden="true">↗</span>
      </button>
      <Footer refs={['access']} />
    </div>
  );
}
