---
title: Early Access to DevNet staking in the Nimiq Wallet
description: With Nimiq’s evolution to Proof-of-Stake now in the DevNet phase, we've begun to integrate staking into the Nimiq Wallet. While many features are still yet to be implemented, we thought it would be nice to share early access with our community to let you get an idea of how Nimiq’s next upgrade will look and feel.
slug: early-access-to-devnet-staking-in-the-nimiq-wallet
publishedAt: "2022-07-13"
updatedAt: 2022-07-13T16:28:33+0000
authors:
  - Team Nimiq
image: /assets/images/prismic/bd007117-85ce-4342-9e8c-9212c7b98803_Frame_112_6_.png
---

The switching of Nimiq’s protocol to Proof-of-Stake (PoS) is an upgrade long awaited by the Nimiq community. Our blockchain engineers [recently published](https://twitter.com/nimiq/status/1527004101992755202) the Nimiq Proof-of-Stake DevNet release-candidate and shared RPC access to interested devs for them to test how it fits their use cases. We've continued to fine-tune and test the DevNet and, with current RPC access ready to go, the next natural step was to begin integration of DevNet staking into the Nimiq Wallet.

Today, we're very happy to present the first DevNet-version of Nimiq with Proof-of-Stake in the Nimiq Wallet.

## Nimiq with Proof-of-Stake – codename "Albatross"

As we're getting to the point where this upgrade is beginning to be tested not only by developers but also by non-technical users, we'd like to take this opportunity to state that going forward we are looking to talk about the Proof-of-Stake or “Albatross” upgrade that is happening to Nimiq rather than referring to Nimiq 2.0. Similar to Bitcoin not having version numbers, Nimiq remains Nimiq (and NIM remains NIM) as proposed upgrades in the underlying software are adopted by the Nimiq community.

## A reminder of what is (and what is not) the Proof-of-Stake DevNet

The Nimiq Developer Network, or DevNet for short, is a laboratory for all Nimiq developers to experiment and test out the new Nimiq Proof-of-Stake protocol. Since it's set up as a testing environment, the DevNet is subject to resets, with everything that that entails (staking rewards lost, accounts no longer holding funds, etc). The current Nimiq Mainnet and the Nimiq DevNet are completely separate networks and are not compatible with each other. Please make sure not to send real NIM or to use your actual Nimiq account in the DevNet. If you want to test the DevNet, always create a fresh account - and keep in mind that it does not work within any app in the Nimiq Ecosystem.

## Current Status of DevNet Staking in the Wallet

With the progress that we've made, we felt that this was the perfect time to share early access with our community, so that you can get a feel for just how Proof-of-Stake works with the Nimiq Wallet. Having said that, there are some things to keep in mind while trying it out:

### The Wallet is running on the real deal, and your feedback is invaluable

The Nimiq Wallet is actually connected to a running network of Proof-of-Stake DevNet nodes currently managed by the Nimiq team. Nothing you see in the DevNet staking Wallet is a simulation. Sending NIM, staking, un-staking and payouts are real (in devNIM). Currently, our focus lies on running the DevNet under regular conditions. Security hardening will follow later. If you find anything that feels like a bug, please share it in the [Nimiq Forum](https://forum.nimiq.community/t/devnet-staking-wallet-feedback/1729).

![](/assets/images/prismic/d1e5fbe8-34db-4c3b-bfd5-d2a1b65fd6d6_letsgoscale.png)

### Validators and Delegated Proof-of-Stake

The Nimiq wallet allows users to delegate their stake to a validator through RPC. Nimiq Proof-of-Stake is non-custodial, so delegating stake to a validator pool does not bear the risk of surrendering the NIM to the pool manager.

![](/assets/images/prismic/dffbd724-a43a-423a-9a86-4ada8a49b86d_choosevalidatorscale.png)

We are currently working on enabling community developers to become validators in the DevNet. Since at the moment there's no support for others to create validating pools, the only validating pools available in the Wallet are fictional, just for testing purposes. We do use settings for each pool to showcase the trust score sorting of the Wallet. Because these settings are up to the validator some aspects of the staking experience depend on them. When more external validator pools are added, the different settings and configurations of different validator pools can be tested. Examples of this:

- Percentage of rewards: validators charge for their services
- Payout times: validators may freely choose the frequency of payouts
- Minimum payouts: validators could require a minimum staking amount

## Current rewards and staking/un-staking times might change

Many variables of the protocol are going to be changed and fine-tuned to find the best setting for Nimiq Proof-of-Stake, which is one of the main intentions of the Nimiq DevNet and the tests we run with the Wallet. For this reason, some aspects of the staking user experience might be different to those that Nimiq Proof-of-Stake will have when it reaches its final stage. Some of these include:

- Block time and transactions per second
- The emission curve of block rewards
- The time it takes for a user to receive rewards after beginning staking (payout times)

## NIM and DevNet NIM are not compatible!

Nimiq Mainnet and Nimiq Proof-of-Stake DevNet (Albatross) run in completely different networks. Although you can send DevNet NIM with your friends to test it out, do not send real NIM to the DevNet wallet because they will be **lost forever**. DO NOT use your mainnet account in any way. In any case, it doesn't hold any funds in DevNet. Just create a fresh DevNet account for testing these features. A generous faucet provides the NIM necessary.

## Payout history and calculated rewards are not included yet

The interface is a work-in-progress, too. Some parts are still missing, or are subject to change. While the staking feature works and rewards can be seen as your stake grows with each payout, the history of these payouts is not yet implemented. Special validators are available who will not add the rewards to your stake but instead send them to you directly. In case you want to see a hefty transaction history, delegate your stake to “Monopooly" or "Cool pool”.

![](/assets/images/prismic/9c210a25-8a38-4269-866f-59b20ffd1935_nographscale.png)

We'll keep you posted when we add new features and functionalities for you to try, so stay tuned to our official Twitter account to learn more and be amongst the first to test them out!

## Enough! Take me to the DevNet Wallet and let me stake!

Thanks for bearing with us and reading all of that important information! You can test out the Nimiq DevNet Wallet here: [wallet.v2.nimiq-testnet.com](https://wallet.v2.nimiq-testnet.com). Plus we prepared [a full tutorial which can be found here](https://youtu.be/JhkVjRxfj7A). We're planning a community event to test the Wallet all together, with cool prizes involved for users that are actively testing it and sharing it with their friends and followers.

![](/assets/images/prismic/3719eac8-6e27-4a80-b880-22e942cad545_1.png)

Happy DevNet Staking and Pura Vida!

**Team Nimiq**
