/** Primary-source excerpts checked 17 October 2026. Methods and limits: docs/research.md.
 * Stack Overflow data: Stack Exchange Inc., ODbL 1.0. Figures are local, never fetched at runtime.
 */
export const sources = {
  foundations: {
    label: 'MDN · Web development curriculum',
    url: 'https://developer.mozilla.org/en-US/curriculum/',
    kind: 'Official documentation',
    detail:
      'Semantics, accessibility, CSS, JavaScript, version control and professional skills. Supports the learning scope, not a guaranteed hiring outcome.',
  },
  outlook: {
    label: 'BLS · Web developers and digital designers',
    url: 'https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm',
    kind: 'US occupational statistics / forecast',
    detail:
      'May 2025 web-developer median: USD 92,650/year, all experience levels and work arrangements. Combined developers/designers: 13,600 projected annual openings in 2025–35, including replacements. US evidence, not Pakistan vacancies.',
  },
  access: {
    label: 'OWASP · Broken access control',
    url: 'https://top10.owasp.org/2025/A01_2025-Broken_Access_Control/',
    kind: 'Technical risk guidance',
    detail:
      'Authorization must enforce the intended access boundary. The slide uses incomplete teaching pseudocode, not a production security recipe.',
  },
  reviewPractice: {
    label: 'Google · What to look for in a code review',
    url: 'https://google.github.io/eng-practices/review/reviewer/looking-for.html',
    kind: 'Company engineering practice',
    detail:
      'Review design, functionality, complexity, tests and documentation. Practical guidance from Google; not an experiment measuring hiring or productivity.',
  },
  specs: {
    label: 'GitHub · Spec-driven development with AI',
    url: 'https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/',
    kind: 'Company workflow / perspective · 2 Sep 2025',
    detail:
      'Spec Kit describes specification, planning, tasks and implementation. One documented workflow, not proof that all teams use it or that it eliminates review.',
  },
  dora: {
    label: 'Google Cloud / DORA · 2025 research',
    url: 'https://cloud.google.com/blog/products/ai-machine-learning/announcing-the-2025-dora-report',
    kind: 'Original research summary · 23 Sep 2025',
    detail:
      'Publisher summary of nearly 5,000 technology professionals and qualitative research: delivery practices and organizational context matter. Associations are not a universal causal productivity multiplier.',
  },
  learning: {
    label: 'Shen & Tamkin · How AI impacts skill formation',
    url: 'https://arxiv.org/html/2601.20245v2',
    kind: 'Randomized study · 2026 preprint',
    detail:
      '52 prior Python users learning Trio; immediate AI-free comprehension assessment. Does not establish long-term retention or the best curriculum for all web beginners. No numerical learning claim is made on stage.',
  },
  anthropic: {
    label: 'Anthropic · Coding skills study explained',
    url: 'https://www.anthropic.com/research/AI-assistance-coding-skills',
    kind: 'Original study explanation · 29 Jan 2026',
    detail:
      'Explains the same Shen/Tamkin experiment, not independent replication. Interaction patterns are exploratory; stronger mastery was associated with comprehension-seeking use.',
  },
  criticalThinking: {
    label: 'Lee et al. / Microsoft Research · Critical thinking',
    url: 'https://www.microsoft.com/en-us/research/wp-content/uploads/2025/01/lee_2025_ai_critical_thinking_survey.pdf',
    kind: 'CHI 2025 survey study',
    detail:
      '319 knowledge workers describing 936 tasks. Reports perceived cognitive effort and oversight; self-report, not proof of permanent skill loss or a coding-specific causal effect.',
  },
  jquery: {
    label: 'jQuery · Ten-year history',
    url: 'https://blog.jquery.com/2016/01/',
    kind: 'Original project history',
    detail:
      'jQuery began in 2006. The timeline shows overlapping waves, not dates when earlier approaches became obsolete.',
  },
  nextHistory: {
    label: 'Next.js · Project governance and history',
    url: 'https://nextjs.org/governance',
    kind: 'Official project history',
    detail:
      'Next.js was created in 2016. Frameworks still use HTML, CSS, JavaScript and libraries; plain web standards remain useful for appropriately scoped projects.',
  },
  usage: {
    label: 'Stack Overflow · 2026 AI usage',
    url: 'https://survey.stackoverflow.co/2026/ai/data',
    kind: 'Community survey · n = 17,464',
    detail:
      'Publisher reports 83% use at least one AI tool at work; non-use selection is 17.2%, rounded to 17%. Current use, not daily use or plans. Tool types are multi-select. Stack Exchange Inc., ODbL 1.0.',
  },
  trust: {
    label: 'Stack Overflow · 2026 trust question',
    url: 'https://survey.stackoverflow.co/2026/ai/data/ai-trust',
    kind: 'Single-select self-report · n = 14,304',
    detail:
      '6.6% selected broad trust including important work decisions. Another 48% trust output when easily verifiable. These responses do not measure blind acceptance or imply everyone else would never trust an important decision. Stack Exchange Inc., ODbL 1.0.',
  },
  checks: {
    label: 'Stack Overflow · What happens before using an AI answer',
    url: 'https://survey.stackoverflow.co/2026/ai/data/ai-work-next',
    kind: 'Multi-select self-report · n = 13,162',
    detail:
      '76.5% run locally, 63.9% compare with codebase context, 53% inspect tests/security, 9.6% use as-is. Actions overlap; do not subtract to derive a reviewer population. Stack Exchange Inc., ODbL 1.0.',
  },
  security: {
    label: 'Veracode · Summer 2026 full benchmark',
    url: 'https://view.ceros.com/veracode/genai-code-security-report2026',
    kind: 'Vendor benchmark · raw models',
    detail:
      'About 44% security failures overall; XSS security pass rate about 15% (85% failure in that subset). 80 tasks, four languages and four weakness classes, without security-specific prompting. Not production incidents or modern agent workflows with review.',
  },
  indeed: {
    label: 'Indeed via FRED · Software-development postings data',
    url: 'https://fred.stlouisfed.org/data/IHLIDXUSTPSOFTDEVE.txt',
    kind: 'US daily postings index · updated 15 Oct 2026',
    detail:
      'Seasonally adjusted, seven-day average, Feb 1 2020 = 100. Shown: Feb 1 2020, Jan 1 of 2021–2025, and Oct 9 2026. Rounded to one decimal. Snapshots, not annual averages, hires, jobs created or a global workforce count. Historical values can be revised.',
  },
  indeedSenior: {
    label: 'Indeed Hiring Lab · The senior-led rebound',
    url: 'https://hiringlab.indeed.com/2026/07/08/ai-and-job-postings-from-destruction-to-creation/',
    kind: 'Original US postings analysis · 8 Jul 2026',
    detail:
      'Senior titles account for 71% of the net increase between May 2025 and May 2026, not 71% of all vacancies. Nearly 15% rebound since late Feb 2025 in the report’s observation window. Does not prove AI caused the rebound.',
  },
  localPay: {
    label: 'Indeed · Pakistan junior frontend pay estimate',
    url: 'https://pk.indeed.com/career/junior-front-end-developer/salaries',
    kind: 'Platform estimate · updated 8 Jul 2026',
    detail:
      'Inspected snapshot: PKR 47,526/month mean base, 20 salaries; FAQ describes postings in the past 36 months. Small platform sample, not a representative national scale or an on-site-only estimate. Live estimates may change.',
  },
  remotePay: {
    label: 'Digital Cash Cowboy · Pakistan remote Laravel advert',
    url: 'https://www.mustakbil.com/jobs/job/1434430',
    kind: 'Employer-authored advert · 28 Aug 2026',
    detail:
      'Full-time offer range PKR 80,000–180,000/month; listed experience two years, Vancouver working hours. One employer’s advertised range, not a fresher salary or international remote average. Project fees are separate.',
  },
  payPolicy: {
    label: 'GitLab · Compensation policy',
    url: 'https://handbook.gitlab.com/handbook/total-rewards/compensation/',
    kind: 'Employer policy',
    detail:
      'Role, level and local labor market inform pay. A remote role does not automatically use US compensation. This is one company’s policy, not a measured market-wide discount.',
  },
  globalPay: {
    label: 'Automattic · Experienced engineer advert',
    url: 'https://automattic.com/work-with-us/job/experienced-software-engineer/',
    kind: 'Employer policy / experienced-role advert',
    detail:
      'Advert publishes a global USD 70,000–170,000 salary range regardless of location, paid in local currency. A contrasting employer policy, not a typical remote offer or a graduate expectation.',
  },
} as const;
export type SourceId = keyof typeof sources;
export const checkedDate = '17 October 2026';
export const evidence = {
  usage: { respondents: 17464, usePercent: 83, nonUsePercent: 17 },
  trust: { respondents: 14304, broadPercent: 6.6, conditionalPercent: 48 },
  review: { respondents: 13162, runLocally: 76.5, asIs: 9.6 },
  security: { riskyFlawPercent: 44, xssFailurePercent: 85 },
  postings: {
    seniorRisePercent: 71,
    series: [
      { year: 2020, date: '2020-02-01', month: 'Feb 1', value: 100 },
      { year: 2021, date: '2021-01-01', month: 'Jan 1', value: 91.3 },
      { year: 2022, date: '2022-01-01', month: 'Jan 1', value: 213 },
      { year: 2023, date: '2023-01-01', month: 'Jan 1', value: 130.3 },
      { year: 2024, date: '2024-01-01', month: 'Jan 1', value: 72.6 },
      { year: 2025, date: '2025-01-01', month: 'Jan 1', value: 67.5 },
      { year: 2026, date: '2026-10-09', month: 'Oct 9', value: 78.1 },
    ],
  },
  blsOutlook: {
    period: '2025–2035',
    annualOpenings: 13600,
    medianSalaryUsd: 92650,
    wageDate: 'May 2025',
  },
  localSalary: { mean: 47526, reports: 20, updated: '8 July 2026' },
  remoteSalary: { min: 80000, max: 180000, advertised: '28 August 2026' },
} as const;
