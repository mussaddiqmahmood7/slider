import type { LocaleDefinition } from './lib/localization';
// To try local translations, import { exampleLocales } from '../examples/localization/locales'
// and set enabled: true, locales: exampleLocales. No translation files are required by default.
export const deckConfig = {
  title: 'Next Slide Starter',
  description: 'A small canvas for big ideas.',
  language: 'en',
  direction: 'ltr' as 'ltr' | 'rtl',
  localization: {
    enabled: false,
    defaultLocale: 'en',
    locales: [] as readonly LocaleDefinition[],
  },
};
