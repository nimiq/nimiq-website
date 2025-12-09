type OgImageType = 'home' | 'page' | 'blog'

interface OgImage {
  url?: string
  alt?: string
}

interface SetOgImageOptions {
  image?: OgImage
  title: string
  subline: string
  type?: OgImageType
}

export function setOgImage({ image, title, subline, type = 'blog' }: SetOgImageOptions) {
  if (useRuntimeConfig().public.useNuxtHub)
    return

  if (image?.url) {
    defineOgImage({ url: image.url, alt: title })
  }
  else {
    const componentMap: Record<OgImageType, string> = {
      home: 'OgImageHome',
      page: 'OgImagePage',
      blog: 'OgImageBlog',
    }

    defineOgImageComponent(componentMap[type], {
      title,
      subline,
    })
  }
}
