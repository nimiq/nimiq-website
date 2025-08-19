import { transformToLocalPath } from './prismic-images'

export function transformImageFieldToLocal<T extends { url: string }>(field: T): T {
  if (!field.url)
    return field

  return {
    ...field,
    url: transformToLocalPath(field.url),
  }
}

export function transformResponsiveImageFieldToLocal<T extends { url: string, [key: string]: any }>(field: T): T {
  const transformed = { ...transformImageFieldToLocal(field) }

  const responsiveViews = ['Lg', 'Md', 'Sm', 'Xs'] as const

  for (const viewKey of responsiveViews) {
    const responsiveField = field[viewKey]
    if (responsiveField?.url) {
      (transformed as any)[viewKey] = {
        ...responsiveField,
        url: transformToLocalPath(responsiveField.url),
      }
    }
  }

  return transformed
}

export { isPrismicImage, transformToLocalPath } from './prismic-images'
