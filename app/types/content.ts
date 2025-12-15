// Shared content types - consolidated from 47+ interfaces to ~10 base types

export interface BaseItem { headline: string, subline?: string }
export interface MediaItem extends BaseItem { image?: string, icon?: string, iconName?: string }
export interface LinkableItem extends BaseItem { linkHref?: string, linkLabel?: string }
export interface CardItem extends MediaItem, LinkableItem { color?: string }
export interface ContentItem { content: string }
export interface SlideItem { slide: string }
export interface AppItem { title: string, description: string, preview: string, link: string, item: string, highlight?: boolean }
export interface TeamMember { fullName: string, role: string, description: string, picture?: string, github?: string, linkedin?: string, twitter?: string }
export interface BannerItem extends BaseItem { link?: string, label?: string, backgroundPattern?: string }
export interface TokenItem { color: string, title: string, percentage: number, description: string }
export interface SocialItem { category: string, socialMedia: string, socialMediaItem?: string }
export interface LogoItem { logo: string, link: string }
export interface OrganizationItem { logo: string, url: string }
