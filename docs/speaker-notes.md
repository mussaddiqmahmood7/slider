# Speaker notes — Web Development in the AI Era

11 slides, approximately 22–26 minutes plus questions. Source cutoff: **17 October 2026**.
Speaker: **Mussaddiq Mahmood** (Software Engineer & Builder) at COMSATS University Islamabad, Sahiwal Campus.

Thesis (spoken often, shown once): **AI makes code cheap. Understanding the problem, deciding the design, verifying the result, and owning the outcome is the job.**

---

## 1 · If AI can build websites, why learn web development? — 2 minutes

- **Student question:** Why spend four years studying Computer Science if AI writes code in seconds?
- **Takeaway:** Anyone can prompt a prototype. An engineer ships systems people can rely on.
- **Speaking outline:**
  - Ask the room: "Who here has generated a website or form with ChatGPT, Claude, or v0 in under 15 seconds?"
  - Acknowledge the feeling: it feels like magic, but ask who would stake their financial records or user database on it unchecked.
  - State the thesis: writing syntax was never the real job. The real job is turning a human problem into a reliable, secure system. Syntax is cheap; judgment is expensive.
  - Promise a clear, actionable path for freshers by the end of the talk.
- **Roman Urdu cue:** _"Code likhna asaan ho chuka hai. System ki zimmedari lena ab bhi human engineer ka kaam hai."_
- **Transition:** Look past the screen and follow the whole feature.
- **Avoid:** "You are already replaced" or "Programming is disappearing."

---

## 2 · A website is more than what you see — 2.5 minutes

- **Student question:** What does full-stack mean now?
- **Takeaway:** AI writes inside each box. You own the contracts between them.
- **Speaking outline:**
  - Click the request-trace button to demonstrate `POST /book-seat`.
  - Walk through the campus booking scenario: A student clicks "Book". What if the event is full? What if payment succeeds but the database drop cancels the reservation? What if two students click the last seat at the exact same millisecond?
  - Frontend handles meaning, layout, and failure states; the API enforces authentication, rules, and concurrency; the database guarantees relational truth and zero data loss.
  - Full-stack reach means understanding the whole path and owning the boundaries, not being a master of every single library.
- **Audience prompt:** "Who is allowed to see this record, and where is that rule enforced?"
- **Transition:** These concepts travel across tools.

---

## 3 · Learn the concepts. Syntax will change. — 2.5 minutes

- **Student question:** Is HTML still worth learning?
- **Takeaway:** HTML is the vocabulary you review AI in. Concepts transfer across stacks.
- **Speaking outline:**
  - Answer the HTML question directly: yes to semantic structure, accessibility trees, and native form controls; no to spending months memorizing tags before building real software.
  - You cannot review what you cannot read. Unreviewed AI output frequently generates inaccessible `<div>` soup.
  - The four permanent invariants: Interfaces (DOM/state), Systems (HTTP/data models), Delivery (Git/tests/debugging), and Directing AI (specs/context/audits).
  - Language agnosticism: In my own experience, once you understand the invariants in one stack, moving from JavaScript to Python or Go takes days, not years.
- **Transition:** The web has repeatedly changed what we do by hand.
- **Avoid:** "HTML is worthless."

---

## 4 · Every era hid the last one. The spec is next. — 2 minutes

- **Student question:** Where is web development going, and why can't a doctor or accountant do my job?
- **Takeaway:** Each era abstracts manual typing and raises the value of human architectural decisions.
- **Speaking outline:**
  - Walk the staircase: Raw markup (2000s) → Reusable libraries (2010s) → UI component composition (2015s) → Full-stack frameworks (2020s) → Spec-Driven AI (2026+).
  - The doctor/mechanic point: A non-engineer can prototype with AI, but cannot own production architecture. A doctor understands clinical care; a software engineer understands data schemas, failure recovery, and authorization boundaries.
  - AI is an engine; software engineers are the drivers who direct what to build and verify what not to build.
- **Transition:** How common is AI in the real world, and what do developers actually check?

---

## 5 · Everyone uses AI. Few trust it with big decisions. — 2 minutes

- **Student question:** Do professionals really use it, and do they trust it?
- **Takeaway:** 83% use AI; only 6.6% trust it for important decisions. The gap is where engineering lives.
- **Speaking outline:**
  - Present the 3 numbers: 83% of surveyed developers use AI tools at work; 17% do not; only 6.6% trust AI for critical decisions.
  - Review actions (from the survey): 76.5% run and verify code locally; 63.9% compare it against existing codebase architecture; 53% inspect tests and security.
  - Note: Only 9.6% report using answers as-is (this is multi-select self-report, not a blind acceptance rate).
  - The takeaway: Professionals use AI for velocity, but bet their careers on verification.
- **Sources & caveats:** Stack Overflow 2026 Developer Survey. Note that sample bases differ between questions; do not subtract 9.6% from 100% to calculate a review rate.
- **Transition:** What does verification look like in real code?

---

## 6 · AI can write code. Who decides what's correct? — 2.5 minutes

- **Student question:** What do I actually check?
- **Takeaway:** AI generates syntax. You enforce correctness and security.
- **Speaking outline:**
  - Introduce the Veracode 2026 benchmark: 44% of generation tasks produced code with a risky flaw, and 85% failed Cross-Site Scripting (XSS) defenses without explicit human constraints.
  - Walk through the pseudocode: A student portal loads a transcript: `record = db.load(request.params.id)`. Ask: "Can Student A change the URL ID to inspect Student B's transcript?"
  - Click the button to apply the guard: `if record.owner_id != user.id: raise UnauthorizedError()`.
  - Contrast "vibe coding" (accepting and hoping it works) with "spec-driven engineering" (defining correct behavior, writing tests, and auditing the diff).
  - DORA research: AI amplifies whatever discipline a team already has.
- **Avoid:** Claiming that 44% of all production code is broken. Veracode tested benchmark generation tasks.

---

## 7 · Entry is harder. Demand for proof is higher. — 2.5 minutes

- **Student question:** Are there jobs for freshers?
- **Takeaway:** Postings rebounded to 76.1, but 71% of net demand is concentrated in senior/system roles. Entry takes proof.
- **Speaking outline:**
  - Trace the 7 annual points from the Indeed postings index via FRED series `IHLIDXUSTPSOFTDEVE` (Feb 2020 = 100): From the 2020 baseline (100.0) through the 2022 peak (213.0) and 2024–2025 tech reset (67.5 in Jan 2025), to the active rebound (76.1 in Sep 2026). Postings are up about 15% since Feb 2025, but still about 24% below pre-pandemic levels.
  - Emphasize the Indeed Hiring Lab finding: 71% of the net increase in US software postings came from senior roles.
  - The message for freshers: Companies stopped hiring junior coders whose only skill is copy-pasting HTML. But demand for engineers who understand testing, APIs, and systems remains robust.
  - BLS projects 13,600 annual openings (+5% growth) over 2025–2035.
- **Sources & caveats:** Postings index measures hiring demand, not total jobs created. The rebound is not proven to be caused by AI.

---

## 8 · What can web developers actually earn? — 2 minutes

- **Student question:** What will I earn locally, remotely, and abroad?
- **Takeaway:** Start in local reality; build leverage for remote offers. Remote pay follows employer policy.
- **Speaking outline:**
  - Explain the 3 market tiers: Local software houses (Pakistan), foreign remote contracts, and US baseline benchmarks.
  - Note: Advertised pay data is currently being sampled across verified postings to avoid printing unverified figures. Sourced US median wage is $92,650/year (BLS 2025–35).
  - SBP data: Pakistan freelance tech exports reached $856.3M (up +51%) in Jul–Mar FY26, within $3.38B total ICT exports. Remote demand from Pakistan is an established economic channel.
  - Demystify remote pay: Remote compensation follows employer policy (local market rates vs. global unified bands like GitLab/Automattic); it is not automatically discounted.
  - Advice: Treat your first 12–18 months at a local software house as paid mentorship.

---

## 9 · No experience? Build proof. — 2.5 minutes

- **Student question:** How do I get hired when every job asks for experience?
- **Takeaway:** One inspectable, shipped system beats 500 generic tutorial resumes.
- **Speaking outline:**
  - Contrast a tutorial project with an engineering project using the campus event booking example.
  - A tutorial clone has a form and a button, but crashes when clicked twice or when the network drops.
  - An engineering project handles concurrency, enforces role-based permissions, documents database tradeoffs, and includes automated tests.
  - Honest reality: Junior competition is intense, and continuous learning never stops.
  - AI disclosure: Tell students to use AI openly and explain: "AI drafted the UI; I designed the schema, wrote the authorization guards, and verified the edge cases."

---

## 10 · Four ways to build your career — 2 minutes

- **Student question:** Which path fits my personality?
- **Takeaway:** Choose the door matching your current proof and constraints.
- **Speaking outline:**
  - Door 1 (Local team): Focus on mentorship and PR reviews. Action: Ship one complete CRUD app with auth and walk into an interview with a live demo.
  - Door 2 (Remote team): Focus on async communication and autonomy. Action: Record a 2-minute Loom walkthrough explaining an architectural decision and commit clean PRs.
  - Door 3 (Freelance): Focus on bounded client problems. Action: Package one specific problem ("I fix Next.js page latency & Stripe webhooks") instead of "full-stack developer".
  - Door 4 (Own product): Focus on equity and customer validation. Action: Talk to 5 students or local businesses about their biggest spreadsheet headache before writing code.
  - Demand context: Pakistan freelance exports surged +51% to $856.3M (Jul–Mar FY26, SBP).

---

## 11 · If AI can code, why should anyone hire you? — 2 minutes + Q&A

- **Student question:** What do I say in an interview, and what do I do on Monday?
- **Takeaway:** "AI generated the code. I decide what to build, and I prove it works."
- **Speaking outline:**
  - Pause on the opening question callback. Click the action button to reveal the answer: "AI generated the code. I decide what to build, and I prove it works." Emphasize that AI doesn't understand users, doesn't debug at 2 AM, and doesn't take accountability when data leaks.
  - Introduce the Monday Spec Challenge: Pick a real campus problem, write a 1-page spec, direct AI, catch and document 3 bugs your AI made, deploy live.
  - Point to the QR code linking to the student resources handout on GitHub.
  - Close: "Don't compete with AI at typing speed. Lead AI with system design."
  - Open the floor for Q&A.
