import type { ImageField } from '@prismicio/client'
import { transformImageUrl } from './prismic-images-client'

export function transformImageFieldToLocal(baseUrl: string, field: ImageField): ImageField {
  if (!field.url)
    return field

  return {
    ...field,
    url: transformImageUrl(baseUrl, field.url),
  }
}

export function transformResponsiveImageFieldToLocal(baseUrl: string, _field: ImageField): ImageField {
  const field: any = { ..._field }
  if (field.url) {
    field.url = transformImageUrl(baseUrl, field.url)
    return field
  }

  const responsiveViews = ['Lg', 'Md', 'Sm', 'Xs'] as const

  for (const viewKey of responsiveViews) {
    const responsiveField = field[viewKey as any]
    if (!responsiveField?.url) {
      console.warn(`[transformResponsiveImageFieldToLocal] The responsive field ${viewKey} has no url.`)
      continue
    }
    field[viewKey] = {
      ...responsiveField,
      url: transformImageUrl(baseUrl, responsiveField.url),
    }
  }

  return field
}
