/** Verified stage metrics and reference records.
 * Every figure records its source publication, scope, and verification date (checked 17 Oct 2026).
 */
export const sources = {
  usage: {
    label: 'Stack Overflow 2026 · AI use',
    url: 'https://survey.stackoverflow.co/2026/ai/data',
    checkedDate: '2026-10-17',
  },
  trust: {
    label: 'Stack Overflow 2026 · trust',
    url: 'https://survey.stackoverflow.co/2026/ai/data/ai-work-next',
    checkedDate: '2026-10-17',
  },
  security: {
    label: 'Veracode 2026 · GenAI Security',
    url: 'https://www.veracode.com/news/llms-are-getting-smarter-but-not-safer-veracode-2026-genai-code-security-report-finds-ai-generated-code-security-has-stalled-at-56%25-pass-rate/',
    checkedDate: '2026-10-17',
  },
  indeed: {
    label: 'Indeed Hiring Lab · US postings',
    url: 'https://fred.stlouisfed.org/series/IHLIDXUSTPSOFTDEVE',
    checkedDate: '2026-10-17',
  },
  indeedSenior: {
    label: 'Indeed Hiring Lab · senior shift',
    url: 'https://www.hiringlab.org/',
    checkedDate: '2026-10-17',
  },
  outlook: {
    label: 'BLS · outlook / pay',
    url: 'https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm',
    checkedDate: '2026-10-17',
  },
  foundations: {
    label: 'MDN Curriculum',
    url: 'https://developer.mozilla.org/en-US/curriculum/',
    checkedDate: '2026-10-17',
  },
  specs: {
    label: 'GitHub Spec Kit · workflow',
    url: 'https://github.com/github/spec-kit',
    checkedDate: '2026-10-17',
  },
  payPolicy: {
    label: 'GitLab · pay policy',
    url: 'https://handbook.gitlab.com/handbook/total-rewards/compensation/',
    checkedDate: '2026-10-17',
  },
  pakExports: {
    label: 'SBP · Economic Survey FY26',
    url: 'https://www.finance.gov.pk/',
    checkedDate: '2026-10-17',
  },
} as const;

export type SourceId = keyof typeof sources;

export const evidence = {
  usage: {
    year: 2026,
    scope: 'Survey respondents; use at least one AI tool at work',
    usePercent: 83,
    nonUsePercent: 17,
    trustImportantPercent: 6.6,
  },
  review: {
    // Kept in speaker notes layer
    actions: [
      { label: 'Run it locally', percent: 76.5 },
      { label: 'Compare with the codebase', percent: 63.9 },
      { label: 'Inspect tests / security', percent: 53.0 },
      { label: 'Use the answer as-is (self-report)', percent: 9.6 },
    ],
  },
  security: {
    period: '2026',
    scope: 'Vendor benchmark tasks, not production incidents',
    riskyFlawPercent: 44,
    xssFailurePercent: 85,
    passRatePercent: 56,
  },
  postings: {
    scope:
      'US software-development postings index, Feb 2020 = 100 (not jobs created)',
    source: 'Indeed Hiring Lab',
    baselineYear: 2020,
    baselineValue: 100,
    seniorRisePercent: 71, // 71% of net rise May 2025 - May 2026 was senior roles
    riseFromLowPercent: 15, // up about 15% since Feb 2025 low (Indeed, Jul 2026)
    belowPrePandemicPercent: 24, // about 24% below Feb 2020 (Sep 2026)
    series: [
      { year: 2020, month: 'Feb', value: 100.0 },
      { year: 2021, month: 'Jan', value: 91.3 },
      { year: 2022, month: 'Jan', value: 213.0 },
      { year: 2023, month: 'Jan', value: 130.3 },
      { year: 2024, month: 'Jan', value: 72.6 },
      { year: 2025, month: 'Jan', value: 67.5 },
      { year: 2026, month: 'Sep', value: 76.1 },
    ],
  },
  blsOutlook: {
    period: '2025–2035',
    growthPercent: 5,
    annualOpenings: 13600,
    medianSalaryUsd: 92650,
  },
  exports: {
    period: 'Jul–Mar FY26',
    source: 'State Bank of Pakistan via Economic Survey 2025–26',
    totalIctUsd: '$3.38B',
    totalGrowthPercent: 19.7,
    freelanceUsd: '$856.3M',
    freelanceGrowthPercent: 51,
  },
} as const;
