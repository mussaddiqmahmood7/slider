# Research ledger — COMSATS Sahiwal

Checked **17 October 2026**. This is the current ledger for the 11-slide deck. Source records, short scope notes and local values live in `src/content/evidence.ts` and are available from **Sources** on every slide. The footer identity stays constant. Research links are external; reading source summaries does not need internet.

## What changed after the evidence review

- Replaced “everyone”/“daily use” with the actual current-use measure.
- Corrected the trust-question URL; kept trust separate from observed review or blind acceptance.
- Removed unsupported claims about who can become competent at architecture, guaranteed learning speed, guaranteed mentorship, universal remote pay and zero data loss.
- Replaced unfinished salary cells with limited, identified examples. The US median has no experience-level assignment.
- Traced each jobs-index value to an exact observation date and updated the last point.
- Removed Pakistan export numbers from the stage because full original report retrieval remained blocked; no export receipts are treated as a job count.
- Preserved the author's booking example, identity, first-job actions and closing interaction.

## Evidence map

| Slides | Purpose                                                      | Primary basis                                                              | Interpretation                                                                                    |
| ------ | ------------------------------------------------------------ | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 1–2    | User outcomes, system boundaries and delivery responsibility | BLS role descriptions, Google/DORA, OWASP                                  | Teaching synthesis; not a claim that every site needs a backend or one person replaces a team     |
| 3      | Concepts, code reading and learning with AI                  | MDN, Shen/Tamkin original paper, Microsoft Research/CHI study              | Advice informed by bounded studies, not a guaranteed learning-speed formula                       |
| 4      | Overlapping abstraction waves and specifications             | Original jQuery/Next.js history; GitHub Spec Kit announcement              | Project history and company workflow, not a replacement chronology or universal SDD adoption      |
| 5      | Adoption, trust and checking                                 | Three separate Stack Overflow 2026 questions                               | Self-report, distinct populations and response formats                                            |
| 6      | Security review and acceptance criteria                      | Original Veracode report; OWASP; Google code-review guidance               | Benchmark result plus illustrative pseudocode; not a breach rate or production recipe             |
| 7      | Hiring context                                               | Indeed/FRED data and original Hiring Lab analysis; BLS outlook             | Postings, forecasts and realized hiring remain distinct                                           |
| 8      | Pay in context                                               | Indeed original estimate; employer advert; BLS; GitLab/Automattic policies | Different populations, not representative experience bands or a matched remote/on-site comparison |
| 9–11   | Make work inspectable; choose a route; explain decisions     | Google review practice, original learning paper, GitHub workflow           | Practical recommendations; no guaranteed hiring or income                                         |

## AI survey — slide 5

Original [AI overview](https://survey.stackoverflow.co/2026/ai/data), [AISelect](https://survey.stackoverflow.co/2026/ai/data/ai-select), [AITrust](https://survey.stackoverflow.co/2026/ai/data/ai-trust), [AIWorkNext](https://survey.stackoverflow.co/2026/ai/data/ai-work-next) and [methods](https://survey.stackoverflow.co/2026/methodology) were inspected.

| Measure                                        | Stage value                                     | Base and response format                                                    |
| ---------------------------------------------- | ----------------------------------------------- | --------------------------------------------------------------------------- |
| Current work use                               | 83% use at least one tool; 17% non-use, rounded | n=17,464; tool types multi-select; 83% is the publisher’s aggregate summary |
| Broad trust including important work decisions | 6.6%                                            | n=14,304; single-select                                                     |
| Run output locally / use as-is                 | 76.5% / 9.6%                                    | n=13,162; multi-select                                                      |

Usage is not daily frequency. Other trust responses include conditional verification; 6.6% does not imply everyone else would never trust an important decision. Checking actions overlap; their complements do not identify reviewers or blind acceptors. Voluntary community recruitment limits representativeness. Data attribution: **Stack Exchange Inc., ODbL 1.0**. Fielding June 23–August 5, 2026; 30,903 valid responses overall. Exact original tables remain the authority; no complete dataset is redistributed.

## Security benchmark — slide 6

[Veracode’s full Summer 2026 report](https://view.ceros.com/veracode/genai-code-security-report2026), especially methodology and key takeaways, supports approximately **44% security failure overall** and **85% failure within the XSS subset** (complement of a roughly 15% pass rate). Eighty fill-in-function tasks cover four languages and four CWE classes, evaluated by the vendor’s SAST, without security-specific prompting. Raw models are distinct from agents with project context, tools and human review. These are not deployed vulnerabilities or incident frequencies. The slide identifies the constrained setting.

The ownership guard illustrates a different access-control lesson using [OWASP](https://top10.owasp.org/2025/A01_2025-Broken_Access_Control/). It intentionally omits real authentication, missing-record handling and framework implementation. [Google’s code-review guidance](https://google.github.io/eng-practices/review/reviewer/looking-for.html) informs the review checklist, not the benchmark percentage.

## Jobs — slide 7

Original [FRED data table](https://fred.stlouisfed.org/data/IHLIDXUSTPSOFTDEVE.txt), series `IHLIDXUSTPSOFTDEVE`, inspected in full HTML including observations embedded after the first visible table segment. Source: Indeed; updated October 15, 2026. Exact dates behind the one-decimal labels:

| Date       | Index |
| ---------- | ----: |
| 2020-02-01 | 100.0 |
| 2021-01-01 |  91.3 |
| 2022-01-01 | 213.0 |
| 2023-01-01 | 130.3 |
| 2024-01-01 |  72.6 |
| 2025-01-01 |  67.5 |
| 2026-10-09 |  78.1 |

Seasonally adjusted daily snapshots using a seven-day average, **not annual averages, hires or net jobs created**. The last point is latest, not January. Historical values can change with revisions. No claim that the sampled 2022 point is the peak. No extrapolation to worldwide/Pakistan web jobs.

[Guillermo Gallacher, Indeed Hiring Lab, July 8, 2026](https://hiringlab.indeed.com/2026/07/08/ai-and-job-postings-from-destruction-to-creation/) separately reports **71% of the net increase** from May 2025 to May 2026 came from senior titles. This is not the share of all vacancies and does not prove AI caused the rebound. Its observation window differs from the chart. The BLS forecast and wage benchmark use their own occupation scope; see the source panel. No defensible annual global/Pakistan web-job creation series was established.

Only a small attributed excerpt is included. Check the original series notes and the [publisher’s data terms](https://github.com/hiring-lab/job_postings_tracker) before reusing more data; do not treat Indeed data as MIT code.

## Pay — slide 8

[Indeed’s original Pakistan junior-frontend page](https://pk.indeed.com/career/junior-front-end-developer/salaries) was rechecked: **PKR 47,526/month mean base**, **20 salaries**, updated July 8, 2026; FAQ describes past-36-month postings. The stage rounds to **48k**. This live estimate differs from an earlier inspected snapshot (47,282 / 21); the new inspection supersedes that value. Small platform sample; no national or on-site-only inference.

[Digital Cash Cowboy’s employer-authored advert](https://www.mustakbil.com/jobs/job/1434430), August 28, 2026, explicitly states **PKR 80–180k/month** for the full-time remote option, Vancouver overlap, two years’ listed experience. It is one advertised opportunity, not paid-earnings evidence or a remote-market band. Project fees are separate. It supplies concrete context without pretending a sample of 15–20 ads per level was completed.

[BLS’s current occupational report](https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm) gives **USD 92,650/year** for US web developers in May 2025, all levels and work arrangements. It excludes self-employed wage earners and must not be assigned to a junior/mid/senior row or called on-site-only. Combined developers/designers have **13,600 projected annual openings in 2025–35**, including replacement needs. These are forecasts, not measured creation or Pakistan hiring.

[GitLab’s compensation policy](https://handbook.gitlab.com/handbook/total-rewards/compensation/) uses local labor-market data. [Automattic’s experienced-engineer advert](https://automattic.com/work-with-us/job/experienced-software-engineer/) instead publishes a global USD 70–170k salary range regardless of location. Policies differ; no representative matched global on-site/remote discount, future wage or experience-band salary ladder was established. Compare contract, currency, period, hours, benefits and actual responsibilities.

[P@SHA’s 2024–25 salary-survey entry](https://www.pasha.org.pk/publications/salary-survey-2024-2025/) was found again; its official indexed entry describes paid registration/access. Full compensation tables remain unavailable. No second-hand bands or access bypass used.

## Company posts, original studies and the strength of their claims

The research deliberately separates documentation, a company’s experience, survey associations and controlled studies:

- [GitHub, Spec Kit announcement, September 2, 2025](https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/): specification, plan, tasks, implementation. A proposed company workflow, not independent evidence that specification work eliminates review or that every developer uses SDD. The current [project](https://github.com/github/spec-kit) remains an optional resource.
- [Google Cloud / DORA’s 2025 original research summary](https://cloud.google.com/blog/products/ai-machine-learning/announcing-the-2025-dora-report) and [capabilities model](https://cloud.google.com/blog/products/ai-machine-learning/introducing-doras-inaugural-ai-capabilities-model): nearly 5,000 professionals and qualitative research; small batches, user focus, context and delivery practices matter. Publisher interpretation and organizational associations do not establish a universal causal speed gain. No numeric productivity claim appears on stage.
- [Shen & Tamkin, original 2026 v2 preprint](https://arxiv.org/html/2601.20245v2), reviewed previously and cross-checked against [Anthropic’s original explanation](https://www.anthropic.com/research/AI-assistance-coding-skills): 52 prior Python users learning Trio with randomized chat assistance/no assistance, immediate AI-free comprehension quiz. Not long-term retention, an agentic IDE evaluation or proof of a specific beginner curriculum. Interaction-pattern clusters are observational. The company post and paper are the **same experiment**, not replication. No numerical learning effect is placed on stage.
- [Lee et al., CHI 2025 original paper, Microsoft Research](https://www.microsoft.com/en-us/research/wp-content/uploads/2025/01/lee_2025_ai_critical_thinking_survey.pdf): 319 knowledge workers, 936 task examples. Self-reported effort and oversight, not a controlled coding experiment or proof of permanent skill loss. Supports discussing verification, with those limits.
- [METR’s February 2026 update](https://metr.org/blog/2026-02-24-uplift-update/): tool/task selection and measurement complicate productivity estimates. Retained as a counterweight to broad productivity promises.
- Prior security studies [Perry et al.](https://arxiv.org/html/2211.03622v3) and [Sandoval et al., USENIX 2023](https://www.usenix.org/system/files/usenixsecurity23-sandoval.pdf) used different older tools/tasks and results. They do not produce a universal AI/human incident ratio.

Technical foundations follow [MDN](https://developer.mozilla.org/en-US/curriculum/), [WAI](https://www.w3.org/WAI/tutorials/) and [React](https://react.dev/learn/thinking-in-react). Era labels are intentionally overlapping; [jQuery’s history](https://blog.jquery.com/2016/01/) records its 2006 start and [Next.js history](https://nextjs.org/governance) its 2016 start. No exact popularity crossover dates or claim that plain HTML/CSS/JS is obsolete.

## Original Pakistan report access limits

The [2025–26 Economic Survey IT chapter](https://finance.gov.pk/survey/chapter_26/15_Information_Technology.pdf), [highlights](https://www.finance.gov.pk/survey/chapter_26/Highlights_of_the_PES_2026.pdf) and full report were located through official search indexing. Direct web and HTTP retrieval still returned timeout/403. Indexed export figures alone are not treated as a fully inspected report; they have been removed from the stage. Exports would not measure web vacancies even if fully retrieved. [P@SHA Skills 2025](https://www.pasha.org.pk/wp-content/uploads/Skills-Survey-2025.pdf) also remained inaccessible. Preserve these as source leads, not completed numerical audits.

## Recommendations and personal information

Portfolio, first-job actions and the closing exercise are speaker recommendations. They do not prove a hiring deadline, income, or universal need to become full-stack. Domain knowledge and software competence can be learned by people from different backgrounds. Mentorship and pay must be checked in the actual role. The author’s own committed speaker identity is retained; no employer, personal salary, work history or new anecdotal claim is invented.
