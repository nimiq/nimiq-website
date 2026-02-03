---
title: Nimiq OASIS Public Beta
description: NIM and BTC can now be bought directly by bank transfer.
slug: nimiq-oasis-public-beta
publishedAt: "2021-02-18"
updatedAt: 2022-04-20T13:34:48+0000
authors:
  - TEAM NIMIQ
image: /assets/images/prismic/5f818a32-e894-4fb4-bbe4-7c1c4de14a78_blog_nimiq-oasis-public-beta_1.png
---

Almost four years ago, Nimiq was founded with a clear-cut goal in mind: Make crypto easy and available to everyone.

One fundamental aspect was the in-and-out of crypto. Without an easy way to buy and sell the new internet money, there would be no mass adoption.

We are now excited to present the result of years of original research, development, and regulatory finesse: **Nimiq OASIS is finally here! **

Someone entirely new to crypto can create a wallet and buy NIM and BTC directly from their bank account:

- In under five minutes
- Without registration
- At only 1,25% fees

## Public Beta: What’s ready and what’s coming soon

While the team is enthusiastic about the release, let’s have a look at what just became available and what is yet to come.

**One thing upfront:** Beta does not mean that a user is at any risk of losing funds. Using it is completely safe (see "A word on the Tech" below).

Initially, only buying crypto is available. Selling will be released in the coming weeks.

Through the partnership with German TEN31 Bank, the first instance of OASIS supports Euro for any [SEPA Instant capable](https://www.ebaclearing.eu/services/instant-payments/participants/) bank accounts. And already, the first addition is underway: Nimiq is paving the way for OASIS Latin America, with the setup and integration of a Costa Rican payment service provider. Perspectively, we aim to extend OASIS to support every major currency.

Right now, users need a European bank account that supports instant transactions. This standard is widely supported already. Banks still missing it are likely to implement it in the near future.

Buying, selling and also swapping cryptocurrencies is initially limited to 500$ (~400€) per transaction and 1000$ (~800€ ) per 30 days rolling window. Increases to these limits may become available going forward, but will likely require additional authentication (KYC). While supporting larger swaps is certainly on our roadmap, we believe current limits to already enable most individuals to participate in the cryptoverse.

On the crypto side, buying NIM and BTC is supported. We plan to support other crypto currencies like ETH or LTC for usage outside the Nimiq Wallet.

The public beta is fast already but will see great improvements in the future. For NIM swaps, Nimiq 2.0 will be the most significant upgrade of transaction speed. On the banking side, more optimized APIs are expected to have a considerable impact as well, reducing time spent waiting for EUR transactions to register.

## A quick look at the entities involved

Buying and selling crypto with EUR is enabled not by one entity, but by the interplay of three main actors. Here’s a small run-down of who does what.

**[Nimiq OASIS](https://nimiq.com/oasis)** is the underlying protocol and the actual innovation. It simulates blockchain behavior for off-chain assets. When implemented into – for example – a Euro bank, Euro becomes programmable. This is essential for non-custodial buying and selling since it allows something entirely new: Euro smart contracts.

**[TEN31 Bank](https://ten31.com/) **is a fully licensed German Bank of which Nimiq is a shareholder. It is the first entity to implement the protocol and offer an OASIS instance for Euro. Whereas the blockchain executes a crypto smart contract, the bank executes the fiat smart contract. Whereas the blockchain executes a crypto smart contract, the bank - as the highest form of reliability in fiat - executes the fiat smart contract.

**[Fastspot](https://fastspot.io/)** is a liquidity service created by Nimiq that is necessary for delivering a good user experience. Atomic fiat-crypto swaps would be possible without it, but who will sell to you at the exact moment you want to buy? Fastspot provides liquidity and sets up the verifiable smart contracts for the Atomic Swap.

## A word on the tech

For a more detailed explanation, we recommend checking out nimiq.com/oasis. In short, the system is inspired by the established concept of Atomic Swaps and Hashed Timelock Contracts (or HTLCs for short).

HTLCs are specialized smart contracts that, once funded, can only do one of two things:

1. They release their funds to a specific address once a condition is met; or
1. They return their funds to where they were sent from after a preset time expires

The condition for 1) is the creation and funding of a mirroring contract.

While this is not new for crypto in general, the innovation lies in enabling fiat-funded HTLCs, thus allowing crypto-to-fiat Atomic Swaps. A NIM HTLC and an EUR HTLC can now be interlinked. The assets can be swapped without any central entity ever holding them at the same time. Additionally, such swaps are super secure since the worst-case scenario for any involved party is simply getting their asset back (as explained in point 2).

## The Fees - or “How NIM holders will profit”

As initially stated, we deem this solution to not only benefit Nimiq, but cryptocurrencies in general. OASIS is not inherently connected to NIM as a coin or the Nimiq ecosystem in general.

To create a direct link between OASIS based solutions and NIM, all of OASIS’ profits will be used to buy NIM. This is expected to increase the scarcity and create demand that will increase with OASIS’s usage.

The initial fees will be 1% for OASIS and 0,25% to cover Fastspot’s operating costs. Keep in mind that, since we are talking about actually moving coins on-chain, network fees apply as well.

## This is just the beginning

Nimiq now has technology at hand that can be leveraged way beyond the wallet. To allow as many users as possible to profit from the easiest way in and out of crypto, Nimiq aims to roll out a range of services and products based on OASIS.

Here’s an incomplete list of what we envision:

- **A standalone service:** A straightforward solution to buy and sell with any wallet.
- **A widget and API: Fastspot will provide solutions to implement atomic swapping, buying and selling into any product.**
- **Checkout and Ecommerce services: With OASIS, businesses will be able to accept crypto while receiving fiat.**

We would like to thank all Nimiq supporters for your patience and trust in the project. More than ever we are committed to making cryptocurrency easy and available to everyone.

Pura Vida,

Team Nimiq
