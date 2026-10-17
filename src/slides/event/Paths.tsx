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
      'Live demo + README + small commits + tests + decisions.',
    ],
    [
      '03',
      'Get feedback, then apply',
      'A peer review. A targeted application. An alumni introduction.',
    ],
  ];
  return (
    <div className="slide-content first-job-slide">
      <Chapter number="09">FRESHERS / MAKE YOUR ABILITY VISIBLE</Chapter>
      <h1>
        Your first advantage:
        <br />
        <em>proof you can deliver.</em>
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
          <span className="stat-kicker">A PORTFOLIO THAT CAN BE REVIEWED</span>
          <h2>Campus event booking</h2>
          <ul>
            <li>Register → confirm → cancel</li>
            <li>Handle full / failed / duplicate</li>
            <li>Explain one design tradeoff</li>
            <li>Fix a bug live, with reasoning</li>
          </ul>
          <p>AI use is fine. Explain what you accepted, changed and tested.</p>
        </aside>
      </div>
      <Footer section="PRACTICAL ROUTE · APPLY WHILE IMPROVING · NO FIXED HIRING TIMELINE" />
    </div>
  );
}
