/** Displayed values only. Scope, methods and access limits: docs/research.md.
 * Stack Overflow excerpts: Stack Exchange Inc., ODbL 1.0 (see asset credits).
 */
export const sources = {
  usage: {
    label: 'Stack Overflow 2026 · AISelect',
    url: 'https://survey.stackoverflow.co/2026/ai/data/ai-select',
  },
  trust: {
    label: 'Stack Overflow 2026 · AITrust',
    url: 'https://survey.stackoverflow.co/2026/ai/data/ai-trust',
  },
  security: {
    label: 'Veracode · Summer 2026 benchmark',
    url: 'https://view.ceros.com/veracode/genai-code-security-report2026',
  },
  history: {
    label: 'BLS · May 2020 OEWS',
    url: 'https://www.bls.gov/oes/2020/may/oes151257.htm',
  },
  outlook: {
    label: 'BLS · 2025–2035 outlook / May 2025 pay',
    url: 'https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm',
  },
  foundations: {
    label: 'MDN Curriculum',
    url: 'https://developer.mozilla.org/en-US/curriculum/',
  },
  access: {
    label: 'OWASP Top 10:2025 · Access control',
    url: 'https://top10.owasp.org/2025/A01_2025-Broken_Access_Control/',
  },
  learning: {
    label: 'Shen & Tamkin · 2026 preprint',
    url: 'https://arxiv.org/html/2601.20245v2',
  },
  perspective: {
    label: 'Scott Hanselman · practitioner perspective · Jan 2026',
    url: 'https://stackoverflow.blog/2026/01/13/vibe-code-anything-in-a-hanselminute/',
  },
} as const;
export type SourceId = keyof typeof sources;
export const evidence = {
  usage: {
    year: 2026,
    respondents: 17464,
    coding: { percent: 65.9, count: 11509 },
    nonUse: { percent: 17.2, count: 3003 },
  },
  trust: {
    year: 2026,
    respondents: 14304,
    conditional: { percent: 48.0, count: 6872 },
  },
  security: {
    period: 'Summer 2026',
    passPercentRounded: 56,
    tasks: 80,
    languages: 4,
    weaknessClasses: 4,
  },
  historical: {
    year: 2020,
    employment: 156220,
    soc: '15-1257',
    coverage: 'US wage/salary · developers + interface designers',
  },
  current: {
    year: 2025,
    employment: 220100,
    coverage: 'US total jobs · developers + digital designers',
  },
  forecast: {
    start: 2025,
    end: 2035,
    percent: 5,
    coverage: 'US · developers + digital designers',
  },
  salary: {
    year: 2025,
    median: 92650,
    currency: 'USD',
    period: 'year',
    occupation: 'US web developers',
  },
} as const;
