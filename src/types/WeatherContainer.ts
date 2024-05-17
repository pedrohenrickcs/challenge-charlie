export interface ContentWeather {
  description: string
  icon: string
}
export interface ContentMain {
  feels_like: number
  humidity: number
  pressure: number
  weather: ContentWeather
}
export interface ContentList {
  main: ContentMain
}
export interface ContentWind {
  speed: number
}
export interface Content {
  list: ContentList[]
  main: ContentMain
  weather: ContentWeather[]
  wind: ContentWind
}

export interface ContentData {
  data: Content | undefined
  dataNextDays: Content | undefined
}
