import { Chapter, Footer } from './Parts';

const waves = [
  [
    '2000s',
    'Write the page',
    'HTML · CSS · JavaScript',
    'Structure + behavior',
  ],
  [
    '2000s onward',
    'Reuse a function',
    'jQuery · plugins · utilities',
    'Choose + integrate',
  ],
  [
    '2010s onward',
    'Compose the UI',
    'React · Bootstrap · Tailwind',
    'State + design systems',
  ],
  [
    '2010s–2020s',
    'Build the application',
    'Next.js · Nuxt · Remix',
    'Routing + data + delivery',
  ],
  [
    '2020s onward',
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
        Tools raise the abstraction.
        <br />
        <em>Judgment stays with you.</em>
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
        <span>WHO REVIEWS THE SPEC?</span>
        <p>
          Domain experts explain the need. Developers turn it into rules, design
          the system and verify the change.
        </p>
      </div>
      <Footer refs={['jquery', 'nextHistory', 'specs']} />
    </div>
  );
}
