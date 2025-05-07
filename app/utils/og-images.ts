export function setOgImage({ image, title, subline }: { image: object, title: string, subline: string }) {
  if (hasImage(image)) {
    defineOgImage({ url: image.url, alt: title })
  }
  else {
    defineOgImageComponent('OgImageBlog', {
      title,
      subline,
    })
  }
}
