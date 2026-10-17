import { sources, type SourceId } from '@/content/evidence';
export function Footer({
  section,
  refs = [],
}: {
  section: string;
  refs?: readonly SourceId[];
}) {
  return (
    <div className="slide-footer event-footer">
      <span>{section}</span>
      <span className="source-links">
        {refs.map((id) => (
          <a key={id} href={sources[id].url} target="_blank" rel="noreferrer">
            {sources[id].label} ↗
          </a>
        ))}
      </span>
    </div>
  );
}
export function Chapter({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <p className="eyebrow">
      <span className="chapter-number">{number}</span> {children}
    </p>
  );
}
