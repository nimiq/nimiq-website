---
hero:
  title: Nimiq Bug Bounty Program
  description: Strengthen Nimiq's security, and earn rewards.
---

Quick Access: [Policy](#disclosure-policy), [Rewards](#rewards), [Rules](#program-rules), [In Scope](#in-scope), [Out of Scope](#out-of-scope).

- Reports resolved: 11
- Assets in scope: 6
- Top bounty: $50'000

## What is Nimiq?

Nimiq is a simple, secure and censorship-resistant payment protocol, native to the web. We look forward to working with the community to find security vulnerabilities in order to keep our protocol and official implementations as safe as possible. You can find our developer reference [here](https://www.nimiq.dev/).

## SLA

Nimiq will make a best effort to meet the following SLAs for hackers participating in our program:

- Time to first response (from report submit): 2 business day.
- Time to triage (from report submit): 5 business day.
- Time to bounty (from triage): 14 business days.
- Time to resolution: Depends on severity and complexity.

We'll try to keep you informed about our progress throughout the process.

## Disclosure Policy

Please follow HackerOne's [disclosure guidelines](https://www.hackerone.com/disclosure-guidelines) and submit your work to [security@nimiq.com](mailto:security@nimiq.com).

## Rewards

| Target                                                  | Critical        | High           | Medium        | Low       |
| ------------------------------------------------------- | --------------- | -------------- | ------------- | --------- |
| [Core POS](https://github.com/nimiq/core-rs-albatross/) | $25'000-$50'000 | $5'000-$10'000 | $1'000-$2'000 | $100-$500 |
| [Wallet](https://wallet.nimiq.com/)                     | $3'000          | $1'000         | $500          | $200      |
| [Keyguard](https://keyguard.nimiq.com/)                 | $3'000          | $1'000         | $500          | $200      |

Our rewards are based on severity per CVSS (the Common Vulnerability Scoring Standard). Please note these are general guidelines, and that reward decisions are up to the discretion of Nimiq. All payouts are made in BTC and NIM equivalent at time of payment.

## Program Rules

- Please provide detailed reports with reproducible steps. If the report is not detailed enough to reproduce the issue, the issue will not be eligible for a reward.
- Submit one vulnerability per report, unless you need to chain vulnerabilities to provide impact.
- When duplicates occur, we only award the first report that was received (provided that it can be fully reproduced).
- Multiple vulnerabilities caused by one underlying issue will be awarded one bounty.
- Social engineering (e.g. phishing, vishing, smishing) is prohibited.
- Make a good faith effort to avoid privacy violations, destruction of data, and interruption or degradation of our service.
- Only interact with accounts you own or with the explicit permission of the account holder.

## Good Vulnerability Starting Points (IN SCOPE)

We are looking to find security issues affecting our blockchain protocol, its implementations as well as its integration with supported [Ledger](https://www.ledgerwallet.com) hardware wallet. As such, we would like to find vulnerabilities of the following types (other types could be in scope too, but this list provides a good starting point):

- Bugs in our implementation of the cryptographic primitives
- Remote Code Execution
- Theft (unauthorized movement of funds, access to private keys)
- Inflation (creation of coins by any method different from validating/staking rewards)
- Netsplit (preventing a part of the peer to peer network from communicating with the other part of the network in a way that could be applied generically)
- Denial of Service:
  - Create invalid blockchain state
  - Overload the whole network
  - Overload a single client
  - Crash a client
  - Stall a client
  - Disconnect client
  - Create invalid client state

To find these vulnerabilities, you can use both the source code directly, as well as our testnet (the instructions to access both of them are in the "[In Scope](#in-scope)" section below).

NOTE: When reporting vulnerabilities, please consider (1) attack scenario / exploitability, and (2) security impact of the bug

Since our main interest is in finding security problems affecting our blockchain protocol, its implementations, and its Ledger Nano S hardware wallet integration, the following issues are considered out of scope:

- Any issues that are outside what is defined in the "[In Scope](#in-scope)" section below.
- As well as any issue not directly related to the code and it's functionality. For example, usability, user experience.
- Security breaches that are only possible when having full access to the client machine. For example using a key tracker or reading/monitoring the computer memory.
- Privacy related vulnerabilities (e.g. leaking your address to other peers on the network).
- Attacks requiring MITM or physical access to a user's device.
- Previously known vulnerable libraries without a working Proof of Concept.
- Any activity that could lead to the disruption of our service (DoS), outside of the testnet.
- Any problem on the servers where the nodes for the private testnet are running that is unrelated to our specific software (i.e. only the official client running on port 8080 is in scope).
- Any issues already reported publicly on [GitHub](https://github.com/nimiq/core-rs-albatross/issues).
- Zero-Knowledge keys setup outside of MainNet: Since we have fixed seeds for the unit tests/devnet that are obviously insecure, any issues related to the ZKP key setup outside of MainNet will be considered out of scope for this program.
- [Testnet wallet](https://wallet.nimiq-testnet.com/).
- DoS vulnerabilities in the RPC server, except for client crashes or deadlocks.

To get you started, you can download the [Burp Suite Project Configuration file](#in-scope). To learn more about Nimiq, [create your account](https://wallet.nimiq.com/?onboarding=signup), [join the community](https://t.me/Nimiq) and find out more on [nimiq.com](/).

Thank you for helping keep Nimiq and our users safe!

## In Scope

The Nimiq Wallet is the main place where our users interact with the blockchain and with the funds protected by their keys (usually stored in the Keyguard) which means we expect it to be highly secure. Examples of the kind of exploits we're interested in are: opening a fake Keyguard from the Nimiq Wallet which would allow an attacker to trick the user into entering their keys and stealing them, deleting a user's key without them explicitly wanting to, hijacking the "copy to clipboard" functionality to copy the wrong address or displaying the wrong address when the user is asked to verify the address on the Ledger Nano S/X.

The source code for the Wallet is available [here](https://github.com/nimiq/wallet) in case it can help you to find security issues with it, but please keep in mind we're looking for bugs that can be actually exploitable in the current deployment of the keyguard (i.e. in [https://wallet.nimiq.com/](https://wallet.nimiq.com/)).

The Nimiq Keyguard is designed to be the place where the keys of the users are stored (encrypted) if they are not using a supported hardware wallet and as such it is very important for us to make sure that the Keyguard is very secure. Examples of the kind of exploits we are interested in are: unauthorized key extraction, unauthorized signing of transactions, displaying information when signing a transaction that is different from the actual data in the signed transaction, etc. These exploits need to be due to a problem in the Keyguard itself, so things like social engineering or using malware on a user computer are not considered valid reports.

The source code for the Keyguard is available [here](https://github.com/nimiq/keyguard) in case it can help you to find security issues with it, but please keep in mind we're looking for bugs that can be actually exploitable in the current deployment of the Keyguard (i.e. in [https://keyguard.nimiq.com/](https://keyguard.nimiq.com/)).

[](https://github.com/nimiq/core-rs-albatross/)

The src/ folder on the albatross branch of this repository has all the source code for our official Rust implementation that we look forward to being tested.

Check out the [developers documentation](https://www.nimiq.dev) for more information and steps on running your own client. There is also a running version of this code in the testnet, you can find the instructions to test against it in the "Blockchain testnet" section below.

[](https://github.com/nimiq/ledger-app-nimiq)

The Nimiq Ledger App is designed to allow [Ledger](https://www.ledgerwallet.com) users to create a Nimiq Account with the private key safely stored in their hardware wallet.

For this particular asset we're looking to find bugs that would allow an attacker to get an user's private key (or any other secret data that can be used to validly sign transactions) or that would allow an attacker to create a transaction with fields that would be displayed incorrectly on the Ledger's screen in a way that would result in a valid transaction to a different address or with a different amount than what the user expected.

Other less critical bugs could also be valid (for example a bug that can cause the app to "freeze" or "crash").

Only bugs in the Nimiq Ledger App itself are valid, more general bugs that apply to the Ledger Hardware Wallet or its Operating System should be sent [to Ledger directly](https://www.ledgerwallet.com/products/ledger-nano-s).

[Source Code](https://github.com/nimiq/hub)

The Nimiq Hub provides a unified interface for all Nimiq accounts, addresses, and contracts. It is the primary UI for Nimiq users to manage their accounts and provides websites and apps with a concise API to interact with their users' Nimiq addresses.

## Other: Blockchain Testnet

The regular Nimiq Testnet can be used for the purposes of this program and it consists of our official client implementation running on the following servers:

- wss://seed1.pos.nimiq-testnet.com:8443
- wss://seed2.pos.nimiq-testnet.com:8443
- wss://seed3.pos.nimiq-testnet.com:8443
- wss://seed4.pos.nimiq-testnet.com:8443

The easiest way to connect to the Testnet is by following [this guide](https://github.com/nimiq/core-rs-albatross/blob/albatross/README.md#testnet).

## Out of Scope

1. Any issues already [reported publicly on GitHub](https://github.com/nimiq/core-rs-albatross/issues).
1. Any activity that could lead to the disruption of any of our services outside of the PoS MainNet or the [PoS TestNet](https://github.com/nimiq/core-rs-albatross?tab=readme-ov-file#testnet).
1. Any issue specific to the TestNet deployment that is unrelated to our code.
1. Privacy related vulnerabilities (e.g., leaking your address to other peers on the network).
1. Previously known vulnerable libraries without a working Proof of Concept.
1. Sections of the code intended to be used for testing purposes.
1. Zero-Knowledge keys setup outside of MainNet: Since we have fixed seeds for the unit tests/devnet that are obviously insecure.
1. [Testnet wallet](https://wallet.nimiq-testnet.com/).
1. DoS vulnerabilities in the RPC server, except for client crashes or deadlocks.

## Mailing List

By subscribing to this list, please be assured that you will not be receiving our regular newsletters or any other promotional content. This mailing list is solely dedicated to providing notifications and updates about our ongoing Bug Bounty Program.

In the coming months, we will be expanding the program and adding new items to the "In Scope" section. Your continued support, participation, and vigilance are critical to the security and success of Nimiq. By staying connected through this mailing list, you'll be the first to know about any additions or changes in our bug bounty activities.

We greatly appreciate your support and cooperation in keeping Nimiq secure.

Input your email to subscribe to the Bug Bounty Program Mailing List

<!--Zoho Campaigns Web-Optin Form Starts Here-->
<section id="customForm" class="bg-neutral-100">
  <div name="SIGNUP_BODY" changeitem="BG_IMAGE" style="position: relative; font-family: Arial; margin: auto; width: auto; max-width: 440px; height: 204px">
    <div>
      <form method="POST" id="zcampaignOptinForm" action="https://qgqlpk-zcmp.maillist-manage.eu/weboptin.zc" target="_zcSignup" onsubmit="zcScptlessSubmit(this)" style="margin: 0px; width: 100%; color: rgb(255, 255, 255); padding: 0px;" class="flex flex-col">
        <div>
          <input type="email" placeholder="Email" changeitem="SIGNUP_FORM_FIELD" name="CONTACT_EMAIL" id="EMBED_FORM_EMAIL_LABEL" style="border-radius: 1000px;" class="shadow nq-input-box">
        </div>
        <script>function toggleSubmitButton() { var checkbox = document.getElementById("consentCheckbox"); var submitButton = document.getElementById("zcWebOptin"); if (checkbox.checked) { submitButton.removeAttribute("disabled"); } else { submitButton.setAttribute("disabled", "disabled"); }}</script>
        <div style="margin: 16px; display: flex; color:rgba(31,35,72,.6);">
          <input type="checkbox" onchange="toggleSubmitButton();" id="consentCheckbox" style="vertical-align: middle; margin-right: 5px;align-self: start;margin-top: 2px;">
          <label for="consentCheckbox" style="font-size: 13px; text-align: left;">I give my consent and agree to the terms of the <a href="https://www.nimiq.com/privacy/" target="_blank">Privacy Notice</a>.</label>
        </div>
        <div style="position: relative; display: inline-block; align-self:end">
          <input type="submit" disabled name="SIGNUP_SUBMIT_BUTTON" id="zcWebOptin" nq-pill nq-pill-blue value="Sign Up" nq-arrow style="margin-right: 0 !important;">
        </div>
        <input type="hidden" id="fieldBorder" value="">
        <input type="hidden" id="submitType" name="submitType" value="optinCustomView">
        <input type="hidden" id="emailReportId" name="emailReportId" value="">
        <input type="hidden" id="formType" name="formType" value="QuickForm">
        <input type="hidden" name="zx" id="cmpZuid" value="14ad931432">
        <input type="hidden" name="zcvers" value="2.0">
        <input type="hidden" name="oldListIds" id="allCheckedListIds" value="">
        <input type="hidden" id="mode" name="mode" value="OptinCreateView">
        <input type="hidden" id="zcld" name="zcld" value="12110e502160a776">
        <input type="hidden" id="zctd" name="zctd" value="12110e502160a782">
        <input type="hidden" id="document_domain" value="">
        <input type="hidden" id="zc_Url" value="qgqlpk-zcmp.maillist-manage.eu">
        <input type="hidden" id="new_optin_response_in" value="0">
        <input type="hidden" id="duplicate_optin_response_in" value="0">
        <input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW">
        <input type="hidden" id="zc_formIx" name="zc_formIx" value="3zcfafd125d1f59083f519e6a68823c5073ef76dbfcdb8951f707ec2aa9b23ea98">
        <input type="hidden" id="viewFrom" value="URL_ACTION">
        <input type="hidden" id="scriptless" name="scriptless" value="yes">
        <input type="hidden" id="zc_spmSubmit" name="zc_spmSubmit" value="ZCSPMSUBMIT">
      </form>
    </div>
  </div>
</section>
<style>#zcWebOptin:disabled { opacity: 0.6 !important; cursor: not-allowed !important; }</style>
<script>function zcScptlessSubmit(parentNode){if(parentNode.querySelector("#zc_spmSubmit")){parentNode.querySelector("#zc_spmSubmit").remove();}parentNode.submit();}</script>
