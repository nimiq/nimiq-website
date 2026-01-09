import { marked } from 'marked'

export function useMarkdownParse(getter: () => string | undefined) {
  return computed(() => {
    const content = getter()
    if (!content)
      return ''
    return marked.parse(content, { async: false }) as string
  })
}
