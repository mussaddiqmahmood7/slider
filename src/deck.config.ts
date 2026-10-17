import type { LocaleDefinition } from './lib/localization';
// To try local translations, import { exampleLocales } from '../examples/localization/locales'
// and set enabled: true, locales: exampleLocales. No translation files are required by default.
export const deckConfig = {
  title: 'Web Development in the AI Era',
  description: 'COMSATS University Islamabad, Sahiwal Campus',
  language: 'en',
  direction: 'ltr' as 'ltr' | 'rtl',
  localization: {
    enabled: false,
    defaultLocale: 'en',
    locales: [] as readonly LocaleDefinition[],
  },
};
