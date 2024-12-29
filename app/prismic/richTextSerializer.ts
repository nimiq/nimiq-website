import type { RTLabelNode } from '@prismicio/client'
import type { RichTextMapSerializer } from '@prismicio/richtext'

export default {
  label: (args) => {
    const node = args.node as RTLabelNode
    const label = node.data.label
    if (label === 'HTML')
      return args.text
  },
} satisfies RichTextMapSerializer<string>
