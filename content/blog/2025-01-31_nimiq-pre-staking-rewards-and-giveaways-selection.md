---
title: Nimiq Pre-Staking Rewards and Giveaways Selection
description: "After an exciting Pre-Staking Campaign that supported the successful migration to Proof of Stake, the moment we’ve all been waiting for has arrived: selecting the giveaway winners and distributing the rewards! This blog post outlines the process for clarity and transparency."
slug: nimiq-pre-staking-rewards-and-giveaways-selection
publishedAt: "2025-01-31"
updatedAt: 2025-01-30T16:17:19+0000
authors:
  - Team Nimiq
image: /images/blog/nimiq-pre-staking-rewards-and-giveaways-selection/Z5mKMJbqstJ99-G_BlogpostNimiqPrestakinggiveaway.png
---

The Pre-Staking Campaign was a resounding success, and it’s all thanks to you, the amazing Nimiq community! Your participation and enthusiasm have played a vital role in this migration milestone achievement. As anticipated, we are getting ready to distribute all campaign rewards.  Below, you’ll find detailed information about the giveaways and rewards distribution process—let’s dive in!

### Giveaways Selection

#### The Prizes:

- 10 winners of **3 million NIM**
- 25 winners of **1.5 million NIM**
- 65 winners of **500k NIM**

To ensure a fair and transparent selection process, we’ve developed a script that uses the Nimiq Blockchain as a source of randomness. This script, which can be accessed and verified on [GitHub](https://github.com/nimiq/prestaking-giveaway-script), leverages block hashes to generate random seeds for selecting winners.

#### How It Works:

1. The script reads data from two sources: the Pre-Staking [participant list](https://github.com/nimiq/prestaking-giveaway-script/blob/master/prestakers-round1.csv) and the prize pool.
1. It will then utilize the election macro block hash from each day of the selection rounds (details provided below) as a randomness generator to pick a random participant as the winner for each prize.
1. Once a participant wins, they are removed from the pool to ensure no duplicates.
1. The process repeats for each prize, with new block hashes providing fresh randomness for every round.

This approach ensures transparency and fairness, as anyone can verify the selection process by reviewing the block hashes and the script logic.

#### Selection Rounds

Winners will be chosen in three rounds:

- **February 3rd:** 3 winners of 3M NIM, 8 winners of 1.5M NIM, and 21 winners of 500k NIM
- **February 10th:** 3 winners of 3M NIM, 8 winners of 1.5M NIM, and 22 winners of 500k NIM
- **February 17th:** 4 winners of 3M NIM, 9 winners of 1.5M NIM, and 22 winners of 500k NIM

Prizes will be delivered within one week of each round’s winner selection. To find out if you’ve won, visit: [https://migration.nimiq.network/rewards](https://migration.nimiq.network/rewards) and stay tuned to [our social media channels](https://x.com/nimiq) for announcements.

#### Pre-Staking Rewards

In addition to the giveaways, the project allocated 100 million NIM as rewards for the Pre-Staking Campaign to be distributed evenly and proportionally to all participants who pre-staked their NIM. Based on the total amount pre-staked, the absolute reward rate comes to approximately 3% (~12% annualized!). This means participants receive ~0.030487 NIM per 1 pre-staked—an excellent reward for supporting the campaign!

Winning participants who adhered to the campaign’s[ Terms of Service](https://migration.nimiq.network/Nimiq_Pre-staking_Campaign_ToS.pdf) can expect to receive these rewards by or before the end of February.

### Validator Registration Rewards

Community members who registered a validator during the validator registration phase and comply with all the rules outlined in the [official announcement](https://forum.nimiq.community/t/nimiq-validator-registration-rewards/2129/1), can also expect to receive their reward by or before the end of February. As stated in the terms, rewards will be deposited to the validator's address.

#### Winners Are Coming

The first winners will be announced on **February 3rd**. Stay tuned and see if the gods of Proof of Stake smile upon you! To see if you’ve won, visit: [https://migration.nimiq.network/rewards](https://migration.nimiq.network/rewards) or follow our [social media channels](https://x.com/nimiq) for updates.

Good luck, and thank you for being an integral part of the Nimiq journey!
