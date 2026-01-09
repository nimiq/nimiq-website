const WPM = 225

export function calculateReadingTime(content: string): number {
  if (!content || typeof content !== 'string')
    return 0
  return Math.ceil(content.trim().split(/\s+/).length / WPM)
}
