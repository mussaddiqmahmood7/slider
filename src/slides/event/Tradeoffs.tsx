import { Chapter, Footer } from './Parts';
export default function Tradeoffs() {
  return (
    <div className="slide-content tradeoffs-slide">
      <Chapter number="10">FIT / AN HONEST VIEW OF THE WORK</Chapter>
      <h1>
        The upside is real.
        <br />
        <em>So is the work.</em>
      </h1>
      <div className="balance-grid">
        <section>
          <span className="balance-symbol" aria-hidden="true">
            ↗
          </span>
          <h2>What you gain</h2>
          <ul>
            <li>Make useful things.</li>
            <li>See your ideas work.</li>
            <li>Explore several paths.</li>
          </ul>
        </section>
        <section>
          <span className="balance-symbol" aria-hidden="true">
            ↔
          </span>
          <h2>What it asks of you</h2>
          <ul>
            <li>Keep learning.</li>
            <li>Debug uncertainty.</li>
            <li>Compete. Communicate. Rest.</li>
          </ul>
        </section>
      </div>
      <p className="free-start">
        Free documentation + local tools are enough to begin. Paid AI is
        optional.
      </p>
      <Footer section="TRY THE WORK BEFORE BUYING THE CAREER STORY" />
    </div>
  );
}
