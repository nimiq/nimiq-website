type OgImageType = 'home' | 'page' | 'blog'

interface SetOgImageOptions {
  image?: string
  title: string
  subline: string
  type?: OgImageType
}

export function setOgImage({ image, title, subline, type = 'page' }: SetOgImageOptions) {
  if (useRuntimeConfig().public.useNuxtHub)
    return

  if (image) {
    defineOgImage({ url: image, alt: title })
  }
  else {
    const componentMap: Record<OgImageType, string> = {
      home: 'OgImageHome',
      page: 'OgImagePage',
      blog: 'OgImagePage', // Use page component for blog as fallback
    }

    defineOgImageComponent(componentMap[type], { title, subline })
  }
}
