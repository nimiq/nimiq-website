import type { DateField, FilledLinkToMediaField, ImageField, LinkField, LinkToMediaField, RichTextField } from '@prismicio/client'
import { asDate, asLink, asText, isFilled } from '@prismicio/client'

export const hasLink = (link?: LinkField) => isFilled.link(link)
export const hasImage = (image?: ImageField) => isFilled.image(image)
export const hasText = (text?: RichTextField) => isFilled.richText(text)
export const getText = (text?: RichTextField) => asText(text) || ''
export const getLink = (text?: LinkField) => asLink(text) || ''
export const getDate = (text?: DateField) => asDate(text) || ''
export function getUrl(obj?: LinkToMediaField | LinkToMediaField) {
  if (!obj)
    return ''
  return (obj as FilledLinkToMediaField).url
}

export function getAspectRatio({ dimensions }: ImageField) {
  if (!dimensions)
    return 0
  return (dimensions.width) / dimensions.height
}
