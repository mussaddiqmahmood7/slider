# Build something you can explain

A student handout for **Web Development in the AI Era**, COMSATS Sahiwal. Reviewed 17 October 2026. This is a menu, not a completion checklist. Start with the first path; choose deeper resources only when your project needs them. Free docs and local tooling are enough to begin. Save useful pages for intermittent internet; a paid AI plan is optional.

## A spec you can build and review

**Problem:** students need to reserve a place at a campus event. Start with one stack and a small workflow, then add complexity only when needed.

- **Behavior:** show event capacity; reserve one place; confirm or cancel the reservation.
- **Rules:** prevent duplicate booking; never exceed capacity; only the owner can cancel.
- **Failure cases:** full event, failed request, invalid data, another user’s reservation.
- **Acceptance:** test the successful booking and each forbidden case; check keyboard use and readable errors.
- **Delivery:** a working demo, documented setup, small reviewed changes and an explanation of design choices.

For a static first version, simulate data locally and label that limitation. Do not pretend a browser-only ownership check secures a real multi-user service. Add a server/database only when implementing real shared bookings.

Ask AI: “Read this spec and existing code. List ambiguities before coding. Propose a small plan. Implement one change, add relevant tests, explain the diff.” Review the plan and tests as carefully as the code. Predict behavior, try it, inspect failures, then make a change without the full answer. [GitHub Spec Kit](https://github.com/github/spec-kit) is an optional documented workflow to explore after you understand the basic process.

## Turn the project into a first-job packet

1. **One-minute demo:** show the complete workflow, one failure and what you personally changed.
2. **Readable repository:** setup instructions, meaningful commits, tests, one tradeoff and known limitations. State how AI helped and how you verified it.
3. **Practice explaining:** trace a request, fix an introduced bug, explain a permission boundary, change one requirement.
4. **Get review:** ask a peer/alumnus for specific feedback; improve the work. Contribute one small useful fix to a project you understand.
5. **Apply deliberately:** select relevant junior roles/internships, tailor a short message with the demo, track responses and improve the gaps. Ask about supervision, review and actual contract terms.

For remote work, add clear written progress and handoff examples. For a first freelance client, agree a small scope, acceptance, milestones, payment and handover. For a product, interview potential users before building and test willingness to pay. None of these routes guarantees hiring or income on a fixed schedule.

## Check pay without importing a fantasy

As inspected on 17 October 2026: [Indeed’s Pakistan junior frontend estimate](https://pk.indeed.com/career/junior-front-end-developer/salaries) is PKR 47,282/month average base, just 21 salaries, updated July 8. A [Canadian fintech’s Pakistan remote advert](https://www.mustakbil.com/jobs/job/1434430) lists PKR 80–180k/month for a role with two years’ listed experience and Vancouver overlap. They are limited examples, not a national salary ladder or guaranteed graduate offers.

The [US BLS web-developer median](https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm) is $92,650/year for May 2025, all experience levels and work arrangements, not an on-site-only rate or Pakistan remote wage. [GitLab](https://handbook.gitlab.com/handbook/total-rewards/compensation/) uses local market pay; [Automattic’s experienced-engineer advert](https://automattic.com/work-with-us/job/experienced-software-engineer/) publishes a global USD 70–170k range regardless of location. Neither policy describes every remote employer. Check currency, period, benefits, tax, contract status, hours, equipment, leave and payment terms. No universal on-site/remote discount or future raise is established. See the [research ledger](research.md) for exact scope.

## Begin here

1. **Run and change a page.** Follow [MDN Learn](https://developer.mozilla.org/en-US/docs/Learn_web_development). Create a campus-club information page with real headings, links and a labeled form. Explain what the browser renders.
2. **Make it usable.** Choose the relevant HTML/CSS/JavaScript sections of the [MDN Curriculum](https://developer.mozilla.org/en-US/curriculum/). Make the page work on a phone and with only a keyboard. Explain one layout bug you fixed.
3. **Add one behavior.** Filter club events using JavaScript, including loading/empty/error states if you fetch data. Predict the result before running it. Record the change in Git. Ask a friend to try it.
4. **Then learn a framework.** Work through [Thinking in React](https://react.dev/learn/thinking-in-react). Rebuild the filter as components. Explain the minimum state, where it lives and how the data moves. Add TypeScript when comfortable with JavaScript.
5. **Present your understanding.** Use the [starter on main](https://github.com/mussaddiqmahmood7/slider/tree/main). Show the requirement, one tradeoff, a bug and its fix. You should be able to change the feature without copying the original answer.

No fixed weeks-to-job promise. Repeat these outcomes at a pace that fits your available time. Feedback, study, projects and rest all count.

## A practical project

Build an accessible **campus-club website**: event list, topic filter, clear event details, responsive layout, and useful empty/error messages. Start with local data. Add a backend only when a real requirement needs shared persistent data. Do not collect classmates' private information for a practice demo.

Evidence of progress: trace the filter's data flow; fix a deliberately introduced bug; extend an unfamiliar component; justify one behavioral test; explain authentication versus authorization using an illustrative record-access example. Write a short README and inspect your Git diff. Polish alone is not evidence of independent understanding.

## Use AI as a tutor and reviewer

Understand → attempt/predict → ask a hint → implement a small change → inspect/run/test → explain without the answer → change the requirement.

> Give me one hint and a question that checks my understanding. Do not write the complete solution. I will explain my prediction first.

Ask for small diffs, edge cases and explanations. Check against official docs, actual behavior and human feedback. Occasionally complete a small transfer task without AI. Follow instructor rules for assessed work. Avoid pasting secrets/private data into tools. AI explanations are claims to verify.

**Internalize:** semantic HTML, CSS layout, JavaScript state/async/errors, HTTP, data relationships, authority boundaries, debugging and diffs. **Look up:** syntax, options and API signatures. **Learn later when needed:** another framework, advanced infrastructure, RAG/MCP/agents or a specialized database. You do not need those to begin.

## Learning milestones

| Stage (overlapping, repeatable) | What to practice                                                                                        | Show progress                                 | Appropriate AI role                              |
| ------------------------------- | ------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ------------------------------------------------ |
| Orientation                     | Files, editor, browser, terminal, docs                                                                  | Run and change a local page                   | Explain terms/errors                             |
| Foundations                     | HTML, forms, CSS, accessibility, JavaScript, HTTP                                                       | Build a responsive interaction and explain it | Hints and practice feedback                      |
| One framework                   | Components, state/data flow, routes, client/server boundaries, types                                    | Modify an unfamiliar feature                  | Compare approaches; propose a small diff         |
| System literacy                 | Requests, SQL/data relationships, authentication/authorization, validation, secrets, errors, deployment | Trace a request and who may access data       | Suggest alternatives and edge cases; verify them |
| Engineering practice            | DevTools, Git, tests, performance, reviews, docs, communication                                         | Diagnose a bug; justify a test/tradeoff       | Critique or assist with bounded work             |

Frontend and backend specialization remain valid. Learn adjacent concepts progressively; every beginner need not implement the whole backend first.

## Official learning library

| Resource / provider                                                                               | When to use it                                            | Suggested exercise / connection to the talk                                                                                 |
| ------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| [MDN Curriculum](https://developer.mozilla.org/en-US/curriculum/) / Mozilla                       | Beginner skill map                                        | Choose one weak foundation; build a small example instead of collecting tool names.                                         |
| [MDN Learn](https://developer.mozilla.org/en-US/docs/Learn_web_development) / Mozilla             | Beginner, first practical modules                         | Build the club page; explain the DOM and event behavior.                                                                    |
| [web.dev Learn](https://web.dev/learn) / Google                                                   | Beginner through intermediate; select a module            | Improve forms, responsive CSS or performance in your actual page.                                                           |
| [WAI Tutorials](https://www.w3.org/WAI/tutorials/) / W3C                                          | Any stage; basic HTML helps                               | Audit labels, image alternatives and page structure with a keyboard.                                                        |
| [Thinking in React](https://react.dev/learn/thinking-in-react) / React team                       | After JavaScript basics                                   | Split the filter into components and justify the minimum state.                                                             |
| [Next.js Learn](https://nextjs.org/learn) / Vercel                                                | After React                                               | Learn routing/client-server boundaries. Some course projects need a server/database; this slide starter exports statically. |
| [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) / TypeScript team  | After JavaScript                                          | Type the event model; use narrowing; explain why runtime input still needs validation.                                      |
| [Pro Git](https://git-scm.com/book/en/v2) / official Git book                                     | Early and throughout                                      | Commit one change; inspect the diff; make/reconcile a branch.                                                               |
| [Chrome DevTools](https://developer.chrome.com/docs/devtools/) / Google                           | After a first page                                        | Find an introduced CSS bug, inspect a failed request and pause in a handler.                                                |
| [PostgreSQL tutorial](https://www.postgresql.org/docs/current/tutorial.html) / PostgreSQL project | Later system/data study                                   | Model clubs/events, query a relationship, explain a join. No database is added to this starter.                             |
| [OWASP Top 10:2025](https://top10.owasp.org/2025/) / OWASP                                        | After basic web concepts                                  | Explain an ownership failure and design a denied-access test. Risk awareness is not proof of security.                      |
| [Web Security Academy](https://portswigger.net/web-security) / PortSwigger                        | Optional security depth                                   | Use a beginner access-control lab inside its authorized training environment.                                               |
| [Engineering Practices: review](https://google.github.io/eng-practices/review/) / Google          | First collaborative project                               | Review a small diff for behavior, clarity, tests and tradeoffs.                                                             |
| [CS50 Web](https://cs50.harvard.edu/web/) / Harvard                                               | Optional depth; prior programming expected                | Choose after foundations/CS50-equivalent preparation; follow course assessment rules.                                       |
| [Full Stack Open](https://fullstackopen.com/en/) / University of Helsinki                         | Optional depth; good programming, web and database basics | Practice a complete app after foundations. Check the current prerequisites before starting.                                 |

## Read the original evidence

Choose one or two reports that answer your question; you do not need to read them all. The [research ledger](research.md) records exact stage values and access limits.

| Original publisher / resource                                                                                                                                                                                                | Why read it / what it cannot tell you                                                                                                                                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Stack Overflow 2026 AISelect](https://survey.stackoverflow.co/2026/ai/data/ai-select), [AIWorkNext](https://survey.stackoverflow.co/2026/ai/data/ai-work-next), [methods](https://survey.stackoverflow.co/2026/methodology) | Inspect different questions and bases. Community self-report is not all developers; usage, plans, trust and actual review differ. Data attribution: Stack Exchange Inc., ODbL 1.0.                                                                                          |
| [Veracode 2026 full report](https://view.ceros.com/veracode/genai-code-security-report2026)                                                                                                                                  | Read Summer benchmark methods and task scope before repeating a security percentage. Raw-model task failures are not production incidents.                                                                                                                                  |
| [Perry et al.](https://arxiv.org/html/2211.03622v3) and [Sandoval et al., USENIX](https://www.usenix.org/conference/usenixsecurity23/presentation/sandoval)                                                                  | Compare matched human studies with older tools and different tasks. Results do not justify a universal AI-versus-human incident ratio.                                                                                                                                      |
| [Shen & Tamkin, 2026 preprint](https://arxiv.org/html/2601.20245v2)                                                                                                                                                          | Distinguish immediate comprehension when learning Trio from long-term retention or all web students. Interaction patterns are exploratory.                                                                                                                                  |
| [METR 2026 update](https://metr.org/blog/2026-02-24-uplift-update/)                                                                                                                                                          | Learn why tool changes and selection complicate developer-productivity estimates. No universal speed multiplier.                                                                                                                                                            |
| [DORA 2025](https://dora.dev/research/2025/dora-report/)                                                                                                                                                                     | Organizational delivery practices and AI context; official entry includes report/errata. No numerical claim here from an unread full report.                                                                                                                                |
| [WEF Future of Jobs 2025](https://www.weforum.org/publications/the-future-of-jobs-report-2025/)                                                                                                                              | Employer expectations across economies/occupations; not realized web vacancies or a Pakistan graduate guarantee.                                                                                                                                                            |
| [BLS current web occupation outlook](https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm) and [2020 occupation definition](https://www.bls.gov/oes/2020/may/oes151257.htm)                        | US employment, wages and projections. Check occupation, geography, reference year and self-employment coverage.                                                                                                                                                             |
| [SlashData population estimates](https://www.slashdata.co/research/developer-population)                                                                                                                                     | Commercial global developer-population estimates with methodological explanation; population is not job openings.                                                                                                                                                           |
| [P@SHA publications](https://www.pasha.org.pk/publications/)                                                                                                                                                                 | Pakistan industry skills/compensation leads. Full current sources were inaccessible in this audit; inspect original questions before using numbers. Platform estimates and employer adverts now provide limited local context; they are not the unread P@SHA salary tables. |
| [SBP data catalogue](https://www.sbp.org.pk/economic-data)                                                                                                                                                                   | Original trade/service receipts; read sector and fiscal period. Exports do not count web vacancies. Report retrieval was blocked in this audit.                                                                                                                             |
| [PSEB reports](https://techdestination.com/rules-reports/)                                                                                                                                                                   | Original sector/program publications; review report dates and definitions. Promotional/sector activity is not a hiring census.                                                                                                                                              |
| [PBS labour statistics](https://www.pbs.gov.pk/labour-force-statistics/)                                                                                                                                                     | Original Pakistan labor-survey leads, classifications and broad platform-work context; detailed web employment was not established here.                                                                                                                                    |
| [Scott Hanselman podcast, January 2026](https://stackoverflow.blog/2026/01/13/vibe-code-anything-in-a-hanselminute/)                                                                                                         | Practitioner perspective on human judgment, separate from measured findings.                                                                                                                                                                                                |

For an offer, ask about the actual role, geography, currency, pay period, base/benefits, hours, scope and contract. US annual wages, PKR monthly pay, freelance revenue and business profit measure different things. None is a promise about you.
