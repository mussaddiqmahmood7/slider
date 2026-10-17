import { Chapter, Footer } from './Parts';

export default function Tradeoffs() {
  const doors = [
    {
      name: 'Local team',
      scope: 'Software houses · on-site / hybrid',
      tradeoff: 'Ask about mentorship, review and pay.',
      action: 'Show a small live demo in an interview.',
    },
    {
      name: 'Remote team',
      scope: 'Global startups · async distributed',
      tradeoff: 'Write clear updates and deliver reliably.',
      action: 'Fix an open-source bug or docs page.',
    },
    {
      name: 'Freelance',
      scope: 'Contract delivery · direct clients',
      tradeoff: 'Find clients, agree scope and manage payment.',
      action: 'Offer one local shop a simple booking form.',
    },
    {
      name: 'Own product',
      scope: 'Micro-SaaS · niche tools',
      tradeoff: 'Own the product, support and revenue risk.',
      action: 'Ask a local shop about one recurring problem.',
    },
  ];

  return (
    <div className="slide-content route-slide">
      <Chapter number="10">
        OPPORTUNITY / FOUR WAYS TO BUILD YOUR CAREER
      </Chapter>
      <h1>
        Four ways to build <em>your career.</em>
      </h1>
      <div className="route-rows" role="list">
        {doors.map((door, i) => (
          <section role="listitem" key={door.name}>
            <div className="route-row-header">
              <span className="route-number">0{i + 1}</span>
              <h2>
                {door.name}
                <small>· {door.scope}</small>
              </h2>
            </div>
            <p>
              <strong>Tradeoff:</strong> {door.tradeoff}
            </p>
            <div className="route-action">
              <strong>First action:</strong> {door.action}
            </div>
          </section>
        ))}
      </div>
      <div className="career-balance">
        <span className="stat-kicker">PROS &amp; CONS · EXPERIENCE-BASED</span>
        <div className="career-balance-columns">
          <div>
            <strong>Pros</strong>
            <ul>
              <li>Work from anywhere</li>
              <li>You can build and ship alone</li>
              <li>Skills carry across employers</li>
            </ul>
          </div>
          <div>
            <strong>Cons</strong>
            <ul>
              <li>Tools keep changing</li>
              <li>Junior competition</li>
              <li>Constant learning</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer refs={['reviewPractice']} />
    </div>
  );
}
