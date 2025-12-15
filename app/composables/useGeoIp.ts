export interface LatLng {
  lat: number
  lng: number
}

export interface GeoIpResponse {
  location?: { longitude?: number, latitude?: number }
  country?: string
  city?: string
  city_names?: { [language: string]: string }
}

export function useGeoIp() {
  async function locate(host?: string) {
    const url = new URL(`https://geoip.nimiq-network.com:8443/v1/locate`)
    if (host)
      url.searchParams.set('host', host)
    const res = await $fetch(url.href)
    const { location } = res as GeoIpResponse
    if (!location || !location.latitude || !location.longitude)
      throw new Error('Invalid GeoIP response')
    return { lat: location.latitude, lng: location.longitude } as LatLng
  }

  return { locate }
}
