import { Chapter, Footer } from './Parts';
export default function Tradeoffs() {
  const paths = [
    [
      'Local team',
      'Internship / junior role',
      'Show a relevant demo; ask who reviews your work.',
      'Learn delivery + team habits.',
    ],
    [
      'Remote team',
      'A small reviewed contribution',
      'Show written updates, reliable handoff and async work.',
      'Earn trust across distance.',
    ],
    [
      'Freelance',
      'One bounded client problem',
      'Agree scope, milestones, payment and handover.',
      'Deliver, then ask for a referral.',
    ],
    [
      'Own product',
      'A user with a recurring problem',
      'Talk to users before building; test willingness to pay.',
      'Own support + distribution.',
    ],
  ];
  return (
    <div className="slide-content route-slide">
      <Chapter number="10">OPPORTUNITY / CHOOSE YOUR FIRST DOOR</Chapter>
      <h1>
        One skill base.
        <br />
        <em>Four ways to use it.</em>
      </h1>
      <div className="route-rows" role="list">
        {paths.map(([name, start, action, growth], i) => (
          <section role="listitem" key={name}>
            <span className="route-number">0{i + 1}</span>
            <h2>
              {name}
              <small>{start}</small>
            </h2>
            <p>{action}</p>
            <strong>{growth}</strong>
          </section>
        ))}
      </div>
      <div className="route-tradeoff">
        <strong>Grow your ownership.</strong>
        <span>
          Feature → reliable system → product decisions. More reach also means
          learning, support and uncertainty.
        </span>
      </div>
      <Footer section="CAREER GUIDANCE · SPECIALIZE DEEPLY, UNDERSTAND THE WHOLE" />
    </div>
  );
}
