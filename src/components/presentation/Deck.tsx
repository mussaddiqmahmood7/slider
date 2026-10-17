'use client';
import Image from 'next/image';
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react';
import { slides } from '@/slides';
import { deckConfig } from '@/deck.config';
import {
  boundedIndex,
  indexFromHash,
  validateSlides,
} from '@/lib/slide-navigation';
import { english, LocaleContext, resolveLocale } from '@/lib/localization';

validateSlides(slides);
const themes = ['paper', 'midnight', 'blueprint', 'sand'] as const;
type Theme = (typeof themes)[number];
const subscribe = (listener: () => void) => {
  window.addEventListener('popstate', listener);
  window.addEventListener('hashchange', listener);
  return () => {
    window.removeEventListener('popstate', listener);
    window.removeEventListener('hashchange', listener);
  };
};
const snapshot = () => window.location.href;
const serverSnapshot = () => '';
const interactive = (target: EventTarget | null) =>
  target instanceof Element &&
  !!target.closest(
    'input, textarea, select, button, a, summary, [contenteditable]:not([contenteditable="false"]), [role="button"], [role="slider"], [role="textbox"]',
  );

export default function Deck() {
  const href = useSyncExternalStore(subscribe, snapshot, serverSnapshot);
  const url = new URL(href || 'https://local.invalid');
  const index = indexFromHash(url.hash, slides);
  const slide = slides[index];
  const { localization } = deckConfig;
  const locale = localization.enabled
    ? resolveLocale(
        url.searchParams.get('lang'),
        localization.locales,
        localization.defaultLocale,
      )
    : {
        code: deckConfig.language,
        label: deckConfig.language,
        direction: deckConfig.direction,
      };
  const defaultLocale = resolveLocale(
    localization.defaultLocale,
    localization.locales,
    localization.defaultLocale,
  );
  const messages = {
    ...english,
    ...(localization.enabled ? defaultLocale.messages : {}),
    ...locale.messages,
  };
  const title = (id: string, fallback: string) =>
    locale.titles?.[id] ??
    (localization.enabled ? defaultLocale.titles?.[id] : undefined) ??
    fallback;
  const [theme, setTheme] = useState<Theme>('paper');
  const [help, setHelp] = useState(false);
  const [status, setStatus] = useState('');
  const [fullscreen, setFullscreen] = useState(false);
  const [direction, setDirection] = useState(1);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const overviewButton = useRef<HTMLButtonElement>(null);
  const currentCard = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      try {
        const stored = localStorage.getItem('slide-theme');
        if (themes.includes(stored as Theme)) setTheme(stored as Theme);
      } catch {
        /* Storage may be disabled. */
      }
    });
    const sync = () => setFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', sync);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('fullscreenchange', sync);
    };
  }, []);
  useEffect(() => {
    document.documentElement.lang = locale.code;
    document.documentElement.dir = locale.direction;
  }, [locale.code, locale.direction]);
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && localization.enabled) {
      for (const language of localization.locales) {
        if (
          language.code !== localization.defaultLocale &&
          (!language.messages ||
            Object.keys(language.messages).length <
              Object.keys(english).length ||
            slides.some((item) => !language.titles?.[item.id]))
        ) {
          console.warn(
            `Locale "${language.code}" is incomplete: missing labels/titles use default text; missing content uses original components. Review mixed-language output.`,
          );
        }
      }
    }
  }, [localization]);
  const navigate = useCallback(
    (next: number) => {
      const target = boundedIndex(next, slides.length);
      if (!slides[target] || target === index) return;
      setDirection(target > index ? 1 : -1);
      const nextUrl = new URL(window.location.href);
      nextUrl.hash = slides[target].id;
      window.history.pushState(null, '', nextUrl);
      window.dispatchEvent(new PopStateEvent('popstate'));
    },
    [index],
  );
  const openOverview = useCallback(() => {
    if (!dialog.current || dialog.current.open) return;
    trigger.current =
      document.activeElement instanceof HTMLElement &&
      document.activeElement !== document.body
        ? document.activeElement
        : overviewButton.current;
    dialog.current.showModal();
    currentCard.current?.focus();
    currentCard.current?.scrollIntoView({ block: 'nearest' });
  }, []);
  const closeOverview = () => dialog.current?.close();
  const toggleFullscreen = useCallback(async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else if (document.documentElement.requestFullscreen)
        await document.documentElement.requestFullscreen();
      else setStatus(messages.fullscreenUnavailable);
    } catch {
      setStatus(messages.fullscreenUnavailable);
    }
  }, [messages.fullscreenUnavailable]);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (
        event.defaultPrevented ||
        event.ctrlKey ||
        event.metaKey ||
        event.altKey ||
        dialog.current?.open ||
        interactive(event.target)
      )
        return;
      let next: number | undefined;
      switch (event.key) {
        case 'ArrowRight':
        case 'PageDown':
          next = index + 1;
          break;
        case 'ArrowLeft':
        case 'PageUp':
          next = index - 1;
          break;
        case ' ':
          next = index + (event.shiftKey ? -1 : 1);
          break;
        case 'Home':
          next = 0;
          break;
        case 'End':
          next = slides.length - 1;
          break;
        case 'g':
        case 'G':
          event.preventDefault();
          openOverview();
          return;
        case 'f':
        case 'F':
          event.preventDefault();
          void toggleFullscreen();
          return;
      }
      if (next !== undefined) {
        event.preventDefault();
        navigate(next);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, navigate, openOverview, toggleFullscreen]);
  const ActiveSlide = slide
    ? (locale.components?.[slide.id] ?? slide.component)
    : null;
  return (
    <LocaleContext value={locale}>
      <div className="deck" data-theme={theme} aria-busy={!href}>
        <header className="deck-heading">
          <span className="brand-mark" aria-hidden="true">
            S/
          </span>
          <span>{deckConfig.title}</span>
          <span className="deck-hint">React components. Your story.</span>
        </header>
        <main
          className="stage-area"
          id="presentation"
          aria-label={deckConfig.title}
        >
          <div
            className="stage"
            style={{ '--direction': direction } as React.CSSProperties}
          >
            <article
              className="slide"
              key={slide?.id ?? 'empty'}
              aria-label={slide ? title(slide.id, slide.title) : messages.empty}
            >
              {ActiveSlide ? (
                <ActiveSlide />
              ) : (
                <div className="slide-content">
                  <h1>{messages.empty}</h1>
                </div>
              )}
            </article>
          </div>
        </main>
        <footer className="controls">
          <div className="navigation" dir="ltr">
            <button
              aria-label={messages.previous}
              onClick={() => navigate(index - 1)}
              disabled={index === 0 || !slide}
            >
              ←
            </button>
            <span className="counter" aria-label={messages.slide}>
              {slide ? String(index + 1).padStart(2, '0') : '00'}{' '}
              <span>/ {String(slides.length).padStart(2, '0')}</span>
            </span>
            <button
              aria-label={messages.next}
              onClick={() => navigate(index + 1)}
              disabled={index >= slides.length - 1}
            >
              →
            </button>
          </div>
          <button ref={overviewButton} onClick={openOverview}>
            {messages.overview} <kbd>G</kbd>
          </button>
          <label className="picker">
            {messages.theme}
            <select
              aria-label={messages.theme}
              value={theme}
              onChange={(event) => {
                const next = event.target.value as Theme;
                setTheme(next);
                try {
                  localStorage.setItem('slide-theme', next);
                } catch {}
              }}
            >
              {themes.map((value) => (
                <option key={value} value={value}>
                  {value[0].toUpperCase() + value.slice(1)}
                </option>
              ))}
            </select>
          </label>
          {localization.enabled && localization.locales.length >= 2 && (
            <label className="picker">
              {messages.language}
              <select
                aria-label={messages.language}
                value={locale.code}
                onChange={(event) => {
                  const next = new URL(window.location.href);
                  next.searchParams.set('lang', event.target.value);
                  window.history.pushState(null, '', next);
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }}
              >
                {localization.locales.map((item) => (
                  <option key={item.code} value={item.code}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>
          )}
          <span className="control-spacer" />
          <button aria-expanded={help} onClick={() => setHelp(!help)}>
            {messages.shortcuts}
          </button>
          <button onClick={() => void toggleFullscreen()}>
            {fullscreen ? messages.exitFullscreen : messages.fullscreen}
          </button>
          <progress
            aria-label="Presentation progress"
            value={slide ? index + 1 : 0}
            max={Math.max(1, slides.length)}
          />
        </footer>
        {help && (
          <aside className="shortcut-help" aria-label={messages.shortcuts}>
            {messages.help}
          </aside>
        )}
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          {slide
            ? `${messages.slide} ${index + 1} / ${slides.length}: ${title(slide.id, slide.title)}`
            : messages.empty}
        </div>
        {status && (
          <div role="status" className="status">
            {status}
          </div>
        )}
        <dialog
          ref={dialog}
          className="overview"
          aria-labelledby="overview-title"
          onClose={() => trigger.current?.focus()}
        >
          <div className="overview-heading">
            <h2 id="overview-title">
              {messages.slides} <span>{slides.length}</span>
            </h2>
            <button onClick={closeOverview}>
              {messages.close} <kbd>Esc</kbd>
            </button>
          </div>
          <div className="overview-grid">
            {slides.map((item, position) => (
              <button
                key={item.id}
                ref={position === index ? currentCard : undefined}
                className="overview-card"
                aria-current={position === index ? 'step' : undefined}
                onClick={() => {
                  closeOverview();
                  navigate(position);
                }}
              >
                {item.preview && (
                  <Image src={item.preview} alt="" width={320} height={180} />
                )}
                <span className="overview-number">
                  {String(position + 1).padStart(2, '0')}
                </span>
                <span>{title(item.id, item.title)}</span>
                {position === index && (
                  <span className="current-dot" aria-hidden="true" />
                )}
              </button>
            ))}
          </div>
        </dialog>
      </div>
    </LocaleContext>
  );
}
