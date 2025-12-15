import type { MaybeRefOrGetter } from 'vue'
import { marked } from 'marked'

export function useMarkdownParse(content: MaybeRefOrGetter<string | undefined>) {
  return computed(() => {
    const value = toValue(content)
    return value ? marked.parse(value, { async: false }) as string : ''
  })
}
