// TODO: Remove or refactor once Prismic is fully removed
// This file previously transformed Prismic image URLs to local proxied URLs

export interface ImageField {
  url?: string
  alt?: string | null
  dimensions?: { width: number, height: number }
}

export function transformImageFieldToLocal(_baseUrl: string, field: ImageField): ImageField {
  return field
}

export function transformResponsiveImageFieldToLocal(_baseUrl: string, field: ImageField): ImageField {
  return field
}
