import { Chapter, Footer } from './Parts';
export default function Abstraction() {
  const layers = [
    'Machine instructions',
    'Languages',
    'Libraries',
    'Frameworks',
    'AI assistance',
  ];
  return (
    <div className="slide-content abstraction-slide">
      <Chapter number="04">
        CHANGE / A SCHEMATIC, NOT A REPLACEMENT TIMELINE
      </Chapter>
      <h1>
        Abstraction
        <br />
        <em>changes the work.</em>
      </h1>
      <div className="abstraction-visual">
        <ol
          className="abstraction-stairs"
          aria-label="Coexisting layers of abstraction"
        >
          {layers.map((layer, i) => (
            <li key={layer} style={{ '--step': i } as React.CSSProperties}>
              <span>0{i + 1}</span>
              <strong>{layer}</strong>
            </li>
          ))}
        </ol>
        <p className="ownership-question">
          What stays yours?
          <br />
          <strong>
            Decisions.
            <br />
            Verification.
            <br />
            Ownership.
          </strong>
        </p>
      </div>
      <div className="perspective-note">
        Practitioner perspective · Scott Hanselman: keep human judgment and
        understanding in the process.
      </div>
      <Footer
        section="A FIRST DEMO ≠ INDEPENDENT COMPETENCE"
        refs={['perspective']}
      />
    </div>
  );
}
