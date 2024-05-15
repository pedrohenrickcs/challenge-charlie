export interface ContentSearch {
  event: string
  value: string
}

export interface ContentWeather {
  description: string
}
export interface ContentMain {
  feels_like: number
  humidity: number
  pressure: number
  weather: ContentWeather
}

export interface ContentWind {
  speed: number
}

export interface Content {
  main: ContentMain
  weather: ContentWeather[]
  wind: ContentWind
}
export interface Coordinates {
  latitude: number
  longitude: number
}
export interface Location {
  city: string
  state: string
}

export interface Value {
  value: string
}
export interface ContentKey {
  key: string
  target: Value
  event: string
}

export interface ContentImage {
  images: []
  url: string
}

export interface Image {
  dataImage: ContentImage
}
