---
title: Pay with NIM Everywhere Lightning Network is Accepted
description: With the launch of Nimiq Pay, Nimiq users gained the ability to pay with NIM for the first time using a native mobile application. Now it is also possible to pay with NIM in all locations where the Bitcoin Lightning Network is accepted, in a fully decentralized way.
slug: pay-with-nim-everywhere-lightning-network-is-accepted
publishedAt: "2024-06-14"
updatedAt: 2024-06-14T22:27:50+0000
authors:
  - Team Nimiq
image: /images/blog/pay-with-nim-everywhere-lightning-network-is-accepted/ZmqmMZm069VX1tCE_PaywithNIMBitcoinLightning3.3blue.png
---

Nimiq's vision is to make cryptocurrency payments as simple and accessible as possible while staying true to its decentralized nature. Nimiq Pay is the payment-focused mobile app designed with this ideal in mind. By combining different payment networks into a single and easy-to-use experience, Nimiq Pay is poised to bring cryptocurrency payments to the mainstream.

The new version of Nimiq Pay, supporting payments at Bitcoin Lightning acceptance points, is now available for both [**iOS**](https://apps.apple.com/app/id6471844738) and [**Android**](https://play.google.com/store/apps/details?id=com.nimiq.pay). This update expands the reach of NIM payments, allowing you to use NIM wherever Bitcoin Lightning is accepted, seamlessly and effortlessly. Download or update the app today to experience the future of crypto payments.

### The Vision: One Single App to Pay Everywhere

Cryptocurrency payments are becoming more and more popular around the world every day. Still, each cryptocurrency is building its own ecosystem with its own set of users and merchants. This brings an issue as old as the internet itself: using an app for each different network.

Nimiq is all about bringing elegant and simple solutions to make cryptocurrency payments an easy experience that is on par with existing payment apps in traditional finance. Similar to *TradFi*, the ideal way to pay in crypto is clearly one single app that allows users to pay in every payment network out there, in a fully-self custodial way. Making it simple and straightforward for users, while hiding all the complexity under the hood.

With the initial launch of Nimiq Pay, Nimiq users tasted simple and easy mobile payments in all shops accepting NIM. Nimiq's vision is to be able to pay everywhere with NIM. To take a first step forward in this direction, Nimiq Pay is now integrating the largest payment network in the crypto world: Bitcoin Lightning Network.

### What's Under the Hood

Even though the experience of using Nimiq Pay looks simple, a lot is happening under the hood. Here is a short technical summary of everything happening behind the scenes:

1. The merchant generates a LN invoice QR code with secret X and payment_hash = sha256(X).
1. The QR code is scanned and the app presents the equivalent NIM amount required to the user.
1. Those NIM are then locked into a smart contract and can be retrieved with secret X.
1. The app simultaneously sends the merchant's invoice to Nimiq’s Multi-Asset Lightning Node (MALN).
1. MALN fulfills the invoice using LN and by doing so learns secret X.
1. Using secret X, MALN reimburses itself by retrieving the NIM from the smart contract.
1. X is published on the NIM blockchain from which the app learns X.
1. The user can prove to the merchant they paid by knowing X.

Let's take a step back and compare this process to a regular Bitcoin Lightning transaction.

Below is a display of a regular Lightning Network transaction that traverses the network. Notice that all sub-transactions use the same payment hash H. This ensures that all sub-transactions are either committed or reversed, guaranteeing that none of the intermediate nodes lose any funds and ensuring that the transaction either succeeds or the funds remain with the sender.

![](/assets/images/prismic/Zmqcx5m069VX1s9W_Group48096084-4-.png)

Below is a display of a Nimiq Lightning Network hybrid transaction. The process is very similar, providing the same guarantees for success or reversal as a traditional Lightning Network transaction. Most notably, the payment hash H remains the same across networks.

![](/assets/images/prismic/Zmqc05m069VX1s9X_Group48096085-4-.png)

### The Nimiq Crypto Map

The Nimiq Crypto map is an ever growing registry of places that accept crypto, not just Nimiq. With this integration, the map now connects crypto users with over 3'500 places accepting payments with NIM, via Nimiq and Bitcoin Lightning. This boosts the utility of the NIM token and makes the crypto map and Nimiq Pay your one-stop-shop for self-custodial crypto payments.

![](/assets/images/prismic/ZmqlUZm069VX1tBn_image-15-.png)

### What's Next

As you might guess, we are working on the next payment network integrations and their order of priority for the Nimiq Pay app. If you have suggestions, feel free to drop them in [the Nimiq forum](https://forum.nimiq.community/t/payment-networks-supported-on-nimiq-pay/2078) or reach out to us [via X](https://x.com/nimiq).

Additionally, join us LIVE on a [Twitter/X Space](https://twitter.com/i/spaces/1MnGnMperDOKO) on Friday, June 21 at 15:00 UTC to discuss The Future of Crypto Payments. We welcome crypto payment enthusiasts, Bitcoin Lightning advocates, and those passionate about crypto adoption to join!

We would like to end with a word of appreciation to the Bitcoin community and invite them to try out our tech and find out why Nimiq is becoming the closest crypto to Bitcoin.

Pura Vida,
Team Nimiq
