import { Chapter, Footer } from './Parts';

export default function Opening() {
  return (
    <div className="slide-content event-opening">
      <Chapter number="01">KEYNOTE · COMSATS SAHIWAL 2026</Chapter>
      <div className="opening-grid">
        <div className="opening-copy">
          <p className="speaker-badge">
            <span className="speaker-name">Mussaddiq Mahmood</span> · Software
            Engineer
          </p>
          <h1>
            If AI can build
            <br />
            websites, why learn
            <br />
            <em>web development?</em>
          </h1>
          <p className="opening-subtitle">
            AI can draft the code. You own the decisions.
          </p>
          <p className="opening-definition">
            A prototype is a start. Reliable delivery needs clear rules, review
            and testing.
          </p>
        </div>
        <div
          className="need-diagram"
          aria-label="Comparison between an AI prompt prototype and a production system"
        >
          <p className="diagram-caption">
            THE PROMPT VS. THE PRODUCTION SYSTEM
          </p>
          <div className="browser-sketch">
            <div className="browser-bar">
              <i />
              <i />
              <i />
              <span>AI-generated prototype · illustration</span>
            </div>
            <div className="course-sketch">
              <small>SURFACE INTERFACE</small>
              <strong>
                Explore.
                <br />
                Book seat.
              </strong>
              <div className="sketch-input">
                Reserve course <span>↗</span>
              </div>
            </div>
          </div>
          <div className="diagram-line" aria-hidden="true" />
          <div className="reality-check-card">
            <small>WHAT PRODUCTION STILL DEMANDS</small>
            <ul>
              <li>
                <span className="glyph-warn">[ ! ]</span> Concurrency: two
                students click the last seat
              </li>
              <li>
                <span className="glyph-warn">[ ! ]</span> Authorization: Student
                A cannot read Student B’s records
              </li>
              <li>
                <span className="glyph-warn">[ ! ]</span> Resilience: payment
                succeeds but booking drops
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer refs={['dora']} />
    </div>
  );
}
