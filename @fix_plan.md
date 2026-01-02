# Fix Plan - Visual Regression

## Priority 1: Homepage
- [ ] Fix section count mismatch (local=5, prod=6)
- [ ] Fix section height differences
- [ ] Match all section backgrounds

## Priority 2: Core Pages
- [ ] /about - Match structure and styling
- [ ] /apps - Match structure and styling
- [ ] /wallet - Match structure and styling
- [ ] /staking - Match structure and styling

## Priority 3: Product Pages
- [ ] /nimiq-pay
- [ ] /buy-and-sell
- [ ] /cryptopaymentlink

## Priority 4: Community/Info Pages
- [ ] /community
- [ ] /contact
- [ ] /team
- [ ] /roadmap
- [ ] /litepaper
- [ ] /onepager

## Priority 5: Blog
- [ ] /blog (list page)
- [ ] /blog/multisig-shared-wallet
- [ ] /blog/virtual-nimiq-cards
- [ ] /blog/nimiq-proof-of-stake-is-now-live

## Priority 6: Legal/Other
- [ ] /newsletter
- [ ] /oasis
- [ ] /terms
- [ ] /activation-terms
- [ ] /bug-bounty

## Cleanup Tasks (as encountered)
- [ ] Remove unused components
- [ ] Rename unclear composables
- [ ] Simplify content structure
- [ ] Document intentional changes

## Notes
- Compare with ~/nimiq/website-old/ for reference
- Use pnpm patch if nimiq-css needs updates
- Check both mobile and desktop viewports
