---
title: Nimiq Pre-Staking Campaign Is Now Closed - Proof of Stake is coming on Nov 19!
description: Nimiq Pre-Staking Campaign has concluded, with over 5.7 billion NIM pre-staked by more than 1500 addresses. This blog post outlines the next steps in Nimiq's transition to Proof of Stake.
slug: nimiq-proof-of-stake-is-coming
publishedAt: "2024-11-10"
updatedAt: 2024-11-21T01:35:24+0000
authors:
  - Team Nimiq
image: /images/blog/nimiq-proof-of-stake-is-coming/Zy-gsK8jQArT0qC7_Prestakinghasended.png
---

The Nimiq Pre-Staking Campaign phase has come to an end, marking an exciting milestone on Nimiq’s path to Proof of Stake. Thanks to the overwhelming support of the Nimiq community, the base goal of 2 billion NIM was met in just 48 hours, ensuring a robust migration to Proof of Stake. Since then, the pre-staked amount has grown substantially, with over 5.7 billion NIM pre-staked by more than 1300 addresses. With over 48% of all NIM in circulation staked, this reflects the strong commitment from the Nimiq community for the migration to Proof of Stake. For some context, Ethereum holders had staked an estimated 13% of total supply at the time of transition from proof of work to proof of stake (though an individual minimum of 32ETH was required while Nimiq requires only 100 NIM). A huge thank you to everyone who participated!

The focus now shifts to the Activation Phase, scheduled to commence on November 19, 2024, at approximately 8:00 AM UTC, corresponding to block #3’456’000 on the Proof of Work chain.

### Nimiq Proof of Stake Is Imminent—What Do I Need to Do?

For users not operating a validator, the migration is expected to be seamless. No action is required on your part unless you are going to operate a validator during the migration. Your NIM will remain safe, and you can continue using your wallet as usual once the migration is complete.

All possible precautions have been taken to ensure completion within an hour after the activation window opens approximately on November 19 at 8:00 am UTC, when block #3’456’000 is mined in PoW. However, as this is a decentralized process (read *[Start of the PoS Mainnet Chain](https://www.nimiq.com/developers/migration/migration-integrators#start-of-the-pos-mainnet-chain) *from the Nimiq Developer Center to learn more), initiated by network validators and supported by community developers globally, there is a chance that not all validators will be ready when the activation window opens. If you're curious about what happens if some validators are not ready in time, please refer to the section below, _What to Expect if Multiple Activation Windows Are Needed_.

If everything goes as expected, the required validators are ready and the migration process starts as soon as the activation window opens, here’s what to expect:

- **Nimiq Wallet:** The Nimiq Wallet will display a warning and temporarily disable transactions during the migration. This transaction closure will start approximately **1 hour before the candidate block **(Block 3'456'000 from the Proof of Work Chain is used as the candidate block) and ends **1 hour after** the Migration has concluded. There is no risk of users losing their funds. This precaution ensures that all transactions made close to the candidate block are properly reflected in the Proof of Stake Genesis Block. This way, users experience a smooth and accurate preservation of transaction history during the critical migration period.
- **Exchanges:** Exchanges supporting NIM are expected to halt deposits and withdrawals **24 hours prior** to the migration. They will resume these services once the migration is successfully completed and the network is stable.

### Activation Phase Technical Details

For those interested in the technical aspects, below is an explanation of what to expect during the Activation Phase.

As soon as the Activation Phase begins at Proof of Work Block #3’456’000, that very block will be used as the candidate transition block, initiating a 24-hour window for the transition to Proof of Stake with that block’s state. Validators who registered during the Validator Registration Phase will be able to signal their readiness to migrate during this period. The transition will only occur once validators representing 80% or more of the total pre-staked NIM signal readiness.

If the readiness threshold is not met within the 24-hour window for unexpected reasons, the activation will reset, and a new candidate transition block will be selected for another activation attempt. Given the strong support from community-managed pools, a successful transition within the first activation window can be anticipated. However, every scenario must be considered, and therefore the protocol is designed to handle multiple attempts if necessary to ensure a secure transition. For those curious about the process in case multiple activation windows are required, continue reading.

### What to Expect if Multiple Activation Windows Are Needed

Even if validators have issues signaling readiness, the migration process is designed with that possibility in mind. To ensure a smooth transition, validators will signal their online state starting 3 days before the first activation window at block height 3’456’000. Once 80% of the total stake signals readiness, the PoS chain launches. If this threshold isn’t reached in the first window, additional 24-hours windows will open every 1’400 PoW blocks. By the 5th window, validators who have not shown readiness are removed from the count, increasing the likelihood of reaching the 80% threshold. These removed validators will be deactivated for the first epoch of the PoS chain but can resume their active state from the second epoch onwards. This process continues until the 80% is reached.

For more information, visit the Migration Section in the [Nimiq Developer Center](https://www.nimiq.com/developers/migration/).

### Pre-Staking Campaign Rewards and Giveaways

With the Pre-Staking Phase concluded, our attention now turns to ensuring a successful migration to Proof of Stake. After the migration is confirmed, exchanges and third-party wallets are operational, and the new Proof of Stake chain is stable, we will begin distributing Pre-staking rewards and selecting giveaway winners. As stated in the Pre-staking Campaign, this process may take up to three months following the migration. Stay tuned to [Nimiq's official channels](https://x.com/nimiq) for updates on pre-staking rewards and giveaways.

### What's Next?

Exciting developments are on the horizon! With the transition to Proof of Stake, we will launch initiatives aimed at driving mass adoption of crypto payments and continue to grow the Nimiq community through engaging events. We extend our deepest gratitude to all who have supported us on this journey. The best of Nimiq is yet to come.

See you on the Proof of Stake network!

Pura Vida,

**Team Nimiq**
