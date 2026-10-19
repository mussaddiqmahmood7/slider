import { useRef } from 'react';
import { checkedDate, sources, type SourceId } from '@/content/evidence';

/** One identity and one source affordance on every event slide. */
export function Footer({
  refs,
  note = 'Teaching example and practical guidance. The sources inform this slide; they do not promise an individual outcome.',
}: {
  refs: readonly SourceId[];
  note?: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  return (
    <div className="slide-footer event-footer">
      <span className="footer-identity">
        COMSATS Sahiwal <span aria-hidden="true">·</span> Web Development in the
        AI Era
      </span>
      <button
        ref={trigger}
        className="sources-trigger"
        onClick={() => dialog.current?.showModal()}
        aria-haspopup="dialog"
      >
        Sources <span aria-hidden="true">({refs.length}) ↗</span>
      </button>
      <dialog
        ref={dialog}
        className="sources-dialog"
        aria-labelledby="sources-title"
        onClose={() => trigger.current?.focus()}
        onKeyDown={(event) => {
          event.stopPropagation();
          if (event.key !== 'Tab') return;
          const items =
            event.currentTarget.querySelectorAll<HTMLElement>(
              'button, a[href]',
            );
          const first = items[0],
            last = items[items.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
      >
        <div className="sources-heading">
          <h2 id="sources-title">Sources & context</h2>
          <button
            autoFocus
            onClick={() => dialog.current?.close()}
            aria-label="Close sources"
          >
            Close <kbd>Esc</kbd>
          </button>
        </div>
        <p className="sources-intro">{note}</p>
        <ol>
          {refs.map((id) => (
            <li key={id}>
              <span className="source-kind">{sources[id].kind}</span>
              <a href={sources[id].url} target="_blank" rel="noreferrer">
                {sources[id].label} ↗
              </a>
              <p>{sources[id].detail}</p>
            </li>
          ))}
        </ol>
        <p className="sources-checked">
          Sources checked {checkedDate}. External links need internet; this
          panel and the deck work locally.
        </p>
      </dialog>
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
