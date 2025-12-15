const WPM = 225

export function calculateReadingTime(content: string): number {
  return Math.ceil(content.trim().split(/\s+/).length / WPM)
}
