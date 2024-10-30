import type { ImageField, LinkField, RichTextField } from '@prismicio/client'

export const hasLink = (link?: LinkField) => usePrismic().isFilled.link(link)
export const hasImage = (image?: ImageField) => usePrismic().isFilled.image(image)
export const hasText = (text?: RichTextField) => usePrismic().isFilled.richText(text)
export const getText = (text?: RichTextField) => usePrismic().asText(text) || ''
export const getLink = (text?: LinkField) => usePrismic().asLink(text) || ''
