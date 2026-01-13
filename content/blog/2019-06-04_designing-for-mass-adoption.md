---
title: Designing for Mass Adoption
description: "We redesigned the Nimiq user experience with a bold aspiration: Create the easiest, most convenient and most accessible cryptocurrency experience in existence."
slug: designing-for-mass-adoption
publishedAt: "2019-06-04"
updatedAt: 2023-12-07T16:35:21+0000
authors:
  - TEAM NIMIQ
image: /images/blog/designing-for-mass-adoption/501fdd48-9850-4403-8472-9d92eb433313_blog_designing-for-mass-adoption_6.png
---

[The latest update](https://medium.com/nimiq-network/the-biggest-release-since-mainnet-launch-f8096e33dab9) introduces a variety of improvements and features for new and existing users alike. However, it is only the tip of the iceberg.

The current implementation remains a mix of old and new design language. The Safe, Nimiq’s browser-wallet, was updated but the actual new Safe is yet to be implemented — including features such as Cashlinks and donations. That being said, we are thrilled to present the massive improvements and some of the reasoning behind them.

## Before we get started.

Blockchain and Cryptocurrency are complicated matters. Understanding them requires a significant amount of involvement, time and — to some extent — capability. Using them as well.

Eradicating these barriers, and empowering wider adoption by doing so, is and was what defines Nimiq. This mantra influences all design decisions and was now consequently applied to the product. We stopped thinking inside the blockchain box and came to the realization that we are not “just” competing over the best crypto, we are competing over the best payment system in general. To do so, Nimiq needs to provide accessible and applicable value to users that is superior to existing solutions.

Additionally, we started to implement a more professional approach to acquisition funnels, user-journeys and conversion tracking to ensure steady iterations, improvements and ultimately, growth.

## Designing for radical simplicity.

While the biggest leaps in terms of usability are unarguably achieved through technological advancements and translating complicated technicalities into relatable concepts, we needed new interfaces that are capable of actually leveraging that for users.

Additionally, the new interface design had to live up to our high goal of radical simplicity while keeping the heart of our brand.

We stripped away everything that wasn’t absolutely necessary for the interface to function. By reducing the number of elements and info on each screen we achieved a focus on the important elements. Additionally, we dedicated every step in a user-flow to exactly one action, ensuring additional focus. We went from an intensely colored design language to a simple and plain one that works with a lot of whitespace and shades of gray, which gave us the possibility to make our sparingly used brand colors really stand out to guide users through our flows.

We aim for interfaces that are so simple and basic that they can be understood as a boilerplate for the community to build their own apps upon, but still maintain a different look and feel — and are nonetheless actually fun to use.

### Easy money.

Many of the crypto-specific concepts and terms are unknown to most and especially hard to get for non-technical people. So for Nimiq, we avoid crypto slang and use established concepts where possible, reducing the cognitive load to a minimum.

![](/assets/images/prismic/5dda820f-8eac-479e-b932-5097fbbf7669_blog_designing-for-mass-adoption_8.png)

### Accounts

While the word ‘account’ has a common meaning when it comes to banking and finance, our accounts are rather to be compared with the representations of identity in web-services (e.g. a Google account). Accounts manage and aggregate addresses but cannot send or receive funds on their own.

They are visually represented by a ring of hexagons which hints at which and how many addresses it contains.

![](/assets/images/prismic/4ce61a42-6c29-41df-9580-21c46e0ab68a_blog_designing-for-mass-adoption_7.png)

### Addresses

A Nimiq Address is a simplified public key that looks like a regular IBAN address. Addresses hold, send and receive NIM.

Accounts manage addresses — addresses can send and receive funds.

The Nimiq Addresses are represented by fun looking avatars, so-called Identicons.

The visual appearance of those avatars is directly derived from the address they represent, thus making the avatars a human-readable way to display and verify a cryptocurrency address.

To give the most relevant example: Sending crypto requires diligence to avoid making a potentially dramatic mistake while typing or pasting the receiver’s address. An avatar, in contrast, can be checked and verified at a glance.

On top of this, the avatars add a fun and relatable touch to what would otherwise be a rather dry and technocratic matter, [read more on the Identicons here](https://medium.com/nimiq-network/nimiq-identicons-8789b68e1668).

### Auto-naming for new Accounts and Addresses

To support the visuals, an automated naming concept was implemented that provides relatable names for newly created accounts and addresses.

Of course, these names can be changed at all times.

![](/assets/images/prismic/cbca6129-bed4-4efc-b589-f68ba48c6b24_blog_designing-for-mass-adoption_4.png)

An account is named after the background color of its initial address. It is rather a basic concept that can eventually result in a user having two ‘Yellow Accounts’. Still, we are happy to avoid generic ‘New Accounts’ and provide some guidance here.

The address names, however, are directly derived from and correspond to the avatar’s appearance (and thus, from the actual address).

If your Avatar has roller skates, glasses and a cowboy hat, it might be called the ‘Reading Outdoor Skater’ or the ‘Inline Cattle-Driving Geek’ or the ‘Rolling Nerdy Cowboy’

The visuals and names result in about 4 billion unique combinations.

### Super easy entry

The gateway into the Nimiq ecosystem is the most crucial point of a user’s journey. We took our time to create an entry to the Nimiq blockchain that has one clear cut goal: Be easy.

![](/assets/images/prismic/f35d9407-9d75-4faf-9387-3afc19a86edd_blog_designing-for-mass-adoption_3.gif)

The radically simplified account creation consists of only two steps: Choosing an avatar and setting a password. And just like that, the user becomes a first-class citizen of the Nimiq Blockchain.

We believe it to be the easiest and fastest onboarding for any payment system, crypto or conventional. Our estimated account creation time is way below 30 seconds — give it a try and let us know how you liked it.

However, Nimiq is a decentralized payment system and as such, it can’t be secure enough. As security and convenience often oppose each other when it comes to user-experience we had to find a solid middle ground.

The basic idea here is:

**Security should correspond to the user’s situation. A new user should be enabled to try Nimiq before having to commit time and effort to it.**

Therefore, we chopped the onboarding into three easily digestible concepts with the most inconvenient one being a somewhat optional choice that we encourage but don’t enforce.

### Step 1. Account and password creation

The password is set at account creation and is mandatory. It is required to transact NIM, to download the Login File, to back up the Recovery Words and to add more addresses to an account.

**Password:** To authorize important actions

### Step 2. Login File download

![](/assets/images/prismic/0afcd500-53b4-4a0a-901d-a7492f7413c5_blog_designing-for-mass-adoption_5.gif)

After a new user has created an account, she/he is presented with a prominent call-to-action to download the ‘Login File’, right at the top of the dashboard.

The Login File is Nimiq’s version of the ImageWallet standard (co-developed by Nimiq). It is the default way of logging in to Nimiq. As an image file, it can be easily moved and stored. In the near future, a device’s camera can be used to conveniently log in to the account via the featured QR code.

The Login File is encrypted with the account’s password.

**Login File + Password:** The way to log in to your account

### Step 3. Recovery Words backup

![](/assets/images/prismic/0b674d20-359b-4830-8be8-e60a72a3261c_blog_designing-for-mass-adoption_1.gif)

After the Login File was successfully downloaded, a new call-to-action appears. The user is now considerably involved in Nimiq as she/he has already successfully completed the onboarding steps and can now be presented with the most inconvenient step: writing down the 24 Recovery Words. Again, the name is intended to be self-explanatory.

**Recovery Words:** The backup of your account

Both** Login File** and **Recovery Words** come with short but informative advice on the security implications and on how to best handle these presumably unknown concepts of crypto-security.

## Super fast payments: The Nimiq Shop-Checkout

![](/assets/images/prismic/6ea8c6d8-1c95-48cb-b64b-4ed97e55fe9c_blog_designing-for-mass-adoption_2.gif)

Paying with NIM is now as easy as paying with PayPal. The all-new online-checkout flow allows for super quick and convenient payments.

When shopping online with NIM, simply click pay, choose an address and confirm the transaction with your password.

The interface is reduced to the minimum and aims to deliver a light and enjoyable experience that provides high reliability and control nonetheless.

### Logout

With this release of our new apps, you are now able to log out of your account(s) with a simple click of a button. Logging out removes all settings associated with that account from your device, so be sure to make use of the backup options Nimiq presents before you hit the final logout-confirm button.

## What’s next?

The list of features and ideas, from implementation-ready designs to vague concepts, is long.

The concept of a browser-based blockchain opens up a whole world of potential use cases and apps that hold the power to outperform existing solutions — fiat based services as well as more conventional blockchain solutions.

The fast and easy user experience of Nimiq is not due to some magically well-done design work, it’s the accessibility and the easiness of the browser-first Nimiq blockchain that empowers it.

Stay tuned for an article about the next features to come (yes, Cashlinks is one of them).

How do you like the new UX? How do you like the design? [Create an account](https://safe.nimiq.com/?onboarding=signup) and [provide some feedback](https://forum.nimiq.community/t/nimiq-safe-ui-feedback/294/13) and support Nimiq to build the future of money.
