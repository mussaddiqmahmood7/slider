import { Chapter, Footer } from './Parts';
const waves = [
  [
    '2000s',
    'Write the page',
    'HTML · CSS · JavaScript',
    'Structure + behavior',
  ],
  [
    '2000s–2010s',
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
    '2010s onward',
    'Build the application',
    'Next.js · Nuxt · Remix',
    'Routing + data + delivery',
  ],
  [
    '2020s onward',
    'Specify + direct AI',
    'Requirements → plan → changes',
    'Architecture + verification',
  ],
];
export default function Abstraction() {
  return (
    <div className="slide-content waves-slide">
      <Chapter number="04">THE WEB / OVERLAPPING WAVES OF ABSTRACTION</Chapter>
      <h1>
        Less work by hand.
        <br />
        <em>More decisions to own.</em>
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
          The developer: choose the approach, challenge assumptions, verify the
          result.
        </p>
      </div>
      <Footer
        section="OLDER LAYERS STILL WORK · CHOOSE FOR THE PROBLEM"
        refs={['specs']}
      />
    </div>
  );
}
