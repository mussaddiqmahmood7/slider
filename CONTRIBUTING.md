# Contributing

Use Node 24 LTS. Run `npm ci`, then `npm run dev`. Create components in `src/slides` and register them in `src/slides/index.ts`; keep presentation behavior in the small shell.

Before a pull request, run `npm run check`, `npm run build`, and `npm run test:e2e` (install Chromium with `npx playwright install chromium`). Inspect relevant layouts at 1920×1080, 1366×768, 4:3, and phone sizes, in every theme. Check keyboard use and reduced motion. Do not add runtime services or heavy dependencies for small visuals.

Husky/lint-staged runs source checks and formatting on staged files. Fix failed checks rather than bypassing the hook. Review `git diff --cached` before a coherent Conventional Commit, for example `fix: preserve focus after overview selection`.

Keep PRs focused. Describe the problem, resulting behavior, validation, and any remaining limits. Keep research/event assets off main; preserve third-party licenses and credit new assets. Do not commit build/test artifacts, secrets, or local planning material.
