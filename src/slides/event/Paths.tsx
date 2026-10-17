import { Chapter, Footer } from './Parts';

export default function Paths() {
  const steps = [
    [
      '01',
      'Build one useful thing',
      'A real user. One complete workflow. One stack you can explain.',
    ],
    [
      '02',
      'Make the work inspectable',
      'Live demo + README + small atomic commits + tests + decisions.',
    ],
    [
      '03',
      'Get feedback, then apply',
      'A peer review. A targeted application. An alumni introduction.',
    ],
  ];

  return (
    <div className="slide-content first-job-slide">
      <Chapter number="09">FRESHER PLAYBOOK / STAND OUT WITH PROOF</Chapter>
      <h1>
        No experience?
        <br />
        <em>Build proof.</em>
      </h1>
      <div className="first-job-grid">
        <ol className="proof-steps">
          {steps.map(([n, title, detail]) => (
            <li key={n}>
              <span>{n}</span>
              <div>
                <h2>{title}</h2>
                <p>{detail}</p>
              </div>
            </li>
          ))}
        </ol>
        <aside className="portfolio-receipt">
          <span className="stat-kicker">A PROJECT SOMEONE CAN REVIEW</span>
          <h2>Campus event booking</h2>
          <ul>
            <li>
              <span>[ ✓ ]</span> Register → confirm → cancel workflow
            </li>
            <li>
              <span>[ ✓ ]</span> Handles concurrency: two students click the
              last seat
            </li>
            <li>
              <span>[ ✓ ]</span> Role-based authorization & edge-case recovery
            </li>
            <li>
              <span>[ ✓ ]</span> Explain one design tradeoff; test suite passing
            </li>
          </ul>
          <p>
            AI use is fine. Explain what you accepted, changed, and verified.
          </p>
        </aside>
      </div>
      <p className="paths-reality-note">
        Junior competition is real and continuous learning never stops. Show
        inspectable work alongside a clear, targeted application.
      </p>
      <Footer refs={['reviewPractice']} />
    </div>
  );
}
