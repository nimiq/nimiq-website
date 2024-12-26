import type { DateField, FilledLinkToMediaField, ImageField, LinkField, LinkToMediaField, RichTextField } from '@prismicio/client'

export const hasLink = (link?: LinkField) => usePrismic().isFilled.link(link)
export const hasImage = (image?: ImageField) => usePrismic().isFilled.image(image)
export const hasText = (text?: RichTextField) => usePrismic().isFilled.richText(text)
export const getText = (text?: RichTextField) => usePrismic().asText(text) || ''
export const getLink = (text?: LinkField) => usePrismic().asLink(text) || ''
export const getDate = (text?: DateField) => usePrismic().asDate(text) || ''
export function getUrl(obj?: LinkToMediaField) {
  if (!obj)
    return ''
  return (obj as FilledLinkToMediaField).url
}

export function getAspectRatio({ dimensions }: ImageField) {
  if (!dimensions)
    return 0
  return (dimensions.width) / dimensions.height
}
