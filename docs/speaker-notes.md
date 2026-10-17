# Speaker notes — Web Development in the AI Era

Rehearsal outline: approximately 30 minutes plus questions. Clear English on stage; optional Roman Urdu cues below. No speaker name, employer, role or event date was supplied; none is invented. Source cutoff: 17 October 2026. Full methods/limits: [research.md](research.md). Coverage: introduction 1–2; roles 2; technologies 3; AI 4–6; demand/history 7; income/growth 8; work paths 9; pros/cons 10; practice/skills 3 and 11; personal fit 12.

## 1 · The web is still being built (2 minutes)

**Takeaway:** Web development turns a user need into a usable web experience.

Start with “A student wants to find the right course.” Someone must decide the information, interface, behavior and reliability. A static site can do useful work; a database is not a defining requirement. Ask: “If AI writes code, why learn this?” Promise a practical answer based on the work, evidence and a way to try it. No personal biography needed. Cue: “Website sirf screen nahin; kisi ka masla hal karna hai.”

Transition: follow one request through that experience. Sources: speaker framing; MDN/BLS role scope, research ledger.

## 2 · One product, different responsibilities (3 minutes)

**Takeaway:** Specialize deeply and understand the neighboring boundaries.

Use the request trace button. Browser asks for a course; application checks the request and allowed data; database stores relationships; response becomes an interface. Explain frontend (semantics, interaction, accessible UI), backend (rules, authority, data), full-stack across both. Designers, testers, security, operations and product colleagues contribute too. The illustrated dynamic system is one example; this deck itself is static and needs no backend.

Prompt: “Where should we check who owns this record?” Cue: “Login se pata chalta hai aap kaun hain; permission se kya kar sakte hain.” Transition: which foundations let us reason about those boundaries? Sources: MDN, React, OWASP; schematic rather than a claim about every architecture.

## 3 · Foundations before a stack (3 minutes)

**Takeaway:** Understand structure, layout, behavior and data before collecting framework names.

Show a form label versus a clickable div, a broken flex layout, an async request that fails. HTML semantics, CSS sizing/responsiveness, JavaScript state/errors, HTTP and Git/DevTools explain the failures. Look up API details; internalize the concepts. React + TypeScript + Next.js is one path; Django, Laravel, .NET and Spring are valid alternatives. TypeScript does not validate network input at runtime. No popularity claim is a vacancy count.

Prompt: explain what happens after clicking Submit. Transition: tools raise the level of abstraction; the need to reason survives. Sources: MDN Curriculum, WAI, Thinking in React.

## 4 · Abstraction changes the work (2 minutes)

**Takeaway:** Higher-level tools change implementation work while system understanding remains useful.

The ladder is a conceptual grouping: machine instructions, languages, libraries, frameworks, AI assistance coexist. It is not a literal history of replacement. A first demo and independent competence are different outcomes. Requirements, tradeoffs, integration and debugging still matter. Attribute the human-judgment perspective to Scott Hanselman's January 2026 episode; it is practitioner opinion, not research consensus.

Cue: “Code mil jana aur usay samajh kar badal sakna alag cheezen hain.” Transition: what do developers actually report doing? Sources: original podcast page; speaker synthesis. No empirical learning-curve axis.

## 5 · Use is widespread; trust is conditional (3 minutes)

**Takeaway:** Ask exactly what a number measures.

Read the two usage bars as selections from one optional multi-select question; they do not add to 100. Non-use and planning are different. The trust inset comes from a different single-select question and base. Trust conditioned on easy verification is not a measured review frequency. Use cases include code, explanations, debugging, tests and docs; self-selection limits global generalization. AI productivity depends on context; METR's follow-up illustrates measurement problems, not a universal multiplier.

Ask: “Would you use generated code you cannot explain?” Transition: running code still needs authority checks. Sources: Stack Overflow AISelect/AITrust and methods; METR, ledger IDs AI-U/AI-T. No blind-acceptance inference.

## 6 · Code that runs still needs review (3 minutes)

**Takeaway:** Own the change before accepting it.

Show the illustrative missing ownership decision; use the review button to reveal the guard. A logged-in student changing an ID must not retrieve another student's record. This pseudocode is not a secure production recipe. Explain the small benchmark label: constrained raw-model generation tasks, not deployed breaches. Matched human studies have differing results with older tools/tasks (Perry; Lost at C); do not pool them or claim a universal human/AI ratio.

Review loop: understand requirement, generate a small diff, inspect, run relevant tests, check authority and revise. Mention parameterized queries, context-appropriate output handling, validation, authorization, secrets and dependency checks. Prompt: “What test would fail if ownership were missing?” Transition: apply the same care to career-market headlines. Sources: SEC, OWASP; human study limits in ledger.

## 7 · Read the market through evidence (3 minutes)

**Takeaway:** Demand evidence can inform a choice without promising a job.

Walk the requested eras: 2015 source could not be verified; 2020 used a combined occupation; 2025 uses broader total-job coverage. We cannot honestly calculate one clean growth rate across those panels. Latest inspected employment refers to 2025, not a measured 2026 count. Separately, the US projection is positive for the combined category; it is not Pakistan hiring or easy entry. Global developer-population estimates are another measure, not vacancies. Pakistan export/skills source leads are in the handout, with access gaps preserved.

Prompt: “What geography, occupation and date are behind a jobs headline?” Transition: apply those labels to salary too. Sources: HIST/NOW/FUT. No incompatible endpoint line or fabricated era totals.

## 8 · Income follows context and responsibility (2 minutes)

**Takeaway:** Compare a real role and package, not an attractive converted foreign headline.

The US median is annual, all experience levels, web developers specifically. It does not predict a Pakistani graduate's offer. Current P@SHA compensation detail was inaccessible; no PKR bands are invented. Ask local employers/alumni about comparable roles and read actual offers. Check base pay versus benefits/total compensation, currency, pay period, location, hours and scope. Freelance billings are not salary or profit.

Career progression reflects increasing independence and responsibility, not fixed years. Senior technical and management paths both exist. Transition: the way you work also changes risk and earnings. Sources: PAY; local-access limitation in ledger. Practical advice is synthesis, not a salary model.

## 9 · Choose a path and its tradeoffs (2 minutes)

**Takeaway:** Each work arrangement includes non-coding work.

Compare local employment's team/feedback, remote employment's written coordination/time zones, freelancing's client/scope/invoice duties, and a product business's distribution/support risk. Stability descriptions are qualitative tendencies, not promises. Contracts, cash buffers and available support matter. Ask: “Would you rather find clients or deepen a team role right now?”

Cue: “Dollar income ka headline asaan hai; client lana aur scope sambhalna bhi kaam hai.” Transition: opportunity comes with sustained work. Sources: speaker advice; no fabricated market shares or earnings.

## 10 · The upside is real; so is the work (2 minutes)

**Takeaway:** Try the work before buying the career story.

Creativity, useful products and several work paths are attractive. Learning, competition, debugging, screen time and delivery pressure are real. Discuss sustainable practice, breaks/ergonomics and communicating uncertainty. Ordinary local tools and free official documentation are enough to start; intermittent internet can be managed by saving docs and working locally. A paid AI subscription is optional. No tool removes the need for judgment.

Prompt: which part appeals to you, and which needs a practical trial? Transition: make that trial build independent ability. Sources: speaker synthesis, official learning resources.

## 11 · Use AI and make sure you learn (3 minutes)

**Takeaway:** Assess what you can transfer, explain and change without the answer.

Walk the learning loop. First state the requirement and predict behavior; try; ask for a hint; make a small change; inspect/test; explain; alter the requirement. Tutor prompt: “Give one hint and a question. Do not write the solution. I'll predict first.” Use occasional AI-free checks and follow course/instructor rules for assessment. Official docs, tests and human review verify explanations.

Original 2026 Trio-learning preprint found an immediate comprehension gap in experienced Python users. It does not prove long-term deskilling or prescribe this web curriculum. Its qualitative interaction clusters are not randomized prompting strategies. Suggested checks: trace a request, fix an introduced bug, extend unfamiliar code, justify a test, find missing authorization. Build depth in one specialty with progressive system literacy.

Transition: choose one small project and test personal fit. Sources: learning paper §§4–6; MDN; learning-loop recommendation is speaker synthesis.

## 12 · Is this for you? Try the work (2 minutes + Q&A)

**Takeaway:** A useful, explainable small project is a better next step than a guarantee.

Ask whether students enjoy building, debugging, learning and explaining decisions. Web development can be worth learning if the work fits their interests and constraints; evidence cannot promise individual employment. Challenge: build a campus-club information site with accessible event filtering and responsive layout; explain state and one failed test. Add a backend later only if a requirement needs it.

Point to the actual repository QR/readable link and `docs/student-resources.md`; use main for the starter. The source is open; this deck uses local assets and no paid AI service. Invite questions about foundations, career choices and AI practice. No separate thank-you/reference slide required.
