---
title: Nimiq 2.0 Albatross Hard Fork Preparations
description: Plans for the Nimiq 2.0 hard fork process
slug: nimiq-20-albatross-hard-fork-preparations
publishedAt: "2020-08-26"
updatedAt: 2023-12-07T16:38:40+0000
authors:
  - TEAM NIMIQ
image: /assets/images/prismic/84e87851-7185-4ba4-b9a8-d8eeff2c5c0f_blog_nimiq-20-albatross-hard-fork-preparations_1.png
---

As you all already know, Nimiq 1.0 is going to transition to Nimiq 2.0 in the near future. With this major update the Nimiq blockchain will move from Proof-of-Work to Proof-of-Stake with a new, high-performance consensus algorithm as well as the new, [recently elected NIM supply curve](https://www.nimiq.com/blog/supply-curve-for-nimiq-20-finalized/).

The switch to Nimiq 2.0 will happen through a “hard fork” and in this blog post we will share our plans for the entire process leading up to and including the hard fork.

Since Nimiq 2.0 will have a completely different consensus algorithm than Nimiq 1.0, the only way to transition is to stop the Nimiq 1.0 blockchain and then start the Nimiq 2.0 blockchain. To do this we will need to introduce a soft fork in Nimiq 1.0, get validators for Nimiq 2.0 and finally create a genesis block to start the Nimiq 2.0 blockchain as described in the following sections in more detail.

## Nimiq 1.0 Soft Fork

![](/assets/images/prismic/9e48b1ba-cda1-47f3-b50f-ed1601de22f3_blog_nimiq-20-albatross-hard-fork-preparations_2.png)

The first step will be to do a soft fork on Nimiq 1.0. The main purpose of this soft fork is to give us the ability to stop the Nimiq 1.0 blockchain later when we need to. We prefer a miner-activated soft fork, rather than an user-activated soft fork because the community has already signaled their approval, plus, a miner-activated soft fork is much simpler to realize. So, after we release the new client with the soft fork, miners signal that they installed the new client by writing some data to the “extra data” field of the block body for all blocks that they mine.

We can estimate the percentage of the hashpower that installed the new version by, for example, seeing how many of the last 1000 blocks have the signal. When that percentage reaches a predetermined threshold, the fork is activated. This must not be interpreted as a vote by the miners as the decision to switch to Nimiq 2.0 was already made by the overwhelming majority of the community. Instead, miners are simply signalling their readiness for the soft fork.

After the soft fork is activated, nothing will change initially, the blockchain will continue as normal. The main difference is the miners will now be able to receive a signal from Team Nimiq and when that signal happens all miners that installed the new client will stop mining — more details on this follow in the next sections.

Of course we can’t force every miner to install the new client and the miners that do not install it will continue to produce blocks even after everyone else stopped. Until the hard fork date, we will not know if anyone will bother to continue and support the old protocol. But with the community, the team and the exchanges committed to upgrading to Nimiq 2.0, we can be certain that there is no reasonable incentive to pursue the expired blockchain..

## Validators for Nimiq 2.0

![](/assets/images/prismic/9eba34d2-600e-4875-89ab-f4bca781d67d_blog_nimiq-20-albatross-hard-fork-preparations_3.png)

To get the 2.0 blockchain started, the genesis block (see below) will be signed by a set of validators controlled by the team. But from that point on, we want to have validators from the community. For that to be possible, the genesis block must already contain a list of potential validators, i.e. people who staked funds and are willing to produce blocks. So we will need to let people become validators before the Nimiq 2.0 blockchain even starts.

For some time, between the introduction of the soft fork on Nimiq 1.0 and the hard fork date, any NIM holder will be able to signal their intention to become the first validators on the Nimiq 2.0 blockchain. This will be very similar to how the supply curve voting occurred, by sending a simple transaction of 1 Luna (0.00001 NIM) to a predetermined address.

But anyone that wishes to be one of the first validators on Nimiq 2.0 will need to meet some more conditions. Some of these are necessary because of the protocol itself — for example, staking a minimum of 10’000 NIM and submitting the validator public key — while others will be imposed by us to guarantee that all the validators will be online and ready when the Nimiq 2.0 blockchain starts — for example, running a validator node on the Testnet for a long enough time. The exact set of conditions hasn’t been decided yet but will be shared with the community on time.

The fortunate people who are able to pass this screening process will be included in the genesis block and will become the first validators of Nimiq 2.0, thus making history! We want to emphasize that the more centralized and restrictive process **only** applies to the validators of that very first epoch. Anyone that wants to validate on Nimiq 2.0, but does not wish to go through this process, can simply wait for Nimiq 2.0 to start and stake their funds then. The validators from the second epoch forward will be chosen entirely by the protocol and without any intervention from Team Nimiq whatsoever.

Note: the above mentioned 10’000 NIM applies to stakers that run their own validator only, there will be no predetermined minimum for delegated staking, but a staking pool owner might choose to set one.

## Nimiq 2.0 Genesis

After we introduce the soft fork to Nimiq 1.0 and select validators for Nimiq 2.0 we are ready to start the hard fork. The hard fork will happen in three phases.

### Phase 1

![](/assets/images/prismic/83eb73df-3d98-42bf-8f07-36294a90be3b_blog_nimiq-20-albatross-hard-fork-preparations_4.png)

There will be a signal on the Nimiq 1.0 blockchain. This signal will simply be a transaction sent from an address controlled by Team Nimiq that was hard-coded into the soft fork. When this transaction is mined, a countdown will begin. When the countdown ends, phase two will begin.

The purpose of phase one is to allow time for any last preparations before the blockchain

upgrades. The length of the countdown isn’t set in stone yet, but will likely be between one and two weeks.

### Phase 2

![](/assets/images/prismic/2aea1317-bdb4-4e56-958c-7e25e5dabf15_blog_nimiq-20-albatross-hard-fork-preparations_5.png)

When phase two begins, all transactions will be forbidden. No more transactions of any kind will be allowed (with the exception of the block reward). In effect this will freeze everyone’s funds. Then a second countdown will begin, but this one will be much shorter, somewhere between 20 and 30 minutes.

The purpose of phase two is to finalize the state of the Nimiq 1.0 blockchain. Since Proof-of-Work has probabilistic finality we need to wait for several blocks until we are certain that a given block won’t be reversed. And we need to know with certainty what the state of the 1.0 blockchain is so that we can transfer it to the upgraded 2.0 blockchain.

When the countdown ends, phase three will begin.

### Phase 3

![](/assets/images/prismic/7cdfa492-b580-4449-bb03-d2b1beb82b9d_blog_nimiq-20-albatross-hard-fork-preparations_6.png)

Miners will stop producing blocks thereby effectively halting the Nimiq 1.0 blockchain. At the same time, Team Nimiq will take the last block produced and snapshot the state — the one which was already frozen many blocks before. This snapshot will be used, with the help of an automated tool that we will create and open-source beforehand, to create the genesis block for the Nimiq 2.0 blockchain.

The genesis block will then be broadcast to the network and received by the validators who were selected to be the first validators of Nimiq 2.0. These validators will then start producing blocks and Nimiq 2.0 will be born!

Team Nimiq is very excited and working hard towards this goal. Connect on our [social channels](https://twitter.com/nimiq) to get all the latest updates towards Nimiq 2.0!
