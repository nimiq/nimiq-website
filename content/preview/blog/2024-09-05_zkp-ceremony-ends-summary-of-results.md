---
title: ZKP Ceremony Finalized! Summary of Results
description: This blog post provides a technical summary of the Ceremony, aimed at both the Nimiq Community and other crypto projects interested in using the results of Phase 1 for their own project-specific Phase 2 ZKP Ceremony.
slug: zkp-ceremony-ends-summary-of-results
publishedAt: "2024-09-05"
updatedAt: 2024-09-05T19:30:52+0000
authors:
  - Team Nimiq
image: /images/blog/zkp-ceremony-ends-summary-of-results/Ztm7mrzzk9ZrXDII_ZKPCeremonyEndsBlogpostv1.4.png
---

The Nimiq Network is steadily progressing toward its migration to Proof-of-Stake. Although the migration will officially occur at a specific block height, the groundwork began months ago. If you're curious about the different phases, they’re detailed [here](https://www.nimiq.com/blog/migration-process-to-nimiq-proof-of-stake/). One of the more time-consuming phases was the Zero-Knowledge Proof (ZKP) Ceremony, which started many months ago and concluded recently.

For those new to ZKPs, you can explore [Part 1](https://www.nimiq.com/blog/zero-knowledge-proofs-and-nano-nodes/) and [Part 2](https://www.nimiq.com/blog/zero-knowledge-proofs-and-nano-nodes-part-2/) of our blog series on Zero-Knowledge Proofs for more details. In brief, ZKPs in the Nimiq ecosystem enable browser clients to verify their balance on the blockchain by downloading small-sized proofs instead of the entire blockchain history. Prover nodes in the Nimiq Network generate these proofs using specific proving keys, while other nodes use corresponding verifying keys to validate them.

The ZKP Ceremony is a decentralized, trustless process that generates the initial proving and verifying keys. It’s a multi-party computation (MPC) effort, where multiple participants run guided computations to create the keys, thereby minimizing trust assumptions and preventing the creation of false proofs.

The Nimiq ZKP Ceremony took place from December 2023 to August 2024, involving 168 participants across two phases. The results from Phase 1 can be used by other crypto projects for similar ceremonies. This post will detail the process and offer suggestions for anyone planning their own ZKP Ceremony.

To learn more about both phases of the ZKP Ceremony, check out our blog posts on [Phase 1](https://www.nimiq.com/blog/nimiqs-zero-knowledge-proof-setup-ceremony-join-and/) and [Phase 2](https://www.nimiq.com/blog/nimiq-zkp-ceremony-phase-2-is-live/).

## Summary

Here’s a general summary of the entire process:

1. **Process Overview**: The ceremony was conducted in two phases, each with different goals. Contributors from around the world worked together to ensure the security of the generated keys.
1. **Support and Instructions**: We provided comprehensive instructions on our [Nimiq Forum](https://forum.nimiq.community/) and support during the entire process via our Discord server, where Nimiq team members were available to support the contributors.
1. **Phases**: Each phase had specific goals. Phase 1 focused on generating a dataset that participants could use for their own projects, allowing them to run only Phase 2 if needed. Phase 2 targeted generating the specific keys for our circuits.

## Results

As explained above, there are two independent phases, each with its own set of results. Phase 1 is for generating generic parameters for the ZKP circuits, called the Powers of Tau. These parameters are only specific to the cryptographic curve and ZKP proving system being used. They can be reused by other projects, thus this first phrase is the one that is relevant to the entire crypto space. Phase 2 then builds upon Phase 1, refining the parameters of the ZKP circuits and ultimately generating both proving and verifying keys for the Nimiq-specific use case. These keys need to be derived for each statement that is to be proven in zero-knowledge proofs.

**Phase 1: Powers of Tau**

The output of this phase can be used for either Groth16 circuits up to the size of the phase or universal proving systems such as PLONK and Marlin. As mentioned before, the results from this phase can be used by other crypto projects intending to perform similar ceremonies. Those interested are welcome to contact us via [Telegram](https://t.me/Nimiq), [Discord](https://discord.gg/Nimiq) or [X](https://x.com/Nimiq).

Here are the details of Phase 1 of the Nimiq ZKP Ceremony:

- Participants: 92
- Rounds: 9 (20 participants each)
- Timeline: January 23 - April 24

**Phase 2: Nimiq’s Circuits**

The participants contributed to refining the parameters of the Nimiq ZKP circuits and ultimately generated the proving and verifying keys.

Here are the details of Phase 2 of the Nimiq ZKP Ceremony:

- Participants: 76
- Rounds: 4 (20 participants each)
- Timeline: May 25 - July 26

**Attestations**

Attestations are _proofs_ that prove that a participant actually contributed to a specific phase. These _proofs_ use _beacon hashes_ from the Bitcoin blockchain, which are stored in the attestation repository. You can manually verify the commit dates by accessing the attestation repository [here](https://github.com/nimiq/ceremony-attestations).

The keys generated in the ceremony are the final result of the entire process and can be accessed as follows:

### IPFS (InterPlanetary File System)

IPFS is a decentralized file storage system that allows users to share and access files in a peer-to-peer network. The IPFS CID for the folder containing the keys is <code>QmUuSz4EFc9EAvRzz8FVAah7xh2huWtiU5vDgzkfR1gXMY</code>. If you don't have access to an IPFS node you can use a gateway to access the files via your browser (or other HTTP clients), such as:

- **Via Public Gateways**: For example, using [ipfs.io](https://ipfs.io/ipfs/QmUuSz4EFc9EAvRzz8FVAah7xh2huWtiU5vDgzkfR1gXMY/) or [dweb.link](https://bafybeidbrud57crri5xgdtvnipihzzdxjkghmebxlyseie5qha7sxwkj64.ipfs.dweb.link/) (this could be slow as these gateways may need to retrieve the files first if they don't have them on their local storage).
- **Via Our Own Gateway**: [Nimiq IPFS Gateway](https://ipfs.nimiq.io/ipfs/QmUuSz4EFc9EAvRzz8FVAah7xh2huWtiU5vDgzkfR1gXMY/) (which already has the files pinned to its local storage).

### BitTorrent

You have two options to download via BitTorrent:

- **BitTorrent File**: [Torrent File](https://repo.nimiq.com/torrents/nimiq-mainnet-zkp-keys.torrent)
- **Using a Magnet Link**: simply copy and paste <a href="magnet:?xt=urn:btih:2cc3ca7888b75f1c38f2c4013f6eb3631946e2e9&dn=nimiq-zkp-keys&tr=https%3A%2F%[2Ftorrents.nimiq.io](http://2ftorrents.nimiq.io/)%2Fannounce">this link</a> into your BitTorrent client. The magnet link is a URL that contains all the information needed for the client to download the files. After pasting the link, your client will connect to peers sharing the file and start the download process.

## Suggestions for Running a ZKP Ceremony

For those interested in running a ZKP Ceremony, we are happy to share our experience and the results from Phase 1. Some general suggestions for the entire process:

**Make a Test Run**: Conduct a test run with your team to identify and address potential issues before the actual ceremony. This will help you spot any problems early and be prepared to resolve them, ensuring a smoother process.

**Community Engagement**: Set up clear communication channels where participants can easily access information and FAQs. Have one or two team members available to answer any questions that come up. Active support will help keep everyone on track and informed.
**Technical Requirements**: Specify the technical requirements for participants, including hardware, software, and network needs. Make sure this information is readily available and easy to understand.

**Contributors' Responsibilities: **Ensure volunteers know their roles and tasks during the ceremony well. Outline what is expected, specify the tasks, and the importance of following the guidelines. Make sure the volunteers understand the expected time and effort.
**Participant Readiness**: Let participants know that coordination is key—having everyone prepared for their round at the same time helps things flow more smoothly. Provide clear instructions, comprehensive documentation, and troubleshooting tips to ensure everyone is ready.
**Clear Information and Guidelines**: Make sure all important information is clearly stated. Emphasize the need for participants to securely delete any sensitive data related to key generation. Providing detailed guidelines for every step of the process will help maintain security and clarity.
**Plan for Unforeseen Scenarios**: Be prepared for unexpected issues. Small delays or extending the duration of rounds may be necessary to ensure a successful ceremony. Flexibility can help manage these situations effectively.

## Verification of the Results

Each round was thoroughly verified before proceeding to the next. If you would like to verify the results or have any questions about this process, please feel free to contact us via our [Telegram](https://t.me/Nimiq) or [Discord](https://discord.gg/Nimiq) groups.

## Using the Results in Nimiq Proof-of-Stake

Thanks to the zero-knowledge proofs, light, browser, and full nodes can sync swiftly to the network. Prover nodes generate these proofs with a proving key –which each prover node downloads to their system– and light nodes then verify the chain's correctness using the corresponding verifying key.

The ceremony is the initial part, where contributors generate the proving and verifying keys. Prover nodes then utilize these keys to generate the ZKPs, more specifically, recursive zk-SNARKS. Instead of growing the proving time linearly with the chain, we use the proof of the previous election block to generate the proof for the current one. This way, we can recursively prove specific points within the blockchain.

### What's Next?

We are grateful to everyone who participated in the ZKP Ceremony and are thrilled to announce that Nimiq transition to PoS is now getting very close to happening. We are excited to share the results with our community and are open to discuss the results and process with anyone interested.

Thank you for your continued support and involvement. The journey to Nimiq PoS continues, and we look forward to the next steps!

Pura Vida
Team Nimiq
