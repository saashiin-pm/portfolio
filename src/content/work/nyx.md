---
title: "Nyx — know the city before it knows you"
dek: "Paste any apartment listing. 60 seconds of brutal honesty. We built the antidote to listing-photo vibes — in six hours, on a Saturday, and won the hackathon."
year: "2026"
tag: "PMs in AI · Hackathon winner"
image: "/nyx-preview.png"
imageAlt: "Nyx product preview — an AI apartment vetting tool that surfaces hidden fees, building violations, and tenant reviews from a single listing URL"
liveUrl: "https://vibe-perspective-spark.lovable.app/"
liveLabel: "Try the prototype"
role: "Product Lead"
team: "4 builders (cross-functional)"
duration: "6 hours"
order: 4
problem: |
  SF apartment hunters make $40,000 decisions on listing photos and "vibes." The advertised rent ($3,150/mo) becomes the real rent ($3,660/mo) once you add parking ($275), utilities ($140), the trash fee buried in clause 14.3 ($35), mandatory pest control ($45), and a package locker fee you can't opt out of ($15). That's an extra $6,120 a year nobody told you. And that's before the operational reality: building violations, block-level noise patterns, management company reputation across their entire portfolio, gym distance, commute friction, light sleepers' nightmares. All of this is **public information.** It's just scattered across 10+ sources nobody has time to check. Sign the lease. Cross your fingers. The hard way costs $15,050.
solution: |
  Nyx is a conversational apartment vetting tool. Paste any listing URL → 60 seconds → Nyx pulls building violations, block-level noise data, management portfolio reviews, hidden fees, and walks you through your actual Wednesday (gym, commute, coffee, when the block gets loud, what dinner looks like). No dashboard. No score. It talks to you like a friend who's lived in SF for ten years and won't let you sign a bad lease. Then it gives you one of three calls — **Go** (move fast), **Negotiate** (here's your leverage), **Walk away** (here's why). Built in six hours by four builders at the PMs in AI hackathon. Won.
value: |
  People make $40K decisions on listing photos. We built the antidote to vibes. The worst-case savings are real: avoided early termination + forfeited deposit + new deposit + movers + overlap rent = $15,050 saved. But the actual value is more subtle — it replaces the gnawing "did I miss something" feeling with structured intelligence delivered in 60 seconds. The validation came not from judges but from the audience: when we pitched the problem, the room nodded before we got to the solution. Several DMs the same day said "I literally just got burned by this." The problem is more common than anyone admits because admitting it requires admitting you made a $40K decision on photos.
metrics:
  - { label: "Build time", value: "6 hours" }
  - { label: "Team size", value: "4 builders" }
  - { label: "Hackathon result", value: "1st place" }
  - { label: "Worst-case savings unlocked", value: "~$15,050" }
  - { label: "Hidden fees surfaced on demo listing", value: "$510/mo" }
  - { label: "Live prototype", value: "Shipped same day" }
---

## What I learned in 6 hours

**The idea that wins a hackathon is never the most technically impressive.** It's the one that makes a judge go: *wait, why doesn't this exist already?* That's the whole game. Most teams pitch features and architectures. The teams that win pitch a problem the room is already feeling.

**Conviction comes from validation, not the other way around.** We posted the Nyx pitch on LinkedIn *before the hackathon ended*. The comments started rolling in within an hour — DMs from people saying "I literally just got burned by this last month." That feedback gave us the confidence to pitch like we meant it. You don't psych yourself into believing a product is real. You validate it's real and then the conviction follows.

**You don't win a hackathon with a good idea. You win it with people who can build under pressure without ego getting in the way.** Sreenidhi, Qimei, Makoto — every one of them shipped. Six hours is not enough time for opinions. It's enough time for one team and one direction.

## What's in the product

- **Listing parser.** Paste any SF listing URL. Extracts unit details, building, management company, address.
- **Hidden-fee surfacing.** Cross-references the listing against known building-level fee structures and tenant reports.
- **Noise + violations layer.** Pulls public records (building violations, noise complaint frequency by block).
- **Management reputation.** Looks across the management company's *entire portfolio* — if they run 14 buildings and tenants in 9 of them say repairs take 3 weeks, that pattern surfaces.
- **Life-fit overlay.** You input your gym, your office, your coffee shop, your sleep sensitivity. Nyx walks you through what a normal Wednesday actually looks like there.
- **One call.** Go, Negotiate, or Walk away — never a dashboard, never a numeric score.

## What this hackathon taught me about product velocity

In six hours we shipped a working prototype. At nSpire I sometimes spend six weeks on a feature. The honest comparison isn't fair — production products have to scale, comply, ship multiple times a day without breaking — but the question is worth asking: *what would change if we treated every feature decision like we had six hours instead of six weeks?*

Mostly: we'd cut more. We'd say no faster. We'd stop debating things that the product itself could answer in 30 minutes of prototyping. Hackathon mode is unsustainable as a permanent state, but it's a useful corrective when a product team has been in a meeting for an hour.

## What I'd do next

Nyx as a hackathon prototype is the proof of concept. As a real product it needs: data partnerships (building violations vary by city — SF is permissive, NYC is not), management-company review trust signals (verified vs. unverified, recency), and a business model (B2C subscription? B2B for relocation services? Free with affiliate revenue from movers, brokers, lease-signing platforms?).

The team's open to continuing it. The harder question is whether it's the right thing to work on next — or whether the lesson from the win is "find more problems where the audience is already nodding before you finish the first sentence" and apply that elsewhere.

[Try the live prototype →](https://vibe-perspective-spark.lovable.app/)
