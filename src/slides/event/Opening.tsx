import { Chapter, Footer } from './Parts';
export default function Opening() {
  return (
    <div className="slide-content event-opening">
      <Chapter number="01">WEB DEVELOPMENT IN THE AI ERA</Chapter>
      <div className="opening-grid">
        <div className="opening-copy">
          <h1>
            The web is
            <br />
            still being
            <br />
            <em>built.</em>
          </h1>
          <p className="opening-subtitle">Your role is changing.</p>
          <p className="opening-definition">
            Web development turns a user need into a working web experience.
          </p>
        </div>
        <div
          className="need-diagram"
          aria-label="A student's need becomes an interface and a useful outcome"
        >
          <p className="diagram-caption">FROM A NEED TO AN EXPERIENCE</p>
          <div className="need-label">
            <span className="diagram-index">01</span>
            <span>“Find my course.”</span>
          </div>
          <div className="diagram-line" aria-hidden="true" />
          <div className="browser-sketch">
            <div className="browser-bar">
              <i />
              <i />
              <i />
              <span>Student portal</span>
            </div>
            <div className="course-sketch">
              <small>YOUR NEXT STEP</small>
              <strong>
                Explore.
                <br />
                Choose.
                <br />
                Learn.
              </strong>
              <div className="sketch-input">
                Search courses <span>↗</span>
              </div>
            </div>
          </div>
          <div className="need-outcome">
            <span aria-hidden="true">↳</span> A student can take the next step.
          </div>
        </div>
      </div>
      <Footer section="COMSATS UNIVERSITY ISLAMABAD · SAHIWAL CAMPUS" />
    </div>
  );
}
