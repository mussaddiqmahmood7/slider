import { useState } from 'react';
import { Chapter, Footer } from './Parts';
export default function System() {
  const [trace, setTrace] = useState(false);
  return (
    <div className="slide-content system-slide">
      <Chapter number="02">ROLES / FOLLOW THE WHOLE FEATURE</Chapter>
      <h1>
        One product.
        <br />
        <em>Broader ownership.</em>
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
            interaction
          </p>
        </div>
        <div className="request-bridge">
          <span>{trace ? 'GET /courses' : 'request'}</span>
          <b aria-hidden="true">⇄</b>
          <span>{trace ? 'course data' : 'response'}</span>
        </div>
        <div className="system-node api-node">
          <small>BACKEND</small>
          <div className="node-visual" aria-hidden="true">
            {'{ }'}
          </div>
          <h2>Application / API</h2>
          <p>
            Rules · permissions
            <br />
            validation
          </p>
        </div>
        <div className="request-bridge">
          <span>{trace ? 'allowed query' : 'query'}</span>
          <b aria-hidden="true">⇄</b>
          <span>{trace ? 'matching rows' : 'result'}</span>
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
            persistence
          </p>
        </div>
      </div>
      <div className="system-span">
        <span>FULL-STACK · spans frontend + backend</span>
        <span>AI expands your reach. You own the boundaries.</span>
      </div>
      <button
        className="action"
        aria-pressed={trace}
        onClick={() => setTrace(!trace)}
      >
        {trace ? 'Reset request trace' : 'Trace a course request'}{' '}
        <span aria-hidden="true">↗</span>
      </button>
      <Footer section="ILLUSTRATIVE DYNAMIC SYSTEM · THIS DECK IS STATIC" />
    </div>
  );
}
