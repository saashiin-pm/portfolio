---
title: "Theo — an AI career co-pilot (and the assessment engine underneath)"
dek: "Theo is not a career copilot. That was application #1. Theo is a conversational assessment engine — context in, adaptive conversation, decision-ready report out."
year: "2025 — present"
tag: "nSpire AI · Flagship"
image: "/theo-preview.jpg"
imageAlt: "Theo product preview — an AI career co-pilot interface showing video interview, career strategy, and case study modules"
liveUrl: "https://nspire.ai"
liveLabel: "Visit Theo"
role: "Product Manager (owner)"
team: "5 eng · 1 design · 1 AI"
duration: "12 months and counting"
order: 1
problem: |
  Career preparation is broken on both sides. Job seekers send 200 applications into silence and receive no signal back about *why*. The tools meant to help are formulaic: static templates, one-way video questionnaires, AI rewriters that paper over real gaps. They produce more applications, not better candidates. On the other side, universities and workforce orgs lack a way to assess capability at scale — they can run 5 mock interviews per quarter manually, but they need to run 500.
solution: |
  Theo is a conversational assessment engine wrapped in a career co-pilot. The atomic capability is simple: context in (resume, job description, role profile) → adaptive conversation → decision-ready report out. The engine drives Mock Interview v2 (consolidated non-technical interview practice), Job Match (paywalled match score + explanation), Feedback & Report System (in-context trust signals), and a normalized job board across feeds. Each surface is a different application of the same conversational core — and the core is general-purpose enough to extend into hiring (Vera), sales coaching, promotion readiness, and beyond.
value: |
  For job seekers: evidence-backed coaching, not vibes. They practice with reliable feedback, see *why* a role fits or doesn't, and reach interview-ready faster. For nSpire's institutional customers (universities, workforce orgs): the structured assessment layer they couldn't build internally. For nSpire as a company: a defensible engine that monetizes clarity rather than access — users upgrade because they want confidence before applying, not because they're blocked from browsing.
metrics:
  - { label: "ARR growth", value: "$0 → $200K" }
  - { label: "User growth", value: "200×" }
  - { label: "Mock interviews run", value: "5,000+" }
  - { label: "14-day retention lift (Mock v2)", value: "+20%" }
  - { label: "Post-onboarding drop-off", value: "70% → 5%" }
  - { label: "Free → paid conversion", value: "~10%" }
  - { label: "AI inference cost reduction", value: "80×" }
  - { label: "Feedback hard-fail rate (target)", value: "≤2%" }
---

## The reframe

For the first six months at nSpire, I treated Theo as a career product. Then I started noticing the same pattern across customer conversations: universities asking if it could assess capstone presentations, workforce orgs asking if it could replace consulting screening, sales leaders asking if it could simulate buyer roleplay.

The product wasn't a career tool. The product was a **conversational assessment engine** that happened to be wedged into careers first.

The atomic capability — context in, adaptive conversation, decision-ready report out — works anywhere a company today either pays a human a lot of money to conduct a structured interview, sends out a form nobody fills out honestly, or skips the assessment entirely and accepts the blind spot.

That reframe drives every roadmap decision now. We're not building career features. We're building the engine, and applying it.

## What I actually shipped (with PRDs to back it)

**Mock Interview v2** — Consolidated three fragmented tools (Self-Intro, Behavioral, Mock) into one engine. Reduced decision fatigue at entry, fixed feedback hard-fails, made the camera optional. Locked the success definition: ≤2% feedback hard-fail rate and ≥20% of sessions trigger paywall view. 14-day retention up ~20%.

**Job Match + Paywall** — Reframed monetization. Browsing stays free; *understanding* (match score + explanation) is gated. Users upgrade not because they're blocked but because they want confidence before applying. Match data snapshots persist across downgrade/upgrade cycles for UX continuity.

**Feedback & Report Issue System** — Built lightweight in-context feedback (👍/👎 + tagged issue reports) tied to specific output IDs. Goal: detect hallucinations and quality regressions in <24 hours instead of finding out via churn. Rate-based alerts at 3 reports / 100 outputs / 24h per surface + prompt version.

**Job Board Normalization** — Database-level canonicalization layer. Fixed the "AWS vs Amazon vs Amazon Web Services" duplication problem. Internal fuzzy matching + external enrichment, audit-logged, A/B-tested for application lift.

**nSpire Referral System** — Career-aligned referral engine. Referrer gets 2 weeks Theo Pro + $10 gift card per conversion. Invitee lands on a personalized "Sachin sent you 2 weeks of Theo Pro" page. Reward triggers at moments of value: post-mock-interview, post-high-resume-score, post-streak.

## Design principles that travel across features

- **Access is free. Understanding is paid.** Browsing, applying, and core practice stay open. Clarity (match explanations, deep feedback, structured reports) is the upgrade.
- **Evidence over impression.** Every feedback signal must be transcript-backed and explainable to the user, to the customer, and to a regulator.
- **Behavior change > features shipped.** A feature isn't done at launch — it's done when usage and the metric move together.
- **Scope discipline is a form of product courage.** Each PRD lists what's deliberately out of scope. Saying no early protects the team's velocity later.

## What I'd do differently

The first year I optimized too hard for adding new surfaces. The Use Case Landscape doc I wrote (mapping Theo's possible expansion into hiring, sales coaching, manager enablement, compliance training, education, healthcare, financial services, public sector, B2B2C embedding) was a strategic unlock — but it also revealed that we'd been building features when we should have been building the engine.

The next 12 months: harden the engine, deepen the rubric library, prove the cross-domain thesis by shipping Vera on the same infrastructure.

## Recognition

nSpire AI was selected for [Product School](https://productschool.com)'s official AI tool stack alongside OpenAI, Replit, and LangChain — the only career-focused AI product on the list.
