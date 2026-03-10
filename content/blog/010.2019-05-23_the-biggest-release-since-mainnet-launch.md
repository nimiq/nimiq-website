---
title: The Biggest Release since Mainnet Launch
description: Team Nimiq is thrilled to release a major update to our apps that will significantly improve how users can use their NIM as well as how developers can integrate Nimiq.
slug: the-biggest-release-since-mainnet-launch
publishedAt: "2019-05-23"
updatedAt: 2022-04-20T13:29:10+0000
authors:
  - TEAM NIMIQ
image: /assets/images/prismic/1c032a9e-2970-4080-b91f-df4631690814_blog_the-biggest-release-since-mainnet-launch_5.png
---

The update comes packed with new features, improved and hardened security concepts, and an open API that allows third-party apps to integrate Nimiq features and handle NIM directly in the browser. And it’s all wrapped in a brand new user interface making it easier than ever to use your NIM.

This post will focus on the top features from a technical perspective. Stay tuned for an in-depth article about the UX/UI/product progress and an article about features and releases in the next weeks.

## So, what’s new?

- Accounts with multiple addresses
- New architecture and Ledger integration
- Nimiq Login Files
- Changeable passwords
- Logout interface
- QR-Code generator and scanner
- Open API for 3rd-party integration
- Nimiq Checkout
- Message signing support

### One Account, many Addresses

![](/assets/images/prismic/dfd170c7-89e7-4d29-9119-928e7d2b8f56_blog_the-biggest-release-since-mainnet-launch_6.png)

With standards-compliant BIP44 private-key derivation, one seed now supports an infinite number of addresses. That means, with all new accounts you can manage more than one address under one account. For a more in-depth introduction into Hierarchical Deterministic Wallets, please refer to [this article](https://medium.com/bitcraft/hd-wallets-explained-from-high-level-to-nuts-and-bolts-9a41545f5b0).

With this update, it’s now easy to get your funds, payments, and transactions organized without the need to backup and store a key for each of those addresses. Instead, it’s only one account and one backup. While enjoying this convenience, you still have the freedom to create several multi-address accounts and, for example, separate your savings from your daily allowance and your business expenses. This way, you can store the backups of each of these accounts accordingly.

Multiple addresses are now also supported for Ledger hardware wallets!

### Old Accounts, New Accounts

With the introduction of multi-address accounts, conventional single-address accounts turn into legacy accounts. They are still supported but will not inherit new features such as the Login File and will not be developed further in the future. Team Nimiq recommends all users to upgrade by creating a new multi-address account and transfer their funds.

## Keyguard and Ledger

The overall architecture of the Keyguard has been reworked leading to a new structure:

![](/assets/images/prismic/1dfead2b-6ec0-41f6-a424-2029ea3db935_blog_the-biggest-release-since-mainnet-launch_2.png)

The Nimiq Hub handles and stores your accounts, i.e. the addresses and labels belonging to each account, but never the keys. The keys are stored in a dedicated, highly secure location, such as the Ledger hardware wallet or the Keyguard. The Nimiq Hub is positioned in front of the various key storage solutions, providing a unified interface for users to manage all their accounts that might be associated with multiple keys from multiple locations. Thus, users will always see the same, familiar user interface wherever they make a payment.

### Keyguard security

The Keyguard is now more secure than ever. It is served with strict Content-Security-Policies enabled, as well as other relevant security headers (more details can be found [here](https://securityheaders.com/?q=https%3A%2F%2Fkeyguard.nimiq.com)). Additionally, all scripts and styles in the Keyguard domain are now loaded into the browser with integrity checksums, a technique allowing the browser to verify the authenticity of the downloaded files.

### Deeper Ledger integration

With this new architecture, the Ledger and Keyguard accounts are now moved behind the same abstraction layer. Thus, from the user’s perspective, a Keyguard account behaves the same as a Ledger account: They can have multiple addresses, can be renamed and both kinds of accounts can be used with 3rd party apps accessing them via the Nimiq Hub.

## Login and logout

After creating a new Nimiq Account, you will be offered to download a Login File. It’s a safe and easy way to back up your private key. It’s easy because it means you just download a small image instead of needing to write down the 24 Recovery Words right away. The file comes with a QR code and thus can be printed and easily scanned with your phone or webcam instead of entering the 24 words again. And it looks good, too:

![](/assets/images/prismic/f49326f2-1906-4aba-a296-0e718d6b5376_blog_the-biggest-release-since-mainnet-launch_1.png)

At the same time, it’s secure because your password protects the key inside your Login File. That means the key is securely encrypted as opposed to the Recovery Words that are plain text. If somebody gets their hands on them, they can steal your funds while the Login File only works together with your password.

Thanks to the new Login File, it is easy to store your backup and thus log out of your savings account when you don’t need it. In addition, the Login File makes it easy to log into your account on somebody else’s machine, do transactions and payments, and log out when you’re done, leaving no trace. Logging out means removing all account-related data from that device, including your key.

As the password becomes more critical for an account’s security, a password-changing functionality was implemented. In contrast to centralized solutions, where a password change would lead to an update in a database, a Nimiq password change results in the creation of a new Login File, encrypted with the new password.

For more details on the Login File and the underlying ImageWallet standard, see [this blog post](https://medium.com/nimiq-network/agoratrade-nimiq-96de83a737c2).

![](/assets/images/prismic/a89f134b-439c-40ed-be47-3e599e04f653_blog_the-biggest-release-since-mainnet-launch_4.jpeg)

### QR-Codes

It’s easier now to share your address or request a transaction by sharing and scanning QR-Codes directly from within the updated [Nimiq Safe](https://safe.nimiq.com/).

The QR-Code functionality allows for a basic over-the-counter experience. While designated interfaces and apps are planned, easy and fast in-person NIM transactions between strangers are now possible.

### Open API

By including a script tag or installing an NPM package, requests can be made to the open Nimiq Hub API, allowing app developers to create entire payment applications on top of the Nimiq infrastructure. From the user’s perspective, it’s the same convenient user interface that will perform the security-related operations across different apps without passing private information to consumer apps.

See [github.com/nimiq/hub](https://github.com/nimiq/hub) for details, how to get started, and in-depth documentation.

## Nimiq Checkout

![](/assets/images/prismic/42574efd-b29a-4fab-92cb-dcba6c5571d1_blog_the-biggest-release-since-mainnet-launch_3.png)

The newly added checkout function opens a specialized user interface that has been optimized for payments during checkout processes in shops compared to the general method of signing a transaction.

It allows users to pay directly from their browser without having to open a dedicated wallet app. The shop developer can provide the shop’s logo to make the transition from shop to payment even smoother. The signed transaction is returned but also directly sent to the network allowing developers to set up shops without access to a Nimiq node or even to build fully client-side shop solutions.

### Message signing support

Signing of arbitrary messages is now supported. It will allow you to identify yourself and prove ownership over a particular address. Apps or websites can use this functionality to identify you by your Nimiq Address. You and only you can prove ownership of your address as you have the private key of your Nimiq Account — no need to remember new passwords or user names.

Team Nimiq is evaluating a single-sign-on feature. More on this in an upcoming post.

## Try it!

Go ahead and [create a new Account](https://safe.nimiq.com/?onboarding=signup).

Help Nimiq to grow by giving feedback on what you like and what you think could be improved. Share it on [Twitter](https://twitter.com/nimiq) _#easynimiq_ or discuss on [Telegram](https://t.me/Nimiq)and [Discord](https://discordapp.com/invite/cMHemg8).

Pura Vida

**Team Nimiq**
