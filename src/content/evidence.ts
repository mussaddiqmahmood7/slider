/** Displayed values only. Methods, units and access limits: docs/research.md.
 * Stack Overflow excerpts: Stack Exchange Inc., ODbL 1.0 (see asset credits).
 */
export const sources = {
  usage: {
    label: 'SO 2026 · usage',
    url: 'https://survey.stackoverflow.co/2026/ai/data',
  },
  review: {
    label: 'SO 2026 · checks',
    url: 'https://survey.stackoverflow.co/2026/ai/data/ai-work-next',
  },
  security: {
    label: 'Veracode · Summer 2026',
    url: 'https://view.ceros.com/veracode/genai-code-security-report2026',
  },
  annualJobs: {
    label: 'BLS · annual tables',
    url: 'https://www.bls.gov/oes/tables.htm',
  },
  outlook: {
    label: 'BLS · outlook / pay',
    url: 'https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm',
  },
  foundations: {
    label: 'MDN Curriculum',
    url: 'https://developer.mozilla.org/en-US/curriculum/',
  },
  specs: {
    label: 'GitHub Spec Kit · workflow',
    url: 'https://github.com/github/spec-kit',
  },
  localPay: {
    label: 'Indeed · junior frontend',
    url: 'https://pk.indeed.com/career/junior-front-end-developer/salaries',
  },
  remotePay: {
    label: 'Canadian fintech · PK remote advert',
    url: 'https://www.mustakbil.com/jobs/job/1434430',
  },
  payPolicy: {
    label: 'GitLab · pay policy',
    url: 'https://handbook.gitlab.com/handbook/total-rewards/compensation/',
  },
  globalPay: {
    label: 'Automattic · global remote band',
    url: 'https://automattic.com/work-with-us/job/experienced-software-engineer/',
  },
} as const;
export type SourceId = keyof typeof sources;
export const evidence = {
  usage: {
    year: 2026,
    respondents: 17464,
    anyRounded: 83,
    nonUseRounded: 17,
    nonUseCount: 3003,
  },
  review: {
    respondents: 13162,
    actions: [
      { label: 'Run it locally', percent: 76.5, count: 10067 },
      { label: 'Compare with the codebase', percent: 63.9, count: 8411 },
      { label: 'Inspect tests / security', percent: 53, count: 6977 },
      { label: 'Use the answer as-is', percent: 9.6, count: 1265 },
    ],
  },
  security: {
    period: 'Summer 2026',
    passPercentRounded: 56,
    tasks: 80,
    languages: 4,
    weaknessClasses: 4,
  },
  // Six snapshots, not a job-creation series. 2020 transitional SOC/method differs.
  // 2021+ totals add published web-developer + interface-designer estimates.
  employment: [
    { year: 2020, jobs: 156220 },
    { year: 2021, jobs: 167200 },
    { year: 2022, jobs: 185970 },
    { year: 2023, jobs: 196410 },
    { year: 2024, jobs: 190260 },
    { year: 2025, jobs: 183520 },
  ],
  salary: {
    year: 2025,
    median: 92650,
    currency: 'USD',
    period: 'year',
    occupation: 'US web developers',
  },
  localSalary: {
    mean: 47282,
    reports: 21,
    updated: '2026-07-08',
    currency: 'PKR',
    period: 'month',
    occupation: 'Pakistan junior front end developer',
  },
} as const;
