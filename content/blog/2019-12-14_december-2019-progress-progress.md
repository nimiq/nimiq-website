---
title: December 2019 Progress Report
description: Updates on progress, recent achievements, and upcoming tasks
slug: december-2019-progress-progress
publishedAt: "2019-12-14"
updatedAt: 2023-12-07T16:43:46+0000
authors:
  - TEAM NIMIQ
image: /images/blog/december-2019-progress-progress/b77aafdb-fb38-4d2a-bf0f-c907314d4a72_blog_december-2019-progress-progress_1.png
---

Last month we published the [first Progress Report](https://www.nimiq.com/blog/nimiq-project-progress-report-Nov-2019/). As things keep on progressing quickly, we want to share with you another progress report on our upcoming goals, latest achievements, and recent priority changes.

## Team Structure

If you are not familiar with the members of Team Nimiq, here is a quick summary of the team structure (leaving out legal and operations):

- Core (Blockchain Development & Research): Janosch, Jeff, Marvin, Pascal, Philipp, Richard.
- Front-end (UI/UX, Apps, Website): Daniel, Julian, Matheó, Tammo, Sebastian, Sören, Sven.
- Communication (Marketing, Content Creation, Social Media): Atua, Chris, Julian, Richy, Sven, Sui-Ju, Tammo.

## Upcoming Goals

### Core

- Albatross DevNet: squashing bugs, improving performance.
- Researching on potential optimizations for Nimiq 2.0
- Stabilization and testing of the Albatross demonstrator

### Front-end

- Continue stabilizing Cashlinks and Multi-Currency features: code reviews and merging into main code base
- Prototyping a service for merchants to conveniently create crypto invoices and send a link to customers to pay — more details soon!
- [RFCs](https://en.wikipedia.org/wiki/Request_for_Comments) for the Hub Checkout API and Nimiq ID to present our ideas and collect feedback from the community
- Design and planning of Nimiq OASIS microsite
- Christmas Cashlink gift card creator

### Communication

- Sales outreach to WooCommerce stores: Let us know if you run a WordPress web shop or if you know someone that has one!
- Ramping up Nimiq’s presence on LinkedIn: make sure you follow us!
- Preparing explanatory video for Nimiq OASIS
- Outreach to influencers and crypto authorities for further reviews, interviews, and AMAs: Let us know if you are interested in interviewing us!

## Priority Changes

### UTXOTree moved to Q2 2020

As announced in the recent updates to the Nimiq Whitepaper, we have come up with a new approach to store account balances. We are calling it the UTXOTree because it is a hybrid model between UTXO-based transactions and an Accounts Tree. In this novel data structure, the Accounts Tree provides easy access to all unspent transactions of an address thus giving all the benefits of an accounts-based model — e.g., provable account statements — while combining it with the power of UTXOs — e.g. having multiple in- and outputs per transaction. Additionally, the *validity start height* in transactions — required in Nimiq 1.0 — can be omitted, which simplifies the protocol and improves the network’s usability.

The UTXOTree is a rather technical upgrade to the Nimiq accounts data structure. On the other hand, Albatross already links together several dependencies like the calculation of a new supply curve, the new micro/macro block structure and last but not least the switch to Proof-of-Stake. After discussions during the previous month, our Core Team has therefore decided to finish all the tasks related to the implementation of the Albatross consensus algorithm first. This will allow the community to get the first impression of Albatross and Nimiq 2.0 quicker while still leaving room for future planned upgrades including the switch to UTXOTree.

### NimiqID moved to 2020

The Nimiq ecosystem is browser-first, which makes it easy to use on the web. [We have been discussing for a while now](https://forum.nimiq.community/t/nimiqid-authenticate-with-your-nimiq-account/96) with members from the community about the creation of a Nimiq-based solution for authentication that takes advantage of the superior usability and design of the Nimiq ecosystem. A solution that takes advantage of Nimiq’s cryptography and also substitutes the infamous “Login with Google/Facebook” button sounds very sexy indeed, and that is why we are very excited about it. It is worth noting that such a solution would not use the Nimiq Blockchain, but use Nimiq’s public-key-cryptography and the Nimiq Hub to prove the users’ identity to web apps. Also important to consider is the fact that other crypto-based solutions like Digi-ID already exist. Such solutions seem to struggle in gaining momentum because one of the main reasons developers integrate “Login with Google/Facebook” is to take advantage of the existing information from the user that is stored by those social media platforms. Nimiq’s Front-end team is eager to work on NimiqID, but since Nimiq does not store any personal information, NimiqID is unlikely to be a game-changer at this time. Thus, we decided to focus on our core technology for now.

Given that Nimiq is working on actual game-changing technology, namely Albatross and OASIS, we need to allocate Front-end resources to support those efforts. Starting with the Albatross DevNet, our Front-end team will be focusing on improving current apps and creating new ones for the first flight of the Albatross, planned for next year. With the introduction of staking, new possibilities arise. What’s more, with Nimiq introducing user-friendly staking features the Front-end and UI/UX design teams have the potential to create the most intuitive and convenient staking that the crypto world has seen.

## Recent Achievements

### Firsts Tests of Nimiq OASIS

Nimiq OASIS is a technology invented by the developers of Team Nimiq to allow the creation of off-chain HTLC. This technology will be used to execute off-chain atomic swaps like fiat/fiat, fiat/crypto, and other tradable assets. We are excited to tell you that the [first tests](https://twitter.com/nimiq/status/1194441520897757184) of Nimiq OASIS have been successful. We believe OASIS has huge potential to bring to the entire crypto space and we couldn't be more excited!

![](/assets/images/prismic/5aa987e2-d615-4027-bcb2-e7c59fa7414c_blog_december-2019-progress-progress_2.jpg)

We will keep working on Nimiq OASIS itself and are also building a new product powered by Nimiq OASIS. Remember to follow us on [Twitter](https://twitter.com/nimiq) to be the first to get information on new developments.

### Albatross DevNet

The first glimpse of [Albatross is almost ready to go live](https://twitter.com/terorie_dev/status/1201354792527896576), and it is… **fast!**There is definitely a feeling of nostalgia that might remind long-term supporters of the early days of the BetaNet. You have probably noticed Core developer Janosch tweeting about how fast Albatross is. However, the launch of the first demo of Albatross required the involvement of almost the entire team.

Given the performance of Albatross, we are excited about it finally spreading its wings and increasing the visibility of Nimiq in the crypto space.

![](/assets/images/prismic/8898d484-e069-4d32-8b1a-6f2f2f32b2c9_blog_december-2019-progress-progress_3.jpg)

We will soon release an Albatross demonstrator to be used as a key piece of our marketing efforts moving forward. We are looking forward to hearing your thoughts, questions, and suggestions!

### Nimiq Multi-Currency Checkout and Kindhumans

After an initial announcement of Kindhumans using Nimiq’s blockchain to record an immutable fingerprint of their transparency reports, Nimiq kept on exploring possible ways to collaborate with Kindhumans. After all, Kindhumans is an online store with huge growth potential sharing the ethical charity-driven mentality of Team Nimiq. We thank the Kindhumans Team for joining us on our journey of creating and testing the first Cryptocurrency Checkout that supports Bitcoin, Ethereum, and Nimiq without the need for personal information or a middleman. It was an amazing effort by the Front-end Team providing Nimiq’s Community with a great tool that can be integrated into any e-commerce store.

![](/assets/images/prismic/e3dcec75-7d11-4be9-b411-eba5f692a74a_blog_december-2019-progress-progress_4.png)

### TEN31 visits Nimiq and answers questions from the community

Matthias von Hauff, CEO of TEN31 Bank visited Nimiq in the jungle and we used this opportunity to give the Nimiq Community the chance to ask questions about our partnership using the new format from TEN31: Ten questions, thirty-one seconds per question. You can watch the interview [here](https://youtu.be/QWbRZVcIrnk)

![](/assets/images/prismic/b4ed8d19-6202-4b91-9b70-fed8768a2978_blog_december-2019-progress-progress_5.png)

### Nimiq Rust Client Release Candidate tests

Last last month we released the Rust implementation to the Nimiq Community, which started to test it up to the point of [running a Nimiq Node on an Android mobile](https://twitter.com/nimiq/status/1200533569048850435)! We have also been [testing the new Rust client in the Nimiq Seed Nodes](https://twitter.com/nimiq/status/1195070449706766342) with good results. After some more testing we plan to release the first stable version of the Nimiq Rust Client.

### Nimiq Cryptocurrency Checkout Plugin for WordPress updated

Our WooCommerce plugin has been updated to integrate with the Multi-Currency Checkout. For the first time, WordPress stores can accept BTC, ETH, and NIM without a middleman. We are very excited about this contribution to the crypto space.

Most other plugins in WordPress require you to pay, have a monthly transaction limit or require personal information and usually take custody of your funds. You are relying on others keeping their promises. Finally, there is an anonymous and easy way to accept the major cryptocurrencies: Bitcoin, Ethereum, and Nimiq! :)

![](/assets/images/prismic/5210c10e-41dd-4508-8d9e-40c6b325ffb6_blog_december-2019-progress-progress_6.jpeg)

### Nimiq "plants" 3458 trees

Nimiq joined YouTuber Mr Beast in his efforts to plant 20 Million Trees by adding the option to donate a tree in the [Nimiq Shop](https://shop.nimiq.com/). To further support this effort, we started a campaign in which the Nimiq Foundation donates a second tree for every tree donated by the Nimiq Community. We would like to thank all the Nimiq supporters who helped us make our world greener.

![](/assets/images/prismic/afb3561c-1a3f-416d-9c29-77d300509a00_blog_december-2019-progress-progress_7.png)

### Nimiq Community Bounty Program

As mentioned in the [last Community Funding Meeting Report](https://www.nimiq.com/blog/new-community-board-and-6th-meeting/), the Nimiq Community Board has discussed ways of proposing projects to the community encouraging technical and non-technical contributions. One of the ideas being discussed is the Nimiq Community Bounty Program. The main goal of this effort is to allow the community to be part of the project by contributing and helping the Nimiq Ecosystem grow. The entire team is at the disposal of the brave contributors to help and guide them.

Richy (Community Manager) and Sven (Technical Documentation) joined forces with our Front-end and Core Teams to collect ideas that can be used in this program. We are looking for projects that are fun to build yet challenging, have a positive impact in the community, and that can be easily mentored by Team Nimiq. Projects of the Community Bounty Program will be announced over Nimiq’s social media channels, shared publicly in the [Nimiq Forum](https://forum.nimiq.community/t/about-the-bounties-category/496) and will soon be added to our website.

If you have more ideas for projects, please reach out to the Community Board representatives: Chugwig, Wekkel, Tomkha, Sven, Marvin, and Richy.

We at Team Nimiq are very excited about the potential of Albatross and will continue working on increasing the awareness of the project. You can help support Nimiq and all of our efforts by interacting with us on [Twitter](https://twitter.com/nimiq) and [YouTube](https://www.youtube.com/channel/UCJ1qu3KXwfmkGwBkU8F1jQg), and don’t forget to tell your friends!

Pura Vida!

Team Nimiq
