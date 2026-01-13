---
seo:
  title: Whitepaper
  description: Nimiq's whitepaper - A simple, secure and censorship-resistant payment protocol, native to the web.
headline: Nimiq
subline: A Frictionless, Censorship-Resistant Payment Protocol Native to the Web
versionNumber: "1.0"
date: "2019-08-19"
---

Executive Summary

What is Nimiq?

Nimiq is a decentralized, censorship-resistant payment protocol native to the web, with its own diverse ecosystem of apps. The native NIM token is transacted within Nimiq as a store and transfer of value: it acts as digital cash. The cutting-edge, browser-first blockchain approach means that users directly connect to the blockchain with nothing more than a browser. Therefore anyone with an up-to-date browser can join the payment network directly, pay and accept payments without having to install software or rely on unnecessary intermediaries. This gives Nimiq its 'it just works' characteristic, which is further strengthened by an ethos of simplicity and ease of use. NIM is designed to be a cryptocurrency used by the masses.

Nimiq's Mission & Vision

Revolutionizing money by realizing the full potential of cryptocurrency. While Nimiq itself as a tech-focused project is dedicated to ushering in a new era of independent and censorship-resistant digital cash, the Nimiq Ecosystem aims to bring universal access and the ease of use of NIM to both the tech-savvy and typical Internet users. All efforts are guided by an overarching philanthropic mindset such that as NIM is increasingly adopted, its charity's ability to support good causes will grow.

Project Status

The Nimiq Mainnet was launched on April 14, 2018 and the payment protocol is fully operational. Nimiq's browser-first blockchain has been deployed and streamlined for the web. All user interfaces are focused on simplicity, maximizing ease of use, including onboarding, easy address verification, and a simplified backup process. Nimiq is also home to a growing ecosystem of apps, and has dedicated significant efforts to advance blockchain and crypto adoption research. Nimiq has acquired a stake in German TEN31 Bank to secure a licensed ally in implementing the first version of the Open Asset Swap Interaction Scheme (Nimiq OASIS), while diversifying project assets. The project offers active support and advice to community developers, as well as limited seed funding for qualifying community projects.

Resources

- [Nimiq 2.0 Albatross Rust implementation](https://github.com/nimiq/core-rs-albatross)
- [Current Nimiq 1.0 Rust implementation](https://github.com/nimiq/core-rs) of the backbone node
- [Current Nimiq 1.0 JavaScript codebase](https://github.com/nimiq-network/core-js) for browser and backbone nodes
- [OASIS peer-to-peer fiat to crypto bridge](https://www.nimiq.com/oasis/integrate)
- [Nimiq Developer Center](https://nimiq.dev)

Collaborations & Grants

- [TEN31 Bank](https://www.ten31.com/): Collaboration on peer-to-peer fiat-to-crypto bridge
- [Stanford University's Applied Cryptography Group](https://crypto.stanford.edu/c2rg): Research grant for blockchain research
- Arthur Gervais at [Imperial College's Centre for Cryptocurrency Research and Engineering](https://www.imperial.ac.uk/cryptocurrency/people/): PhD research grant

Research Publications

- [Albatross: An optimistic consensus algorithm](https://arxiv.org/abs/1903.01589)
A technical research paper resulting from Nimiq's collaboration with Trinkler Software. It is a new PoS consensus algorithm that is able to achieve a performance close to the theoretical maximum for a single chain.
- [Nimiq OASIS](/oasis)
The Open Asset Swap Interaction Scheme is the blueprint for a potentially disruptive crypto-to-fiat bridge, making fiat currency behave as if it were tokens on the blockchain, providing a unique way of connecting the traditional banking network with non-custodial crypto exchanges.

![](/assets/images/prismic/66325e6f-cd73-4254-bd5f-1f129a5a7f11_whitepaper_nimiq-history.png)

Motivation

Cryptocurrency as a valid concept has been confirmed by the growth and persistence of [Bitcoin](https://bitcoin.org/bitcoin.pdf) since its launch in 2009. More than just a technical idea, it laid the foundation for a disruptive means of transacting value not seen before in the history of humankind, by allowing "payments to be sent directly from one party to another without going through a financial institution" *Footnote: Satoshi Nakamoto, "Bitcoin: A Peer-to-Peer Electronic Cash System" https://bitcoin.org/bitcoin.pdf*. This brilliant concept has fostered a grand ecosystem with a broad range of ideas and technical solutions.

Cryptocurrencies still represent only a small fraction of the global [money supply](https://coincenter.org/entry/how-do-cryptocurrencies-affect-monetary-policy). And much of their adoption so far has been driven by centralized services that hold your crypto assets for you (centralized crypto exchanges, payment providers, etc). We are therefore still far away from the goal of crypto mass adoption, even more so in its original peer-to-peer, non-centralized sense. The reasons centralized solutions appeal to users seem to be convenience and ease of use, as they employ the same interaction patterns we became familiar with by using online banking. This familiarity in turn leads to a feeling of safety. But this convenience and feeling of safety come with a serious trade-off: giving up the ownership of your keys to a third party, violating what is considered to be the most fundamental reason for the creation of cryptocurrencies in the first place.

In light of these facts, Nimiq recognizes an enormous opportunity. Namely to pursue and deliver the **most accessible and easy-to-use but also censorship-resistant and decentralized payment solution** for mass adoption. Nimiq seeks to achieve this by researching, implementing and combining cutting-edge technologies from:

- Cryptocurrencies,
- Cryptography,
- Blockchain technologies,
- Peer-to-peer networks,
- Distributed ledger technologies,
- Web development,
- Usability,
- User experience,
- Human psychology and behaviour.

Design Approach

Web apps have become the standard of the Internet and are disrupting business models of traditional software industries. From Encarta to Wikipedia, from Office to Google Docs, web apps are far more attractive because they improve the overall usability of software for the user:

- **No installation needed:** Users can open a website and start using the application with one click.
- **Cross-device compatibility:** By focusing on the browser instead of each specific OS and device, a more coherent codebase is achieved, which translates into stability and a consistent experience across devices for the user.
- **Built-in security and privacy:** Browsers are one of the most secure, tested and audited pieces of software. Providing untampered client-side software that runs in the user's browser allows for inherently secure and private applications.
- **Intuitive:** By tapping into the user's familiarity with their browser it is possible to create a smooth and easy-to-use user experience that 'just works'.
- **Future-proof:** Web apps are a clear long-lasting trend in software development, since the web has become ubiquitous even in developing countries.

Crypto for Everybody

Even though there are obvious advantages in using cryptocurrencies and holding your own funds, it is clear and understandable that non-tech-savvy users are drawn to **convenient and easy-to-use payment** methods.

Nimiq learned from commercial payment providers that, **frictionless payments** are the key for user adoption, especially as they directly influence the perceived safety and trustworthiness of a system. In other words, a payment system that is intuitive and frictionless makes users feel much more confident about trusting this system with their money.

Looking at the history and origins of cryptocurrencies, it is logical that the focus was on tech-savvy users. Over decades, the primary objective was solving tremendously challenging research and engineering problems in the realm of cryptography, distributed ledgers, and network communications. At such an early stage it was out of scope to consider streamlining blockchain technology towards user experience and daily payments on the web.

Powered by the knowledge we now hold and in deep gratitude for the hard work of crypto pioneers, we are now standing on the shoulders of giants. Nimiq is working on outperforming the convenience of conventional payment services with an enhanced user experience that is **intuitive through simplicity**, whilst providing the privacy and censorship-resistance of decentralized cryptocurrencies to create a novel payment experience. This is the Nimiq Payment Protocol, embedded in the Nimiq Ecosystem.

Open Source and Developer Accessibility

*Nimiq is encompassed by a strong philanthropic mindset, it is open-source and aims to become entirely community-driven.*

Team Nimiq is a tech-focused team with a deeply rooted open-source mentality. The project's source code is released to the public on the [official GitHub repository](https://github.com/nimiq) to encourage peer review and interaction with developers. The project's main focus is to enable the most accessible, censorship-resistant payment solutions. This intrinsically means that Team Nimiq works to provide the framework and tools for developers to further build applications that tap into the Nimiq Payment Ecosystem. To guide and support developers on this journey, Nimiq provides the [Nimiq Developer Center](https://www.nimiq.dev)

Browser-First Blockchain

It is already possible to pay online with crypto. Through intermediaries. But the heart and soul of crypto is to make ourselves as independent as possible from third parties and intermediaries.

Simplicity means bringing crypto and blockchain technology to where the user already is: online, on the web. Instead of offering payment services for the web, Nimiq is a blockchain and payment protocol **native to the web** offering any form of payment, be it online, in a shop, or between friends, as long as the device is connected. Being a browser-first blockchain means paying becomes as simple as browsing a website: no apps, no plugins, completely installation-free. It works on all devices that come with a browser, from desktops to mobile phones.

To achieve this vision, two major challenges needed to be overcome. First, the core blockchain components had to be translated to the web platform, including:

- Network for establishing P2P connections
- Storage for persisting keys and blockchain data
- Cryptography for hashing, signing and verifying

In addition, the protocol had to be adapted to the requirements and constraints of the web:

- Compression of blockchain data to sync within seconds instead of hours
- Blockchain parameters optimized for the browser
