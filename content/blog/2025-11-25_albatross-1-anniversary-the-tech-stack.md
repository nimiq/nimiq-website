---
title: "Albatross Anniversary: The Tech Stack"
description: As part of our three-part anniversary series, this post continues with a look behind the scenes at how Albatross’s technologies work together.
slug: albatross-1-anniversary-the-tech-stack
publishedAt: "2025-11-25"
updatedAt: 2025-11-25T16:16:33+0000
authors:
  - Team Nimiq
image: /assets/images/prismic/aR0ol2GnmrmGqAVc_2TheTechStackBLOG.png
---

Since launch, Albatross has proven itself to be an efficient and robust Proof-of-Stake blockchain. It has successfully validated more than 30 million blocks, distributed **hundreds of millions of NIM** in rewards, and welcomed **+70 new validators**, including **21 pools**. There are many things to celebrate on this first anniversary, and the perfect opportunity to look beneath the surface and explore how the technologies that make Albatross work together to make it fast and reliable.

As part of our three-part anniversary series, this post continues with a look behind the scenes at how Albatross’s technologies work together.

### The Layers of Nimiq Proof-of-Stake

A blockchain is a system made of several layers. Each layer handles a specific part of a process, from how nodes connect to how information is stored and verified. In Albatross (Nimiq’s Proof-of-Stake algorithm), these layers were designed to stay compact, modular, and verifiable.

![Nimiq's core components](/assets/images/prismic/aRug67pReVYa4kra_table-albatross.jpg)

Together, these layers form the foundation of Albatross. The following sections cover how they work and how their design choices interact to create an efficient system.

### Consensus and Logic

Albatross follows an optimistic approach: most of the time, the network moves fast and efficiently, but when coordination is needed, it falls back into a more conservative finalization process.
**Micro blocks** carry transactions every second, maintaining throughput. **Macro blocks** occur periodically to finalize the chain, update the validator set, and mark synchronization points.

However, if a selected producer fails to build a valid micro block within the slot’s timeout, validators coordinate to skip that slot. They produce a **skip block**, a micro block without transactions, backed by an aggregated BLS proof that the network agreed to advance. This ensures progress without long gaps.

Macro block finality follows **Tendermint rounds**, where validators exchange votes until a supermajority is reached. **Handel aggregation** and **BLS multi-signatures** compress these votes into a single proof, reducing communication overhead.

For each slot, a **VXEdDSA-based** **VRF** over **Ed25519** keys selects the next producer; the output is unpredictable and publicly verifiable, preventing manipulation and keeping the election fair.

### Data and Storage

Albatross stores blockchain data, namely blocks, accounts/state, and history, in MDBX (libmdbx), an embedded, serverless key‑value database that uses memory‑mapped files for high performance.

For verifiability, it uses Merkle‑based structures:

- a **Merkle‑Radix trie** for accounts and staking contract state, providing inclusion and exclusion proofs and,
- a **Merkle Mountain Range** (MMR) that stores historic transactions in an append‑only format for efficient history proofs.

### Networking

Albatross nodes communicate via **libp2p**, a peer-to-peer networking framework that handles peer discovery, messages and data propagation. It also uses **Gossipsub** for efficient broadcast of blocks, transactions, and proofs. Nodes relay messages only to selected peers, keeping bandwidth stable as the network grows.

Peer discovery uses **Kademlia**, a distributed hash table (DHT), to find peers without a central server. Validator records in the DHT are signed and verified against on‑chain staking keys before they participate in consensus.

Communication happens over **WebSocket** connections, enabling compatibility with browsers and web-based tools – perfect for the web-native approach. RPC in Albatross supports both HTTP and WebSocket connections. The former for specific data requests and the latter for continuous updates. The Nimiq Wallet communicates directly via WebSockets to interact with the network in real time.

### Cryptography and Zero Knowledge

Cryptography is the glue in Albatross. It secures validator identities, enables signature aggregation, and provides mathematical proofs for lightweight clients.

**BLS signatures** enable validators’ votes to be merged into a single proof of consensus. **Ed25519 keys** identify peers at the networking layer. **Blake2b**/**Blake2s**, and **SHA-256/512** generate the hashes that link accounts, blocks, and transactions. **VRF randomness** guarantees unpredictability, prevents manipulation, and ensures fair validator selection.

Beyond signatures, Albatross integrates **zero-knowledge proofs** through **Arkworks** and **Groth16**, using the **Poseidon hash** and **Pedersen commitments** inside circuits based on the **MNT4/6** elliptic curves. These recursive proofs allow light clients to verify the blockchain’s progress with a single proof rather than downloading the entire history.

### What Makes Albatross, Albatross?

Each major component of Albatross was chosen with a clear goal: to keep the protocol fast, predictable, and verifiable without adding unnecessary complexity. On top of that, it’s the combination of the tech stack that defines the protocol. Together, they create a system where each piece reinforces one another.

- **Handel** + **BLS aggregation** reduces communication overhead by combining multiple votes into a single signature, supporting large validator sets.
- **VRF randomness** keeps leader selection fair and unpredictable.
- **Tendermint** finality makes confirmed blocks deterministic and easy to synchronize.
- **Macro** and **micro** block dual system balances throughput and stability.
- **Zero-knowledge** verification enables trustless validation for web clients.

These choices make Albatross efficient and accessible while maintaining the guarantees expected from a secure Proof-of-Stake system.

### Web Native by Design

![nodes-in-different-environments](/assets/images/prismic/aR9O4mGnmrmGqFsx_whitepaper_networkPNG.png)

From the beginning, Nimiq was built for the web. The goal was for anyone with a browser to connect to the network directly. No plugins, complex setups, or special environments. Albatross carries that idea into its protocol. This means the same protocol that powers validators can also be accessed from web browsers or mobile devices, allowing users and applications to interact directly with the network.

### Albatross in Numbers

- Average block time: ~1 second
- Active validators: 38
- Network uptime: 99,71%

Visit the [Nimiq Validators Dashboard](https://validators-api-mainnet.pages.dev) for real-time validator data.

### Looking Ahead

Next, we are analyzing potential improvements and additions to the Nimiq Blockchain to increase its usability and enable its use in products designed for specific payments.

Pura Vida,

Team Nimiq
