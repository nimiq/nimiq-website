---
title: Nimiq 2.0 Status and Outlook
description: An update on the current state of Nimiq 2.0
slug: nimiq-20-status-and-outlook
publishedAt: "2021-02-16"
updatedAt: 2022-04-20T13:34:56+0000
authors:
  - TEAM NIMIQ
image: /images/blog/nimiq-20-status-and-outlook/dbb0adb7-cb6a-4ba6-8fff-855a08246f13_blog_nimiq-20-status-and-outlook_1.png
---

## The path we've already walked

In early 2019, we started research on our high performance Proof-of-Stake consensus algorithm called Albatross. We built a simulator to test the feasibility of the approach and published a paper detailing the concept. To bring Albatross to the browser, we researched and developed zero knowledge proofs that will drive our nano nodes and make it possible to sync with the blockchain in seconds even on mobile devices. In mid 2019 the team started work on a Rust implementation of Nimiq 2.0, working on multiple aspects of the new blockchain in parallel. Since Nimiq 2.0 is a novel, cutting-edge technology, implementing it always involves research and continuously revising our approach: Throughout 2020 we implemented some parts of the blockchain, tested them in combination with other parts and discovered that some things don't perform to our expectations so we moved forward to look for superior solutions. For example, we replaced pBFT with Tendermint, our network stack with libp2p and had to rework and extend Handel multiple times. But with each iteration, Nimiq 2.0 got better.

## The current state

The core team has now arrived at and is working on putting the key building blocks together. As of now we are testing and debugging the node implementation with all components necessary to run the Testnet. In a setup like this, issues often become apparent only after the previous issue has been solved, which unfortunately makes it hard to parallelize the coding work beyond a practical point. The issues in the code are oftentimes small, but difficult to reproduce and even more difficult to find. Other parts of the core team are currently improving various aspects of the blockchain: The Nano Sync is making good progress, staking-related transactions are being improved and work is being done on the network layer. At the same time our designers have been busy creating shiny new user interfaces for the staking feature of Nimiq 2.0. There will be further fine-tuning and iterations on the designs and they look very promising already.

![](/assets/images/prismic/dfda0f80-f19d-4ef7-afca-ca12a6837b8e_blog_nimiq-20-status-and-outlook_2.png)

## What's next?

Our current top priority in regards to Nimiq 2.0 is to get the public "Aurora" Testnet running. The Aurora Testnet is meant to let the broader community interact, test and push the network to its limits. However, at first it will require some technical knowledge to run it on your own machine. Bugs and changes are still to be expected in the early stages of the Aurora Testnet - after all, the Testnet exists to experiment and uncover issues!

The first version of the Aurora Testnet will include nodes that process the full chain (history nodes) but will not yet include light-weight nodes that can run in the browser (nano nodes). That means a next big step after releasing the Testnet is to make the network browser-compatible. For that we will have to fully incorporate the Nano Sync, adjust the code such that it can be compiled to web assembly and enable nodes to efficiently query staking information.

To a limited extent, the front-end team will already start implementing interfaces based on early versions of the Aurora Testnet. But the apps can only actually run on the Testnet after it has been made browser-compatible. Once the Nimiq Wallet, Keyguard and Hub have been adjusted to run on the Aurora Testnet, they will be provided as "Beta" in the Testnet setup. Community developers can also start testing their apps and services based on the Testnet.

As soon as the blockchain code is reasonably stable and finished, it will receive extensive reviews by our security experts alongside a public bug-bounty program which will furthermore motivate external reviewers to harden the software and protocol of Nimiq 2.0. We will also implement and vigorously test the hardfork mechanism that is needed for the Nimiq 2.0 upgrade.

Some of the outlined steps will happen in parallel, while others depend on each other, but it won’t be a one-way street: For example, issues might become apparent while integrating Nimiq 2.0 into the Wallet, which then might force us to go a step back and adjust the blockchain code again.

## Why does this take so long?

Nimiq is implementing an entirely novel, very fast consensus algorithm. On top of that Nimiq strives to make the benefits of blockchain technology usable by everyone by enabling decentralized payments directly in your browser. No other project has achieved what we are going for and so there is no perfect map for the challenges that lie ahead. We introduced the “lab” icons on the roadmap to reflect that time estimates for the release of Nimiq 2.0 are exactly that, estimates. We understand that those estimates still create expectations and are always encouraged by seeing our community so excited. While we have already come a long way and are continuously making good progress, we realize that we cannot keep the target of launching the Nimiq 2.0 Mainnet in Q1 2021 and have to update our guidance on that to the following quarters. In an attempt to better meet expectations, instead of relying on specific time frames, we will regularly inform the community about the progress being made, current challenges and next steps.

Nimiq is known for pursuing cutting edge tech and combining it with new levels of usability while building on organic growth. We aim to continue to live up to these ideals for Nimiq 2.0: We will not take shortcuts in terms of security or stability and deliver the fastest, most usable payment protocol while staying true to the pillars of crypto (open, borderless, censorship resistant, neutral and public).

**Pura Vida,**

Team Nimiq
