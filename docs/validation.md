# Validation record

17 October 2026, Node 24.22.0 / npm 11.19.1. This file records performed checks, not certification of arbitrary author slides.

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
