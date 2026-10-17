'use client';
import { createContext, useContext, type ComponentType } from 'react';
export const english = {
  previous: 'Previous',
  next: 'Next',
  overview: 'Overview',
  close: 'Close',
  theme: 'Theme',
  language: 'Language',
  fullscreen: 'Fullscreen',
  exitFullscreen: 'Exit fullscreen',
  fullscreenUnavailable:
    'Fullscreen is unavailable. Use your browser’s presentation controls.',
  shortcuts: 'Shortcuts',
  slides: 'Slides',
  slide: 'Slide',
  empty: 'Add your first slide to the registry.',
  help: '← → / Page Up / Page Down · Space / Shift+Space · Home / End · G overview · F fullscreen. Shortcuts pause inside interactive content.',
};
export type Messages = typeof english;
export type LocaleDefinition = {
  code: string;
  label: string;
  direction: 'ltr' | 'rtl';
  messages?: Partial<Messages>;
  titles?: Record<string, string>;
  content?: Record<string, string>;
  components?: Record<string, ComponentType>;
};
export const LocaleContext = createContext<LocaleDefinition>({
  code: 'en',
  label: 'English',
  direction: 'ltr',
});
export const useLocale = () => useContext(LocaleContext);
export function resolveLocale(
  code: string | null,
  locales: readonly LocaleDefinition[],
  defaultCode: string,
): LocaleDefinition {
  return (
    locales.find((locale) => locale.code === code) ??
    locales.find((locale) => locale.code === defaultCode) ?? {
      code: defaultCode,
      label: defaultCode,
      direction: 'ltr',
    }
  );
}
