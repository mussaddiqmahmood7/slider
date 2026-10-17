import { evidence as e } from '@/content/evidence';
import { Chapter, Footer } from './Parts';

export default function Tradeoffs() {
  const doors = [
    {
      name: 'Local team',
      scope: 'Software houses · on-site / hybrid',
      tradeoff:
        'Lower starting pay vs rapid in-person senior mentorship and team habits.',
      action:
        'Ship one complete CRUD app with auth and walk into an interview with a live demo.',
    },
    {
      name: 'Remote team',
      scope: 'Global startups · async distributed',
      tradeoff:
        'Zero handholding and strict async communication vs global USD market compensation.',
      action:
        'Record a 2-minute Loom walkthrough explaining an architectural decision and commit clean PRs.',
    },
    {
      name: 'Freelance',
      scope: 'Contract delivery · direct clients',
      tradeoff:
        'Irregular client pipeline and sales overhead vs early independence and market feedback.',
      action:
        'Package one specific outcome ("I fix Next.js page latency & Stripe webhooks") instead of "full-stack dev".',
    },
    {
      name: 'Own product',
      scope: 'Micro-SaaS · niche tools',
      tradeoff:
        'Zero guaranteed salary and total market risk vs 100% equity and product ownership.',
      action:
        'Talk to 5 students or local businesses about their biggest spreadsheet headache before writing code.',
    },
  ];

  return (
    <div className="slide-content route-slide">
      <Chapter number="10">
        OPPORTUNITY / FOUR WAYS TO BUILD YOUR CAREER
      </Chapter>
      <h1>
        Four ways to build
        <br />
        <em>your career.</em>
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
      <div className="route-tradeoff">
        <strong>NATIONAL DEMAND CONTEXT:</strong>
        <span>
          Pakistan freelance tech exports reached {e.exports.freelanceUsd}, up +
          {e.exports.freelanceGrowthPercent}% in {e.exports.period} (State Bank
          of Pakistan via Economic Survey). Choose the door matching your
          current proof.
        </span>
      </div>
      <Footer
        section="CAREER STRATEGY · START WITH MENTORSHIP, SCALE TO INDEPENDENCE"
        refs={['pakExports']}
      />
    </div>
  );
}
