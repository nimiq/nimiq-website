---
title: "Research Collaboration: Albatross"
description: An optimistic consensus algorithm
slug: research-collaboration-albatross
publishedAt: "2019-03-06"
updatedAt: 2022-04-20T13:30:08+0000
authors:
  - TEAM NIMIQ
image: /images/blog/research-collaboration-albatross/09cfdc36-bce9-43c5-8f3b-17e2f3d31863_blog_research-collaboration-albatross_2.png
---

Team [Nimiq](https://nimiq.com/) is proud to present Albatross, the outcome of our research collaboration with [Trinkler Software](https://trinkler.software/). Albatross is a Proof-of-Stake consensus algorithm that is able to achieve a performance close to the theoretical maximum for single-chain Proof-of-Stake consensus algorithms. While a [technical description of the protocol](https://arxiv.org/abs/1903.01589) has been published, this blog post strives for a lighter and easy-to-understand overview.

**It is important** to stress that Albatross is a consensus algorithm only. As such, it does not define the functionality built on top of it, but is only a single building block of a blockchain protocol. While Nimiq is evaluating the use of Albatross for its next generation protocol, no decisions have been made. More details about our plans for Albatross are available at the end of this post.

## What is Proof-of-Stake?

In a Proof-of-Stake (PoS) based consensus algorithm, the node eligible to append the next block is chosen proportional to the stake it has in the system. That makes block production very cheap compared to Proof-of-Work (PoW) based algorithms. Misbehavior (e.g. in the form of forks) is often punished by *slashing* the stake of the misbehaving node and burning or redistributing it.

The three most important benefits of PoS over PoW are:

- *a drastically reduced energy consumption: *there is no need to perform labor that is highly energy consuming to secure the blockchain,
- *reduced risk of centralization:* specifically, economies of scale are less of an issue in PoS, and
- *the equivalent of* *51% attacks being more expensive:* misbehaving nodes permanently lose their stake, compared to reusable hardware in PoW.

## What does “optimistic consensus algorithm” mean?

We describe Albatross — our novel blockchain consensus algorithm — to be *optimistic*.

This term does **not** mean that we sacrifice any security but means that it is inspired by *speculative *Byzantine-fault-tolerant (BFT) algorithms.

*Classical* BFT algorithms provide consensus in distributed systems while considering a limited number of malicious or Byzantine actors. One of the most prominent examples of such an algorithm is PBFT, which, e.g., the Tendermint cryptocurrency is leveraging at its core.

*Speculative* BFT algorithms are an advancement over standard BFT algorithms. They allow for drastic performance increases in the case of no malicious actors being present. This is the so-called *optimistic* case and where our description finds its origin. In case Byzantine actors are present and try tampering with the protocol, others can notice and switch the protocol into its slower and more conservative mode, offering the same security guarantees as standard BFT protocols.

Hence, in the best case, optimistic consensus algorithms are able to perform much better than classical ones. During an attack case, optimistic algorithms still have a performance similar to standard ones.

## The Albatross protocol

In Albatross, those nodes that are responsible for producing new blocks are called *validators*. Anyone who has a stake in the system can volunteer as a validator by depositing his/her stake as security that can be *slashed*.

Block production in Albatross is divided into *epochs*. As the following figure shows, each epoch consists of a constant number of *micro blocks* (four micro blocks in the example below) followed by a *macro block*. *Micro blocks* contain the transactions and have a single block producer that is randomly chosen from the *validators*. While anyone can volunteer to be a validator, the actual set of validators in a given epoch (the *active validators*) is chosen by the *macro block* of the preceding epoch.

![](/assets/images/prismic/4b3bc20b-2d76-4dc9-86a8-a81b5c6ab688_blog_research-collaboration-albatross_1.png)

In our example, block number 0 determines the *active validators v_0,…,v_k* for the epoch from block 1 to block 5.

To be able to randomly choose the next block producer from the list of validators, each block contains a random beacon, depicted above by r_i. The block producer of a block uses a so-called *Verifiable Random Function* (VRF) to produce the next random value r_i from the previous value r_{i-1}. Every other participant can then verify the correctness of the next random value.

Given these random beacons in each block, every participant of Albatross is then able to determine the next block producer v_{σ(r)} from the list of *active validators*.

The production of *micro blocks* is thus as simple as the selected block producer putting transactions into a block, signing the block cryptographically, and sending the block to the network.

The production of *macro blocks* is a bit more involved but happens much more rarely. *Macro blocks* are built using the classical PBFT protocol. To this end, the chosen block producer — or in this case rather a proposer — constructs the next random value and, from this value, determines the new list of *active validators* for the next epoch. The list of validators is chosen from all volunteers weighed by their stake and based on the random beacon. The block proposer then publishes its proposal, and all other active validators vote on it in two rounds. *Macro blocks* do not contain any transactions.

There is no notion of targeted block time between blocks, and thus blocks can be produced almost as fast as the network allows.

While the explanation above only covers the optimistic case, the protocol remains secure under the assumption of at most ⅓ of the validator list being Byzantine actors. These actors, however, can temporarily slow the chain and put block production into the more conservative mode. Byzantine actors can mainly trigger two mechanisms: (1) forks, which cause the next block producer to pick one of the conflicting blocks and allow validators to *slash* the malicious validator’s stake, and (2) delays, which cause another validator to produce the block instead.

A more detailed explanation of these cases can be found in the [technical paper](https://arxiv.org/abs/1903.01589).

## Consistency vs. availability

An interesting trade-off to make when designing such a protocol is the one between consistency and availability. Consistency describes the property that all participants of the protocol agree on the same, most recent value. Availability describes the property that participants cannot be stopped from learning the correct, most recent value indefinitely.

The [CAP theorem](https://wikipedia.org/wiki/CAP_theorem) now states that, during a network partition, these properties cannot be achieved at the same time.

Bitcoin, for example, favors availability over consistency. In case of a network split, both networks can continue to live and contain potentially conflicting transactions (e.g., a double spend). If the network recovers from the split, however, only a single history will be accepted.

Albatross favors consistency over availability. In case of a network split, either a single one of the network partitions can continue to operate or none (depending on the size of the partitions). However, there will never be an eventually incorrect view on the most recent state. If the network recovers from the split, the protocol will continue to operate normally again.

## Next steps

Now that the technical description of Albatross is published and the protocol was presented by Reto Trinkler in the context of [Katallassos](https://katallassos.com/) at the EthCC’19 in Paris, these are the next steps to follow:

We started to build a [simulator for the Albatross protocol](https://github.com/nimiq/albatross-simulator) to evaluate its performance in large scale networks. Currently, this simulator only covers the base protocol without considering optimizations and Byzantine participants. We plan to extend this simulator and gain more insights into real-world operations of Albatross.

In the meantime, we are also looking into potential optimizations for Albatross. These optimizations include the usage of [Handel](https://github.com/consensys/handel), which is a fast multi-signature aggregation protocol. Among other improvements, we are also considering the applicability of Verifiable Delay Functions to reduce communication in case of non-responding block producers.

Finally, when these necessary prerequisites demonstrate the desired results, we will further assess the feasibility of integrating Albatross in Nimiq. This step would also include details such as block rewards, HTLCs, vesting contracts, and staking pools. We will then build a testnet running Albatross.

Albatross could mean an immense increase of Nimiq’s performance while drastically cutting its energy consumption. While a successful implementation would bring fundamental improvements to Nimiq’s core, all of its implications have to be evaluated and considered thoroughly.

Team Nimiq would make it its priority to allow for a smooth shift to a potential non-PoW future of Nimiq that we believe everybody would ultimately benefit from.
