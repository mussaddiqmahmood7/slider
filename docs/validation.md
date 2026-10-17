# Validation record

17 October 2026, Node 24.22.0 / npm 11.19.1. This file records performed checks, not certification of arbitrary author slides. Records are chronological; the final section is the current result. Earlier content, evidence and layout descriptions may have been superseded.

- Strict TypeScript, ESLint, Prettier and static export passed.
- Chromium suite covers history/hash recovery, malformed hashes, boundaries, rapid navigation, interactive keyboard handling, theme/state persistence, overview focus/selection/return, reduced motion, fullscreen and no external core requests.
- Temporary local empty, one-slide and 50-slide registries were built and exercised in Chromium; their source changes were restored. A 50-card overview contained focus and mounted one active slide.
- The opt-in English/Urdu example is tested separately with `TEST_LOCALIZATION=1`, after temporarily enabling it. Default mode deliberately skips that test and hides the language picker.
- Husky was initialized with `npm run prepare`; real commits run lint-staged. An ignored generated declaration initially failed the hook; the hook now uses ESLint's supported `--no-warn-ignored` flag.
- Screenshots are inspected at projector/laptop sizes and smaller layouts; `docs/starter.png` shows the actual export.

## Environment and limits

This WSL host has Ubuntu 20.04, which current Playwright does not officially support. The downloaded Ubuntu 22.04 x64 Chromium fallback launches successfully with `PLAYWRIGHT_HOST_PLATFORM_OVERRIDE=ubuntu22.04-x64`. Normal supported hosts/CI need no override. Physical projector hardware and assistive-technology user testing have not been performed.

`npm audit --omit=dev` reports zero vulnerabilities. The full audit reports four high entries in one development-only dependency chain: `@next/eslint-plugin-next → fast-glob → micromatch → braces`. [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) affects deeply nested untrusted glob patterns; no patched braces version is published at this check. This project uses fixed repository glob patterns, ships none of that chain to the browser, and does not accept user glob input. Keep watching the upstream fix; forced downgrades to old Next tooling were rejected. The vulnerable compression-based preview server was replaced with sirv.

No whole-deck print/export feature is included. Repository-subpath deployment is documented but unverified. See README for the static root-domain deployment contract.

## Reusable baseline result

The default suite passed 5 tests with 1 opt-in localization test deliberately skipped. The enabled Urdu example passed its separate test. Temporary 0/1/50-slide builds passed browser assertions. A 60-render matrix (3 slides × 4 themes × 5 viewports: 1920×1080, 1366×768, 1024×768, 1280×600 and 390×844) had no slide scroll overflow, missing assets or page errors. Contact sheets and representative full-size renders were reviewed; an Urdu opener decoration was moved using logical positioning after its first visual pass. Overview focus was verified through Tab wrapping and Escape/focus return.

A clean `npm ci`, check before building with no `.next` directory, and a fresh build passed. Exported JavaScript across all 7 chunks totals 595,836 bytes raw / 184,388 bytes gzip (including framework runtime); the export is about 952 KiB. No extra visual runtime library is shipped.

The owner supplied [the public repository](https://github.com/mussaddiqmahmood7/slider); main is the default branch. Main CI [39013967894](https://github.com/mussaddiqmahmood7/slider/actions/runs/39013967894) passed, and v0.1.0 was pushed before event development. A subsequent accessibility audit found low-contrast muted controls in Sand; main's token was darkened and the core suite was rechecked. Custom ARIA widgets also keep keyboard ownership. An axe-core audit supplements the behavior suite, without adding another test runner or runtime dependency. Template status still requires repository administration API access or the owner's GitHub setting.

## Initial COMSATS presentation result — historical

The initial event registry contained 12 slides, before the content revision below. The opening, system diagram and evidence composition were rendered at 1920×1080 and 1366×768 in all four themes before the remaining deck was filled. The visual direction uses editorial typography, ruled diagrams, a schematic ladder, labeled evidence, comparisons and a practice loop; all inherit semantic theme colors. `docs/deck-overview.jpg` shows the finished layout variety.

Final local checks:

- `npm run check` and the production static export passed on Node 24.22.0.
- The event suite passed **8 tests**; **1** starter-only opt-in localization test is deliberately skipped. The separate enabled English/Urdu example passed earlier on main, including URL/history, fallback and `lang`/`dir` behavior. No full Urdu translation of this keynote is claimed.
- Browser assertions verified every source footer and slide stays inside its stage at 1920×1080, 1366×768, 1024×768, 1280×600 and 390×844, in all four themes. Phone layouts scroll naturally. Third-party network routes were blocked during this check; the core deck needed none.
- A final **240-render matrix** (12 slides × 4 themes × 5 viewport sizes) had no slide overflow, missing assets or page errors. Contact sheets were reviewed in every theme; principal-size renders, representative full-size details, 4:3, short-screen and phone layouts were inspected. Earlier source-footer clipping was fixed, and composition heading selectors were corrected after visual review.
- An additional **axe-core 4.14.0** audit of all slides and the overview in each theme reported **zero automated WCAG A/AA violations**. It is a supplement to focus/keyboard and visual checks, not accessibility certification. Its utility was installed outside the project; no new test runner or browser runtime dependency was added.
- The system-request and authorization-review interactions were exercised; theme switching preserves state. Rapid keys, boundaries, history, direct/invalid hashes, focus containment/return, native fullscreen, modified keys, custom widgets and reduced motion were checked. Reduced motion leaves content visible.
- The locally generated QR was decoded back to the actual public repository URL. Fonts and QR are local; publication/report links are external only when opened.
- The event export is about **1008 KiB**. Seven JavaScript chunks total **614,470 raw bytes / 189,792 gzip bytes**, including framework code. There is no chart, carousel or animation runtime dependency.
- Main remains generic. The shared Sand contrast/custom-widget fix was committed and validated on main, then cherry-picked into the event branch. Latest main CI [39014887111](https://github.com/mussaddiqmahmood7/slider/actions/runs/39014887111) passed. Event CI is checked against the pushed branch through [GitHub Actions](https://github.com/mussaddiqmahmood7/slider/actions).

Limits: no physical projector, real screen-reader session, Safari/Firefox run, repository-subpath deployment or whole-deck printing was tested. The main-source Urdu example does not certify arbitrary RTL slides. P@SHA compensation detail, a comparable 2015 historical endpoint and certain original Pakistan reports were inaccessible; the later revision adds limited Indeed/employer compensation evidence. Speaker name/employer/date remain omitted. The documented development-only braces advisory is still unpatched upstream; production dependency audit is clean. GitHub template status remains an owner/API administration step; main is already the default branch and Issues are enabled.

## Revised 11-slide keynote — 17 October 2026 (historical)

The event registry now contains **11 slides**, centered on concepts, system ownership, overlapping web eras, spec-driven AI collaboration, checking behavior and practical entry into work. The standalone learning-loop slide is removed; its useful guidance is integrated into concepts, verification and portfolio advice. The closing has a keyboard-accessible interview-answer reveal and a QR linking directly to this branch’s handout. Main remains unchanged.

Performed after the revision:

- ESLint, Prettier, strict TypeScript and production static export passed. Real commit hooks ran successfully.
- **9 Chromium tests passed; 1 starter-only opt-in localization test was deliberately skipped.** The new test covers the closing reveal, keyboard activation, theme/state persistence and resource target. The layout test asserts exactly 11 overview entries. Existing navigation, history, overview focus, fullscreen, reduced motion, security-review and no-external-service checks passed.
- A fresh **220-render matrix** (11 slides × 4 themes × 5 viewports) reported no slide overflow, missing assets or page errors. Sizes: 1920×1080, 1366×768, 1024×768, 1280×600 and 390×844. The first pass found concepts-slide clipping; row spacing/line heights were corrected before the successful rerun. Obsolete composition styles were removed.
- Fresh contact sheets were inspected in Paper, Midnight, Blueprint and Sand. Full-size timeline, evidence, market, pay, workflow and closing renders were inspected. `docs/deck-overview.jpg` now shows the 11-slide version.
- **axe-core 4.14.0 reported zero automated WCAG A/AA violations** across the 11 slides and overview in all themes. This does not substitute for screen-reader user testing or physical projector rehearsal.
- All research values were checked against original question tables, BLS releases, platform estimates or employer-authored adverts. The six annual chart values are explicitly employment snapshots, not job creation. The 2022 total was corrected during source cross-checking before commit. Current Pakistan pay evidence and remote-policy limits are documented in `research.md`.
- Seven exported JavaScript chunks total **615,713 raw bytes / 190,598 gzip bytes**. No runtime service or additional library was added.

Remaining evidence limits: no verified six-year worldwide/Pakistan web-job creation series, representative matched global on-site/remote pay comparison, or individual future salary forecast. US employment is not Pakistan vacancies; platform estimates and single adverts are not representative salary bands. Existing host/browser, accessibility and deployment limits above still apply. The English-only keynote does not claim a complete Urdu translation.

## Evidence, constant footer and responsive correction — current result

Completed 17 October 2026, on top of the author’s `4ce0cb1` commit. The 11-slide order, supplied identity and core teaching interactions are retained. All changes are event-specific; shared shell, navigation, localization and theme code match `main`. No event content was ported into the starter.

- Rechecked original reports, survey question tables, company engineering posts and employer policies. The current evidence ledger documents what was read, exact links, dates, populations and inaccessible sources. Usage, trust, self-reported checking, raw-model security benchmarks, job-posting indices, forecasts and salary examples have distinct labels. Unsupported guarantees and incomplete salary placeholders are removed.
- Every slide now has the same COMSATS/talk identity and a **Sources** button. Its local native dialog includes exact primary references and scope notes. Initial focus, Tab/Shift+Tab containment, Escape/focus return and suspended slide shortcuts passed browser checks. Full reports remain external links; opening the local panel requires no external request.
- Phones, tablets and short windows use a readable flow at widths up to 1100px or heights up to 650px. Larger screens retain the 16:9 composition. Slide 5’s paragraph specificity and percentage wrapping were fixed; the security grid now allows content to shrink and wrap. Small chart-date labels were raised to 12px in reading mode. Horizontal overflow is not hidden to conceal layout failures.
- `npm run check` (ESLint, Prettier, strict TypeScript), `npm run build` and the Chromium suite passed: **11 tests passed, 1 opt-in localization test deliberately skipped**. Expanded coverage checks 12 sizes in all four themes, plus body/detail text sizes and every source dialog on seven phone/tablet sizes. Existing history, direct links, boundaries, theme/state, overview, fullscreen, custom-widget and reduced-motion checks passed. Core layout checks blocked external network requests.
- A fresh **572-render matrix** (11 slides × 4 themes × 13 sizes) reported no slide/page horizontal overflow, clipped stage content, missing assets or page errors. Viewports: 1920×1080, 1366×768, 1024×768, 1280×600, 390×844, 320×568, 768×1024, 820×1180, 834×1194, 1024×1366, 1180×820, 844×390 and 640×360. The security and closing revealed states were also checked for stage overflow in each combination.
- Fresh full-deck contact sheets were inspected in Paper, Midnight, Blueprint and Sand. Tablet/phone evidence and security renders were inspected at full size; the source dialogs were rendered in all four themes at desktop and phone sizes. `docs/deck-overview.jpg` is refreshed from the current production export.
- An additional **92 axe-core 4.14.0 audits** (11 slides + 11 source panels + overview, in each theme) reported **zero automated WCAG A/AA violations**. Axe remains a temporary external verification utility, not a project/runtime dependency.
- `npm audit --omit=dev` reported zero production vulnerabilities. No new dependency or runtime service was introduced. Research values and source summaries remain local.

Remaining limits: testing used Chromium on this WSL host with the documented platform override, not every browser/device or a physical projector. Automated audits do not replace real assistive-technology testing. The event is English-only; the starter’s opt-in translation example was not re-enabled because its shared implementation is unchanged. Full original Pakistan report/pay-survey access remains blocked; no numerical claims rely on unread tables. No representative matched on-site/remote salary comparison, annual worldwide/Pakistan job-creation series, or future salary forecast was established. Source estimates and historical data may be revised by publishers. Printing, repository-subpath deployment and owner template-status limits above remain unchanged.

## Career-week guidance additions — current result

The deck remains at **11 slides**. The booking trace, ownership guard, interview reveal, source dialogs, navigation, themes and overview remain available. Added the starter-technology row; Pakistan-led pay hierarchy and nearest-rounded stage labels; experience-based pros/cons and beginner first actions; yes/no career reflection, project invitation and 7-day challenge. The QR and resource link now use the public handout’s file URL. Exact salary evidence is retained; no new statistics were introduced. Speaker notes and slide-specific references match the visible claims.

- `npm run check` (ESLint, Prettier and TypeScript), `npm run build`, and `git diff --check` passed.
- The full Chromium suite passed **11 tests**, with **1 intentionally skipped** opt-in localization test. The closing regression also checks that native radio arrow keys keep the current slide and that the selected answer survives a theme change. The reading audit distinguishes captions/eyebrows from body text without lowering its body threshold.
- A fresh **572-render audit** (11 slides × 4 themes × 13 viewports), plus **104 revealed-state checks** for slides 6 and 11, reported no slide clipping, page horizontal overflow, missing assets or page errors. Viewports: 1920×1080, 1366×768, 1024×768, 1280×600, 390×844, 320×568, 768×1024, 820×1180, 834×1194, 1024×1366, 1180×820, 844×390 and 640×360.
- The updated slides’ stage body text measures at least **26px**, and stage labels at least **18px**, at 1920×1080. Layout refinement shortened copy and adjusted spacing instead of shrinking body type. All four updated compositions were visually inspected in all themes, with full-resolution screenshots at 1920×1080 and 1366×768 supplied with the review.
- The rendered QR decoded to the intended `/blob/presentation/comsats-sahiwal/docs/student-resources.md` URL at both requested resolutions in every theme. An unauthenticated request to the public file URL returned HTTP 200; the repository API confirmed it is public with `main` as the default branch.

These are local Chromium/WSL results. Physical projection and real-device QR scanning remain untested. The existing external research limitations above still apply.
