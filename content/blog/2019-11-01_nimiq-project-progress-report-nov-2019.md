---
title: Nimiq Project Progress Report
description: November 2019
slug: nimiq-project-progress-report-nov-2019
publishedAt: "2019-11-01"
updatedAt: 2025-07-18T09:47:59+0000
authors:
  - TEAM NIMIQ
image: /images/blog/nimiq-project-progress-report-nov-2019/28e99852-a6c8-49dc-91dd-46501285949a_blog_nimiq-project-progress-report-Nov-2019_1.png
---

The Nimiq Ecosystem is maturing and a lot of progress has been made. The team is hard at work on both Nimiq 2.0 and Nimiq Checkout. We understand it can be difficult to keep up with developments and achievements since they’re spread out over the [forum](https://forum.nimiq.community/), on [Telegram](https://t.me/Nimiq), [Discord](https://discord.gg/cMHemg8)as well as [GitHub](https://github.com/nimiq). To help community members get a quick update on the high-level progress of the project, we want to share this progress report on a regular basis.

If you are not familiar with [the members of Team Nimiq](https://www.nimiq.com/team/), here is a quick summary of the team structure (leaving out legal and operations):

- **Core (Blockchain Development & Research): **Janosch, Jeff, Marvin, Pascal, Philipp, Richard.
- **Frontend (UI/UX, Website, Apps):** Daniel, Julian, Matheo, Tammo, Sebastian, Sören, Sven.
- **Communication (Marketing, Content Creation, Social Media):** Atua, Chris, Julian, Richy, Sven, Sui-Ju, Tammo.

## Upcoming Goals

### Core Team

- Test and release of the Rust Nimiq Client
- Release Albatross Demonet including a demo and useful visualization
- First tests of Nimiq OASIS with TEN31 Bank
- Implementation of UTXOTree for Nimiq 2.0
- Developing first use case of Nimiq OASIS

### Front-end Team

- Multicurrency Nimiq Checkout update (now accepting BTC and ETH in addition to NIM)
- Final tests and release of WordPress Plugin integrated with updated Nimiq Checkout (so you can accept BTC, ETH and NIM in WooCommerce without a payment provider!)
- Nimiq Donation button creator (easily add a button to your website to receive donations in NIM)
- Preparing concept and design of NimiqID to be shared with community

### Communications Team

- The Communications Team has designed a marketing strategy for the following year which resulted in the creation, discussion and approval of a marketing budget.
- Communications Team is also working on adding a new team member who will join us to take the role of Sales Engineer/Brand Ambassador.
- Concept and initial work of Nimiq OASIS communication strategy.
- Tutorials and documentation of Nimiq Checkout WordPress WooCommerce Plugin.
- Nimiq Community Rewards Program. Aligned with Front-end and Core to provide the community with video, tutorial and coding ideas that are easy to complete and will strengthen the Nimiq ecosystem. Community members who work on a project and complete the success criteria will be eligible for a nice reward in NIM.

## Recent Achievements

### Nimiq 2.0 Whitepaper

After a considerable amount of research and discussion, the Core Team gave us a first glimpse of where Nimiq 2.0 is going. Pascal (our Blockchain Engineer who recently received an award for his PhD Thesis, congrats!) wrote the first draft of the Nimiq 2.0 Whitepaper. With this initial text, Sven (Technical Writer) and Richy (Community Manager) adjusted the tonality and used the beautiful designs from Overnice (Julian, lead designer) to create the Nimiq 2.0 Whitepaper Update.

![](/assets/images/prismic/464e84ac-27ad-4c94-8a98-11f7f6261e4c_blog_nimiq-project-progress-report-Nov-2019_2.png)

To switch between versions of the Whitepaper, you will now find a version selector on the [Whitepaper website](/litepaper). We think this will also come in handy in future updates.

### Introducing UTXOTree

 The UTXOTree is a novel data structure which will hold the balances of accounts in Nimiq 2.0. Currently, the Nimiq 1.0 Blockchain utilizes Merkle Trees as Ethereum does. For Nimiq 2.0 the Core Team has come up with a way of mixing the UTXO structure used by Bitcoin with the Merkle Trees. If it sounds groundbreaking it’s because it is!

### Faster consensus of Browser Clients with QuickSync

The Core Team recently added a new consensus mechanism to Browser Clients called Pico Consensus. Pico Consensus allows a Browser Client to reach consensus in seconds by downloading a small fraction of information of the Blockchain from peers of the network. If this is not successful for some reason then it would fallback to Nano Consensus, a mechanism with which the Browser client still reaches consensus in tens of seconds. This combination is what we call Nimiq QuickSync. Check it out in the [Nimiq Safe](http://safe.nimiq.com/)!

### Nimiq Rust Node Release Candidate

The Rust full-node has been improving since its first beta release last February. This is the result of the efforts of the Core Team over the last 6 months and our community members who tested the code and reported bugs. The Rust node is, in comparison to its JavaScript predecessor, highly performant and can be compiled to run natively on multiple platforms.

![](/assets/images/prismic/9626c8bd-6ff5-411b-a894-05282045f5a6_blog_nimiq-project-progress-report-Nov-2019_3.png)

Now that Jeff (Blockchain Engineer, in charge of releases) has finished cleaning up the code and is fixing the last packaging issues, the Nimiq Rust Node is ready for its release candidate version. As always, it will undergo a review process and we would like to kick it off by asking for support from the community: if you are a Rust developer or you are running a Nimiq Node and you want to support us by testing it in your setup, [visit the repository](https://github.com/nimiq/core-rs)and simply follow the instructions in the README.

### Nimiq Checkout's First Integration Partner

The Front-End Team has been focusing on developing Nimiq Checkout. After a lot of testing with our soon-to-be-announced ecommerce partner, the integration is close to being complete. This partner will use the Nimiq Checkout to accept BTC, ETH, and NIM as an additional payment option in their online store. We are excited for the first release of Nimiq Checkout and are gearing up to onboard more merchants in time.

### Release of TEN31 Website and their partnership with Salamantex

Nimiq is part-owner of the German Financial institution WEG Bank AG, which recently announced its new crypto-focused venture [TEN31 Bank](https://www.ten31.com/). The new website of TEN31 Bank has been released and it prominently shows the close relationship of the Nimiq Ecosystem and the TEN31 Bank’s future endeavors.

![](/assets/images/prismic/d9eed937-bd02-4797-b6da-e30eee2bc264_blog_nimiq-project-progress-report-Nov-2019_4.jpg)

Furthermore, the recent partnership of WEG Bank AG with the major Point-of-Sale provider Salamantex is noteworthy. Nothing official has been released yet, but the possibilities are indeed exciting.

### New Developer joins the Team

We would like to publicly announce our newest addition to the Team: Matheo, a French Full Stack developer with experience in JavaScript and Vue. Matheo was actually introduced to the Team by an active community member, which makes Matheo the third member that joins the Team from the Nimiq community. He will be working on building new features and making UI improvements in the Nimiq Ecosystem. Let’s all say Hi to Matheo in the [Nimiq forum](https://forum.nimiq.community/t/say-hi-to-nimiqs-new-front-end-developer-matheo/458) and make him feel welcome.

![](/assets/images/prismic/3abeaf0f-5b91-4b35-a8f3-7e491b809db2_blog_nimiq-project-progress-report-Nov-2019_5.jpg)

### Nimiq Explanatory Video

A Video that quickly and clearly explains the main vision and captures the spirit of Nimiq has been overdue. We aimed to create an informative yet [engaging video](https://youtu.be/dA40oyDVtqs) that community members could share with their friends and say: “See, this is what I’ve been trying to explain to you, a node in a browser!”.

![](/assets/images/prismic/6380ec06-a3e9-4e6b-b227-eadf72c233a9_blog_nimiq-project-progress-report-Nov-2019_6.png)

We are happy with the result and started working on the next video. Want to share your opinion on the video, suggest an idea or request a video of a specific topic? [Join the forum](https://forum.nimiq.community/) and create a topic. :)

Thanks for reading. We hope this quick blog post helps you get an overview over the progress of the project.

Pura Vida!

**Team Nimiq**
