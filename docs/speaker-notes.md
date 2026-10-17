# Speaker notes — Web Development in the AI Era

11 slides, approximately 28–32 minutes plus questions. Source cutoff: **17 October 2026**. No speaker identity or event date is invented. The thesis is a recommendation, not a prediction that programming disappears: **learn concepts deeply, use AI deliberately, and own the system you ship**. Language/framework details are easier to look up or translate; runtime behavior, integration, security and design still need understanding.

Coverage: introduction 1; frontend/backend/full-stack and system responsibility 2; technologies and required skills 3; AI and changing practice 4–6; demand/history 7; income/growth 8 and 10; employment/remote/freelance/business 9–10; pros/cons and personal fit 9–11. Learning-with-AI guidance is integrated into 3, 6 and 9 instead of a separate slide. Methods and source links: [research.md](research.md).

## 1 · From code to outcomes — 2 minutes

Web development turns a need into a working web experience. “Find my course” needs the right information, interface and behavior. The screen is only the visible part. AI can help generate it; a developer must decide whether the experience solves the problem and remains reliable.

Opening question: “If AI can write the code, what should you spend your time learning?” Promise a practical answer, including the limits of the market evidence. Optional cue: “Code likhna asaan ho raha hai. Sahi cheez banana aur uski zimmedari lena ab bhi kaam hai.” Transition: follow the whole feature.

## 2 · One product, broader ownership — 3 minutes

Use the request-trace button. Frontend handles meaning, layout and interaction; the application handles rules, validation and permissions; the database persists relationships. Full-stack spans frontend and backend. A static website can be useful without any backend; the diagram shows a dynamic example, not a required architecture.

AI can help one person reach across more of this workflow. Teach product thinking, data modeling, system boundaries, debugging and delivery alongside a specialty. This is not a requirement to become an expert in every discipline or replace a team. Designers, domain experts, security and operations still matter. Start with one stack and broaden through actual features.

Ask: “Who is allowed to see this data, and where is that enforced?” Transition: these concepts travel across tools. Cue: “Frontend ya backend se shuru karein, lekin request ka poora safar samjhein.”

## 3 · Concepts before syntax — 3 minutes

Answer the HTML question directly: yes, enough HTML to recognize structure, semantics, labels and native controls is useful. Do not spend months memorizing tags before making anything. Likewise learn CSS layout/responsiveness and JavaScript state, async behavior and errors through real work. HTTP, data models, authorization, Git, tests and deployment let you judge a system.

A JavaScript developer can use AI and docs to start a Python task, but should verify library APIs, dependency management, types, async/runtime behavior and framework conventions. Transfer is easier when the underlying concepts are solid; the languages are not interchangeable in every detail. React/TypeScript/Next is one possible path, not a mandatory career identity.

Learning with AI: first predict behavior, ask for an explanation or a small change, inspect the diff, run it, then explain or alter it independently. Consult official docs when an explanation is uncertain. Follow instructor rules for assessed work. A completed demo is not proof of transferable understanding. The original Trio-learning study is limited evidence about immediate comprehension, not a universal ban on AI; see research notes.

Transition: the web has repeatedly changed what we do by hand.

## 4 · Five overlapping web waves — 3 minutes

Read left to right: hand-authored pages → utility/plugin ecosystems → component/UI tooling → application frameworks → AI-assisted, spec-driven workflows. Examples are families of tools, not exact release dates or replacements. Bootstrap and Tailwind are CSS tooling, React is a UI library, and frameworks such as Next/Nuxt/Remix coordinate more application concerns. Frameworks still use libraries and generate HTML/CSS/JS. Small static pages can still be best served by plain web standards.

Libraries reuse common functions; UI tooling reuses composition and design patterns; frameworks package conventions; AI can generate changes from intent and context. Each shifts some effort upward, while adding integration and review decisions. No numerical productivity gain or “everyone now uses SDD” claim is made.

Define spec-driven work in plain language: **agree what should happen, decide how to build it, break it into changes, then verify those changes against the spec**. GitHub Spec Kit is one original documented example, not a required dependency or proof of universal adoption. AI may draft the spec too. A developer must challenge it: which data, who has access, what can fail, why this stack, how will we test?

Domain experts define needs and constraints; developers contribute technical judgment and accountable delivery. Do not say doctors/mechanics cannot learn development. The point is competence, not someone’s original profession. Transition: how common is AI, and what do developers actually check?

## 5 · Adoption and checking — 3 minutes

The publisher summarizes current work usage as **83% using at least one AI tool**. The non-use selection is 17.2%, shown as **17%** to match whole-number precision. This is a voluntary community survey question, n=17,464, not every developer worldwide. It measures current use, not plans.

The right-hand question has a separate base, n=13,162. People could choose several actions: **76.5% run locally; 63.9% compare with the codebase; 53% inspect tests/security; 9.6% use as-is**. These bars do not add to 100. “Use as-is” is a self-reported usual action, not observed blind acceptance. Do not subtract 9.6 from 100 and call the rest reviewers. Running code is not the same as security review.

Ask: “Which of these checks tells you whether another user can read private data?” Transition: write a rule that makes that question testable.

## 6 · Write the rules, then prove them — 3 minutes

Read the spec: only the owner can read the record. Define success and a forbidden case before asking AI to implement. Plan where permission belongs, ask for a small change, inspect the diff, run tests, then verify behavior. Specification, architecture, review and delivery are development skills.

Show the missing ownership check. A logged-in user changes the record ID; authentication alone cannot authorize the read. Reveal the illustrative guard. Ask the audience to propose two tests: the owner can read, another user cannot. Also consider missing records, unauthenticated users and server-side enforcement. Pseudocode omits many real implementation details and is not a secure production recipe.

Use AI as a collaborator: “Implement this rule in the existing authorization layer. Keep the diff small. Add tests for owner and non-owner. Explain assumptions.” Review generated specs and tests too; passing a generated test can simply confirm a shared wrong assumption. The Veracode benchmark and contrasting human studies remain in the source notes; they do not measure deployed breach rates.

Transition: career claims deserve the same attention to evidence.

## 7 · Demand without invented job totals — 3 minutes

Say the distinction first: **these are jobs held each year, not jobs created during that year**. No verified six-year worldwide or Pakistan web-job creation series was established. The chart gives six published US May estimates for the combined developer/interface-design scope. 2020 uses a transitional category and older method; later totals sum two categories. It is not a clean hiring time series. Do not compute annual creation/growth from it, attribute declines to AI, or claim that all web workers have these titles.

Separate from the snapshots, BLS forecasts **13,600 openings a year on average in 2025–35**, including replacements. The combined occupation has projected +5% employment over that decade; neither figure guarantees an entry-level job or describes Pakistan. The latest reference year is 2025 even though the report was read in 2026. The market contains opportunity and competition; the useful question for a fresher is what evidence makes them credible.

Transition: compare pay with its location, role and terms attached.

## 8 · Pay grounded in context — 3 minutes

Local anchor: Indeed’s junior frontend estimate is **PKR 47,282/month mean base**, displayed rounded to 47k, **21 salaries**, updated July 8, 2026. Its FAQ describes past-36-month postings. It is small, platform-specific, not a national representative scale, guaranteed graduate offer or measured on-site-only sample. A separate current Rawalpindi on-site internship advert lists PKR 25–30k (body says 30k; period unspecified); it is an example in research notes, not a pay benchmark on stage.

The Canadian fintech employer advert explicitly offers **PKR 80–180k/month** for full-time remote work from Pakistan, lists two years’ experience, and requires Vancouver overlap. It is one offer range, not an international remote average or a fresher expectation. The US **$92,650/year median**, May 2025, is all experience levels and work arrangements; it must not be called an on-site-only salary, a 2026 offer or converted into promised PKR earnings.

The requested global on-site-versus-remote discount cannot be supported as a universal percentage. Geography, role, experience, employer and contract confound that comparison. GitLab documents local-market pay. Automattic’s experienced-engineer advert instead publishes a global USD 70–170k band regardless of location; it is one experienced-role example, not the typical remote job or a matching comparison. The contrast in policies explains why “remote always pays less” is too broad.

Compare actual offers: gross/net, currency, monthly/annual, benefits, employment/contract status, tax, overlap hours, equipment, leave, payment reliability and work authorization/relocation costs. No unsupported 2027 salary forecast. Progression means stronger independent delivery, design judgment and helping others, not automatic annual raises.

## 9 · How a fresher becomes credible — 3 minutes

Use one small real workflow, such as campus event booking. Confirm a user’s need, choose a stack, write acceptance cases, deliver a usable version, get feedback and improve. Include failures, accessibility and an explicit data/permission model when needed. Keep the scope small; do not add services to look senior.

Show a live demo, concise README, meaningful commit history, one decision/tradeoff, and tests of behavior. Be honest about AI assistance and explain the changes you accepted or rejected. Practice tracing a request, fixing an introduced bug and changing a requirement without pasting a complete answer.

Apply while improving. Match the demo to a real junior role, write a short tailored application, and ask alumni/peers for an introduction or review. Track applications and feedback; practice interviews based on the gaps you see. No guaranteed deadline or magic application count. Ask who will mentor/review you in an internship; compare actual terms.

Transition: that same proof supports several ways of working.

## 10 · Choose the first door — 2–3 minutes

Local team: seek a junior/intern opportunity with review and collaboration. Remote team: show written progress, handoff and reliability, plus code. Freelance: solve one bounded client problem and agree scope, milestones, payment and handover before expanding. Product: talk to users, test willingness to pay, then build the smallest useful service; revenue is uncertain and not salary.

Progress from a defined task to a reliable feature, then more system/product responsibility. AI can widen your reach; it does not remove support, communication, distribution or financial risk. Specialization remains valuable. More ownership brings autonomy and creativity, and also debugging, learning, accountability and uncertainty. Keep scope and work sustainable; a paid AI plan is optional.

Ask: “Which door fits your constraints and the kind of work you enjoy?” This is practical advice, not a ranked labor-market prediction.

## 11 · AI could build this. Why hire you? — 2 minutes + Q&A

Pause on the question; let the room think or offer an answer. Use the button to reveal: **“I can decide what to build. And prove it works.”** This is a thesis and interview prompt, not a quote from an employer.

A developer connects user needs, specifications, architecture, code, tests and delivery. AI expands what you can attempt; your value is demonstrated through judgment and follow-through. You do not need to claim expert status in every discipline. Ask whether you enjoy understanding problems, investigating failures, learning and taking responsibility; use real project experience to judge fit.

The QR opens the **student handout on this presentation branch**, with a spec example, a first-job packet and official learning resources. The repository’s main branch remains the reusable starter. Invite questions about learning, work paths and responsible AI practice. End on the question and answer rather than another homework challenge.
