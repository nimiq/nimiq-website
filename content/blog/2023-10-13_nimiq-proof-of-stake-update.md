---
title: Nimiq Proof-of-Stake Update
description: In order to keep the Nimiq community updated on the ongoing progress regarding Nimiq Proof-of-Stake, we want to first take some time to delve into the various components of the Nimiq Blockchain, shedding light on their functionalities. Through this update, we hope to offer a clearer picture of our current stage of development.
slug: nimiq-proof-of-stake-update
publishedAt: "2023-10-13"
updatedAt: 2023-10-13T15:42:07+0000
authors:
  - Team Nimiq
image: /assets/images/prismic/8df31ed9-8bd6-49ef-a9c7-8f4b534d99cf_pos_update_231005.jpg
---

The Nimiq Proof-of-Stake Testnet was[ unveiled in Q1 of this year](https://www.nimiq.com/blog/nimiq-proof-of-stake-testnet-release/). This release signals the implementation of all major features and the network's stable operation under friendly conditions. Currently, we are focusing on handling unexpected conditions and furthering security and optimization efforts.

Nimiq Proof-of-Stake continues to evolve towards its public release; to better update you about this intricate topic, we would like to first examine its main building blocks and their present status.

### Validators and stakers

Validators are the Proof-of-Stake block producers. A validator signals their willingness to participate in the block production by allocating a portion of their funds as stake. The higher its total stake, the higher the probability of being elected. Likewise, the higher the stake, the greater the number of slots assigned to the validator.

A set of slots is used to determine the block producers. They are allocated to a validator based on their stake. At every block, a slot is randomly picked to produce the next block, and the validator assigned to it then proceeds to produce it. Slots are also used to cast votes for macro blocks and skip blocks, which will be explored later.

A participant who does not have the resources or knowledge to become a validator can instead sign up as a staker. A staker delegates its funds to a validator, which produces and validates blocks on its behalf. While stakers don’t need to be online to receive rewards, they are subject to punishment if their validator misbehaves and cannot withdraw their stake until their validator completes the punishment period. But even in such a situation, stakers do not lose their stake. Additionally, validators make the reward payment to their stakers off-chain.

### Blockchain Overview

The Nimiq PoS blockchain is structured into several subsets of blocks called epochs and batches. An epoch consists of multiple batches. An epoch always ends with a closing election macro block. While, during an epoch, the set of validators remains constant, the election macro block selects a new set of elected validators for the following epoch. Batches consist of micro blocks and a closing checkpoint macro block, like in the following image.

![](/assets/images/prismic/8f5821b9-d5b4-400b-b3b0-dbf0ea6b0948_community_voting_article_5_.png)

Let’s analyze both in more detail.

### Micro blocks

Micro blocks are produced by a selected validator and are the blocks that contain user-generated transactions. If a validator does not produce a micro block in the expected time, the validator list oversteps and creates a skip block in the expected micro block’s place. Unlike a regular micro block, a skip block does not include transactions and is signed by over two-thirds of the validators of the current epoch. This block replaces the micro block, thus ‘skipping’ past it.

### Macro blocks

After a set amount of micro blocks has been produced, a macro block is added to finalize the batch. A randomly selected leader proposes macro blocks, and the remainder of the validator list vote on the proposal under a two-step voting process. The macro block is added to the chain upon an agreement of more than two-thirds of the validator set. Validators cannot split their votes so always vote with all of their slots, having greater voting power in the case of having a large number of slots.

There are two types of macro blocks: election blocks provide periodical finality and renew the validator set for the upcoming epoch, and checkpoint blocks provide finality but retain the validator set.

### How do we deal with malicious behavior?

Validators are rewarded for participating in the block production and penalized if they fail to contribute according to the consensus. Penalties are distinguished based on the severity of the offense.

For minor offenses, like delaying the block production, the slot responsible is deactivated and its rewards burned. More severe offenses on the other hand incur locking the validator, including all of its slots, in what is referred to as a jail state, where they remain for a significant amount of time. During this period, the validator cannot be re-elected, and all its rewards are burned.

#### Impact on stakers

The jail period also affect the validators’ stakers, as the locking period for the staker's stake matches with the validator's locking period. Once the validator is released, stakers can either maintain their stake along with their validator or opt to remove it once the jail period ends if their stake remains inactive.

### Accounts and Transactions

There are four distinct account types: Basic accounts, Vesting contracts, HTLC contracts, and the singular staking contract. The account tree hosts all accounts and contracts, documenting their balances and, where applicable, additional contract-specific data.

For regular users (non-validators), transactions are your only way to interact with the blockchain. Transactions are therefore used not only for regular transfer of value but also for native functions like signing HTLCs (for Atomic Swaps), creating and redeeming Vesting contracts, initiating stakers, and more.

## Node Types

Participants can engage in the Nimiq Proof-of-Stake network through various node types, each boasting different features and resource requirements:

**History Nodes: **These nodes possess complete transaction history knowledge. In Nimiq Proof-of-Work, this type of node was referred to as a "Full node", and even though the name has changed in the Proof-of-Stake protocol, it continues to act as a keeper of the entire transaction history.

**Full Nodes:** These nodes maintain essential information needed for block validation and production. In the transition from Nimiq PoW to Nimiq PoS, what was once known as a "Light node" has been renamed to "Full node", yet it retains its core function of maintaining all vital blockchain information.

**Light Nodes: **Light nodes quickly sync with the Blockchain since they only request details relevant to their accounts. While browsers are the typical platforms for light nodes, servers can also function as such. Previously in Nimiq Proof-of-Work, this kind of node was labeled a "Nano node".

### Browser Nodes

Utilizing the same Rust codebase as the standard client, the Nimiq web client swiftly syncs and serves as a network node capable of directly transmitting transactions and getting verified blockchain data.

## Nimiq Zero Knowledge Proof Implementation

The Nimiq Proof-of-Stake implementation utilizes recursive Zero Knowledge Proofs (ZKPs) to maintain constant data size for blockchain syncing, thereby enhancing speed and efficiency. If you want to learn more about ZKPs, you can read the series of blog posts we wrote on this topic:[ Intro to Zero Knowledge Proofs Part 1](https://www.nimiq.com/blog/zero-knowledge-proofs-and-nano-nodes/) and [Part 2](https://www.nimiq.com/blog/zero-knowledge-proofs-and-nano-nodes-part-2/).

In general, Zero Knowledge Proofs are a concept that allows one party (the prover) to prove to another party (the verifier) that a statement is true without revealing any information beyond the statement itself. In other words, it’s a method to prove something without revealing the actual secret. Recursive ZKPs enhance efficiency and scalability by breaking proofs down into smaller sub-proofs.

The proof system that Nimiq utilizes is grounded in zk-SNARKs. SNARK is an acronym for ‘succinct non-interactive argument of knowledge,’ and a recursive SNARK is a proof that verifies another SNARK in turn. SNARKs are a form of zero-knowledge proof that requires no interaction between the parties involved. They are succinct, meaning the verifier can quickly check a proof with a straightforward request to the prover.

Nimiq’s blockchain includes a special node responsible for generating these proofs - the prover node. While verifying ZKPs can be done quickly, generating them is resource-intensive and demands high computational power. Full or history nodes can facilitate this effort by enabling the prover node feature in their configuration.

With the incorporation of this technology, Nimiq can now sync the blockchain without necessitating the download of the entire blockchain. This synchronization is possible as the current state of the blockchain can be validated by proving that validators have produced the blocks in accordance with the consensus rules. Furthermore, this approach significantly reduces the amount of storage space required on the user’s device, a particularly crucial factor for mobile devices. This enhancement is a significant stride forward in user experience, making the Nimiq platform easier and faster to use.

Nimiq's ZKPs enable users to sync up to the latest election block. A ZKP is approximately 1 kilobyte in size, and its verification process takes about 600ms in a modern browser. On the other hand, the process of creating a proof, or proving, is more time-intensive. Currently, it takes about 6 hours to generate a ZKP for a new epoch. These proofs are formulated and provided by prover nodes within the network.

## Outlook until Mainnet

The testnet provides the community with an opportunity to explore Nimiq Proof-of-Stake’s functionality on a continuously operating chain. As community developers base their projects on the current code and new network, we invite everyone to push the network to its limits and identify potential security vulnerabilities. Team Nimiq is dedicating time and resources to strengthen the protocol and implementation, the [ZKP public bug bounty program is currently open](https://www.nimiq.com/bug-bounty-pos/) for submissions and we will open up the scope to include a wider section of the code base shortly. We aim to present a Blockchain Network that is a Mainnet Release Candidate after thorough testing.

We appreciate your continued support and participation in this journey. Stay tuned to our [social media channels](https://twitter.com/nimiq) for more exciting updates coming your way.

Pura Vida,

Team Nimiq
