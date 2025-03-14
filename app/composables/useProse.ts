import type { Slice } from '@prismicio/client'
import type { BlogPageDocument, RichTextSlice } from '~~/prismicio-types'

export function useProse({ data, uid }: BlogPageDocument) {
  const { body, text, meta_description, meta_title, subline } = data
  const richTextSlices = body.filter((slice: Slice) => slice.slice_type === 'rich_text') as RichTextSlice[]
  const texts = richTextSlices
    .flatMap(rt => rt.primary.richText.map(rt => 'text' in rt ? rt.text : ''))
    .join(' ')

  const prose = texts || text.filter((node: any) => node.text).map(t => 'text' in t ? t.text as string : '').join(' ') || ''

  const WPM = 225
  const readingTime = Math.ceil(prose.trim().split(/\s+/).length / WPM)

  const meta = {
    title: meta_title || getText(data.title),
    description: meta_description || prose.trim().split(/(?<=[.?!:;])\s/).slice(0, 2).join(' '),
  }

  const abstract = getText(subline).slice(0, 120)

  if (!data.publish_date)
    throw new Error(`Missing publish_date for ${uid}`)
  if (!data.image)
    throw new Error(`Missing image for ${uid}`)

  return {
    prose,
    readingTime,
    meta,
    abstract,
    uid,
    hasImage: hasImage(data.image),
    href: `/blog/${uid}`,
    publishDate: data.publish_date!,
    draft: data.draft,
    image: data.image || data.meta_image,
    title: data.title,
    authors: data.authors,
    // img,
  }
}
