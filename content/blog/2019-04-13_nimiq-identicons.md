---
title: Nimiq Identicons
description: Protecting against the new threat of clipboard hijacking
slug: nimiq-identicons
publishedAt: "2019-04-13"
updatedAt: 2022-04-20T13:29:21+0000
authors:
  - TEAM NIMIQ
image: /images/blog/nimiq-identicons/9a91eed6-d535-4686-aabd-209593e5fffd_blog_nimiq-identicons_6.png
---

On the 8th of February 2019, Lukas Stefanko announced that [WeLiveSecurity.com](https://www.welivesecurity.com/2019/02/08/first-clipper-malware-google-play/) had identified the first case of clipper malware on the Google Play store. It is no surprise that this newly discovered malware was designed to steal cryptocurrency. Nimiq is protected from clipboard hijacking **by design**, thanks to the Nimiq Identicons.

## Metamask clone exploits copy & paste

The malware was found [impersonating Metamask](https://bitcoinist.com/google-play-store-metamask-malware/) on the Google Store and was built to steal a users crypto in two ways:

1. To get the users private keys and gain control of the victim’s wallet.
1. By replacing a BTC or ETH wallet address copied to a clipboard with one being controlled by the hacker.

![](/assets/images/prismic/ab17721d-4afc-4ae3-9333-00e8d7cf3a7c_blog_nimiq-identicons_3.png)

Metamask browser extension, used by more than [1.3 million users](https://www.newsbtc.com/2018/11/05/ethereum-wallet-metamask-achieves-milestone-of-1-3-million-users-wild-success/)

The scary thing about stealing crypto through clipboard hijacking is that it exploits user behavior. With any cryptocurrency, receiver wallet addresses are a very long and difficult to memorize string of numbers and letters. To keep things straight forward, most crypto users are copy and pasting the receiver address when processing transactions.

## Clipboard hijacking: how does it work?

Clipboard hijacking malware works by monitoring the clipboards of infected computers for cryptocurrency addresses. Essentially, if the malware detects a cryptocurrency address on the user’s clipboard, it will swap it out for an address owned by the thieves.

In most cases, crypto clipboard hijackers are limited to a few hundred thousand addresses. However, in mid-2018 [BleepingComputer](https://www.bleepingcomputer.com/news/security/clipboard-hijacker-malware-monitors-23-million-bitcoin-addresses/) discovered malware monitoring 2.3 million crypto wallet addresses.

The truth is that most users do not know that they have been infected with clipboard hijacking malware until it’s too late. The malware simply runs in the background and there is no indication that it’s even there.

## How can Nimiq Identicons combat clipboard hijacking

For those that don’t know, an identicon is “a visual representation of a hash value . . . that serves to identify a user of a computer system as a form of avatar while protecting the users’ privacy”. With Nimiq, virtually-unique identicons are assigned to every account address (Nimiqs terminology in place of “wallet address”) and aim to make each address identifiable at just a glance. Based on [Robohash](https://robohash.org/),** **the challenge Nimiq had to overcome when developing its identicons, was to ensure they are exceptionally recognizable whilst also offering a high level of variability to enable the generation of a different identicon for each Nimiq account address.

Indeed, identicons are used to help visualize Ethereum addresses in popular wallets like MyEtherWallet. However, these types of identicons are more geared to tech-savvy audiences and typical internet users often don’t find them recognizable, distinguishable or memorable.

![](/assets/images/prismic/fe899cf8-86b8-40eb-8183-9adc21180d73_blog_nimiq-identicons_2.png)

Identicons of Ethereum addresses

Now, that’s a big problem when you consider the intended function of identicons, as the creator of the concept put it:

“IMHO, too much of the web what we read are textual or numeric information which are not easy to distinguish at a glance when they are jumbled up together. So I think adding visual identifiers will make the user experience much more enjoyable.”

**- Don Park, creator of the identicon concept**

![](/assets/images/prismic/8af37106-f487-4fe5-a8f3-a5f4725965d5_blog_nimiq-identicons_5.jpeg)

Identicons of Nimiq addresses

The key success factor here is that Nimiq Identicons are highly distinguishable and memorable so that users can identify different account addresses easily. So, when you are trying to confirm to your friends that they are indeed sending to the intended account address:

- Instead of repeating your Nimiq account address NQ57 KNAL 9PG2 ATVG EBDD 6SMG HUHD M959 SG1B you can say…
- It’s the orange unicorn with green eyes and antennas.

This makes checking account addresses significantly easier, humans are simply better at describing visualizations, rather than a long string of letters and numbers. We also think this way of verifying account addresses is more fun too.

![](/assets/images/prismic/29167f0f-5a77-4703-84c7-946cc9e0ee6a_blog_nimiq-identicons_4.png)

If a Nimiq user is subject to a clipboard hijacking attack and the malware replaces the Nimiq address on the clipboard with an account address controlled by the attacker, then the user will paste this fraudulent address into the send field and the receiving addresses identicon will be shown instantly. If you are sending NIM to a friend and you see an identicon different from their usual one, then you instantly know that someone has launched a clipboard hijacking attack against you (or you made a typo or copy-paste error yourself). If you are sending to someone you don’t know, you can just ask them like “are you the orange guy, with the soccer ball, blue lobster claws, and the blue background?”.

Want to check out some of Nimiq’s Identicons for yourself? [Take a look here](https://nimiq.github.io/iqons).

There is also an ongoing effort to improve the usability in the *check-at-a-glance *user interaction, by adding a suggested name to each identicon. Many thanks and credit to community developer [Terorie](https://github.com/terorie) for contributing the *naming scheme*.

Yes, it’s true that clipboard hijacking attacks can be protected against by double or triple checking recipient account addresses before sending. However, that does make things more complicated and time-consuming, also most people trust that their computer will paste what they copied. That’s why the instant recognizability and huge variation of Nimiq Identicons can help protect NIM users and foil clipboard hijacking attempts in both a simple and straight forward way.

## The huge variety of Nimiq Identicons

![](/assets/images/prismic/f3a4ea5c-f8ff-4731-82fd-59c7548639f1_blog_nimiq-identicons_1.png)

Each Nimiq Identicon has five different elements, bottoms, faces, sides, tops body, and background color. Each element has a distinctive color. In total, identicons are made up of a combination of:

- 21 bottoms
- 21 faces
- 21 sides
- 21 tops
- 8 colors for parts
- 9 body colors
- 10 background colors

That means there are 10 * 9 * 8 * 21⁴ = 140,026,320 different identicons that can be generated. This means that Nimiq is capable of generating more than 100 million highly differentiated and instantly recognizable identicons.

## Final word

The fake MetaMask app in the Google Play store just goes to show how bad actors are evolving and changing their methods to steal crypto by trying to exploit common user behavior. We hope this example helps you to better understand the value of Nimiq Identicons and why it’s useful to have a method for users to easily recognize addresses. In extension of the ease-of-use of the Nimiq Identicons, we look forward to soon rolling out the new Nimiq Identicon naming scheme and sharing it with the community. If you don’t have a Nimiq Identicon yet and want to choose your own right now, you can do so in 30 seconds by creating a [Nimiq account here](https://getsome.nimiq.com/).

Pura Vida

**Team Nimiq**
