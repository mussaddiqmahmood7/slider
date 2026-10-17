export default function ClosingSlide() {
  return (
    <div className="slide-content closing">
      <p className="eyebrow">03 / MAKE IT YOURS</p>
      <h1>
        Your next story
        <br />
        starts <em>here.</em>
      </h1>
      <ol className="author-steps">
        <li>
          <b>01</b>
          <span>Write a React component.</span>
        </li>
        <li>
          <b>02</b>
          <span>Add it to the registry.</span>
        </li>
        <li>
          <b>03</b>
          <span>Build. Host. Present.</span>
        </li>
      </ol>
      <div className="slide-footer">
        <span>SMALL BY DESIGN. OPEN BY DEFAULT.</span>
        <code>src/slides/index.ts</code>
      </div>
    </div>
  );
}
