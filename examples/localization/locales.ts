import type { LocaleDefinition } from '../../src/lib/localization';
export const exampleLocales: readonly LocaleDefinition[] = [
  { code: 'en', label: 'English', direction: 'ltr' },
  {
    code: 'ur',
    label: 'اردو',
    direction: 'rtl',
    messages: {
      previous: 'پچھلی',
      next: 'اگلی',
      overview: 'تمام سلائیڈز',
      close: 'بند کریں',
      theme: 'رنگ',
      language: 'زبان',
      fullscreen: 'پوری سکرین',
      exitFullscreen: 'پوری سکرین سے نکلیں',
      fullscreenUnavailable: 'پوری سکرین دستیاب نہیں۔',
      shortcuts: 'کی بورڈ',
      slides: 'سلائیڈز',
      slide: 'سلائیڈ',
      empty: 'اپنی پہلی سلائیڈ شامل کریں۔',
      help: 'تیر والے بٹن سے اگلی یا پچھلی سلائیڈ کھولیں۔ G سے تمام سلائیڈز دیکھیں۔',
    },
    titles: { intro: 'اپنے خیالات کو جگہ دیں' },
    content: {
      headline: 'اپنے خیالات کو جگہ دیں۔',
      subtitle: 'عام ری ایکٹ کمپوننٹس سے اپنی پیشکش بنائیں۔',
    },
    // Other slide titles/content deliberately fall back to the original English.
  },
];
