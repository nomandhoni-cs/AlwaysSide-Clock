export interface Timezone {
  name: string
  zone: string
}

export interface TimezoneGroup {
  group: string
  zones: Timezone[]
}
