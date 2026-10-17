import { useLocale } from '@/lib/localization';
export default function IntroSlide() {
  const { content } = useLocale();
  return (
    <div className="slide-content opener">
      <p className="eyebrow">NEXT SLIDE STARTER / 01</p>
      <h1>
        {content?.headline ?? (
          <>
            Give your ideas
            <br />
            room to <em>land.</em>
          </>
        )}
      </h1>
      <p className="lede">
        {content?.subtitle ??
          'A small canvas for big ideas. Build your presentation with ordinary React components.'}
      </p>
      <div className="opener-orbit" aria-hidden="true">
        <span />
        <span />
        <span />
        <b>↗</b>
      </div>
      <div className="slide-footer">
        <span>WRITE. REGISTER. PRESENT.</span>
        <span>Use → to begin</span>
      </div>
    </div>
  );
}
