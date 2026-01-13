---
title: Technical Progress Update
description: December 2020
slug: technical-progress-update
publishedAt: "2020-12-08"
updatedAt: 2025-07-18T10:47:06+0000
authors:
  - TEAM NIMIQ
image: /images/blog/technical-progress-update/2c81a611-e134-4315-8846-a362b8743245_blog_technical-progress-update_1.png
---

Lots of advances have been made since the last [progress report](https://www.nimiq.com/blog/nimiq-project-progress-report-Nov-2019/), so we want to provide you with the latest updates. Here is a quick summary of some important milestones achieved during 2020, followed by particular details about the work done over the recent number of months:

**Launch of Cryptopayment.link:** Don’t buy crypto, earn it! The easiest way for freelancers, influencers, owners of small businesses and rental companies to start accepting crypto for their work. Learn more about it in [this dedicated blog post](https://www.nimiq.com/blog/nimiq-launch-cryptopaymentlink/).

**Nimiq 2.0 Supply Curve Voting:** In preparation for Nimiq 2.0, and based on the numerous requests from the community to review this matter, we followed a careful process that started by sharing our [thoughts and suggestions](https://www.nimiq.com/blog/nimiq-20-supply-curve-considerations/) on making adjustments to the coin supply curve for the switch to Proof-of-Stake (PoS) with Nimiq 2.0. We then discussed it with the community and hosted an [AMA](https://forum.nimiq.community/t/nimiq-supply-curve-ama). Afterwards we communicated [how the voting process would work](https://www.nimiq.com/blog/nimiq-20-supply-curve-voting/) and built a [Voting Tool based on the Nimiq Blockchain](https://www.nimiq.com/blog/nimiq-20-supply-curve-voting-procedure/). The first vote concluded May 18, 2020 with "YES" on making an adjustment to the NIM supply curve. [See the results here](/vote#change-curve). The follow-up ranking vote concluded on June 8, 2020 and the NIM supply curve for Nimiq 2.0 has been determined as the "BLUE" curve - a curve suggested by the community as the middle ground of the two curves suggested by Team Nimiq. [See results here](/vote/#rank-curves).

**Cutting-edge work on zero knowledge proof and nano nodes:** One of the big strengths of Nimiq are the nano nodes and how they allow anyone to sync and connect to the blockchain from a regular or mobile browser in just a few seconds. Nano syncing in Nimiq 1.0 worked by leveraging two technologies: light clients and NiPoPoWs. Nimiq 2.0 will leverage ZPKs (zkSNARKs to be precise) to sync in seconds while reducing the amount of data that a user needs to download. We wrote an in-depth explanation for all those interested, which can be found in two blog posts [here](https://www.nimiq.com/blog/zero-knowledge-proofs-and-nano-nodes/) and [here](https://www.nimiq.com/blog/zero-knowledge-proofs-and-nano-nodes-part-2/).

**Release of the Albatross Demonet:** The Blockchain team has been focusing this year on the launch of the new Proof-Of-Stake consensus algorithm coinvented by Nimiq, called Albatross. One of the first milestones of this major goal was the release of the [DemoNet and the accompanying informative site](https://www.nimiq.com/albatross/). At this site users can see a real life network of virtual servers running from different locations of the world and reaching over 1000 TPS with an average of 1 second confirmations.

**Release of Nimiq OASIS informative site:** As work on OASIS moves ahead, we created this [page on our website](/oasis) as a marketing effort to give a source-of-truth to people interested in integrating and writing about OASIS.

**Release of Fastspot:** The first version of Fastspot was released, allowing the very first non-custodial euro-crypto swaps. The service is currently in a closed beta, we shared a [video demo](https://youtu.be/RBQ_6OqVO68) of how the swap works and looks.

**Release of [Fastspot website](http://fastspot.io/):** Powered by OASIS, Fastspot is a technology service built by Nimiq that allows users to perform non-custodial swaps of monetary, crypto and general off-chain assets. The site will allow users to use the service and also understand more about what it is, what are its benefits and what is yet to come.

## Progress details for the last few months

The progress is divided amongst Team Nimiq’s internal sub-teams.

## Front-end Team

| Lead: Sören, development: Matheo, Daniel and Sven

**BTC Support:** The recently released BTC support took most of August and September to be implemented. As NIM and BTC work very differently and Nimiq being much more developer friendly, the BTC integration was more challenging. A specific example is the way the wallet queries the balance of BTC in comparison to Nimiq. For BTC it is necessary to get all unspent outputs across all used addresses and calculate the balance, whereas in Nimiq querying the balance is a single network request. The final implementation takes advantage of the Electrum network powering the Electrum wallet. The Front-end Team ended up reading source code of various libraries and reverse engineering APIs since documentation was limited and there is no Bitcoin dev center. As an interesting note, the work done supports the latest segwit addresses (native segwit) only, reducing overhead a lot, making the implementation future-proof, and minimizing Bitcoin network fees. This decision is strongly supported by the fact that BTC core uses native segwit by default now also.

**Polishing Fastspot API:** A first version of the Fastspot API was already ready by the time Front-end started implementing the swap into the Nimiq Wallet. However using the API extensively by connecting it to the Wallet revealed room for improvements in terms of documentation and general usability. As a result, the API is much more developer friendly now, the documentation is still work in progress based on the lessons learned. We are working on releasing the Fastspot API and a first client-library soon. Stay tuned.

**Swap integration:** After BTC support was added to the wallet, Front-end focused on integrating Fastspot-based swaps. This new feature brought a lot of details, edge cases, and a complex UI implementation that we needed to make sure worked on all devices. We are very proud of the end results which you can use right now in the [Nimiq wallet](https://wallet.nimiq.com/).

**New languages:** Frontend Team, together with the help of community translators, released the wallet in 3 new languages: Russian, German and Spanish.

**Bitcou Voucher Store:** Frontend team has been helping the developer behind Miqslist and Nimiq Video Game Store to bring a new shop to life: the Nimiq Voucher Store, a shop powered by [Bitcou’s coupons](https://cryptovoucher.io/). This store will allow you to use your NIM to buy in a big number of stores around the world.

**Next goals ahead: **The Front-end Team is working towards the release of the fiat to crypto swap. In parallel they are also working on creating a Fastspot widget that will allow third-party projects to integrate Fastspot easily in their apps and websites. While these tasks are being completed, work is already on the way adding ETH to Fastspot.

## Blockchain Team

| Lead: Philipp, research: Bruno and Pascal, development: Janosch, Sebastian, Jeffrey and Sergio

### Checkpoint blocks

The blockchain team has been working in a new hierarchy of blocks for Albatross:

1. Election blocks
1. Checkpoint blocks
1. Micro blocks

![](/assets/images/prismic/cdef53d2-4085-4064-af23-afc280ba23ad_blog_technical-progress-update_2.png)

The previous Albatross design involved two types of blocks: micro blocks that contain transactions and macro blocks that provide finality and determine a new set of validators. "Finality" means that transactions can't be changed or reversed anymore. It is desirable that transactions reach finality fast in order to provide certainty for the recipient. On the other hand, changing the set of validators too frequently is problematic because it slows down the syncing process in two ways: it’s computationally expensive to create new election blocks and all election blocks need to be downloaded for a full sync, thus, more blocks means more time to sync.

To improve both aspects at the same time, the blockchain team replaced macro blocks with check-point blocks and election blocks. Checkpoint blocks only provide finality while election blocks additionally also determine a new validator set. Checkpoint blocks will be built approximately every 5 minutes and thus transactions will quickly reach finality. Election blocks will be built approximately every 12 hours and thus pave the path for fast syncing.

### History tree

This milestone has been Pascal’s focus for the last couple of months. When Nimiq nodes are downloading the history of the blockchain, they are interested in the state changes while avoiding syncing all micro blocks which would result in high download sizes. The new history tree allows nodes to download verifiable chunks from peers. Currently, the block hash is a tree that includes the transaction hashes. The new history tree is a tree structure which contains all the state changes that become part of the election block. A node then only needs an election block and the path in the tree to prove a transaction is part of it; so you only download chunks and a cryptographic proof. The history tree uses MMR (Merkle Mountain Ranges) and is an append only data-structure, but efficiently and fastly appended. Being cutting-edge technology, there was no library available to draw on. Instead, the team had to implement MMRs themselves and by doing so contributed to the open-source cryptocurrency world.

### History sync

Also part of Pascal’s work. As previously discussed, the history tree is a data structure that contains the history of the blockchain. The history sync process downloads blocks and data from the history tree. To further optimize this operation, Pascal created an efficient way to download all the smaller data structures that compose the History tree. History sync is performed in an orderly fashion, first election blocks, then check-point blocks.

### Tendermint and Handel

This milestone is brought to you by Sebastian and Bruno. As you might know, Tendermint is a BFT protocol to get consensus. Previously the team started out by using pBFT but then decided to go for Tendermint since pBFT had certain limitations when used in a blockchain. Together with the switch to Tendermint, Handel had to be adapted as well. As Janosch explains in [this video](https://youtu.be/tfae8ld1ILc), Handel is a signature aggregation protocol that, as the name states, aggregates and broadcasts signatures. As Nimiq 2.0 will have 512 validators, having all of them communicating between each other is not efficient. The solution is to group validators so that messages are shared between groups, where each group already aggregates signatures of validators within that group before sharing it with other groups. This method reduces bandwidth usage and improves propagation speed. And on top of that, Handel is a generic protocol which will also help optimizing view changes in Nimiq 2.0.

### LibP2P

Sergio and Janosch have teamed up for this work. Since August they have been carefully replacing the current network implementation of Nimiq 1.0 with LibP2P. This takes advantage of the big work done by Protocol Labs on LibP2P. They are using the Rust implementation of LibP2P and, since it is not custom made for Nimiq, they are adapting peer scoring to fit our needs. A big part of this task is done, such as completing the network interface, now the integration process has started.

### OASIS

Amongst other things, Philipp has been preparing the OASIS ([Open Asset Swap Interaction Scheme](/oasis)) implementation for a use case that we have noticed could be very interesting: using OASIS for OTC platforms. In general this includes OASIS allowing OTC desks to authenticate and set specific fees and limits for their clients. The next tasks include integrating the official TEN31 (WEG Bank) escrow bank account, setting up production infrastructure and writing very detailed documentation to be ready for audits by German authorities. The documentation topic is extremely important because OASIS is using a regulated entity, namely TEN31 Bank. To comply with regulations there are no necessary changes in the code, but actually in the documentation and the processes. The final set-up effort of OASIS lies in extremely high up-time/availability of the service to ensure atomic swaps working successfully. This will include tests with the real infrastructure when ready.

### Improved RPC server

Janosch has been working on this specific task. The latest RPC server version now supports web sockets, allowing events to get pushed and arrive via subscriptions instead polling which results in being much more efficient. This effort is still a work in progress and has low priority since the current focus is on the Albatross Aurora Testnet.

### Code clean-up and removing 1.0 code

The initial idea of the Blockchain team was to have the client be able to communicate with 1.0 and 2.0 nodes for transition purposes, but in August that turned out to not be viable and resulted in the publication of a [new transition plan](https://www.nimiq.com/blog/nimiq-20-albatross-hard-fork-preparations/). The conclusion is that the code of Nimiq 1.0 in Albatross is now unnecessary and can be removed to make the codebase more clean and lean.

### Refactoring the observable pattern to using streams

The entire blockchain team has changed the way they are coding Nimiq 2.0. Nimiq 1.0 was originally written in JavaScript which is event driven. The initial implementation of Rust was following the same approach. But Rust has more efficient structures called “streams” that avoid “event-hell”, streamline code and make debugging much easier. They follow the schema of "producer ➜ stream ➜ consumer" - "receive a micro block ➜ add it to your data, see if you’re the next validator ➜ reply to the network". This results in a clean and linear process, making the code simpler and the maintenance easier while also allowing for more advanced features to be implemented that were not possible with the observable pattern. Most of the effort is done already and further updates in this direction will be done on the fly whenever other parts of the code are changed.

## Conclusion

Some tasks have been harder than expected. Working with innovative cutting-edge technology is always a moving target and challenges us with unknown unknowns which we tackle as they reveal themselves. This has resulted in some unexpected delays but a lot of progress has been made. Team Nimiq stays focused on delivering the next version of Nimiq and the new exciting products built around Nimiq OASIS. As always we appreciate having such a great community on our side accompanying us on this journey. Go Nimiq!

Pura Vida,

Team Nimiq
