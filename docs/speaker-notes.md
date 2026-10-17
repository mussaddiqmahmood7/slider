# Speaker notes — Web Development in the AI Era

11 slides, about 25–30 minutes plus questions. Source cutoff: **17 October 2026**. Speaker identity supplied in the author’s commit: **Mussaddiq Mahmood · Software Engineer**. Thesis: use AI to expand what you can build, while developing the judgment to specify, inspect and maintain the result.

Every slide has the same footer identity and **Sources** button. Open it for exact links, evidence types and scope notes. Fuller methods: [research.md](research.md). The student handout contains the learning path. Company posts are attributed guidance, not independent proof of universal outcomes.

## 1 · If AI can build websites, why learn web development? — 2 minutes

**Takeaway:** A prototype starts the work; reliable delivery needs decisions.

Ask whether students have generated a page with AI. Follow the booking example: two students want the last seat; one student must not read another’s records; a payment can succeed while another step fails. The prototype is illustrative, not a measured 15-second task. Define web development as connecting a user need to a usable, maintained experience. AI can help throughout; responsibility is broader than typing.

Cue: “Code mil jana aur system ki zimmedari lena alag cheezen hain.” Transition: follow the whole feature. Sources: BLS role descriptions and Google/DORA’s original 2025 research summary; framing is speaker synthesis.

## 2 · A website is more than what you see — 2½ minutes

**Takeaway:** Understand the contracts between interface, application and data.

Use the booking-trace button. Frontend displays state and errors; application validates identity, permission and rules; database/transaction design helps enforce capacity and consistency. Explain frontend, backend and full-stack. A static page does not automatically need a backend; this diagram illustrates a shared booking service.

Do not promise zero data loss. Transactions, constraints, backups, retries and recovery each have assumptions. AI expands reach, while specialists and teammates remain valuable. Ask where the “only one last seat” rule belongs. Sources: BLS, OWASP; teaching diagram.

## 3 · Learn the concepts. Syntax will change. — 3 minutes

**Takeaway:** Learn enough of the output to evaluate it.

Yes, HTML is useful: semantics, native controls, labels and accessibility explain whether a generated interface works. Learn layout, state, async behavior, HTTP, data models, permissions, debugging, Git and tests through a real project. Look up syntax; do not confuse recognition with deep understanding.

When moving from JavaScript to another stack, verify APIs, runtime behavior and dependency conventions. No “days not years” promise. Use AI to clarify concepts, predict behavior, request a small change, inspect it, test it and explain it independently. Follow course rules for assessment.

Evidence depth: the original Trio-learning experiment measured immediate comprehension in 52 prior Python users; Microsoft/CHI surveyed perceived oversight effort across knowledge work. Neither establishes permanent skill loss or a guaranteed tutoring method. Sources in panel: MDN, original paper, Microsoft Research. Transition: see how tools change the level at which we work.

## 4 · Tools raise the abstraction. Judgment stays with you. — 2½ minutes

**Takeaway:** Reuse reduces manual work; design and verification remain.

The waves overlap: markup → utility/plugin ecosystem → UI composition → application frameworks → directing AI from specifications. The labels describe broad eras, not release dates or replacement. jQuery began in 2006 and Next.js in 2016. React is a UI library; Bootstrap/Tailwind are CSS/UI tooling. Frameworks still depend on libraries and web standards; a small static site may need only those standards.

Explain GitHub’s documented workflow: specify intent, plan the technical approach, break it into changes, implement and verify. The agent can draft a spec; a developer reviews it too. Domain experts explain their problem, while software competence is needed to turn requirements into a reliable system. People from other professions can develop that competence. Sources: project histories, GitHub announcement. No universal adoption or productivity claim.

## 5 · Most surveyed developers use AI. Trust has conditions. — 3 minutes

**Takeaway:** Usage, trust and checking answer different questions.

Read the two adoption cards together: 83% current use, 17% non-use, rounded, n=17,464. No “everyone” or “daily” claim. The third card is a different single-select trust question, n=14,304: 6.6% selected broad trust including important work decisions. Another response is trust conditional on easy verification, chosen by 48%. Do not infer the other 93.4% would never trust an important decision.

The bottom strip is a third multi-select question, n=13,162: 76.5% run locally and 9.6% use as-is. It measures self-reported usual actions, not observed blind acceptance. Running code is not complete review. Do not subtract these percentages or add overlapping responses. The sample is community-recruited, not all developers worldwide. Attribution and exact original questions are in Sources.

Ask what running locally fails to tell us about permission boundaries. Transition: specify a forbidden case.

## 6 · AI can write code. Who decides what’s correct? — 3 minutes

**Takeaway:** Define acceptable behavior, then inspect evidence.

State the rule: only the owner may read a record. Define owner success and non-owner denial. Ask for a small change in the existing authorization layer, inspect the diff and tests, and verify both cases. Reveal the illustrative guard. This is incomplete pseudocode, not a secure framework implementation; consider missing records and unauthenticated users too.

The Veracode banner refers to raw-model tasks without security guidance: roughly 44% security failures overall and 85% in the XSS subset. These are different denominators. The original report has 80 tasks/four languages/four vulnerability classes and vendor SAST. It is not deployed breaches, all generated code or evidence that a prompt solves security. Google’s review practice supports checking design, behavior and tests, not just compilation. Sources: original Veracode report, OWASP, Google review guidance, GitHub workflow.

## 7 · Hiring recovered unevenly. Make your ability visible. — 3 minutes

**Takeaway:** Read hiring context without inventing new-job counts.

The chart shows selected daily US software-posting index snapshots, with exact dates beneath the years. Jan 1 points are not annual averages; the 2026 point is October 9. A value of 100 is the February 1, 2020 baseline. Do not call the sampled 2022 point the peak or infer causes from the line of bars. Historical data can be revised.

The 71% inset is the share of the net increase attributed to senior titles in May 2025–May 2026, not all demand. This original Indeed report has a different observation window. Broader US software postings and BLS’s combined web occupations are also different populations. The separate openings forecast includes replacements. No annual global/Pakistan web-job creation series was established, and neither source guarantees junior entry. Practical response: show work someone can inspect. Sources: FRED original table, Indeed original analysis, BLS.

## 8 · What can web developers actually earn? — 3 minutes

**Takeaway:** Compare an actual role and terms, not a converted foreign headline.

The three cards intentionally have different labels. The Pakistan junior-frontend anchor is a small platform estimate, the foreign-remote figure is one employer’s advertised range for a role with two years listed experience, and the US benchmark covers all experience levels/work arrangements. This is not an experience ladder or matched remote/on-site comparison. Sources records supply sample, date, currency and period; never assign the US median to “mid-level.”

GitLab’s local-market policy and Automattic’s global band show policy variation, not a universal remote discount. Ask about gross/net, base/benefits, employment/contract, currency, taxes, hours, equipment, leave, payment and relocation/work authorization. No forecast of an individual’s future salary. Current P@SHA pay tables remain unavailable; no fabricated ranges. Career growth means increasing scope and reliability, not an automatic raise after a fixed number of years.

## 9 · No experience? Build proof. — 2½ minutes

**Takeaway:** Make a small complete workflow reviewable.

The booking example should have a real user, a documented rule, a success path, forbidden cases and understandable limits. Start small. Simulate shared data honestly if it is only a prototype; use server/database enforcement when implementing a real multi-user service. Show the demo, README, meaningful commits, one design tradeoff and relevant tests. Explain how you used AI and verified its changes.

Apply while improving, seek a peer/alumni review, tailor the application and practice tracing/fixing a bug. This advice is not a measured hiring formula or guarantee. Ask about review and support in a junior role. Sources: Google review practice and original learning paper. Transition: choose the next responsibility you can sustain.

## 10 · Four ways to build your career — 2½ minutes

**Takeaway:** Different paths include different non-coding work.

Local team: ask about mentorship and review; do not assume it exists. Remote team: demonstrate written updates and handoff; pay/support vary by employer. Freelance: agree scope, milestones, acceptance, payment and handover; client acquisition is work. Product: talk to users before building and test demand; support/distribution/revenue are your responsibilities too. Ownership may be shared; do not promise 100% equity.

Each card offers one concrete action, as practical advice. Grow from a task to a feature to wider system ownership; specialization and teamwork remain useful. Keep learning and scope sustainable. Sources: pay policies and Google engineering practice. Pakistan export receipts are removed because original report retrieval was blocked; exports would not establish junior hiring anyway.

## 11 · If AI can code, why should anyone hire you? — 2 minutes + Q&A

**Takeaway:** Explain the decisions and verification behind the demo.

Pause on the question and invite an answer. Reveal the response: “I decide what to build, and I prove it works.” This is the speaker’s thesis, not an employer quote or formal correctness proof. AI can assist with research, debugging and review; humans/teams remain accountable for accepting and operating the change.

The next review: write a spec, test one success and one forbidden case, explain a design decision. Do not require exactly three AI bugs; test the requirement rather than manufacturing a quota. The QR opens the handout on the presentation branch; main remains the reusable starter. Invite questions. Sources: GitHub process, Google review guidance, Anthropic’s explanation of the same original learning study.
