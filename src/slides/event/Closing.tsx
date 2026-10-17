import Image from 'next/image';
import { Chapter, Footer } from './Parts';
export default function Closing() {
  return (
    <div className="slide-content event-closing">
      <Chapter number="12">YOUR NEXT STEP / QUESTIONS WELCOME</Chapter>
      <h1>
        Try the <em>work.</em>
      </h1>
      <div className="closing-grid">
        <div>
          <p className="closing-challenge">Build a useful campus-club site.</p>
          <ul className="reflection-prompts">
            <li>Enjoy building and debugging?</li>
            <li>Ready to learn and explain decisions?</li>
            <li>Can you change it without the answer?</li>
          </ul>
          <p className="resource-pointer">
            Start small. Present what you understand.
            <br />
            <code>docs/student-resources.md</code>
          </p>
        </div>
        <a
          className="repository-cta"
          href="https://github.com/mussaddiqmahmood7/slider"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/images/repository-qr.svg"
            alt="QR code for github.com/mussaddiqmahmood7/slider"
            width={200}
            height={200}
          />
          <span>THE STARTER + LEARNING HANDOUT ↗</span>
          <strong>
            github.com/
            <br />
            mussaddiqmahmood7/slider
          </strong>
        </a>
      </div>
      <Footer section="BUILD SOMETHING USEFUL. UNDERSTAND WHAT YOU SHIP." />
    </div>
  );
}
