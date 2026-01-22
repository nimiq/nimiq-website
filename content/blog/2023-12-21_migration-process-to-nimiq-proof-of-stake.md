---
title: Migration Process to Nimiq Proof-of-Stake
description: As the Nimiq network transitions to a Proof-of-Stake consensus mechanism, the journey is marked by significant developments and milestones. With a commitment to transparency and guidance, the transition is designed to be smooth and secure for all involved. Read on for an in-depth description of the process.
slug: migration-process-to-nimiq-proof-of-stake
publishedAt: "2023-12-21"
updatedAt: 2024-03-29T09:38:22+0000
authors:
  - Team Nimiq
image: /images/blog/migration-process-to-nimiq-proof-of-stake/da5c9b44-bf45-4e5f-a07d-4bceb1369a13_Group_61.png
---

Hello Nimiq Community,

The topic at hand is the much-anticipated shift from Proof-of-Work to Proof-of-Stake. This transition is not merely a change in how transactions are validated and blocks are created; it's a new era for the Nimiq ecosystem, fostering a more inclusive and environmentally conscious network. For those who have been part of the community since its inception, this change represents a realization of long-term goals and vision. For newcomers, it's an invitation to be part of a forward-thinking and adaptive community.

This article aims to shed light on the intricacies of the migration process, detailing the steps and actions required for NIM holders and the broader community. To set the stage clearly:

- Only users who want to actively participate in the transition process by registering as validators or pre-staking to a registered validator are required to act upon the steps outlined below.
- Participants aspiring to be validators at the inception of the Proof-of-Stake chain, or those interested in the migration process, do read on.

The migration will proceed through distinct stages:

![](/assets/images/prismic/b92ff7a1-517f-4a42-b3a1-1339153ac2ab_community_voting_article_46_.png)

## Phase 1: Registration

![](/assets/images/prismic/5e12d31c-d080-4f6e-9ffc-23f73f2f0f74_community_voting_article_47_.png)

The migration starts with the registration phase on the PoW chain, where users can register as validators for the upcoming PoS blockchain. This phase is set to compile the initial validator list of the PoS chain. The first phase will run for a predetermined time window, denoted by a fixed number of blocks. In this window, each aspiring validator sends a set of transactions carrying the validator's specific data. Committing to that data by sending the validator minimum deposit will then make them eligible to become a validator for the transition. Registering as a validator is a one-way ticket to the PoS chain, and there is no option of withdrawing the deposit. Furthermore, failure to fulfill the validator duties **will result in penalties**, emphasizing the commitment required in this role.

## Phase 2: Pre-stake

![](/assets/images/prismic/3093f596-b985-4105-8fb5-7d8f2f47c684_community_voting_article_47_.png)

Following the registration phase, the network will enter the pre-stake phase within a specified block window. This stage is meant to register stake delegation to the validators, who have pre-registered in Phase 1. Any user can delegate their NIM to any registered validator, allowing them to participate in the consensus and earn rewards without direct (technical) involvement. Validators can also increase their stake by pre-staking additional NIM to their own validator address or to other validators’ addresses. It is important to note that pre-stake transactions are final until the Proof of Stake chain is launched. There will be no opportunity to withdraw or reallocate staked NIM until the completion of the migration.

A new feature will be added to the wallet, enabling users to easily execute pre-stake transactions to a curated list of pre-registered validators. A tally of all allocated stake will be published once this phase concludes.

## Phase 3: Activation

![](/assets/images/prismic/7b80b6a5-211d-4ee4-ad69-4b0905752151_community_voting_article_50_.png)

The culmination of the migration is the activation phase. During this stage, pre-registered validators indicate their readiness for the PoS transition through a specific transaction. This phase starts at a specific block height which is then followed by an activation window. This window concludes in a block number that neatly aligns with an election block number on the PoS chain. If at least 80% of the allocated stake signals readiness within an activation window, the corresponding block is designated as the transition block.

![](/assets/images/prismic/a50b68bb-1ebe-47d8-ba35-720e180e25f0_community_voting_article_51_.png)

The network will then snapshot its state to generate the genesis block of the PoS chain, ensuring continuity and a seamless transition. Should the first activation window not meet the readiness criterion, subsequent windows will open until the 80% threshold is reached, each spanning a period equivalent to a day's worth of PoW blocks.

Upon reaching 80% readiness, the transition block state is captured to initiate the genesis block of the PoS chain, mirroring the block number and state to ensure a smooth transfer. The transition from Proof of Work to Proof of Stake is not merely a change in consensus mechanism. It involves the meticulous capture of the entire PoW state, converting it into readable data on the PoS chain. The validators' deposit and the delegated stake will transition into the PoS chain. Preservation of every transaction and account is ensured in this process.

## Phase 4: Launch of Nimiq PoS

By this point, validators will then abide by a waiting period for confirmations within the PoW chain to ensure that the state of the transition block is final. The genesis block will then be generated with the state captured from the transition block.

![](/assets/images/prismic/79507912-3478-4ea7-866e-30f242678997_community_voting_article_52_.png)

### **After this, the PoS blockchain officially launches, and validators start the block production as per the Albatross protocol specification. **🎉

If some miners and users want to keep using the PoW chain even after launching the PoS chain, they can continue doing so. It is important to note that for the migration, only the transition block is considered the latest state of the PoW blockchain. This block serves as the _Snapshot from PoW_, capturing the state of the network at the moment of transition. Moving forward, the PoS chain will operate independently from the previous PoW chain.

This marks a pivotal evolution for Nimiq, and more comprehensive details will be released to ensure community members are well-informed and prepared. The enthusiasm and support from the Nimiq community have been instrumental in this journey, and as the network approaches this new chapter, the anticipation and collaborative spirit are more palpable than ever. We can’t thank you enough for your support.

Pura Vida,

Team Nimiq
