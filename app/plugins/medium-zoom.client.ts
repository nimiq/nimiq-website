import mediumZoom from 'medium-zoom'

export default defineNuxtPlugin((nuxtApp) => {
  const zoom = mediumZoom([], { margin: 24, background: 'var(--color-neutral-0)' })

  nuxtApp.hook('page:finish', () => {
    zoom.detach()
    zoom.attach(':is(.nq-prose, [nq-prose]) img:not(a *)')
  })
})
