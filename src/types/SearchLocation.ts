export interface Location {
  city: string
  state: string
}

export interface Coordinates {
  latitude: number
  longitude: number
}
export interface ContentSearch {
  defaultValue: Location
  handleKey: (event: React.KeyboardEvent<HTMLInputElement>) => void
  coordinates: Coordinates | null
}
