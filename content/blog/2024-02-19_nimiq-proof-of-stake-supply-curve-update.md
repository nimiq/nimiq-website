---
title: Nimiq Proof-of-Stake Supply Curve Update
description: "As Nimiq prepares for its upgrade to Proof-of-Stake (PoS), attention is once again drawn to a pivotal element: the supply curve. This blog post explores the next step of this journey, a reflective opportunity for the engaged Nimiq community to reassess the previously selected supply curve, adapting this decision to better align with current circumstances."
slug: nimiq-proof-of-stake-supply-curve-update
publishedAt: "2024-02-19"
updatedAt: 2024-03-14T19:07:36+0000
authors:
  - Team Nimiq
image: /images/blog/nimiq-proof-of-stake-supply-curve-update/65d3b3ae6df829d21997f4ec_supplycurvearticle-1-.jpg
---

The original and still current emission rate curve for Nimiq ([Proof-of-Work](https://www.nimiq.com/blog/nimiq-a-frictionless-payment-protocol-native-to-the-web/)) was chosen to mirror Bitcoin's supply curve. Following the launch of the Nimiq Mainnet, [the community advocated](https://www.nimiq.com/blog/nimiq-20-supply-curve-considerations/) revisiting the emission curve to align with the then expected switch to Proof-of-Stake. After a diligent public voting process where NIM holders' votes were recorded on the Nimiq Blockchain, a new emission curve was elected and has since been waiting for release with the pending switch to Proof-of-Stake.

Now, as Nimiq Proof-of-Stake is close to being launched, but has taken much longer than expected to implement, there is a reasonable need to reconsider this selected “[Blue Curve](https://www.nimiq.com/blog/supply-curve-for-nimiq-20-finalized/)”. Adjustments need to be made for it to suit the conditions of the ensuing Proof-of-Stake reward economy in the context of the current and future circulating supply.

Let’s start by revisiting some of the assumptions and restrictions shared in [the previous blog post](https://www.nimiq.com/blog/nimiq-20-supply-curve-considerations/) related to the supply curve adjustment discussion.

### Key principles for adjusting the curve:

- The “coin supply growth” is effectively equal to the “network reward” (or “total reward”) emitted in time. Such rewards for validators are calculated based on real-world time, not on number of blocks (the percentage of coins staked from total supply does not affect the absolute emission rate).
- The aim remains to reach a total supply of 21 billion NIM approximately 100 years from the time of mainnet launch in 2018.
- The growth rate should continue to accommodate for the concept that, following the introduction of a currency, the earlier years support higher supply growth than the later years, when some level of saturation has been achieved.
- The supply growth should be closer to the generally accepted economic ideal of a monetary system with (positive) smaller, steadier rate changes.
- Any adjustment should consider the continued community expectation that the annualized coin supply growth should be smaller than it is now.
- The initial staking reward (adjusted and non-adjusted) should compare reasonably within the ranges of other current PoS projects of similar maturity, for competitive reasons.

## Adjusting the curve with minimal changes

The Proof-of-Work emission to date has pushed the NIM supply to a level where the community-chosen curve for Proof-of-Stake emission requires adjustment. In simple terms, going with the elected curve would lead to reaching the original target of a 21 billion NIM total supply much sooner than anticipated.

This situation calls for an adjustment of the emission curve to reasonably maintain the intended reward balance and supply growth in time. To minimize changes to the elected curve we strive to keep as many parameters as possible fixed from the outcome of the original vote. The first option would be to keep the initial absolute reward rate (525/min). The second option would be to keep the first year emission percentage target (“Inflation”), which is derived from the planned annual supply growth which was 4.1%. While maintaining the 21 billion total supply target (reached in now 94 years), this means the only adjustment needed is the annualized reduction in reward. To align the previously selected supply curve with the current scenario, we compare these two main approaches:

![](/assets/images/prismic/313fbece-f49e-4d12-b70f-7d3d688c49a4_1.png)

**A. Maintain initial absolute NIM reward**

By keeping the initial emission at the same level as previously selected (525 NIM/min), the original annual reward reduction percentage  of 1.47% would need to be increased to approximately 3%. This adjustment means that each year, the reward would lower a bit more than originally elected, extending the timeline to reach the total supply target**.**

![](/assets/images/prismic/8267ed03-f12a-4ded-920e-4e3248f306ed_2.png)

**B. Maintain Initial annual supply growth**

Alternatively, by keeping the initial annual supply growth (“Inflation”) at the same level as previously selected (4.1%)),  the initial emission would need to be increased to around 1000 NIM per minute. This approach means** **more NIM would be distributed initially, but to reach the same total supply target, the reward would have to be decreasing faster, with the annual reduction rate increased to approximately 6%**.**

![](/assets/images/prismic/65d4bee13a605798c18bf3c0_Screenshot2024-02-20at08.57.54.png)

The two approaches and its parameters offer boundary choices between the original intent and the current Nimiq tokenomics.

### Give it a try

Want to experiment and discover your own curve to make a proposal to the community? Give it a try here:

<iframe style="width: min(1440px, calc(100vw - 16px)); margin-left:-24px;aspect-ratio:9 / 12"  src="https://mraveux.github.io/supply-curve/" class="md:hidden"></iframe>

<iframe style="width: min(1440px, calc(100vw - 16px)); margin-left:-50%;"  src="https://mraveux.github.io/supply-curve/" class=" hidden md:flex"></iframe>

### The Next Step

Based on these considerations, Team Nimiq invites the community to engage in a ~30-day discussion period until March 20 2024 across Nimiq Community Channels and the [**Nimiq Community Forum**](https://forum.nimiq.community/t/supply-curve-update-discussion/1995) to affirm either of these approaches or present additional options. Following this period of discourse and the leading resulting supply curve options, Team Nimiq will organize a voting procedure similar to the previous one, enabling Nimiq community stakeholders to participate and cast their votes.

This important phase in Nimiq's story is one where the community's voice has always played a significant role in guiding the path towards a balanced, resilient, and community-driven future.

Thank you for your support and pura vida

Team Nimiq
