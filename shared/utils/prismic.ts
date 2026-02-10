import type { DateField, ImageField, LinkField, LinkToMediaField, RichTextField } from '@prismicio/client'
import { asDate, asImageSrc, asLink, asText, isFilled } from '@prismicio/client'

export const hasLink = (link?: LinkField) => isFilled.link(link)
export const hasImage = (image?: ImageField) => isFilled.image(image)
export const hasText = (text?: RichTextField) => isFilled.richText(text)
export const getText = (text?: RichTextField) => asText(text) || ''
export const getLink = (text?: LinkField) => asLink(text) || ''
export const getDate = (text?: DateField) => asDate(text) || ''
export function getImage(img?: ImageField) {
  if (!img?.url)
    return ''
  // Handle already-transformed local URLs
  if (img.url.startsWith('/'))
    return img.url
  return asImageSrc(img) || ''
}
export function getUrl(obj?: LinkField | LinkToMediaField) {
  if (!obj)
    return ''
  const link = obj as LinkField
  if (isFilled.link(link))
    return link.url || ''

  const media = obj as LinkToMediaField
  if (isFilled.linkToMedia(media))
    return media.url || ''
  return ''
}

export function getAspectRatio({ dimensions }: ImageField) {
  if (!dimensions)
    return 0
  return (dimensions.width) / dimensions.height
}
