---
title: Nimiq Progress Report
description: February 2021
slug: nimiq-progress-report
publishedAt: "2021-02-28"
updatedAt: 2022-04-20T13:06:37+0000
authors:
  - TEAM NIMIQ
image: /assets/images/prismic/0451a3b2-9427-4405-8873-2849fe1b2e3a_blog_nimiq-progress-report_1.png
---

Last December, we shared an update on the recent progress being made by Team Nimiq. Times fly by when there is so much going on — with Nimiq and the crypto space in general! Now we have more updates for you, so get comfy, grab your favorite beverage and let’s begin!

## Blockchain Team

### LibP2P Integration

[LibP2P](https://libp2p.io/) is a network library created by [Protocol Labs](https://protocol.ai/) and coded in many languages including Rust, which is the one Nimiq is using. This modular network stack is designed to allow projects to mix and match building blocks of networking functionality. On top of that, the LibP2P implementation is built to also work in the browser’s network stack, thus a good step for Nimiq 2.0 to run in the browser while reusing the great work done by Protocol Labs already. Reusing this code has the big advantage of having an independent team working and improving the code instead of us recreating the code and maintaining it. In recent weeks, Nimiq Developers have been wrestling with some edge case bugs while integrating LibP2P into Nimiq 2.0, but it looks like we’re winning!

### Testnet

Intensive work is going towards setting up more and more complex test environments and running the Testnet implementation in it to do more and more thorough testing and debugging to get the Testnet ready for the public release.

As part of the process, a docker image has been created to set up a local Testnet on developers machines. As this will be useful for the Nimiq dev community, the image will be released publicly with the Testnet including documentation and instructions.

### Nano Consensus

To have Nimiq 2.0 run on mobile devices and other low-specs devices, we need to find a smart way to establish consensus on devices without syncing the entire blockchain — similar to the nano clients using NiPoPoW in Nimiq 1.0. The solution is to share a ("zero-knowledge") proof — you can find all the details [here](https://www.nimiq.com/blog/zero-knowledge-proofs-and-nano-nodes/) — and that code was delivered in January and is now in a debugging and testing phase.

### Staking

With the Testnet getting closer to completion, the team is planning how to tackle some important details of how staking and unstaking will work optimally from a UI perspective. These topics are only on the drawing table at the moment, but we think they can be interesting for some community members. Nimiq 2.0 will need two transactions for unstaking, one to signal that you no longer want to stake and a second one to retrieve your funds once they are unstaked, which happens after the next macro block, maximum twelve hours later. Nimiq devs have been discussing how to keep the blockchain secure while ensuring a good user experience. The current solution we are working on is to sign both transactions at the same time and create some service that relays the second required transactions into the network after the next macro block — it’s an optional service that will make the system easier to use but does not compromise decentralization.

### Validators

To improve the blockchain usability, Nimiq devs made it possible to switch validators instantly, with a single transaction. Also, validators can now be referred to by a unique identifier. Even when a validator gets updated, the ID stays the same.

## OASIS

### Infrastructure

Deployment of the commercial grade infrastructure is in its final stages. This includes separating the three crucial components: public HTLC API, settlement (which knows secrets to be able to send out payments) and clearing (checking for incoming transactions) — which is an important security measure. Also metrics and monitoring are being added to check for errors and be ready to scale. These are the last steps to get the setup production ready.

### Implementation

Simplifying fee structure, making the API easier to use. Improving status information about ingoing and outgoing transactions — which is much more complex for the traditional banking world than for crypto; detect and reimburse transactions that were mistakenly (or unknowingly) submitted as non-instant.

## Front-end

### Ledger

The latest Nimiq Hub can now do crypto-crypto as well as fiat-crypto swaps with the Ledger! Behind the scenes, the [Ledger API lib](https://github.com/nimiq/ledger-api) saw a major update. The original implementation was using workarounds for communicating with the Ledger device, but the web standards have dramatically improved and now it was time to replace the workaround with a proper implementation using all these new and beautiful web APIs. While doing that, multi-coin support has been added, allowing the lib to support Bitcoin now. On top of that, Bluetooth support has been added as well, so that work can begin in the Wallet to support the new Ledger Nano X via Bluetooth. The lib has been reworked from scratch with a new architecture, opening it up for reuse by other developers that want to integrate Ledgers into their web apps. The next step is to update the Nimiq Ledger app (the program running on your Ledger device) to the latest Ledger UI standards and adding more functionality.

### Wallet Update

Front-end team has been working on a new version of the wallet which was released recently. It includes following important updates:

- **New sign-up flow:** Users are now required to download their Login File when creating an account. While this seems to put more effort on the user side, we had regular support requests from people asking to help them to restore their account after they lost access. But of course this is crypto, if you don’t have a back-up, we can’t help you. So now, the Login File will just automatically download when creating a new account — just takes a second and if you really need it, you’ll at least find it in your downloads folder.
- **Improved password limits:** New passwords are limited to 256 characters. Too much? We just put an upper bound to avoid users messing with the wallet by entering incredibly long passwords in an attempt to break things.
- **iOS/Safari improvements:** New accounts are no longer named "1" or "2" in the Wallet, but instead show their correct (initial background color based) name, translated to your language.
- **Improved UX:** The team and designers went through the entire UI — for mobile and desktop — and polished small visual bugs and issues. So the UIs are even more beautiful now.
- **iOS/Safari:** New accounts have BTC enabled automatically now, no more manual activation needed!
- **Reduced size:** A thorough clean-up led to removal of unnecessary code, resulting in a smaller bundle size when loading the wallet and components.

As you might have noticed, the team is completely focused in Nimiq 2.0 and OASIS. While a lot of progress has been made we continue with full energy to tackle the challenges ahead. As always thank you for joining us on this journey.

Pura Vida,

**Team Nimiq**
