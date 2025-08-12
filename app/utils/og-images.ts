type OgImageType = 'home' | 'page' | 'blog'

interface SetOgImageOptions {
  image?: object
  title: string
  subline: string
  type?: OgImageType
}

export function setOgImage({ image, title, subline, type = 'blog' }: SetOgImageOptions) {
  const isNuxtHub = useRuntimeConfig().public.environment.isNuxthubPreview || useRuntimeConfig().public.environment.isNuxthubProduction
  if (isNuxtHub)
    return

  if (image && hasImage(image)) {
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
