---
title: Multisig Wallet App
description: A new app that allows you to share a wallet with your friends. Read on to explore all the possibilities of Multisignature transactions.
slug: multisig-shared-wallet
publishedAt: "2025-11-21"
updatedAt: 2023-11-23T22:11:20+0000
authors:
  - Team Nimiq
image: /assets/images/prismic/aR4h9mGnmrmGqDMU_MultisigblogpostHEADER.png
readingTime: 5
---

Since the beginning of crypto payments, multisignature has always been a very powerful yet developer-oriented feature. However, non-technical users can also find value in these. We are bringing the convenience of multisignature technology to the Nimiq Ecosystem through an easy and intuitive interface, allowing everyone to share control with a wallet that requires a group of people to agree whether or not to send a transaction, without even needing to have ever met in person.

The new Nimiq Multisig app now lets multiple users jointly control a wallet and sign transactions. You simply sign in with your Nimiq Wallet, create a Shared Wallet, and approve transactions with the Keyguard.

If you're curious and want to try it out, [here](https://multisig.nimiq.com) is the link. To learn more about the inner workings and possibilities of this new app, read on.

Let’s explore the Multisig app!

## How It Works

![create-screenshot](/assets/images/prismic/aR4lPGGnmrmGqDN3_Create.png)

With Nimiq Multisig, you can create as many Shared Wallets as you want and share control with other users. It only supports NIM for now, but we are open to supporting new currencies in the future. If you want to get support for a cryptocurrency, let us know [here](https://forum.nimiq.community/t/introducing-nimiq-multisig/). The funds of a shared wallet are only moved when the required number of signers approve them. Any user can sign in with their Nimiq Wallet, create a Shared Wallet, choose a wallet name, and set both the number of participants (2–16) and the number of signatures required to send a transaction (1–16).

![commit-screenshot](/assets/images/prismic/aR4jB2GnmrmGqDNC_Commit.png)

The wallet creator then invites others through a secure link tied to the invited account. The wallet only becomes active once all participants have accepted the invitation. Once all have joined, the shared wallet address becomes available and can be used to send and receive NIM. After that, anyone in the Shared Wallet can create a transaction, and all required signers must approve it before it is sent.

![sign-screenshot](/assets/images/prismic/aR4lW2GnmrmGqDN8_Sign.png)

When creating a transaction, you can choose an approval window of 2, 24, 72 (3 days), or 168 hours (7 days), and can optionally add a public message.

- **2-hour option:** the transaction is sent immediately after all approvals are collected
- **Longer windows:** the transaction is sent two hours before the deadline if it receives enough signatures

See Current Limitations below for details on the 2-hour option.

You can track progress in real-time from commitments to sending, and receive email notifications at each stage, after verifying your email address.

![sent-screenshot](/assets/images/prismic/aR4moWGnmrmGqDOi_Sent.png)

Know that we know more about the MultiSig App, let's jump right in and start using it! If you are interested in the technical details that are under the hood of the app, there is an in-depth explanation at the bottom.

## **Create → Commit → Sign → Send**

## How to Use the App

[You can watch the full tutorial on YouTube](https://www.youtube.com/watch?v=uDka0kokfe0).

Multisig works with an N-of-M setup. N-of-M means there are _m_ total key-holders, and you just need _n_ of them to approve it for it to go through.

1. Log in to the Multisig app with your Nimiq Wallet.
1. Create a Shared Wallet. You can have multiple Shared Wallets.
1. Set the wallet name, choose the participants (2–16), and specify the required approvals (1–16).
1. Send the secure invite links to the participants and wait for them to join. Verify your email address to get a notification when all participants have joined.
1. Add NIM from any Nimiq Wallet to the Shared Wallet.
1. Create a transaction. Anyone in the Shared Wallet can start one.
1. Approve the transaction:
1. Required signers first commit to it.
1. Once commitments are complete, signers sign it using the Keyguard.
1. Once all required signatures are collected and the due date is reached, the transaction is sent.

## **TECHNICAL ALERT! 🤖**

Moving into the technical realm, Nimiq Multisig uses the [MuSig2](https://eprint.iacr.org/2020/1261.pdf) multi-signature scheme on top of the Ed25519 elliptic curve used by the Nimiq blockchain. MuSig2 allows multiple participants to produce a single aggregated Schnorr signature that is indistinguishable from a standard Ed25519 signature. It ensures multisig transactions remain private and efficient while retaining the required cryptographic guarantees. It also hides which addresses are signers of the multisig, keeping the signer list private.

Schnorr signatures over the Ed25519 elliptic curve are already used throughout the protocol, including:

- Signing micro block headers
- Macro block proposals
- VRF seed chaining between blocks
- Authorizing validator transactions in the staking contract (deactivation, reactivation, retirement)

In Nimiq's implementation, MuSig2 runs directly over Ed25519 keys, reusing the same primitives as single signature accounts. Each multisig transaction requires two interaction rounds:

- **Commitments**: Each signer generates fresh nonce secrets locally and derives public commitments (curve points) from them. These commitments are shared with other signers, while the nonce secrets are sent encrypted to the server, allowing the user to continue the signing process from another device, if desired. Only the Keyguard with the correct account can decrypt them.
- **Approval**: After all commitments are collected, each signer locally uses their nonce secrets (which are never revealed), private key, the transaction, and the aggregated commitment to compute a partial signature. Those partials are then verified and combined into a single Schnorr signature under the aggregated public key. In the app, this is the cryptographic approval of the transaction.

## Current Limitations

## **Timing**

In Nimiq, every transaction has a validity window of about two hours (~7'200 blocks) during which it can be included in a block. Because of this, a multisig transaction can only be sent at most two hours before its due date, as broadcasting it earlier is not possible.

When you set the due date to a minimum of two hours, the approval window and the validity window are the same. As soon as all required signatures are in, the transaction is valid to send and is broadcast immediately.

For longer due dates (24, 72, or 168 hours), signatures can be collected at any time. However, the transaction will only be sent automatically at most two hours before the due date, when its validity window begins. If not fully signed by the due date, it expires.

## **Fiat Display**

Transaction amounts are displayed only in NIM, with no fiat currency conversion at the moment. Let us know what you think and if you feel fiat currencies are an interesting feature to add.

Now that you know how the Multisig app works, [try it out](https://multisig.nimiq.com)!

Let us know what you think! We're looking for all kinds of feedback, from bug reports to feature suggestions. You can join the conversation on our [Forum](https://forum.nimiq.community/t/introducing-nimiq-multisig/2337) to share your thoughts.

## Disclaimer

None of the statements must be viewed as an endorsement or recommendation for Nimiq, any cryptocurrency, or investment product. Neither the information, nor any opinion contained herein constitutes a solicitation or offer by the creators or participants to buy or sell any securities or other financial instruments or provide any investment advice or service. All statements contained in statements made in Nimiq's web pages, blogs, social media, press releases, or in any place accessible by the public, and oral statements that may be made by Nimiq or project associates that are not statements of historical fact, constitute "forward-looking statements". These forward-looking statements involve known and unknown risks, uncertainties, and other factors that may cause the actual future results, performance, or achievements to be materially different from any future results, performance, or achievements expected, expressed, or implied by such forward-looking statements. The final decision of implementing any changes to the Nimiq protocol, including its parameters, always remains with the decentralized node operators who agree what version and parameters to deploy and support.
