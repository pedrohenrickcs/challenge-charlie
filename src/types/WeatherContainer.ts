export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

export interface Main {
  temp: number
  feels_like: number
  pressure: number
  humidity: number
}

export interface Wind {
  speed: number
  deg: number
}

export interface RootContent {
  weather: Weather[]
  main: Main
  wind: Wind
}

export interface List {
  main: Main
  weather: Weather[]
  wind: Wind
}

export interface Coord {
  lat: number
  lon: number
}

export interface RootNextDays {
  cod: string
  message: number
  cnt: number
  list: List[]
}

export interface ContentData {
  data: RootContent
  dataNextDays: RootNextDays
}
