import type { Slice } from '@prismicio/client'
import type { BlogPageDocument, RichTextSlice } from '~~/prismicio-types'

export function useProse(_post: MaybeRef<BlogPageDocument | null>) {
  const post = toRef(_post)
  const prose = computed(() => {
    if (!post.value)
      return ''
    if ((post.value.data.body.length || 0) > 0) {
      const richTextSlice: RichTextSlice[] | undefined = post.value.data.body.filter((slice: Slice) => slice.slice_type === 'rich_text') as RichTextSlice[]
      const texts = richTextSlice?.map(rt => rt.primary.richText.map(rt => 'text' in rt ? rt.text : ''))
      return texts?.join(' ') || ''
    }
    else {
      return post.value.data.text.filter((node: any) => node.text).map(t => 'text' in t ? t.text as string : '').join(' ') || ''
    }
  })

  const WPM = 225
  const readingTime = computed(() => Math.ceil(prose.value.trim().split(/\s+/).length / WPM))

  return {
    prose,
    readingTime,
  }
}
