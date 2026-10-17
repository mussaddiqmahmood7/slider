# Evidence ledger — COMSATS Sahiwal

**Inspected/accessed 17 October 2026 (Asia/Karachi).** This ledger supports the revised **11-slide** presentation. Values are local in `src/content/evidence.ts`; no live research request is needed during the talk. Original reports, studies, documentation and employer-authored adverts are distinguished below. Speaker advice is not a measured finding.

## AI adoption and checking — slide 5

[Stack Overflow 2026 AI data](https://survey.stackoverflow.co/2026/ai/data) explicitly summarizes current work use as **83% use at least one AI tool**. The [AISelect table](https://survey.stackoverflow.co/2026/ai/data/ai-select) gives **3,003 / 17,464 = 17.2% selecting non-use**, rounded to **17%** on stage. The tool-type question permits multiple selections; the 83% comes from the publisher’s aggregate summary, not summing tool categories or assuming their independence. It concerns current use, not “using or planning.”

The original [AIWorkNext question/table](https://survey.stackoverflow.co/2026/ai/data/ai-work-next) asks what respondents usually do before using an AI answer; **multiple selections**, **n=13,162**:

| Action, paraphrased on stage        |  Count | Percent |
| ----------------------------------- | -----: | ------: |
| Run locally                         | 10,067 |   76.5% |
| Compare with codebase context       |  8,411 |   63.9% |
| Inspect tests/security implications |  6,977 |   53.0% |
| Use as-is                           |  1,265 |    9.6% |

These actions overlap. They are self-reports, not observed code-review behavior. “Use as-is” must not be renamed “blind acceptance,” and its complement is not a review rate. The full table has other responses, including non-use; this is a labeled subset, not an exhaustive partition. The former trust statistic is removed from the stage because trust and checking are different questions.

[Survey methods](https://survey.stackoverflow.co/2026/methodology): June 23–August 5, 2026 field period; 30,903 valid responses overall, community recruitment. Optional question bases differ. No inference to every developer worldwide. Attribution: Stack Exchange Inc., ODbL 1.0; see asset credits.

The [Sonar 2026 original survey](https://www.sonarsource.com/state-of-code-developer-survey-report.pdf), p10, was inspected as an alternative. Its “always check” item is an agreement scale: 48% completely agree, 27% somewhat agree, 11% neutral, 11% somewhat disagree, 3% completely disagree; n=1,149. It does **not** establish that 52% blindly accept code. Not displayed in the revised deck.

## Six annual employment snapshots — slide 7

No verified **annual worldwide or Pakistan web-developer job-creation series** for 2020–2025 was established. JOLTS openings, occupation employment, job adverts, developer population and export receipts are different measures. The slide answers the historical question with clearly labeled **US wage/salary employment estimates**, rather than inventing new-job totals.

| Reference date |                 Web developers | Interface designers | Displayed combined total | Inspected original                                                                                                   |
| -------------- | -----------------------------: | ------------------: | -----------------------: | -------------------------------------------------------------------------------------------------------------------- |
| May 2020       | Combined transitional category |            Included |                  156,220 | [SOC 15-1257](https://www.bls.gov/oes/2020/may/oes151257.htm)                                                        |
| May 2021       |                         84,820 |              82,380 |                  167,200 | [15-1254](https://www.bls.gov/oes/2021/may/oes151254.htm), [15-1255](https://www.bls.gov/oes/2021/may/oes151255.htm) |
| May 2022       |                         88,620 |              97,350 |                  185,970 | [15-1254](https://www.bls.gov/oes/2022/may/oes151254.htm), [15-1255](https://www.bls.gov/oes/2022/may/oes151255.htm) |
| May 2023       |                         85,350 |             111,060 |                  196,410 | [15-1254](https://www.bls.gov/oes/2023/may/oes151254.htm), [15-1255](https://www.bls.gov/oes/2023/may/oes151255.htm) |
| May 2024       |                         78,860 |             111,400 |                  190,260 | [BLS national release, table 1, PDF p9](https://www.bls.gov/news.release/archives/ocwage_04022025.pdf)               |
| May 2025       |                         70,190 |             113,330 |                  183,520 | [BLS national release, table 1, PDF p9](https://www.bls.gov/news.release/archives/ocwage_05152026.pdf)               |

Totals for 2021 onward are sums of the two published rounded estimates, not an independent BLS combined-series estimate. All bars start at zero, share a 200,000-job scale and show exact values; 2020 is hatched and marked as a break.

**Limits:** 2020 SOC 15-1257 combined data across old/new classifications. [BLS history](https://www.bls.gov/opub/hom/oews/history.htm) records full adoption of 2018 SOC and model-based MB3 estimation in 2021, followed by further changes. OEWS combines overlapping survey panels and [is not designed as a true time series](https://www.bls.gov/oes/oes_ques.htm). No annual hiring, net creation, growth rate, AI effect or causal story is inferred by subtraction. Self-employed workers are excluded. Many people doing web work have other occupational titles. These are annual snapshots, not a global web workforce census.

Separate forward-looking evidence: [BLS OOH, modified August 27, 2026](https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm) projects **13,600 openings/year on average in 2025–2035**, combined web developers and digital designers, including replacement needs; combined employment growth **5% over the decade**. A forecast is not observed annual creation or a graduate job guarantee. OOH total employment includes self-employment, so its 220,100 base must not be spliced into the OEWS wage/salary chart. A measured 2026 annual snapshot is not available here.

## Local and international compensation — slide 8

These sources are **different populations and measures**, not a matched comparison or national salary ladder. Current reports are inspected in 2026 but reference periods remain visible. No unsupported future salary or exchange-rate conversion is used.

- **Pakistan junior frontend anchor:** [Indeed’s original estimate](https://pk.indeed.com/career/junior-front-end-developer/salaries): **PKR 47,282/month average base**, **21 salaries**, updated **July 8, 2026**. Shown rounded to **47k**. Its FAQ describes postings in the past 36 months. Small convenience/platform sample, not a representative Pakistan pay scale, on-site-only sample, all-company range or guarantee. Do not infer a min/max from this mean.
- **Additional Pakistan context, not displayed:** [Indeed web-developer estimate](https://pk.indeed.com/career/web-developer/salaries), inspected current page: PKR 44,459/month, 547 salaries, updated September 24, 2026; broad title/all experience. Search snippets showed a different older value, so the inspected page takes precedence. Role-level sample differences prevent a fabricated progression ladder.
- **Employer-authored on-site example, notes only:** [Associated Business Solution, Software Engineer Intern, Rawalpindi](https://www.mustakbil.com/jobs/job/1436115), accessed October 17, 2026; page says posted seven days ago. Fresh graduate, on-site three-month internship, advert range PKR 25–30k; description says 30k. The visible text does not specify salary period, so no monthly conversion is asserted. One advertised opportunity, not verified paid earnings or an endorsement.
- **International remote example from Pakistan:** [Digital Cash Cowboy Inc, employer-authored advert on Mustakbil](https://www.mustakbil.com/jobs/job/1434430), posted **August 28, 2026**, full-stack Laravel engineer, listed experience **2 years**. Full-time option explicitly **PKR 80,000–180,000/month**, Monday–Friday Vancouver 9–5 overlap, subject to agreed terms. Separate project fees are negotiated; no guaranteed volume. One advertised range, not a remote-market average, actual accepted wage or fresher salary expectation.
- **US benchmark:** [BLS OOH](https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm): **$92,650/year median**, web developers specifically, **May 2025**, all experience levels. Wage measure excludes self-employed. It includes work arrangements; it is **not an on-site-only estimate**, an offer to a Pakistan-based remote worker, or a 2026 measured wage. US relocation/work authorization, taxes, benefits and costs matter.
- **Why remote pay varies:** [GitLab’s original compensation policy](https://handbook.gitlab.com/handbook/total-rewards/compensation/) specifies role/level/location and local-market cost-of-labor data. By contrast, [Automattic’s original experienced-software-engineer advert](https://automattic.com/work-with-us/job/experienced-software-engineer/) publishes **USD 70–170k**, explicitly global regardless of location, paid in local currency. The advert’s visible range is not used as a general remote salary estimate. This experienced role is in notes/handout, not a fresher headline. These two policies rebut a universal remote discount; they do not quantify an average on-site/remote gap.

A matched, representative global on-site-versus-remote salary differential was **not established**. No fixed percentage or synthetic global salary band is invented. Compare role, level, geography, hours, gross/net, base/benefits, currency, taxes, employment/contract status and payment terms. Forecasts cannot tell a specific student’s 2027 salary.

## Concepts, web waves and spec-driven work — slides 2–4 and 6

These are **speaker synthesis / practical guidance**, supported by original technical documentation, not measured productivity findings. [MDN Curriculum](https://developer.mozilla.org/en-US/curriculum/), [WAI](https://www.w3.org/WAI/tutorials/) and [React](https://react.dev/learn/thinking-in-react) support semantics, accessibility, state/data flow and foundational scope. [jQuery](https://jquery.com/), [Bootstrap versions](https://getbootstrap.com/docs/versions/), [Next.js](https://nextjs.org/docs) and [Remix documentation](https://remix.run/docs) support the tool examples and categories. React is a library; Bootstrap/Tailwind are UI/CSS tooling; framework and library usage overlap. The era labels indicate broad overlapping waves, not precise release dates or obsolete lower layers. No productivity multiplier or majority-adoption claim for spec-driven development is made.

[GitHub Spec Kit’s original workflow](https://github.com/github/spec-kit) defines specifications, technical planning, tasks, implementation and convergence. It is one example of working from intent through verification, not a required dependency or an independently established industry standard. Specifications themselves need review. [OWASP access control](https://top10.owasp.org/2025/A01_2025-Broken_Access_Control/) supports the owner/non-owner teaching example. The pseudocode is deliberately incomplete, not production security guidance.

Language switching can be aided by AI/docs, but API, ecosystem and runtime differences still require verification. Deep skill in one stack plus growing system literacy is the recommendation. Neither “HTML is worthless,” “everyone must master every layer,” nor “AI guarantees one-person productivity” is claimed. Domain experts and developers collaborate; profession is not a prohibition on learning technical skills.

## Original studies retained for speaker depth

- [Veracode Summer 2026 full report](https://view.ceros.com/veracode/genai-code-security-report2026): roughly 56% security pass rate in constrained raw-model tasks; 80 tasks, four languages and four weakness classes, no security guidance. The vendor benchmark is not a production incident rate. The small stat was removed from slide 6 to give the spec and acceptance cases room.
- [Perry et al.](https://arxiv.org/html/2211.03622v3): 47 participants, five security tasks, older Codex assistant; less secure output in that setting. [Sandoval et al., USENIX 2023](https://www.usenix.org/system/files/usenixsecurity23-sandoval.pdf): 58 students, C linked-list task, different assistant/margin and small measured impact. Different designs do not yield a universal pooled AI/human security ratio.
- [Shen & Tamkin, 2026 preprint v2](https://arxiv.org/html/2601.20245v2): 52 prior Python users learning Trio, randomized GPT-4o chat assistance versus no assistance, immediate AI-free comprehension quiz. Lower quiz performance; not long-term retention, all beginner web learners, or causal proof of a specific prompting curriculum. No numerical learning claim appears on stage.
- [METR February 24, 2026 update](https://metr.org/blog/2026-02-24-uplift-update/): tool/task selection and measurement complicate productivity estimates. No universal speed multiplier is used.
- [Scott Hanselman, January 2026 podcast](https://stackoverflow.blog/2026/01/13/vibe-code-anything-in-a-hanselminute/): practitioner perspective about judgment/understanding, not measured employment evidence. Not needed on the revised stage.

## Pakistan reports and wider-market limits

Original P@SHA [Salary Survey 2024–2025](https://www.pasha.org.pk/publications/salary-survey-2024-2025/) and [Skills Survey 2025](https://www.pasha.org.pk/wp-content/uploads/Skills-Survey-2025.pdf) were located but returned 404 in the earlier audit; full role-level tables were not inspected. No paywall bypass or figures copied from second-hand summaries. Local evidence added in this revision uses the explicitly limited sources above.

[SBP H1-FY26 chapter 5](https://www.sbp.org.pk/reports/half/arFY26/chapter5.pdf) retrieval returned 403 (archive 521). [SBP data catalogue](https://www.sbp.org.pk/economic-data), [PSEB reports](https://techdestination.com/rules-reports/) and [PBS labour statistics](https://www.pbs.gov.pk/labour-force-statistics/) remain source leads; export receipts and broad sector/platform-work categories are not web-job creation. [SlashData](https://www.slashdata.co/research/developer-population) estimates developer populations, not vacancies. No inferred Pakistan/global job count is displayed.

## Career recommendations — slides 9–11

Portfolio evidence, targeted applications, review, written communication, scoped client work and customer discovery are practical advice, **not a measured hiring formula**. The closing interview question/answer is an original audience interaction, not an employer quote. No fixed time to hire, income promise, mandatory subscription or claim that all students must become founders/full-stack experts. The student handout provides a small spec, a reviewable project packet and official learning sources.
