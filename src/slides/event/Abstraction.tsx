import { Chapter, Footer } from './Parts';

const waves = [
  [
    '2000s',
    'Write the page',
    'HTML · CSS · JavaScript',
    'Structure + behavior',
  ],
  [
    '2010s',
    'Reuse a function',
    'jQuery · plugins · utilities',
    'Choose + integrate',
  ],
  [
    '2015s',
    'Compose the UI',
    'React · Bootstrap · Tailwind',
    'State + design systems',
  ],
  [
    '2020s',
    'Build the application',
    'Next.js · Nuxt · Remix',
    'Routing + data + delivery',
  ],
  [
    '2026+',
    'Direct and verify AI',
    'Requirements → spec → verified diff',
    'Architecture + verification',
  ],
];

export default function Abstraction() {
  return (
    <div className="slide-content waves-slide">
      <Chapter number="04">
        EVOLUTION / OVERLAPPING WAVES OF ABSTRACTION
      </Chapter>
      <h1>
        Every era hid the last one.
        <br />
        <em>The spec is next.</em>
      </h1>
      <ol
        className="web-waves"
        aria-label="Overlapping waves in web development"
      >
        {waves.map(([era, title, tools, skill], i) => (
          <li key={title}>
            <span className="wave-index">0{i + 1}</span>
            <small>{era}</small>
            <h2>{title}</h2>
            <p>{tools}</p>
            <strong>{skill}</strong>
          </li>
        ))}
      </ol>
      <div className="wave-ownership">
        <span>
          A NON-ENGINEER CAN PROTOTYPE, BUT CANNOT OWN PRODUCTION ARCHITECTURE
        </span>
        <p>
          Someone must write the spec, define data constraints, and audit the
          diff. That someone is you.
        </p>
      </div>
      <Footer
        section="ABSTRACTION LADDER · EACH ERA EXPANDS WHAT ONE ENGINEER CAN SHIP"
        refs={['specs']}
      />
    </div>
  );
}
